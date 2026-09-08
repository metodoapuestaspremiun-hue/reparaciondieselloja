import type { Metadata } from "next"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import BookingSection from "@/components/booking-section"
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
    <main className="min-h-screen pt-20 bg-gray-950 text-white">
      <Navigation brandName="Mecánica Loja" />

      {/* Hero Header para la Página de Agendamiento */}
      <section className="py-12 bg-gradient-to-b from-gray-900 to-gray-950 border-b border-gray-800">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Calendar className="w-4 h-4" />
            Turnos en Tiempo Real
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white mb-4">
            Reserva tu Cita de Taller en Loja
          </h1>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
            Atención prioritaria y sin tiempos muertos. Elige tu horario en nuestro calendario y nuestro equipo especializado en motores tendrá todo preparado para recibir tu vehículo.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 max-w-3xl mx-auto">
            <div className="p-4 rounded-xl bg-gray-900/60 border border-gray-800 flex flex-col items-center">
              <ShieldCheck className="w-6 h-6 text-red-500 mb-1" />
              <span className="text-xs font-semibold text-gray-200">Garantía Escrita</span>
            </div>
            <div className="p-4 rounded-xl bg-gray-900/60 border border-gray-800 flex flex-col items-center">
              <Clock className="w-6 h-6 text-emerald-400 mb-1" />
              <span className="text-xs font-semibold text-gray-200">Sin Esperas Inútiles</span>
            </div>
            <div className="p-4 rounded-xl bg-gray-900/60 border border-gray-800 flex flex-col items-center">
              <Wrench className="w-6 h-6 text-blue-400 mb-1" />
              <span className="text-xs font-semibold text-gray-200">Escáner de Última Generación</span>
            </div>
            <div className="p-4 rounded-xl bg-gray-900/60 border border-gray-800 flex flex-col items-center">
              <MapPin className="w-6 h-6 text-amber-400 mb-1" />
              <span className="text-xs font-semibold text-gray-200">Juan José Peña y Mercadillo</span>
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
