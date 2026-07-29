# Agent instructions

This repository is the official C'mon, Bollo! reunion site.

## Product rules

- Preserve the Italian/Russian language switch and keep both UI languages in
  sync.
- Song lyrics must remain available in English and Russian.
- Treat all lyrics as draft transcriptions until a band member confirms them.
- Preserve the self-deprecating fake-Italian premise: the singer is genuinely
  an Italian citizen; the band's roots and reunion concert are in Samara.
- Bollo is the multi-instrumentalist gorilla from *The Mighty Boosh* who loses
  his licence. The sheep is the unexplained mascot from the 2011 site.
- Do not replace archival images or audio with generic stock assets.
- Keep the dry-brush display typography; use ordinary readable type for body
  copy and long lyrics.

## Engineering rules

- Keep the current vinext/Next/React structure and npm lockfile.
- Keep `.openai/hosting.json` in the repository.
- Do not commit `node_modules`, `dist`, `.wrangler`, `work`, downloaded speech
  models, generated raw transcripts, secrets, or local environment files.
- Run `npm run build` after site changes.
- Keep MP3 filenames and public URLs stable unless every reference is updated.
- Prefer typed content data over duplicating large text blocks in components.
- Use semantic HTML and retain keyboard-accessible native audio controls.

## Before changing lyrics

Read `docs/CONTENT-GUIDE.md`. If a line is uncertain, use `[unclear]` rather
than inventing a polished lyric. Record confirmed corrections in the document's
verification table.
