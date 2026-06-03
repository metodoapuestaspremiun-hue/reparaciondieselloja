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
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ¿Tu vehículo necesita un experto?
            </h2>
            <p className="text-lg text-gray-600">
              No dejes el cuidado de tu vehículo al azar. Contáctanos para una cotización sin compromiso.
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
