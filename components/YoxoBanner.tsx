"use client";

import { useState } from "react";

// トップのみ：YOXOフェス フローティングバナー（370×160）。右上の×で閉じられる。
export default function YoxoBanner() {
  const [closed, setClosed] = useState(false);
  if (closed) return null;

  return (
    <div className="yoxo">
      <button
        type="button"
        className="yoxo__close"
        aria-label="バナーを閉じる"
        onClick={() => setClosed(true)}
      >
        ×
      </button>
      <a
        href="#" // ※ YOXOフェス 特設サイト URL は別途差し替え
        className="yoxo__link"
        aria-label="YOXOフェス 特設サイトへ"
      >
        <span className="yoxo__tag">SPECIAL</span>
        <span className="yoxo__title">YOXOフェス</span>
        <span className="yoxo__sub">同時開催イベント ▶</span>
      </a>
    </div>
  );
}
