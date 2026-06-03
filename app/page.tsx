import HeroSection from '@/components/sections/HeroSection'
import ContactSection from '@/components/sections/ContactSection'
import Footer from '@/components/layout/Footer'
import Navigation from '@/components/layout/Navigation'
import MainContent from '@/components/layout/MainContent'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <MainContent />
      <ContactSection />
      <Footer />
    </main>
  )
} 