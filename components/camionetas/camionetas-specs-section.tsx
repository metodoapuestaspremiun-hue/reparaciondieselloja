"use client"

import { Award, Cpu, Wrench, Gauge } from "lucide-react"

export default function CamionetasSpecsSection() {
  const specs = [
    {
      code: "SPEC 01",
      title: "Diagnóstico Computarizado para 4x4",
      desc: "Escaneo específico para cajas de transferencia, sistemas Common Rail de alta presión y sensores de tracción electrónica.",
      icon: Cpu
    },
    {
      code: "SPEC 02",
      title: "Calibración de Inyectores y Turbocargador",
      desc: "Pruebas de entrega y retorno en banco para evitar humo negro, corregir cascabeleo y restaurar el torque de fábrica.",
      icon: Gauge
    },
    {
      code: "SPEC 03",
      title: "Mantenimiento para Uso Rudo y Minería",
      desc: "Fluidos de alto rendimiento para diferenciales delantero/trasero, engrase de crucetas, suspensión y frenos para caminos de tercer orden.",
      icon: Wrench
    },
    {
      code: "SPEC 04",
      title: "Modelos Especializados en Loja",
      desc: "Experiencia comprobada en Toyota Hilux (1KD/2GD), Chevrolet D-Max (4JJ1/RZ4E), Ford Ranger, Nissan Navara y Mitsubishi L200.",
      icon: Award
    }
  ]

  return (
    <section className="py-20 lg:py-24 bg-charcoal-2 text-white border-b border-[#3A3D42]">
      <div className="container mx-auto px-4 max-w-[1140px]">
        <div className="text-center mb-14">
          <span className="text-xs sm:text-sm font-heading font-bold text-amber tracking-widest uppercase block mb-2">
            TECNOLOGÍA Y PARÁMETROS PARA CAMIONETAS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-heading font-bold text-white uppercase tracking-tight leading-tight max-w-2xl mx-auto">
            Servicio Especializado para Trabajo y Aventura
          </h2>
          <div className="w-12 h-[2px] bg-amber mx-auto my-4" />
          <p className="text-sm sm:text-base text-[#9A9DA3] max-w-2xl mx-auto font-sans">
            Una camioneta sometida a carga y pendientes en la Región Sur requiere parámetros mecánicos precisos. Descubre por qué somos el taller preferido en Loja.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {specs.map((item, idx) => {
            const Icon = item.icon
            return (
              <div 
                key={idx} 
                className="bg-charcoal border border-[#3A3D42] border-l-[3px] border-l-amber p-6 rounded-[2px] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-heading font-bold text-xs text-amber tracking-wider">
                      {item.code}
                    </span>
                    <Icon className="w-5 h-5 text-amber" />
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
