// KID2027 トップページのコンテンツデータ
// 登壇者・参加者の声・フォトスライダー等（前回大会踏襲・ダミー含む）

export type Guest = { role: string; name: string };
export type Voice = { text: string; name: string; role: string };
export type Photo = { label: string };

export const photos: Photo[] = [
  { label: "PHOTO 01" },
  { label: "PHOTO 02" },
  { label: "PHOTO 03" },
  { label: "PHOTO 04" },
  { label: "PHOTO 05" },
  { label: "PHOTO 06" },
];

export const guests: Guest[] = [
  { role: "代表理事・慶大名誉教授", name: "冨田 勝" },
  { role: "東芝 社長CEO", name: "島田 太郎" },
  { role: "資生堂 ディレクター", name: "中西 裕子" },
  { role: "鈴廣かまぼこ 社長", name: "鈴木 智博" },
  { role: "きらぼし銀行 所長", name: "石橋 宗弥" },
  { role: "アルガルバイオ GL", name: "小田 康太郎" },
  { role: "コーエーテクモHD 会長", name: "襟川 陽一" },
  { role: "eiicon マネージャー", name: "松尾 真由子" },
  { role: "Zip Infrastructure CEO", name: "須知 高匡" },
  { role: "日本政策金融公庫", name: "髙橋 俊" },
  { role: "横浜銀行 グループ長", name: "角坂 仁章" },
  { role: "アメックス 副社長", name: "渡邉 慎司" },
];

export const voices: Voice[] = [
  {
    text: "多様なプレイヤーと直接話せる密度の高い一日でした。新規事業の連携先がその場で見つかりました。",
    name: "大企業 事業開発",
    role: "新規事業部",
  },
  {
    text: "ピッチを通じて自社の技術に対する反応をリアルに得られ、次の資金調達の手応えにつながりました。",
    name: "スタートアップ CEO",
    role: "創業者",
  },
  {
    text: "自治体としての課題を持ち込むと、解決の当事者になりうる企業とすぐに繋がれたのが良かった。",
    name: "自治体 職員",
    role: "産業政策担当",
  },
  {
    text: "投資先の発掘だけでなく、地域のエコシステム全体の熱量を感じられる場でした。",
    name: "ベンチャーキャピタル",
    role: "パートナー",
  },
  {
    text: "出展ブースへの来場の質が高く、商談につながる会話が何件も生まれました。満足度は高いです。",
    name: "出展企業 マーケ",
    role: "事業責任者",
  },
  {
    text: "支援機関同士の連携も深まり、支援メニューを跨いだ伴走がしやすくなりました。",
    name: "支援機関",
    role: "コーディネーター",
  },
];
