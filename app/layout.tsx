import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const geist = Geist({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Full Stack Web Developer | Web Applications & API Development | Johnny Richard",
  description:
    "Full Stack Web Developer specialized in building scalable web applications and robust APIs using Spring Boot, Django, Laravel, FastAPI, Express.js and React. Available for freelance projects worldwide. Custom dashboards, CRMs, internal tools, and API development.",
  keywords: [
    "Full Stack Developer",
    "Freelance Developer",
    "Web Developer Madagascar",
    "API Developer",
    "Spring Boot Developer",
    "Django Developer",
    "Laravel Developer",
    "FastAPI Developer",
    "React Developer",
    "Web App Development",
    "REST API Development",
    "Freelance Web Developer",
    "Custom Software Developer",
  ],
  openGraph: {
    title: "Johnny Richard | Full Stack Web Developer",
    description:
      "Building scalable web applications and robust APIs. Spring Boot, Django, Laravel, FastAPI, Express.js, React.",
    type: "website",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geist.className} font-sans antialiased bg-white text-black`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
