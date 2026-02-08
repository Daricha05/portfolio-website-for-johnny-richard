"use client"

import { Code2, Server, Wrench } from "lucide-react"

const services = [
  {
    icon: Code2,
    title: "Web Application Development",
    description:
      "Custom dashboards, CRMs, internal tools, management systems, and modern web applications built with clean architectures and scalable backends.",
  },
  {
    icon: Server,
    title: "API Development & Integration",
    description:
      "High-performance REST APIs, secure authentication, business logic implementation, third-party integrations, and complete documentation.",
  },
  {
    icon: Wrench,
    title: "Maintenance & Performance Optimization",
    description:
      "Debugging, refactoring, stability improvements, database optimization, and long-term technical support for existing applications.",
  },
]

const Services = () => {
  return (
    <section id="services" className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section title */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Services I Offer</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Comprehensive solutions for building, improving, and scaling your digital products.
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
