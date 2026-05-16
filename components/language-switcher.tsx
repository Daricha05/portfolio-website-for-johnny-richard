"use client"

import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"

export default function LanguageSwitcher() {
  const { i18n, t } = useTranslation()
  const [lang, setLang] = useState<"fr" | "en">("fr")
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const normalize = (value: string) => (value.startsWith("fr") ? "fr" : "en")

    setLang(normalize(i18n.language))

    const onLangChange = (value: string) => {
      setLang(normalize(value))
    }

    i18n.on("languageChanged", onLangChange)
    return () => {
      i18n.off("languageChanged", onLangChange)
    }
  }, [i18n])

  useEffect(() => {
    const timer = window.setTimeout(() => setIsVisible(true), 60)
    return () => window.clearTimeout(timer)
  }, [])

  const handleChange = (nextLang: "fr" | "en") => {
    setLang(nextLang)
    i18n.changeLanguage(nextLang)
    document.documentElement.lang = nextLang
  }

  return (
    <div
      role="group"
      aria-label={t("navigation.language")}
      className={`relative inline-flex items-center rounded-full border border-gray-300 bg-white p-1 shadow-sm transition-all duration-500 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-1 opacity-0"
      }`}
    >
      <span
        className={`absolute top-1 bottom-1 w-[calc(50%-0.25rem)] rounded-full bg-teal-600 transition-transform duration-300 ${
          lang === "fr" ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden="true"
      />

      <button
        type="button"
        onClick={() => handleChange("fr")}
        className={`relative z-10 min-w-10 rounded-full px-3 py-1 text-xs font-semibold transition-colors duration-300 ${
          lang === "fr" ? "text-white" : "text-gray-600 hover:text-black"
        }`}
        aria-pressed={lang === "fr"}
      >
        FR
      </button>

      <button
        type="button"
        onClick={() => handleChange("en")}
        className={`relative z-10 min-w-10 rounded-full px-3 py-1 text-xs font-semibold transition-colors duration-300 ${
          lang === "en" ? "text-white" : "text-gray-600 hover:text-black"
        }`}
        aria-pressed={lang === "en"}
      >
        EN
      </button>
    </div>
  )
}
