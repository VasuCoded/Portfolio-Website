/** Fallback marks for projects without a real logo file.
 *  (WhatNow, After Hours and TouchDesigner use their actual logos from
 *  /public/projects; Collab Platform, PaperFlow and Server bots use these.) */
export function CollabIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="7" cy="8" r="3" stroke="currentColor" strokeWidth="2" />
      <circle cx="17" cy="8" r="3" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="17" r="3" stroke="currentColor" strokeWidth="2" />
      <path d="M9.2 9.8L10.5 15M14.8 9.8L13.5 15M9.8 8H14.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

/** A printed sheet with a tick: papers go out, mistakes come back. */
export function PaperIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M6 3h8l4 4v14H6z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M14 3v4h4" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M9 12h6M9 16h3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

/** Small robot head for the community bots. */
export function BotIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="4" y="8" width="16" height="11" rx="3" stroke="currentColor" strokeWidth="2" />
      <path d="M12 4v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="12" cy="3.5" r="1.2" fill="currentColor" />
      <circle cx="9" cy="13.5" r="1.5" fill="currentColor" />
      <circle cx="15" cy="13.5" r="1.5" fill="currentColor" />
    </svg>
  );
}
