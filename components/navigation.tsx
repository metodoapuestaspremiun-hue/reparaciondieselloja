"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X, Phone } from "lucide-react"

export default function Navigation({ brandName = "Mecánica Loja" }: { brandName?: string } = {}) {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { href: "/", label: "Inicio" },
    { href: "/motores-diesel", label: "Motores Diésel" },
    { href: "/camionetas", label: "Camionetas" },
    { href: "/vehiculos-pesados", label: "Vehículos Pesados" },
    { href: "/vehiculos-livianos", label: "Vehículos Livianos" },
    { href: "/agendamiento", label: "Agendamiento" },
  ]

  // Close mobile menu when window is resized to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 bg-[#1A1C1F] border-b border-[#000000] shadow-md">

      <div className="container mx-auto px-4 lg:px-6 max-w-[1180px]">
        <div className="flex justify-between items-center h-20">
          {/* Logo estilo Taller Industrial */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative flex items-center">
              <span className="w-2 h-2 rounded-full bg-amber inline-block mr-2" />
              <Image 
                src="/nuevas/mecanica_en_loja_logo.webp" 
                alt={brandName} 
                width={44} 
                height={44} 
                className="rounded-[2px] object-contain transition-transform duration-200 group-hover:scale-105" 
              />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-2xl tracking-wide uppercase text-white group-hover:text-amber transition-colors leading-none">
                {brandName}
              </span>
              <span className="text-[11px] font-sans font-medium text-[#9A9DA3] tracking-wider uppercase mt-1">
                Especialistas en Motores
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links (Inter, weight 500/600) */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navItems.map((item) => {
              const active = isActive(item.href)
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2 text-sm font-sans font-medium transition-colors relative ${
                    active
                      ? "text-white font-semibold"
                      : "text-[#B9BCC1] hover:text-white"
                  }`}
                >
                  {item.label}
                  {active && (
                    <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-amber" />
                  )}
                </Link>
              )
            })}
          </nav>

          {/* Contact Info & CTA Buttons (Desktop) */}
          <div className="hidden lg:flex items-center space-x-4">
            <a 
              href="tel:+593983237491" 
              className="flex items-center space-x-2 text-sm font-sans font-medium text-[#B9BCC1] hover:text-white transition-colors"
            >
              <Phone size={15} className="text-amber" />
              <span>098 323 7491</span>
            </a>
            <a
              href="https://wa.me/593983237491?text=Hola,%20solicito%20información%20sobre%20sus%20servicios%20de%20mecánica"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber hover:bg-[#d99700] text-charcoal font-sans font-bold text-sm px-4 py-2.5 rounded-[2px] shadow-sm transition-colors duration-200 uppercase tracking-wider"
            >
              WhatsApp
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="lg:hidden p-2 text-[#B9BCC1] hover:text-white transition-colors focus:outline-none"
            aria-label="Abrir menú de navegación"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-[#2E3136] bg-[#1A1C1F]">
            <div className="flex flex-col space-y-1">
              {navItems.map((item) => {
                const active = isActive(item.href)
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`px-4 py-2.5 text-base font-sans font-medium transition-colors flex items-center justify-between ${
                      active
                        ? "text-white bg-[#24272B] border-l-2 border-amber"
                        : "text-[#B9BCC1] hover:text-white hover:bg-[#24272B]"
                    }`}
                  >
                    <span>{item.label}</span>
                    {active && <span className="w-1.5 h-1.5 rounded-full bg-amber" />}
                  </Link>
                )
              })}
              <div className="pt-4 mt-2 border-t border-[#2E3136] flex flex-col gap-3 px-2">
                <a 
                  href="tel:+593983237491" 
                  className="flex items-center space-x-2 text-[#B9BCC1] hover:text-white py-1 font-sans text-sm"
                >
                  <Phone size={16} className="text-amber" />
                  <span>098 323 7491</span>
                </a>
                <a
                  href="https://wa.me/593983237491?text=Hola,%20solicito%20información%20sobre%20sus%20servicios%20de%20mecánica"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center bg-amber hover:bg-[#d99700] text-charcoal py-2.5 rounded-[2px] font-sans font-bold text-sm transition-colors uppercase tracking-wider"
                >
                  Contactar por WhatsApp
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
