"use client";
import FadeInSection from "./FadeInSection";

type DevelopmentJourneyProps = {
  title: string;
  subtitle: string;
  overview: string;
  challenge?: {
    title: string;
    description: string;
  };
  solution?: {
    title: string;
    description: string;
  };
  results?: string;
  brandColor?: string;
};

export default function DevelopmentJourney({
  title,
  subtitle,
  overview,
  challenge,
  solution,
  results,
  brandColor = "#8B5CF6",
}: DevelopmentJourneyProps) {
  return (
    <FadeInSection className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">{title}</h2>
          <p className="text-xl text-gray-600 mb-8">{subtitle}</p>
          
          <p className="text-gray-700 mb-8 leading-relaxed text-lg">{overview}</p>

          {challenge && (
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">{challenge.title}</h3>
              <p className="text-gray-700 leading-relaxed">{challenge.description}</p>
            </div>
          )}

          {solution && (
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">{solution.title}</h3>
              <p className="text-gray-700 leading-relaxed">{solution.description}</p>
            </div>
          )}

          {results && (
            <p className="text-gray-700 leading-relaxed text-lg">{results}</p>
          )}
        </div>
      </div>
    </FadeInSection>
  );
}

