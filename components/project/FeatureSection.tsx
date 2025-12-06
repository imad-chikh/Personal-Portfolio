"use client";
import FadeInSection from "./FadeInSection";
import PhoneMockup from "./PhoneMockup";

type FeatureSectionProps = {
  title: string;
  description: string;
  bullets: string[];
  image?: string;
  reverse?: boolean;
  brandColor?: string;
};

export default function FeatureSection({
  title,
  description,
  bullets,
  image,
  reverse = false,
  brandColor = "#8B5CF6",
}: FeatureSectionProps) {
  return (
    <FadeInSection className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> 
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${reverse ? 'lg:grid-flow-dense' : ''}`}>
          <div className={`flex justify-center ${reverse ? 'lg:col-start-2' : ''}`}>
            <PhoneMockup image={image} />
          </div>

          <div className={`${reverse ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">{title}</h3>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">{description}</p>
              <ul className="space-y-4">
                {bullets.map((bullet, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div 
                      className="w-2.5 h-2.5 rounded-full mt-2 flex-shrink-0" 
                      style={{ backgroundColor: brandColor }}
                    />
                    <div className="text-gray-700 leading-relaxed">{bullet}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </FadeInSection>
  );
}
