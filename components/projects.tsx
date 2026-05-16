"use client"
import { ArrowUpRight, X } from "lucide-react"
import { useState } from "react"
import { useTranslation } from "react-i18next"

type Project = {
  id: number
  title: string
  role: string
  company: string
  location: string
  period: string
  status: "inProgress" | "completed"
  description: string
  tech: string[]
  image: string
  link: string
}

type ProjectI18n = {
  title: string
  role: string
  company: string
  location: string
  period: string
  description: string
  problem: string
  solution: string
  impact: string
}

const Projects = () => {
  const { t } = useTranslation()
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [detailProject, setDetailProject] = useState<Project | null>(null)

  const translatedItems = t("projects.items", { returnObjects: true }) as ProjectI18n[]

  const getItem = (index: number): ProjectI18n => {
    const fallback: ProjectI18n = {
      title: "",
      role: "",
      company: "",
      location: "",
      period: "",
      description: "",
      problem: "",
      solution: "",
      impact: "",
    }

    return translatedItems?.[index] ?? fallback
  }

  const projects: Project[] = [
    {
      id: 1,
      title: getItem(0).title,
      role: getItem(0).role,
      company: getItem(0).company,
      location: getItem(0).location,
      period: getItem(0).period,
      status: "completed",
      description: getItem(0).description,
      tech: ["Spring Boot", "React", "Tailwind", "PostgreSQL"],
      image: "/projet/payflow.png",
      link: "#",
    },
    {
      id: 2,
      title: getItem(1).title,
      role: getItem(1).role,
      company: getItem(1).company,
      location: getItem(1).location,
      period: getItem(1).period,
      status: "completed",
      description: getItem(1).description,
      tech: ["MERN Stack", "Socket.io", "MongoDB"],
      image: "/projet/chatting.png",
      link: "#",
    },
    {
      id: 3,
      title: getItem(2).title,
      role: getItem(2).role,
      company: getItem(2).company,
      location: getItem(2).location,
      period: getItem(2).period,
      status: "completed",
      description: getItem(2).description,
      tech: ["Laravel 10", "Livewire", "MySQL", "Bootstrap 5"],
      image: "/projet/crm.png",
      link: "#",
    },
    {
      id: 4,
      title: getItem(3).title,
      role: getItem(3).role,
      company: getItem(3).company,
      location: getItem(3).location,
      period: getItem(3).period,
      status: "completed",
      description: getItem(3).description,
      tech: ["Laravel 10", "AmCharts4", "PHP", "MySQL"],
      image: "/projet/instat.png",
      link: "#",
    },
    {
      id: 5,
      title: getItem(4).title,
      role: getItem(4).role,
      company: getItem(4).company,
      location: getItem(4).location,
      period: getItem(4).period,
      status: "inProgress",
      description: getItem(4).description,
      tech: ["Express.js", "Next.js", "WordPress", "Docker", "LLM Groq"],
      image: "/projet/webya.png",
      link: "#",
    },
    {
      id: 6,
      title: getItem(5).title,
      role: getItem(5).role,
      company: getItem(5).company,
      location: getItem(5).location,
      period: getItem(5).period,
      status: "completed",
      description: getItem(5).description,
      tech: ["Node.js", "Express.js", "React", "Tailwind CSS", "PostgreSQL"],
      image: "/projet/besti.png",
      link: "#",
    },
    {
      id: 7,
      title: getItem(6).title,
      role: getItem(6).role,
      company: getItem(6).company,
      location: getItem(6).location,
      period: getItem(6).period,
      status: "completed",
      description: getItem(6).description,
      tech: ["n8n", "JavaScript", "LLM Groq", "Discord", "Sheet", "Gmail"],
      image: "/projet/inbox-zeo.png",
      link: "#",
    },
  ]

  const openModal = (project: Project) => {
    const { image } = project
    setSelectedImage(image)
    setSelectedProject(project)
    document.body.style.overflow = "hidden"
  }

  const openDetails = (project: Project) => {
    setDetailProject(project)
    document.body.style.overflow = "hidden"
  }

  const closeModal = () => {
    setSelectedImage(null)
    setSelectedProject(null)
    if (!detailProject) {
      document.body.style.overflow = "unset"
    }
  }

  const closeDetails = () => {
    setDetailProject(null)
    if (!selectedImage) {
      document.body.style.overflow = "unset"
    }
  }

  const scrollToContact = () => {
    const element = document.getElementById("contact")
    element?.scrollIntoView({ behavior: "smooth" })
    closeDetails()
    document.body.style.overflow = "unset"
  }

  return (
    <>
      <section id="projects" className="py-16 md:py-20 px-4 md:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Section title */}
          <div className="mb-12 md:mb-16 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-3 md:mb-4">{t("projects.title")}</h2>
            <p className="text-gray-600 text-base md:text-lg">
              {t("projects.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group flex flex-col rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div
                  className="relative h-48 overflow-hidden bg-gray-100 cursor-pointer"
                  onClick={() => openModal(project)}
                >
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
                  <div className="absolute right-4 top-4">
                    <span
                      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${
                        project.status === "inProgress"
                          ? "bg-amber-100 text-amber-800"
                          : "bg-emerald-100 text-emerald-700"
                      }`}
                    >
                      {project.status === "inProgress" ? t("projects.status.inProgress") : t("projects.status.completed")}
                    </span>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition duration-300 bg-white rounded-full p-2 shadow-md">
                      <ArrowUpRight className="w-5 h-5 text-teal-600" />
                    </div>
                  </div>
                </div>

                <div className="p-5 md:p-6 flex flex-col gap-4 flex-1">
                  <div>
                    <h3 className="text-xl font-bold text-black leading-snug">{project.title}</h3>
                    <p className="text-sm text-teal-700 font-semibold mt-1">{project.role}</p>
                    <p className="text-xs text-gray-500 mt-2 uppercase tracking-wide">
                      {project.company} - {project.location} - {project.period}
                    </p>
                  </div>

                  <p className="text-sm text-gray-600 leading-relaxed line-clamp-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs bg-teal-50 text-teal-700 px-2.5 py-1 rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => openDetails(project)}
                    className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 font-medium text-sm"
                  >
                    {t("projects.viewDetails")} <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {detailProject && (
        <div
          className="fixed inset-0 z-50 bg-black/45 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeDetails}
        >
          <div
            className="w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white shadow-2xl border border-gray-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white border-b border-gray-100 p-5 flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-wide text-gray-500 mb-2">{t("projects.detail.title")}</p>
                <h3 className="text-xl md:text-2xl font-bold text-black leading-tight">{detailProject.title}</h3>
                <p className="text-sm text-teal-700 font-semibold mt-1">{detailProject.role}</p>
                <p className="text-xs text-gray-500 mt-2 uppercase tracking-wide">
                  {detailProject.company} - {detailProject.location} - {detailProject.period}
                </p>
              </div>
              <button
                onClick={closeDetails}
                className="rounded-full p-2 hover:bg-gray-100 transition"
                aria-label="Close details modal"
              >
                <X className="w-5 h-5 text-black" />
              </button>
            </div>

            <div className="p-5 md:p-6 space-y-5">
              <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-2">{t("projects.detail.problem")}</h4>
                <p className="text-sm text-gray-700 leading-relaxed">{getItem(detailProject.id - 1).problem}</p>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-2">{t("projects.detail.solution")}</h4>
                <p className="text-sm text-gray-700 leading-relaxed">{getItem(detailProject.id - 1).solution}</p>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-2">{t("projects.detail.impact")}</h4>
                <p className="text-sm text-gray-700 leading-relaxed">{getItem(detailProject.id - 1).impact}</p>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-2">{t("projects.detail.stack")}</h4>
                <div className="flex flex-wrap gap-2">
                  {detailProject.tech.map((tech) => (
                    <span key={tech} className="text-xs bg-teal-50 text-teal-700 px-2.5 py-1 rounded-full font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-2 flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => openModal(detailProject)}
                  className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:border-teal-600 hover:text-teal-700 transition"
                >
                  {t("projects.openImage")}
                </button>
                <button
                  type="button"
                  onClick={scrollToContact}
                  className="inline-flex items-center gap-2 rounded-lg bg-teal-600 px-4 py-2 text-sm font-semibold text-white hover:bg-teal-500 transition"
                >
                  {t("projects.contactCta")}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {selectedImage && selectedProject && (
        <div
          className="fixed inset-0 z-50 bg-white/30 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn"
          onClick={closeModal}
        >
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-gray-100 transition z-10"
            aria-label="Close modal"
          >
            <X className="w-6 h-6 text-black" />
          </button>

          <div className="absolute top-4 left-4 bg-white px-4 py-3 rounded-lg shadow-lg max-w-[85vw]">
            <p className="font-semibold text-black">{selectedProject.title}</p>
            <p className="text-xs text-gray-600 mt-1">
              {selectedProject.company} - {selectedProject.location} - {selectedProject.period}
            </p>
          </div>

          <div
            className="relative max-w-6xl max-h-[90vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt={selectedProject.title}
              className="w-full h-full object-contain rounded-lg shadow-2xl"
            />
          </div>

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-90 px-4 py-2 rounded-full">
            <p className="text-sm text-gray-700">{t("projects.closeHint")}</p>
          </div>
        </div>
      )}
    </>
  )
}

export default Projects
