"use client"

import { Code2, Zap, Users, CheckCircle } from "lucide-react"

const Stats = () => {
  const stats = [
    {
      icon: Code2,
      value: "10+",
      label: "Projects Delivered",
      description: "Completed across various industries and scales",
    },
    {
      icon: Users,
      value: "3+",
      label: "Years Experience",
      description: "Continuous learning and professional development",
    },
    {
      icon: Zap,
      value: "24h",
      label: "Response Time",
      description: "Quick communication guaranteed",
    },
    {
      icon: CheckCircle,
      value: "100%",
      label: "On-Time Delivery",
      description: "All projects delivered within agreed timelines",
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
                <div className="flex items-center justify-between mb-4">
                  <Icon className="w-8 h-8 text-teal-600" />
                </div>
                <p className="text-2xl md:text-3xl font-bold text-black mb-2">{stat.value}</p>
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
