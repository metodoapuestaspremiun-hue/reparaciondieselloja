import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import WhatsAppFloat from "@/components/whatsapp-float"
import { ThemeProvider } from "@/components/theme-provider"
import { Inter, Barlow_Condensed } from "next/font/google"

const inter = Inter({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
})

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-barlow-condensed",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Mecánica Loja",
  description: "Taller especializado en reparación y mantenimiento de vehículos en Loja",
  generator: "Next.js",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" }
    ]
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
    <html lang="es" suppressHydrationWarning className={`${inter.variable} ${barlowCondensed.variable}`}>
      <body className={`${inter.className} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          {children}
          <WhatsAppFloat />
        </ThemeProvider>
      </body>
    </html>
  )
}
