"use client"

import { Code, Server, Database, Globe, Zap, Terminal } from "lucide-react"

const skillsData = [
  {
    id: 1,
    category: "Frontend",
    icon: Code,
    skills: ["React", "Vite", "Tailwind CSS"],
  },
  {
    id: 2,
    category: "Backend",
    icon: Server,
    skills: ["Spring Boot", "Django", "FastAPI", "Laravel", "Express.js"],
  },
  {
    id: 3,
    category: "Databases",
    icon: Database,
    skills: ["PostgreSQL", "MongoDB", "MySQL"],
  },
  {
    id: 4,
    category: "APIs",
    icon: Globe,
    skills: ["REST APIs", "GraphQL", "WebSockets"],
  },
  {
    id: 5,
    category: "Performance",
    icon: Zap,
    skills: ["Optimization", "Caching", "CDN"],
  },
  {
    id: 6,
    category: "DevOps",
    icon: Terminal,
    skills: ["Docker", "Git", "CI/CD", "AWS"],
  },
]

const Skills = () => {
  return (
    <section id="skills" className="py-16 md:py-20 px-4 md:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section title */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-3 md:mb-4 text-center">
            Technologies I Use
          </h2>
          <p className="text-gray-600 text-base md:text-lg text-center max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications and APIs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {skillsData.map((group) => {
            const IconComponent = group.icon
            return (
              <div
                key={group.id}
                className="p-6 md:p-8 bg-white border border-gray-200 rounded-lg hover:border-teal-300 hover:shadow-lg transition-all duration-300 flex flex-col gap-4"
              >
                <div className="flex items-center gap-4">
                  {/* Icon container with teal background */}
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-teal-600" />
                  </div>

                  {/* Category title */}
                  <h3 className="text-xl font-semibold text-black">{group.category}</h3>
                </div>

                {/* Skills list */}
                <p className="text-gray-600 text-sm leading-relaxed">{group.skills.join(", ")}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills
