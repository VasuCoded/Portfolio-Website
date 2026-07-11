"use client";

export default function ChannelHeader({ name, topic }: { name: string; topic: string }) {
  return (
    <div className="channel-header">
      <div className="ch-title">
        <span className="ch-hash">#</span>
        <h2>{name}</h2>
        <span className="ch-topic">{topic}</span>
      </div>
      <div className="ch-icons">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M6 4h9l3 3v13a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Z"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <path d="M9 10h6M9 14h6M9 18h3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      </div>
    </div>
  );
}
