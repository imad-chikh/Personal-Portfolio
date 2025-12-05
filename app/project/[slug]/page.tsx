import Link from "next/link";
import { projects } from "../../../data/projects";

type Props = {
  params: { slug: string };
};

export default function Project({ params }: Props) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) return <div className="p-8">Project not found</div>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <Link href="/" className="mb-8 flex items-center text-gray-500 hover:text-primary">
        ← Back to Portfolio
      </Link>

      <h1 className="text-4xl font-bold mb-2">{project.title}</h1>
      <p className="text-xl text-gray-500 mb-10">{project.subtitle}</p>

      <img src={project.image} alt={project.title} className="rounded-2xl shadow-lg" />

      {/* Add description, features, screenshots, etc. */}
    </div>
  );
}
