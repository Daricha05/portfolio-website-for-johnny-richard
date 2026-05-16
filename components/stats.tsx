"use client"

import { Code2, Zap, Users, CheckCircle } from "lucide-react"
import { useTranslation } from "react-i18next"

const Stats = () => {
  const { t } = useTranslation()

  const stats = [
    {
      icon: Code2,
      value: t("stats.items.0.value"),
      label: t("stats.items.0.label"),
      description: t("stats.items.0.description"),
    },
    {
      icon: Users,
      value: t("stats.items.1.value"),
      label: t("stats.items.1.label"),
      description: t("stats.items.1.description"),
    },
    {
      icon: Zap,
      value: t("stats.items.2.value"),
      label: t("stats.items.2.label"),
      description: t("stats.items.2.description"),
    },
    {
      icon: CheckCircle,
      value: t("stats.items.3.value"),
      label: t("stats.items.3.label"),
      description: t("stats.items.3.description"),
    },
  ]

  return (
    <section className="py-16 md:py-24 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                className="p-6 md:p-8 bg-white border border-gray-200 rounded-lg hover:border-teal-300 hover:shadow-lg transition"
              >
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-between mb-4">
                    <Icon className="w-8 h-8 text-teal-600" />
                  </div>
                  <p className="text-2xl md:text-3xl font-bold text-black mb-2">{stat.value}</p>
                </div>
                <p className="text-sm md:text-base font-semibold text-black mb-1">{stat.label}</p>
                <p className="text-xs md:text-sm text-gray-600">{stat.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Stats
