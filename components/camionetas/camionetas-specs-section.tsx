"use client"

import { CheckCircle2, Award, ShieldAlert, Cpu, Wrench, Gauge } from "lucide-react"

export default function CamionetasSpecsSection() {
  const specs = [
    {
      title: "Diagnóstico Computarizado para 4x4",
      desc: "Escaneo específico para cajas de transferencia, sistemas Common Rail de alta presión y sensores de tracción electrónica.",
      icon: Cpu
    },
    {
      title: "Calibración de Inyectores y Turbocargador",
      desc: "Pruebas de entrega y retorno en banco para evitar humo negro, corregir cascabeleo y restaurar el torque de fábrica.",
      icon: Gauge
    },
    {
      title: "Mantenimiento para Uso Rudo y Minería",
      desc: "Fluidos de alto rendimiento para diferenciales delantero/trasero, engrase de crucetas, suspensión y frenos para caminos de tercer orden.",
      icon: Wrench
    },
    {
      title: "Modelos Especializados en Loja",
      desc: "Experiencia comprobada en Toyota Hilux (1KD/2GD), Chevrolet D-Max (4JJ1/RZ4E), Ford Ranger, Nissan Navara y Mitsubishi L200.",
      icon: Award
    }
  ]

  return (
    <section className="py-20 bg-gray-950 text-white border-t border-b border-gray-900">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-14">
          <span className="text-red-500 font-bold text-xs uppercase tracking-widest bg-red-500/10 px-3 py-1 rounded-full border border-red-500/20">
            Tecnología para Camionetas
          </span>
          <h2 className="text-3xl md:text-5xl font-black mt-3">
            Servicio Especializado para Trabajo y Aventura
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mt-3 text-sm md:text-base">
            Una camioneta sometida a carga y pendientes en la Región Sur requiere parámetros mecánicos precisos. Descubre por qué somos el taller preferido en Loja.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {specs.map((item, idx) => {
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
