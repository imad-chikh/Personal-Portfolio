"use client";
import { ReactElement } from "react";
import {
  SiDocker,
  SiExpress,
  // SiAzuredevops, 
  SiFigma,
  SiFlutter,
  SiGithub,
  SiKotlin,
  SiMongodb,
  SiNodedotjs,
  SiNotion,
  SiSwift
} from "react-icons/si";
import { VscAzureDevops } from "react-icons/vsc";


type TechItem = {
  name: string;
  description: string;
  icon: ReactElement;
  iconColor: string;
};

type TechCategory = {
  title: string;
  items: TechItem[];
};

const techStack: TechCategory[] = [
  {
    title: "Frontend",
    items: [
      {
        name: "Flutter",
        description: "Cross-platform mobile development",
        icon: <SiFlutter />,
        iconColor: "bg-blue-500",
      },
      {
        name: "Kotlin",
        description: "Modern Android development",
        icon: <SiKotlin />,
        iconColor: "bg-purple-600",
      },
      {
        name: "Swift",
        description: "Native iOS development",
        icon: <SiSwift />,
        iconColor: "bg-orange-500",
      },
    ],
  },
  {
    title: "Backend",
    items: [
      {
        name: "Node.js",
        description: "JavaScript runtime for servers",
        icon: <SiNodedotjs />,
        iconColor: "bg-green-600",
      },
      {
        name: "Express",
        description: "Minimal framework for APIs",
        icon: <SiExpress />,
        iconColor: "bg-gray-800",
      },
      {
        name: "MongoDB",
        description: "Flexible NoSQL database system",
        icon: <SiMongodb />,
        iconColor: "bg-green-600",
      },
    ],
  },
  {
    title: "Tools & DevOps",
    items: [
      {
        name: "Git & GitHub",
        description: "Version control and collaboration",
        icon: <SiGithub />,
        iconColor: "bg-gray-800",
      },
      {
        name: "Docker",
        description: "Containers for isolated environments",
        icon: <SiDocker />,
        iconColor: "bg-blue-600",
      },
      {
        name: "Azure DevOps",
        description: "CI/CD and project management",
        icon: <VscAzureDevops />,
        iconColor: "bg-blue-500",
      },
    ],
  },
  {
    title: "Design & Workflow",
    items: [
      {
        name: "Figma",
        description: "Design and prototyping tool",
        icon: <SiFigma />,
        iconColor: "bg-purple-600",
      },
      {
        name: "Notion",
        description: "Planning and docs in one place",
        icon: <SiNotion />,
        iconColor: "bg-gray-800",
      },
    ],
  },
];

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-20 bg-white w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl mb-6 animate-fade-up">
            What I Use
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {techStack.map((category, categoryIndex) => (
            <div key={category.title} className="animate-fade-up" style={{ animationDelay: `${categoryIndex * 100}ms` }}>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{category.title}</h3>
              <div className="space-y-4">
                {category.items.map((item, itemIndex) => (
                  <div
                    key={item.name}
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                  >
                    <div
                      className={`w-12 h-12 rounded-lg ${item.iconColor} flex items-center justify-center text-white flex-shrink-0 shadow-sm`}
                    >
                      <span className="text-2xl">
                        {item.icon}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">{item.name}</h4>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
