import Image from "next/image"
import DomainSaleBadge from "@/components/domain-sale-badge"

export default function DieselHeroSection() {
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
          {/* Columna Izquierda */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Aviso de Dominio en Venta */}
            <DomainSaleBadge />

            <div className="flex items-center gap-2.5 mb-4 text-xs sm:text-sm font-semibold tracking-wider text-amber uppercase">
              <span className="w-8 h-[2px] bg-amber inline-block" />
              <span>ALTA ESPECIALIZACIÓN EN MOTORES DIÉSEL</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-heading font-extrabold text-white uppercase tracking-tight leading-[1.03] max-w-xl">
              Expertos en Motores Diésel en Loja
            </h1>

            <p className="mt-5 text-base sm:text-lg text-[#C7C9CD] leading-relaxed max-w-xl font-sans">
              Somos los especialistas en motores diésel de Loja. Ofrecemos un servicio completo de diagnóstico, mantenimiento y reparación para que tu camioneta o vehículo de carga funcione con la máxima potencia y eficiencia.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <a
                href="https://wa.me/593983237491?text=Hola,%20solicito%20información%20sobre%20motores%20diésel"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-amber hover:bg-[#d99700] text-charcoal font-heading font-bold text-base sm:text-lg px-7 py-3.5 rounded-[2px] transition-colors duration-200 uppercase tracking-wide text-center shadow-sm"
              >
                Repara tu Motor Diésel
              </a>
              <a
                href="#atencion-region-sur"
                className="inline-flex items-center justify-center border border-[#4A4E54] hover:border-amber text-white hover:text-amber font-heading font-semibold text-base sm:text-lg px-6 py-3.5 rounded-[2px] transition-colors duration-200 text-center"
              >
                Solicitar Cita de Taller
              </a>
            </div>

            <div className="grid grid-cols-3 gap-4 sm:gap-8 mt-10 pt-6 border-t border-[#34373C]">
              <div>
                <b className="font-heading font-bold text-3xl sm:text-4xl text-amber block leading-none">Common Rail</b>
                <span className="text-xs text-[#9A9DA3] mt-1.5 block">Inyección electrónica</span>
              </div>
              <div>
                <b className="font-heading font-bold text-3xl sm:text-4xl text-amber block leading-none">Turbos</b>
                <span className="text-xs text-[#9A9DA3] mt-1.5 block">Presión y calibración</span>
              </div>
              <div>
                <b className="font-heading font-bold text-3xl sm:text-4xl text-amber block leading-none">100%</b>
                <span className="text-xs text-[#9A9DA3] mt-1.5 block">Garantía por escrito</span>
              </div>
            </div>
          </div>

          {/* Columna Derecha */}
          <div className="lg:col-span-5 relative w-full">
            <div 
              className="relative h-[320px] sm:h-[400px] lg:h-[440px] w-full overflow-hidden border-l-[3px] border-amber bg-[#24272B]"
              style={{
                clipPath: "polygon(12% 0, 100% 0, 100% 100%, 0% 100%)"
              }}
            >
              <Image 
                src="/images/diesel_hero_ia.webp" 
                alt="Especialistas en Motores Diésel en Loja - Mecánica Loja" 
                fill 
                className="object-cover opacity-80 filter brightness-95 contrast-105" 
                priority 
                sizes="(max-width: 1024px) 100vw, 500px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 left-5 font-heading text-xs uppercase tracking-widest text-[#B9BCC1] bg-charcoal/80 px-2.5 py-1 border border-[#3A3D42]">
                BANCO DE PRUEBAS · INYECCIÓN · OVERHAUL
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
