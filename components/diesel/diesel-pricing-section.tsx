"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Check } from "lucide-react"

export default function DieselPricingSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const pricingPlans = [
    {
      step: "01",
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
      step: "02",
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
      step: "03",
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
    <section className="py-20 lg:py-24 bg-charcoal-2 text-white border-b border-[#3A3D42]">
      <div className="container mx-auto px-4 max-w-[1140px]">
        
        {/* Encabezado Industrial */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 pb-6 border-b border-[#3A3D42]">
          <div>
            <span className="text-xs sm:text-sm font-heading font-bold text-amber tracking-widest uppercase block mb-2">
              ORDEN DE TRABAJO Y PRESUPUESTOS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-heading font-bold text-white uppercase tracking-tight leading-tight max-w-xl">
              Precios Transparentes para la Reparación de tu Motor Diésel
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#9A9DA3] max-w-md font-sans">
            Sin costos ocultos. Te ofrecemos un presupuesto claro y detallado antes de iniciar cualquier trabajo en nuestro taller de Loja.
          </p>
        </div>

        {/* Mobile Carousel */}
        <div className="lg:hidden mb-10">
          <div className="relative">
            <div className="overflow-hidden border border-[#3A3D42]">
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {pricingPlans.map((plan, index) => (
                  <div key={index} className="w-full flex-shrink-0 p-6 bg-charcoal">
                    <div className="font-heading font-bold text-xs text-amber uppercase tracking-wider mb-2">
                      FASE {plan.step}
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-white uppercase mb-2">
                      {plan.title}
                    </h3>
                    <div className="flex items-baseline gap-2 mb-4">
                      <span className="text-3xl font-heading font-bold text-amber">{plan.amount}</span>
                      <span className="text-xs text-[#9A9DA3] uppercase">{plan.period}</span>
                    </div>
                    <p className="text-xs text-[#B9BCC1] leading-relaxed mb-6 font-sans">
                      {plan.description}
                    </p>
                    <ul className="space-y-2 mb-6 border-t border-[#34373C] pt-4 font-sans text-xs text-[#C7C9CD]">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-amber flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <a href={plan.ctaLink} target="_blank" rel="noopener noreferrer" className="block">
                      <button className="w-full bg-amber hover:bg-[#d99700] text-charcoal py-3 rounded-[2px] font-heading font-bold text-sm uppercase tracking-wider transition-colors">
                        {plan.ctaText}
                      </button>
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel Controls */}
            <div className="flex justify-between items-center mt-4">
              <button
                onClick={prevSlide}
                className="border border-[#4A4E54] text-white p-2 rounded-[2px] hover:border-amber transition-colors"
                aria-label="Previous slide"
              >
                <ChevronLeft size={18} />
              </button>
              <span className="font-heading text-xs text-[#9A9DA3]">
                {currentSlide + 1} / {pricingPlans.length}
              </span>
              <button
                onClick={nextSlide}
                className="border border-[#4A4E54] text-white p-2 rounded-[2px] hover:border-amber transition-colors"
                aria-label="Next slide"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Grid — Ticket Sequence */}
        <div className="hidden lg:grid grid-cols-3 border border-[#3A3D42] mb-12">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className="p-8 bg-charcoal border-r border-[#3A3D42] last:border-r-0 flex flex-col justify-between"
            >
              <div>
                <div className="font-heading font-bold text-xs text-amber uppercase tracking-wider mb-2">
                  FASE {plan.step}
                </div>
                <h3 className="text-2xl font-heading font-bold text-white uppercase mb-2">
                  {plan.title}
                </h3>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-4xl font-heading font-bold text-amber">{plan.amount}</span>
                  <span className="text-xs text-[#9A9DA3] uppercase">{plan.period}</span>
                </div>
                <p className="text-sm text-[#B9BCC1] leading-relaxed mb-6 font-sans">
                  {plan.description}
                </p>
                <ul className="space-y-2.5 mb-8 border-t border-[#34373C] pt-4 font-sans text-xs text-[#C7C9CD]">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-amber flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a href={plan.ctaLink} target="_blank" rel="noopener noreferrer" className="block mt-auto">
                <button className="w-full bg-amber hover:bg-[#d99700] text-charcoal py-3.5 rounded-[2px] font-heading font-bold text-sm uppercase tracking-wider transition-colors">
                  {plan.ctaText}
                </button>
              </a>
            </div>
          ))}
        </div>

        {/* Bloque de Cierre Industrial */}
        <div className="max-w-2xl mx-auto text-center pt-6">
          <p className="text-[#B9BCC1] mb-6 leading-relaxed font-sans text-sm">
            Un motor diésel exige un cuidado especializado. En Mecánica Loja, entendemos la complejidad de estos sistemas. Nuestro equipo está altamente calificado para enfrentar cualquier desafío, desde inyectores defectuosos hasta problemas de turbo.
          </p>

          <a href="https://wa.me/593983237491?text=Hola,%20solicito%20cotización%20para%20motor%20diésel" target="_blank" rel="noopener noreferrer">
            <button className="bg-amber hover:bg-[#d99700] text-charcoal px-8 py-3.5 rounded-[2px] font-heading font-bold text-base uppercase tracking-wider transition-colors shadow-sm">
              Solicita tu Cotización
            </button>
          </a>
        </div>
      </div>
    </section>
  )
}
