"use client"

import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import Stats from "@/components/stats"
import Projects from "@/components/projects"
import Services from "@/components/services"
import Skills from "@/components/skills"
import Process from "@/components/process"
import Experience from "@/components/experience"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Stats />
      <Projects />
      <Services />
      <Skills />
      <Process />
      {/* <Experience /> */}
      <Contact />
      <Footer />
    </main>
  )
}
