"use client";
import Link from "next/link";
import FadeInSection from "./FadeInSection";

type CallToActionProps = {
  title: string;
  subtitle: string;
  brandColor?: string;
  appStoreUrl?: string;
  playStoreUrl?: string;
};

export default function CallToAction({
  title,
  subtitle,
  brandColor = "#8B5CF6",
  appStoreUrl,
  playStoreUrl,
}: CallToActionProps) {
  return (
    <FadeInSection className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className="rounded-2xl p-8 md:p-12 text-center shadow-lg"
          style={{ backgroundColor: brandColor }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">{subtitle}</p>
          
          <div className="flex flex-wrap justify-center gap-4">
            {appStoreUrl && (
              <a 
                href={appStoreUrl} 
                className="inline-flex items-center gap-2 rounded-full bg-white text-gray-900 px-6 py-3 font-semibold hover:opacity-90 transition-opacity shadow-lg"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.96-3.24-1.44-1.56-.62-2.53-1.02-3.9-1.72C2.79 15.25 3.51 7.59 9.05 5.5c1.95-.76 3.73-.52 5.28.55 1.26.87 2.16 1.9 3.42 2.78-.91.78-1.82 1.56-2.7 2.35-.54-.35-1.05-.72-1.6-1.03-1.1-.6-2.2-.99-3.57-.64-1.96.5-3.48 2.02-4.01 4.03-.6 2.2.19 4.4 1.92 5.79 1.05.85 2.2 1.35 3.57 1.72.88.24 1.72.4 2.56.4 1.2 0 2.4-.24 3.6-.72 1.5-.6 2.7-1.5 4.2-2.4-.9-.9-1.8-1.8-2.7-2.7z"/>
                </svg>
                Download Now
              </a>
            )}
            <Link 
              href="/"
              className="inline-flex items-center rounded-full border-2 border-white text-white px-6 py-3 font-semibold hover:bg-white/10 transition-colors"
            >
              View More Projects
            </Link>
          </div>
        </div>
      </div>
    </FadeInSection>
  );
}

