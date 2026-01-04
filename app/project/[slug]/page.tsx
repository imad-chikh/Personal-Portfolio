import CallToAction from "@/components/project/CallToAction";
import DevelopmentJourney from "@/components/project/DevelopmentJourney";
import FeatureSection from "@/components/project/FeatureSection";
import HeroSection from "@/components/project/HeroSection";
import ProjectNav from "@/components/project/ProjectNav";
import { projects } from "@/data/projects";

type Props = {
  params: Promise<{ slug: string }> | { slug: string };
};

export default async function Project({ params }: Props) {
  const resolved = (await params) as { slug: string };
  const project = projects.find((p) => p.slug === resolved.slug);

  if (!project) return <div className="p-8">Project not found</div>;

  const brandColor = project.brandColor || "#8B5CF6";
  const brandColorLight = project.brandColorLight || "#F3F4F6";

  return (
    <div className="pb-24 bg-gray-50">
      <ProjectNav title={project.title} brandColor={brandColor} />

      <main>
        <HeroSection 
          title={project.title} 
          subtitle={project.subtitle} 
          description={project.description || project.short} 
          image={project.icon || project.image}
          tags={project.tags}
          brandColor={brandColor}
          brandColorLight={brandColorLight}
          appStoreUrl={project.appStoreUrl}
          playStoreUrl={project.playStoreUrl}
        />

        {project.features && project.features.length > 0 && (
          <section id="features" className="bg-white">
            {project.features.map((feature, i) => (
              <FeatureSection 
                key={i} 
                title={feature.title} 
                description={feature.description}
                bullets={feature.bullets}
                image={feature.image || project.image} 
                reverse={i % 2 === 1}
                brandColor={brandColor}
              />
            ))}
          </section>
        )}

        {project.developmentJourney && (
          <section className="bg-gray-50">
            <DevelopmentJourney 
              title={project.developmentJourney.title}
              subtitle={project.developmentJourney.subtitle}
              overview={project.developmentJourney.overview}
              challenge={project.developmentJourney.challenge}
              solution={project.developmentJourney.solution}
              results={project.developmentJourney.results}
              brandColor={brandColor}
            />
          </section>
        )}

        <section className="bg-gray-50">
          <CallToAction
            title="Ready to Transform Your Productivity?"
            subtitle="Join thousands of users who have already discovered the power of AI-assisted productivity."
            brandColor={brandColor}
            appStoreUrl={project.appStoreUrl}
            playStoreUrl={project.playStoreUrl}
          />
        </section>
      </main>

      <footer className="py-10 text-sm text-neutral-500 text-center bg-gray-50">
        <p>Designed & Developed by Imad Chikh</p>
        <p className="mt-2">© {new Date().getFullYear()} Imad Chikh</p>
      </footer>
    </div>
  );
}
