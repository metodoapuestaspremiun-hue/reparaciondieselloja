"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
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
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
          Nuestros servicios para reparación de motor en Loja
        </h2>
        <p className="text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Sabemos que su vehículo liviano o pesado, su flota o maquinaria industrial representan el motor de su negocio, es por eso que en Mecánica Loja nuestro objetivo es reparar, dar mantenimiento y asegurar la máxima vida útil de su motor en la región.
        </p>

        <div className="flex flex-col items-center lg:flex-row lg:justify-center lg:flex-wrap gap-8 max-w-5xl mx-auto">
          {/* First Card */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300 w-full max-w-md">
            <div className="p-8">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Nuestro Compromiso</h3>
              <p className="text-gray-600 text-center">
                Nuestro compromiso es brindarte no solo una reparación, sino la tranquilidad de saber que tu inversión está en manos de expertos.
              </p>
            </div>
          </div>

          {/* Second Card */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300 w-full max-w-md">
            <div className="p-8">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Trayectoria Comprobada</h3>
              <p className="text-gray-600 text-center">
                Más de 3000 clientes satisfechos respaldan nuestro trabajo. Cuidar de tu herramienta de trabajo es nuestra prioridad, confía en profesionales que realmente entienden de motores.
              </p>
            </div>
          </div>
        </div>

        {/* Centered Image Carousel */}
        <div className="mt-12 lg:mt-16 flex justify-center">
          <div className="w-full max-w-2xl">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
              <Image
                src={images[currentImage] || "/placeholder.svg"}
                alt="Servicio profesional"
                fill
                className="object-cover"
              />

              {/* Mobile carousel controls */}
              <div className="lg:hidden absolute inset-0 flex items-center justify-between p-4">
                <Button variant="outline" size="icon" onClick={prevImage} className="bg-white/80 hover:bg-white">
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" onClick={nextImage} className="bg-white/80 hover:bg-white">
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
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentImage ? "bg-red-500" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
