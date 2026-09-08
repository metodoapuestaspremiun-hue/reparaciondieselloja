import type { Metadata } from "next"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import CamionetasHeroSection from "@/components/camionetas/camionetas-hero-section"
import CamionetasSpecsSection from "@/components/camionetas/camionetas-specs-section"
import VideoSection from "@/components/video-section"
import CamionetasPricingSection from "@/components/camionetas/camionetas-pricing-section"
import CamionetasFAQSection from "@/components/camionetas/camionetas-faq-section"
import ContactSection from "@/components/contact-section"

export const metadata: Metadata = {
  title: "Mecánica para Camionetas en Loja | Mecánica Loja",
  description: "Taller experto en reparación y mantenimiento de camionetas diésel y gasolina en Loja. Servicio técnico para 4x4, Hilux, D-Max, BT-50 y vehículos de trabajo.",
  keywords: [
    "mecanica de camionetas loja",
    "reparacion motor camioneta loja",
    "taller camionetas 4x4 loja",
    "mantenimiento dmax hilux loja",
    "mecanica loja camionetas"
  ],
  alternates: {
    canonical: "https://reparaciondieselloja.com/camionetas",
  },
  openGraph: {
    title: "Mecánica para Camionetas en Loja | Mecánica Loja",
    description: "Expertos en servicio integral y reparación de motores de camionetas en Loja.",
    url: "https://reparaciondieselloja.com/camionetas",
    siteName: "Mecánica Loja",
    locale: "es_EC",
    type: "website"
  }
}

export default function CamionetasPage() {
  return (
    <main className="min-h-screen pt-20">
      <Navigation brandName="Mecánica Loja" />
      <CamionetasHeroSection />
      <CamionetasSpecsSection />
      <VideoSection />
      <CamionetasPricingSection />
      <CamionetasFAQSection />
      <ContactSection />
      <Footer brandName="Mecánica Loja" />
    </main>
  )
}
