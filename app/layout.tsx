import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import I18nProvider from "@/components/i18n-provider"
import "./globals.css"

const geist = Geist({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://johnny-richard-dev.vercel.app"),
  title: "Johnny Richard - Developpeur Web Full Stack",
  description:
    "Developpeur Web Full Stack specialise en applications web evolutives et API robustes. React, Django, Spring Boot, Laravel, FastAPI. Disponible pour des projets freelance dans le monde entier.",
  keywords: [
    "Full Stack Developer",
    "Freelance Developer",
    "Web Developer Madagascar",
    "API Developer",
    "React Developer",
    "Django Developer",
    "Spring Boot Developer",
    "Laravel Developer",
    "FastAPI Developer",
    "Web Application Development",
    "REST API Development",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Johnny Richard - Full Stack Web Developer",
    description:
      "Building scalable web applications and API-driven platforms. React, Django, Spring Boot, Laravel, FastAPI.",
    type: "website",
    url: "https://johnny-richard-dev.vercel.app",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Johnny Richard – Full Stack Web Developer",
      },
    ],
  },
  icons: {
    icon: [
      {
        url: "/code.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/web.png",
        media: "(prefers-color-scheme: dark)",
      }
    ],
    apple: "/code.png",
  },
    generator: 'Johnny Richard'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" >
      <body className={`${geist.className} font-sans antialiased bg-white text-black`}>
        <I18nProvider>{children}</I18nProvider>
        <Analytics />
      </body>
    </html>
  )
}
