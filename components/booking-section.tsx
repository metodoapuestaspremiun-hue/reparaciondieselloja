"use client"

import { useState } from "react"
import { 
  Calendar as CalendarIcon, 
  Clock, 
  CheckCircle2, 
  Car, 
  Truck, 
  Bot, 
  Send, 
  Sparkles, 
  PhoneCall, 
  MapPin, 
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  AlertCircle
} from "lucide-react"
import { Button } from "@/components/ui/button"

interface BookingForm {
  name: string
  phone: string
  vehicleType: string
  serviceType: string
  preferredDate: string
  preferredTime: string
  notes: string
}

interface ChatMessage {
  sender: "bot" | "user"
  text: string
  time: string
}

export default function BookingSection() {
  const today = new Date()
  const [currentMonth, setCurrentMonth] = useState(today.getMonth())
  const [currentYear, setCurrentYear] = useState(today.getFullYear())
  const [selectedDateStr, setSelectedDateStr] = useState("")

  // Form State
  const [formData, setFormData] = useState<BookingForm>({
    name: "",
    phone: "",
    vehicleType: "diesel",
    serviceType: "diagnostico",
    preferredDate: "",
    preferredTime: "09:30 AM",
    notes: ""
  })
  const [isBooked, setIsBooked] = useState(false)

  // Bot State
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      sender: "bot",
      text: "¡Hola! 👋 Soy MecaniBot, tu asistente de Mecánica Loja. Selecciona tu día en el calendario de turnos o cuéntame qué falla presenta tu motor para orientarte.",
      time: "Ahora"
    }
  ])
  const [inputBot, setInputBot] = useState("")

  // Calendar logic
  const monthNames = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
  ]

  const daysOfWeek = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"]

  // Días ocupados simulados de muestra para realismo de agendamiento
  const isOccupiedDay = (day: number, month: number, year: number) => {
    // Los domingos cerrado
    const d = new Date(year, month, day)
    if (d.getDay() === 0) return true
    // Días de muestra ocupados: por ejemplo el 12, 18, 25
    return day === 12 || day === 18 || day === 25
  }

  const isPastDay = (day: number, month: number, year: number) => {
    const d = new Date(year, month, day, 23, 59, 59)
    return d < today
  }

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate()
  const firstDayIndex = new Date(currentYear, currentMonth, 1).getDay()

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11)
      setCurrentYear(prev => prev - 1)
    } else {
      setCurrentMonth(prev => prev - 1)
    }
  }

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0)
      setCurrentYear(prev => prev + 1)
    } else {
      setCurrentMonth(prev => prev + 1)
    }
  }

  const handleSelectDay = (day: number) => {
    if (isPastDay(day, currentMonth, currentYear)) return
    if (isOccupiedDay(day, currentMonth, currentYear)) return

    const monthPadded = String(currentMonth + 1).padStart(2, "0")
    const dayPadded = String(day).padStart(2, "0")
    const dateFormatted = `${currentYear}-${monthPadded}-${dayPadded}`

    setSelectedDateStr(dateFormatted)
    setFormData(prev => ({ ...prev, preferredDate: dateFormatted }))
  }

  const vehicleOptions = [
    { id: "diesel", label: "Motor Diésel General", icon: Truck },
    { id: "camioneta", label: "Camioneta 4x4 / Hilux / D-Max", icon: Car },
    { id: "pesado", label: "Camión / Bus / Flotas", icon: Truck },
    { id: "liviano", label: "Automóvil / SUV Gasolina", icon: Car },
  ]

  const serviceOptions = [
    { id: "diagnostico", label: "Diagnóstico Computarizado Completo" },
    { id: "mantenimiento", label: "Mantenimiento Preventivo & Filtros" },
    { id: "reparacion_motor", label: "Reparación / Overhaul de Motor" },
    { id: "inyeccion", label: "Calibración de Inyección / Common Rail" },
    { id: "frenos_suspension", label: "Revisión Mecánica Integral" }
  ]

  const timeSlots = [
    { time: "08:30 AM", occupied: false },
    { time: "09:30 AM", occupied: false },
    { time: "10:30 AM", occupied: true },
    { time: "11:30 AM", occupied: false },
    { time: "02:00 PM", occupied: false },
    { time: "03:00 PM", occupied: true },
    { time: "04:00 PM", occupied: false },
    { time: "05:00 PM", occupied: false },
  ]

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.preferredDate) {
      alert("Por favor selecciona un día disponible en el calendario.")
      return
    }
    setIsBooked(true)

    const vehicleLabel = vehicleOptions.find(v => v.id === formData.vehicleType)?.label || formData.vehicleType
    const serviceLabel = serviceOptions.find(s => s.id === formData.serviceType)?.label || formData.serviceType
    const textWp = `¡Hola Mecánica Loja! Deseo agendar una cita.%0A%0A👤 *Nombre:* ${encodeURIComponent(formData.name)}%0A📱 *Teléfono:* ${encodeURIComponent(formData.phone)}%0A🚗 *Vehículo:* ${encodeURIComponent(vehicleLabel)}%0A🛠️ *Servicio:* ${encodeURIComponent(serviceLabel)}%0A📅 *Fecha:* ${encodeURIComponent(formData.preferredDate)}%0A⏰ *Hora:* ${encodeURIComponent(formData.preferredTime)}%0A📝 *Observaciones:* ${encodeURIComponent(formData.notes || "Ninguna")}`
    
    window.open(`https://wa.me/593983237491?text=${textWp}`, "_blank")
  }

  const handleBotQuickPrompt = (promptText: string) => {
    const userMsg: ChatMessage = { sender: "user", text: promptText, time: "Ahora" }
    setMessages(prev => [...prev, userMsg])
    processBotResponse(promptText)
  }

  const handleBotSend = (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputBot.trim()) return
    const text = inputBot
    setInputBot("")
    const userMsg: ChatMessage = { sender: "user", text, time: "Ahora" }
    setMessages(prev => [...prev, userMsg])
    processBotResponse(text)
  }

  const processBotResponse = (prompt: string) => {
    const lower = prompt.toLowerCase()
    let botReply = ""

    if (lower.includes("precio") || lower.includes("costo") || lower.includes("cuanto") || lower.includes("cuánto")) {
      botReply = "Los diagnósticos computarizados parten desde $80 en autos y $120 en camionetas/diésel. Ofrecemos presupuestos por fases para reparaciones mayores. ¿Deseas reservar tu cupo en el calendario?"
    } else if (lower.includes("humo") || lower.includes("falla") || lower.includes("fuerza") || lower.includes("potencia")) {
      botReply = "El humo negro o pérdida de potencia suele originarse en inyectores obstruidos, turbo con fuga de presión o sensor MAF sucio. Contamos con escáner especializado para Loja."
    } else if (lower.includes("horario") || lower.includes("abierto") || lower.includes("donde") || lower.includes("ubicacion")) {
      botReply = "Estamos ubicados en Juan José Peña y Mercadillo, Loja. Atendemos de Lunes a Sábado de 8:00 AM a 6:00 PM. ¡Los domingos el taller permanece cerrado!"
    } else {
      botReply = "Excelente consulta. En Mecánica Loja contamos con más de 35 años de experiencia técnica. Puedes elegir fecha libre en el calendario verde de la izquierda para asegurar tu turno."
    }

    setTimeout(() => {
      setMessages(prev => [...prev, {
        sender: "bot",
        text: botReply,
        time: "Ahora"
      }])
    }, 500)
  }

  return (
    <section id="agendamiento" className="py-20 lg:py-24 bg-charcoal border-b border-[#34373C] text-white relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 relative z-10 max-w-[1140px]">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[2px] bg-[#24272B] border border-amber/30 text-amber text-xs font-heading font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Sistema de Turnos & Asesoría Virtual
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-heading font-bold text-white tracking-tight mb-4 uppercase leading-tight">
            Agendamiento de Citas en Loja
          </h2>
          <div className="w-12 h-[2px] bg-amber mx-auto mb-5" />
          <p className="text-[#C7C9CD] text-base md:text-lg font-sans leading-relaxed">
            Revisa la disponibilidad en tiempo real en nuestro calendario. Los días en verde tienen cupos libres, los rojos están ocupados o cerrados.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          {/* Panel Izquierdo: Formulario con Calendario Real */}
          <div className="lg:col-span-7 bg-[#24272B] border border-[#3E4249] rounded-[2px] p-6 sm:p-8 shadow-xl">
            <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#34373C]">
              <div>
                <h3 className="text-xl font-heading font-bold text-white uppercase tracking-wide flex items-center gap-2">
                  <CalendarIcon className="w-5 h-5 text-amber" />
                  Calendario de Turnos en Vivo
                </h3>
                <p className="text-xs text-[#9A9DA3] mt-1 font-sans">Selecciona tu día libre y horario</p>
              </div>
              <div className="flex items-center gap-3 text-xs font-sans">
                <span className="flex items-center gap-1.5 text-gray-300">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" /> Libre
                </span>
                <span className="flex items-center gap-1.5 text-gray-400">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" /> Ocupado
                </span>
              </div>
            </div>

            {isBooked ? (
              <div className="text-center py-12 px-4 space-y-4">
                <CheckCircle2 className="w-16 h-16 text-emerald-400 mx-auto" />
                <h4 className="text-2xl font-heading font-bold text-white uppercase">¡Turno Pre-Agendado con Éxito!</h4>
                <p className="text-gray-300 text-sm max-w-md mx-auto font-sans">
                  Tu solicitud para el día <span className="text-amber font-bold">{formData.preferredDate}</span> a las <span className="text-amber font-bold">{formData.preferredTime}</span> fue generada.
                </p>
                <p className="text-xs text-[#9A9DA3] font-sans">
                  Se ha generado el enlace para que lo confirmes con un clic por WhatsApp.
                </p>
                <Button 
                  onClick={() => setIsBooked(false)}
                  variant="outline"
                  className="mt-4 border-gray-700 text-gray-200 hover:bg-gray-800"
                >
                  Agendar otro turno
                </Button>
              </div>
            ) : (
              <form onSubmit={handleBookingSubmit} className="space-y-6">
                {/* CALENDARIO INTERACTIVO */}
                <div className="bg-gray-950/70 border border-gray-800 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-bold text-white uppercase tracking-wider">
                      {monthNames[currentMonth]} {currentYear}
                    </span>
                    <div className="flex items-center gap-1">
                      <button
                        type="button"
                        onClick={handlePrevMonth}
                        className="p-1.5 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white transition-colors"
                        aria-label="Mes anterior"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <button
                        type="button"
                        onClick={handleNextMonth}
                        className="p-1.5 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white transition-colors"
                        aria-label="Mes siguiente"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Cabecera días */}
                  <div className="grid grid-cols-7 gap-1 text-center mb-2 text-xs font-semibold text-gray-400">
                    {daysOfWeek.map((d, i) => (
                      <div key={i} className={i === 0 ? "text-red-400" : ""}>{d}</div>
                    ))}
                  </div>

                  {/* Cuadrícula de Días */}
                  <div className="grid grid-cols-7 gap-1 text-center">
                    {Array.from({ length: firstDayIndex }).map((_, idx) => (
                      <div key={`empty-${idx}`} className="h-9" />
                    ))}
                    {Array.from({ length: daysInMonth }).map((_, idx) => {
                      const day = idx + 1
                      const past = isPastDay(day, currentMonth, currentYear)
                      const occupied = isOccupiedDay(day, currentMonth, currentYear)
                      
                      const monthPadded = String(currentMonth + 1).padStart(2, "0")
                      const dayPadded = String(day).padStart(2, "0")
                      const dateString = `${currentYear}-${monthPadded}-${dayPadded}`
                      const isSelected = selectedDateStr === dateString

                      let btnStyle = "bg-gray-900/60 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500 hover:text-white"
                      if (past) {
                        btnStyle = "bg-gray-900/30 text-gray-600 border border-transparent cursor-not-allowed"
                      } else if (occupied) {
                        btnStyle = "bg-red-950/30 text-red-400 border border-red-900/40 cursor-not-allowed opacity-60"
                      }
                      if (isSelected) {
                        btnStyle = "bg-red-600 text-white border-red-500 shadow-lg shadow-red-600/40 font-bold scale-105"
                      }

                      return (
                        <button
                          key={day}
                          type="button"
                          disabled={past || occupied}
                          onClick={() => handleSelectDay(day)}
                          className={`h-9 rounded-lg text-xs font-medium transition-all duration-150 flex flex-col items-center justify-center relative ${btnStyle}`}
                        >
                          <span>{day}</span>
                          {!past && !occupied && !isSelected && (
                            <span className="w-1 h-1 rounded-full bg-emerald-400 mt-0.5" />
                          )}
                          {occupied && !past && (
                            <span className="text-[9px] leading-none text-red-400">Ocup</span>
                          )}
                        </button>
                      )
                    })}
                  </div>

                  {/* Feedback fecha elegida */}
                  <div className="mt-3 pt-3 border-t border-gray-800/80 flex items-center justify-between text-xs">
                    <span className="text-gray-400">Fecha seleccionada:</span>
                    <span className="font-bold text-red-400">
                      {selectedDateStr ? selectedDateStr : "Haz clic en un día libre (verde)"}
                    </span>
                  </div>
                </div>

                {/* 1. Selección de Horarios */}
                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-2 flex items-center gap-1.5 font-heading">
                    <Clock className="w-3.5 h-3.5 text-amber" />
                    Horario de Atención
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {timeSlots.map((slot, i) => {
                      const selected = formData.preferredTime === slot.time
                      return (
                        <button
                          key={i}
                          type="button"
                          disabled={slot.occupied}
                          onClick={() => setFormData(p => ({ ...p, preferredTime: slot.time }))}
                          className={`py-2 px-2.5 rounded-[2px] border text-xs font-heading font-semibold transition-all ${
                            slot.occupied
                              ? "bg-charcoal/40 border-[#2E3136] text-gray-600 cursor-not-allowed"
                              : selected
                              ? "bg-amber border-amber text-charcoal shadow-sm"
                              : "bg-[#1E2024] border-[#3E4249] text-gray-200 hover:bg-[#2A2E33]"
                          }`}
                        >
                          {slot.time}
                          {slot.occupied && <span className="block text-[9px] text-gray-500 font-sans">Lleno</span>}
                        </button>
                      )
                    })}
                  </div>
                </div>

                {/* 2. Tipo de Vehículo */}
                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-2 font-heading">
                    Tipo de Vehículo
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {vehicleOptions.map((opt) => {
                      const Icon = opt.icon
                      const selected = formData.vehicleType === opt.id
                      return (
                        <button
                          key={opt.id}
                          type="button"
                          onClick={() => setFormData(p => ({ ...p, vehicleType: opt.id }))}
                          className={`p-2.5 rounded-[2px] border text-left flex flex-col items-center justify-center gap-1.5 transition-all ${
                            selected 
                              ? "bg-amber/10 border-amber text-white"
                              : "bg-[#1E2024] border-[#3E4249] text-gray-300 hover:bg-[#2A2E33]"
                          }`}
                        >
                          <Icon className={`w-4 h-4 ${selected ? "text-amber" : "text-gray-400"}`} />
                          <span className="text-[11px] font-heading font-semibold text-center leading-tight">{opt.label}</span>
                        </button>
                      )
                    })}
                  </div>
                </div>

                {/* 3. Servicio Requerido */}
                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-2 font-heading">
                    Servicio Requerido
                  </label>
                  <select
                    value={formData.serviceType}
                    onChange={(e) => setFormData(p => ({ ...p, serviceType: e.target.value }))}
                    className="w-full bg-[#1E2024] border border-[#3E4249] rounded-[2px] px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber font-sans"
                  >
                    {serviceOptions.map(serv => (
                      <option key={serv.id} value={serv.id} className="bg-charcoal text-white">
                        {serv.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* 4. Datos de Contacto */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-2 font-heading">
                      Nombre Completo
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ej: Carlos Silva"
                      value={formData.name}
                      onChange={(e) => setFormData(p => ({ ...p, name: e.target.value }))}
                      className="w-full bg-[#1E2024] border border-[#3E4249] rounded-[2px] px-4 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-amber font-sans"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-2 font-heading">
                      WhatsApp de Contacto
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="Ej: 099 123 4567"
                      value={formData.phone}
                      onChange={(e) => setFormData(p => ({ ...p, phone: e.target.value }))}
                      className="w-full bg-[#1E2024] border border-[#3E4249] rounded-[2px] px-4 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-amber font-sans"
                    />
                  </div>
                </div>

                {/* Botón de Enviar */}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-amber hover:bg-[#d99700] text-charcoal font-heading font-bold py-3.5 rounded-[2px] transition-colors uppercase tracking-wider text-base"
                >
                  Confirmar Turno en Calendario
                </Button>

                <div className="flex items-center justify-center gap-6 pt-1 text-xs text-gray-400 font-sans">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    Sin costo anticipado
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4 text-amber" />
                    Juan José Peña y Mercadillo, Loja
                  </span>
                </div>
              </form>
            )}
          </div>

          {/* Panel Derecho: Asistente Bot Interactivo */}
          <div className="lg:col-span-5 flex flex-col h-[640px] bg-[#24272B] border border-[#3E4249] rounded-[2px] overflow-hidden shadow-xl">
            <div className="bg-charcoal p-4 border-b border-[#3E4249] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-[2px] bg-[#2A2E33] border border-amber flex items-center justify-center text-amber">
                    <Bot className="w-6 h-6" />
                  </div>
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 border-2 border-charcoal rounded-full" />
                </div>
                <div>
                  <h4 className="text-sm font-heading font-bold text-white uppercase tracking-wide flex items-center gap-1.5">
                    MecaniBot Loja
                    <span className="text-[10px] uppercase tracking-wider bg-amber/20 text-amber px-1.5 py-0.5 rounded-[1px] font-bold">
                      Asistente IA
                    </span>
                  </h4>
                  <p className="text-xs text-[#9A9DA3] font-sans">Pregúntame sobre fallas o costos</p>
                </div>
              </div>
              <a 
                href="https://wa.me/593983237491?text=Hola,%20solicito%20atención%20con%20un%20mecánico%20en%20vivo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-heading font-semibold text-gray-300 hover:text-white bg-charcoal hover:bg-[#3E4249] px-2.5 py-1.5 rounded-[2px] border border-[#3E4249] transition-colors flex items-center gap-1 uppercase"
              >
                <PhoneCall className="w-3.5 h-3.5 text-amber" />
                Asesor
              </a>
            </div>

            <div className="flex-1 p-4 overflow-y-auto space-y-3.5 bg-charcoal/70">
              {messages.map((msg, idx) => (
                <div 
                  key={idx}
                  className={`flex gap-2.5 ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  {msg.sender === "bot" && (
                    <div className="w-7 h-7 rounded-[2px] bg-[#2A2E33] border border-amber/40 flex items-center justify-center flex-shrink-0 text-amber mt-1">
                      <Bot className="w-4 h-4" />
                    </div>
                  )}
                  <div 
                    className={`max-w-[82%] rounded-[2px] px-4 py-2.5 text-xs sm:text-sm leading-relaxed ${
                      msg.sender === "user"
                        ? "bg-amber text-charcoal font-medium font-sans"
                        : "bg-[#2A2E33] text-gray-200 border border-[#3E4249] font-sans"
                    }`}
                  >
                    <p>{msg.text}</p>
                    <span className="block text-[10px] text-gray-400 mt-1 text-right">{msg.time}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-3 bg-charcoal border-t border-[#3E4249] flex gap-1.5 overflow-x-auto text-[11px] scrollbar-none font-sans">
              <button 
                type="button"
                onClick={() => handleBotQuickPrompt("¿Cuánto cuesta un diagnóstico computarizado?")}
                className="whitespace-nowrap px-2.5 py-1 rounded-[2px] bg-[#24272B] hover:bg-[#34373C] text-gray-300 hover:text-white border border-[#3E4249] transition-colors"
              >
                💰 Costos de escáner
              </button>
              <button 
                type="button"
                onClick={() => handleBotQuickPrompt("Mi camioneta pierde fuerza en subidas y bota humo")}
                className="whitespace-nowrap px-2.5 py-1 rounded-[2px] bg-[#24272B] hover:bg-[#34373C] text-gray-300 hover:text-white border border-[#3E4249] transition-colors"
              >
                💨 Pérdida de fuerza
              </button>
              <button 
                type="button"
                onClick={() => handleBotQuickPrompt("¿En qué parte de Loja están ubicados?")}
                className="whitespace-nowrap px-2.5 py-1 rounded-[2px] bg-[#24272B] hover:bg-[#34373C] text-gray-300 hover:text-white border border-[#3E4249] transition-colors"
              >
                📍 Dirección exacta
              </button>
            </div>

            <form onSubmit={handleBotSend} className="p-3 bg-charcoal border-t border-[#3E4249] flex items-center gap-2">
              <input
                type="text"
                placeholder="Escribe tu consulta mecánica..."
                value={inputBot}
                onChange={(e) => setInputBot(e.target.value)}
                className="flex-1 bg-[#1E2024] border border-[#3E4249] rounded-[2px] px-3.5 py-2 text-xs sm:text-sm text-white placeholder-gray-500 focus:outline-none focus:border-amber font-sans"
              />
              <Button
                type="submit"
                size="icon"
                className="bg-amber hover:bg-[#d99700] text-charcoal rounded-[2px] flex-shrink-0 h-9 w-9"
              >
                <Send className="w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
