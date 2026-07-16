"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/** Playlist card with the same treatment as the YouTube channel cards:
 *  accent stripe, cover tile with a play overlay, a faded watermark, and
 *  meta pills — expanding to the track list. */
export default function PlaylistCard({
  title,
  summary,
  kind,
  count,
  duration,
  accent,
  tracks,
  children,
}: {
  title: string;
  summary: string;
  kind: string;
  count: string;
  duration: string;
  accent: string;
  tracks: string[];
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`pl-card${open ? " open" : ""}`}
      style={{ ["--accent" as string]: accent } as React.CSSProperties}
    >
      <span className="pl-watermark" aria-hidden>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="9.2" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.2" />
          <circle cx="12" cy="12" r="1.8" fill="currentColor" />
        </svg>
      </span>

      <button className="pl-head" onClick={() => setOpen((v) => !v)} aria-expanded={open}>
        {/* stacked-disc cover */}
        <span className="pl-cover" aria-hidden>
          <span className="pl-disc" />
          <span className="pl-cover-face">
            <span className="eq-bars">
              <span />
              <span />
              <span />
              <span />
            </span>
          </span>
          <span className="pl-play">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7L8 5z" />
            </svg>
          </span>
        </span>

        <span className="pl-body">
          <span className="pl-top">
            <span className="pl-title">{title}</span>
            <motion.span
              className="xcard-chevron"
              animate={{ rotate: open ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.span>
          </span>
          <span className="pl-summary">{summary}</span>
          <span className="pl-meta">
            <span className="pl-kind">{kind}</span>
            <span className="pl-stat">{count} tracks</span>
            <span className="pl-stat">{duration}</span>
          </span>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: "hidden" }}
          >
            <div className="pl-open">
              {children}
              <ul className="track-list">
                {tracks.map((t, i) => (
                  <li key={t}>
                    <span className="track-n">{String(i + 1).padStart(2, "0")}</span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
