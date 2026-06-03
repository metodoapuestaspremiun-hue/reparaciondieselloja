import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import TrustSection from "@/components/trust-section"
import VideoSection from "@/components/video-section"
import ServiceProcess from "@/components/service-process"
import ServicesGrid from "@/components/services-grid"
import GuaranteesSection from "@/components/guarantees-section"
import TestimonialsSection from "@/components/testimonials-section"
import WhyChooseUs from "@/components/why-choose-us"
import PricingSection from "@/components/pricing-section"
import FAQSection from "@/components/faq-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <TrustSection />
      <VideoSection />
      <ServiceProcess />
      <ServicesGrid />
      <GuaranteesSection />
      <WhyChooseUs />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
