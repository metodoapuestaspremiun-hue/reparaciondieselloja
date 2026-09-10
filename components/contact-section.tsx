import { Phone, Mail, MapPin, Facebook, MessageCircle } from "lucide-react"
import AppointmentForm from "./appointment-form"

export default function ContactSection() {
  return (
    <section id="atencion-region-sur" className="py-20 lg:py-24 bg-paper border-b border-line text-ink">
      <div className="container mx-auto px-4 max-w-[1140px]">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-xs sm:text-sm font-heading font-bold text-amber-dim tracking-widest uppercase block mb-3">
            UBICACIÓN & CONTACTO DIRECTO
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-heading font-bold text-ink uppercase tracking-tight mb-4 leading-tight">
            Atención en Toda la Región Sur
          </h2>
          <div className="w-12 h-[2px] bg-amber mx-auto mb-5" />
          <p className="text-base sm:text-lg text-ash font-sans max-w-3xl mx-auto leading-relaxed">
            Ubicados en Juan José Peña y Mercadillo, Loja, atendemos a clientes de toda la región sur del Ecuador.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/593983237491" 
              className="inline-flex items-center justify-center gap-2 bg-charcoal hover:bg-amber hover:text-charcoal text-white font-heading font-bold text-base px-7 py-3.5 rounded-[2px] transition-colors uppercase tracking-wider"
            >
              <MessageCircle className="w-5 h-5 text-amber" />
              WhatsApp
            </a>
            <a 
              href="tel:+593983237491" 
              className="inline-flex items-center justify-center gap-2 bg-amber hover:bg-[#d99700] text-charcoal font-heading font-bold text-base px-7 py-3.5 rounded-[2px] transition-colors uppercase tracking-wider"
            >
              <Phone className="w-5 h-5" />
              Llamar Ahora
            </a>
          </div>
          
          {/* Appointment Form Section */}
          <div className="mt-16 max-w-4xl mx-auto bg-white rounded-[2px] border border-line shadow-md overflow-hidden text-left">
            <div className="md:flex">
              <div className="md:w-1/2 p-8 md:p-12 border-b md:border-b-0 md:border-r border-line bg-[#FAFAF8]">
                <h3 className="text-2xl font-heading font-bold text-ink uppercase tracking-wide mb-4">Solicita tu Cita Ahora</h3>
                <p className="text-ash text-sm sm:text-base font-sans mb-8 leading-relaxed">Completa el formulario y nos pondremos en contacto contigo para confirmar tu cita.</p>
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="bg-[#F2F2EE] border border-line p-2.5 rounded-[2px] mr-4 flex-shrink-0">
                      <Phone className="w-5 h-5 text-amber-dim" />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-ink uppercase text-sm">Llámanos</h4>
                      <a href="tel:+593983237491" className="text-ash hover:text-amber-dim font-sans text-sm">098 323 7491</a>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-[#F2F2EE] border border-line p-2.5 rounded-[2px] mr-4 flex-shrink-0">
                      <Mail className="w-5 h-5 text-amber-dim" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-heading font-bold text-ink uppercase text-sm">Correo Electrónico</h4>
                      <a 
                        href="mailto:negocios@cesarreyesjaramillo.com" 
                        className="text-ash hover:text-amber-dim break-all font-sans text-sm"
                      >
                        negocios@cesarreyesjaramillo.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-[#F2F2EE] border border-line p-2.5 rounded-[2px] mr-4 flex-shrink-0">
                      <MapPin className="w-5 h-5 text-amber-dim" />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-ink uppercase text-sm">Ubicación</h4>
                      <p className="text-ash font-sans text-sm">Juan José Peña y Mercadillo, Loja</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 bg-white p-8 md:p-12">
                <AppointmentForm />
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information - Horizontal on desktop, vertical on mobile */}
        <div className="max-w-5xl mx-auto pt-8">
          <h3 className="text-2xl sm:text-3xl font-heading font-bold text-ink uppercase tracking-wide mb-10 text-center">
            Información de Contacto
          </h3>

          <div className="space-y-8">
            {/* First row - 3 items */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
              <div className="flex items-start space-x-4 lg:flex-col lg:items-center lg:text-center lg:space-x-0 lg:space-y-3 w-full max-w-xs p-6 bg-white border border-line rounded-[2px] shadow-sm">
                <div className="bg-[#F2F2EE] border border-line p-3 rounded-[2px] lg:mx-auto">
                  <MapPin className="w-6 h-6 text-amber-dim" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-ink uppercase text-base">Ubicación Estratégica</h4>
                  <p className="text-ash text-sm mb-1 font-sans">Juan José Peña y Mercadillo, Loja</p>
                  <a
                    href="https://maps.app.goo.gl/gSXzUQ1ANZbPvURg9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-dim hover:underline text-xs font-semibold block mt-1 uppercase tracking-wide font-heading"
                  >
                    Ver ruta en Google Maps
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4 lg:flex-col lg:items-center lg:text-center lg:space-x-0 lg:space-y-3 w-full max-w-xs p-6 bg-white border border-line rounded-[2px] shadow-sm">
                <div className="bg-[#F2F2EE] border border-line p-3 rounded-[2px] lg:mx-auto">
                  <Phone className="w-6 h-6 text-amber-dim" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-ink uppercase text-base">Atención Inmediata</h4>
                  <a href="tel:+593983237491" className="text-ash hover:text-amber-dim text-sm font-sans block">
                    098 323 7491
                  </a>
                  <p className="text-ash text-xs mt-1 font-sans">Lunes a Sábado: 8:00 AM - 6:00 PM</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 lg:flex-col lg:items-center lg:text-center lg:space-x-0 lg:space-y-3 w-full max-w-xs p-6 bg-white border border-line rounded-[2px] shadow-sm">
                <div className="bg-[#F2F2EE] border border-line p-3 rounded-[2px] lg:mx-auto">
                  <MessageCircle className="w-6 h-6 text-amber-dim" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-ink uppercase text-base">WhatsApp</h4>
                  <a
                    href="https://wa.me/593983237491"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ash hover:text-amber-dim text-sm font-sans block"
                  >
                    +593 98 323 7491
                  </a>
                  <p className="text-ash text-xs mt-1 font-sans">Respuesta inmediata</p>
                </div>
              </div>
            </div>

            {/* Second row - 2 items centered */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto justify-items-center">
              <div className="flex items-start space-x-4 lg:flex-col lg:items-center lg:text-center lg:space-x-0 lg:space-y-3 w-full max-w-xs p-6 bg-white border border-line rounded-[2px] shadow-sm">
                <div className="bg-[#F2F2EE] border border-line p-3 rounded-[2px] lg:mx-auto">
                  <Mail className="w-6 h-6 text-amber-dim" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-ink uppercase text-base">Correo Electrónico</h4>
                  <a
                    href="mailto:negocios@cesarreyesjaramillo.com"
                    className="text-ash hover:text-amber-dim text-sm break-all font-sans block"
                  >
                    negocios@cesarreyesjaramillo.com
                  </a>
                  <p className="text-ash text-xs mt-1 font-sans">Cotizaciones formales</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 lg:flex-col lg:items-center lg:text-center lg:space-x-0 lg:space-y-3 w-full max-w-xs p-6 bg-white border border-line rounded-[2px] shadow-sm">
                <div className="bg-[#F2F2EE] border border-line p-3 rounded-[2px] lg:mx-auto">
                  <Facebook className="w-6 h-6 text-amber-dim" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-ink uppercase text-base">Redes Sociales</h4>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ash hover:text-amber-dim text-sm font-sans block"
                  >
                    Mecánica Loja
                  </a>
                  <p className="text-ash text-xs mt-1 font-sans">Síguenos en Facebook</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Google Maps */}
        <div className="mt-16 pt-10 border-t border-line">
          <h3 className="text-2xl sm:text-3xl font-heading font-bold text-ink uppercase tracking-wide mb-6 text-center">
            Nuestra Ubicación
          </h3>
          <div className="relative w-full h-96 rounded-[2px] overflow-hidden border border-line shadow-md bg-charcoal">
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
          <div className="text-center mt-5">
            <a
              href="https://maps.app.goo.gl/gSXzUQ1ANZbPvURg9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-amber-dim hover:text-ink font-heading font-bold uppercase tracking-wider text-sm"
            >
              <MapPin className="w-4 h-4 mr-2 text-amber-dim" />
              Abrir en Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
