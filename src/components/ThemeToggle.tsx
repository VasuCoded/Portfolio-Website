"use client";

import { useEffect, useState } from "react";

const THEME_EVENT = "themechange";

export default function ThemeToggle() {
  // The boot script in layout.tsx sets data-theme on <html> before hydration,
  // so read it back here rather than guessing — same "resolve after mount"
  // pattern as useCycle/RandomPicker elsewhere in this codebase.
  const [theme, setTheme] = useState<"light" | "dark" | null>(null);

  useEffect(() => {
    const read = () => setTheme(document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light");
    read();
    // AppShell mounts this twice (desktop sidebar + mobile drawer sidebar),
    // so a toggle from one instance needs to sync the other's icon too.
    window.addEventListener(THEME_EVENT, read);
    return () => window.removeEventListener(THEME_EVENT, read);
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    setTheme(next);
    window.dispatchEvent(new Event(THEME_EVENT));
  };

  const dark = theme === "dark";

  return (
    <button
      className="theme-toggle"
      onClick={toggle}
      aria-label={dark ? "switch to light mode" : "switch to dark mode"}
      title={dark ? "switch to light mode" : "switch to dark mode"}
    >
      {dark ? (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
          <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.8" />
          <path
            d="M12 2.5v2.2M12 19.3v2.2M4.6 4.6l1.55 1.55M17.85 17.85l1.55 1.55M2.5 12h2.2M19.3 12h2.2M4.6 19.4l1.55-1.55M17.85 6.15l1.55-1.55"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      ) : (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5a8.5 8.5 0 1 0 11 11Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </button>
  );
}
