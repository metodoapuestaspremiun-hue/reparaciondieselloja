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
        "Sí, ofrecemos grúa las 24 horas para vehículos inmovilizados. Para mantenimientos programados, contamos con servicio de recogida y entrega en Loja. Llámanos al 0992797349 para coordinar.",
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">¿Tu camioneta necesita un experto?</h2>
            <p className="text-lg text-gray-600">
              Resolvemos todas tus dudas sobre el cuidado y reparación de tu vehículo.
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
