"use client"

import type React from "react"
import { useEffect } from "react"
import { I18nextProvider } from "react-i18next"
import i18n from "@/i18n/config"

export default function I18nProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const updateLang = (lng: string) => {
      document.documentElement.lang = lng.startsWith("fr") ? "fr" : "en"
    }

    updateLang(i18n.language)
    i18n.on("languageChanged", updateLang)

    return () => {
      i18n.off("languageChanged", updateLang)
    }
  }, [])

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
}
