# Content and lyrics guide

## Voice

The band voice is dry, affectionate, slightly absurd, and confident enough not
to explain every joke. It should feel like a rediscovered 2010 photocopied
zine, not a polished corporate nostalgia project.

Italian copy may be playfully over-serious. Russian copy should sound natural
rather than mechanically mirroring Italian syntax.

Keep public copy short and concrete. Prefer one fact plus one joke. Avoid
advertising language, invented metaphors, emotional bureaucracy, and phrases
that sound clever but do not tell the reader anything.

## Canon

- Name: `C'mon, Bollo!`
- Place of origin: Samara
- Reunion year: 2026
- Genre shorthand: power-pop / italo-volgano
- Name reference: Bollo from *The Mighty Boosh*
- Archive mascot: sheep
- Current mascots: sheep and Bollo

## Lyrics status

The English lyrics in `app/songs.ts` are editorial drafts created from automatic
transcription of the supplied mixes. Backing instruments and accented singing
make several words uncertain.

Use these confidence labels:

- `high` — chorus or repeated line is consistently clear;
- `medium` — most of the line is plausible but needs a band check;
- `low` — substantial reconstruction or `[unclear]` remains.

The website must display a draft disclaimer until every song is confirmed.

## Verification log

| Song | Status | Last checked by | Notes |
| --- | --- | --- | --- |
| Common Bollocks | draft | speech model | chorus is clearest |
| Bum-bum | draft | speech model | verses contain several unclear lines |
| Copying You | draft | speech model | title/chorus may sound like “copying” |
| Airy | draft | speech model | recurring “mesmerizing” phrase is uncertain |
| Camden | draft | speech model | place name and refrain are clearest |
| Torture | draft | speech model | chorus is clearer than verses |

When a band member confirms a song, update this table and the `status` field in
`app/songs.ts` in the same commit.
