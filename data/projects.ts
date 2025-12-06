export type Project = {
  slug: string;
  title: string;
  subtitle?: string;
  description: string;
  image?: string;
  icon?: string;
  tags: string[];
  short: string;
  brandColor: string; // Primary brand color (hex)
  brandColorLight?: string; // Lighter variant for backgrounds
  brandColorDark?: string; // Darker variant for text
  appStoreUrl?: string;
  playStoreUrl?: string;
  features?: Array<{
    title: string;
    description: string;
    bullets: string[];
    image?: string;
  }>;
  developmentJourney?: {
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
  };
};

export const projects: Project[] = [
  {
    slug: "solvgo",
    title: "SolvGo",
    subtitle: "Field Service App",
    description: "Win more jobs and get \nmore jobs done right.",

    image:
      "https://app.dev.solvgo.com/_ipx/s_232x64/images/logo.svg",
    icon: "",
    // icon: "/solvgo-w-logo.png",
    tags: ["Flutter", "OpenAI API"],
    short:
      "Win more jobs and get \nmore jobs done right. \nmore jobs done right.",
    brandColor: "#41AAAA", // Purple
    brandColorLight: "#F3F4F6",
    brandColorDark: "#6D28D9",
    appStoreUrl: "#",
    playStoreUrl: "#",
    features: [
      {
        title: "Intelligent Task Automation",
        description: "Automates repetitive tasks with AI-driven suggestions, saving time and improving focus.",
        bullets: [
          "High performance and smooth animations across devices",
          "Accessible and polished UI patterns with thoughtful UX",
          "Real-time sync across all your devices"
        ],
        image: "/Get started-portrait.png"
      },
      {
        title: "Real-time Insights",
        description: "Real-time analytics and in-app recommendations to increase user engagement and retention.",
        bullets: [
          "Comprehensive analytics dashboard",
          "Personalized recommendations based on usage",
          "Export reports in multiple formats"
        ],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
      },
      {
        title: "Offline-first Experience",
        description: "Robust caching and sync strategies ensure the app feels fast and reliable even offline.",
        bullets: [
          "Works seamlessly without internet connection",
          "Automatic sync when connection is restored",
          "Conflict resolution for simultaneous edits"
        ],
        image: "https://app.dev.solvgo.com/_ipx/s_232x64/images/logo.svg"
      }
    ],
    developmentJourney: {
      title: "The Development Journey",
      subtitle: "From concept to reality: Building an AI-powered productivity app",
      overview: "Building SolvGo was a 9-month journey that transformed how we think about productivity apps. The challenge wasn't just building features, but creating an experience that truly understands and adapts to each user's unique workflow.",
      challenge: {
        title: "The Challenge",
        description: "Integrating OpenAI's GPT-4 API presented significant hurdles. We faced UI stuttering during API calls, high latency that degraded user experience, and mounting API costs that threatened the project's viability."
      },
      solution: {
        title: "The Solution",
        description: "We implemented a sophisticated local caching layer and offloaded heavy computations to Firebase Cloud Functions. This architecture delivered a zero-latency experience while dramatically reducing API costs."
      },
      results: "Today, SolvGo serves over 50,000 active users, with metrics showing a 40% increase in daily productivity and significantly reduced stress levels among our user base."
    }
  },
  {
    slug: "find-eat-business",
    title: "Find Eat Business",
    subtitle: "Food & Beverage Marketplace",
    description: "A personal finance tracker with real-time bank syncing and spending insights.",
    image:
      "https://lh3.googleusercontent.com/0HwXi3XvZBPtXbVGWiIoABCiE6kjED2ZZY5aqhhYUUqiAslbb9HZW72HSq7Yi_L-mv3n",
    icon: "https://play-lh.googleusercontent.com/PkI1euwXHh5AhgAHzPc1clKgVKcEWUJwyEizqiumF5kAtQOj1dwYgxFHqModI_yFXxY=w480-h960-rw",
    tags: ["React Native", "Plaid API"],
    short:
      "A personal finance tracker with real-time bank syncing and spending insights.",
    brandColor: "#3B82F6", // Blue
    brandColorLight: "#EFF6FF",
    brandColorDark: "#1E40AF",
    appStoreUrl: "#",
    playStoreUrl: "#",
    features: [
      {
        title: "Smart Budgeting",
        description: "Automatically categorize expenses and track spending patterns with AI-powered insights.",
        bullets: [
          "Automatic expense categorization",
          "Real-time spending alerts",
          "Customizable budget limits"
        ],
        image: "https://lh3.googleusercontent.com/0HwXi3XvZBPtXbVGWiIoABCiE6kjED2ZZY5aqhhYUUqiAslbb9HZW72HSq7Yi_L-mv3n"
      },
      {
        title: "Bank Integration",
        description: "Securely connect your bank accounts for real-time transaction tracking and analysis.",
        bullets: [
          "256-bit encryption for all connections",
          "Support for 10,000+ financial institutions",
          "Real-time transaction updates"
        ],
        image: "https://lh3.googleusercontent.com/0HwXi3XvZBPtXbVGWiIoABCiE6kjED2ZZY5aqhhYUUqiAslbb9HZW72HSq7Yi_L-mv3n"
      },
      {
        title: "Financial Insights",
        description: "Get personalized recommendations to improve your financial health and reach your goals faster.",
        bullets: [
          "Monthly spending reports",
          "Goal tracking and milestones",
          "Personalized savings recommendations"
        ],
        image: "https://lh3.googleusercontent.com/0HwXi3XvZBPtXbVGWiIoABCiE6kjED2ZZY5aqhhYUUqiAslbb9HZW72HSq7Yi_L-mv3n"
      }
    ]
  },
  {
    slug: "travelmate",
    title: "TravelMate",
    subtitle: "Travel Companion",
    description: "A social travel app for planning trips, splitting expenses, and exploring local gems.",
    image:
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80",
    icon: "fa-plane-departure",
    tags: ["Flutter", "Google Maps"],
    short:
      "A social travel app for planning trips, splitting expenses, and exploring local gems.",
    brandColor: "#10B981", // Green
    brandColorLight: "#ECFDF5",
    brandColorDark: "#059669",
    appStoreUrl: "#",
    playStoreUrl: "#",
    features: [
      {
        title: "Trip Planning",
        description: "Collaborate with friends to plan the perfect trip with shared itineraries and real-time updates.",
        bullets: [
          "Shared trip boards",
          "Real-time collaboration",
          "Smart itinerary suggestions"
        ],
        image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "Expense Splitting",
        description: "Easily split expenses with your travel companions and track who owes what in real-time.",
        bullets: [
          "Automatic expense splitting",
          "Multiple payment methods",
          "Settlement tracking"
        ],
        image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "Local Discovery",
        description: "Discover hidden gems and local favorites recommended by travelers who've been there.",
        bullets: [
          "Curated local recommendations",
          "Offline maps and guides",
          "Community reviews and ratings"
        ],
        image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80"
      }
    ]
  },
];

