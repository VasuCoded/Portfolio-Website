"use client";

import { useCycle } from "@/lib/useCycle";

const WHO = ["After Hours", "future me", "the group chat"];

export default function TypingDots() {
  const who = useCycle(WHO, 4200);
  return (
    <div className="typing-row" aria-hidden>
      <span className="typing-dots">
        <span />
        <span />
        <span />
      </span>
      <span className="typing-text">
        <strong>{who}</strong> is typing…
      </span>
    </div>
  );
}
