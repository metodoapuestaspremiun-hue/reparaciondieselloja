"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

export default function CamionetasFAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const faqs = [
    {
      question: "¿Con qué marcas de camionetas trabajan?",
      answer:
        "Trabajamos con todas las marcas de camionetas, incluyendo Toyota Hilux, Ford Ranger, Nissan Navara, Chevrolet S10, Mitsubishi L200, y más. Nuestros técnicos están certificados para trabajar con motores diésel y gasolina de todas las marcas.",
    },
    {
      question: "¿Cuánto cuesta una reparación de motor de camioneta?",
      answer:
        "El costo varía según la falla específica. Ofrecemos diagnósticos desde $120 que incluyen un informe detallado. Para reparaciones mayores, trabajamos con planes de pago flexibles. Contáctanos para una evaluación sin costo.",
    },
    {
      question: "¿Qué mantenimiento necesita mi camioneta 4x4?",
      answer:
        "Recomendamos mantenimiento cada 5,000 km para camionetas con uso intensivo o 10,000 km para uso normal. Incluye cambio de aceite, filtros, revisión de frenos, suspensión y sistemas de tracción. Ofrecemos paquetes de mantenimiento personalizados según tu tipo de uso.",
    },
    {
      question: "¿Ofrecen servicio a domicilio para camionetas?",
      answer:
        "Sí, ofrecemos grúa las 24 horas para vehículos inmovilizados. Para mantenimientos programados, contamos con servicio de recogida y entrega en Loja. Llámanos al 098 323 7491 para coordinar.",
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
              CONSULTAS SOBRE CAMIONETAS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-heading font-bold text-ink uppercase tracking-tight mb-4 leading-tight">
              ¿Tu camioneta necesita un experto?
            </h2>
            <div className="w-12 h-[2px] bg-amber mx-auto mb-5" />
            <p className="text-base sm:text-lg text-ash font-sans">
              Resolvemos todas tus dudas sobre el cuidado y reparación de tu vehículo.
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
