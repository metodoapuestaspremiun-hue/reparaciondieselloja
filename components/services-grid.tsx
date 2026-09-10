"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight, Clock, ShieldCheck, UserCheck, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ServicesGrid() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const services = [
    {
      code: "SRV-01",
      title: "REPARACIÓN INTEGRAL DE MOTORES DIÉSEL",
      description:
        "Nos especializamos en la reparación y reconstrucción de motores diésel de todas las marcas, en Loja. Vehículos livianos, camionetas y transporte pesado con diagnóstico computarizado.",
      image: "/nuevas/mecanica_en_loja_reparacion.webp",
      link: "/motores-diesel",
      cta: "VER SERVICIOS DIÉSEL"
    },
    {
      code: "SRV-02",
      title: "MECÁNICA Y MANTENIMIENTO PARA CAMIONETAS",
      description:
        "Programas de mantenimiento preventivo y reparación mayor para camionetas 4x4 y de trabajo. Calibración, suspensión y sistemas de inyección en Loja.",
      image: "/images/motor_camioneta.jpg",
      link: "/camionetas",
      cta: "VER SERVICIO CAMIONETAS"
    },
    {
      code: "SRV-03",
      title: "VEHÍCULOS PESADOS Y FLOTAS COMERCIALES",
      description:
        "Servicio técnico especializado para camiones, buses y flotas pesadas. Reconstrucción de motores, overhaul y calibración para trabajo pesado.",
      image: "/images/motor_pesados.jpg",
      link: "/vehiculos-pesados",
      cta: "VER VEHÍCULOS PESADOS"
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length)
  }

  return (
    <section className="py-20 lg:py-24 bg-paper border-b border-line text-ink">
      <div className="container mx-auto px-4 max-w-[1140px]">
        {/* Cabecera de sección */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-xs sm:text-sm font-heading font-bold text-amber-dim tracking-widest uppercase block mb-3">
            CATÁLOGO DE ESPECIALIDAD TÉCNICA
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-heading font-bold text-ink uppercase tracking-tight mb-4 leading-tight">
            SERVICIOS ESPECIALIZADOS Y GARANTIZADOS PARA TU MOTOR
          </h2>
          <div className="w-12 h-[2px] bg-amber mx-auto mb-5" />
          <p className="text-base sm:text-lg text-ash leading-relaxed font-sans">
            Somos el líder en Reparación Integral de Motores en Loja. Nuestra especialidad es la reparación integral de motores de todas las marcas. Ofrecemos diagnóstico preciso y mantenimiento especializado para alargar la vida útil de tu motor.
          </p>
        </div>

        {/* Mobile Carousel */}
        <div className="lg:hidden">
          <div className="relative">
            <div className="overflow-hidden rounded-[2px] border border-line bg-white">
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {services.map((service, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="relative h-64 w-full">
                      <Image
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-3 left-3 bg-charcoal text-amber text-xs font-heading font-bold px-2 py-0.5 border border-[#3E4249]">
                        {service.code}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-heading font-bold text-ink mb-2 uppercase">
                        {service.title}
                      </h3>
                      <p className="text-ash text-sm mb-5 font-sans leading-relaxed">
                        {service.description}
                      </p>
                      <Link href={service.link}>
                        <Button className="w-full bg-amber hover:bg-[#d99700] text-charcoal font-heading font-bold uppercase rounded-[2px]">
                          {service.cta || 'Solicitar Cita'}
                        </Button>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile controls */}
            <div className="flex justify-between items-center mt-4">
              <Button variant="outline" size="icon" onClick={prevSlide} className="border-line bg-white">
                <ChevronLeft className="h-4 w-4" />
              </Button>

              <div className="flex space-x-2">
                {services.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-6 h-1.5 transition-colors rounded-[1px] ${
                      index === currentSlide ? "bg-amber" : "bg-line"
                    }`}
                    aria-label={`Slide ${index + 1}`}
                  />
                ))}
              </div>

              <Button variant="outline" size="icon" onClick={nextSlide} className="border-line bg-white">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Desktop Worksheet / Hoja de Trabajo (Filas con Rule) */}
        <div className="hidden lg:flex flex-col border-t border-b border-line">
          {services.map((service, index) => (
            <div
              key={index}
              className="grid grid-cols-12 gap-8 py-8 items-center border-b border-line last:border-b-0 hover:bg-[#F3F3F0] transition-colors duration-200 group px-4"
            >
              {/* Código y Foto */}
              <div className="col-span-3 flex items-center gap-4">
                <span className="font-heading font-bold text-base text-amber-dim tracking-wider">
                  {service.code}
                </span>
                <div className="relative w-28 h-20 rounded-[2px] overflow-hidden border border-line flex-shrink-0">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Título y Descripción */}
              <div className="col-span-6">
                <h3 className="text-xl font-heading font-bold text-ink uppercase tracking-wide group-hover:text-amber-dim transition-colors mb-2">
                  {service.title}
                </h3>
                <p className="text-ash text-sm font-sans leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* CTA Formato Fila */}
              <div className="col-span-3 flex justify-end">
                <Link href={service.link}>
                  <Button className="bg-charcoal hover:bg-amber hover:text-charcoal text-white font-heading font-bold uppercase text-sm tracking-wide px-5 py-2.5 rounded-[2px] transition-colors duration-200 inline-flex items-center gap-2">
                    <span>{service.cta || 'Solicitar Cita'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section: ¿Necesitas ayuda con tu vehículo? */}
        <div className="mt-20 max-w-4xl mx-auto text-center pt-10 border-t border-line">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-ink uppercase tracking-tight mb-4">
            ¿Necesitas ayuda con tu vehículo?
          </h2>
          <p className="text-ash mb-10 text-base sm:text-lg max-w-3xl mx-auto font-sans leading-relaxed">
            Completa el formulario y nos pondremos en contacto contigo para agendar una cita a la brevedad posible. Nuestro equipo de expertos está listo para ayudarte con cualquier problema en tu motor diesel.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10">
            <div className="flex items-center justify-center p-5 bg-white rounded-[2px] border border-line shadow-sm">
              <div className="w-10 h-10 rounded-[2px] bg-[#F4F5F6] border border-line flex items-center justify-center mr-4">
                <Clock className="h-5 w-5 text-amber-dim" />
              </div>
              <span className="text-ink font-heading font-bold tracking-wide uppercase text-sm">Respuesta en 1 hora</span>
            </div>
            
            <div className="flex items-center justify-center p-5 bg-white rounded-[2px] border border-line shadow-sm">
              <div className="w-10 h-10 rounded-[2px] bg-[#F4F5F6] border border-line flex items-center justify-center mr-4">
                <ShieldCheck className="h-5 w-5 text-amber-dim" />
              </div>
              <span className="text-ink font-heading font-bold tracking-wide uppercase text-sm">Servicio con garantía</span>
            </div>
            
            <div className="flex items-center justify-center p-5 bg-white rounded-[2px] border border-line shadow-sm">
              <div className="w-10 h-10 rounded-[2px] bg-[#F4F5F6] border border-line flex items-center justify-center mr-4">
                <UserCheck className="h-5 w-5 text-amber-dim" />
              </div>
              <span className="text-ink font-heading font-bold tracking-wide uppercase text-sm">Atención personalizada</span>
            </div>
          </div>
          
          <div>
            <a 
              href="#atencion-region-sur" 
              className="inline-flex items-center justify-center bg-amber hover:bg-[#d99700] text-charcoal font-heading font-bold text-base sm:text-lg px-8 py-3.5 rounded-[2px] transition-colors duration-200 uppercase tracking-wide"
            >
              Contáctanos Ahora
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

