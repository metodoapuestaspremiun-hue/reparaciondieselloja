import { Award, Shield, Clock } from "lucide-react"

export default function GuaranteesSection() {
  const guarantees = [
    {
      icon: Award,
      title: "Años de Experiencia en Loja",
      description:
        "Más de tres décadas de experiencia especializada en reparación de motores diésel y servicio a flotas. Nuestro taller está ubicado estratégicamente en el Parque Industrial de Loja.",
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
    <section className="py-16 bg-[#ec0018] relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Garantía de Calidad en Toda la Región Sur
          </h2>
          <p className="text-lg text-white max-w-3xl mx-auto">
            En Automotriz Chávez, somos el taller referente para la reparación de motores diésel en Loja. Nuestro servicio va más allá del taller; es un compromiso de confianza y respaldo técnico. Garantizamos la calidad de nuestro trabajo para todos los clientes que nos visitan. Tu satisfacción es nuestra mejor garantía.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {guarantees.map((guarantee, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white bg-opacity-20 backdrop-blur-sm rounded-lg hover:bg-opacity-30 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-4">
                <guarantee.icon className="w-8 h-8 text-[#ec0018]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{guarantee.title}</h3>
              <p className="text-red-100 leading-relaxed">{guarantee.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
