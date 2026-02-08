"use client"

import { MessageSquare, FileText, Code2, TestTube2, Rocket, Headphones } from "lucide-react"

const Process = () => {
  const steps = [
    {
      icon: MessageSquare,
      number: "1",
      title: "Consultation",
      description: "Free initial consultation to understand your project goals, requirements, and timeline.",
    },
    {
      icon: FileText,
      number: "2",
      title: "Planning & Proposal",
      description: "Detailed project plan, technical architecture, and transparent pricing proposal.",
    },
    {
      icon: Code2,
      number: "3",
      title: "Development",
      description: "Clean code development with regular updates and transparent communication throughout.",
    },
    {
      icon: TestTube2,
      number: "4",
      title: "Testing & QA",
      description: "Rigorous testing, bug fixes, and optimization to ensure reliability and performance.",
    },
    {
      icon: Rocket,
      number: "5",
      title: "Deployment",
      description: "Safe deployment to production with proper monitoring and post-launch setup.",
    },
    {
      icon: Headphones,
      number: "6",
      title: "Support",
      description: "Ongoing support and maintenance to keep your application running smoothly.",
    },
  ]

  return (
    <section id="process" className="py-20 md:py-28 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">How I Work</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A transparent, collaborative process designed to deliver results you can trust.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step) => {
            const Icon = step.icon
            return (
              <div
                key={step.number}
                className="relative p-6 md:p-8 bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-lg hover:border-teal-300 hover:shadow-lg transition"
              >
                {/* Step number badge */}
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {step.number}
                </div>

                <div className="flex items-center gap-4">
                  {/* Icon */}
                  <Icon className="w-8 h-8 text-teal-600 mb-4" />

                  {/* Content */}
                  <h3 className="text-lg font-bold text-black mb-2">{step.title}</h3>
                </div>

                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">Ready to start your project?</p>
          <a
            href="#contact"
            className="inline-block bg-teal-600 hover:bg-teal-500 text-white px-8 md:px-10 py-3 md:py-4 rounded-lg font-bold transition"
          >
            Get Free Consultation
          </a>
        </div>
      </div>
    </section>
  )
}

export default Process
