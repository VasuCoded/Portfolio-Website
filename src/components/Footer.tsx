"use client";

export default function Footer({ showWebring = false }: { showWebring?: boolean }) {
  return (
    <footer className="site-footer">
      {showWebring && (
        <div className="webring">
          <a
            href="https://larpring.github.io/"
            target="_blank"
            rel="noopener"
            aria-label="larpring webring"
          >
            <img
              src="https://larpring.github.io/badge-light.svg"
              width={120}
              height={42}
              alt="larpring webring"
            />
          </a>
          <a
            href="https://larpring.github.io/"
            target="_blank"
            rel="noopener"
            aria-label="member of the larp ring"
            style={{ display: "inline-block", marginLeft: 8, verticalAlign: "middle" }}
          >
            <svg width="88" height="31" viewBox="0 0 88 31" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <rect x="0.5" y="0.5" width="87" height="30" fill="#0b0d10" stroke="#3a3f4a" />
              <text x="44" y="13" textAnchor="middle" fontFamily="var(--font-mono), monospace" fontSize="8" fontWeight={700} fill="#e8ebf0">member of the</text>
              <text x="44" y="23" textAnchor="middle" fontFamily="var(--font-mono), monospace" fontSize="8" fontWeight={700} fill="#e8ebf0">(larp) ring</text>
            </svg>
          </a>
          <p className="webring-nav">
            part of the <a href="https://larpring.github.io/">larpring</a> webring
            <br />
            <a href="https://larpring.github.io/go.html?from=vasu&dir=prev">← prev</a>
            <span className="sep">·</span>
            <a href="https://larpring.github.io/random/">random</a>
            <span className="sep">·</span>
            <a href="https://larpring.github.io/go.html?from=vasu&dir=next">next →</a>
          </p>
        </div>
      )}
      <div className="footer-links">
        <a href="mailto:sanskar.ch.inbox@gmail.com">sanskar.ch.inbox@gmail.com</a>
        <a href="https://github.com/VasuCoded/" target="_blank" rel="noopener">
          github.com/VasuCoded ↗
        </a>
        <span>@_whois.vasu on Discord</span>
      </div>
      <p>Tuned by hand, one channel at a time · © {new Date().getFullYear()} Vasu</p>
      <p>
        made alongside{" "}
        <a href="https://arshnah.in" target="_blank" rel="noopener">
          arshnah
        </a>{" "}
        (arshnah.in)
      </p>
    </footer>
  );
}
