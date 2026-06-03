import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function DieselHeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image src="/images/motor_diesel.jpg" alt="Motores Diesel" fill className="object-cover opacity-40" priority />
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Expertos en Motores Diésel en Loja
        </h1>

        <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed text-gray-200">
          Somos los especialistas en motores diésel de Loja. Ofrecemos un servicio completo de diagnóstico, mantenimiento y reparación para que tu camioneta o vehículo de carga funcione con la máxima potencia y eficiencia.
        </p>

        <a href="https://wa.me/593992797349" target="_blank" rel="noopener noreferrer">
          <Button
            size="lg"
            className="bg-[#ec0018] hover:bg-[#c40014] text-white px-8 py-4 text-lg font-bold rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            Repara tu Motor Diésel
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
