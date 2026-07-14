"use client";

import { useMemo, useState } from "react";
import {
  dayData,
  dayLabel,
  fmt,
  toMin,
  HEAD,
  SLOT,
  STAGE_TINT,
  STAGE_TINT_TEXT,
  type Day,
} from "@/lib/sessions";

export default function SessionTimetable() {
  const [day, setDay] = useState<Day>(2);
  const d = dayData[day];

  const model = useMemo(() => {
    const base = toMin(d.base);
    const end = toMin(d.end);
    const now = d.now != null ? toMin(d.now) : null;
    const slots = (end - base) / 30;

    // ステージ見出し
    const stages = d.stages.map((name, i) => ({
      name,
      style: {
        gridColumn: i + 2,
        gridRow: 1,
        position: "sticky" as const,
        top: 0,
        zIndex: 5,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center" as const,
        padding: "0 8px",
        background: STAGE_TINT[i],
        color: STAGE_TINT_TEXT[i],
        font: "800 12px 'Zen Kaku Gothic New',sans-serif",
        borderBottom: "1px solid #e3e0d9",
        borderRight: "1px solid #ece9e2",
      },
    }));

    // 時刻軸ラベル & 横罫線（1時間ごと）
    const startH = Math.ceil(base / 60);
    const endH = Math.floor(end / 60);
    const hourLabels: { key: number; label: string; style: React.CSSProperties }[] = [];
    const hourLines: { key: number; style: React.CSSProperties }[] = [];
    for (let h = startH; h <= endH; h++) {
      const row = 2 + (h * 60 - base) / 30;
      hourLabels.push({
        key: h,
        label: `${h}:00`,
        style: {
          gridColumn: 1,
          gridRow: row,
          position: "sticky",
          left: 0,
          zIndex: 4,
          background: "#f4f2ec",
          borderRight: "1px solid #e3e0d9",
          padding: "4px 0 0 8px",
          font: "700 11px 'JetBrains Mono',monospace",
          color: "#6a675f",
        },
      });
      hourLines.push({
        key: h,
        style: {
          gridColumn: "2 / span 5",
          gridRow: row,
          borderTop: "1px solid #eae7e0",
          pointerEvents: "none",
        },
      });
    }

    // セッション
    const sessions = d.sessions.map((s, idx) => {
      const sm = toMin(s.s);
      const em = toMin(s.e);
      const rs = 2 + (sm - base) / 30;
      const re = 2 + (em - base) / 30;
      const ongoing = now != null && now >= sm && now < em;
      const ended = now != null && now >= em;

      const look: React.CSSProperties = ongoing
        ? {
            background: "#fff",
            border: "1.5px solid #e0352b",
            boxShadow: "0 3px 10px -4px rgba(224,53,43,.5)",
            zIndex: 3,
          }
        : ended
        ? {
            background: "#f0efec",
            border: "1px dashed #d0cdc6",
            opacity: 0.6,
            filter: "grayscale(1)",
          }
        : { background: "#fff", border: "1px dashed #c9c6bf" };

      return {
        key: idx,
        title: s.title,
        time: `${s.s}–${s.e}`,
        speaker: s.sp,
        ended,
        style: {
          gridColumn: s.st + 2,
          gridRow: `${rs} / ${re}`,
          margin: 3,
          borderRadius: 7,
          padding: "7px 9px",
          overflow: "hidden",
          position: "relative" as const,
          ...look,
        } as React.CSSProperties,
        titleStyle: {
          font: "700 11.5px/1.35 'Zen Kaku Gothic New',sans-serif",
          color: "#2a2a2a",
          marginBottom: 3,
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical" as const,
          overflow: "hidden",
          paddingRight: ended ? 36 : undefined,
        } as React.CSSProperties,
      };
    });

    const nowShow = now != null;
    const nowTop = nowShow ? HEAD + ((now! - base) / 30) * SLOT : 0;

    return {
      slots,
      stages,
      hourLabels,
      hourLines,
      sessions,
      nowShow,
      nowTop,
      nowLabel: nowShow ? fmt(now!) : "",
      gridTemplateRows: `${HEAD}px repeat(${slots}, ${SLOT}px)`,
    };
  }, [d]);

  return (
    <>
      {/* コントロール（DAY切替＋凡例） */}
      <div className="wrap ss-controls">
        <div className="ss-daytabs">
          <button
            type="button"
            className={`ss-daytab${day === 1 ? " is-active" : ""}`}
            onClick={() => setDay(1)}
          >
            DAY1 <span style={{ fontFamily: "var(--font-mono)" }}>1.21</span> 木
          </button>
          <button
            type="button"
            className={`ss-daytab${day === 2 ? " is-active" : ""}`}
            onClick={() => setDay(2)}
          >
            DAY2 <span style={{ fontFamily: "var(--font-mono)" }}>1.22</span> 金
          </button>
        </div>
        <div className="ss-legend">
          <span>
            <span className="ss-legend__now" />
            現在時刻
          </span>
          <span>
            <span className="ss-legend__box ss-legend__box--now" />
            開催中
          </span>
          <span>
            <span className="ss-legend__box ss-legend__box--plan" />
            予定
          </span>
          <span>
            <span className="ss-legend__box ss-legend__box--ended" />
            終了
          </span>
        </div>
      </div>

      {/* タイムテーブル */}
      <section className="wrap" style={{ paddingTop: 18, paddingBottom: 16 }}>
        <div
          style={{ font: "600 12px sans-serif", color: "#6a675f", marginBottom: 10 }}
        >
          {dayLabel[day]}
        </div>
        <div
          style={{
            overflowX: "auto",
            border: "1px solid #e3e0d9",
            borderRadius: 10,
            background: "#faf9f6",
          }}
        >
          <div
            style={{
              position: "relative",
              minWidth: 760,
              display: "grid",
              gridTemplateColumns: "64px repeat(5, minmax(128px, 1fr))",
              gridAutoFlow: "dense",
              gridTemplateRows: model.gridTemplateRows,
            }}
          >
            {/* コーナー */}
            <div
              style={{
                gridColumn: 1,
                gridRow: 1,
                position: "sticky",
                left: 0,
                zIndex: 6,
                background: "#f4f2ec",
                borderRight: "1px solid #e3e0d9",
                borderBottom: "1px solid #e3e0d9",
              }}
            />
            {/* ステージ見出し */}
            {model.stages.map((st) => (
              <div key={st.name} style={st.style}>
                {st.name}
              </div>
            ))}
            {/* 横罫線 */}
            {model.hourLines.map((hl) => (
              <div key={hl.key} style={hl.style} />
            ))}
            {/* 時刻ラベル */}
            {model.hourLabels.map((h) => (
              <div key={h.key} style={h.style}>
                {h.label}
              </div>
            ))}
            {/* セッション */}
            {model.sessions.map((s) => (
              <div key={s.key} style={s.style}>
                {s.ended && <span className="ss-ended-badge">終了</span>}
                <div style={s.titleStyle}>{s.title}</div>
                <div style={{ font: "600 10px 'JetBrains Mono',monospace", color: "#8a877f" }}>
                  {s.time}
                </div>
                <div
                  style={{
                    font: "500 10px/1.35 sans-serif",
                    color: "#6a675f",
                    marginTop: 2,
                    display: "-webkit-box",
                    WebkitLineClamp: 1,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {s.speaker}
                </div>
              </div>
            ))}
            {/* NOW バー */}
            {model.nowShow && (
              <div
                style={{
                  position: "absolute",
                  left: 64,
                  right: 0,
                  top: model.nowTop,
                  height: 0,
                  borderTop: "2px solid #e0352b",
                  zIndex: 7,
                  pointerEvents: "none",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    left: 0,
                    top: "50%",
                    transform: "translateY(-50%)",
                    background: "#e0352b",
                    color: "#fff",
                    font: "700 10px 'JetBrains Mono',monospace",
                    padding: "2px 7px",
                    borderRadius: 4,
                    whiteSpace: "nowrap",
                  }}
                >
                  NOW {model.nowLabel}
                </div>
              </div>
            )}
          </div>
        </div>
        <p style={{ font: "400 11px sans-serif", color: "#9a978f", margin: "12px 0 0" }}>
          ※横にスクロールできます。各セッションをタップすると詳細（登壇者・概要）が開きます（詳細ページは別途）。
        </p>
      </section>
    </>
  );
}
