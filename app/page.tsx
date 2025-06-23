import HeroSection from '../components/HeroSection'
import TechStackSection from '@/components/TechStackSection'
import ProjectShowcase from '@/components/ProjectShowcase'
import TimelineSection from '@/components/TimelineSection'
import TestimonialsSection from '../components/TestimonialsSection'
import HowIWorkSection from '@/components/HowIWorkSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import Navigation from '@/components/Navigation'

export default async function Home() {
  // Simulate loading delay
  await new Promise(resolve => setTimeout(resolve, 1500));
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <TechStackSection />
      <ProjectShowcase />
      <TimelineSection />
      <TestimonialsSection />
      <HowIWorkSection />
      <ContactSection />
      <Footer />
    </main>
  )
} 