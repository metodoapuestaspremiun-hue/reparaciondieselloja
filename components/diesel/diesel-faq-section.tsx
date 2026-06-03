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
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Preguntas frecuentes sobre motores diésel
            </h2>
            <p className="text-lg text-gray-600">
              Todo lo que necesitas saber sobre el cuidado y mantenimiento de tu motor diésel en Loja.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                  {openFAQ === index ? (
                    <ChevronUp className="w-5 h-5 text-red-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-red-500 flex-shrink-0" />
                  )}
                </button>

                {openFAQ === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
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
