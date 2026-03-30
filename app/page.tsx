import HeroSection from '../components/HeroSection'
import TechStackSection from '@/components/TechStackSection'
import ProjectShowcase from '@/components/ProjectShowcase'
import TimelineSection from '@/components/TimelineSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import Navigation from '@/components/Navigation'
import MainContent from '@/components/MainContent'

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