# AI handoff

## Current objective

Maintain and develop the reunion site for C'mon, Bollo!, an early-2010s Samara
power-pop band presenting itself—deliberately and playfully—as Italian.

The immediate public story is:

1. the band played Snickers Urbania in Samara in 2010;
2. an old Flash-era site at cmonbollo.com featured a sheep;
3. the name is a reference to Bollo from *The Mighty Boosh*, not Monty Python;
4. the vocalist genuinely has Italian citizenship;
5. a reunion concert in Samara is planned for 2026, with date and venue still
   to be announced.

## Current implementation

The site is a single responsive page. Italian, Russian, and English UI language
is stored in localStorage under `cmon-bollo-language`. Italian is the first-visit default. Song lyrics are
always shown as a band-confirmed English original and a Russian translation,
regardless of UI language. Starting a track pauses any other track that is
already playing.

The visual system combines:

- warm paper, black ink, Italian red and green;
- rough dry-brush display lettering with Cyrillic support;
- archival photocopy/riso texture;
- the sheep and Bollo as recurring mascots;
- song-specific graphic motifs: pencil-box doodles, warning dots, carbon-copy
  layers, rain/air, Camden ticket geometry, and a jagged wall.

Visitors can switch between three saved visual modes:

- `archive` — paper, photocopy texture, Italian red and green;
- `night` — black space, coral/lilac/magenta doodles, inspired by the loose
  energy of Pure's visual language without copying its artwork.
- `silly` — a separate, fully composed newspaper/card page with strange
  characters. It uses `character-atlas.png` and the six-panel
  `song-atlas-confirmed.png`; it is not a recolour of the archive page.

## Important limitations

- The reunion date, venue, ticket URL, and merch availability are placeholders.
- The custom domain has been purchased but still requires DNS/hosting
  configuration outside this repository.
- The email address in the site is `cmonbollo@gmail.com`; confirm it before a
  public launch.

## Safe next tasks

1. Add the final concert date, venue, ticket URL, and contact preference.
2. Connect cmonbollo.com to the chosen deployment and verify HTTPS.
3. Test the page on a narrow phone and a desktop browser when visual QA is
   explicitly requested.

## Validation

Use:

```bash
npm install
npm run build
```

Do not treat raw files under `work/` as source material; that directory is
ignored and is only for local transcription/model artifacts.

For the exact Sites/GitHub handoff, read `docs/DEPLOYMENT.md`.
