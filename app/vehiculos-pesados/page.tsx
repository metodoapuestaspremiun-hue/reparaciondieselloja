import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import PesadosHeroSection from "@/components/pesados/pesados-hero-section"
import VideoSection from "@/components/video-section"
import ServiceProcess from "@/components/service-process"
import PesadosPricingSection from "@/components/pesados/pesados-pricing-section"
import PesadosFAQSection from "@/components/pesados/pesados-faq-section"
import ContactSection from "@/components/contact-section"

export default function VehiculosPesadosPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <PesadosHeroSection />
      <VideoSection />
      <ServiceProcess />
      <PesadosPricingSection />
      <PesadosFAQSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
