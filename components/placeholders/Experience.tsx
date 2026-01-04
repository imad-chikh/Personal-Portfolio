"use client";

type ExperienceItem = {
  company: string;
  position: string;
  period: string;
  location: string;
  description: string;
  logo: string;
  technologies: string[];
};

const experiences: ExperienceItem[] = [
  {
    company: "CAMIO",
    position: "Mobile Application Developer",
    period: "June 2024 - Now",
    location: "Dover, Delaware - United States (Remote)",
    description: "Create functional, high-level, dynamic and reusable components based on mock-up given. Coordinated on team for QA, bug fixes, features and code refactoring.",
    logo: "/camio_icon.png",
    technologies: ["Flutter", "MongoDB", "Firebase", "Google Maps", "Git", "GitHub"],
  },
  {
    company: "DelivriLi",
    position: "Flutter Developer",
    period: "Dec 2023 - Now",
    location: "Medea, Algeria",
    description: "Create functional, high-level, dynamic and reusable components based on mock-up given using Next JS. Coordinated on team for QA, bug fixes, features and code refactoring.",
    logo: "/delivrili_icon.jpeg",
    technologies: ["Flutter", "Laravel", "Firebase", "Google Maps", "Git", "GitHub"],
  },

  {
    company: "Sonalgaze",
    position: "Intern",
    period: "Nov 2022 - Jun 2023",
    location: "Medea, Algeria",
    description: "Spent time as an intern at Sonalgaze. Learned about the software development process. Took an idea of the working in a company and how to work in a team.",
    logo: "/sonalgaze_icon.jpeg",
    technologies: [],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl mb-6 animate-fade-up">
            Experience
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            My professional journey in mobile development
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="space-y-0">
            {experiences.map((exp, index) => {
              const isFirst = index === 0;
              const isLast = index === experiences.length - 1;
              
              return (
                <div
                  key={`${exp.company}-${index}`}
                  className="relative flex items-start gap-8 animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Timeline Column */}
                  <div className="flex flex-col items-center relative" style={{ width: "80px" }}>
                    {/* Vertical line - top segment */}
                    {!isFirst && (
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-8 bg-gradient-to-b from-blue-400 to-blue-500"></div>
                    )}

                    {/* Node Container */}
                    <div className="relative z-10 flex items-center justify-center w-16 h-16">
                      {/* Animated pulse ring (only on active/current item) */}
                      {isFirst && (
                        <>
                          <div className="absolute inset-0 rounded-full bg-blue-400/20 animate-pulse-ring"></div>
                          <div className="absolute inset-0 rounded-full border-2 border-blue-400/40 animate-pulse-ring-border" style={{ animationDelay: "0.3s" }}></div>
                        </>
                      )}

                      {/* Icon Container */}
                      <div className="relative w-14 h-14 rounded-full bg-white flex items-center justify-center overflow-hidden shadow-md border-3 border-blue-500 z-20">
                        <img
                          src={exp.logo}
                          alt={`${exp.company} logo`}
                          className="w-8 h-8 object-contain"
                        />
                      </div>
                    </div>

                    {/* Vertical line - bottom segment (continuous) */}
                    {!isLast && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 w-1 h-40 bg-gradient-to-b from-blue-500 to-violet-500"></div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-8">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2 gap-4">
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900">
                          {exp.company}
                        </h3>
                        <p className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-violet-500">
                          {exp.position}
                        </p>
                      </div>
                      <div className="md:text-right flex-shrink-0">
                        <p className="text-sm font-medium text-gray-900">
                          {exp.period}
                        </p>
                        <p className="text-sm text-gray-500">
                          {exp.location}
                        </p>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Technologies */}
                    {exp.technologies.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-xs font-medium rounded-full bg-blue-50 text-blue-700 border border-blue-100 hover:bg-blue-100 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
