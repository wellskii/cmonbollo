# Transcription notes

## What was done

The six supplied full-mix MP3 files were transcribed locally in English with
two recognition passes:

- `small.en`
- `distil-medium.en`

Both passes used faster-whisper on CPU. The editorial draft in `app/songs.ts`
keeps phrases where the passes and repeated choruses broadly agree. Conflicting
or implausible phrases are marked `[unclear]`; they were not silently rewritten
into smoother English.

## Why the draft is uncertain

Speech models are not lyric-sheet generators. Distorted guitars, cymbals,
backing vocals, room sound, accent, and repeated melodic vowels all reduce word
accuracy. The model may also hear a grammatically plausible phrase that was
never sung.

The Russian text is a translation of the current English draft, not a separate
transcription and not an attempt to repair uncertain English.

## Review priority

1. **Bum-bum** — most verse and pre-chorus lines need a band member.
2. **Airy** — the main image and several “mesmerizing” lines remain unclear.
3. **Copying You** — the chorus is plausible; both verses need checking.
4. **Camden** — refrain and place name are stable; verse details are not.
5. **Torture** — chorus is stable; the final words of both verses need checking.
6. **Common Bollocks** — title/chorus are stable; pencil-box verse needs a pass.

## Reproduce a machine draft

Install the optional dependency into a virtual environment, then run:

```bash
pip install -r scripts/requirements-transcription.txt
python scripts/transcribe_audio.py public/audio work/transcripts --model small.en
```

The script writes timestamped JSON and text under `work/`, which is deliberately
ignored by Git. A future agent should edit `app/songs.ts`, not publish raw model
output.
