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
      ctaLink: "https://wa.me/593983237491?text=Hola,%20quiero%20información%20sobre%20diagnóstico%20de%20motor%20diésel",
    },
    {
      title: "Mantenimiento Preventivo",
      amount: "$250",
      period: "desde",
      description:
        "Evita averías mayores con un servicio completo que alarga la vida útil de tu motor diésel y asegura su rendimiento.",
      features: [
        "Cambio de aceite sintético para diésel",
        "Reemplazo de filtros (combustible, aceite, aire)",
        "Limpieza y calibración de inyectores",
        "Revisión de bujías de precalentamiento",
      ],
      ctaText: "Programar Mantenimiento",
      ctaLink: "https://wa.me/593983237491?text=Hola,%20quiero%20información%20sobre%20mantenimiento%20de%20motor%20diésel",
    },
    {
      title: "Reparación Integral",
      amount: "$800",
      period: "desde",
      description:
        "Solucionamos problemas graves de compresión, culata, pistones o turbo. Devolvemos a tu motor su potencia original.",
      features: [
        "Desmontaje y armado completo",
        "Rectificación de cigüeñal y bloque",
        "Cambio de pistones y rines",
        "Pruebas de banco y garantía escrita",
      ],
      ctaText: "Cotizar Reparación",
      ctaLink: "https://wa.me/593983237491?text=Hola,%20necesito%20reparación%20de%20motor%20diésel",
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
            Precios Transparentes para la Reparación de tu Motor Diésel
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Sin costos ocultos. Te ofrecemos un presupuesto claro y detallado antes de iniciar cualquier trabajo en nuestro taller de Loja.
          </p>
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
                    <div className="bg-white rounded-lg p-6 shadow-lg h-full flex flex-col justify-between">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.title}</h3>
                        <div className="mb-4">
                          <span className="text-4xl font-bold text-red-500">{plan.amount}</span>
                          <span className="text-gray-500 ml-2">{plan.period}</span>
                        </div>
                        <p className="text-gray-600 mb-6">{plan.description}</p>
                        <ul className="space-y-3 mb-6">
                          {plan.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center">
                              <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                              <span className="text-gray-700">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <a href={plan.ctaLink} target="_blank" rel="noopener noreferrer" className="block">
                        <Button className="w-full bg-green-500 hover:bg-green-600 text-white py-3 text-lg font-semibold rounded-lg">
                          {plan.ctaText}
                        </Button>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel Controls */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-r hover:bg-opacity-75 transition-opacity"
              aria-label="Previous slide"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-l hover:bg-opacity-75 transition-opacity"
              aria-label="Next slide"
            >
              <ChevronRight size={24} />
            </button>

            {/* Slide Indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {pricingPlans.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    currentSlide === index ? "bg-red-500" : "bg-gray-400"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-8 shadow-lg flex flex-col justify-between transform hover:-translate-y-2 transition-transform duration-300"
            >
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.title}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-red-500">{plan.amount}</span>
                  <span className="text-gray-500 ml-2">{plan.period}</span>
                </div>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

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
            Un motor diésel exige un cuidado especializado. En Mecánica Loja, entendemos la complejidad de estos sistemas. Nuestro equipo está altamente calificado para enfrentar cualquier desafío, desde inyectores defectuosos hasta problemas de turbo.
          </p>

          <a href="https://wa.me/593983237491?text=Hola,%20solicito%20cotización%20para%20motor%20diésel" target="_blank" rel="noopener noreferrer">
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
