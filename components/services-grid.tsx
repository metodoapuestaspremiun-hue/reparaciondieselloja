"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import AppointmentForm from "./appointment-form"

export default function ServicesGrid() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const services = [
    {
      title: "REPARACIÓN INTEGRAL DE MOTORES DIÉSEL",
      description:
        "Nos especializamos en la reparación y reconstrucción de motores diésel de todas las marcas, en Loja. Tanto vehículos livianos medianos y pesados, siempre respaldado por los años de experiencia",
      image: "/nuevas/mecanica_en_loja_reparacion.webp",
      link: "/servicios/reparacion",
      cta: "SOLICITAR CITA DE REPARACIÓN"
    },
    {
      title: "MANTENIMIENTO PARA ALARGAR VIDA ÚTIL",
      description:
        "Programas de mantenimiento y seguimiento diseñados para alargar la vida útil y evitar averías costosas. Solución ideal para flotas en Loja.",
      image: "/images/motor_liviano.jpg",
      link: "/servicios/mantenimiento",
      cta: "CONSULTAR PROGRAMAS"
    },
    {
      title: "DIAGNÓSTICO COMPUTARIZADO DE MOTOR",
      description:
        "Tecnología de punta para el diagnóstico de sistemas de motor y fallas electrónicas. Identificamos el problema rápidamente para una reparación precisa.",
      image: "/nuevas/mecanica_en_loja_diagnostico.webp",
      link: "/servicios/diagnostico",
      cta: "SOLICITAR DIAGNÓSTICO RÁPIDO"
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length)
  }

  return (
    <section className="py-16 lg:py-24 bg-gray-50 lg:min-h-[600px] flex items-center">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">SERVICIOS ESPECIALIZADOS Y GARANTIZADOS PARA TU MOTOR</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Somos el líder en Reparación Integral de Motores en Loja. Nuestra especialidad es la reparación integral de motores de todas las marcas. Ofrecemos diagnóstico preciso y mantenimiento especializado para alargar la vida útil de tu motor.
          </p>
        </div>

        {/* Mobile Carousel */}
        <div className="lg:hidden">
          <div className="relative">
            <div className="overflow-hidden rounded-lg">
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {services.map((service, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="relative h-80 rounded-lg overflow-hidden shadow-lg group">
                      <Image
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-end p-6">
                        <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                        <p className="text-gray-200 text-sm mb-4">{service.description}</p>
                        <Link href="#atencion-region-sur">
                          <Button className="bg-[#ec0018] hover:bg-[#c40014] text-white">{service.cta || 'Solicitar Cita'}</Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile controls */}
            <div className="flex justify-between items-center mt-4">
              <Button variant="outline" size="icon" onClick={prevSlide}>
                <ChevronLeft className="h-4 w-4" />
              </Button>

              <div className="flex space-x-2">
                {services.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentSlide ? "bg-red-500" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>

              <Button variant="outline" size="icon" onClick={nextSlide}>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative h-96 rounded-lg overflow-hidden shadow-lg group hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
            >
              <Image
                src={service.image || "/placeholder.svg"}
                alt={service.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 group-hover:bg-opacity-70 flex flex-col justify-end p-6 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#ec0018] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-200 text-sm mb-4">{service.description}</p>
                <Link href="#atencion-region-sur">
                  <Button className="bg-[#ec0018] hover:bg-[#c40014] text-white transform group-hover:scale-105 transition-transform">
                    {service.cta || 'Solicitar Cita'}
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">¿Necesitas ayuda con tu vehículo?</h2>
          <p className="text-gray-600 mb-8 text-lg max-w-3xl mx-auto">
            Completa el formulario y nos pondremos en contacto contigo para agendar una cita a la brevedad posible. Nuestro equipo de expertos está listo para ayudarte con cualquier problema en tu motor diesel.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-md">
              <div className="bg-green-100 p-2 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-gray-700 font-medium">Respuesta en 1 hora</span>
            </div>
            
            <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-md">
              <div className="bg-green-100 p-2 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-gray-700 font-medium">Servicio con garantía</span>
            </div>
            
            <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-md">
              <div className="bg-green-100 p-2 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6 6 0 011.12-1.165A5.99 5.99 0 0110 6c.695 0 1.36.101 1.986.291a6 6 0 011.12 1.165 6 6 0 11-8.774 8.57 6 6 0 010-8.57zM10 9a1 1 0 100-2 1 1 0 000 2z" />
                </svg>
              </div>
              <span className="text-gray-700 font-medium">Atención personalizada</span>
            </div>
          </div>
          
          <div className="mt-10">
            <a href="#atencion-region-sur" className="inline-block bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300">
              Contáctanos Ahora
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
