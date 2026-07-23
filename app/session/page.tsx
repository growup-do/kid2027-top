import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SessionTimetable from "@/components/SessionTimetable";

export const metadata: Metadata = {
  title: "セッション・タイムテーブル｜KID 2027",
  description:
    "Kanagawa Innovators Day 2027 のセッション・タイムテーブル。2日間・5ステージで展開されるプログラム。",
};

// GitHub Pages 等のサブパス配信に対応するためのベースパス（raw な img src には自動付与されないため手動付与）
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function SessionPage() {
  return (
    <>
      <Header active="session" />

      {/* ページ見出し */}
      <section className="page-head">
        <div className="wrap page-head__inner">
          <div className="page-head__eyebrow">SESSION / TIMETABLE</div>
          <h1 className="page-head__title">セッション・タイムテーブル</h1>
          <p className="page-head__lead">
            2日間・5ステージで展開されるセッションのタイムテーブルです。現在開催中のセッションは
            <span style={{ color: "#e0352b", fontWeight: 700 }}>赤いライン</span>
            で表示されます。※内容は仮です。
          </p>
          <nav className="page-nav" aria-label="ページ内リンク">
            <a href="#stage-info" className="page-nav__btn">
              STAGE INFORMATION
            </a>
            <a href="#day1" className="page-nav__btn">
              DAY1 <span>1.21</span>
            </a>
            <a href="#day2" className="page-nav__btn">
              DAY2 <span>1.22</span>
            </a>
          </nav>
        </div>
      </section>

      {/* STAGE INFORMATION */}
      <section id="stage-info" className="wrap section-anchor" style={{ paddingTop: 28 }}>
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: 12,
            marginBottom: 6,
          }}
        >
          <h2 style={{ font: "900 20px var(--font-jp)", margin: 0 }}>
            STAGE INFORMATION
          </h2>
          <span style={{ font: "600 12px sans-serif", color: "var(--sub-2)" }}>
            ステージのご案内
          </span>
        </div>
        <p
          style={{
            font: "400 12px/1.7 sans-serif",
            color: "#6a675f",
            margin: "0 0 16px",
            maxWidth: 820,
          }}
        >
          会場は5つのステージで構成されます。フロアマップ上の各ステージの配置・テーマは以下の通りです（配置・定員は仮）。
        </p>

        {/* フロアマップ（画像） */}
        <div className="floormap-img">
          <img
            src={`${BASE_PATH}/assets/session-floormap.png`}
            alt="KID 2027 会場フロアマップ（ステージ配置図）"
          />
        </div>
      </section>

      {/* コントロール＋タイムテーブル（動的） */}
      <SessionTimetable />

      <Footer />
    </>
  );
}
