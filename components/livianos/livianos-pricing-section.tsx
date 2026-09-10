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
    <section className="py-20 bg-[#24272B] border-b border-[#34373C] text-white">
      <div className="container mx-auto px-4 max-w-[1140px]">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-xs sm:text-sm font-heading font-bold text-amber tracking-widest uppercase block mb-3">
            TARIFAS PARA VEHÍCULOS LIVIANOS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-heading font-bold text-white mb-4 uppercase tracking-tight leading-tight">
            Servicios de mecánica automotriz en Loja
          </h2>
          <div className="w-12 h-[2px] bg-amber mx-auto mb-5" />
          <p className="text-xl font-heading font-semibold text-amber tracking-wide uppercase mb-6">
            Tu vehículo en las mejores manos
          </p>
          <div className="text-center mb-4">
            <span className="text-5xl font-heading font-bold text-white tracking-tight">$800</span>
            <p className="text-[#9A9DA3] text-sm font-sans mt-1">Servicio completo de diagnóstico y reparación</p>
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
                  <div key={index} className="w-full flex-shrink-0 px-2">
                    <div className="bg-charcoal rounded-[2px] p-6 border border-[#3E4249] border-t-2 border-t-amber shadow-lg">
                      <div className="flex justify-between items-center mb-4 pb-3 border-b border-[#34373C]">
                        <h3 className="text-2xl font-heading font-bold text-white uppercase tracking-wide">{plan.title}</h3>
                        <div className="text-xl font-heading font-bold text-amber">{plan.percentage}</div>
                      </div>
                      <div className="mb-6">
                        <div className="flex items-baseline mb-2">
                          <span className="text-4xl font-heading font-bold text-white">{plan.amount}</span>
                          <span className="text-sm text-[#9A9DA3] ml-2 font-sans">{plan.period}</span>
                        </div>
                        <p className="text-[#C7C9CD] text-sm font-sans leading-relaxed">{plan.description}</p>
                      </div>

                      <ul className="space-y-3 mb-6 pt-4 border-t border-[#34373C]">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start space-x-3">
                            <Check className="w-4 h-4 text-amber flex-shrink-0 mt-0.5" />
                            <span className="text-[#C7C9CD] text-sm font-sans">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <a href={plan.ctaLink} target="_blank" rel="noopener noreferrer" className="block">
                        <Button className="w-full bg-amber hover:bg-[#d99700] text-charcoal py-3 text-base font-heading font-bold rounded-[2px] uppercase tracking-wider">
                          {plan.ctaText}
                        </Button>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-between items-center mt-6">
              <Button variant="outline" size="icon" onClick={prevSlide} className="bg-charcoal text-white border-[#3E4249]">
                <ChevronLeft className="h-4 w-4" />
              </Button>

              <div className="flex space-x-2">
                {pricingPlans.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-6 h-1.5 transition-colors rounded-[1px] ${
                      index === currentSlide ? "bg-amber" : "bg-[#3E4249]"
                    }`}
                    aria-label={`Plan ${index + 1}`}
                  />
                ))}
              </div>

              <Button variant="outline" size="icon" onClick={nextSlide} className="bg-charcoal text-white border-[#3E4249]">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8 mb-10">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className="bg-charcoal rounded-[2px] p-8 border border-[#3E4249] border-t-4 border-t-amber shadow-md hover:border-amber transition-colors duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-center mb-4 pb-3 border-b border-[#34373C]">
                  <h3 className="text-2xl font-heading font-bold text-white uppercase tracking-wide">{plan.title}</h3>
                  <div className="text-2xl font-heading font-bold text-amber">{plan.percentage}</div>
                </div>
                <div className="mb-6">
                  <div className="flex items-baseline mb-3">
                    <span className="text-5xl font-heading font-bold text-white">{plan.amount}</span>
                    <span className="text-sm text-[#9A9DA3] ml-2 font-sans">{plan.period}</span>
                  </div>
                  <p className="text-[#C7C9CD] text-sm font-sans leading-relaxed">{plan.description}</p>
                </div>

                <ul className="space-y-3.5 mb-8 pt-4 border-t border-[#34373C]">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <Check className="w-4 h-4 text-amber flex-shrink-0 mt-0.5" />
                      <span className="text-[#C7C9CD] text-sm font-sans">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a href={plan.ctaLink} target="_blank" rel="noopener noreferrer" className="block">
                <Button className="w-full bg-amber hover:bg-[#d99700] text-charcoal py-3.5 text-base font-heading font-bold rounded-[2px] uppercase tracking-wider transition-colors duration-200">
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
