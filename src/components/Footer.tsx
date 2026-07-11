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
    </footer>
  );
}
