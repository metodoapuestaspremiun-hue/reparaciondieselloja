"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: "Luis R. - Transportista (Loja)",
      title: "El Único Taller de Alta Especialización",
      testimonial:
        "Tuve un problema serio con mi motor diésel y busqué en toda la región. Encontré el nivel de especialización que tiene Automotriz Chávez aquí en Loja. Repararon mi motor en tiempo récord y el servicio es garantizado. ¡Vale la pena confiar en los expertos de Loja!",
      image: "/images/carlos.jpg",
    },
    {
      name: "Patricia T. - Empresaria (Loja)",
      title: "Excelente Servicio para Flotas",
      testimonial:
        "Mi empresa de transporte confía en Automotriz Chávez desde hace años. Su programa de mantenimiento preventivo nos ha ahorrado miles en reparaciones inesperadas. ",
      image: "/images/maria.jpg",
    },
    {
      name: "Jorge M. - Contratista (Loja)",
      title: "Expertos en Maquinaria Pesada",
      testimonial:
        "Trabajo en construcción y necesito reparación urgente para mis equipos diésel. Encontré en Automotriz Chávez la experiencia y el respaldo que no hallé en otros lugares. Confío en su trabajo porque sé que mi maquinaria siempre está en buenas manos en su taller del Parque Industrial de Loja.",
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
    <section className="py-16 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image src="/images/taller.jpg" alt="Taller Automotriz" fill className="object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Clientes Satisfechos en Toda la Región Sur</h2>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto">
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
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="bg-white bg-opacity-95 p-6 rounded-lg shadow-lg">
                      <div className="flex items-center mb-4">
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          width={48}
                          height={48}
                          className="w-12 h-12 rounded-full mr-4 object-cover"
                        />
                        <div>
                          <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-current" />
                            ))}
                          </div>
                        </div>
                      </div>
                      <h3 className="text-lg font-semibold text-red-600 mb-2">{testimonial.title}</h3>
                      <p className="text-gray-700 italic">"{testimonial.testimonial}"</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-between items-center mt-6">
              <Button variant="outline" size="icon" onClick={prevTestimonial} className="bg-white/80 hover:bg-white">
                <ChevronLeft className="h-4 w-4" />
              </Button>

              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentTestimonial ? "bg-red-500" : "bg-white/50"
                    }`}
                  />
                ))}
              </div>

              <Button variant="outline" size="icon" onClick={nextTestimonial} className="bg-white/80 hover:bg-white">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-95 p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={64}
                  height={64}
                  className="w-16 h-16 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-red-600 mb-2">{testimonial.title}</h3>
              <p className="text-gray-700 italic">"{testimonial.testimonial}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
