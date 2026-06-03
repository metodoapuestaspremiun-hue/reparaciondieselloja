import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <div className="w-full h-full relative">
          <Image 
            src="/images/hero.jpg" 
            alt="Reparación de motores" 
            fill 
            className="object-cover opacity-60" 
            priority 
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 w-full max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight px-2">
          REPARACIÓN DE MOTORES DIÉSEL EN LOJA
        </h1>

        <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed text-gray-200">
          <span className="block sm:hidden">Más de 35 años de experiencia. Especialistas en motores a diésel.</span>
          <span className="hidden sm:block">Más de 35 años de experiencia. Especialistas en motores a diésel, vehículos pesados y gestión de flotas en la Región Sur del Ecuador.</span>
        </p>

        <a href="#atencion-region-sur" className="w-full sm:w-auto">
          <Button
            size="lg"
            className="bg-[#ec0018] hover:bg-[#c40014] text-white px-4 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 whitespace-normal w-full sm:w-auto"
          >
            SOLICITAR DIAGNÓSTICO GRATIS
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
