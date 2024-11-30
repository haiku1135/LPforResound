import Footer from './components/Footer'
import AboutSection from './components/AboutSection'
import FeaturesSection from './components/FeaturesSection'
import CTASection from './components/CTASection'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <AboutSection />
        <FeaturesSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}

