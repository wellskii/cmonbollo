import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the confirmed reunion concert", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /16 agosto 2026/);
  assert.match(html, /Галактионовская, 40/);
  assert.match(html, /festival-illustration-2026\.png/);
  assert.match(html, /https:\/\/vk\.ru\/justtofeelsomethingfest63/);
  assert.match(html, /href="\/poster-02"/);
  assert.doesNotMatch(html, /soundcheck|саундчек/i);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape/i);

  const runningOrder = [
    "C’MON, BOLLO!",
    "несейчас",
    "Марина, я умираю!",
    "ВИНОВАТЫ БУДНИ",
    "iknownothing",
  ];
  let previousIndex = -1;
  for (const band of runningOrder) {
    const index = html.indexOf(band, previousIndex + 1);
    assert.ok(index > previousIndex, `${band} must appear in public set order`);
    previousIndex = index;
  }
});

test("server-renders the standalone typographic poster", async () => {
  const response = await render("/poster-02");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /АФИША 02/);
  assert.match(html, /ЧТО-ТО/);
  assert.match(html, /ПОЧУВСТВОВАТЬ/);
  assert.match(html, /ГАЛАКТИОНОВСКАЯ, 40/);
  assert.match(html, /C’MON, BOLLO!/);
  assert.match(html, /iknownothing/);
  assert.doesNotMatch(html, /soundcheck|саундчек/i);
});

test("keeps festival facts typed and trilingual", async () => {
  const source = await readFile(
    new URL("../app/festival.ts", import.meta.url),
    "utf8",
  );

  assert.match(source, /export type FestivalLanguage = "it" \| "ru" \| "en"/);
  assert.match(source, /dateIso: "2026-08-16"/);
  assert.match(source, /doors: "18:00"/);
  assert.match(source, /setTime: "18:30"/);
  assert.match(source, /setTime: "19:10"/);
  assert.match(source, /setTime: "20:00"/);
  assert.match(source, /setTime: "20:50"/);
  assert.match(source, /setTime: "21:40"/);
  assert.match(source, /\bit:\s*\{/);
  assert.match(source, /\bru:\s*\{/);
  assert.match(source, /\ben:\s*\{/);
});
