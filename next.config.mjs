/** @type {import('next').NextConfig} */

// GitHub Pages はプロジェクトサイトをサブパス配信するため、
// ビルド時に NEXT_PUBLIC_BASE_PATH を渡してベースパスを付与する。
// ローカル開発・ルート配信時は空文字。
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig = {
  // 静的サイトとして書き出し、任意のホスティング（GitHub Pages / Cloudflare Pages 等）へデプロイ可能にする
  output: "export",
  basePath,
  // 各ルートを <route>/index.html として書き出し、静的ホスティングでのサブパス解決を安定させる
  trailingSlash: true,
  images: {
    // static export ではビルトインの画像最適化サーバーを使えないため無効化
    unoptimized: true,
  },
};

export default nextConfig;
