"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import StatusTicker from "@/components/StatusTicker";
import MemberList from "@/components/MemberList";
import BottomNav from "@/components/BottomNav";

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
          <div className="sidebar-category">
            <span className="cat-caret">▾</span>
            {cat.label}
          </div>
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

      {/* voice channel — flavor, not a real link */}
      <div className="sidebar-category">
        <span className="cat-caret">▾</span>
        voice
      </div>
      <div className="side-channel voice" title="nobody's in here (it's a portfolio)">
        <span className="hash speaker">🔊</span>
        the-void
        <span className="voice-count">0</span>
      </div>
    </div>
  );
}

function SidebarHeader() {
  return (
    <div className="sidebar-header">
      <div className="sidebar-banner" aria-hidden />
      <div className="sidebar-header-row">
        <div>
          <h1>vasu&apos;s server</h1>
          <p className="status-line">● 1 member online · always</p>
        </div>
      </div>
      <div className="boost-bar" title="0 boosts. it's fine. it's fine.">
        <span className="boost-badge">◈ Lvl 0</span>
        <span className="boost-track">
          <span className="boost-fill" />
        </span>
        <span className="boost-note">2 to go</span>
      </div>
    </div>
  );
}

function Sidebar({ pathname, onNavigate }: { pathname: string; onNavigate?: () => void }) {
  return (
    <div className="channel-sidebar">
      <SidebarHeader />
      <ChannelList pathname={pathname} onNavigate={onNavigate} />
      <StatusTicker />
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
      <Sidebar pathname={pathname} />

      <div
        className={`drawer-backdrop${drawerOpen ? " open" : ""}`}
        onClick={() => setDrawerOpen(false)}
        aria-hidden={!drawerOpen}
      />
      <div className={`drawer-panel${drawerOpen ? " open" : ""}`} aria-hidden={!drawerOpen}>
        <Sidebar pathname={pathname} onNavigate={() => setDrawerOpen(false)} />
      </div>

      <div className="main-column">
        <button className="mobile-topbar" onClick={() => setDrawerOpen(true)} aria-label="open server menu">
          <span className="mobile-menu-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </span>
          <span className="wordmark">vasu&apos;s server</span>
          <span className="mobile-topbar-hint">tap for channels</span>
        </button>
        <div className="content-col">{children}</div>
      </div>

      <MemberList />
      <BottomNav />
    </div>
  );
}
