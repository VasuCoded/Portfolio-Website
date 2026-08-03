"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useCycle } from "@/lib/useCycle";
import { useLanyard, type LanyardData } from "@/lib/useLanyard";

const LANYARD_ID = "851691069275111425";

const VASU_STATUS = [
  "🎧 Two Moons — BoyWithUke",
  "🗺️ mapping a containment site",
  "⌨️ shipping something",
];

const AFTERHOURS_STATUS = ["Playing /coinflip", "Rolling the dice", "Paying out rokda"];

function vasuStatusText(lanyard: LanyardData | null, fallback: string) {
  if (!lanyard) return fallback;
  if (lanyard.listening_to_spotify && lanyard.spotify) {
    return `🎧 ${lanyard.spotify.song} — ${lanyard.spotify.artist}`;
  }
  const custom = lanyard.activities.find((a) => a.type === 4);
  if (custom && (custom.state || custom.emoji)) {
    const emoji = custom.emoji && !custom.emoji.id ? `${custom.emoji.name} ` : "";
    const text = `${emoji}${custom.state ?? ""}`.trim();
    if (text) return text;
  }
  const game = lanyard.activities.find((a) => a.type === 0);
  if (game) return `Playing ${game.name}`;
  return fallback;
}

export default function MemberList() {
  const cycledVasuStatus = useCycle(VASU_STATUS, 3800);
  const afterhoursStatus = useCycle(AFTERHOURS_STATUS, 4600);
  const lanyard = useLanyard(LANYARD_ID);

  // Lanyard's dnd still counts as "present" for grouping purposes — only
  // idle/offline pull vasu out of the online section, matching Discord's feel.
  const vasuPresence = lanyard?.discord_status ?? "online";
  const vasuGroup = vasuPresence === "idle" ? "idle" : vasuPresence === "offline" ? "offline" : "online";
  const vasuStatus = vasuStatusText(lanyard, cycledVasuStatus);

  const vasuNode = (
    <div
      className={`member owner${vasuGroup !== "online" ? " dim" : ""}${vasuGroup === "offline" ? " offline" : ""}`}
      key="vasu"
    >
      <div className="member-av">
        <Image src="/avatar.png" alt="" width={32} height={32} />
        <span className={`member-presence ${vasuPresence}`} />
      </div>
      <div className="member-meta">
        <div className="member-name">
          vasu <span className="crown" title="server owner">👑</span>
        </div>
        <div className="member-status">
          <AnimatePresence mode="wait">
            <motion.span
              key={vasuStatus}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {vasuStatus}
            </motion.span>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );

  const afterhoursNode = (
    <a
      className="member bot"
      href="https://afterhours.arshnah.in/"
      target="_blank"
      rel="noopener"
      key="afterhours"
    >
      <div className="member-av">
        <div className="member-bot-icon">
          <Image src="/projects/afterhours.png" alt="" width={32} height={32} />
        </div>
        <span className="member-presence online" />
      </div>
      <div className="member-meta">
        <div className="member-name">
          After Hours <span className="bot-tag">BOT</span>
        </div>
        <div className="member-status">
          <AnimatePresence mode="wait">
            <motion.span
              key={afterhoursStatus}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {afterhoursStatus}
            </motion.span>
          </AnimatePresence>
        </div>
      </div>
    </a>
  );

  const futureMeNode = (
    <div className="member dim" key="future-me">
      <div className="member-av">
        <div className="member-ghost">😴</div>
        <span className="member-presence idle" />
      </div>
      <div className="member-meta">
        <div className="member-name">future me</div>
        <div className="member-status">an engineer, hopefully</div>
      </div>
    </div>
  );

  const offlineGhosts = [
    { name: "past me", note: "learned it the hard way" },
    { name: "the JEE syllabus", note: "we don't talk" },
    { name: "sleep", note: "last seen a while ago" },
  ].map((m) => (
    <div className="member dim offline" key={m.name}>
      <div className="member-av">
        <div className="member-ghost">·</div>
        <span className="member-presence offline" />
      </div>
      <div className="member-meta">
        <div className="member-name">{m.name}</div>
        <div className="member-status">{m.note}</div>
      </div>
    </div>
  ));

  const onlineMembers = [afterhoursNode];
  const idleMembers = [futureMeNode];
  const offlineMembers = [...offlineGhosts];

  if (vasuGroup === "online") onlineMembers.unshift(vasuNode);
  else if (vasuGroup === "idle") idleMembers.unshift(vasuNode);
  else offlineMembers.unshift(vasuNode);

  return (
    <aside className="member-list" aria-label="members">
      <div className="member-group">online — {onlineMembers.length}</div>
      {onlineMembers}

      {idleMembers.length > 0 && <div className="member-group">idle — {idleMembers.length}</div>}
      {idleMembers}

      {offlineMembers.length > 0 && <div className="member-group">offline — {offlineMembers.length}</div>}
      {offlineMembers}
    </aside>
  );
}
