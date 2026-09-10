"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, CheckCircle2, Award } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ServiceProcess() {
  const [currentImage, setCurrentImage] = useState(0)
  const images = ["/images/cliente_mecanico.jpg", "/images/cliente_mecanico_2.jpg", "/images/cliente_mecanico_3.jpg"]

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <section className="py-20 bg-paper border-b border-line text-ink">
      <div className="container mx-auto px-4 max-w-[1140px]">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs sm:text-sm font-heading font-bold text-amber-dim tracking-widest uppercase block mb-3">
            ESTÁNDARES DE PRECISIÓN
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-heading font-bold text-ink uppercase tracking-tight mb-4">
            Nuestros servicios para reparación de motor en Loja
          </h2>
          <div className="w-12 h-[2px] bg-amber mx-auto mb-5" />
          <p className="text-base sm:text-lg text-ash leading-relaxed font-sans">
            Sabemos que su vehículo liviano o pesado, su flota o maquinaria industrial representan el motor de su negocio, es por eso que en Mecánica Loja nuestro objetivo es reparar, dar mantenimiento y asegurar la máxima vida útil de su motor en la región.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* First Card: Compromiso */}
          <div className="bg-white p-8 border border-line border-l-4 border-l-amber rounded-[2px] shadow-sm">
            <div className="w-12 h-12 bg-[#F6F6F4] border border-line rounded-[2px] flex items-center justify-center mb-6">
              <CheckCircle2 className="h-6 w-6 text-amber-dim" />
            </div>
            <h3 className="text-2xl font-heading font-bold text-ink mb-3 uppercase tracking-wide">Nuestro Compromiso</h3>
            <p className="text-ash leading-relaxed font-sans">
              Nuestro compromiso es brindarte no solo una reparación, sino la tranquilidad de saber que tu inversión está en manos de expertos.
            </p>
          </div>

          {/* Second Card: Trayectoria */}
          <div className="bg-white p-8 border border-line border-l-4 border-l-amber rounded-[2px] shadow-sm">
            <div className="w-12 h-12 bg-[#F6F6F4] border border-line rounded-[2px] flex items-center justify-center mb-6">
              <Award className="h-6 w-6 text-amber-dim" />
            </div>
            <h3 className="text-2xl font-heading font-bold text-ink mb-3 uppercase tracking-wide">Trayectoria Comprobada</h3>
            <p className="text-ash leading-relaxed font-sans">
              Más de 3000 clientes satisfechos respaldan nuestro trabajo. Cuidar de tu herramienta de trabajo es nuestra prioridad, confía en profesionales que realmente entienden de motores.
            </p>
          </div>
        </div>

        {/* Centered Image Carousel */}
        <div className="mt-14 flex justify-center">
          <div className="w-full max-w-2xl">
            <div className="relative aspect-[4/3] rounded-[2px] overflow-hidden border border-line shadow-md bg-charcoal">
              <Image
                src={images[currentImage] || "/placeholder.svg"}
                alt="Servicio profesional"
                fill
                className="object-cover"
              />

              {/* Mobile carousel controls */}
              <div className="lg:hidden absolute inset-0 flex items-center justify-between p-4">
                <Button variant="outline" size="icon" onClick={prevImage} className="bg-charcoal/80 hover:bg-charcoal text-white border-line">
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" onClick={nextImage} className="bg-charcoal/80 hover:bg-charcoal text-white border-line">
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Desktop indicators */}
            <div className="hidden lg:flex justify-center mt-4 space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-6 h-1.5 transition-colors rounded-[1px] ${
                    index === currentImage ? "bg-amber" : "bg-line"
                  }`}
                  aria-label={`Slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

