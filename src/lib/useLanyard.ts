"use client";

import { useEffect, useState } from "react";

export type LanyardActivity = {
  type: number;
  name: string;
  state?: string;
  emoji?: { name: string; id?: string } | null;
};

export type LanyardData = {
  discord_status: "online" | "idle" | "dnd" | "offline";
  activities: LanyardActivity[];
  listening_to_spotify: boolean;
  spotify: { song: string; artist: string } | null;
};

const POLL_MS = 20000;

/** Polls the public Lanyard API for a Discord user's live presence.
 *  Requires the user to be a member of the Lanyard Discord server (discord.gg/lanyard). */
export function useLanyard(discordId: string): LanyardData | null {
  const [data, setData] = useState<LanyardData | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function poll() {
      try {
        const res = await fetch(`https://api.lanyard.rest/v1/users/${discordId}`);
        const json = await res.json();
        if (!cancelled && json.success) {
          setData({
            discord_status: json.data.discord_status,
            activities: json.data.activities ?? [],
            listening_to_spotify: json.data.listening_to_spotify ?? false,
            spotify: json.data.spotify
              ? { song: json.data.spotify.song, artist: json.data.spotify.artist }
              : null,
          });
        }
      } catch {
        // Lanyard unreachable — keep last known state.
      }
    }

    poll();
    const id = setInterval(poll, POLL_MS);
    return () => {
      cancelled = true;
      clearInterval(id);
    };
  }, [discordId]);

  return data;
}
