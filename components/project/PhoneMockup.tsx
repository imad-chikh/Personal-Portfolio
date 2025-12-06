"use client";

type PhoneMockupProps = {
  image?: string;
  alt?: string;
  className?: string;
};

export default function PhoneMockup({ image = "/next.svg", alt = "app mockup", className = "" }: PhoneMockupProps) {
  return (
    <div className={`relative w-64 sm:w-72 md:w-80 lg:w-96 ${className}`} style={{ background: "transparent" }}>
      <div 
        className="relative mx-auto transform-gpu will-change-transform" 
        style={{ 
          background: "transparent",
          animation: "float 30s ease-in-out infinite"
        }}
      >
        <img 
          src={image} 
          alt={alt} 
          className="w-full h-auto object-contain rounded-3xl block"
          style={{ 
            display: "block",
            background: "transparent"
          }}
        />
      </div>

      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-12px) rotate(-0.5deg); }
          100% { transform: translateY(0px); }
        }
      `}</style>
    </div>
  );
}
