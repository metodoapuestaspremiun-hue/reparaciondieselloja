import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import CamionetasHeroSection from "@/components/camionetas/camionetas-hero-section"
import VideoSection from "@/components/video-section"
import ServiceProcess from "@/components/service-process"
import CamionetasPricingSection from "@/components/camionetas/camionetas-pricing-section"
import CamionetasFAQSection from "@/components/camionetas/camionetas-faq-section"
import ContactSection from "@/components/contact-section"

export default function CamionetasPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <CamionetasHeroSection />
      <VideoSection />
      <ServiceProcess />
      <CamionetasPricingSection />
      <CamionetasFAQSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
