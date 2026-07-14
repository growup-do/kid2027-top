import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SessionTimetable from "@/components/SessionTimetable";

export const metadata: Metadata = {
  title: "セッション・タイムテーブル｜KID 2027",
  description:
    "Kanagawa Innovators Day 2027 のセッション・タイムテーブル。2日間・5ステージで展開されるプログラム。",
};

// STAGE INFORMATION の 5 ステージ（テーマ・会場/定員は仮）
const STAGES = [
  {
    name: "MAIN STAGE",
    color: "#1d5fd6",
    place: "1F 大ホール / 定員 800",
    body: "キーノート・基調講演・ピッチファイナル・表彰など、KIDの中心となるプログラムを実施。",
  },
  {
    name: "SESSION ROOM A",
    color: "#188a5a",
    place: "2F 会議室A / 定員 200",
    body: "ディープテック・金融・オープンイノベーション等のテーマ別トークセッション。",
  },
  {
    name: "SESSION ROOM B",
    color: "#c0473a",
    place: "2F 会議室B / 定員 200",
    body: "地域産業・エンタメ・食・投資など、多彩なゲストによるセッション。",
  },
  {
    name: "DEMO STAGE",
    color: "#7b53b8",
    place: "1F 展示ホール内 / 定員 120",
    body: "Demo Day・実証プロジェクト発表・Exhibition連動の実演ステージ。",
  },
  {
    name: "WORKSHOP",
    color: "#9a7a1f",
    place: "3F ワークショップルーム / 定員 60",
    body: "事業共創・ピッチブラッシュアップなど参加型の少人数プログラム。",
  },
];

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
        </div>
      </section>

      {/* STAGE INFORMATION */}
      <section className="wrap" style={{ paddingTop: 28 }}>
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
          会場は5つのステージで構成されます。各ステージのテーマ・想定コンテンツは以下の通りです（内容は仮）。
        </p>
        <div className="stagegrid">
          {STAGES.map((s) => (
            <div
              key={s.name}
              style={{
                background: "#fff",
                border: "1px solid #e3e0d9",
                borderTop: `4px solid ${s.color}`,
                borderRadius: 8,
                padding: "14px 14px 16px",
              }}
            >
              <div
                style={{
                  font: "800 13px var(--font-jp)",
                  color: s.color,
                  marginBottom: 4,
                }}
              >
                {s.name}
              </div>
              <div
                style={{
                  font: "600 10px 'JetBrains Mono',monospace",
                  color: "var(--sub-2)",
                  marginBottom: 8,
                }}
              >
                {s.place}
              </div>
              <p style={{ font: "400 11px/1.65 sans-serif", color: "#5a574f", margin: 0 }}>
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* コントロール＋タイムテーブル（動的） */}
      <SessionTimetable />

      <Footer />
    </>
  );
}
