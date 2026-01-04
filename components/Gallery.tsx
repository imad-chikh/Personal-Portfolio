import Link from "next/link";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function Gallery() {
  return (
    <section id="gallery" className="relative overflow-hidden py-20 bg-transparent w-full min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl mb-6">
            Portfolio 
          </h2>
         
          <h2 className="text-4xl font-extrabold mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-violet-500">Featured Applications</h2>

          <p className="mt-4 text-xl text-gray-500">
            A selection of my recent work in mobile development and UI design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(0, 3).map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="flex justify-center mt-16">
          <Link
            href="/projects"
            className="px-8 py-3 border border-gray-900 text-base font-medium rounded-full text-gray-900 bg-white hover:bg-gray-900 hover:text-white md:py-4 md:text-lg md:px-10 transition-all duration-300 shadow-sm hover:shadow-lg settle-card"
          >
            View All Projects <span className="ml-2">→</span>
          </Link>
        </div>
      </div>
 
    </section>
  );
}