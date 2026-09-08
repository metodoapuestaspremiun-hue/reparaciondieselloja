import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function PesadosHeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/pesados_hero_ia.webp"
          alt="Mecánica de Vehículos Pesados en Loja - Mecánica Loja"
          fill
          className="object-cover opacity-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-black/70 to-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Especialistas en Vehículos Pesados en Loja | Mecánica Loja
        </h1>

        <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed text-gray-200">
          Ofrecemos un servicio integral de reparación y mantenimiento de motores para camiones, buses y maquinaria. Confía en la experiencia que tu vehículo de trabajo necesita.
        </p>

        <a href="https://wa.me/593983237491?text=Hola,%20solicito%20cotización%20para%20vehículo%20pesado" target="_blank" rel="noopener noreferrer">
          <Button
            size="lg"
            className="bg-[#ec0018] hover:bg-[#c40014] text-white px-8 py-4 text-lg font-bold rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            Solicita tu Cotización
          </Button>
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  )
}
