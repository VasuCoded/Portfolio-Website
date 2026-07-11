"use client";

import RandomPicker from "@/components/RandomPicker";
import { SONGS, type Song } from "@/data/songs";

export default function RandomSongPick() {
  return (
    <RandomPicker
      items={SONGS}
      shuffleLabel="pick another"
      render={(song: Song) => (
        <div className="song-pick">
          <div>
            <div className="song-pick-title">{song.title}</div>
            <div className="song-pick-artist">{song.artist}</div>
          </div>
          <a
            className="btn btn-line btn-sm"
            href={`https://open.spotify.com/search/${encodeURIComponent(`${song.artist} ${song.title}`)}`}
            target="_blank"
            rel="noopener"
          >
            Play ↗
          </a>
        </div>
      )}
    />
  );
}
