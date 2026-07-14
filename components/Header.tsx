"use client";

import { useState } from "react";

const NAV_LINKS = [
  { href: "#report", label: "2026 Report", accent: true },
  { href: "#contents", label: "Session / Timetable", accent: false },
  { href: "#contents", label: "KID Startup Pitch", accent: false },
  { href: "#partners", label: "Exhibitors & Event", accent: false },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const close = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className="wrap header__inner">
        <div className="header__brand">
          <div className="wf-ph" style={{ width: 110, height: 36 }}>
            神奈川県ロゴ
          </div>
          <div className="header__divider" />
          <div
            className="wf-ph"
            style={{
              width: 74,
              height: 30,
              borderStyle: "solid",
              borderColor: "#4a4a4a",
              color: "#4a4a4a",
              background: "#fff",
            }}
          >
            KID ロゴ
          </div>
        </div>

        <nav className="navlinks" aria-label="グローバルナビゲーション">
          {NAV_LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className={l.accent ? "is-accent" : undefined}
            >
              {l.label}
            </a>
          ))}
          <a href="#outline" className="wf-btnf">
            参加登録
          </a>
        </nav>

        <button
          type="button"
          className={`hamb${menuOpen ? " is-open" : ""}`}
          aria-label="メニューを開閉"
          aria-expanded={menuOpen}
          aria-controls="mobile-drawer"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* モバイル用ドロワー */}
      <div id="mobile-drawer" className={`drawer${menuOpen ? " is-open" : ""}`}>
        <nav className="wrap drawer__inner" aria-label="モバイルナビゲーション">
          {NAV_LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className={l.accent ? "is-accent" : undefined}
              onClick={close}
            >
              {l.label}
            </a>
          ))}
          <a href="#outline" className="wf-btnf drawer__cta" onClick={close}>
            参加登録
          </a>
        </nav>
      </div>
    </header>
  );
}
