"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Check } from "lucide-react"

export default function DieselPricingSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const pricingPlans = [
    {
      title: "Diagnóstico",
      percentage: "35%",
      amount: "$420",
      period: "USD",
      description:
        "Identificamos con precisión fallos en el sistema de inyección, turbo, y más, para una solución exacta.",
      features: [
        "Diagnóstico por computadora",
        "Análisis de compresión",
        "Evaluación del sistema de inyección",
        "Informe detallado",
      ],
      ctaText: "Solicitar Diagnóstico",
      ctaLink:
        "https://wa.me/593992797349?text=Hola, quiero información sobre diagnóstico de motor diésel",
    },
    {
      title: "Mantenimiento",
      percentage: "35%",
      amount: "$420",
      period: "USD",
      description:
        "Realizamos un servicio completo que incluye cambio de aceite, filtros y revisión de componentes clave.",
      features: [
        "Cambio de aceite y filtros",
        "Revisión de componentes diésel",
        "Limpieza de sistemas",
        "Verificación general",
      ],
      ctaText: "Programar Mantenimiento",
      ctaLink: "https://wa.me/593992797349?text=Hola, quiero información sobre mantenimiento de motor diésel",
    },
    {
      title: "Reparación",
      percentage: "30%",
      amount: "$360",
      period: "USD",
      description:
        "Solucionamos problemas de inyección para mejorar la potencia, reducir el consumo y el humo en el escape.",
      features: [
        "Reparación de inyectores",
        "Ajuste de motor",
        "Garantía en repuestos",
        "Pruebas finales",
      ],
      ctaText: "Reparar mi Motor",
      ctaLink: "https://wa.me/593992797349?text=Hola, necesito reparación de motor diésel",
    },
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
            Nuestros servicios de reparación de motores diésel
          </h2>
          <p className="text-xl text-gray-300 mb-4">Tu motor diésel en manos de profesionales en Loja</p>
          <div className="text-center mb-8">
            <span className="text-5xl font-bold text-[#ec0018]">$1,200</span>
            <p className="text-gray-300 text-lg">Servicio completo de diagnóstico y reparación</p>
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
                        <div className="text-xl text-red-600 font-semibold mb-3">{plan.percentage}</div>
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
                <div className="text-2xl text-red-600 font-semibold mb-4">{plan.percentage}</div>
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
            Un motor diésel exige un cuidado especializado. En Automotriz Chávez, entendemos la complejidad de estos sistemas. Nuestro equipo está altamente calificado para enfrentar cualquier desafío, desde inyectores defectuosos hasta problemas de turbo.
          </p>

          <a href="https://wa.me/593992797349" target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="bg-[#ec0018] hover:bg-[#c40014] text-white px-8 py-4 text-lg font-bold rounded-lg"
            >
              Solicita tu Cotización
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
