import { Phone, Mail, MapPin, Facebook, MessageCircle } from "lucide-react"
import AppointmentForm from "./appointment-form"

export default function ContactSection() {
  return (
    <section id="atencion-region-sur" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Atención en Toda la Región Sur</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ubicados en Juan José Peña y Mercadillo, Loja, atendemos a clientes de toda la región sur del Ecuador.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/593983237491" className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300">
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>
            <a href="tel:+593983237491" className="inline-flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300">
              <Phone className="w-5 h-5" />
              Llamar Ahora
            </a>
          </div>
          
          {/* Appointment Form Section */}
          <div className="mt-16 max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 p-8 md:p-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Solicita tu Cita Ahora</h3>
                <p className="text-gray-600 mb-6">Completa el formulario y nos pondremos en contacto contigo para confirmar tu cita.</p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="bg-red-100 p-2 rounded-full mr-4">
                      <Phone className="w-5 h-5 text-red-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Llámanos</h4>
                      <a href="tel:+593983237491" className="text-gray-600 hover:text-red-500">098 323 7491</a>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-red-100 p-2 rounded-full mr-4 flex-shrink-0">
                      <Mail className="w-5 h-5 text-red-500" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-semibold">Correo Electrónico</h4>
                      <a 
                        href="mailto:negocios@cesarreyesjaramillo.com" 
                        className="text-gray-600 hover:text-red-500 break-all text-sm sm:text-base"
                      >
                        negocios@cesarreyesjaramillo.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-red-100 p-2 rounded-full mr-4">
                      <MapPin className="w-5 h-5 text-red-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Ubicación</h4>
                      <p className="text-gray-600">Juan José Peña y Mercadillo, Loja</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 bg-gray-50 p-8 md:p-12">
                <AppointmentForm />
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information - Horizontal on desktop, vertical on mobile */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 lg:text-center">Información de Contacto</h3>

          <div className="space-y-8">
            {/* First row - 3 items */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
              <div className="flex items-start space-x-4 lg:flex-col lg:items-center lg:text-center lg:space-x-0 lg:space-y-3 w-full max-w-xs">
                <div className="bg-red-500 p-3 rounded-full lg:mx-auto">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Ubicación Estratégica</h4>
                  <p className="text-gray-600 text-sm mb-1">Juan José Peña y Mercadillo, Loja</p>
                  <a
                    href="https://maps.app.goo.gl/gSXzUQ1ANZbPvURg9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-500 hover:text-red-600 text-xs block mt-1"
                  >
                    Ver ruta en Google Maps
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4 lg:flex-col lg:items-center lg:text-center lg:space-x-0 lg:space-y-3 w-full max-w-xs">
                <div className="bg-red-500 p-3 rounded-full lg:mx-auto">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Atención Inmediata</h4>
                  <a href="tel:+593983237491" className="text-gray-600 hover:text-red-500 text-sm">
                    098 323 7491
                  </a>
                  <p className="text-gray-500 text-xs">Lunes a Sábado: 8:00 AM - 6:00 PM</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 lg:flex-col lg:items-center lg:text-center lg:space-x-0 lg:space-y-3 w-full max-w-xs">
                <div className="bg-red-500 p-3 rounded-full lg:mx-auto">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">WhatsApp</h4>
                  <a
                    href="https://wa.me/593983237491"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-red-500 text-sm"
                  >
                    098 323 7491
                  </a>
                </div>
              </div>
            </div>

            {/* Second row - 2 items centered */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center max-w-2xl mx-auto">
              <div className="flex items-start space-x-4 lg:flex-col lg:items-center lg:text-center lg:space-x-0 lg:space-y-3 w-full max-w-xs">
                <div className="bg-red-500 p-3 rounded-full lg:mx-auto">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Email</h4>
                  <a href="mailto:negocios@cesarreyesjaramillo.com" className="text-gray-600 hover:text-red-500 text-sm break-all">
                    negocios@cesarreyesjaramillo.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4 lg:flex-col lg:items-center lg:text-center lg:space-x-0 lg:space-y-3 w-full max-w-xs">
                <div className="bg-red-500 p-3 rounded-full lg:mx-auto">
                  <Facebook className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Facebook</h4>
                  <a
                    href="https://www.facebook.com/CesarReyes.Pymes"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-red-500 text-sm"
                  >
                    Síguenos en Facebook
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Google Maps */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Nuestra Ubicación</h3>
          <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3980.1245789123!2d-79.206275!3d-3.997235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM8KwNTknNTAuMCJTIDc5wrAxMicxNi4wIlc!5e0!3m2!1ses-419!2sec!4v1710000000000!5m2!1ses-419!2sec"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Mecánica Loja"
            ></iframe>
          </div>
          <div className="text-center mt-4">
            <a
              href="https://maps.app.goo.gl/gSXzUQ1ANZbPvURg9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-red-500 hover:text-red-600 font-medium"
            >
              <MapPin className="w-4 h-4 mr-2" />
              Abrir en Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
