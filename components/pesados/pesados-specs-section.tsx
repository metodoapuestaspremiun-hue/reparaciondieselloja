"use client"

import { Truck, ShieldCheck, Cog, BarChart3, Clock, CheckCircle2 } from "lucide-react"

export default function PesadosSpecsSection() {
  const features = [
    {
      title: "Overhaul y Reconstrucción Mayor",
      desc: "Desmontaje, rectificación y balanceo de cigüeñal, cambio de camisas, pistones y pruebas de compresión bajo especificaciones de fábrica.",
      icon: Cog
    },
    {
      title: "Planes de Mantenimiento para Flotas",
      desc: "Contratos de soporte preventivo programado para cooperativas de transporte y empresas de carga en Loja y Zamora.",
      icon: BarChart3
    },
    {
      title: "Rescate y Auxilio Mecánico Pesado",
      desc: "Disponibilidad de equipo móvil para diagnóstico de emergencias en ruta para camiones y buses varados.",
      icon: Clock
    },
    {
      title: "Motores Pesados Multimarca",
      desc: "Especialistas en Hino 500/700, Mercedes-Benz, Scania, Volvo, Cummins (ISX/ISM), Caterpillar e International.",
      icon: Truck
    }
  ]

  return (
    <section className="py-20 bg-gray-950 text-white border-t border-b border-gray-900">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-14">
          <span className="text-red-500 font-bold text-xs uppercase tracking-widest bg-red-500/10 px-3 py-1 rounded-full border border-red-500/20">
            Ingeniería para Transporte Pesado
          </span>
          <h2 className="text-3xl md:text-5xl font-black mt-3">
            Soluciones Industriales para Camiones y Buses
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mt-3 text-sm md:text-base">
            Cada día que un camión o bus permanece detenido significa pérdidas. Nuestro taller en Loja cuenta con la infraestructura y experiencia para devolver tu unidad a la carretera en el menor tiempo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, idx) => {
            const Icon = item.icon
            return (
              <div 
                key={idx} 
                className="bg-gray-900/80 border border-gray-800 rounded-2xl p-6 hover:border-red-500/50 hover:bg-gray-900 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-red-600/10 border border-red-500/30 flex items-center justify-center text-red-500 mb-5 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
