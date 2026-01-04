'use client';

import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <>
      <div className="min-h-screen bg-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-16">
            <Link
              href="/"
              className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-gray-900 mb-8 transition-colors"
            >
              <span className="mr-2">←</span> Back to Home
            </Link>

            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
                All Projects
              </h1>
              <p className="text-xl text-gray-600">
                Explore my complete portfolio of mobile apps, web applications, and digital experiences I've built.
              </p>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
