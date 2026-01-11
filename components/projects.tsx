"use client"
import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Payroll Management Web App",
    description:
      "A collaborative payroll management platform designed for HR cabinets and companies, enabling smooth data exchange and automated processing.",
    tech: ["Spring Boot", "React", "Tailwind", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
    link: "#",
  },
  {
    id: 2,
    title: "Internal Messaging Platform",
    description: "A real-time corporate messaging system built to improve communication between employees and clients.",
    tech: ["MERN Stack", "Socket.io", "MongoDB"],
    image: "https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=600&h=400&fit=crop",
    link: "#",
  },
  {
    id: 3,
    title: "Multi-School CRM Platform",
    description:
      "A complete school management system covering enrollment, students, finances, permissions, and multi-institution dashboards.",
    tech: ["Laravel 10", "Livewire", "MySQL", "Bootstrap 5"],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    link: "#",
  },
  {
    id: 4,
    title: "National Data Visualization Platform",
    description:
      "Built for INSTAT Madagascar. Dynamic dashboards for visualizing national export/import statistics and business data.",
    tech: ["Laravel 10", "AmCharts4", "PHP", "MySQL"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    link: "#",
  }
]

const Projects = () => {
  return (
    <section id="projects" className="py-16 md:py-20 px-4 md:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section title */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-3 md:mb-4">Featured Projects</h2>
          <p className="text-gray-600 text-base md:text-lg">
            A selection of my recent work building scalable applications and robust APIs.
          </p>
        </div>

        {/* Projects grid - Improved mobile responsiveness */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group border border-teal-100 rounded-xl overflow-hidden hover:shadow-lg transition duration-300 hover:scale-105 transform"
            >
              {/* Image */}
              <div className="relative h-40 md:h-48 overflow-hidden bg-gray-100">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold text-black mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{project.description}</p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-teal-50 text-teal-700 px-2 md:px-3 py-1 rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <a
                  href={project.link}
                  className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 font-medium text-sm"
                >
                  View details <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
