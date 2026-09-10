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
    <section className="py-20 bg-[#24272B] border-b border-[#34373C] text-white">
      <div className="container mx-auto px-4 max-w-[1140px]">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-xs sm:text-sm font-heading font-bold text-amber tracking-widest uppercase block mb-3">
            TARIFAS PARA TRANSPORTE PESADO
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-heading font-bold text-white mb-4 uppercase tracking-tight leading-tight">
            No dejes que una falla te detenga
          </h2>
          <div className="w-12 h-[2px] bg-amber mx-auto mb-5" />
          <p className="text-xl font-heading font-semibold text-amber tracking-wide uppercase mb-4">
            Tu vehículo de trabajo es tu herramienta más valiosa.
          </p>
          <div className="text-center mb-4">
            <p className="text-[#C7C9CD] text-base font-sans max-w-2xl mx-auto">
              Contáctanos hoy mismo para obtener una cotización y deja tu vehículo en las manos de los expertos en Loja.
            </p>
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
                      <div className="mb-6">
                        <h3 className="text-2xl font-heading font-bold text-white mb-2 uppercase tracking-wide">{plan.title}</h3>
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
