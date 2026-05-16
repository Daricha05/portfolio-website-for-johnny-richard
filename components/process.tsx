"use client"

import { MessageSquare, FileText, Code2, TestTube2, Rocket, Headphones } from "lucide-react"
import { useTranslation } from "react-i18next"

const Process = () => {
  const { t } = useTranslation()

  const steps = [
    {
      icon: MessageSquare,
      number: "1",
      title: t("process.steps.0.title"),
      description: t("process.steps.0.description"),
    },
    {
      icon: FileText,
      number: "2",
      title: t("process.steps.1.title"),
      description: t("process.steps.1.description"),
    },
    {
      icon: Code2,
      number: "3",
      title: t("process.steps.2.title"),
      description: t("process.steps.2.description"),
    },
    {
      icon: TestTube2,
      number: "4",
      title: t("process.steps.3.title"),
      description: t("process.steps.3.description"),
    },
    {
      icon: Rocket,
      number: "5",
      title: t("process.steps.4.title"),
      description: t("process.steps.4.description"),
    },
    {
      icon: Headphones,
      number: "6",
      title: t("process.steps.5.title"),
      description: t("process.steps.5.description"),
    },
  ]

  return (
    <section id="process" className="py-20 md:py-28 px-4 md:px-6 bg-gradient-to-b from-white via-gray-50/40 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-flex items-center rounded-full bg-teal-50 border border-teal-200 px-4 py-1.5 text-xs font-semibold tracking-wide uppercase text-teal-700 mb-5">
            {t("process.badge")}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">{t("process.title")}</h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {t("process.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step) => {
            const Icon = step.icon
            return (
              <div
                key={step.number}
                className="group relative p-6 md:p-7 bg-white border border-gray-200 rounded-2xl hover:border-teal-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-md shadow-teal-200">
                  {step.number}
                </div>

                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center group-hover:bg-teal-100 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-teal-600" />
                  </div>

                  <div>
                    <p className="text-[11px] uppercase tracking-wide text-gray-500 font-semibold mb-1">
                      {t("process.stepLabel")} {step.number}
                    </p>
                    <h3 className="text-lg font-bold text-black leading-tight">{step.title}</h3>
                  </div>
                </div>

                <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            )
          })}
        </div>

        <div className="mt-14 md:mt-16 rounded-2xl border border-teal-200 bg-gradient-to-r from-teal-50 to-cyan-50 p-6 md:p-8 text-center">
          <p className="text-gray-700 mb-5 text-sm md:text-base">{t("process.ready")}</p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-teal-600 hover:bg-teal-500 text-white px-8 md:px-10 py-3 rounded-xl font-semibold transition"
          >
            {t("process.cta")}
          </a>
        </div>
      </div>
    </section>
  )
}

export default Process
