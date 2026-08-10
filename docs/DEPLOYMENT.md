# Deployment handoff

This repository contains one site with three user-selectable visual variants:
`archive`, `night`, and `silly`. Do not deploy them as separate sites. The
selected variant and UI language are stored in the visitor's `localStorage`.

## Source of truth

- GitHub: `wellskii/cmonbollo`
- Canonical domain: `https://cmonbollo.com`
- OpenAI Sites project: `appgprj_6a6a7143643c8191b2a7cf20fa772220`
- Sites metadata: `.openai/hosting.json`
- Framework: vinext / Next / React
- Build output: `dist/`

Reuse the existing Sites project. Do not create a new project merely because a
new agent or deployment session is being used.

## Build

Use Node.js 22.13 or newer and the committed lockfile:

```bash
npm ci
npm run build
```

In Windows PowerShell, use `npm.cmd ci` and `npm.cmd run build` if the local
execution policy blocks the `npm.ps1` shim. This is a shell-policy workaround,
not a project-specific build step.

The repository ignores `node_modules`, `dist`, `.wrangler`, deployment
archives, raw transcripts, model downloads, local environment files, and
secrets. Keep it that way.

## Required pre-deploy checks

1. Confirm `npm run build` succeeds.
2. Confirm `.openai/hosting.json` still contains the project ID above.
3. Confirm all six stable `/audio/*.mp3` paths are present.
4. Confirm `/character-atlas.png` and `/song-atlas-confirmed.png` are present.
5. Check Italian, Russian, and English UI copy together whenever content changes.
6. Check that starting one audio player pauses the previously playing player.

## OpenAI Sites deployment

Use the Sites building and hosting workflows available to the agent:

1. Push the exact commit being deployed to GitHub.
2. Build that exact commit.
3. Package the contents of `dist/` as the Sites artifact.
4. Save a new version on project `appgprj_6a6a7143643c8191b2a7cf20fa772220`
   and record the Git commit SHA as the source version.
5. Create a private deployment and wait until it reports a terminal status.
6. Open the resulting URL and smoke-test the three themes, all three UI languages,
   one audio handoff, lyrics disclosure, and image assets.

The project metadata deliberately contains no credentials. Obtain any temporary
source or upload credentials through the Sites workflow; never write them into
the repository or a local environment file.

## Custom domain

The repository cannot change registrar DNS. After a successful hosted deploy,
follow `docs/DOMAIN.md`: add the apex domain in the host, copy the exact records
the host supplies, redirect `www` to the apex, and verify HTTPS. Do not guess DNS
records.

## Current content contract

The six English lyrics were supplied by the band on 2026-08-09 and are marked
`confirmed`. The Russian translations were rewritten against those versions.
Future alternate recordings or lyric changes begin as drafts and must follow
`docs/CONTENT-GUIDE.md`.
