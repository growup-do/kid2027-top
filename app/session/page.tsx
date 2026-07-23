import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SessionTimetable from "@/components/SessionTimetable";

export const metadata: Metadata = {
  title: "セッション・タイムテーブル｜KID 2027",
  description:
    "Kanagawa Innovators Day 2027 のセッション・タイムテーブル。2日間・5ステージで展開されるプログラム。",
};

// STAGE INFORMATION（フロアマップ配置図）。area は .floormap__grid の grid-template-areas に対応。
const STAGES = [
  {
    area: "main",
    name: "MAIN STAGE",
    color: "#1d5fd6",
    tint: "#eaf1fb",
    place: "1F 大ホール / 800",
    body: "キーノート・基調講演・ピッチファイナル・表彰など、KIDの中心プログラム。",
  },
  {
    area: "demo",
    name: "DEMO STAGE",
    color: "#7b53b8",
    tint: "#f4f0fa",
    place: "1F 展示ホール内 / 120",
    body: "Demo Day・実証発表・Exhibition連動の実演ステージ。",
  },
  {
    area: "roomA",
    name: "SESSION ROOM A",
    color: "#188a5a",
    tint: "#eef7f2",
    place: "2F 会議室A / 200",
    body: "ディープテック・金融・OI等のテーマ別トークセッション。",
  },
  {
    area: "roomB",
    name: "SESSION ROOM B",
    color: "#c0473a",
    tint: "#faf1ef",
    place: "2F 会議室B / 200",
    body: "地域産業・エンタメ・食・投資など多彩なゲストセッション。",
  },
  {
    area: "work",
    name: "WORKSHOP",
    color: "#9a7a1f",
    tint: "#f6f3ea",
    place: "3F WSルーム / 60",
    body: "事業共創・ピッチブラッシュアップ等の参加型プログラム。",
  },
] as const;

// フロアマップ上の非ステージ区画（受付・展示エリア）
const FLOOR_UTILS = [
  { area: "net", label: "NETWORKING\nLOUNGE" },
  { area: "exh", label: "EXHIBITION\nAREA" },
] as const;

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
          会場は5つのステージで構成されます。フロアマップ上の各ステージの配置・テーマは以下の通りです（配置・定員は仮）。
        </p>

        {/* フロアマップ形式の配置図 */}
        <div className="floormap">
          <span className="floormap__tag">FLOOR MAP</span>
          <div className="floormap__grid">
            {STAGES.map((s) => (
              <div
                key={s.name}
                className="floorbox"
                style={{
                  gridArea: s.area,
                  background: s.tint,
                  borderTop: `4px solid ${s.color}`,
                }}
              >
                <div className="floorbox__name" style={{ color: s.color }}>
                  {s.name}
                </div>
                <div className="floorbox__place">{s.place}</div>
                <p className="floorbox__body">{s.body}</p>
              </div>
            ))}
            {FLOOR_UTILS.map((u) => (
              <div
                key={u.area}
                className="floorbox floorbox--util"
                style={{ gridArea: u.area, whiteSpace: "pre-line" }}
              >
                {u.label}
              </div>
            ))}
          </div>
          <span className="floormap__entrance">▼ ENTRANCE / 受付</span>
        </div>
      </section>

      {/* コントロール＋タイムテーブル（動的） */}
      <SessionTimetable />

      <Footer />
    </>
  );
}
