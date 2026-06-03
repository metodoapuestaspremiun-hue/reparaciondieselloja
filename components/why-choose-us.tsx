import Image from "next/image"
import { CheckCircle } from "lucide-react"

export default function WhyChooseUs() {
  const reasons = [
    "Más de 35 años de experiencia en reparación de motores",
    "Tecnología de punta para diagnósticos precisos",
    "Especialistas en motores diésel y a gasolina",
    "Servicio personalizado y atención al detalle",
    "Garantía de calidad en todos nuestros trabajos",
  ]

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Tu Taller de Motores en Loja</h2>
            <p className="text-xl text-red-600 font-semibold mb-8">Expertos en Reparación y Mantenimiento de Motores</p>

            <div className="space-y-4 mb-8">
              {reasons.map((reason, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700 text-lg">{reason}</p>
                </div>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <Image
                src="/images/logo.jpg"
                alt="Automotriz Chávez Logo"
                width={80}
                height={80}
                className="rounded-lg"
              />
              <div>
                <h3 className="text-xl font-bold text-red-500">Automotriz Chávez</h3>
                <p className="text-gray-600">Tu taller de confianza en Loja</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <Image
              src="/images/garantia.jpg"
              alt="Taller profesional"
              width={600}
              height={400}
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
