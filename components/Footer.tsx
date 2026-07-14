// 全ページ共通フッター
export default function Footer() {
  return (
    <footer
      style={{ padding: "30px 0", background: "var(--footer-bg)", color: "#e5e3dd" }}
    >
      <div className="wrap">
        <div
          className="cols"
          style={{
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: 30,
            flexWrap: "wrap",
          }}
        >
          <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
            <div
              className="wf-ph"
              style={{
                width: 120,
                height: 40,
                background: "#3a3a3a",
                borderColor: "#555",
                color: "#999",
              }}
            >
              神奈川県ロゴ
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 8,
              font: "500 12px sans-serif",
              color: "#cfccc5",
            }}
          >
            <span>プライバシーポリシー</span>
            <span>
              KID2027 協賛ブース出展・サイドイベント・協賛グッズに関するお問い合わせ
            </span>
            <span>サイトポリシー</span>
          </div>
          <div style={{ font: "400 11px/1.7 sans-serif", color: "#b5b2aa" }}>
            <div>主催：神奈川県 産業振興課</div>
            <div>運営：株式会社eiicon</div>
          </div>
        </div>
        <div
          style={{
            marginTop: 22,
            borderTop: "1px solid #454545",
            paddingTop: 14,
            font: "400 11px var(--font-mono)",
            color: "var(--sub-2)",
            textAlign: "center",
          }}
        >
          © Kanagawa Innovators Day 2027
        </div>
      </div>
    </footer>
  );
}
