"use client"

import { Briefcase, Layers, Rocket, ShieldCheck } from "lucide-react"
import { useTranslation } from "react-i18next"

const Skills = () => {
  const { t } = useTranslation()

  const freelanceStacks = [
    t("skills.featuredStacks.0"),
    t("skills.featuredStacks.1"),
    t("skills.featuredStacks.2"),
  ]

  const skillsData = [
    {
      id: 1,
      category: t("skills.blocks.0.title"),
      icon: Briefcase,
      skills: ["Express", "FastAPI", "React", "Next.js", "PostgreSQL", "REST"],
      delivery: t("skills.blocks.0.delivery"),
      level: t("skills.blocks.0.level"),
    },
    {
      id: 2,
      category: t("skills.blocks.1.title"),
      icon: Layers,
      skills: ["FastAPI", "Express.js", "Laravel", "Spring Boot", "WebSockets"],
      delivery: t("skills.blocks.1.delivery"),
      level: t("skills.blocks.1.level"),
    },
    {
      id: 3,
      category: t("skills.blocks.2.title"),
      icon: Rocket,
      skills: ["n8n", "JavaScript", "LLM Groq", "Webhooks", "Discord"],
      delivery: t("skills.blocks.2.delivery"),
      level: t("skills.blocks.2.level"),
    },
    {
      id: 4,
      category: t("skills.blocks.3.title"),
      icon: ShieldCheck,
      skills: ["Docker", "Git", "CI/CD", "AWS", "Monitoring"],
      delivery: t("skills.blocks.3.delivery"),
      level: t("skills.blocks.3.level"),
    },
  ]

  return (
    <section id="skills" className="py-16 md:py-20 px-4 md:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-3 md:mb-4 text-center">
            {t("skills.title")}
          </h2>
          <p className="text-gray-600 text-base md:text-lg text-center max-w-2xl mx-auto">
            {t("skills.subtitle")}
          </p>
        </div>

        <div className="rounded-2xl border border-teal-200 bg-teal-50/60 p-4 md:p-5 mb-8 md:mb-10">
          <p className="text-xs uppercase tracking-wide text-teal-700 font-semibold mb-3">{t("skills.featuredLabel")}</p>
          <div className="flex flex-wrap gap-2">
            {freelanceStacks.map((stack) => (
              <span key={stack} className="text-xs md:text-sm bg-white text-teal-700 border border-teal-200 px-3 py-1.5 rounded-full font-medium">
                {stack}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {skillsData.map((group) => {
            const IconComponent = group.icon
            return (
              <div
                key={group.id}
                className="p-6 md:p-7 bg-white border border-gray-200 rounded-xl hover:border-teal-300 hover:shadow-lg transition-all duration-300 flex flex-col gap-4"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-teal-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-black">{group.category}</h3>
                  </div>
                  <span className="text-xs bg-gray-100 text-gray-700 px-2.5 py-1 rounded-full font-medium">{group.level}</span>
                </div>

                <p className="text-sm text-gray-700 leading-relaxed">{group.delivery}</p>

                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span key={skill} className="text-xs bg-teal-50 text-teal-700 px-2.5 py-1 rounded-full font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-10 text-center">
          <p className="text-gray-600 mb-4">{t("skills.ctaText")}</p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-teal-600 hover:bg-teal-500 text-white px-6 py-3 rounded-lg font-semibold transition"
          >
            {t("skills.ctaButton")}
          </a>
        </div>
      </div>
    </section>
  )
}

export default Skills
