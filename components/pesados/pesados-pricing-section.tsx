"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Check } from "lucide-react"

export default function PesadosPricingSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const pricingPlans = [
    {
      title: "Diagnóstico Avanzado",
      amount: "$150",
      period: "desde",
      description:
        "Identificamos fallos complejos en el motor y sistemas de inyección, turbo y transmisión con herramientas especializadas.",
      features: [
        "Escaneo computarizado",
        "Pruebas de compresión",
        "Análisis de gases",
        "Informe detallado",
      ],
      ctaText: "Solicitar Diagnóstico",
      ctaLink: "https://wa.me/593983237491?text=Hola,%20quiero%20un%20diagnóstico%20para%20mi%20vehículo%20pesado",
    },
    {
      title: "Mantenimiento Preventivo Flotas",
      amount: "$450",
      period: "desde",
      description:
        "Programas de mantenimiento para camiones y flotas. Minimizamos el tiempo de inactividad de tus unidades de trabajo.",
      features: [
        "Cambio de aceite y filtros de alto rendimiento",
        "Revisión de sistemas neumáticos y frenos",
        "Engrase general y calibración",
        "Inspección preventiva de motor"
      ],
      ctaText: "Programar Flota",
      ctaLink: "https://wa.me/593983237491?text=Hola,%20quiero%20programar%20mantenimiento%20para%20mi%20vehículo%20pesado",
    },
    {
      title: "Reconstrucción de Motor Diésel Pesado",
      amount: "$1,200",
      period: "desde",
      description:
        "Reparación mayor para camiones, cabezales, buses y maquinaria pesada con repuestos de alta resistencia y garantía.",
      features: [
        "Rectificación y encamisado de cilindros",
        "Reparación de bomba e inyectores",
        "Overhaul completo con repuestos originales",
        "Garantía por escrito"
      ],
      ctaText: "Cotizar Reparación Mayor",
      ctaLink: "https://wa.me/593983237491?text=Hola,%20necesito%20cotización%20para%20reparación%20de%20motor%20pesado",
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
            No dejes que una falla te detenga
          </h2>
          <p className="text-xl text-gray-300 mb-4">Tu vehículo de trabajo es tu herramienta más valiosa.</p>
          <div className="text-center mb-8">
            <p className="text-gray-300 text-lg">Contáctanos hoy mismo para obtener una cotización y deja tu vehículo en las manos de los expertos en Loja.</p>
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
                        <div className="h-6 mb-3"></div>
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
                <div className="h-8 mb-4"></div>
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
            Los vehículos pesados requieren reparación industrial con componentes de alta resistencia. Nuestro precio
            incluye garantía extendida y certificación de rendimiento para trabajo pesado.
          </p>

          <a href="https://wa.me/593983237491?text=Hola,%20solicito%20cotización%20industrial%20para%20vehículo%20pesado" target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="bg-[#ec0018] hover:bg-[#c40014] text-white px-8 py-4 text-lg font-bold rounded-lg"
            >
              Solicitar Cotización Industrial
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
