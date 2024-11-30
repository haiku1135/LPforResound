import Link from "next/link"

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
          Resoundとは
        </h2>
        <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
          Resoundは、あなたの音楽体験を記録し、<br />忘れていた当時の記憶を掘り起こすための音楽日記アプリです。<br />
          日々の音楽との出会いや感動を簡単に記録し、振り返ることができます。<br />
          カフェやバーなど外に出かけてふと耳を傾けると<br />「昔聴いていたな、そういえばこの曲を聴いていた時こんなことがあったな」<br />という出来事はありませんか？<br />
          どうやら音楽には記憶を甦らせる力があるそうです。<br />例えば<Link href="https://amass.jp/165225/" target="_blank" rel="noopener noreferrer">「音楽で記憶がよみがえる理由　青春時代に聴いた音楽のタイムマシン効果やアルツハイマー病患者が昔の楽曲を全て歌える理由」
</Link>、<br />この記事に詳細が書かれているので気になる方は見てみましょう。
        </p>
      </div>
    </section>
  )
}

