"use client";

import { useState } from "react";
import { photos } from "@/lib/data";

// 6枚を3枚ずつ横スクロール。有効位置は 0..3（= 6 - 3）。
const MAX_PHOTO = photos.length - 3;

export default function PhotoSlider() {
  const [photo, setPhoto] = useState(0);

  const prev = () => setPhoto((p) => Math.max(0, p - 1));
  const next = () => setPhoto((p) => Math.min(MAX_PHOTO, p + 1));

  // トラックを translateX で移動（元デザインと同じ計算式）
  const transform = `translateX(calc(-${photo} * (100% - 24px)/3 - ${photo} * 12px))`;

  return (
    <div style={{ marginBottom: 22 }}>
      <div
        style={{
          font: "600 12px sans-serif",
          color: "var(--sub)",
          marginBottom: 10,
        }}
      >
        当日の様子
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <button
          type="button"
          onClick={prev}
          disabled={photo === 0}
          aria-label="前の写真へ"
          style={sliderBtn(photo === 0)}
        >
          ‹
        </button>
        <div style={{ flex: 1, overflow: "hidden", borderRadius: 6 }}>
          <div
            style={{
              display: "flex",
              gap: 12,
              transition: "transform .45s cubic-bezier(.4,0,.2,1)",
              transform,
            }}
          >
            {photos.map((p) => (
              <div
                key={p.label}
                className="wf-ph"
                style={{ flex: "0 0 calc((100% - 24px)/3)", height: 200 }}
              >
                {p.label}
              </div>
            ))}
          </div>
        </div>
        <button
          type="button"
          onClick={next}
          disabled={photo === MAX_PHOTO}
          aria-label="次の写真へ"
          style={sliderBtn(photo === MAX_PHOTO)}
        >
          ›
        </button>
      </div>
      <div
        style={{
          display: "flex",
          gap: 6,
          justifyContent: "center",
          marginTop: 10,
        }}
      >
        {Array.from({ length: MAX_PHOTO + 1 }).map((_, i) => (
          <span
            key={i}
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: i === photo ? "#3a3a3a" : "#cdcac2",
            }}
          />
        ))}
      </div>
    </div>
  );
}

function sliderBtn(disabled: boolean): React.CSSProperties {
  return {
    width: 38,
    height: 38,
    borderRadius: "50%",
    border: "1.5px solid #b5b2aa",
    background: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#8a877f",
    fontSize: 18,
    flex: "none",
    cursor: disabled ? "default" : "pointer",
    opacity: disabled ? 0.4 : 1,
  };
}
