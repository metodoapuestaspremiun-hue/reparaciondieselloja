"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Menu, X, Phone } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  const navItems = [
    { href: "/", label: "Inicio" }
  ]

  // Function to handle navigation and scroll to top on mobile
  const handleNavigation = (href: string) => {
    setIsOpen(false) // Close mobile menu
    router.push(href) // Navigate to the page

    // Check if we're on mobile
    if (window.innerWidth < 1024) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    }
  }

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

  return (
    <nav className="bg-gray-900 text-white shadow-lg fixed w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          <Link href="/" className="flex items-center">
            <div>
              <h1 className="text-xl font-bold text-red-500">Automotriz Chávez</h1>
              <p className="text-sm text-gray-300">Expertos en Motores</p>
            </div>
          </Link>

          {/* Desktop Navigation - Oculto ya que solo mostramos el logo */}
          <div className="hidden lg:flex items-center">
            {/* Espacio para alinear el botón de WhatsApp a la derecha */}
          </div>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="tel:+593992797349" className="flex items-center space-x-1 text-sm hover:text-red-500">
              <Phone size={16} />
              <span>+593 99 279 7349</span>
            </a>
            <a
              href="https://wa.me/593992797349"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#ec0018] hover:bg-[#c40014] px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              WhatsApp
            </a>
          </div>

          {/* Mobile menu button */}
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden pb-4">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavigation(item.href)}
                  className="py-2 text-left hover:text-red-500 transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4 border-t border-gray-700">
                <a href="tel:+593992797349" className="flex items-center space-x-2 py-2">
                  <Phone size={16} />
                  <span>+593 99 279 7349</span>
                </a>
                <a
                  href="https://wa.me/593992797349"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#ec0018] hover:bg-[#c40014] px-4 py-2 rounded-lg text-sm font-medium mt-2"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
