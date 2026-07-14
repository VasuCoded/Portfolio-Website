"use client";

import Image from "next/image";
import RandomPicker from "@/components/RandomPicker";
import { YT_CHANNELS } from "@/data/channels";
import { CHANNEL_POOL } from "@/data/channelPool";

type Pick = { name: string; blurb?: string; url: string; logo?: string };

const ALL_CHANNELS: Pick[] = [
  ...YT_CHANNELS.map((c) => ({ name: c.name, blurb: c.blurb, url: c.url, logo: c.logo })),
  ...CHANNEL_POOL.map((name) => ({
    name,
    url: `https://www.youtube.com/results?search_query=${encodeURIComponent(name)}`,
  })),
];

export default function RandomChannelPick() {
  return (
    <RandomPicker
      items={ALL_CHANNELS}
      shuffleLabel="pick another"
      render={(ch: Pick) => (
        <div className="channel-pick">
          <div className="channel-pick-left">
            {ch.logo ? (
              <Image className="channel-pick-logo" src={ch.logo} alt="" width={34} height={34} loading="eager" />
            ) : (
              <span className="channel-pick-logo placeholder">▶</span>
            )}
            <div>
              <div className="song-pick-title">{ch.name}</div>
              {ch.blurb && <div className="song-pick-artist">{ch.blurb}</div>}
            </div>
          </div>
          <a className="btn btn-line btn-sm" href={ch.url} target="_blank" rel="noopener">
            {ch.blurb ? "Visit ↗" : "Search ↗"}
          </a>
        </div>
      )}
    />
  );
}
