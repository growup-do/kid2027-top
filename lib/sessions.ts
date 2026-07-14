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

export const dayData: Record<Day, DayData> = {
  // DAY1 STARTUP PITCH NIGHT 16:00-18:30（過去日想定：NOW バーなし）
  1: {
    base: "16:00",
    end: "18:30",
    now: null,
    stages: ["MAIN STAGE", "PITCH STAGE A", "PITCH STAGE B", "NETWORKING", "WORKSHOP"],
    sessions: [
      { st: 0, s: "16:00", e: "16:20", title: "オープニング / 神奈川県知事挨拶", sp: "神奈川県" },
      { st: 0, s: "16:30", e: "17:30", title: "KID Startup Pitch 一次審査ラウンド", sp: "登壇スタートアップ 8社" },
      { st: 0, s: "17:45", e: "18:30", title: "ファイナルピッチ & 表彰", sp: "審査員・ゲスト" },
      { st: 1, s: "16:20", e: "17:10", title: "社会課題テーマ別ピッチ①（環境・エネルギー）", sp: "スタートアップ 4社" },
      { st: 1, s: "17:20", e: "18:10", title: "社会課題テーマ別ピッチ②（ヘルスケア）", sp: "スタートアップ 4社" },
      { st: 2, s: "16:20", e: "17:10", title: "社会課題テーマ別ピッチ③（モビリティ）", sp: "スタートアップ 4社" },
      { st: 2, s: "17:20", e: "18:10", title: "社会課題テーマ別ピッチ④（防災・インフラ）", sp: "スタートアップ 4社" },
      { st: 3, s: "16:30", e: "18:30", title: "ネットワーキングラウンジ（自由交流）", sp: "参加者・出展企業" },
      { st: 4, s: "16:40", e: "17:40", title: "事業共創ワークショップ（大企業×VB）", sp: "eiicon ファシリテーター" },
    ],
  },
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
