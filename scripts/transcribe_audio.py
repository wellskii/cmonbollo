"""Create timestamped draft transcripts for every MP3 in a directory.

The script deliberately writes machine drafts outside the public site. Lyrics
need a human pass because backing vocals, distortion, and repeated choruses are
harder for speech-recognition models than ordinary spoken audio.

Example:
    python scripts/transcribe_audio.py public/audio work/transcripts
"""

from __future__ import annotations

import argparse
import json
from pathlib import Path

from faster_whisper import WhisperModel


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser()
    parser.add_argument("input_dir", type=Path)
    parser.add_argument("output_dir", type=Path)
    parser.add_argument("--model", default="small.en")
    parser.add_argument("--model-cache", type=Path, default=Path("work/models"))
    return parser.parse_args()


def main() -> None:
    args = parse_args()
    args.output_dir.mkdir(parents=True, exist_ok=True)
    args.model_cache.mkdir(parents=True, exist_ok=True)

    model = WhisperModel(
        args.model,
        device="cpu",
        compute_type="int8",
        download_root=str(args.model_cache),
    )

    for audio_path in sorted(args.input_dir.glob("*.mp3")):
        print(f"Transcribing {audio_path.name}", flush=True)
        segments, info = model.transcribe(
            str(audio_path),
            language="en",
            beam_size=5,
            best_of=5,
            temperature=0,
            vad_filter=False,
            condition_on_previous_text=False,
            word_timestamps=False,
        )

        transcript_segments = []
        lines = []
        for segment in segments:
            text = segment.text.strip()
            if not text:
                continue
            transcript_segments.append(
                {
                    "start": round(segment.start, 2),
                    "end": round(segment.end, 2),
                    "text": text,
                    "avg_logprob": round(segment.avg_logprob, 4),
                    "no_speech_prob": round(segment.no_speech_prob, 4),
                }
            )
            lines.append(f"[{segment.start:07.2f}–{segment.end:07.2f}] {text}")

        output = {
            "file": audio_path.name,
            "language": info.language,
            "language_probability": round(info.language_probability, 4),
            "duration": round(info.duration, 2),
            "segments": transcript_segments,
        }
        stem = audio_path.stem
        (args.output_dir / f"{stem}.json").write_text(
            json.dumps(output, ensure_ascii=False, indent=2),
            encoding="utf-8",
        )
        (args.output_dir / f"{stem}.txt").write_text(
            "\n".join(lines) + "\n",
            encoding="utf-8",
        )


if __name__ == "__main__":
    main()
