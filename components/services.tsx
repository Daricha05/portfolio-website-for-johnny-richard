"use client"

import { Code2, Server, Wrench } from "lucide-react"
import { useTranslation } from "react-i18next"

const Services = () => {
  const { t } = useTranslation()

  const services = [
    {
      icon: Code2,
      title: t("services.items.0.title"),
      description: t("services.items.0.description"),
    },
    {
      icon: Server,
      title: t("services.items.1.title"),
      description: t("services.items.1.description"),
    },
    {
      icon: Wrench,
      title: t("services.items.2.title"),
      description: t("services.items.2.description"),
    },
  ]

  return (
    <section id="services" className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section title */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">{t("services.title")}</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {t("services.subtitle")}
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon
            return (
              <div
                key={idx}
                className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:border-teal-300 hover:shadow-lg transition"
              >
                <div className="mb-4">
                  <Icon className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-black mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services
