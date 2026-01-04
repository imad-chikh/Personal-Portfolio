"use client";
import FadeInSection from "@/components/project/FadeInSection";

export default function Services() {
  const services = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: "Mobile App Development",
      description: "Building high-quality cross-platform mobile applications using Flutter and React Native, optimized for both iOS and Android.",
      technologies: ["Flutter", "React Native", "Dart", "JavaScript"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "MVP Development for Startups",
      description: "Rapidly transforming your ideas into market-ready products with a focus on speed, scalability, and user experience.",
      technologies: ["Agile", "CI/CD", "Cloud Deploy", "Prototyping"],
      color: "from-violet-500 to-purple-500",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "App Performance Optimization",
      description: "Analyzing and improving app performance, reducing load times, optimizing memory usage, and ensuring smooth user experiences.",
      technologies: ["Profiling", "Debugging", "Code Review", "Testing"],
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: "Firebase & API Integration",
      description: "Seamless integration of backend services including Firebase, REST APIs, GraphQL, and third-party services into your applications.",
      technologies: ["Firebase", "REST API", "GraphQL", "Node.js"],
      color: "from-orange-500 to-amber-500",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
        </svg>
      ),
      title: "App Publishing & Maintenance",
      description: "End-to-end app publishing to App Store and Google Play, including ongoing maintenance, updates, and technical support.",
      technologies: ["App Store", "Play Store", "CI/CD", "Monitoring"],
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      title: "Technical Consulting",
      description: "Expert guidance on technology stack selection, architecture design, and best practices for your mobile and web projects.",
      technologies: ["Architecture", "Strategy", "Best Practices", "Mentoring"],
      color: "from-indigo-500 to-blue-500",
    },
  ];

  return (
    <section id="services" className="relative py-20 lg:py-32 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-violet-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeInSection>
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-medium mb-6 border border-blue-100 animate-fade-up">
              <span className="w-2 h-2 rounded-full bg-blue-500 mr-2 animate-pulse" />
              What I Offer
            </div>
            
            <h2 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl mb-6 animate-fade-up animation-delay-150">
              Services for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-violet-500">Your Success</span>
            </h2>
            
            <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-500 animate-fade-up animation-delay-300">
              From concept to deployment, I provide comprehensive development services to bring your ideas to life and help your business grow.
            </p>
          </div>
        </FadeInSection>

        <FadeInSection className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon Container */}
                <div className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-gray-50 text-gray-700 border border-gray-200 group-hover:bg-gray-100 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Hover effect overlay */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}></div>
              </div>
            ))}
          </div>
        </FadeInSection>

        {/* CTA Section */}
        <FadeInSection className="mt-20">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-gradient-to-r from-blue-50 via-violet-50 to-blue-50 rounded-2xl p-8 md:p-12 border border-blue-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Start Your Project?
              </h3>
              <p className="text-gray-600 mb-6">
                Let&apos;s discuss how I can help transform your ideas into reality. Schedule a free consultation today.
              </p>
              <a
                href="#connect"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#connect')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 text-white font-semibold hover:from-blue-600 hover:to-violet-600 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Get in Touch
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
