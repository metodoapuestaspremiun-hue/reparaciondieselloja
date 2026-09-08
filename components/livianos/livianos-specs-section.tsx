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
    <section className="py-20 bg-gray-950 text-white border-t border-b border-gray-900">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-14">
          <span className="text-red-500 font-bold text-xs uppercase tracking-widest bg-red-500/10 px-3 py-1 rounded-full border border-red-500/20">
            Precisión para tu Auto
          </span>
          <h2 className="text-3xl md:text-5xl font-black mt-3">
            Mantenimiento y Reparación de Automóviles
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mt-3 text-sm md:text-base">
            Tu vehículo personal merece una atención transparente, rápida y sin adivinanzas técnicas. Cuidamos cada detalle de tu motor en Loja.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((item, idx) => {
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
