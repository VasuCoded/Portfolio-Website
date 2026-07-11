"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const CATEGORIES = [
  {
    label: "info",
    channels: [
      { href: "/", label: "welcome" },
      { href: "/about", label: "about-me" },
    ],
  },
  {
    label: "showcase",
    channels: [{ href: "/portfolio", label: "portfolio" }],
  },
];

function ChannelList({ pathname, onNavigate }: { pathname: string; onNavigate?: () => void }) {
  return (
    <div className="sidebar-scroll">
      {CATEGORIES.map((cat) => (
        <div key={cat.label}>
          <div className="sidebar-category">{cat.label}</div>
          {cat.channels.map((c) => {
            const active = pathname === c.href;
            return (
              <Link
                key={c.href}
                href={c.href}
                onClick={onNavigate}
                className={`side-channel${active ? " active" : ""}`}
              >
                {active && <span className="unread-dot" />}
                <span className="hash">#</span>
                {c.label}
              </Link>
            );
          })}
        </div>
      ))}
    </div>
  );
}

function SidebarHeader() {
  return (
    <div className="sidebar-header">
      <div className="sidebar-header-icon">
        <Image src="/avatar.png" alt="" width={34} height={34} />
      </div>
      <div>
        <h1>vasu&apos;s server</h1>
        <p className="status-line">● 1 member online</p>
      </div>
    </div>
  );
}

function UserPanel() {
  return (
    <div className="user-panel">
      <div className="avatar-sm">
        <Image src="/avatar.png" alt="" width={32} height={32} />
        <span className="ustatus" />
      </div>
      <div className="u-meta">
        <div className="u-name">vasu</div>
        <div className="u-status">drop year, 2027</div>
      </div>
      <div className="u-icons">
        <button aria-label="mic" title="muted (there's no one else here)">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 15a3 3 0 0 0 3-3V6a3 3 0 1 0-6 0v6a3 3 0 0 0 3 3Z"
              stroke="currentColor"
              strokeWidth="1.8"
            />
            <path
              d="M19 11a7 7 0 0 1-14 0M12 18v3"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        </button>
        <button aria-label="settings" title="settings (decorative)">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.8" />
            <path
              d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06A2 2 0 1 1 7.04 4.3l.06.06A1.65 1.65 0 0 0 8.92 4.7c.6-.25 1-.83 1-1.51V3a2 2 0 1 1 4 0v.09c0 .68.4 1.26 1 1.51.62.26 1.34.13 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82c.25.6.83 1 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z"
              stroke="currentColor"
              strokeWidth="1.4"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    // The drawer must close whenever the route actually changes underneath
    // it — this is a real external-state sync, not a state-mirroring effect.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setDrawerOpen(false);
  }, [pathname]);

  return (
    <div className="app-shell">
      <div className="channel-sidebar">
        <SidebarHeader />
        <ChannelList pathname={pathname} />
        <UserPanel />
      </div>

      <div
        className={`drawer-backdrop${drawerOpen ? " open" : ""}`}
        onClick={() => setDrawerOpen(false)}
        aria-hidden={!drawerOpen}
      />
      <div className={`drawer-panel${drawerOpen ? " open" : ""}`} aria-hidden={!drawerOpen}>
        <div className="channel-sidebar">
          <SidebarHeader />
          <ChannelList pathname={pathname} onNavigate={() => setDrawerOpen(false)} />
          <UserPanel />
        </div>
      </div>

      <div className="main-column">
        <div className="mobile-topbar">
          <button aria-label="open channels" onClick={() => setDrawerOpen(true)}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
          <span className="wordmark">vasu&apos;s server</span>
        </div>
        <div className="content-col">{children}</div>
      </div>
    </div>
  );
}
