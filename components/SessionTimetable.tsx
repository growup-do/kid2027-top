"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import {
  dayData,
  day1Pitch,
  fmt,
  toMin,
  HEAD,
  SLOT,
  STAGE_TINT,
  STAGE_TINT_TEXT,
  type PitchPerson,
} from "@/lib/sessions";

// GitHub Pages 等のサブパス配信では next/link は basePath 自動対応だが、静的検証のため定数化
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

// サイト共通ヘッダーの高さ（.header__inner height と一致）
const SITE_HEADER_H = 64;

/* ===== DAY1（1.21）＝ MAIN STAGE Startup Pitch のみ ===== */
export function SessionDay1() {
  return (
    <section id="day1" className="wrap dayblock section-anchor">
      <div className="dayblock__label">
        <span className="dayblock__day">DAY1</span>
        <span className="dayblock__date">2027.1.21（木）</span>
      </div>
      <PitchBlock />
    </section>
  );
}

/* ===== DAY2（1.22）＝ 5ステージの番組表タイムテーブル ===== */
export function SessionDay2() {
  return (
    <section id="day2" className="wrap dayblock section-anchor">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
          flexWrap: "wrap",
        }}
      >
        <div className="dayblock__label">
          <span className="dayblock__day">DAY2</span>
          <span className="dayblock__date">2027.1.22（金）</span>
        </div>
        <Legend />
      </div>
      <Day2Grid />
      <p style={{ font: "400 11px sans-serif", color: "#9a978f", margin: "12px 0 0" }}>
        ※横にスクロールできます。各セッションをタップすると詳細（登壇者・概要）が開きます（詳細ページは別途）。
      </p>
    </section>
  );
}

/* ------------------------------------------------------------------ *
 * DAY1: KID Startup Pitch（登壇者・審査員カード）
 * ------------------------------------------------------------------ */
function PitchBlock() {
  return (
    <div className="pitch">
      <div className="pitch__timebadge">{day1Pitch.time}</div>

      <div className="pitch__head">
        <h3 className="pitch__title">{day1Pitch.title}</h3>
        <div className="pitch__stage">
          <span className="pitch__stage-icon">★</span>
          <span className="pitch__stage-label">{day1Pitch.stage}</span>
        </div>
      </div>

      <p className="pitch__lead">{day1Pitch.lead}</p>

      <div className="pitch__grouplabel">登壇者</div>
      <div className="pitch__people">
        {day1Pitch.speakers.map((p) => (
          <Person key={p.name} p={p} />
        ))}
      </div>

      <hr className="pitch__divider" />

      <div className="pitch__grouplabel">審査員</div>
      <div className="pitch__people">
        {day1Pitch.judges.map((p) => (
          <Person key={p.name} p={p} />
        ))}
      </div>

      <div className="pitch__cta">
        <Link href={day1Pitch.href} className="wf-btnf">
          詳細はこちら
        </Link>
      </div>
    </div>
  );
}

function Person({ p }: { p: PitchPerson }) {
  return (
    <div className="person">
      <div className="person__photo wf-ph">写真</div>
      <div>
        {p.org && <div className="person__org">{p.org}</div>}
        {p.role && <div className="person__org">{p.role}</div>}
        <div className="person__name">{p.name}</div>
        <div className="person__en">{p.en}</div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ *
 * DAY2: 番組表グリッド（NOW バー・終了グレー。開催中は赤枠を付けない）
 * ------------------------------------------------------------------ */
function Day2Grid() {
  const d = dayData[2];
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
    } as React.CSSProperties,
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

  // セッション（開催中でも枠は通常のまま。終了のみグレー＋「終了」バッジ）
  const sessions = d.sessions.map((s, idx) => {
    const sm = toMin(s.s);
    const em = toMin(s.e);
    const rs = 2 + (sm - base) / 30;
    const re = 2 + (em - base) / 30;
    const ended = now != null && now >= em;

    const look: React.CSSProperties = ended
      ? {
          background: "#f0efec",
          border: "1px solid #ddd9d1",
          opacity: 0.6,
          filter: "grayscale(1)",
        }
      : { background: "#fff", border: "1px solid #ddd9d1" };

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
  const gridTemplateRows = `${HEAD}px repeat(${slots}, ${SLOT}px)`;

  // 横スクロールに追従する固定ステージ見出し（画面上部固定）
  const scrollerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scroller = scrollerRef.current;
    const grid = gridRef.current;
    const sticky = stickyRef.current;
    const track = trackRef.current;
    if (!scroller || !grid || !sticky || !track) return;

    // クローンの位置・幅・列幅を実グリッドへ同期
    const syncSize = () => {
      const r = scroller.getBoundingClientRect();
      sticky.style.left = `${r.left}px`;
      sticky.style.width = `${scroller.clientWidth}px`;
      const cells = grid.querySelectorAll<HTMLElement>("[data-tt-stage]");
      const widths = Array.from(cells).map((c) => c.getBoundingClientRect().width);
      if (widths.length) {
        track.style.gridTemplateColumns = widths.map((w) => `${w}px`).join(" ");
      }
    };

    // 見出し行が上部固定ラインに達したらクローンを表示、横位置を同期
    const update = () => {
      const g = grid.getBoundingClientRect();
      const show = g.top < SITE_HEADER_H && g.bottom > SITE_HEADER_H + HEAD;
      sticky.style.display = show ? "block" : "none";
      if (show) track.style.transform = `translateX(${-scroller.scrollLeft}px)`;
    };

    const onResize = () => {
      syncSize();
      update();
    };

    syncSize();
    update();
    const ro = new ResizeObserver(syncSize);
    ro.observe(grid);
    window.addEventListener("scroll", update, { passive: true });
    scroller.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      ro.disconnect();
      window.removeEventListener("scroll", update);
      scroller.removeEventListener("scroll", update);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div style={{ position: "relative", marginTop: 14 }}>
      <div
        ref={scrollerRef}
        style={{
          overflowX: "auto",
          border: "1px solid #e3e0d9",
          borderRadius: 10,
          background: "#faf9f6",
        }}
      >
      <div
        ref={gridRef}
        style={{
          position: "relative",
          minWidth: 760,
          display: "grid",
          gridTemplateColumns: "64px repeat(5, minmax(128px, 1fr))",
          gridAutoFlow: "dense",
          gridTemplateRows,
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
        {stages.map((st) => (
          <div key={st.name} data-tt-stage style={st.style}>
            {st.name}
          </div>
        ))}
        {/* 横罫線 */}
        {hourLines.map((hl) => (
          <div key={hl.key} style={hl.style} />
        ))}
        {/* 時刻ラベル */}
        {hourLabels.map((h) => (
          <div key={h.key} style={h.style}>
            {h.label}
          </div>
        ))}
        {/* セッション */}
        {sessions.map((s) => (
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
        {/* NOW バー（現在時刻。開催中セッションを横切るだけ・赤枠は付けない） */}
        {nowShow && (
          <div
            style={{
              position: "absolute",
              left: 64,
              right: 0,
              top: nowTop,
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
              NOW {fmt(now!)}
            </div>
          </div>
        )}
      </div>
      </div>

      {/* 横スクロール追従・画面上部固定のステージ見出し（JS制御） */}
      <div
        ref={stickyRef}
        aria-hidden
        style={{
          position: "fixed",
          top: SITE_HEADER_H,
          height: HEAD,
          display: "none",
          overflow: "hidden",
          zIndex: 45,
          pointerEvents: "none",
          boxShadow: "0 4px 10px -6px rgba(0,0,0,.25)",
        }}
      >
        {/* コーナー（時刻列の見出し。左固定でステージがこの下に潜り込む） */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 64,
            height: "100%",
            zIndex: 2,
            background: "#f4f2ec",
            borderRight: "1px solid #e3e0d9",
            borderBottom: "1px solid #e3e0d9",
          }}
        />
        {/* ステージ見出し（横スクロールに追従して translateX） */}
        <div
          ref={trackRef}
          style={{
            position: "absolute",
            left: 64,
            top: 0,
            height: "100%",
            display: "grid",
            gridAutoFlow: "column",
          }}
        >
          {d.stages.map((name, i) => (
            <div
              key={name}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                padding: "0 8px",
                background: STAGE_TINT[i],
                color: STAGE_TINT_TEXT[i],
                font: "800 12px 'Zen Kaku Gothic New',sans-serif",
                borderBottom: "1px solid #e3e0d9",
                borderRight: "1px solid #ece9e2",
              }}
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* 凡例（現在時刻 / 開催中 / 終了 の 3 種） */
function Legend() {
  return (
    <div className="ss-legend">
      <span>
        <span className="ss-legend__now" />
        現在時刻
      </span>
      <span>
        <span className="ss-legend__box ss-legend__box--plan" />
        開催中
      </span>
      <span>
        <span className="ss-legend__box ss-legend__box--ended" />
        終了
      </span>
    </div>
  );
}
