// セッション/タイムテーブルのデータ（前回登壇者を織り込んだダミー）
// レイアウト定数はグリッド行高と NOW バー位置計算で共有する。

export type Day = 1 | 2;

export type RawSession = {
  st: number; // ステージ index（0..4）
  s: string; // 開始 "HH:MM"
  e: string; // 終了 "HH:MM"
  title: string;
  sp: string; // 登壇者
};

export type DayData = {
  base: string; // タイムテーブル開始時刻
  end: string; // タイムテーブル終了時刻
  now: string | null; // 仮の現在時刻（null = NOW バー非表示）
  stages: string[];
  sessions: RawSession[];
};

// 30分スロット高 / ヘッダー行高（px）— grid-template-rows と NOW バー計算で必ず一致させる
export const SLOT = 78;
export const HEAD = 40;

// ステージ列の背景 tint / 文字色
export const STAGE_TINT = ["#eaf1fb", "#eef7f2", "#faf1ef", "#f4f0fa", "#f6f3ea"];
export const STAGE_TINT_TEXT = ["#1d5fd6", "#188a5a", "#c0473a", "#7b53b8", "#9a7a1f"];

// DAY1（1.21）は MAIN STAGE で KID Startup Pitch のみ。
// 番組表ではなく登壇者・審査員カードで見せ、Pitch 詳細ページへリンクする。
export type PitchPerson = {
  org?: string; // 所属
  role?: string; // 肩書
  name: string; // 氏名
  en: string; // ローマ字
};

export type Day1Pitch = {
  time: string;
  stage: string;
  title: string;
  lead: string;
  href: string; // KID Startup Pitch 詳細ページ（今後作成）
  speakers: PitchPerson[];
  judges: PitchPerson[];
};

export const day1Pitch: Day1Pitch = {
  time: "16:45–18:45",
  stage: "Final Stage",
  title: "KID Startup Pitch -挑戦者たちの戦陣-",
  lead:
    "神奈川県が掲げる社会課題の解決をテーマに、選ばれた挑戦者たちが火花を散らす KID 最大の熱狂コンテンツ。DAY1 は MAIN STAGE でのファイナルピッチのみを実施します。",
  href: "/pitch", // ※ KID Startup Pitch ページは今後作成
  speakers: [
    { org: "株式会社虫秘茶", role: "取締役", name: "芝 竜太郎", en: "Ryutaro Shiba" },
    { org: "株式会社NIJIN", role: "NIJINアカデミー企業連携担当", name: "菊地 世恋", en: "Seren Kikuchi" },
    { org: "株式会社クロスメディスン", role: "代表取締役", name: "中井 洸我", en: "Koga Nakai" },
    { org: "エグゼヴィータ株式会社", role: "代表取締役", name: "多田 洋史", en: "Hiroshi Tada" },
    { org: "株式会社カマン", role: "代表取締役", name: "善積 真吾", en: "Shingo Yoshizumi" },
  ],
  judges: [
    { role: "神奈川県知事", name: "黒岩 祐治", en: "Yuji Kuroiwa" },
    {
      role: "一般社団法人鶴岡サイエンスパーク代表理事・慶應義塾大学名誉教授",
      name: "冨田 勝",
      en: "Masaru Tomita",
    },
    { org: "株式会社NTTドコモ・ベンチャーズ", role: "代表取締役CEO＆CCO", name: "笹原 優子", en: "Yuko Sasahara" },
    { org: "面白法人カヤック", role: "代表取締役CEO", name: "柳澤 大輔", en: "Daisuke Yanasawa" },
  ],
};

export const dayData: Record<2, DayData> = {
  // DAY2 MAIN SUMMIT 10:00-19:00（仮の現在時刻 15:20）
  2: {
    base: "10:00",
    end: "19:00",
    now: "15:20",
    stages: ["MAIN STAGE", "SESSION ROOM A", "SESSION ROOM B", "DEMO STAGE", "WORKSHOP"],
    sessions: [
      { st: 0, s: "10:00", e: "10:30", title: "オープニングキーノート", sp: "冨田 勝（代表理事）" },
      { st: 0, s: "10:45", e: "11:45", title: "基調講演：日本の産業とイノベーション", sp: "島田 太郎（東芝 社長CEO）" },
      { st: 0, s: "13:00", e: "14:00", title: "パネル：大企業とスタートアップの共創", sp: "資生堂・鈴廣・きらぼし銀行 ほか" },
      { st: 0, s: "14:30", e: "15:30", title: "社会課題解決セッション（超高齢社会）", sp: "自治体・支援機関パネル" },
      { st: 0, s: "16:00", e: "17:00", title: "KID Startup Pitch ファイナル", sp: "ファイナリスト 6社" },
      { st: 0, s: "17:30", e: "19:00", title: "クロージング & アワード", sp: "神奈川県・審査員" },

      { st: 1, s: "10:45", e: "11:45", title: "ディープテックの事業化最前線", sp: "アルガルバイオ・Zip Infrastructure" },
      { st: 1, s: "13:00", e: "14:00", title: "地域金融とベンチャー支援", sp: "横浜銀行・日本政策金融公庫" },
      { st: 1, s: "14:30", e: "15:30", title: "オープンイノベーションの実践知", sp: "eiicon 松尾 真由子" },
      { st: 1, s: "16:00", e: "17:00", title: "グローバル展開とスケール戦略", sp: "アメックス 渡邉 慎司" },

      { st: 2, s: "11:00", e: "12:00", title: "HATSU–SHIN KANAGAWA 支援報告", sp: "神奈川県 産業振興課" },
      { st: 2, s: "13:15", e: "14:15", title: "エンタメ×テクノロジー", sp: "コーエーテクモHD 襟川 陽一" },
      { st: 2, s: "15:00", e: "16:00", title: "食・ものづくりの地域ブランド", sp: "鈴廣かまぼこ 鈴木 智博" },
      { st: 2, s: "16:30", e: "17:30", title: "投資家が語る次の10年", sp: "VC パネル" },

      { st: 3, s: "10:30", e: "12:30", title: "Demo Day 前半（支援事業成果）", sp: "採択ベンチャー 10社" },
      { st: 3, s: "13:30", e: "15:30", title: "Demo Day 後半（実証プロジェクト）", sp: "採択ベンチャー 10社" },
      { st: 3, s: "16:00", e: "18:00", title: "Exhibition ステージ交流", sp: "出展企業" },

      { st: 4, s: "10:30", e: "11:30", title: "事業アイデア創出ワークショップ", sp: "eiicon ファシリテーター" },
      { st: 4, s: "13:00", e: "14:30", title: "共創プロジェクト設計ワークショップ", sp: "大企業 新規事業担当" },
      { st: 4, s: "15:00", e: "16:30", title: "ピッチ・ブラッシュアップ道場", sp: "メンター陣" },
    ],
  },
};

export const dayLabel: Record<Day, string> = {
  1: "DAY1｜STARTUP PITCH NIGHT　2027.1.21（木）16:00–18:30",
  2: "DAY2｜MAIN SUMMIT　2027.1.22（金）10:00–19:00",
};

export const toMin = (t: string) => {
  const [h, m] = t.split(":").map(Number);
  return h * 60 + m;
};

export const fmt = (m: number) => {
  const h = Math.floor(m / 60);
  const mm = m % 60;
  return `${h}:${String(mm).padStart(2, "0")}`;
};
