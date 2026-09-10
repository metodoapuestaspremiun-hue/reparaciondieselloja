import { Globe, ArrowRight, ShieldCheck } from "lucide-react"

export default function DomainSaleBadge() {
  return (
    <aside
      aria-label="Aviso de disponibilidad de dominio"
      className="mb-8 w-full max-w-2xl rounded-[4px] border-2 border-amber bg-[#24272B] p-5 shadow-2xl backdrop-blur-md transition-all hover:border-[#ffd05b]"
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        {/* Contenido Principal */}
        <div className="flex items-start sm:items-center gap-3.5">
          <div className="relative flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-[3px] bg-amber/20 text-amber border border-amber/60 shadow-inner">
            <Globe className="h-6 w-6" />
            <span className="absolute -top-1.5 -right-1.5 flex h-3.5 w-3.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber opacity-80" />
              <span className="relative inline-flex h-3.5 w-3.5 rounded-full bg-amber shadow-sm" />
            </span>
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-heading text-sm sm:text-base font-extrabold uppercase tracking-widest text-amber">
                ¡EN VENTA ESTE DOMINIO WEB!
              </span>
              <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-sans font-medium text-white/70 bg-charcoal px-2 py-0.5 rounded-[2px] border border-white/10">
                <ShieldCheck className="w-3 h-3 text-amber" /> Posicionamiento Top en Google
              </span>
            </div>
            <div className="mt-1 flex items-baseline gap-2">
              <p className="font-heading text-lg sm:text-2xl font-black text-white tracking-wide">
                reparaciondieselloja.com
              </p>
            </div>
          </div>
        </div>

        {/* Botón de Contacto Destacado */}
        <a
          href="https://wa.me/593963410409?text=Hola,%20estoy%20interesado%20en%20comprar%20el%20dominio%20reparaciondieselloja.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full md:w-auto items-center justify-center gap-2 rounded-[3px] bg-amber hover:bg-[#ffba1a] px-5 py-3 font-heading text-sm sm:text-base font-extrabold uppercase tracking-wider text-charcoal shadow-lg transition-all duration-150 transform hover:-translate-y-0.5 active:translate-y-0 text-center"
        >
          <span>COMPRAR DOMINIO (+593 96 341 0409)</span>
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </aside>
  )
}
