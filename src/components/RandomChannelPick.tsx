"use client";

import RandomPicker from "@/components/RandomPicker";
import { YT_CHANNELS, type Channel } from "@/data/channels";

export default function RandomChannelPick() {
  return (
    <RandomPicker
      items={YT_CHANNELS}
      shuffleLabel="pick another"
      render={(ch: Channel) => (
        <div className="channel-pick">
          <div>
            <div className="song-pick-title">{ch.name}</div>
            <div className="song-pick-artist">{ch.blurb}</div>
          </div>
          <a className="btn btn-line btn-sm" href={ch.url} target="_blank" rel="noopener">
            Visit ↗
          </a>
        </div>
      )}
    />
  );
}
