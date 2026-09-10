import type { Metadata } from "next"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import BookingSection from "@/components/booking-section"
import DomainSaleBadge from "@/components/domain-sale-badge"
import { ShieldCheck, Clock, MapPin, CheckCircle, Wrench, Calendar, Phone } from "lucide-react"

export const metadata: Metadata = {
  title: "Agendamiento de Citas en Línea | Mecánica Loja",
  description: "Agenda tu turno para diagnóstico computarizado o mantenimiento mecánico en Loja. Consulta disponibilidad en tiempo real y reserva de inmediato.",
  keywords: [
    "agendar cita mecanico loja",
    "turno taller mecanico loja",
    "diagnostico motor loja cita",
    "mecanica loja agendamiento"
  ],
  alternates: {
    canonical: "https://reparaciondieselloja.com/agendamiento",
  },
  openGraph: {
    title: "Agendamiento de Citas en Línea | Mecánica Loja",
    description: "Reserva tu turno de diagnóstico y mantenimiento con nuestro calendario interactivo en Loja.",
    url: "https://reparaciondieselloja.com/agendamiento",
    siteName: "Mecánica Loja",
    locale: "es_EC",
    type: "website"
  }
}

export default function AgendamientoPage() {
  return (
    <main className="min-h-screen pt-20 bg-charcoal text-white">
      <Navigation brandName="Mecánica Loja" />

      {/* Hero Header para la Página de Agendamiento */}
      <section className="py-16 bg-charcoal border-b border-[#34373C]">
        <div className="container mx-auto px-4 max-w-5xl text-center flex flex-col items-center">
          {/* Aviso de Dominio en Venta */}
          <div className="w-full max-w-xl mb-4 text-left">
            <DomainSaleBadge />
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[2px] bg-[#24272B] border border-amber/30 text-amber text-xs font-heading font-bold uppercase tracking-wider mb-4">
            <Calendar className="w-3.5 h-3.5" />
            Turnos en Tiempo Real
          </div>
          <h1 className="text-3xl sm:text-5xl font-heading font-bold uppercase tracking-tight text-white mb-4 leading-tight">
            Reserva tu Cita de Taller en Loja
          </h1>
          <div className="w-12 h-[2px] bg-amber mx-auto mb-5" />
          <p className="text-[#C7C9CD] text-base sm:text-lg max-w-2xl mx-auto font-sans leading-relaxed">
            Atención prioritaria y sin tiempos muertos. Elige tu horario en nuestro calendario y nuestro equipo especializado en motores tendrá todo preparado para recibir tu vehículo.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 max-w-3xl mx-auto">
            <div className="p-4 rounded-[2px] bg-[#24272B] border border-[#3E4249] flex flex-col items-center">
              <ShieldCheck className="w-6 h-6 text-amber mb-2" />
              <span className="text-xs font-heading font-bold uppercase text-white">Garantía Escrita</span>
            </div>
            <div className="p-4 rounded-[2px] bg-[#24272B] border border-[#3E4249] flex flex-col items-center">
              <Clock className="w-6 h-6 text-amber mb-2" />
              <span className="text-xs font-heading font-bold uppercase text-white">Sin Esperas Inútiles</span>
            </div>
            <div className="p-4 rounded-[2px] bg-[#24272B] border border-[#3E4249] flex flex-col items-center">
              <Wrench className="w-6 h-6 text-amber mb-2" />
              <span className="text-xs font-heading font-bold uppercase text-white">Escáner Computarizado</span>
            </div>
            <div className="p-4 rounded-[2px] bg-[#24272B] border border-[#3E4249] flex flex-col items-center">
              <MapPin className="w-6 h-6 text-amber mb-2" />
              <span className="text-xs font-heading font-bold uppercase text-white">Juan José Peña</span>
            </div>
          </div>
        </div>
      </section>

      {/* Componente de Agendamiento con Calendario Real y Bot */}
      <BookingSection />

      <Footer brandName="Mecánica Loja" />
    </main>
  )
}
