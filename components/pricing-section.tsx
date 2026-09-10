"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Check } from "lucide-react"

export default function PricingSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const pricingPlans = [
    {
      title: "Entrada",
      step: "PASO 01",
      percentage: "33%",
      amount: "$XX",
      period: "USD",
      description:
        "Sistema de pago inicial para comenzar la reparación de tu motor. Incluye diagnóstico completo y planificación del trabajo.",
      features: [
        "Diagnóstico completo del motor",
        "Evaluación de piezas necesarias",
        "Cronograma de trabajo detallado",
        "Inicio inmediato de la reparación",
      ],
      ctaText: "Iniciar Reparación",
      ctaLink:
        "https://wa.me/593983237491?text=Hola, quiero información sobre el pago de entrada para reparación de motor",
    },
    {
      title: "Avance",
      step: "PASO 02",
      percentage: "33%",
      amount: "$XX",
      period: "USD",
      description:
        "Pago intermedio durante el proceso de reparación. Cubre el trabajo de desmontaje, limpieza y reemplazo de componentes.",
      features: [
        "Desmontaje y limpieza del motor",
        "Reemplazo de piezas defectuosas",
        "Actualización del progreso",
        "Control de calidad intermedio",
      ],
      ctaText: "Consultar Avance",
      ctaLink:
        "https://wa.me/593983237491?text=Hola, quiero información sobre el pago de avance para reparación de motor",
    },
    {
      title: "Contraentrega",
      step: "PASO 03",
      percentage: "34%",
      amount: "$XX",
      period: "USD",
      description:
        "Pago final al momento de entregar tu vehículo completamente reparado. Incluye garantía y asesoría de mantenimiento.",
      features: [
        "Pruebas finales del motor",
        "Garantía por escrito",
        "Entrega del vehículo listo",
        "Asesoría de mantenimiento",
      ],
      ctaText: "Finalizar Proceso",
      ctaLink: "https://wa.me/593983237491?text=Hola, quiero información sobre el pago final para reparación de motor",
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
            ESQUEMA TRANSPARENTE EN 3 FASES
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-heading font-bold text-white mb-4 uppercase tracking-tight leading-tight">
            Precios Claros: Invierte en la Vida de tu Motor
          </h2>
          <div className="w-12 h-[2px] bg-amber mx-auto mb-5" />
          <p className="text-xl font-heading font-semibold text-amber tracking-wide uppercase mb-6">
            Tu Motor a la Medida, con Facilidades de Pago
          </p>
          <div className="text-center mb-4">
            <span className="text-5xl font-heading font-bold text-white tracking-tight">$XX</span>
            <p className="text-[#9A9DA3] text-sm font-sans mt-1">Reparación completa de motor</p>
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
                        <span className="text-xs font-heading font-bold text-[#9A9DA3] tracking-widest">{plan.step}</span>
                        <div className="text-xl font-heading font-bold text-amber">{plan.percentage}</div>
                      </div>
                      <div className="mb-6">
                        <h3 className="text-2xl font-heading font-bold text-white mb-2 uppercase tracking-wide">{plan.title}</h3>
                        <div className="flex items-baseline mb-2">
                          <span className="text-4xl font-heading font-bold text-white">{plan.amount}</span>
                          <span className="text-sm text-[#9A9DA3] ml-2">{plan.period}</span>
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

        {/* Desktop Grid: Estilo Tickets de Trabajo */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8 mb-14">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className="bg-charcoal rounded-[2px] p-8 border border-[#3E4249] border-t-4 border-t-amber shadow-md hover:border-amber transition-colors duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-center mb-4 pb-3 border-b border-[#34373C]">
                  <span className="text-xs font-heading font-bold text-[#9A9DA3] tracking-widest">{plan.step}</span>
                  <div className="text-2xl font-heading font-bold text-amber">{plan.percentage}</div>
                </div>
                <div className="mb-6">
                  <h3 className="text-2xl font-heading font-bold text-white mb-3 uppercase tracking-wide">{plan.title}</h3>
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

        <div className="text-center pt-8 border-t border-[#34373C]">
          <p className="text-[#C7C9CD] mb-8 leading-relaxed max-w-3xl mx-auto font-sans text-base">
            En Mecánica Loja, entendemos la inversión que representa la reparación de un motor. Por eso, te
            ofrecemos un esquema de pago flexible: una entrada para iniciar, un pago durante el proceso de arreglo y el
            saldo al momento de la contraentrega de tu vehículo con el motor como nuevo. ¡Transparencia y facilidades
            para tu tranquilidad!
          </p>

          <a href="#atencion-region-sur">
            <Button
              size="lg"
              className="bg-amber hover:bg-[#d99700] text-charcoal px-8 py-4 text-base sm:text-lg font-heading font-bold rounded-[2px] uppercase tracking-wide transition-colors duration-200"
            >
              Reservar un Turno Ahora
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}

