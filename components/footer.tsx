"use client"

import { Github, Linkedin, Mail } from "lucide-react"
import { useTranslation } from "react-i18next"

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const { t } = useTranslation()

  return (
    <footer className="bg-black text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Column 1 - Brand */}
          <div>
            <h3 className="font-bold text-lg mb-4">{t("footer.services")}</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#services" className="hover:text-white transition">
                  {t("footer.webDevelopment")}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition">
                  {t("footer.apiDevelopment")}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition">
                  {t("footer.optimization")}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2 - Stack */}
          <div>
            <h3 className="font-bold text-lg mb-4">{t("footer.techStack")}</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#skills" className="hover:text-white transition">
                  {t("footer.backend")}
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-white transition">
                  {t("footer.frontend")}
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-white transition">
                  {t("footer.database")}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 - Social */}
          <div>
            <h3 className="font-bold text-lg mb-4">{t("footer.connect")}</h3>
            <div className="flex gap-4">
              <a href="https://github.com/Daricha05" className="text-gray-400 hover:text-teal-500 transition" target="_blank" rel="noopener noreferrer">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/johnnyrichard/" className="text-gray-400 hover:text-teal-500 transition" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:johnnyricharde5@gmail.com" className="text-gray-400 hover:text-teal-500 transition" target="_blank">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>
            © {currentYear} Johnny Richard — {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
