"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const faqs = [
    {
      question: "¿Cuál es la especialidad principal de Mecánica Loja?",
      answer:
        "Nuestra especialidad es la reparación y reconstrucción integral de motores diésel, abarcando todas las marcas y modelos. También somos expertos en motores a gasolina, atendiendo prioritariamente vehículos pesados, flotas y maquinaria industrial.",
    },
    {
      question: "¿Por qué elegirnos sobre otros talleres de reparación de motores en Loja?",
      answer:
        "La diferencia está en la experiencia de más de 35 años y nuestra ubicación en Juan José Peña y Mercadillo, Loja. Garantizamos soluciones robustas y duraderas, utilizando Diagnóstico Computarizado para asegurar la precisión en cada reparación.",
    },
    {
      question: "¿Cómo manejan el alto costo de una reparación mayor de motor?",
      answer:
        "Para tu tranquilidad y mejor flujo de caja, utilizamos un esquema de pago transparente por fases. El costo se divide en tres etapas (Inicial, Avance/Repuestos, y Contraentrega), ligando el pago al progreso real del trabajo.",
    },
    {
      question: "¿Qué tecnología utilizan para diagnosticar fallas en motores modernos?",
      answer:
        "Usamos equipos de Diagnóstico Computarizado de última generación. Esto es esencial para identificar con precisión fallas en los sistemas electrónicos y de inyección (Common Rail) de los motores diésel modernos, minimizando el tiempo de inactividad de tu vehículo.",
    },
    {
      question: "¿Qué tipo de garantía ofrecen en la reparación de un motor?",
      answer:
        "Ofrecemos una garantía por escrito en todos los trabajos mayores. Este respaldo técnico asegura que tu vehículo salga de nuestro taller con la tranquilidad de un servicio profesional y duradero que cubre toda la Región Sur.",
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
              RESOLUCIÓN DE DUDAS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-heading font-bold text-ink uppercase tracking-tight mb-4">
              Preguntas Frecuentes - Motores Diesel
            </h2>
            <div className="w-12 h-[2px] bg-amber mx-auto mb-5" />
            <p className="text-base sm:text-lg text-ash font-sans">
              Encuentra respuestas a las preguntas más comunes sobre nuestros servicios de reparación de motores diésel en Loja.
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
