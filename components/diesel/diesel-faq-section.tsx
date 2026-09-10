"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

export default function DieselFAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const faqs = [
    {
      question: "¿Qué problemas resuelven en motores diésel?",
      answer:
        "Solucionamos todo tipo de problemas en motores diésel, incluyendo: fallos en el sistema de inyección, pérdida de potencia, exceso de humo, ruidos anormales, problemas de arranque, sobrecalentamiento, y consumo excesivo de combustible. Nuestro diagnóstico preciso identifica la causa exacta del problema.",
    },
    {
      question: "¿Qué mantenimiento necesita mi motor diésel?",
      answer:
        "El mantenimiento regular es clave para la durabilidad de tu motor diésel. Recomendamos: cambio de aceite y filtros cada 5,000-7,000 km, limpieza del sistema de inyección cada 15,000 km, revisión de la correa de distribución según el manual del fabricante, y verificación del sistema de enfriamiento. Nuestros técnicos pueden crear un plan de mantenimiento personalizado para tu vehículo.",
    },
    {
      question: "¿Por qué mi motor diésel echa humo blanco?",
      answer:
        "El humo blanco en motores diésel puede indicar varios problemas: fallas en los inyectores, problemas en la compresión, fuga de refrigerante a la cámara de combustión, o problemas en la sincronización de la inyección. Es importante realizar un diagnóstico profesional para identificar la causa exacta y evitar daños mayores.",
    },
    {
      question: "¿Cómo mejorar el rendimiento de mi motor diésel?",
      answer:
        "Para optimizar el rendimiento de tu motor diésel te recomendamos: mantenimiento preventivo regular, limpieza del sistema de admisión, verificación del sistema EGR, cambio de filtros de combustible y aire, y diagnóstico computarizado periódico. También ofrecemos servicios de optimización de rendimiento que pueden mejorar significativamente la potencia y eficiencia de tu motor.",
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  return (
    <section className="py-20 lg:py-24 bg-paper text-ink border-b border-line">
      <div className="container mx-auto px-4 max-w-[1140px]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs sm:text-sm font-heading font-bold text-amber-dim tracking-widest uppercase block mb-2">
              CONSULTAS TÉCNICAS FRECUENTES
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-heading font-bold text-ink uppercase tracking-tight leading-tight mb-4">
              Preguntas frecuentes sobre motores diésel
            </h2>
            <div className="w-12 h-[2px] bg-amber mx-auto mb-4" />
            <p className="text-sm sm:text-base text-ash font-sans">
              Todo lo que necesitas saber sobre el cuidado y mantenimiento de tu motor diésel en Loja.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-line bg-white rounded-[2px] transition-colors"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-[#F5F5F2] transition-colors"
                >
                  <h3 className="text-base sm:text-lg font-heading font-bold text-ink pr-4 uppercase">
                    {faq.question}
                  </h3>
                  {openFAQ === index ? (
                    <ChevronUp className="w-4 h-4 text-amber-dim flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-ash flex-shrink-0" />
                  )}
                </button>

                {openFAQ === index && (
                  <div className="px-6 pb-5 pt-1 border-t border-line/60">
                    <p className="text-sm text-ash leading-relaxed font-sans">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
