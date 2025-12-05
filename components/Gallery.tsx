import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-white h-screen w-full">
      <div className="max-w-7xl mx-auto px-4">
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
          {projects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
