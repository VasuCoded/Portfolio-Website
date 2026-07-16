"use client";

export default function NowSpinning() {
  return (
    <div className="player-card">
      <span className="player-side" aria-hidden>
        side a
      </span>
      <div className="player-top">
        <div className="vinyl-wrap" aria-hidden>
          <div className="vinyl">
            <div className="vinyl-sheen" />
            <div className="vinyl-label" />
          </div>
          <span className="vinyl-arm" />
        </div>
        <div className="player-meta">
          <span className="player-eyebrow">
            <span className="eq-bars">
              <span />
              <span />
              <span />
              <span />
            </span>
            now spinning
          </span>
          <div className="player-title">Two Moons</div>
          <div className="player-artist">BoyWithUke</div>

          <div className="waveform" aria-hidden>
            {Array.from({ length: 34 }).map((_, i) => (
              <span key={i} style={{ animationDelay: `${(i % 11) * 0.11}s` }} />
            ))}
          </div>

          <div className="player-progress" aria-hidden>
            <span className="player-progress-fill" />
          </div>
          <div className="player-times" aria-hidden>
            <span>1:12</span>
            <span>3:45</span>
          </div>
          <div className="player-controls">
            <button className="player-ctrl" aria-label="previous" title="previous">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7 6v12H5V6h2zm2 6l10 6V6L9 12z" />
              </svg>
            </button>
            <a
              className="player-ctrl player-play"
              href="https://open.spotify.com/search/BoyWithUke%20Two%20Moons"
              target="_blank"
              rel="noopener"
              aria-label="play on Spotify"
              title="play on Spotify"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7L8 5z" />
              </svg>
            </a>
            <button className="player-ctrl" aria-label="next" title="next">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17 6v12h2V6h-2zm-2 6L5 6v12l10-6z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <p className="player-note">
        BoyWithUke is the main event for me — the masked, ukulele-driven indie-pop project that
        turns anxiety and heartbreak into something you can still bop to. Two Moons is the one
        I&apos;d hand someone first, but Toxic, She Said No, and Tired of Wanting You are in heavy
        rotation too. Beyond that I&apos;ll listen to basically everything — except rap and metal,
        those two never landed — and what&apos;s on rotation changes constantly.
      </p>
    </div>
  );
}
