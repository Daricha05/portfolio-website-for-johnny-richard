"use client"

import { Code2 } from "lucide-react"
import { useTranslation } from "react-i18next"
import LanguageSwitcher from "@/components/language-switcher"

const Navigation = () => {
  const { t } = useTranslation()

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection("hero")}>
          <Code2 className="w-6 h-6 text-teal-600" />
          <span className="text-xl font-bold text-black">JR Dev</span>
        </div>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollToSection("projects")} className="text-gray-600 hover:text-black transition">
            {t("navigation.work")}
          </button>
          <button onClick={() => scrollToSection("services")} className="text-gray-600 hover:text-black transition">
            {t("navigation.services")}
          </button>
          <button onClick={() => scrollToSection("skills")} className="text-gray-600 hover:text-black transition">
            {t("navigation.skills")}
          </button>
          <button onClick={() => scrollToSection("process")} className="text-gray-600 hover:text-black transition">
            {t("navigation.howIWork")}
          </button>
          <button onClick={() => scrollToSection("contact")} className="text-gray-600 hover:text-black transition">
            {t("navigation.contact")}
          </button>
          <LanguageSwitcher />
        </div>

        <div className="md:hidden flex items-center">
          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  )
}

export default Navigation
