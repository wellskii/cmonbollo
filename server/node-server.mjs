import { createReadStream } from "node:fs";
import { stat } from "node:fs/promises";
import { createServer } from "node:http";
import { dirname, extname, join, normalize, relative } from "node:path";
import { Readable } from "node:stream";
import { pipeline } from "node:stream/promises";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const clientRoot = join(root, "dist", "client");
const port = Number.parseInt(process.env.PORT ?? "3010", 10);
const host = process.env.HOST ?? "127.0.0.1";

const contentTypes = {
  ".css": "text/css; charset=utf-8",
  ".gif": "image/gif",
  ".html": "text/html; charset=utf-8",
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".m4a": "audio/mp4",
  ".mp3": "audio/mpeg",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".wasm": "application/wasm",
  ".webp": "image/webp",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
};

function assetPath(pathname) {
  let decoded;
  try {
    decoded = decodeURIComponent(pathname);
  } catch {
    return null;
  }
  const path = normalize(join(clientRoot, decoded.replace(/^\/+/, "")));
  return relative(clientRoot, path).startsWith("..") ? null : path;
}

async function findAsset(pathname) {
  const path = assetPath(pathname);
  if (!path) return null;

  let info;
  try {
    info = await stat(path);
  } catch {
    return null;
  }
  if (!info.isFile()) return null;
  return { path, info };
}

function assetHeaders(pathname, path, info) {
  const headers = new Headers({
    "Content-Length": String(info.size),
    "Content-Type": contentTypes[extname(path).toLowerCase()] ?? "application/octet-stream",
    "Last-Modified": info.mtime.toUTCString(),
  });
  if (pathname.startsWith("/assets/")) {
    headers.set("Cache-Control", "public, max-age=31536000, immutable");
  } else if (pathname.startsWith("/audio/") || pathname.startsWith("/fonts/")) {
    headers.set("Cache-Control", "public, max-age=31536000, immutable");
  }
  return headers;
}

function rangeFor(request, info) {
  const range = request.headers.get("range");
  if (!range) return null;
  const match = /^bytes=(\d*)-(\d*)$/.exec(range);
  if (!match) return null;
  const start = match[1] ? Number(match[1]) : Math.max(0, info.size - Number(match[2] || 0));
  const end = match[2] ? Number(match[2]) : info.size - 1;
  if (start > end || start < 0 || end >= info.size) {
    return { status: 416 };
  }
  return { start, end, status: 206 };
}

function assetResponse(request, pathname, asset) {
  if (!asset) return new Response("Not Found", { status: 404 });
  const { path, info } = asset;
  const headers = assetHeaders(pathname, path, info);
  const range = rangeFor(request, info);
  if (range?.status === 416) {
    return new Response(null, { status: 416, headers: { "Content-Range": `bytes */${info.size}` } });
  }
  if (range) {
    headers.set("Content-Range", `bytes ${range.start}-${range.end}/${info.size}`);
    headers.set("Content-Length", String(range.end - range.start + 1));
    headers.set("Accept-Ranges", "bytes");
    return new Response(
      request.method === "HEAD" ? null : createReadStream(path, { start: range.start, end: range.end }),
      { status: 206, headers },
    );
  }
  if (pathname.startsWith("/audio/")) headers.set("Accept-Ranges", "bytes");
  return new Response(request.method === "HEAD" ? null : createReadStream(path), { headers });
}

async function writeAsset(request, response, pathname, asset) {
  const { path, info } = asset;
  const headers = assetHeaders(pathname, path, info);
  const range = rangeFor(request, info);
  if (range?.status === 416) {
    response.writeHead(416, { "Content-Range": `bytes */${info.size}` });
    response.end();
    return;
  }
  let stream;
  if (range) {
    headers.set("Content-Range", `bytes ${range.start}-${range.end}/${info.size}`);
    headers.set("Content-Length", String(range.end - range.start + 1));
    headers.set("Accept-Ranges", "bytes");
    response.writeHead(206, Object.fromEntries(headers));
    stream = createReadStream(path, { start: range.start, end: range.end });
  } else {
    if (pathname.startsWith("/audio/")) headers.set("Accept-Ranges", "bytes");
    response.writeHead(200, Object.fromEntries(headers));
    stream = createReadStream(path);
  }
  if (request.method === "HEAD") {
    stream.destroy();
    response.end();
    return;
  }
  await pipeline(stream, response);
}

const { default: worker } = await import("../dist/server/index.js");
const env = {
  ASSETS: {
    fetch(request) {
      return findAsset(new URL(request.url).pathname).then((asset) =>
        assetResponse(request, new URL(request.url).pathname, asset),
      );
    },
  },
};
const ctx = {
  waitUntil() {},
  passThroughOnException() {},
};

const server = createServer(async (request, response) => {
  try {
    const url = new URL(request.url, `http://${request.headers.host || "localhost"}`);
    const method = request.method === "HEAD" ? "HEAD" : request.method;
    if (method === "GET" || method === "HEAD") {
      const asset = await findAsset(url.pathname);
      if (asset) {
        await writeAsset(new Request(url, { method, headers: request.headers }), response, url.pathname, asset);
        return;
      }
    }

    const body = method === "GET" || method === "HEAD" ? undefined : request;
    const fetchRequest = new Request(url, {
      body,
      headers: request.headers,
      method,
      duplex: body ? "half" : undefined,
    });
    const result = await worker.fetch(fetchRequest, env, ctx);
    response.writeHead(result.status, Object.fromEntries(result.headers));
    if (method !== "HEAD" && result.body) {
      await pipeline(Readable.fromWeb(result.body), response);
      return;
    }
    response.end();
  } catch (error) {
    console.error(error);
    if (!response.headersSent) {
      response.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
      response.end("Internal Server Error");
    } else {
      response.destroy(error);
    }
  }
});

server.listen(port, host, () => {
  console.log(`cmonbollo server listening on http://${host}:${port}`);
});

function shutdown() {
  server.close(() => process.exit(0));
}
process.once("SIGINT", shutdown);
process.once("SIGTERM", shutdown);
