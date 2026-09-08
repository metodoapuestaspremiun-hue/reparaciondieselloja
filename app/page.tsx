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
import BookingSection from "@/components/booking-section"
import FAQSection from "@/components/faq-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Mecánica Loja | Especialistas en Reparación de Motores Diésel",
  description: "Taller mecánico líder en Loja, Ecuador. Más de 35 años de experiencia en reparación integral de motores diésel, vehículos livianos, pesados, maquinaria y mantenimiento preventivo de flotas.",
  keywords: [
    "Mecánica Loja",
    "taller mecanico loja",
    "reparacion de motores diesel loja",
    "mantenimiento de motores loja",
    "mecanica de vehiculos pesados loja",
    "taller mecanico juan jose peña loja",
    "diagnostico computarizado motor loja"
  ],
  alternates: {
    canonical: "https://reparaciondieselloja.com",
  },
  openGraph: {
    title: "Mecánica Loja | Especialistas en Reparación de Motores Diésel",
    description: "Taller mecánico líder en Loja, Ecuador. Especialistas con más de 35 años en reparación de motores diésel y gasolina.",
    url: "https://reparaciondieselloja.com",
    siteName: "Mecánica Loja",
    locale: "es_EC",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Mecánica Loja | Especialistas en Reparación de Motores Diésel",
    description: "Taller mecánico líder en Loja. Especialistas en reparación de motores diésel y pesados."
  }
}

export default function HomePage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "AutoRepair",
      "name": "Mecánica Loja",
      "alternateName": ["Taller Mecánico Loja", "Mecánica Diésel Loja"],
      "url": "https://reparaciondieselloja.com",
      "description": "Taller mecánico líder en Loja especializado en reparación integral y reconstrucción de motores diésel y a gasolina para vehículos livianos, camionetas, pesados y flotas comerciales.",
      "telephone": "+593983237491",
      "email": "negocios@cesarreyesjaramillo.com",
      "priceRange": "$$",
      "image": "https://reparaciondieselloja.com/nuevas/mecanica_en_loja_logo.webp",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Juan José Peña y Mercadillo",
        "addressLocality": "Loja",
        "addressRegion": "Loja",
        "postalCode": "110150",
        "addressCountry": "EC"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": -3.997235,
        "longitude": -79.206275
      },
      "hasMap": "https://maps.app.goo.gl/gSXzUQ1ANZbPvURg9",
      "areaServed": {
        "@type": "City",
        "name": "Loja"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
          ],
          "opens": "08:00",
          "closes": "18:00"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "¿Cuál es la especialidad principal de Mecánica Loja?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Nuestra especialidad es la reparación y reconstrucción integral de motores diésel, abarcando todas las marcas y modelos. También somos expertos en motores a gasolina, atendiendo prioritariamente vehículos pesados, flotas y maquinaria industrial."
          }
        },
        {
          "@type": "Question",
          "name": "¿Por qué elegirnos sobre otros talleres de reparación de motores en Loja?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "La diferencia está en la experiencia de más de 35 años y nuestra ubicación en Juan José Peña y Mercadillo, Loja. Garantizamos soluciones robustas y duraderas, utilizando Diagnóstico Computarizado para asegurar la precisión en cada reparación."
          }
        },
        {
          "@type": "Question",
          "name": "¿Cómo manejan el alto costo de una reparación mayor de motor?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Para tu tranquilidad y mejor flujo de caja, utilizamos un esquema de pago transparente por fases. El costo se divide en tres etapas (Inicial, Avance/Repuestos, y Contraentrega), ligando el pago al progreso real del trabajo."
          }
        },
        {
          "@type": "Question",
          "name": "¿Qué tecnología utilizan para diagnosticar fallas en motores modernos?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Usamos equipos de Diagnóstico Computarizado de última generación. Esto es esencial para identificar con precisión fallas en los sistemas electrónicos y de inyección (Common Rail) de los motores diésel modernos, minimizando el tiempo de inactividad de tu vehículo."
          }
        },
        {
          "@type": "Question",
          "name": "¿Qué tipo de garantía ofrecen en la reparación de un motor?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ofrecemos una garantía por escrito en todos los trabajos mayores. Este respaldo técnico asegura que tu vehículo salga de nuestro taller con la tranquilidad de un servicio profesional y duradero que cubre toda la Región Sur."
          }
        }
      ]
    }
  ]

  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigation brandName="Mecánica Loja" />
      <HeroSection />
      <TrustSection />
      <VideoSection />
      <ServiceProcess />
      <ServicesGrid />
      <GuaranteesSection />
      <WhyChooseUs />
      <TestimonialsSection />
      <PricingSection />
      <BookingSection />
      <FAQSection />
      <ContactSection />
      <Footer brandName="Mecánica Loja" />
    </main>
  )
}
