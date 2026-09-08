import type { Metadata } from "next"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import LivianosHeroSection from "@/components/livianos/livianos-hero-section"
import LivianosSpecsSection from "@/components/livianos/livianos-specs-section"
import VideoSection from "@/components/video-section"
import LivianosPricingSection from "@/components/livianos/livianos-pricing-section"
import LivianosFAQSection from "@/components/livianos/livianos-faq-section"
import ContactSection from "@/components/contact-section"

export const metadata: Metadata = {
  title: "Mecánica para Vehículos Livianos y Autos en Loja | Mecánica Loja",
  description: "Taller mecánico especializado en diagnóstico computarizado, mantenimiento y reparación de motores para automóviles y vehículos livianos en Loja.",
  keywords: [
    "mecanica de autos loja",
    "taller mecanico vehiculos livianos loja",
    "reparacion motores autos loja",
    "diagnostico computarizado autos loja",
    "mecanica general loja ecuador"
  ],
  alternates: {
    canonical: "https://reparaciondieselloja.com/vehiculos-livianos",
  },
  openGraph: {
    title: "Mecánica para Vehículos Livianos y Autos en Loja | Mecánica Loja",
    description: "Cuidado profesional para tu vehículo liviano con tecnología de punta y mecánicos certificados en Loja.",
    url: "https://reparaciondieselloja.com/vehiculos-livianos",
    siteName: "Mecánica Loja",
    locale: "es_EC",
    type: "website"
  }
}

export default function VehiculosLivianosPage() {
  return (
    <main className="min-h-screen pt-20">
      <Navigation brandName="Mecánica Loja" />
      <LivianosHeroSection />
      <LivianosSpecsSection />
      <VideoSection />
      <LivianosPricingSection />
      <LivianosFAQSection />
      <ContactSection />
      <Footer brandName="Mecánica Loja" />
    </main>
  )
}
