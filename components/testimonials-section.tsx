"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: "Luis R. - Transportista (Loja)",
      title: "El Único Taller de Alta Especialización",
      testimonial:
        "Tuve un problema serio con mi motor diésel y busqué en toda la región. Encontré el nivel de especialización que tiene Mecánica Loja aquí en Loja. Repararon mi motor en tiempo récord y el servicio es garantizado. ¡Vale la pena confiar en los expertos de Loja!",
      image: "/images/carlos.jpg",
    },
    {
      name: "Patricia T. - Empresaria (Loja)",
      title: "Excelente Servicio para Flotas",
      testimonial:
        "Mi empresa de transporte confía en Mecánica Loja desde hace años. Su programa de mantenimiento preventivo nos ha ahorrado miles en reparaciones inesperadas. ",
      image: "/images/maria.jpg",
    },
    {
      name: "Jorge M. - Contratista (Loja)",
      title: "Expertos en Maquinaria Pesada",
      testimonial:
        "Trabajo en construcción y necesito reparación urgente para mis equipos diésel. Encontré en Mecánica Loja la experiencia y el respaldo que no hallé en otros lugares. Confío en su trabajo porque sé que mi maquinaria siempre está en buenas manos en su taller de Juan José Peña y Mercadillo en Loja.",
      image: "/images/roberto.jpg",
    },
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-charcoal border-b border-[#34373C] text-white relative overflow-hidden">
      {/* Patrón de fondo técnico sutil */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <Image src="/nuevas/mecanica_en_loja_reparacion.webp" alt="Taller Mecánica Loja" fill className="object-cover grayscale" />
        <div className="absolute inset-0 bg-charcoal/90"></div>
      </div>

      <div className="container mx-auto px-4 max-w-[1140px] relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-xs sm:text-sm font-heading font-bold text-amber tracking-widest uppercase block mb-3">
            TESTIMONIOS Y EVALUACIONES
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-heading font-bold text-white uppercase tracking-tight mb-4 leading-tight">
            Clientes Satisfechos en Toda la Región Sur
          </h2>
          <div className="w-12 h-[2px] bg-amber mx-auto mb-5" />
          <p className="text-base sm:text-lg text-[#C7C9CD] leading-relaxed font-sans">
            Conoce las experiencias de nuestros clientes y por qué confían en nosotros para el cuidado de sus vehículos, flotas y maquinaria pesada en Loja y la Región Sur.
          </p>
        </div>

        {/* Mobile Carousel */}
        <div className="lg:hidden">
          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-2">
                    <div className="bg-[#24272B] border border-[#3E4249] border-l-4 border-l-amber p-6 rounded-[2px] shadow-md relative">
                      <Quote className="absolute top-4 right-4 w-6 h-6 text-[#3E4249]" />
                      <div className="flex items-center mb-4">
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          width={48}
                          height={48}
                          className="w-12 h-12 rounded-[2px] mr-4 object-cover border border-[#3E4249]"
                        />
                        <div>
                          <h4 className="font-heading font-bold text-white text-base uppercase tracking-wide">{testimonial.name}</h4>
                          <div className="flex text-amber">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-3.5 h-3.5 fill-current" />
                            ))}
                          </div>
                        </div>
                      </div>
                      <h3 className="text-xl font-heading font-bold text-amber mb-2 uppercase tracking-wide">
                        {testimonial.title}
                      </h3>
                      <p className="text-[#C7C9CD] text-sm font-sans italic leading-relaxed">
                        "{testimonial.testimonial}"
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-between items-center mt-6">
              <Button variant="outline" size="icon" onClick={prevTestimonial} className="bg-charcoal text-white border-[#3E4249]">
                <ChevronLeft className="h-4 w-4" />
              </Button>

              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-6 h-1.5 transition-colors rounded-[1px] ${
                      index === currentTestimonial ? "bg-amber" : "bg-[#3E4249]"
                    }`}
                    aria-label={`Testimonio ${index + 1}`}
                  />
                ))}
              </div>

              <Button variant="outline" size="icon" onClick={nextTestimonial} className="bg-charcoal text-white border-[#3E4249]">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Desktop Grid: Fichas de Taller */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#24272B] border border-[#3E4249] border-l-4 border-l-amber p-8 rounded-[2px] shadow-sm hover:border-amber transition-colors duration-200 relative flex flex-col justify-between"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-[#34373C]" />
              <div>
                <div className="flex items-center mb-6">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={56}
                    height={56}
                    className="w-14 h-14 rounded-[2px] mr-4 object-cover border border-[#3E4249]"
                  />
                  <div>
                    <h4 className="font-heading font-bold text-white text-base uppercase tracking-wide">{testimonial.name}</h4>
                    <div className="flex text-amber mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-heading font-bold text-amber mb-3 uppercase tracking-wide">
                  {testimonial.title}
                </h3>
                <p className="text-[#C7C9CD] text-sm font-sans italic leading-relaxed">
                  "{testimonial.testimonial}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

