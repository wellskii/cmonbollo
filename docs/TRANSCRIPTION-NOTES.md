# Transcription notes

## What was done

The six supplied full-mix MP3 files were transcribed locally in English with
two recognition passes:

- `small.en`
- `distil-medium.en`

Both passes used faster-whisper on CPU. That first editorial draft preserved
uncertain lines as `[unclear]` instead of silently rewriting them.

On 2026-08-09, El Po supplied the complete English lyrics for all six songs on
behalf of the band. `app/songs.ts` now contains that confirmed version and a new
Russian translation. The machine draft is historical process information, not
the current published source.

## Why the machine draft was uncertain

Speech models are not lyric-sheet generators. Distorted guitars, cymbals,
backing vocals, room sound, accent, and repeated melodic vowels all reduce word
accuracy. The model may also hear a grammatically plausible phrase that was
never sung.

The Russian text is a translation of the band-confirmed English, not a separate
transcription and not an attempt to repair its deliberately odd English.

## Reproduce a machine draft

Install the optional dependency into a virtual environment, then run:

```bash
pip install -r scripts/requirements-transcription.txt
python scripts/transcribe_audio.py public/audio work/transcripts --model small.en
```

The script writes timestamped JSON and text under `work/`, which is deliberately
ignored by Git. A future agent should edit `app/songs.ts`, not publish raw model
output.
