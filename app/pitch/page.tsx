import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { day1Pitch, type PitchPerson } from "@/lib/sessions";

export const metadata: Metadata = {
  title: "KID Startup Pitch｜KID 2027",
  description:
    "Kanagawa Innovators Day 2027 の目玉「KID Startup Pitch」。神奈川県の社会課題解決をテーマに、全国の起業家が挑むピッチコンテスト。",
};

// サブパス配信対応（raw img src には basePath が自動付与されないため手動付与）
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

// 神奈川グランドデザイン（ピッチテーマの背景となる県の総合計画）
const GRAND_DESIGN_URL = "https://www.pref.kanagawa.jp/docs/r5k/nkg.html";

// モデレーター（仮）
const MODERATORS: PitchPerson[] = [
  { role: "MC / モデレーター", name: "近藤 さや香", en: "Sayaka Kondo" },
  { role: "MC / モデレーター", name: "米澤 航太郎", en: "Kotaro Yonezawa" },
];

// 企業賞（協賛企業・仮）
const AWARD_COMPANIES = [
  "アメリカン・エキスプレス",
  "小田急電鉄",
  "京セラ",
  "きらぼし銀行",
  "資生堂",
  "鈴廣かまぼこ",
  "横浜銀行",
];

// ピッチテーマ（神奈川県の社会課題・13項目／2026 と同一）
const THEMES = [
  "子ども・若者",
  "教育",
  "未病・健康長寿",
  "文化・スポーツ",
  "観光・地域活性化",
  "経済・労働",
  "農林水産",
  "脱炭素・環境",
  "生活困窮",
  "共生社会",
  "くらしの安心",
  "危機管理",
  "都市基盤",
];

// 去年（2026）のフォトギャラリー（枚数は仮）
const GALLERY = ["オープニング", "ピッチ登壇", "審査員講評", "会場の様子", "表彰式", "集合写真"];

// セクション見出し（英語アイブロウ＋日本語）
function SectionHead({ en, jp }: { en: string; jp: string }) {
  return (
    <div style={{ marginBottom: 20 }}>
      <div
        style={{
          font: "800 13px var(--font-mono)",
          color: "var(--accent)",
          letterSpacing: "0.12em",
          marginBottom: 6,
        }}
      >
        {en}
      </div>
      <h2 style={{ font: "900 22px var(--font-jp)", margin: 0 }}>{jp}</h2>
    </div>
  );
}

// 審査員・モデレーター用（写真＋所属/肩書/氏名）
function Person({ p }: { p: PitchPerson }) {
  return (
    <div className="person">
      <div className="person__photo wf-ph">写真</div>
      <div>
        {p.org && <div className="person__org">{p.org}</div>}
        {p.role && <div className="person__org">{p.role}</div>}
        <div className="person__name">{p.name}</div>
        <div className="person__en">{p.en}</div>
      </div>
    </div>
  );
}

// ファイナリスト用（企業ロゴ＋登壇者＋ピッチタイトル）
function Finalist({ p }: { p: PitchPerson }) {
  return (
    <div className="card" style={{ padding: 18, display: "flex", flexDirection: "column", gap: 14 }}>
      <div className="wf-ph" style={{ width: 150, height: 48, alignSelf: "flex-start" }}>
        企業ロゴ
      </div>
      <Person p={p} />
      {p.pitchTitle && (
        <div
          style={{
            borderTop: "1px dashed var(--bar)",
            paddingTop: 12,
            font: "800 13.5px/1.6 var(--font-jp)",
            color: "var(--text)",
          }}
        >
          <span style={{ font: "700 10px var(--font-mono)", color: "var(--accent)", marginRight: 8 }}>
            PITCH
          </span>
          {p.pitchTitle}
        </div>
      )}
    </div>
  );
}

export default function PitchPage() {
  return (
    <>
      <Header active="pitch" />

      {/* ===== KV ===== */}
      <section className="sect--beige">
        <div className="wrap" style={{ paddingTop: 24, paddingBottom: 28 }}>
          <img
            src={BASE_PATH + "/assets/pitch-kv.jpg"}
            alt="KID Startup Pitch 2027 キービジュアル"
            style={{
              width: "100%",
              display: "block",
              borderRadius: 6,
              border: "1px solid #d5d2ca",
            }}
          />
          <div style={{ textAlign: "center", marginTop: 18 }}>
            <a href="#outline" className="wf-btnf" style={{ padding: "13px 44px", fontSize: 14 }}>
              観覧予約はこちら
            </a>
          </div>
        </div>
      </section>

      {/* ===== CONCEPT ===== */}
      <section className="sect">
        <div className="wrap">
          <SectionHead en="CONCEPT" jp="挑戦する想いに、発信の場を。" />
          <p style={{ font: "400 13.5px/2.05 var(--font-jp)", color: "var(--body)", margin: 0, maxWidth: 900 }}>
            神奈川県が掲げる社会課題の解決をテーマに、革新的なアイデアと熱量を持つ起業家が集い、火花を散らすスタートアップピッチ。
            全国の起業家（起業前も可）を対象に、県内での実証・事業連携・成長支援へとつながる「発信の場」を提供します。
            KID 最大の熱狂コンテンツとして、挑戦者たちの想いを未来へつなぎます。
          </p>
        </div>
      </section>

      {/* ===== FINALIST（コンセプト直後に配置） ===== */}
      <section id="finalist" className="sect sect--beige">
        <div className="wrap">
          <SectionHead en="FINALIST" jp="ファイナリスト" />
          <div className="g2">
            {day1Pitch.speakers.map((p) => (
              <Finalist key={p.name} p={p} />
            ))}
          </div>
          <p style={{ font: "400 11px sans-serif", color: "#9a978f", margin: "12px 0 0" }}>
            ※企業ロゴ・ピッチタイトルは仮です。
          </p>
        </div>
      </section>

      {/* ===== AWARD ===== */}
      <section id="award" className="sect">
        <div className="wrap">
          <SectionHead en="AWARD" jp="受賞特典" />
          <div className="card" style={{ padding: "18px 20px", marginBottom: 18 }}>
            <div style={{ font: "900 16px var(--font-jp)", marginBottom: 6 }}>KID賞</div>
            <p style={{ font: "400 12.5px/1.8 sans-serif", color: "var(--body-2)", margin: 0 }}>
              ベンチャー成長促進拠点「SHINみなとみらい」の利用権をはじめ、県のベンチャー支援メニューによる伴走支援を提供（内容は仮）。
            </p>
          </div>
          <div style={{ font: "700 13px sans-serif", color: "var(--sub)", marginBottom: 10 }}>
            企業賞（協賛企業・7賞）
          </div>
          <div className="g6">
            {AWARD_COMPANIES.map((c) => (
              <div key={c} className="card" style={{ padding: 10, textAlign: "center" }}>
                <div className="wf-ph" style={{ height: 48, marginBottom: 8 }}>ロゴ</div>
                <div style={{ font: "600 10px/1.4 sans-serif", color: "#5a574f" }}>{c} 賞</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== THEME（ピッチテーマ） ===== */}
      <section id="theme" className="sect sect--beige">
        <div className="wrap">
          <SectionHead en="THEME" jp="ピッチテーマ（社会課題 13項目）" />
          <p
            style={{
              font: "400 13.5px/2 var(--font-jp)",
              color: "var(--body)",
              margin: "0 0 20px",
              maxWidth: 900,
            }}
          >
            県が取り組む社会課題の解決をテーマに、これからの世界を神奈川から変えていく革新的なビジネスプランを競い合います。
          </p>
          <div className="g3">
            {THEMES.map((t, i) => (
              <div
                key={t}
                className="card"
                style={{ padding: "12px 14px", display: "flex", gap: 10, alignItems: "center" }}
              >
                <span
                  style={{
                    font: "800 12px var(--font-mono)",
                    color: "var(--accent)",
                    width: 24,
                    flex: "none",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span style={{ font: "700 12.5px sans-serif", color: "var(--text)" }}>{t}</span>
              </div>
            ))}
          </div>

          {/* 神奈川グランドデザインへの導線 */}
          <div
            className="card"
            style={{
              marginTop: 20,
              padding: "16px 20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 16,
              flexWrap: "wrap",
              background: "var(--pale-blue)",
              borderColor: "var(--pale-blue-border)",
            }}
          >
            <div>
              <div style={{ font: "800 14px var(--font-jp)", marginBottom: 4 }}>
                テーマの背景：かながわグランドデザイン
              </div>
              <div style={{ font: "400 11.5px/1.6 sans-serif", color: "#5a574f" }}>
                神奈川県が取り組む社会課題と将来像は、県の総合計画「かながわグランドデザイン」に基づいています。
              </div>
            </div>
            <a
              href={GRAND_DESIGN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="wf-btn"
              style={{ flex: "none" }}
            >
              かながわグランドデザインを見る ↗
            </a>
          </div>
        </div>
      </section>

      {/* ===== JUDGE ===== */}
      <section id="judge" className="sect">
        <div className="wrap">
          <SectionHead en="JUDGE" jp="審査員" />
          <div className="pitch__people">
            {day1Pitch.judges.map((p) => (
              <Person key={p.name} p={p} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== MODERATOR ===== */}
      <section id="moderator" className="sect sect--beige">
        <div className="wrap">
          <SectionHead en="MODERATOR" jp="モデレーター" />
          <div className="pitch__people">
            {MODERATORS.map((p) => (
              <Person key={p.name} p={p} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== GALLERY（去年の写真） ===== */}
      <section id="gallery" className="sect">
        <div className="wrap">
          <SectionHead en="GALLERY" jp="KID Startup Pitch 2026 フォトギャラリー" />
          <div className="g3">
            {GALLERY.map((cap) => (
              <div key={cap} className="wf-ph" style={{ aspectRatio: "4 / 3", borderRadius: 8 }}>
                写真：{cap}
              </div>
            ))}
          </div>
          <p style={{ font: "400 11px sans-serif", color: "#9a978f", margin: "12px 0 0" }}>
            ※昨年（KID 2026）の写真を掲載予定。枚数・並びは仮です。
          </p>
        </div>
      </section>

      {/* ===== OUTLINE（最下部：開催概要・会場・MAP・観覧予約） ===== */}
      <section id="outline" className="sect sect--beige section-anchor">
        <div className="wrap">
          <SectionHead en="OUTLINE" jp="開催概要" />
          <div className="cols" style={{ gap: 24 }}>
            <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 14 }}>
              {[
                { k: "開催日時", v: "2027.1.21（木） 00:00–00:00（本選）" },
                { k: "会 場", v: "BASEGATE 横浜関内（THE LIVE）" },
                { k: "参加費", v: "無料（要観覧予約）" },
              ].map((r) => (
                <div
                  key={r.k}
                  style={{ display: "flex", gap: 16, borderBottom: "1px dashed var(--bar)", paddingBottom: 12 }}
                >
                  <div style={{ width: 88, font: "700 13px sans-serif", color: "var(--accent)", flex: "none" }}>
                    {r.k}
                  </div>
                  <div style={{ font: "400 12.5px/1.7 sans-serif", color: "var(--body)" }}>{r.v}</div>
                </div>
              ))}
            </div>
            <div style={{ flex: 1 }}>
              <div className="wf-ph" style={{ width: "100%", height: 220, borderRadius: 8 }}>
                GOOGLE MAP
              </div>
            </div>
          </div>

          {/* 観覧予約は外部フォーム（別サイト）へ遷移。URL は別途差し替え */}
          <div style={{ textAlign: "center", marginTop: 26 }}>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="wf-btnf"
              style={{ padding: "14px 52px", fontSize: 14 }}
            >
              観覧予約はこちら ↗
            </a>
          </div>
          <p style={{ font: "400 11px sans-serif", color: "#9a978f", margin: "12px 0 0", textAlign: "center" }}>
            ※日時・会場は仮です。
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
