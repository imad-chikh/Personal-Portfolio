import { Project } from "@/data/projects";
import Link from "next/link";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/project/${project.slug}`}
      className="group bg-white rounded-2xl overflow-hidden shadow-soft transition-all duration-300 border border-gray-100 flex flex-col settle-card"
    >
      <div className="relative h-64 w-full overflow-hidden">
        {project.image && (
          <img
            src={project.image}
            alt={project.title}
            className={
              project.image.toLowerCase().endsWith(".svg")
                ? "w-full h-full object-containbg-white"
                : "absolute inset-0 w-[calc(100%+2px)] h-[calc(100%+2px)] -left-[1px] -top-[1px] object-cover group-hover:scale-105 transition-transform"
            }
          />
        )}

        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
          <span className="text-white font-medium">
        View Case Study <span className="ml-2">→</span>
          </span>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center mb-4">
          {project.icon && (
            <div className="w-12 h-12 rounded-xl bg-white-80 text-indigo-600 flex items-center justify-center text-xl mr-4 overflow-hidden">
              <img 
                src={project.icon} 
                alt={`${project.title} icon`} 
                className="w-full h-full object-contain p-1 rounded-xl" 
              />
            </div>
          )}
          <div>
            <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
            <span className="text-sm text-gray-600">{project.subtitle}</span>
          </div>
        </div>

        <p className="text-gray-600 mb-6 flex-1">{project.short}</p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.map((t: string) => (
            <span key={t} className="tag">
              {t}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
