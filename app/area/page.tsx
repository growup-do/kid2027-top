import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "会場エリアマップ・出展社｜KID 2027",
  description:
    "Kanagawa Innovators Day 2027 の会場フロアマップと出展社一覧（協賛カテゴリー別）。",
};

// 協賛カテゴリー（ランクが上ほどロゴ枠を大きく）
const RANKS = [
  { label: "Gold", color: "#9a7a1f", cols: 3, height: 100, count: 3, gap: 14 },
  { label: "Silver", color: "#8a8f99", cols: 4, height: 80, count: 4, gap: 12 },
  { label: "Bronze", color: "#a9713f", cols: 6, height: 64, count: 6, gap: 12 },
  { label: "Start Up & SMB Gold", color: "#9a7a1f", cols: 6, height: 64, count: 8, gap: 12 },
  {
    label: "Start Up & SMB Bronze",
    color: "#a9713f",
    cols: 8,
    height: 52,
    count: 8,
    gap: 10,
    fontSize: 9,
  },
  {
    label: "Supporter",
    color: "#7a776f",
    cols: 10,
    height: 40,
    count: 10,
    gap: 8,
    fontSize: 8,
    logoLabel: "ロゴ",
  },
  {
    label: "Kanagawa Startup Showcase",
    color: "#188a5a",
    cols: 6,
    height: 64,
    count: 12,
    gap: 12,
  },
] as const;

export default function AreaPage() {
  return (
    <>
      <Header active="area" />

      {/* ページ見出し */}
      <section className="page-head">
        <div className="wrap page-head__inner">
          <div className="page-head__eyebrow">EXHIBITORS &amp; EVENT</div>
          <h1 className="page-head__title">会場エリアマップ・出展社</h1>
          <p className="page-head__lead">
            会場フロアマップと出展社一覧をご確認ください。※内容は仮です。
          </p>
        </div>
      </section>

      {/* EXHIBITORS */}
      <section className="sect">
        <div className="wrap">
          <h2 className="h2">EXHIBITORS</h2>

          {/* Innovation Partner（最大・全幅1枠） */}
          <div style={{ marginBottom: 30 }}>
            <div
              style={{
                font: "800 15px 'JetBrains Mono',monospace",
                color: "var(--accent)",
                marginBottom: 12,
                letterSpacing: "0.02em",
              }}
            >
              Innovation Partner
            </div>
            <div className="wf-ph" style={{ width: "100%", height: 150, borderRadius: 8 }}>
              出展社ロゴ
            </div>
          </div>

          {/* Gold 以下（ランク別グリッド） */}
          {RANKS.map((r, i) => (
            <div key={r.label} style={{ marginBottom: i === RANKS.length - 1 ? 0 : 26 }}>
              <div
                style={{
                  font: "800 14px 'JetBrains Mono',monospace",
                  color: r.color,
                  marginBottom: 12,
                }}
              >
                {r.label}
              </div>
              <div
                className="exgrid"
                style={{ gridTemplateColumns: `repeat(${r.cols}, 1fr)`, gap: r.gap }}
              >
                {Array.from({ length: r.count }).map((_, j) => (
                  <div
                    key={j}
                    className="wf-ph"
                    style={{
                      height: r.height,
                      fontSize: "fontSize" in r ? r.fontSize : undefined,
                    }}
                  >
                    {"logoLabel" in r ? r.logoLabel : "出展社ロゴ"}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 協賛ブース / サイドイベント バナー */}
      <section className="sect">
        <div className="wrap">
          <div
            style={{
              background: "var(--pale-blue)",
              border: "1px dashed var(--pale-blue-border)",
              borderRadius: 8,
              overflow: "hidden",
            }}
          >
            <div
              className="wf-ph"
              style={{
                width: "100%",
                height: 70,
                border: "none",
                borderBottom: "1px dashed var(--pale-blue-border)",
                color: "#8aa0cf",
              }}
            >
              協賛ブース出展・サイドイベント・協賛グッズ 受付中 ｜ バナー
            </div>
            <div
              className="cols"
              style={{
                alignItems: "center",
                justifyContent: "space-between",
                gap: 20,
                padding: "16px 22px",
                flexWrap: "wrap",
              }}
            >
              <div style={{ flex: 1, minWidth: 220 }}>
                <div style={{ font: "900 16px sans-serif", marginBottom: 4 }}>
                  協賛ブース出展・サイドイベント・協賛グッズ 受付中
                </div>
                <div style={{ font: "400 11.5px sans-serif", color: "#5a574f" }}>
                  KID2027 の出展・サイドイベント・グッズを受付中です。
                </div>
              </div>
              <span className="wf-btnf" style={{ flex: "none" }}>
                お申込みはこちら
              </span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
