import type { Metadata } from "next"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import PesadosHeroSection from "@/components/pesados/pesados-hero-section"
import PesadosSpecsSection from "@/components/pesados/pesados-specs-section"
import VideoSection from "@/components/video-section"
import PesadosPricingSection from "@/components/pesados/pesados-pricing-section"
import PesadosFAQSection from "@/components/pesados/pesados-faq-section"
import ContactSection from "@/components/contact-section"

export const metadata: Metadata = {
  title: "Mecánica de Vehículos Pesados y Flotas en Loja | Mecánica Loja",
  description: "Taller especializado en reparación de motores para camiones, buses, cabezales y maquinaria pesada en Loja. Mantenimiento para flotas comerciales y transporte pesado.",
  keywords: [
    "mecanica vehiculos pesados loja",
    "reparacion motores camiones loja",
    "mantenimiento de buses loja",
    "taller transporte pesado loja",
    "reparacion maquinaria pesada loja ecuador"
  ],
  alternates: {
    canonical: "https://reparaciondieselloja.com/vehiculos-pesados",
  },
  openGraph: {
    title: "Mecánica de Vehículos Pesados y Flotas en Loja | Mecánica Loja",
    description: "Servicio técnico industrial y reparación de motores diésel para transporte pesado en Loja.",
    url: "https://reparaciondieselloja.com/vehiculos-pesados",
    siteName: "Mecánica Loja",
    locale: "es_EC",
    type: "website"
  }
}

export default function VehiculosPesadosPage() {
  return (
    <main className="min-h-screen pt-20">
      <Navigation brandName="Mecánica Loja" />
      <PesadosHeroSection />
      <PesadosSpecsSection />
      <VideoSection />
      <PesadosPricingSection />
      <PesadosFAQSection />
      <ContactSection />
      <Footer brandName="Mecánica Loja" />
    </main>
  )
}
