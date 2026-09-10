"use client"

import { MessageCircle } from "lucide-react"

export default function WhatsAppFloat() {
  const whatsappNumber = "593983237491"
  const defaultMessage = "Hola, quiero información sobre los servicios de Mecánica Loja"

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`
    window.open(url, "_blank", "noopener,noreferrer")
  }

  return (
    <div className="fixed bottom-6 right-4 md:right-6 z-50 w-14 h-14 md:w-16 md:h-16">
      <button
        onClick={handleWhatsAppClick}
        className="w-full h-full bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full shadow-2xl hover:scale-105 transition-all duration-200 flex items-center justify-center border-2 border-white/20"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="w-8 h-8 md:w-9 md:h-9" />
      </button>
    </div>
  )
}
