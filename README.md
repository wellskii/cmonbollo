# C'mon, Bollo!

Official reunion site for the Samara power-pop band C'mon, Bollo!

Canonical domain: **https://cmonbollo.com**

The site has Italian, Russian, and English UI, includes the reconstructed band
archive, Bollo and sheep lore, concert information, merch concepts, and six
original recordings with band-confirmed English lyrics and Russian translations.

The confirmed reunion show is **16 August 2026** at **Hvat**,
Galaktionovskaya 40, Samara. Doors are at 18:00; C'mon, Bollo! play
18:30–19:00 as part of Что-то почувствовать фест.

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

- `app/page.tsx` — page structure, trilingual UI copy, interactions
- `app/festival.ts` — confirmed festival facts, public running order, and trilingual band notes
- `app/songs.ts` — track metadata, English lyrics, Russian translations
- `app/globals.css` — the complete visual system and responsive layout
- `app/layout.tsx` — metadata for cmonbollo.com and social previews
- `public/audio/` — the six original MP3 recordings
- `public/archive/` — images recovered from the old site and press archive
- `public/fonts/` — self-hosted Cyrillic/Latin display font
- `public/festival-illustration-2026.png` — original festival illustration used by the HTML poster
- `scripts/transcribe_audio.py` — repeatable local draft-transcription helper
- `scripts/requirements-transcription.txt` — optional transcription dependencies
- `docs/AI-HANDOFF.md` — project context and a safe continuation checklist
- `docs/DEPLOYMENT.md` — exact build and deployment handoff for another agent
- `docs/CONTENT-GUIDE.md` — tone, translations, lyrics-confidence notes
- `docs/TRANSCRIPTION-NOTES.md` — method, uncertainty, and review priorities
- `docs/DOMAIN.md` — custom-domain and deployment notes
- `.openai/hosting.json` — OpenAI Sites project metadata

## Editing content

Most regular text is stored in the `copy` object in `app/page.tsx`. Every key
has an `it`, `ru`, and `en` version. Keep all three versions aligned when adding
or removing content.

Songs are separate typed data in `app/songs.ts`. The current English lyrics were
supplied by the band on 9 August 2026 and are marked `confirmed`; the Russian
translations follow that version. New or alternate recordings still start as
drafts until a band member checks them.

## Deploying

This is a vinext site targeting Cloudflare-compatible Workers output. The
existing OpenAI Sites project is declared in `.openai/hosting.json`.

Run a successful production build before deployment. Follow
`docs/DEPLOYMENT.md` for a repeatable agent handoff and `docs/DOMAIN.md` for the
custom-domain setup.

## Rights

Source code may be maintained through this repository. All band names,
recordings, lyrics, photographs, artwork, archive materials, and character
likenesses remain the property of their respective authors and rights holders.
No music or visual asset is offered here as stock material or for third-party
reuse.
