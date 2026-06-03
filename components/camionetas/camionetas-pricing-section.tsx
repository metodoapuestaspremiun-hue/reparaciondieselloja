"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Check } from "lucide-react"

export default function CamionetasPricingSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const pricingPlans = [
    {
      title: "Diagnóstico de Motor",
      amount: "$120",
      period: "desde",
      description:
        "Utilizamos tecnología avanzada para un diagnóstico exacto, identificando fallas en el motor, inyección y turbo.",
      features: [
        "Escaneo computarizado",
        "Pruebas de compresión",
        "Análisis de gases",
        "Informe detallado"
      ],
      ctaText: "Solicitar Diagnóstico",
      ctaLink: "https://wa.me/593992797349?text=Hola, quiero un diagnóstico para mi camioneta"
    },
    {
      title: "Mantenimiento Preventivo",
      amount: "$280",
      period: "desde",
      description:
        "Realizamos un servicio completo que prolonga la vida de tu motor, ideal para camionetas 4x4 y de trabajo.",
      features: [
        "Cambio de aceite y filtros",
        "Revisión de frenos",
        "Alineación y balanceo",
        "Puesta a punto general"
      ],
      ctaText: "Programar Mantenimiento",
      ctaLink: "https://wa.me/593992797349?text=Hola, quiero programar mantenimiento para mi camioneta"
    },
    {
      title: "Reparación Especializada",
      amount: "$600",
      period: "desde",
      description:
        "Nos encargamos de cualquier reparación de motor, desde culatas hasta reconstrucciones completas, con la máxima garantía.",
      features: [
        "Rectificación de motor",
        "Reparación de turbo",
        "Sistema de inyección",
        "Garantía en mano de obra"
      ],
      ctaText: "Cotizar Reparación",
      ctaLink: "https://wa.me/593992797349?text=Hola, necesito cotización para reparación de motor de camioneta"
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % pricingPlans.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + pricingPlans.length) % pricingPlans.length)
  }

  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Repara tu motor en Loja con nosotros
          </h2>
          <p className="text-xl text-gray-300 mb-4">No dejes que una avería te detenga.</p>
          <div className="text-center mb-8">
            <p className="text-gray-300 text-lg">Contáctanos para recibir una cotización sin compromiso y confía tu camioneta a los verdaderos expertos.</p>
          </div>
        </div>

        {/* Mobile Carousel */}
        <div className="lg:hidden">
          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {pricingPlans.map((plan, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="bg-white rounded-lg shadow-xl p-6 h-full border border-gray-200">
                      <div className="mb-6">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.title}</h3>
                        <div className="flex items-baseline mb-2">
                          <span className="text-4xl font-bold text-gray-900">{plan.amount}</span>
                          <span className="text-lg text-gray-600 ml-2">{plan.period}</span>
                        </div>
                        <div className="h-6"></div>
                        <p className="text-gray-600 text-sm leading-relaxed">{plan.description}</p>
                      </div>

                      <ul className="space-y-3 mb-6">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start space-x-3">
                            <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <a href={plan.ctaLink} target="_blank" rel="noopener noreferrer" className="block">
                        <Button className="w-full bg-green-500 hover:bg-green-600 text-white py-3 text-base font-semibold rounded-lg">
                          {plan.ctaText}
                        </Button>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-between items-center mt-6">
              <Button variant="outline" size="icon" onClick={prevSlide} className="bg-white/80 hover:bg-white">
                <ChevronLeft className="h-4 w-4" />
              </Button>

              <div className="flex space-x-2">
                {pricingPlans.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentSlide ? "bg-[#ec0018]" : "bg-white/50"
                    }`}
                  />
                ))}
              </div>

              <Button variant="outline" size="icon" onClick={nextSlide} className="bg-white/80 hover:bg-white">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8 mb-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-xl p-8 transform hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl border border-gray-200"
            >
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{plan.title}</h3>
                <div className="flex items-baseline mb-3">
                  <span className="text-5xl font-bold text-gray-900">{plan.amount}</span>
                  <span className="text-xl text-gray-600 ml-2">{plan.period}</span>
                </div>
                <div className="h-6"></div>
                <p className="text-gray-600 leading-relaxed">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <a href={plan.ctaLink} target="_blank" rel="noopener noreferrer" className="block">
                <Button className="w-full bg-green-500 hover:bg-green-600 text-white py-4 text-lg font-semibold rounded-lg transform hover:scale-105 transition-all duration-200">
                  {plan.ctaText}
                </Button>
              </a>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-gray-300 mb-6 leading-relaxed max-w-3xl mx-auto">
            Las camionetas requieren un motor versátil para trabajo y aventura. Nuestro servicio incluye optimización
            para uso mixto, componentes resistentes y garantía para trabajo pesado.
          </p>

          <a href="https://wa.me/593992797349" target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="bg-[#ec0018] hover:bg-[#c40014] text-white px-8 py-4 text-lg font-bold rounded-lg"
            >
              Solicitar Cotización Camioneta
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
