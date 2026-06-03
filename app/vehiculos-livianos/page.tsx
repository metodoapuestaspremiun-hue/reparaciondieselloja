import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import LivianosHeroSection from "@/components/livianos/livianos-hero-section"
import VideoSection from "@/components/video-section"
import ServiceProcess from "@/components/service-process"
import LivianosPricingSection from "@/components/livianos/livianos-pricing-section"
import LivianosFAQSection from "@/components/livianos/livianos-faq-section"
import ContactSection from "@/components/contact-section"

export default function VehiculosLivianosPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <LivianosHeroSection />
      <VideoSection />
      <ServiceProcess />
      <LivianosPricingSection />
      <LivianosFAQSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
