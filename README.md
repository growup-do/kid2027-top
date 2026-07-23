# KID 2027 ウェブサイト

神奈川県主催「Kanagawa Innovators Day 2027（KID 2027）」公式サイトの実装（3ページ）。
`design_handoff_kid2027/` のデザインリファレンス（HTML ワイヤーフレーム）を **Next.js（App Router / TypeScript）** で再現したもの。

## 技術スタック

- [Next.js 15](https://nextjs.org/)（App Router、`output: "export"` による静的サイト書き出し）
- React 19 / TypeScript
- スタイル：素の CSS（`app/globals.css`）。フォントは Google Fonts（Zen Kaku Gothic New / JetBrains Mono）

> **注**：現状はワイヤーフレーム段階の暫定パレット・プレースホルダーで構成。本番では色・タイポグラフィ・コンポーネントを正式なデザインシステムに、破線プレースホルダーを本番アセットに置換する想定（`design_handoff_kid2027/README.md` 参照）。

## ページ / ルーティング

| ページ | パス | 内容 |
|---|---|---|
| トップ | `/` | 縦スクロール1枚（KV〜フッター） |
| セッション | `/session` | STAGE INFORMATION（フロアマップ）＋ DAY1/DAY2 を縦並びで掲載 |
| エリアマップ | `/area` | 協賛ランク別 出展社一覧 |

ヘッダー／フッターは全ページ共通。ヘッダーは現在ページのナビをアクセントブルーで表示。
※「KID Startup Pitch」ページは未制作のため、ナビからは意図的に除外（README 指示）。

## セットアップ

```bash
npm install       # 依存関係のインストール
npm run dev       # 開発サーバー（http://localhost:3000）
npm run build     # 本番ビルド ＝ 静的サイトを out/ に書き出し
```

`npm run build` 後、`out/` を任意の静的ホスティング（GitHub Pages / Cloudflare Pages 等）へデプロイ可能。
GitHub Pages などサブパス配信時は `NEXT_PUBLIC_BASE_PATH=/<repo名>` を渡してビルドする（CI で自動設定済み）。

## ディレクトリ構成

```
app/
  layout.tsx          ルートレイアウト（フォント読み込み・メタデータ）
  page.tsx            トップページ
  session/page.tsx    セッション/タイムテーブルページ
  area/page.tsx       エリアマップ/出展社ページ
  globals.css         ワイヤーフレーム用スタイル・デザイントークン
components/
  Header.tsx          共通ヘッダー（sticky・ハンバーガー開閉・現在ページ強調）
  Footer.tsx          共通フッター
  PhotoSlider.tsx     トップ「当日の様子」フォトスライダー
  SessionTimetable.tsx DAY1 Pitch カード＋DAY2 番組表グリッド（NOWバー）
lib/
  data.ts             登壇者・参加者の声・写真データ（トップ）
  sessions.ts         セッションデータ・レイアウト定数
public/
  assets/kv.jpg       キービジュアル
design_handoff_kid2027/  元デザインリファレンス（HTML）
```

## 実装した挙動

- **ルーティング**：3ページを Next.js App Router で構成。ページ間は `next/link` で遷移（basePath 自動対応）。
- **ページ内アンカー**：ナビ・CTA から各セクションへスムーズスクロール（`scroll-behavior: smooth`）。
- **フォトスライダー**（トップ）：左右ボタンで 6 枚を 3 枚ずつ横スクロール（有効位置 0–3、端でクランプ）。
- **セッション**：DAY1（1.21）は MAIN STAGE の KID Startup Pitch のみを登壇者・審査員カードで掲載し Pitch 詳細ページへリンク。DAY2（1.22）は CSS Grid のテレビ番組表。仮の現在時刻を基準に **NOW バー**（赤）が開催中セッションを横切り（セッション自体に赤枠は付けない）、終了セッションはグレー＋「終了」バッジ。表示種別は「現在時刻／開催中／終了」の3種。
- **ハンバーガーメニュー**：`max-width: 900px` でナビをドロワーに切替（開閉トグルを実装）。
- **レスポンシブ**：900px / 560px / 520px のブレークポイントでカラム数・グリッド列数を変更。

## デプロイ

`main` への push で GitHub Actions（`.github/workflows/deploy.yml`）がビルド → 静的エクスポート → GitHub Pages へ自動デプロイ。
公開URL：**https://growup-do.github.io/kid2027-top/**
