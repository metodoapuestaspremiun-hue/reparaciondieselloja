import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import WhatsAppFloat from "@/components/whatsapp-float"
import { ThemeProvider } from "@/components/theme-provider"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Automotriz Chavez",
  description: "Taller especializado en reparación y mantenimiento de vehículos en Loja",
  generator: "Next.js",
  icons: {
    icon: "/images/favicon.ico"
  },
  verification: {
    google: "Mberw-THKvHezPpM2KjvZSZhe7VUR-hU6fdadYHJKT0"
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          {children}
          <WhatsAppFloat />
        </ThemeProvider>
      </body>
    </html>
  )
}
