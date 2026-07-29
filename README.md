# C'mon, Bollo!

Official reunion site for the Samara power-pop band C'mon, Bollo!

Canonical domain: **https://cmonbollo.com**

The site is bilingual (Italian/Russian), includes the reconstructed band
archive, Bollo and sheep lore, concert information, merch concepts, and six
original recordings with draft English lyrics and Russian translations.

## Start locally

Requirements:

- Node.js 22.13 or newer
- npm

```bash
npm install
npm run dev
```

Open the local address printed by the development server.

Production check:

```bash
npm run build
```

The build output is written to `dist/`.

## Where things live

- `app/page.tsx` — page structure, bilingual UI copy, interactions
- `app/songs.ts` — track metadata, English lyrics, Russian translations
- `app/globals.css` — the complete visual system and responsive layout
- `app/layout.tsx` — metadata for cmonbollo.com and social previews
- `public/audio/` — the six original MP3 recordings
- `public/archive/` — images recovered from the old site and press archive
- `public/fonts/` — self-hosted Cyrillic/Latin display font
- `scripts/transcribe_audio.py` — repeatable local draft-transcription helper
- `scripts/requirements-transcription.txt` — optional transcription dependencies
- `docs/AI-HANDOFF.md` — project context and a safe continuation checklist
- `docs/CONTENT-GUIDE.md` — tone, translations, lyrics-confidence notes
- `docs/TRANSCRIPTION-NOTES.md` — method, uncertainty, and review priorities
- `docs/DOMAIN.md` — custom-domain and deployment notes
- `.openai/hosting.json` — OpenAI Sites project metadata

## Editing content

Most regular text is stored in the `copy` object in `app/page.tsx`. Every key
has an `it` and `ru` version. Keep both versions aligned when adding or removing
content.

Songs are separate typed data in `app/songs.ts`. Lyrics currently come from
machine transcription of rehearsal/live mixes and are explicitly marked as
drafts. Do not silently remove the draft notice until a band member has checked
the words against the original lyric sheets or vocal memory.

## Deploying

This is a vinext site targeting Cloudflare-compatible Workers output. The
existing OpenAI Sites project is declared in `.openai/hosting.json`.

Run a successful production build before deployment. See
`docs/DOMAIN.md` for the custom-domain handoff.

## Rights

Source code may be maintained through this repository. All band names,
recordings, lyrics, photographs, artwork, archive materials, and character
likenesses remain the property of their respective authors and rights holders.
No music or visual asset is offered here as stock material or for third-party
reuse.
