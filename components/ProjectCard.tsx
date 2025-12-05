import Link from "next/link";


export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/project/${project.slug}`}
      className="group bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-hover transition-all duration-300 border border-gray-100 flex flex-col"
    >
      <div className="relative h-64 overflow-hidden bg-gray-100">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
        />

        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
          <span className="text-white font-medium">
            View Case Study <span className="ml-2">→</span>
          </span>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center text-xl mr-4">
            <i className={`fas ${project.icon}`} />
          </div>
          <div>
            <h3 className="text-xl font-bold">{project.title}</h3>
            <span className="text-sm text-gray-500">{project.subtitle}</span>
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


type Project = {
  slug: string;
  image: string;
  title: string;
  icon?: string;
  subtitle?: string;
  short?: string;
  tags: string[];
};
