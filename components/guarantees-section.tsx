import { Award, Shield, Clock } from "lucide-react"

export default function GuaranteesSection() {
  const guarantees = [
    {
      icon: Award,
      title: "Años de Experiencia en Loja",
      description:
        "Más de tres décadas de experiencia especializada en reparación de motores diésel y servicio a flotas. Nuestro taller está ubicado en Juan José Peña y Mercadillo, Loja.",
    },
    {
      icon: Shield,
      title: "Eje de Servicio para la Región Sur",
      description:
        "Aunque estamos en Loja, somos el destino de confianza para clientes de toda la Región Sur del Ecuador. Nos eligen por nuestra calidad experta en motores, sin importar de dónde nos visiten.",
    },
    {
      icon: Clock,
      title: "Garantía Total en Cada Motor",
      description:
        "Todos nuestros trabajos de reparación de motores diésel incluyen garantía por escrito. Confianza y respaldo técnico asegurado para cada vehículo que sale de nuestras instalaciones en Loja.",
    },
  ]

  return (
    <section className="py-20 bg-[#24272B] border-b border-[#34373C] text-white relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-[1140px] relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-xs sm:text-sm font-heading font-bold text-amber tracking-widest uppercase block mb-3">
            RESPALDO DE MARCA Y TRAYECTORIA
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-heading font-bold text-white uppercase tracking-tight mb-4 leading-tight">
            Garantía de Calidad en Toda la Región Sur
          </h2>
          <div className="w-12 h-[2px] bg-amber mx-auto mb-5" />
          <p className="text-base sm:text-lg text-[#C7C9CD] leading-relaxed font-sans">
            En Mecánica Loja, somos el taller referente para la reparación de motores diésel en Loja. Nuestro servicio va más allá del taller; es un compromiso de confianza y respaldo técnico. Garantizamos la calidad de nuestro trabajo para todos los clientes que nos visitan. Tu satisfacción es nuestra mejor garantía.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {guarantees.map((guarantee, index) => (
            <div
              key={index}
              className="p-8 bg-charcoal border border-[#3E4249] border-t-2 border-t-amber rounded-[2px] shadow-sm hover:border-amber transition-colors duration-200"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-[#2A2E33] border border-[#3E4249] rounded-[2px] mb-6">
                <guarantee.icon className="w-6 h-6 text-amber" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-white mb-3 uppercase tracking-wide">
                {guarantee.title}
              </h3>
              <p className="text-[#9A9DA3] text-sm leading-relaxed font-sans">
                {guarantee.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

