import Link from "next/link";

// 全ページ共通のフローティング CTA。
// PC: 画面右下に縦並び固定。SP: 画面下部に横並びで固定バー化（globals.css）。
export default function FloatingActions() {
  return (
    <div className="floatbtns" aria-label="クイックアクション">
      <a
        href="#" // ※ パンフレット（PDF）は別途差し替え
        className="floatbtns__btn floatbtns__pamph"
      >
        <span aria-hidden>▤</span> パンフレットを見る
      </a>
      <Link href="/#outline" className="floatbtns__btn floatbtns__cta">
        <span aria-hidden>✎</span> 参加登録
      </Link>
    </div>
  );
}
