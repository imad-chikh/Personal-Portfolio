"use client";
import PhoneMockup from "./PhoneMockup";

type HeroSectionProps = {
  title: string;
  subtitle?: string;
  description?: string;
  image?: string;
  tags?: string[];
  brandColor?: string;
  brandColorLight?: string;
  appStoreUrl?: string;
  playStoreUrl?: string;
};

export default function HeroSection({ 
  title, 
  subtitle, 
  description, 
  image, 
  tags = [],
  brandColor = "#8B5CF6",
  brandColorLight = "#F3F4F6",
  appStoreUrl,
  playStoreUrl
}: HeroSectionProps) {
  return (
    <header className="relative py-16" style={{ backgroundColor: brandColor }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 text-white">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-tight mb-6">
              {title}
            </h1>

            {description && (
              <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl leading-relaxed">
                {description}
              </p>
            )}

            <div className="flex flex-wrap gap-3 mb-8">
              {appStoreUrl && (
                <a 
                  href={appStoreUrl} 
                  className="inline-flex items-center gap-2 rounded-full bg-white text-gray-900 px-6 py-3 font-semibold hover:opacity-90 transition-opacity shadow-lg"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.96-3.24-1.44-1.56-.62-2.53-1.02-3.9-1.72C2.79 15.25 3.51 7.59 9.05 5.5c1.95-.76 3.73-.52 5.28.55 1.26.87 2.16 1.9 3.42 2.78-.91.78-1.82 1.56-2.7 2.35-.54-.35-1.05-.72-1.6-1.03-1.1-.6-2.2-.99-3.57-.64-1.96.5-3.48 2.02-4.01 4.03-.6 2.2.19 4.4 1.92 5.79 1.05.85 2.2 1.35 3.57 1.72.88.24 1.72.4 2.56.4 1.2 0 2.4-.24 3.6-.72 1.5-.6 2.7-1.5 4.2-2.4-.9-.9-1.8-1.8-2.7-2.7z"/>
                  </svg>
                  Download on App Store
                </a>
              )}
              {playStoreUrl && (
                <a 
                  href={playStoreUrl} 
                  className="inline-flex items-center gap-2 rounded-full bg-white text-gray-900 px-6 py-3 font-semibold hover:opacity-90 transition-opacity shadow-lg"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                  Get on Google Play
                </a>
              )}
            </div>

            {tags.length > 0 && (
              <div className="flex flex-wrap gap-3">
                {tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 rounded-full text-sm font-medium"
                    style={{ 
                      backgroundColor: 'rgba(255, 255, 255, 0.2)',
                      color: 'white',
                      backdropFilter: 'blur(10px)'
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <PhoneMockup image={image} />
          </div>
        </div>
      </div>
    </header>
  );
}
