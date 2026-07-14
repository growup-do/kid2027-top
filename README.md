# KID 2027 トップページ

神奈川県主催「Kanagawa Innovators Day 2027（KID 2027）」公式サイト・トップページの実装。
`design_handoff_kid2027_top/` のデザインリファレンス（HTML ワイヤーフレーム）を **Next.js（App Router / TypeScript）** で再現したもの。

## 技術スタック

- [Next.js 15](https://nextjs.org/)（App Router、`output: "export"` による静的サイト書き出し）
- React 19 / TypeScript
- スタイル：素の CSS（`app/globals.css`）。フォントは Google Fonts（Zen Kaku Gothic New / JetBrains Mono）

> **注**：現状はワイヤーフレーム段階の暫定パレット・プレースホルダーで構成。本番では色・タイポグラフィ・コンポーネントを正式なデザインシステムに、破線プレースホルダーを本番アセットに置換する想定（`design_handoff_kid2027_top/README.md` 参照）。

## セットアップ

```bash
npm install       # 依存関係のインストール
npm run dev       # 開発サーバー（http://localhost:3000）
npm run build     # 本番ビルド ＝ 静的サイトを out/ に書き出し
```

`npm run build` 後、`out/` を任意の静的ホスティング（Cloudflare Pages / GitHub Pages 等）へデプロイ可能。

## ディレクトリ構成

```
app/
  layout.tsx        ルートレイアウト（フォント読み込み・メタデータ）
  page.tsx          トップページ本体（全セクション）
  globals.css       ワイヤーフレーム用スタイル・デザイントークン
components/
  Header.tsx        ヘッダー（sticky）＋ハンバーガーメニュー開閉（クライアント）
  PhotoSlider.tsx   「当日の様子」フォトスライダー（クライアント）
lib/
  data.ts           登壇者・参加者の声・写真データ
public/
  assets/kv.jpg     キービジュアル
design_handoff_kid2027_top/   元デザインリファレンス（HTML）
```

## 実装した挙動

- **ページ内アンカー**：ナビ・CTA から各セクションへスムーズスクロール（`scroll-behavior: smooth`）。
- **フォトスライダー**：左右ボタンで 6 枚を 3 枚ずつ横スクロール（有効位置 0–3、端でクランプ）。ドットが現在位置を反映。
- **ハンバーガーメニュー**：`max-width: 900px` でナビをドロワーに切替。開閉トグルを実装（デザインリファレンスでは未実装だった箇所）。
- **レスポンシブ**：900px / 560px のブレークポイントでカラム数・グリッド列数を変更。

## セクション構成

ヘッダー → KV → CONCEPT → KID 2026 REPORT → MAIN CONTENTS → SIDE EVENTS →
GUESTS → PARTNERS → OUTLINE → 神奈川県のベンチャー支援 → イラスト表現エリア → フッター
