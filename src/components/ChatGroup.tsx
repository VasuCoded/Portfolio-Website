"use client";

import Image from "next/image";

/** A Discord-style grouped message: one avatar + header, then consecutive
 *  lines from the same author (which is how Discord actually renders a
 *  run of messages — and it keeps the avatar from repeating). */
export default function ChatGroup({
  time = "today",
  children,
}: {
  time?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="chat-group">
      <div className="chat-av">
        <Image src="/avatar.png" alt="" width={40} height={40} />
      </div>
      <div className="chat-body">
        <div className="chat-head">
          <span className="chat-name">vasu</span>
          <span className="chat-badge">owner</span>
          <span className="chat-time">{time}</span>
        </div>
        {children}
      </div>
    </div>
  );
}
