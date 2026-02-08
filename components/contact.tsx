"use client"

import type React from "react"
import { useState, useRef } from "react"
import { Mail, MapPin, Phone, CheckCircle2 } from "lucide-react"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  
  // Pour éviter les mises à jour d'état sur un composant démonté
  const isMountedRef = useRef(true)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      const response = await fetch("https://formspree.io/f/mojnvarr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        if (isMountedRef.current) {
          setSubmitted(true)
          // Réinitialisation après 3 secondes
          setTimeout(() => {
            if (isMountedRef.current) {
              setSubmitted(false)
              setFormData({ name: "", email: "", projectType: "", message: "" })
            }
          }, 3000)
        }
      } else {
        throw new Error("Failed to send message")
      }
    } catch (err) {
      console.error("Error:", err)
      if (isMountedRef.current) {
        setError("Une erreur s'est produite. Veuillez réessayer.")
      }
    } finally {
      if (isMountedRef.current) {
        setIsSubmitting(false)
      }
    }
  }

  return (
    <section id="contact" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Let's Build Something Great</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to start your project? Get a free consultation with no strings attached.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left side - Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-600 focus:ring-1 focus:ring-teal-600"
                required
                disabled={isSubmitting}
              />
              <input
                type="email"
                name="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-600 focus:ring-1 focus:ring-teal-600"
                required
                disabled={isSubmitting}
              />
              <select
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-600 focus:ring-1 focus:ring-teal-600 bg-white text-gray-700"
                required
                disabled={isSubmitting}
              >
                <option value="" disabled>Select project type</option>
                <option value="web-app">Web Application (Dashboard, CRM, SaaS)</option>
                <option value="rest-api">REST API Development</option>
                <option value="website">Website / Landing Page</option>
                <option value="maintenance">Maintenance & Optimization</option>
                <option value="other">Other</option>
              </select>
              <textarea
                name="message"
                placeholder="Tell me about your project..."
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-600 focus:ring-1 focus:ring-teal-600 resize-none"
                required
                disabled={isSubmitting}
              ></textarea>
              
              {/* Affichage des erreurs */}
              {error && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-teal-600 hover:bg-teal-500 text-white font-bold py-3 rounded-lg transition flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitted ? (
                  <>
                    <CheckCircle2 className="w-5 h-5" />
                    Message sent! I'll respond within 24h
                  </>
                ) : isSubmitting ? (
                  "Sending..."
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          </div>

          {/* Right side - Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-black mb-4">Get in Touch</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                I'm available for freelance missions, remote or on-site. Whether you need a web app, an API, or
                long-term support, I can help bring your ideas to life.
              </p>
              <div className="flex flex-col gap-2 mb-6">
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-teal-600" />
                  <span>Response within 24 hours</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-teal-600" />
                  <span>Free initial consultation</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-teal-600" />
                  <span>Flexible scheduling (Remote or On-site)</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <Mail className="w-6 h-6 text-teal-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-black">Email</p>
                  <a href="mailto:johnnyricharde5@gmail.com" className="text-gray-600 hover:text-teal-600 transition">
                    johnnyricharde5@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <Phone className="w-6 h-6 text-teal-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-black">WhatsApp</p>
                  <a href="tel:+261340912440" className="text-gray-600 hover:text-teal-600 transition">
                    +261 34 09 124 40
                  </a>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <MapPin className="w-6 h-6 text-teal-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-black">Location</p>
                  <p className="text-gray-600">Madagascar • Remote • Flexible</p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-teal-50 border border-teal-200 rounded-lg">
              <p className="text-sm text-teal-900">
                <strong>Why contact me?</strong> I'm dedicated to understanding your vision and delivering solutions
                that exceed expectations. Free first consultation, no obligation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact