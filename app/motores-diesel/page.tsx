import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import DieselHeroSection from "@/components/diesel/diesel-hero-section"
import VideoSection from "@/components/video-section"
import ServiceProcess from "@/components/service-process"
import DieselPricingSection from "@/components/diesel/diesel-pricing-section"
import DieselFAQSection from "@/components/diesel/diesel-faq-section"
import ContactSection from "@/components/contact-section"

export default function MotoresDieselPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <DieselHeroSection />
      <VideoSection />
      <ServiceProcess />
      <DieselPricingSection />
      <DieselFAQSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
