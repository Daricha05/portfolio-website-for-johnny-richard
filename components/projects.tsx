"use client"
import { ArrowUpRight, X } from "lucide-react"
import { useState } from "react"

const projects = [
  {
    id: 1,
    title: "Payroll Management Web App",
    description:
      "A collaborative payroll management platform designed for HR cabinets and companies, enabling smooth data exchange and automated processing.",
    tech: ["Spring Boot", "React", "Tailwind", "PostgreSQL"],
    image: "/projet/payflow.png",
    link: "#",
  },
  {
    id: 2,
    title: "Internal Messaging Platform",
    description: "A real-time corporate messaging system built to improve communication between employees and clients.",
    tech: ["MERN Stack", "Socket.io", "MongoDB"],
    image: "/projet/chatting.png",
    link: "#",
  },
  {
    id: 3,
    title: "Multi-School CRM Platform",
    description:
      "A complete school management system covering enrollment, students, finances, permissions, and multi-institution dashboards.",
    tech: ["Laravel 10", "Livewire", "MySQL", "Bootstrap 5"],
    image: "/projet/crm.png",
    link: "#",
  },
  {
    id: 4,
    title: "National Data Visualization Platform",
    description:
      "Built for INSTAT Madagascar. Dynamic dashboards for visualizing national export/import statistics and business data.",
    tech: ["Laravel 10", "AmCharts4", "PHP", "MySQL"],
    image: "/projet/instat.png",
    link: "#",
  }
]

const Projects = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [selectedTitle, setSelectedTitle] = useState<string>("")

  const openModal = (image: string, title: string) => {
    setSelectedImage(image)
    setSelectedTitle(title)
    // Empêcher le scroll du body
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setSelectedImage(null)
    setSelectedTitle("")
    // Réactiver le scroll
    document.body.style.overflow = 'unset'
  }

  return (
    <>
      <section id="projects" className="py-16 md:py-20 px-4 md:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Section title */}
          <div className="mb-12 md:mb-16 text-center">
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
                {/* Image - Cliquable */}
                <div 
                  className="relative h-40 md:h-48 overflow-hidden bg-gray-100 cursor-pointer"
                  onClick={() => openModal(project.image, project.title)}
                >
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                  />
                  {/* Indicateur de zoom au hover */}
                  <div className="absolute inset-0 group-hover:bg-opacity-20 transition duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition duration-300 bg-white rounded-full p-2">
                      <ArrowUpRight className="w-5 h-5 text-teal-600" />
                    </div>
                  </div>
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
                  
                    <a href={project.link}
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

      {/* Modal pour afficher l'image en grand */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-white/30 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn"
          onClick={closeModal}
        >
          {/* Bouton fermer */}
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-gray-100 transition z-10"
            aria-label="Close modal"
          >
            <X className="w-6 h-6 text-black" />
          </button>

          {/* Titre */}
          <div className="absolute top-4 left-4 bg-white px-4 py-2 rounded-lg shadow-lg">
            <p className="font-semibold text-black">{selectedTitle}</p>
          </div>

          {/* Image */}
          <div 
            className="relative max-w-6xl max-h-[90vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt={selectedTitle}
              className="w-full h-full object-contain rounded-lg shadow-2xl"
            />
          </div>

          {/* Indication pour fermer */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-90 px-4 py-2 rounded-full">
            <p className="text-sm text-gray-700">Cliquez n'importe où pour fermer</p>
          </div>
        </div>
      )}
    </>
  )
}

export default Projects