import Link from 'next/link'

export default function CTASection() {
  return (
    <section id="cta" className="py-20 bg-indigo-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-extrabold text-white mb-4">
          Resoundで音楽日記をつけて、思い出を蘇らせよう
        </h2>
        <p className="text-xl text-indigo-100 mb-8">
          あなたの日々の音楽体験を記録し、過去の思い出を振り返りましょう。<br />
          音楽を通じて、忘れかけていた記憶を呼び覚まし、人生をより豊かにしていきましょう！
        </p>
        <Link href="https://resound-dev-one.vercel.app/signup" className="inline-block bg-white text-indigo-600 font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-indigo-50 transition duration-300">
          無料で始める
        </Link>
      </div>
    </section>
  )
}

