import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kanagawa Innovators Day 2027（KID 2027）",
  description:
    "神奈川県主催「Kanagawa Innovators Day 2027（KID 2027）」公式サイト。可能性と情熱が交差する、新たな未来を紡ぎ出す1日。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+New:wght@400;500;700;900&family=JetBrains+Mono:wght@500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
