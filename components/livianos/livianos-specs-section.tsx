"use client"

import { Car, Cpu, Activity, Fuel, Sparkles, CheckCircle2 } from "lucide-react"

export default function LivianosSpecsSection() {
  const points = [
    {
      title: "Escaneo Multimarca OBD-II & Sensores",
      desc: "Lectura profunda de códigos DTC, análisis en vivo de mezcla de combustible, sonda lambda y calibración de cuerpo de aceleración.",
      icon: Cpu
    },
    {
      title: "Distribución & Cambio de Banda/Cadena",
      desc: "Reemplazo preventivo con sincronización micrométrica para evitar colisiones entre válvulas y pistones en motores multivalvulares.",
      icon: Activity
    },
    {
      title: "Afinamiento de Motor & Inyectores",
      desc: "Limpieza por ultrasonido y comprobación en probeta para restablecer un consumo de gasolina óptimo y ralentí sereno.",
      icon: Fuel
    },
    {
      title: "Autos y SUVs en Loja",
      desc: "Atención técnica especializada para Chevrolet, Kia, Hyundai, Renault, Suzuki, Volkswagen, Toyota y marcas chinas modernas.",
      icon: Car
    }
  ]

  return (
    <section className="py-20 lg:py-24 bg-charcoal-2 text-white border-b border-[#3A3D42]">
      <div className="container mx-auto px-4 max-w-[1140px]">
        <div className="text-center mb-14">
          <span className="text-xs sm:text-sm font-heading font-bold text-amber tracking-widest uppercase block mb-2">
            PRECISIÓN PARA TU AUTO
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-heading font-bold text-white uppercase tracking-tight leading-tight max-w-2xl mx-auto">
            Mantenimiento y Reparación de Automóviles
          </h2>
          <div className="w-12 h-[2px] bg-amber mx-auto my-4" />
          <p className="text-sm sm:text-base text-[#9A9DA3] max-w-2xl mx-auto font-sans">
            Tu vehículo personal merece una atención transparente, rápida y sin adivinanzas técnicas. Cuidamos cada detalle de tu motor en Loja.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((item, idx) => {
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
