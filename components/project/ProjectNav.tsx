"use client";
import Link from "next/link";

type ProjectNavProps = {
  title: string;
  brandColor?: string;
};

export default function ProjectNav({ title, brandColor = "#8B5CF6" }: ProjectNavProps) {
  return (
    <div className="sticky top-4 z-40 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4 bg-white/60 backdrop-blur-md border border-transparent rounded-2xl px-4">
          <Link 
            href="/" 
            className="text-sm text-gray-600 hover:opacity-80 transition-opacity"
            style={{ color: brandColor }}
          >
            ← Back to Portfolio
          </Link>
          <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
          <div />
        </div>
      </div>
    </div>
  );
}
