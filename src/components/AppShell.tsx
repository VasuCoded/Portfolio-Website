"use client";

import Link from "next/link";
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
      <div>
        <h1>vasu&apos;s server</h1>
        <p className="status-line">● 1 member online</p>
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
