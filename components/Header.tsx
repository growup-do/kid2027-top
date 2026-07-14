"use client";

import Link from "next/link";
import { useState } from "react";

// 現在表示中のページ（対応するナビをアクセント色で表示）
export type ActiveNav = "report" | "session" | "area";

// KID Startup Pitch は今後追加予定のため意図的に除外（README 指示）
const NAV_LINKS: { href: string; label: string; active: ActiveNav }[] = [
  { href: "/#report", label: "2026 Report", active: "report" },
  { href: "/session", label: "Session / Timetable", active: "session" },
  { href: "/area", label: "Exhibitors & Event", active: "area" },
];

export default function Header({ active }: { active?: ActiveNav }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const close = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className="wrap header__inner">
        <Link href="/" className="header__brand" aria-label="トップへ">
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
        </Link>

        <nav className="navlinks" aria-label="グローバルナビゲーション">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className={active === l.active ? "is-accent" : undefined}
              aria-current={active === l.active ? "page" : undefined}
            >
              {l.label}
            </Link>
          ))}
          <Link href="/#outline" className="wf-btnf">
            参加登録
          </Link>
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
            <Link
              key={l.label}
              href={l.href}
              className={active === l.active ? "is-accent" : undefined}
              aria-current={active === l.active ? "page" : undefined}
              onClick={close}
            >
              {l.label}
            </Link>
          ))}
          <Link href="/#outline" className="wf-btnf drawer__cta" onClick={close}>
            参加登録
          </Link>
        </nav>
      </div>
    </header>
  );
}
