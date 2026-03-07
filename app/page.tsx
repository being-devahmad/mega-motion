import { Header } from '@/components/header'
import { HeroSection } from '@/components/hero-section'
import { TrustBar } from '@/components/trust-bar'
import { ServicesSection } from '@/components/services-section'
import { HowItWorks } from '@/components/how-it-works'
import { TestimonialsSection } from '@/components/testimonials-section'
import { PricingTable } from '@/components/pricing-table'
import { CTABanner } from '@/components/cta-banner'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="w-full">
      <Header />
      <HeroSection />
      <TrustBar />
      <ServicesSection />
      <HowItWorks />
      <TestimonialsSection />
      <PricingTable />
      <CTABanner />
      <Footer />
    </main>
  )
}
