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

// 募集テーマ（神奈川県の社会課題・13項目／仮）
const THEMES = [
  "子ども・若者",
  "教育・人材育成",
  "未病・健康長寿",
  "医療・ヘルスケア",
  "高齢社会・介護",
  "環境・エネルギー",
  "防災・減災",
  "農業・食",
  "観光・地域活性",
  "交通・モビリティ",
  "産業・ものづくり",
  "デジタル・DX",
  "共生社会・ダイバーシティ",
];

// スケジュール（仮）
const SCHEDULE = [
  { d: "2027.1.21", t: "エントリー締切", b: "応募フォームより受付（00:00まで）" },
  { d: "2027.1.21", t: "書類選考", b: "エントリー内容をもとに選考" },
  { d: "2027.1.21", t: "予選", b: "00:00–00:00（登壇者による予選ピッチ）" },
  { d: "2027.1.21", t: "本選", b: "00:00–00:00 BASEGATE 横浜関内（THE LIVE）" },
];

// セクション見出し（英語アイビー＋日本語サブ）
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

export default function PitchPage() {
  return (
    <>
      <Header active="pitch" />

      {/* ===== KV ===== */}
      <section className="sect--beige">
        <div className="wrap" style={{ paddingTop: 24, paddingBottom: 28 }}>
          <img
            src={`${BASE_PATH}/assets/pitch-kv.jpg`}
            alt="KID Startup Pitch 2027 キービジュアル"
            style={{
              width: "100%",
              display: "block",
              borderRadius: 6,
              border: "1px solid #d5d2ca",
            }}
          />
          <div style={{ textAlign: "center", marginTop: 18 }}>
            <a href="#entry" className="wf-btnf" style={{ padding: "13px 44px", fontSize: 14 }}>
              エントリーはこちら
            </a>
          </div>
        </div>
      </section>

      {/* ===== 開催概要 ===== */}
      <section id="outline" className="sect">
        <div className="wrap">
          <SectionHead en="OUTLINE" jp="開催概要" />
          <div className="g2">
            {[
              { k: "本選", v: "2027.1.21（木） 00:00–00:00" },
              { k: "予選", v: "2027.1.21（木） 00:00–00:00" },
              { k: "会場", v: "BASEGATE 横浜関内（THE LIVE）" },
              { k: "エントリー受付", v: "2027.1.21（木） 00:00 まで" },
            ].map((r) => (
              <div
                key={r.k}
                className="card"
                style={{ padding: "16px 18px", display: "flex", gap: 14, alignItems: "baseline" }}
              >
                <div style={{ font: "700 13px sans-serif", color: "var(--accent)", width: 116, flex: "none" }}>
                  {r.k}
                </div>
                <div style={{ font: "600 13px/1.6 sans-serif", color: "var(--body)" }}>{r.v}</div>
              </div>
            ))}
          </div>
          <p style={{ font: "400 11px sans-serif", color: "#9a978f", margin: "12px 0 0" }}>
            ※日時・会場は仮です。
          </p>
        </div>
      </section>

      {/* ===== CONCEPT ===== */}
      <section className="sect sect--beige">
        <div className="wrap">
          <SectionHead en="CONCEPT" jp="挑戦する想いに、発信の場を。" />
          <p style={{ font: "400 13.5px/2.05 var(--font-jp)", color: "var(--body)", margin: 0, maxWidth: 900 }}>
            神奈川県が掲げる社会課題の解決をテーマに、革新的なアイデアと熱量を持つ起業家が集い、火花を散らすスタートアップピッチ。
            全国の起業家（起業前も可）を対象に、県内での実証・事業連携・成長支援へとつながる「発信の場」を提供します。
            KID 最大の熱狂コンテンツとして、挑戦者たちの想いを未来へつなぎます。
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

      {/* ===== THEME ===== */}
      <section id="theme" className="sect sect--beige">
        <div className="wrap">
          <SectionHead en="THEME" jp="募集テーマ（社会課題 13項目）" />
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

      {/* ===== SPEAKER ===== */}
      <section id="speaker" className="sect sect--beige">
        <div className="wrap">
          <SectionHead en="SPEAKER" jp="登壇者（ファイナリスト）" />
          <div className="pitch__people">
            {day1Pitch.speakers.map((p) => (
              <Person key={p.name} p={p} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== MODERATOR ===== */}
      <section id="moderator" className="sect">
        <div className="wrap">
          <SectionHead en="MODERATOR" jp="モデレーター" />
          <div className="pitch__people">
            {MODERATORS.map((p) => (
              <Person key={p.name} p={p} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== MERIT ===== */}
      <section id="merit" className="sect sect--beige">
        <div className="wrap">
          <SectionHead en="MERIT" jp="登壇するメリット" />
          <div className="g3">
            {[
              { t: "発信・露出", b: "県内最大級のイノベーションイベントで、来場者・投資家・大企業へ直接プレゼンできる。" },
              { t: "成長支援", b: "受賞者には県のベンチャー支援拠点による伴走支援・事業連携の機会を提供。" },
              { t: "ネットワーク", b: "審査員・協賛企業・登壇者との交流を通じて、共創・資金調達の接点が生まれる。" },
            ].map((m) => (
              <div key={m.t} className="card" style={{ padding: 16 }}>
                <div style={{ font: "900 15px var(--font-jp)", marginBottom: 8 }}>{m.t}</div>
                <p style={{ font: "400 11.5px/1.7 sans-serif", color: "#5a574f", margin: 0 }}>{m.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SCHEDULE ===== */}
      <section id="schedule" className="sect">
        <div className="wrap">
          <SectionHead en="SCHEDULE" jp="スケジュール" />
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {SCHEDULE.map((s) => (
              <div
                key={s.t}
                className="card"
                style={{ padding: "14px 18px", display: "flex", gap: 18, alignItems: "baseline", flexWrap: "wrap" }}
              >
                <div style={{ font: "800 13px var(--font-mono)", color: "var(--accent)", width: 90, flex: "none" }}>
                  {s.d}
                </div>
                <div style={{ font: "800 13px var(--font-jp)", width: 120, flex: "none" }}>{s.t}</div>
                <div style={{ font: "400 12px/1.6 sans-serif", color: "var(--body-2)", flex: 1, minWidth: 200 }}>
                  {s.b}
                </div>
              </div>
            ))}
          </div>
          <p style={{ font: "400 11px sans-serif", color: "#9a978f", margin: "12px 0 0" }}>※日程は仮です。</p>
        </div>
      </section>

      {/* ===== ENTRY ===== */}
      <section id="entry" className="sect sect--beige">
        <div className="wrap">
          <SectionHead en="ENTRY" jp="応募要項" />
          <div className="cols" style={{ gap: 24 }}>
            <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                { k: "対象", v: "全国の起業家（起業前も可）" },
                { k: "対象外", v: "大企業は対象外" },
                { k: "参加費", v: "無料" },
                { k: "締切", v: "2027.1.21（木） 00:00 まで" },
              ].map((r) => (
                <div key={r.k} style={{ display: "flex", gap: 16, borderBottom: "1px dashed var(--bar)", paddingBottom: 12 }}>
                  <div style={{ width: 88, font: "700 13px sans-serif", color: "var(--accent)", flex: "none" }}>
                    {r.k}
                  </div>
                  <div style={{ font: "400 12.5px/1.7 sans-serif", color: "var(--body)" }}>{r.v}</div>
                </div>
              ))}
            </div>
            <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", gap: 14 }}>
              <div
                className="wf-ph"
                style={{ width: "100%", height: 120, borderRadius: 8 }}
              >
                応募フォーム / 募集要項 PDF
              </div>
              <a href="#" className="wf-btnf" style={{ alignSelf: "flex-start", padding: "13px 44px", fontSize: 14 }}>
                エントリーはこちら
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
