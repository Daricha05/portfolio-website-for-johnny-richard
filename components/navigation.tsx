"use client"

import { Code2 } from "lucide-react"

const Navigation = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection("hero")}>
          <Code2 className="w-6 h-6 text-teal-600" />
          <span className="text-xl font-bold text-black">JR Dev</span>
        </div>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollToSection("projects")} className="text-gray-600 hover:text-black transition">
            Work
          </button>
          <button onClick={() => scrollToSection("services")} className="text-gray-600 hover:text-black transition">
            Services
          </button>
          <button onClick={() => scrollToSection("skills")} className="text-gray-600 hover:text-black transition">
            Skills
          </button>
          <button onClick={() => scrollToSection("process")} className="text-gray-600 hover:text-black transition">
            How I Work
          </button>
          <button onClick={() => scrollToSection("contact")} className="text-gray-600 hover:text-black transition">
            Contact
          </button>
        </div>

        <button
          onClick={() => scrollToSection("contact")}
          className="bg-teal-600 hover:bg-teal-500 text-white px-6 py-2 rounded-full transition font-medium text-sm md:text-base"
        >
          Free Consultation
        </button>
      </div>
    </nav>
  )
}

export default Navigation
