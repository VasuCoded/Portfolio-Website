"use client";

export default function Footer() {
  return (
    <footer className="site-footer">
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
