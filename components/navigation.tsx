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
    <header className="fixed top-0 left-0 right-0 w-full z-50 bg-gray-950/90 backdrop-blur-md border-b border-gray-800/80 shadow-lg">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <Image 
              src="/nuevas/mecanica_en_loja_logo.webp" 
              alt={brandName} 
              width={46} 
              height={46} 
              className="rounded-lg object-contain transition-transform duration-300 group-hover:scale-105" 
            />
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight text-white group-hover:text-red-500 transition-colors">
                {brandName}
              </span>
              <span className="text-xs font-medium text-gray-400">
                Especialistas en Motores
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navItems.map((item) => {
              const active = isActive(item.href)
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-semibold transition-all duration-200 relative ${
                    active
                      ? "text-red-500 bg-red-950/30"
                      : "text-gray-200 hover:text-white hover:bg-gray-800/60"
                  }`}
                >
                  {item.label}
                  {active && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-red-500 rounded-full" />
                  )}
                </Link>
              )
            })}
          </nav>

          {/* Contact Info & CTA Buttons (Desktop) */}
          <div className="hidden lg:flex items-center space-x-4">
            <a 
              href="tel:+593983237491" 
              className="flex items-center space-x-1.5 text-sm font-semibold text-gray-300 hover:text-red-400 transition-colors"
            >
              <Phone size={16} className="text-red-500" />
              <span>098 323 7491</span>
            </a>
            <a
              href="https://wa.me/593983237491?text=Hola,%20solicito%20información%20sobre%20sus%20servicios%20de%20mecánica"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white px-4 py-2 rounded-lg text-sm font-bold shadow-md hover:shadow-red-900/40 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              WhatsApp
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="lg:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800 transition-colors focus:outline-none"
            aria-label="Abrir menú de navegación"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-gray-800/80 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-1">
              {navItems.map((item) => {
                const active = isActive(item.href)
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`px-4 py-2.5 rounded-lg text-base font-semibold transition-colors flex items-center justify-between ${
                      active
                        ? "text-red-500 bg-red-950/40"
                        : "text-gray-200 hover:text-white hover:bg-gray-800/60"
                    }`}
                  >
                    <span>{item.label}</span>
                    {active && <span className="w-2 h-2 rounded-full bg-red-500" />}
                  </Link>
                )
              })}
              <div className="pt-4 mt-2 border-t border-gray-800/80 flex flex-col gap-3 px-2">
                <a 
                  href="tel:+593983237491" 
                  className="flex items-center space-x-2 text-gray-300 hover:text-white py-1 font-medium text-sm"
                >
                  <Phone size={18} className="text-red-500" />
                  <span>098 323 7491</span>
                </a>
                <a
                  href="https://wa.me/593983237491?text=Hola,%20solicito%20información%20sobre%20sus%20servicios%20de%20mecánica"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center bg-red-600 hover:bg-red-500 text-white py-2.5 rounded-lg text-sm font-bold transition-colors shadow-md"
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
