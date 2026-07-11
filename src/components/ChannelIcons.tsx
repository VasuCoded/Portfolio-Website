import type { Niche } from "@/data/channels";

function Tech() {
  // chip / circuit — tech
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="7" y="7" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.7" />
      <path
        d="M10 4v3M14 4v3M10 17v3M14 17v3M4 10h3M4 14h3M17 10h3M17 14h3"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <rect x="10" y="10" width="4" height="4" rx="1" fill="currentColor" />
    </svg>
  );
}

function Science() {
  // atom — science
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="2" fill="currentColor" />
      <ellipse cx="12" cy="12" rx="10" ry="4.4" stroke="currentColor" strokeWidth="1.6" />
      <ellipse cx="12" cy="12" rx="10" ry="4.4" stroke="currentColor" strokeWidth="1.6" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4.4" stroke="currentColor" strokeWidth="1.6" transform="rotate(120 12 12)" />
    </svg>
  );
}

function History() {
  // scroll / column — history
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M5 4h11a2 2 0 0 1 2 2v11a2 2 0 0 0 2 2H8a2 2 0 0 1-2-2V6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 8h6M9 11h6M9 14h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M5 4a2 2 0 0 0-2 2v1h3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Logistics() {
  // paper plane / route — how things work
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M21 4L3 11l6 2 2 6 4-6 6-9Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M9 13l4-3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

const MAP = { tech: Tech, science: Science, history: History, logistics: Logistics };

export default function ChannelIcon({ niche }: { niche: Niche }) {
  const Cmp = MAP[niche];
  return <Cmp />;
}
