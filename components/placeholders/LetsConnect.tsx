"use client";
import FadeInSection from "@/components/project/FadeInSection";

export default function LetsConnect() {
  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/imad-eddine-chikh-133795218/",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      color: "from-blue-600 to-blue-700",
    },
    {
      name: "GitHub",
      url: "https://github.com/imad-chikh",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
        </svg>
      ),
      color: "from-gray-700 to-gray-900",
    },
    {
      name: "Calendly",
      url: "https://calendly.com/imadedinchikh/let-s-talk-30-min",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      color: "from-violet-500 to-violet-600",
    },
  ];

  return (
    <section id="connect" className="relative py-20 lg:py-32 bg-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-violet-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeInSection>
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-medium mb-6 border border-blue-100 animate-fade-up">
              <span className="w-2 h-2 rounded-full bg-blue-500 mr-2 animate-pulse" />
              Let&apos;s work together
            </div>
            
            <h2 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl mb-6 animate-fade-up animation-delay-150">
              Let&apos;s <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-violet-500">Connect</span>
            </h2>
            
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 mb-4 animate-fade-up animation-delay-300">
              I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <p className="text-lg text-gray-400 animate-fade-up animation-delay-300">
              Feel free to reach out through any of the channels below.
            </p>
          </div>
        </FadeInSection>

        <FadeInSection className="mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {socialLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 settle-card animate-fade-up"
                style={{ animationDelay: `${450 + index * 150}ms` }}
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${link.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                  {link.icon}
                </div>
                <h3 className="text-center font-semibold text-gray-900 text-lg mb-2">
                  {link.name}
                </h3>
                <p className="text-center text-sm text-gray-500 group-hover:text-gray-700 transition-colors">
                  {link.name === "Calendly" ? "Schedule a meeting" : `Visit my ${link.name}`}
                </p>
                
                {/* Hover effect overlay */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </a>
            ))}
          </div>
        </FadeInSection>

        <FadeInSection className="mt-16">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-gradient-to-r from-blue-50 to-violet-50 rounded-2xl p-8 md:p-12 border border-blue-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Prefer a direct message?
              </h3>
              <p className="text-gray-600 mb-6">
                Drop me a line and I&apos;ll get back to you as soon as possible.
              </p>
              <a
                href="mailto:imadedinchikh@gmail.com"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 text-white font-semibold hover:from-blue-600 hover:to-violet-600 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 btn-hero"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Send an Email
              </a>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
