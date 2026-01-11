"use client"

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative pt-24 md:pt-32 pb-16 md:pb-20 px-4 md:px-6 tech-pattern overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 border border-teal-200 rounded-full px-4 py-2 mb-6 md:mb-8 bg-teal-50">
          <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
          <span className="text-xs md:text-sm text-teal-700 font-medium">Full Stack Web & API Developer</span>
        </div>

        {/* Main Title */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-black mb-4 md:mb-6 leading-tight animate-slideInUp">
          I build scalable <span className="text-teal-600">web applications</span> and robust{" "}
          <span className="text-teal-600">APIs</span>
        </h1>

        {/* Subtitle */}
        <p
          className="text-base md:text-lg text-gray-600 mb-8 md:mb-12 leading-relaxed max-w-2xl mx-auto animate-slideInUp"
          style={{ animationDelay: "0.1s" }}
        >
          I help businesses and startups develop modern digital solutions using Spring Boot, Django, FastAPI, Laravel,
          Express.js, and React. Let's build something extraordinary together.
        </p>

        <div
          className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-6 md:mb-8 animate-slideInUp"
          style={{ animationDelay: "0.2s" }}
        >
          <button
            onClick={() => scrollToSection("projects")}
            className="bg-teal-600 hover:bg-teal-500 text-white px-6 md:px-8 py-3 rounded-lg font-medium transition w-full sm:w-auto"
          >
            View My Work
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="border border-gray-300 hover:border-teal-600 hover:text-teal-600 text-black px-6 md:px-8 py-3 rounded-lg font-medium transition w-full sm:w-auto"
          >
            Get Free Consultation
          </button>
        </div>

        {/* Supporting text */}
        <p className="text-xs md:text-sm text-gray-500">
          ✓ Clean code • ✓ Fast delivery • ✓ Free consultation • ✓ 24h response
        </p>

        {/* Geometric shapes - Hidden on mobile */}
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-teal-200 opacity-30 transform rotate-45 hidden md:block"></div>
        <div className="absolute bottom-32 right-10 w-24 h-24 border-2 border-teal-100 opacity-20 transform -rotate-12 hidden md:block"></div>
      </div>
    </section>
  )
}

export default Hero
