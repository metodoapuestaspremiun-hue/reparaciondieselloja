"use client"

import { MessageCircle } from "lucide-react"

export default function WhatsAppFloat() {
  const whatsappNumber = "593992797349"
  const defaultMessage = "Hola, quiero información sobre los servicios de Mecánica Loja"

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`
    window.open(url, "_blank", "noopener,noreferrer")
  }

  return (
    <div className="fixed bottom-6 right-4 md:right-6 z-50 w-14 h-14 md:w-16 md:h-16">
      <button
        onClick={handleWhatsAppClick}
        className="w-full h-full bg-[#ec0018] hover:bg-[#c40014] text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="w-8 h-8 md:w-10 md:h-10" />
      </button>
    </div>
  )
}
