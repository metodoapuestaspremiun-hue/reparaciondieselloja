"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Check } from "lucide-react"

export default function LivianosPricingSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const pricingPlans = [
    {
      title: "Mantenimiento Completo",
      percentage: "30%",
      amount: "$240",
      period: "USD",
      description:
        "Mantenemos tu auto en óptimas condiciones, previniendo fallos y prolongando la vida de tu motor con un servicio integral.",
      features: [
        "Cambio de aceite y filtros",
        "Revisión de frenos y suspensión",
        "Diagnóstico computarizado",
        "Limpieza de sistemas",
      ],
      ctaText: "Programar Mantenimiento",
      ctaLink:
        "https://wa.me/593983237491?text=Hola,%20quiero%20información%20sobre%20mantenimiento%20de%20vehículo%20liviano",
    },
    {
      title: "Diagnóstico Computarizado",
      amount: "$80",
      period: "desde",
      description:
        "Identificamos fallas con escaneo electrónico y pruebas de sensores para una reparación precisa y sin gastos innecesarios.",
      features: [
        "Escaneo de códigos de falla",
        "Revisión de sensores y actuadores",
        "Prueba de compresión de cilindros",
        "Informe técnico con presupuesto",
      ],
      ctaText: "Solicitar Diagnóstico",
      ctaLink:
        "https://wa.me/593983237491?text=Hola,%20quiero%20información%20sobre%20diagnóstico%20de%20vehículo%20liviano",
    },
    {
      title: "Reparación de Motor",
      amount: "$500",
      period: "desde",
      description:
        "Desde cambio de empaquetadura de culata hasta reparación completa de motor con repuestos garantizados.",
      features: [
        "Reparación y cambio de empaque de culata",
        "Cambio de kit de distribución (banda o cadena)",
        "Reparación de sistema de lubricación",
        "Garantía por escrito del trabajo",
      ],
      ctaText: "Cotizar Reparación",
      ctaLink: "https://wa.me/593983237491?text=Hola,%20necesito%20reparación%20de%20motor%20de%20vehículo%20liviano",
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
            Servicios de mecánica automotriz en Loja
          </h2>
          <p className="text-xl text-gray-300 mb-4">Tu vehículo en las mejores manos</p>
          <div className="text-center mb-8">
            <span className="text-5xl font-bold text-[#ec0018]">$800</span>
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
            Confía en nuestro taller para autos en Loja. Nuestro equipo de mecánicos expertos está capacitado para trabajar con todas las marcas y modelos, garantizando un servicio de calidad y la solución a cualquier problema de motor.
          </p>

          <a href="https://wa.me/593983237491?text=Hola,%20solicito%20atención%20para%20mi%20vehículo" target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="bg-[#ec0018] hover:bg-[#c40014] text-white px-8 py-4 text-lg font-bold rounded-lg"
            >
              ¡Llámanos Ahora!
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
