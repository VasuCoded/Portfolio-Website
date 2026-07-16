/** Fallback mark for projects without a real logo file.
 *  (WhatNow, Jugaad and TouchDesigner use their actual logos from
 *  /public/projects — only Collab Platform still needs a drawn icon.) */
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
