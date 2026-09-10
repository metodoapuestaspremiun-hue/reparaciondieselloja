import Image from "next/image"
import DomainSaleBadge from "@/components/domain-sale-badge"

export default function HeroSection() {
  return (
    <section className="relative bg-charcoal text-white overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24 border-b border-[#000]">
      {/* Patrón de cuadrícula técnica industrial */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40 z-0"
        style={{
          backgroundImage: `
            linear-gradient(180deg, rgba(26,28,31,0.65) 0%, rgba(26,28,31,0.95) 100%),
            repeating-linear-gradient(90deg, rgba(255,255,255,0.035) 0 1px, transparent 1px 64px),
            repeating-linear-gradient(0deg, rgba(255,255,255,0.035) 0 1px, transparent 1px 64px)
          `
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1180px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Columna Izquierda: Información técnica */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Aviso de Dominio en Venta (Centro del Hero, sin H1/H2/H3, cero afectación SEO) */}
            <DomainSaleBadge />

            {/* Eyebrow con línea ámbar de señalización */}
            <div className="flex items-center gap-2.5 mb-4 text-xs sm:text-sm font-semibold tracking-wider text-amber uppercase">
              <span className="w-8 h-[2px] bg-amber inline-block" />
              <span>REGIÓN SUR DEL ECUADOR — DESDE 1989</span>
            </div>

            {/* H1 exacto preservado para SEO */}
            <h1 className="text-4xl sm:text-5xl lg:text-[58px] font-heading font-extrabold text-white uppercase tracking-tight leading-[1.03] max-w-xl">
              REPARACIÓN DE MOTORES DIÉSEL EN LOJA
            </h1>

            {/* Descripción */}
            <p className="mt-5 text-base sm:text-lg text-[#C7C9CD] leading-relaxed max-w-xl">
              <span className="block sm:hidden">
                Más de 35 años de experiencia. Especialistas en motores a diésel.
              </span>
              <span className="hidden sm:block">
                Más de 35 años de experiencia. Especialistas en motores a diésel, vehículos pesados y gestión de flotas en la Región Sur del Ecuador.
              </span>
            </p>

            {/* CTAs con preservación de link original */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <a 
                href="#atencion-region-sur" 
                className="inline-flex items-center justify-center bg-amber hover:bg-[#d99700] text-charcoal font-heading font-bold text-base sm:text-lg px-7 py-3.5 rounded-[2px] transition-colors duration-200 uppercase tracking-wide text-center"
              >
                SOLICITAR DIAGNÓSTICO GRATIS
              </a>
              <a
                href="https://wa.me/593983237491?text=Hola,%20solicito%20diagnóstico%20para%20motor%20diésel"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border border-[#4A4E54] hover:border-amber text-white hover:text-amber font-heading font-semibold text-base sm:text-lg px-6 py-3.5 rounded-[2px] transition-colors duration-200 text-center"
              >
                Ver por WhatsApp
              </a>
            </div>

            {/* Fila de Estadísticas Industriales */}
            <div className="grid grid-cols-3 gap-4 sm:gap-8 mt-10 pt-6 border-t border-[#34373C]">
              <div>
                <b className="font-heading font-bold text-3xl sm:text-4xl text-amber block leading-none">
                  35+
                </b>
                <span className="text-xs sm:text-xs text-[#9A9DA3] mt-1.5 block leading-tight">
                  años de experiencia
                </span>
              </div>
              <div>
                <b className="font-heading font-bold text-3xl sm:text-4xl text-amber block leading-none">
                  3,000+
                </b>
                <span className="text-xs sm:text-xs text-[#9A9DA3] mt-1.5 block leading-tight">
                  clientes atendidos
                </span>
              </div>
              <div>
                <b className="font-heading font-bold text-3xl sm:text-4xl text-amber block leading-none">
                  100%
                </b>
                <span className="text-xs sm:text-xs text-[#9A9DA3] mt-1.5 block leading-tight">
                  garantía por escrito
                </span>
              </div>
            </div>

          </div>

          {/* Columna Derecha: Foto de taller con corte en bisel y borde ámbar */}
          <div className="lg:col-span-5 relative w-full">
            <div 
              className="relative h-[320px] sm:h-[400px] lg:h-[440px] w-full overflow-hidden border-l-[3px] border-amber bg-[#24272B]"
              style={{
                clipPath: "polygon(12% 0, 100% 0, 100% 100%, 0% 100%)"
              }}
            >
              {/* Imagen Desktop con alt exacto preservado */}
              <Image 
                src="/nuevas/mecanica_en_loja_hero.webp" 
                alt="Reparación de motores en Mecánica Loja" 
                fill 
                className="hidden sm:block object-cover opacity-80 filter brightness-95 contrast-105" 
                priority 
                sizes="(max-width: 1024px) 100vw, 500px"
              />
              {/* Imagen Mobile con alt exacto preservado */}
              <Image 
                src="/nuevas/mecanica_en_loja_hero_mobile.webp" 
                alt="Reparación de motores en Mecánica Loja" 
                fill 
                className="block sm:hidden object-cover opacity-80 filter brightness-95 contrast-105" 
                priority 
                sizes="100vw"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent opacity-80" />
              
              {/* Etiqueta técnica sobre la imagen */}
              <div className="absolute bottom-4 left-5 font-heading text-xs uppercase tracking-widest text-[#B9BCC1] bg-charcoal/80 px-2.5 py-1 border border-[#3A3D42]">
                MOTOR DIÉSEL · OVERHAUL · DIAGNÓSTICO
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
