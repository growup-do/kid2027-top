import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PhotoSlider from "@/components/PhotoSlider";
import { guests, voices } from "@/lib/data";

// GitHub Pages 等のサブパス配信に対応するためのベースパス（raw な img src には自動付与されないため手動で付与）
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function Home() {
  return (
    <>
      <Header active="report" />

      {/* ===== KV ===== */}
      <section className="sect--beige">
        <div className="wrap" style={{ paddingTop: 24, paddingBottom: 32 }}>
          <img
            src={`${BASE_PATH}/assets/kv.jpg`}
            alt="Kanagawa Innovators Day 2027 キービジュアル"
            style={{
              width: "100%",
              display: "block",
              borderRadius: 6,
              border: "1px solid #d5d2ca",
            }}
          />
          <div style={{ textAlign: "center", marginTop: 18 }}>
            <a
              href="#outline"
              className="wf-btnf"
              style={{ padding: "13px 48px", fontSize: 14 }}
            >
              参加登録
            </a>
          </div>
        </div>
      </section>

      {/* ===== CONCEPT ===== */}
      <section id="concept" className="sect">
        <div className="wrap">
          <h2
            style={{
              font: "900 clamp(22px,3.4vw,30px)/1.4 var(--font-jp)",
              margin: "0 0 24px",
              letterSpacing: ".01em",
            }}
          >
            可能性と情熱が{" "}
            <span style={{ borderBottom: "3px solid var(--accent)" }}>交差</span>{" "}
            する、
            <br />
            新たな未来を紡ぎ出す1日
          </h2>
          <div className="cols">
            <p
              style={{
                flex: 1,
                font: "400 13.5px/2.05 var(--font-jp)",
                color: "var(--body)",
                margin: 0,
              }}
            >
              企業の生産拠点やR＆D拠点、研究機関や大学などが集積する神奈川県。一方で超高齢社会・人口減少社会における様々な社会課題が存在するこの地は、まさに新規事業の実証と共創に最適な「未来市場の縮図」です。
              <br />
              <br />
              社会課題解決から新たな産業を創り出し、産業活性化が課題解決を加速させる ―
              その可能性が最も広がるこの地で、スタートアップ・ベンチャー、大企業・地場企業、自治体、投資家・金融機関、支援機関が出会い、未来を動かす挑戦が始まります。
            </p>
            <div
              className="wf-ph"
              style={{ width: 360, height: 220, flex: "none" }}
            >
              コンセプトビジュアル
            </div>
          </div>
        </div>
      </section>

      {/* ===== 2026 REPORT ===== */}
      <section id="report" className="sect sect--beige">
        <div className="wrap">
          <h2 className="h2">KID 2026 REPORT</h2>

          <div className="metrics">
            <div className="metric" style={{ flex: 1 }}>
              <div className="metric__label">来場者数</div>
              <div className="metric__value">
                0,000<small>名</small>
              </div>
            </div>
            <div className="metric" style={{ flex: 1 }}>
              <div className="metric__label">出展満足度</div>
              <div className="metric__value">
                00<small>%</small>
              </div>
            </div>
            <div className="metric" style={{ flex: 2, padding: "16px 20px" }}>
              <div className="metric__label" style={{ marginBottom: 10 }}>
                来場者属性
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
                <div
                  className="wf-ph"
                  style={{
                    width: 96,
                    height: 96,
                    borderRadius: "50%",
                    flex: "none",
                  }}
                >
                  円グラフ
                </div>
                <div
                  style={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    gap: 9,
                  }}
                >
                  {[
                    { label: "大企業", w: "70%" },
                    { label: "ベンチャー", w: "100%" },
                    { label: "自治体/支援", w: "55%" },
                    { label: "金融/投資家", w: "40%" },
                  ].map((row) => (
                    <div
                      key={row.label}
                      style={{ display: "flex", alignItems: "center", gap: 8 }}
                    >
                      <span
                        style={{
                          font: "600 11px sans-serif",
                          color: "#6a675f",
                          width: 78,
                        }}
                      >
                        {row.label}
                      </span>
                      <div className="wf-bar" style={{ flex: 1, width: row.w }} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* フォトスライダー（唯一の動的挙動） */}
          <PhotoSlider />

          {/* 参加者の声 x6 */}
          <div
            style={{
              font: "600 12px sans-serif",
              color: "var(--sub)",
              marginBottom: 10,
            }}
          >
            参加者の声（6件）
          </div>
          <div className="g3">
            {voices.map((v) => (
              <div
                key={v.name + v.text.slice(0, 6)}
                className="card"
                style={{
                  padding: 15,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    font: "700 40px Georgia,serif",
                    color: "#d9d6cf",
                    lineHeight: 0.6,
                    height: 16,
                  }}
                >
                  &ldquo;
                </div>
                <p
                  style={{
                    font: "400 12.5px/1.8 var(--font-jp)",
                    color: "var(--body-2)",
                    margin: "0 0 14px",
                    flex: 1,
                  }}
                >
                  {v.text}
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <div
                    className="wf-ph"
                    style={{
                      width: 30,
                      height: 30,
                      borderRadius: "50%",
                      flex: "none",
                    }}
                  >
                    •
                  </div>
                  <div>
                    <div
                      style={{ font: "700 11px sans-serif", color: "var(--text)" }}
                    >
                      {v.name}
                    </div>
                    <div
                      style={{ font: "500 10px sans-serif", color: "var(--sub-2)" }}
                    >
                      {v.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MAIN CONTENTS ===== */}
      <section id="contents" className="sect">
        <div className="wrap">
          <h2 className="h2">MAIN CONTENTS</h2>

          <div
            className="cols card"
            style={{ padding: "20px 22px", marginBottom: 14, gap: 22 }}
          >
            <div style={{ flex: 1 }}>
              <div
                style={{ font: "900 20px var(--font-jp)", marginBottom: 8 }}
              >
                KID Startup Pitch
              </div>
              <p
                style={{
                  font: "400 12.5px/1.85 sans-serif",
                  color: "var(--body-2)",
                  margin: "0 0 12px",
                }}
              >
                挑戦する想いに、発信の場を。神奈川県が掲げる13の社会課題の解決をテーマに、革新的なアイデアが火花を散らすスタートアップピッチ。KID最大の熱狂コンテンツ。
              </p>
              <span className="wf-btn">詳しくはこちら →</span>
            </div>
            <div
              className="wf-ph"
              style={{ width: 300, height: 150, flex: "none" }}
            >
              PITCH ビジュアル
            </div>
          </div>

          <div className="g2">
            {[
              {
                title: "Demo Day",
                body: "神奈川県内のベンチャー支援事業の成果が集結。実証と進化の軌跡を辿る特別コンテンツ。",
              },
              {
                title: "Exhibition",
                body: "大企業、ベンチャー、金融機関など多様なプレイヤーが混ざり合い、出会いが生まれる場。",
              },
            ].map((c) => (
              <div key={c.title} className="card" style={{ padding: 16 }}>
                <div
                  className="wf-ph"
                  style={{ width: "100%", height: 96, marginBottom: 12 }}
                >
                  {c.title}
                </div>
                <div style={{ font: "900 16px sans-serif", marginBottom: 6 }}>
                  {c.title}
                </div>
                <p
                  style={{
                    font: "400 11.5px/1.7 sans-serif",
                    color: "#5a574f",
                    margin: "0 0 10px",
                  }}
                >
                  {c.body}
                </p>
                <span
                  style={{ font: "600 11px sans-serif", color: "var(--accent)" }}
                >
                  詳しくはこちら →
                </span>
              </div>
            ))}
          </div>

          {/* 全幅バナー */}
          <div
            style={{
              marginTop: 14,
              background: "var(--pale-blue)",
              border: "1px dashed var(--pale-blue-border)",
              borderRadius: 6,
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
              }}
            >
              <div style={{ flex: 1 }}>
                <div style={{ font: "900 16px sans-serif", marginBottom: 4 }}>
                  協賛ブース出展・サイドイベント・協賛グッズ 受付中
                </div>
                <div
                  style={{ font: "400 11.5px sans-serif", color: "#5a574f" }}
                >
                  KID2027 の協賛・出展・グッズを受付中です。
                </div>
              </div>
              <span className="wf-btnf" style={{ flex: "none" }}>
                お申込みはこちら
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SIDE EVENTS ===== */}
      <section id="side" className="sect sect--beige">
        <div className="wrap">
          <h2 className="h2">SIDE EVENTS</h2>
          <div className="g3" style={{ marginBottom: 18 }}>
            {[
              "アメックスのビジネス・マッチング・ステーション",
              "神奈川発！共創コミュニティのぶっちゃけ話",
              "鉄道会社のオープンイノベーションぶっちゃけ話 by TRIP",
            ].map((title) => (
              <div key={title} className="card" style={{ overflow: "hidden" }}>
                <div
                  className="wf-ph"
                  style={{
                    height: 120,
                    border: "none",
                    borderBottom: "1px dashed var(--ph-dash-2)",
                  }}
                >
                  バナー
                </div>
                <div style={{ padding: 14 }}>
                  <div
                    style={{
                      font: "700 13px/1.5 sans-serif",
                      color: "var(--text)",
                    }}
                  >
                    {title}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center" }}>
            <span className="wf-btn">もっと見る →</span>
          </div>
        </div>
      </section>

      {/* ===== GUESTS ===== */}
      <section id="guests" className="sect">
        <div className="wrap">
          <h2 className="h2">GUESTS</h2>
          <div className="g6">
            {guests.map((g) => (
              <div key={g.name} style={{ textAlign: "center" }}>
                <div
                  className="wf-ph"
                  style={{
                    width: "100%",
                    aspectRatio: "1",
                    borderRadius: 8,
                    marginBottom: 8,
                  }}
                >
                  写真
                </div>
                <div
                  style={{
                    font: "500 9.5px/1.35 sans-serif",
                    color: "var(--sub-2)",
                    marginBottom: 2,
                  }}
                >
                  {g.role}
                </div>
                <div style={{ font: "700 12px sans-serif" }}>{g.name}</div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 20 }}>
            <span className="wf-btn">セッションを見る →</span>
          </div>
        </div>
      </section>

      {/* ===== PARTNERS ===== */}
      <section id="partners" className="sect sect--beige">
        <div className="wrap">
          <h2 className="h2">PARTNERS</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <PartnerRank label="■ Innovation Partner" accent>
              <div
                className="wf-ph"
                style={{ width: 260, height: 70, maxWidth: "100%" }}
              >
                ロゴ
              </div>
            </PartnerRank>

            <PartnerRank label="■ Gold">
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                {[0, 1].map((i) => (
                  <div
                    key={i}
                    className="wf-ph"
                    style={{ width: 150, height: 56 }}
                  >
                    ロゴ
                  </div>
                ))}
              </div>
            </PartnerRank>

            <PartnerRank label="■ Silver">
              <div className="wf-ph" style={{ width: 150, height: 52 }}>
                ロゴ
              </div>
            </PartnerRank>

            <PartnerRank label="■ Bronze">
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                {[0, 1].map((i) => (
                  <div
                    key={i}
                    className="wf-ph"
                    style={{ width: 130, height: 48 }}
                  >
                    ロゴ
                  </div>
                ))}
              </div>
            </PartnerRank>

            <PartnerRank label="■ Start Up & SMB Gold / Bronze">
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(8,1fr)",
                  gap: 10,
                }}
              >
                {Array.from({ length: 8 }).map((_, i) => (
                  <div key={i} className="wf-ph" style={{ height: 44 }}>
                    ロゴ
                  </div>
                ))}
              </div>
            </PartnerRank>

            <PartnerRank label="■ Supporter（自治体・支援機関・メディア 他）">
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(10,1fr)",
                  gap: 8,
                }}
              >
                {Array.from({ length: 20 }).map((_, i) => (
                  <div
                    key={i}
                    className="wf-ph"
                    style={{ height: 38, fontSize: 9 }}
                  >
                    {i === 19 ? "＋" : "ロゴ"}
                  </div>
                ))}
              </div>
            </PartnerRank>
          </div>
          <div style={{ textAlign: "center", marginTop: 20 }}>
            <span className="wf-btn">もっと見る →</span>
          </div>
        </div>
      </section>

      {/* ===== OUTLINE ===== */}
      <section id="outline" className="sect">
        <div className="wrap">
          <h2 className="h2">OUTLINE</h2>
          <div className="cols" style={{ gap: 24 }}>
            <div
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                gap: 14,
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: 16,
                  borderBottom: "1px dashed var(--bar)",
                  paddingBottom: 14,
                }}
              >
                <div
                  style={{
                    width: 88,
                    font: "700 13px sans-serif",
                    color: "var(--accent)",
                    flex: "none",
                  }}
                >
                  開催日時
                </div>
                <div
                  style={{
                    font: "400 12.5px/1.7 sans-serif",
                    color: "var(--body)",
                  }}
                >
                  <b>STARTUP PITCH NIGHT</b>
                  <br />
                  2027.1.21（木）16:00-18:30
                  <br />
                  <b style={{ display: "inline-block", marginTop: 8 }}>
                    MAIN SUMMIT
                  </b>
                  <br />
                  2027.1.22（金）10:00-18:30
                </div>
              </div>
              <div style={{ display: "flex", gap: 16 }}>
                <div
                  style={{
                    width: 88,
                    font: "700 13px sans-serif",
                    color: "var(--accent)",
                    flex: "none",
                  }}
                >
                  会 場
                </div>
                <div
                  style={{
                    font: "400 12.5px/1.7 sans-serif",
                    color: "var(--body)",
                  }}
                >
                  横浜エリア（会場調整中）
                </div>
              </div>
            </div>
            <div style={{ flex: 1 }}>
              <div className="wf-ph" style={{ width: "100%", height: 200 }}>
                GOOGLE MAP / 会場写真
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 神奈川県のベンチャー支援 ===== */}
      <section id="support" className="sect sect--beige">
        <div className="wrap">
          <h2 style={{ font: "900 22px var(--font-jp)", margin: "0 0 14px" }}>
            神奈川県のベンチャー支援
          </h2>
          <p
            style={{
              font: "400 12.5px/1.95 sans-serif",
              color: "var(--body)",
              margin: "0 0 20px",
              maxWidth: 900,
            }}
          >
            ベンチャー支援のかながわモデル「HATSU–SHIN
            KANAGAWA」により成長段階に応じた支援に取り組んでいます。「HATSU鎌倉」など県内3か所の起業家創出拠点、横浜のベンチャー成長促進拠点「SHINみなとみらい」で、個別伴走支援や大企業との事業連携プロジェクト創出に取り組んでいます。
          </p>
          <div style={{ font: "700 13px sans-serif", marginBottom: 12 }}>
            神奈川県のベンチャー支援実績
          </div>
          <div className="cols" style={{ gap: 14 }}>
            {[
              { label: "ベンチャー企業に対する事業化支援件数", value: "293", unit: "件" },
              { label: "OI支援事業の協議会参画企業", value: "1,186", unit: "件" },
              { label: "OI支援事業から誕生した事業化件数", value: "41", unit: "件" },
            ].map((s) => (
              <div
                key={s.label}
                className="card"
                style={{
                  flex: 1,
                  padding: 16,
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                }}
              >
                <div
                  className="wf-ph"
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    flex: "none",
                  }}
                >
                  icon
                </div>
                <div>
                  <div
                    style={{
                      font: "500 11px/1.4 sans-serif",
                      color: "var(--sub)",
                    }}
                  >
                    {s.label}
                  </div>
                  <div style={{ font: "900 26px var(--font-mono)" }}>
                    {s.value}
                    <span style={{ fontSize: 14 }}>{s.unit}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ILLUSTRATION ===== */}
      <section id="illust" className="sect">
        <div className="wrap">
          <h2
            style={{
              font: "900 20px/1.5 var(--font-jp)",
              margin: "0 0 14px",
              color: "#5a574f",
            }}
          >
            神奈川県の地域特性・プレイヤーを活かした
            <br />
            イノベーション拠点であることをイラストで表現
          </h2>
          <div
            className="wf-ph"
            style={{ width: "100%", height: 300, fontSize: 13 }}
          >
            イラスト表現エリア（別途制作）
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <Footer />
    </>
  );
}

function PartnerRank({
  label,
  accent,
  children,
}: {
  label: string;
  accent?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div
        style={{
          font: "700 12px var(--font-mono)",
          color: accent ? "var(--accent)" : "var(--sub)",
          marginBottom: 8,
        }}
      >
        {label}
      </div>
      {children}
    </div>
  );
}
