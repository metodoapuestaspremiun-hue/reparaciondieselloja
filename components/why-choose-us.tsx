import Image from "next/image"
import { CheckCircle2 } from "lucide-react"

export default function WhyChooseUs() {
  const reasons = [
    "Más de 35 años de experiencia en reparación de motores",
    "Tecnología de punta para diagnósticos precisos",
    "Especialistas en motores diésel y a gasolina",
    "Servicio personalizado y atención al detalle",
    "Garantía de calidad en todos nuestros trabajos",
  ]

  return (
    <section className="py-20 lg:py-24 bg-paper border-b border-line text-ink">
      <div className="container mx-auto px-4 max-w-[1140px]">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <span className="text-xs sm:text-sm font-heading font-bold text-amber-dim tracking-widest uppercase block mb-3">
              VENTAJA TÉCNICA Y EXPERIENCIA
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-heading font-bold text-ink mb-3 uppercase tracking-tight leading-tight">
              Tu Taller de Motores en Loja
            </h2>
            <p className="text-lg font-heading font-bold text-amber-dim tracking-wide uppercase mb-8">
              Expertos en Reparación y Mantenimiento de Motores
            </p>

            <div className="space-y-4 mb-8">
              {reasons.map((reason, index) => (
                <div key={index} className="flex items-start space-x-3.5 p-3 rounded-[2px] bg-white border border-line">
                  <CheckCircle2 className="w-5 h-5 text-amber-dim flex-shrink-0 mt-0.5" />
                  <p className="text-ink text-base font-sans font-medium">{reason}</p>
                </div>
              ))}
            </div>

            <div className="flex items-center space-x-4 pt-4 border-t border-line">
              <div className="border border-line p-1 bg-white rounded-[2px]">
                <Image
                  src="/nuevas/mecanica_en_loja_logo.webp"
                  alt="Mecánica Loja Logo"
                  width={64}
                  height={64}
                  className="rounded-[2px] object-contain"
                />
              </div>
              <div>
                <h3 className="text-2xl font-heading font-bold text-ink uppercase tracking-wide">
                  Mecánica Loja
                </h3>
                <p className="text-ash text-sm font-sans">Tu taller de confianza en Loja</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative rounded-[2px] overflow-hidden border border-line shadow-lg bg-charcoal">
              <Image
                src="/nuevas/mecanica_en_loja_hero.webp"
                alt="Taller profesional Mecánica Loja"
                width={600}
                height={400}
                className="rounded-[2px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 bg-charcoal/90 border border-[#3E4249] p-3 text-xs text-[#C7C9CD] font-heading uppercase tracking-wider">
                JUAN JOSÉ PEÑA Y MERCADILLO · LOJA, ECUADOR
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

