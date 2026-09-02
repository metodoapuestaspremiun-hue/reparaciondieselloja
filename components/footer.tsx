import Image from "next/image"
import { Phone, MessageCircle, MapPin } from "lucide-react"

export default function Footer({ brandName = "Automotriz Chávez" }: { brandName?: string } = {}) {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          {/* Logo y nombre */}
          <div className="flex items-center space-x-3 mb-4">
            <Image 
              src="/images/logo.jpg" 
              alt={brandName} 
              width={50} 
              height={50} 
              className="rounded-lg" 
            />
            <h3 className="text-xl font-bold text-red-500">{brandName}</h3>
          </div>
          
          {/* Descripción */}
          <p className="text-gray-300 max-w-2xl mb-6">
            Ubicanos en Raleigh entre Nueva York y California, Loja. Especialistas en reparación de motores diésel para vehículos pesados, camionetas y maquinaria industrial.
          </p>
          
          {/* Botones de contacto */}
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <a
              href="https://wa.me/593992797349"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>
            <a
              href="tel:+593992797349"
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
            >
              <Phone className="w-5 h-5" />
              Llamar Ahora
            </a>
          </div>

          {/* Información de contacto */}
          <div className="space-y-3 text-gray-300">
            <div className="flex items-center justify-center gap-2">
              <Phone className="w-5 h-5 text-red-500" />
              <a href="tel:+593992797349" className="hover:text-white transition-colors">
                +593 99 279 7349
              </a>
            </div>
            <div className="flex items-center justify-center gap-2">
              <MapPin className="w-5 h-5 text-red-500 flex-shrink-0" />
              <span>Raleigh entre Nueva York y California, Loja</span>
            </div>
          </div>
          
          {/* Horario */}
          <div className="mt-4 text-gray-400">
            <p>Lunes a Sábado: 8:00 AM - 6:00 PM</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-500">
          <p>Diseñado por <a href="https://cesarreyesjaramillo.com/" target="_blank" rel="noopener noreferrer" className="text-red-400 hover:text-red-300">@cesarreyesjaramillo.com</a> {new Date().getFullYear()} {brandName} - Taller especializado en reparación de motores diesel. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
