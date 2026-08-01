"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useCycle } from "@/lib/useCycle";

const VASU_STATUS = [
  "🎧 Two Moons — BoyWithUke",
  "🗺️ mapping a containment site",
  "⌨️ shipping something",
];

const JUGAAD_STATUS = ["Playing /coinflip", "Rolling the dice", "Paying out rokda"];

export default function MemberList() {
  const vasuStatus = useCycle(VASU_STATUS, 3800);
  const jugaadStatus = useCycle(JUGAAD_STATUS, 4600);

  return (
    <aside className="member-list" aria-label="members">
      <div className="member-group">online — 2</div>

      <div className="member owner">
        <div className="member-av">
          <Image src="/avatar.png" alt="" width={32} height={32} />
          <span className="member-presence online" />
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

      <a
        className="member bot"
        href="https://jugaadbot.vercel.app/"
        target="_blank"
        rel="noopener"
      >
        <div className="member-av">
          <div className="member-bot-icon">
            <Image src="/projects/jugaad.png" alt="" width={32} height={32} />
          </div>
          <span className="member-presence online" />
        </div>
        <div className="member-meta">
          <div className="member-name">
            Jugaad <span className="bot-tag">BOT</span>
          </div>
          <div className="member-status">
            <AnimatePresence mode="wait">
              <motion.span
                key={jugaadStatus}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {jugaadStatus}
              </motion.span>
            </AnimatePresence>
          </div>
        </div>
      </a>

      <div className="member-group">idle — 1</div>
      <div className="member dim">
        <div className="member-av">
          <div className="member-ghost">😴</div>
          <span className="member-presence idle" />
        </div>
        <div className="member-meta">
          <div className="member-name">future me</div>
          <div className="member-status">an engineer, hopefully</div>
        </div>
      </div>

      <div className="member-group">offline — 3</div>
      {[
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
      ))}
    </aside>
  );
}
