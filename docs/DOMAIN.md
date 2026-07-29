# cmonbollo.com domain handoff

`app/layout.tsx` already uses `https://cmonbollo.com` as the canonical metadata
base. The repository itself cannot complete DNS ownership changes.

## Recommended final shape

- Primary: `https://cmonbollo.com`
- Redirect: `https://www.cmonbollo.com` → `https://cmonbollo.com`
- HTTPS: required
- Canonical metadata: apex domain

## To connect the domain

1. Deploy the current `main` commit to the chosen host.
2. Add `cmonbollo.com` as a custom domain in that host.
3. Copy the exact DNS records supplied by the host into the registrar's DNS
   panel. Do not guess A/AAAA/CNAME values.
4. Add `www` and configure it to redirect to the apex domain.
5. Wait for certificate issuance, then verify both HTTP-to-HTTPS and www-to-apex
   redirects.
6. Check that the social preview resolves from `/og.png`.

The current project can be deployed through OpenAI Sites because
`.openai/hosting.json` is present. If moving to a different Cloudflare-compatible
host, preserve the vinext build output contract or document the replacement in
this file.
