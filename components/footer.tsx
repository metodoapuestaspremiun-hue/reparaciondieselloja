import Image from "next/image"
import Link from "next/link"
import { Phone, MessageCircle, MapPin, Clock } from "lucide-react"

export default function Footer({ brandName = "Mecánica Loja" }: { brandName?: string } = {}) {
  return (
    <footer className="bg-charcoal text-[#9A9DA3] pt-14 pb-8 border-t border-[#2E3136] text-[13.5px] font-sans">
      <div className="container mx-auto px-4 lg:px-6 max-w-[1180px]">
        {/* Grilla principal de 3 columnas industriales */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-10 border-b border-[#2E3136]">
          
          {/* Columna 1: Taller & Especialidad */}
          <div className="md:col-span-5">
            <div className="flex items-center space-x-3 mb-4">
              <span className="w-2 h-2 rounded-full bg-amber inline-block" />
              <Image 
                src="/nuevas/mecanica_en_loja_logo.webp" 
                alt={brandName} 
                width={38} 
                height={38} 
                className="rounded-[2px] object-contain" 
              />
              <h3 className="font-heading font-bold text-2xl text-white tracking-wide uppercase">
                {brandName}
              </h3>
            </div>
            <p className="text-[#C7C9CD] leading-relaxed max-w-sm mb-4">
              Ubícanos en Juan José Peña y Mercadillo, Loja. Especialistas en reparación de motores diésel para vehículos pesados, camionetas y maquinaria industrial.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#8B8E93]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>Taller activo · Atención en toda la Región Sur</span>
            </div>
          </div>

          {/* Columna 2: Contacto Directo */}
          <div className="md:col-span-4">
            <h3 className="font-heading font-bold text-xl text-white tracking-wide uppercase mb-4">
              Contacto
            </h3>
            <div className="space-y-3 text-[#C7C9CD]">
              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-amber flex-shrink-0" />
                <a href="tel:+593983237491" className="hover:text-white transition-colors">
                  +593 98 323 7491
                </a>
              </div>
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-amber flex-shrink-0 mt-0.5" />
                <span>Juan José Peña y Mercadillo, Loja</span>
              </div>
              <div className="flex items-center space-x-2.5 text-xs text-[#9A9DA3]">
                <Clock className="w-4 h-4 text-[#6B7178] flex-shrink-0" />
                <span>Lunes a Sábado: 8:00 AM - 6:00 PM</span>
              </div>
            </div>

            {/* Acciones de Contacto */}
            <div className="flex flex-wrap gap-2.5 mt-5">
              <a
                href="https://wa.me/593983237491"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber hover:bg-[#d99700] text-charcoal font-heading font-bold px-4 py-2 rounded-[2px] flex items-center gap-1.5 transition-colors uppercase text-xs"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                WhatsApp
              </a>
              <a
                href="tel:+593983237491"
                className="border border-[#4A4E54] hover:border-amber text-white hover:text-amber font-heading font-bold px-4 py-2 rounded-[2px] flex items-center gap-1.5 transition-colors uppercase text-xs"
              >
                <Phone className="w-3.5 h-3.5" />
                Llamar Ahora
              </a>
            </div>
          </div>

          {/* Columna 3: Enlaces de Especialidad */}
          <div className="md:col-span-3">
            <h3 className="font-heading font-bold text-xl text-white tracking-wide uppercase mb-4">
              Servicios Especializados
            </h3>
            <ul className="space-y-2 text-[#C7C9CD]">
              <li>
                <Link href="/motores-diesel" className="hover:text-amber transition-colors">
                  Motores Diésel
                </Link>
              </li>
              <li>
                <Link href="/camionetas" className="hover:text-amber transition-colors">
                  Camionetas
                </Link>
              </li>
              <li>
                <Link href="/vehiculos-pesados" className="hover:text-amber transition-colors">
                  Vehículos Pesados
                </Link>
              </li>
              <li>
                <Link href="/agendamiento" className="hover:text-amber transition-colors">
                  Agendamiento
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Barra inferior de copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8B8E93]">
          <div>
            © {new Date().getFullYear()} {brandName} — Taller especializado en reparación de motores diésel.
          </div>
          <div>
            Diseñado por{" "}
            <a 
              href="https://cesarreyesjaramillo.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#C7C9CD] hover:text-amber transition-colors"
            >
              @cesarreyesjaramillo.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
