"use client"

const experiences = [
  {
    role: "Full Stack Developer",
    company: "BIENFE",
    period: "2025 – Present",
    description:
      "Developed a collaborative payroll platform (Spring Boot + React) and an internal messaging tool inspired by WhatsApp/Messenger using MERN stack.",
    tech: ["Spring Boot", "React", "PostgreSQL", "Socket.io", "MERN Stack"],
  },
  {
    role: "Laravel Developer",
    company: "BIENFE",
    period: "2024 – 2025",
    description:
      "Built a multi-school CRM with complete data flows, dashboards, role management, and an admin panel for multiple institutions.",
    tech: ["Laravel 10", "MySQL", "Livewire", "Tailwind CSS", "Bootstrap 5"],
  },
  {
    role: "Full Stack JavaScript Developer",
    company: "BIENFE",
    period: "2025",
    description:
      "Developed a quote management app using Express.js, REST API, and React for automated quote generation and client communication.",
    tech: ["Express.js", "React", "Node.js", "MongoDB"],
  },
  {
    role: "Web Developer Intern",
    company: "INSTAT Madagascar",
    period: "2024",
    description:
      "Created a dynamic data visualization platform using Laravel + AmCharts to display national trade statistics and business data.",
    tech: ["Laravel", "AmCharts4", "PHP", "MySQL"],
  },
]

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        {/* Section title */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Professional Experience</h2>
          <p className="text-gray-600 text-lg">A timeline of my professional journey and key projects.</p>
        </div>

        {/* Timeline */}
        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative pl-8 border-l-2 border-teal-200 pb-8">
              {/* Timeline dot */}
              <div className="absolute -left-3 top-0 w-4 h-4 bg-teal-600 rounded-full border-4 border-white"></div>

              {/* Content */}
              <div className="bg-white p-6 rounded-lg border border-gray-200 hover:border-teal-200 transition">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-black">{exp.role}</h3>
                    <p className="text-teal-600 font-semibold">{exp.company}</p>
                  </div>
                  <span className="text-gray-500 text-sm mt-2 md:mt-0">{exp.period}</span>
                </div>
                <p className="text-gray-600 mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <span key={t} className="text-xs bg-teal-50 text-teal-700 px-3 py-1 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
