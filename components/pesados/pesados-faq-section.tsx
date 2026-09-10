"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

export default function PesadosFAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const faqs = [
    {
      question: "¿Qué problemas resuelven en vehículos pesados?",
      answer:
        "Solucionamos todo tipo de problemas en vehículos pesados: fallas de motor, problemas de transmisión, sistema de frenos, suspensión, dirección, sistema eléctrico, aire acondicionado, y más. Nuestro diagnóstico computarizado identifica con precisión cualquier falla.",
    },
    {
      question: "¿Qué mantenimiento necesita mi vehículo?",
      answer:
        "El mantenimiento varía según el modelo y kilometraje, pero en general recomendamos: cambio de aceite cada 5,000-7,000 km, revisión de frenos cada 15,000 km, alineación y balanceo cada 10,000 km, y revisión completa del vehículo cada 20,000 km. Nuestros técnicos pueden crear un plan personalizado para tu vehículo.",
    },
    {
      question: "¿Por qué mi vehículo consume más combustible de lo normal?",
      answer:
        "El exceso de consumo de combustible puede deberse a: bujías en mal estado, filtro de aire obstruido, problemas en los inyectores, sensores defectuosos, neumáticos con baja presión, o problemas en el sistema de escape. Te recomendamos un diagnóstico profesional para identificar la causa exacta.",
    },
    {
      question: "¿Cómo sé si mi vehículo necesita una afinación?",
      answer:
        "Señales de que tu vehículo necesita una afinación: dificultad al arrancar, aumento en el consumo de combustible, pérdida de potencia, humo excesivo, luces de advertencia encendidas, o vibraciones inusuales. Una afinación a tiempo puede prevenir problemas mayores y ahorrarte dinero a largo plazo.",
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  return (
    <section className="py-20 bg-paper border-b border-line text-ink">
      <div className="container mx-auto px-4 max-w-[1140px]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs sm:text-sm font-heading font-bold text-amber-dim tracking-widest uppercase block mb-3">
              CONSULTAS TÉCNICAS PESADAS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-heading font-bold text-ink uppercase tracking-tight mb-4 leading-tight">
              ¿Tu vehículo necesita un experto?
            </h2>
            <div className="w-12 h-[2px] bg-amber mx-auto mb-5" />
            <p className="text-base sm:text-lg text-ash font-sans">
              No dejes el cuidado de tu vehículo al azar. Contáctanos para una cotización sin compromiso.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-line rounded-[2px] bg-white overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-[#F7F7F5] transition-colors"
                >
                  <h3 className="text-lg font-heading font-bold text-ink uppercase tracking-wide pr-4">{faq.question}</h3>
                  {openFAQ === index ? (
                    <ChevronUp className="w-5 h-5 text-amber-dim flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-amber-dim flex-shrink-0" />
                  )}
                </button>

                {openFAQ === index && (
                  <div className="px-6 pb-5 pt-1 border-t border-line/60">
                    <p className="text-ash font-sans leading-relaxed text-sm sm:text-base">{faq.answer}</p>
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
