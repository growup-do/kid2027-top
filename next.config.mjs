/** @type {import('next').NextConfig} */
const nextConfig = {
  // 静的サイトとして書き出し、任意のホスティング（Cloudflare Pages / GitHub Pages 等）へデプロイ可能にする
  output: "export",
  images: {
    // static export ではビルトインの画像最適化サーバーを使えないため無効化
    unoptimized: true,
  },
};

export default nextConfig;
