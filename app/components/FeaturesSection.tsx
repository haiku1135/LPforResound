import { BookLock, Share2, AlarmClockCheck } from 'lucide-react'

export default function FeaturesSection() {
  const features = [
    {
      icon: <BookLock  className="h-6 w-6 text-indigo-600" />,
      title: 'ブログ非公開化',
      description: 'プライベートなことで他の方に見せたくないものは非公開にできるようにします。(近日アップデート予定)'
    },
    {
      icon: <Share2 className="h-6 w-6 text-indigo-600" />,
      title: 'ソーシャル機能の追加',
      description: '友達と楽曲を共有したり、友達のブログに対してコメントできるようにします。'
    },
    {
      icon: <AlarmClockCheck className="h-6 w-6 text-indigo-600" />,
      title: '月ごとにあなたが聴いた楽曲をプレイリストに',
      description: 'そのプレイリストを聴きながら先月の自分自身を振り返りましょう。'
    },
  ]

  return (
    <section id="features" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
          今後増える機能
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div key={index} className="bg-white shadow rounded-lg p-6">
              <div className="flex items-center justify-center w-12 h-12 bg-indigo-100 rounded-md mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

