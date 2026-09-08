import type { Metadata } from "next"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import DieselHeroSection from "@/components/diesel/diesel-hero-section"
import VideoSection from "@/components/video-section"
import ServiceProcess from "@/components/service-process"
import DieselPricingSection from "@/components/diesel/diesel-pricing-section"
import DieselFAQSection from "@/components/diesel/diesel-faq-section"
import ContactSection from "@/components/contact-section"

export const metadata: Metadata = {
  title: "Reparación de Motores Diésel en Loja | Mecánica Loja",
  description: "Taller especializado en reparación integral y mantenimiento de motores diésel en Loja. Diagnóstico computarizado, calibración de inyectores y garantía escrita.",
  keywords: [
    "reparacion de motores diesel loja",
    "mantenimiento motor diesel loja",
    "mecanica diesel loja ecuador",
    "taller diesel loja",
    "calibracion inyectores diesel loja",
    "rectificacion motores diesel loja"
  ],
  alternates: {
    canonical: "https://reparaciondieselloja.com/motores-diesel",
  },
  openGraph: {
    title: "Reparación de Motores Diésel en Loja | Mecánica Loja",
    description: "Especialistas en motores diésel con más de 35 años de experiencia en Loja. Soluciones profesionales garantizadas.",
    url: "https://reparaciondieselloja.com/motores-diesel",
    siteName: "Mecánica Loja",
    locale: "es_EC",
    type: "website"
  }
}

export default function MotoresDieselPage() {
  return (
    <main className="min-h-screen pt-20">
      <Navigation brandName="Mecánica Loja" />
      <DieselHeroSection />
      <VideoSection />
      <ServiceProcess />
      <DieselPricingSection />
      <DieselFAQSection />
      <ContactSection />
      <Footer brandName="Mecánica Loja" />
    </main>
  )
}
