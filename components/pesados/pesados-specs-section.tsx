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
    <section className="py-20 lg:py-24 bg-charcoal-2 text-white border-b border-[#3A3D42]">
      <div className="container mx-auto px-4 max-w-[1140px]">
        <div className="text-center mb-14">
          <span className="text-xs sm:text-sm font-heading font-bold text-amber tracking-widest uppercase block mb-2">
            INGENIERÍA PARA TRANSPORTE PESADO
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-heading font-bold text-white uppercase tracking-tight leading-tight max-w-2xl mx-auto">
            Soluciones Industriales para Camiones y Buses
          </h2>
          <div className="w-12 h-[2px] bg-amber mx-auto my-4" />
          <p className="text-sm sm:text-base text-[#9A9DA3] max-w-2xl mx-auto font-sans">
            Cada día que un camión o bus permanece detenido significa pérdidas. Nuestro taller en Loja cuenta con la infraestructura y experiencia para devolver tu unidad a la carretera en el menor tiempo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, idx) => {
            const Icon = item.icon
            return (
              <div 
                key={idx} 
                className="bg-charcoal border border-[#3A3D42] border-l-[3px] border-l-amber p-6 rounded-[2px] flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-[2px] bg-[#2A2E33] border border-[#3E4249] flex items-center justify-center text-amber mb-5">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-white uppercase mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#9A9DA3] leading-relaxed font-sans">
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
