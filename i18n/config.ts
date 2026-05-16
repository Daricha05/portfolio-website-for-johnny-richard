"use client"

import i18n from "i18next"
import LanguageDetector from "i18next-browser-languagedetector"
import { initReactI18next } from "react-i18next"
import en from "@/messages/en.json"
import fr from "@/messages/fr.json"

const resources = {
  en: { translation: en },
  fr: { translation: fr },
}

if (!i18n.isInitialized) {
  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources,
      supportedLngs: ["fr", "en"],
      nonExplicitSupportedLngs: true,
      cleanCode: true,
      fallbackLng: "fr",
      lng: "fr",
      interpolation: {
        escapeValue: false,
      },
      detection: {
        order: ["querystring", "localStorage", "cookie", "navigator"],
        lookupQuerystring: "lang",
        lookupLocalStorage: "portfolio_lang",
        lookupCookie: "portfolio_lang",
        caches: ["localStorage", "cookie"],
      },
    })
}

export default i18n
