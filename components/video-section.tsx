import { Button } from "@/components/ui/button"

export default function VideoSection() {
  return (
    <section className="py-20 bg-[#24272B] border-b border-[#34373C] text-white relative">
      <div className="container mx-auto px-4 max-w-[1140px]">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs sm:text-sm font-heading font-bold text-amber tracking-widest uppercase block mb-3">
            TALLER EN OPERACIÓN
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-heading font-bold text-white uppercase tracking-tight mb-8">
            El mejor servicio para tu Motor en Loja
          </h2>

          <div className="relative aspect-video mb-8 rounded-[2px] overflow-hidden border border-[#3E4249] shadow-2xl bg-charcoal">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/6d-vdmPc7Ig?autoplay=1&mute=1&loop=1&playlist=6d-vdmPc7Ig&playsinline=1"
              title="Especialistas en Reparación de Motores Diesel - Mecánica Loja"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>

          <div className="px-2 w-full flex justify-center">
            <a href="https://wa.me/593983237491" target="_blank" rel="noopener noreferrer" className="inline-block w-full max-w-xs">
              <Button
                size="lg"
                className="w-full bg-amber hover:bg-[#d99700] text-charcoal px-6 py-4 text-base sm:text-lg font-heading font-bold rounded-[2px] transition-colors duration-200 uppercase tracking-wider shadow-sm"
              >
                <span className="inline-block w-full overflow-hidden text-ellipsis">¡Llamar para cotizar!</span>
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

