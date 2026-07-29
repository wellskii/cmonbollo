# Self-hosting on a plain Linux server

The site is a vinext build targeting Cloudflare-compatible Workers output, but
`dist/server/index.js` is a standard module exporting `{ fetch(request, env, ctx) }`
and runs under Node 22 without workerd. `server/node-server.mjs` is that adapter:
it serves `dist/client` from disk (correct content types, immutable caching for
`/assets`, `/audio`, `/fonts`, and `Range` support for audio) and forwards
everything else to the worker with a filesystem-backed `env.ASSETS`.

## Current production deployment

- Host: `nl-vmpico` (`147.90.11.154`, Amsterdam) — shared with other services
- Path: `/srv/cmonbollo` (only `dist/` and `server/node-server.mjs`)
- Runtime: NodeSource Node 22, `cmonbollo.service`, listening on `127.0.0.1:3010`
- nginx vhost `cmonbollo` proxies `cmonbollo.com` and `www.cmonbollo.com`

The server has ~1 GB RAM, so builds happen locally, not on the server.

## Release

```bash
npm ci
npm run build
rsync -a --delete dist/ root@147.90.11.154:/srv/cmonbollo/dist/
rsync -a server/node-server.mjs root@147.90.11.154:/srv/cmonbollo/server/
ssh root@147.90.11.154 systemctl restart cmonbollo
```

`node_modules` is not needed on the server.

## systemd unit

```ini
[Unit]
Description=Cmon Bollo website
After=network.target

[Service]
WorkingDirectory=/srv/cmonbollo
ExecStart=/usr/bin/node /srv/cmonbollo/server/node-server.mjs
Environment=NODE_ENV=production
Environment=HOST=127.0.0.1
Environment=PORT=3010
Restart=always
RestartSec=3

[Install]
WantedBy=multi-user.target
```

## DNS

```text
A   cmonbollo.com       147.90.11.154
A   www.cmonbollo.com   147.90.11.154
```

The server has no global IPv6 address, so no `AAAA` records. After DNS
propagates, issue certificates and enable the www → apex redirect:

```bash
certbot --nginx -d cmonbollo.com -d www.cmonbollo.com
```
