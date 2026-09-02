import { Button } from "@/components/ui/button"

export default function VideoSection() {
  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">El mejor servicio para tu Motor en Loja</h2>

          <div className="relative aspect-video mb-8 rounded-lg overflow-hidden shadow-2xl bg-black">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="w-full h-full object-cover"
              title="Especialistas en Reparación de Motores Diesel - Mecánica Loja"
            >
              <source src="/images/video.mp4" type="video/mp4" />
              Tu navegador no soporta el elemento de video.
            </video>
          </div>

          <div className="px-2 w-full">
            <a href="https://wa.me/593992797349" target="_blank" rel="noopener noreferrer" className="inline-block w-full max-w-xs">
              <Button
                size="lg"
                className="w-full bg-[#ec0018] hover:bg-[#c40014] text-white px-4 py-3 sm:px-6 sm:py-4 text-base sm:text-lg font-bold rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 whitespace-nowrap overflow-hidden text-ellipsis"
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
