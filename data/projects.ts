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

    image:"/solvgo-cover.png",
    icon: "/solvgo-logo.png",
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
      "/find_eat_business_cover.png",
    icon: "/find_eat_business_logo.png",
    tags: ["React Native", "Plaid API"],
    short:
      "A personal finance tracker with real-time bank syncing and spending insights.",
    brandColor: "#000000", // Blue
    brandColorLight: "#000000",
    brandColorDark: "#000000",
    appStoreUrl: "#",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.findeat.business",
    features: [
      {
        title: "Smart Budgeting",
        description: "Automatically categorize expenses and track spending patterns with AI-powered insights.",
        bullets: [
          "Automatic expense categorization",
          "Real-time spending alerts",
          "Customizable budget limits"
        ],
        image: "/find_eat_business_cover.png"
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
    slug: "find-eat",
    title: "Find Eat",
    subtitle: "Travel Companion",
    description: "A social travel app for planning trips, splitting expenses, and exploring local gems.",
    image:
      "/find_eat_cover_1.png",
    icon: "/find_eat_logo.png",
    tags: ["Flutter", "Google Maps"],
    short:
      "A social travel app for planning trips, splitting expenses, and exploring local gems.",
    brandColor: "#F97316", // Orange
    brandColorLight: "#FFF7ED",
    brandColorDark: "#EA580C",
    appStoreUrl: "#",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.findeat.client",
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
  {
    slug: "aes",
    title: "Audit Energetic Solutions",
    subtitle: "Field Service App",
    description: "Win more jobs and get \nmore jobs done right.",

    image:"/aes_cover.png",
    icon: "/aes_logo.png",
    tags: ["Flutter", "OpenAI API"],
    short:
      "Win more jobs and get \nmore jobs done right. \nmore jobs done right.",
    brandColor: "#001E41",
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
        image: "/aes_1.png"
      }
    ]
  },
  {
    slug: "find-eat-business-2",
    title: "Find Eat Business",
    subtitle: "Food & Beverage Marketplace",
    description: "A personal finance tracker with real-time bank syncing and spending insights.",
    image:
      "/find_eat_business_cover.png",
    icon: "/find_eat_business_logo.png",
    tags: ["React Native", "Plaid API"],
    short:
      "A personal finance tracker with real-time bank syncing and spending insights.",
    brandColor: "#000000",
    brandColorLight: "#000000",
    brandColorDark: "#000000",
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
        image: "/find_eat_business_cover.png"
      }
    ]
  },
  {
    slug: "find-eat-2",
    title: "Find Eat",
    subtitle: "Travel Companion",
    description: "A social travel app for planning trips, splitting expenses, and exploring local gems.",
    image:
      "/find_eat_cover_1.png",
    icon: "/find_eat_logo.png",
    tags: ["Flutter", "Google Maps"],
    short:
      "A social travel app for planning trips, splitting expenses, and exploring local gems.",
    brandColor: "#F97316",
    brandColorLight: "#FFF7ED",
    brandColorDark: "#EA580C",
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
      }
    ]
  },
  {
    slug: "solvgo-3",
    title: "SolvGo",
    subtitle: "Field Service App",
    description: "Win more jobs and get \nmore jobs done right.",
    image:"/solvgo-cover.png",
    icon: "/solvgo-logo.png",
    tags: ["Flutter", "OpenAI API"],
    short:
      "Win more jobs and get \nmore jobs done right. \nmore jobs done right.",
    brandColor: "#41AAAA",
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
      }
    ]
  },
  {
    slug: "find-eat-business-3",
    title: "Find Eat Business",
    subtitle: "Food & Beverage Marketplace",
    description: "A personal finance tracker with real-time bank syncing and spending insights.",
    image:
      "/find_eat_business_cover.png",
    icon: "/find_eat_business_logo.png",
    tags: ["React Native", "Plaid API"],
    short:
      "A personal finance tracker with real-time bank syncing and spending insights.",
    brandColor: "#000000",
    brandColorLight: "#000000",
    brandColorDark: "#000000",
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
        image: "/find_eat_business_cover.png"
      }
    ]
  },
  {
    slug: "find-eat-3",
    title: "Find Eat",
    subtitle: "Travel Companion",
    description: "A social travel app for planning trips, splitting expenses, and exploring local gems.",
    image:
      "/find_eat_cover_1.png",
    icon: "/find_eat_logo.png",
    tags: ["Flutter", "Google Maps"],
    short:
      "A social travel app for planning trips, splitting expenses, and exploring local gems.",
    brandColor: "#F97316",
    brandColorLight: "#FFF7ED",
    brandColorDark: "#EA580C",
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
      }
    ]
  },
  {
    slug: "solvgo-4",
    title: "SolvGo",
    subtitle: "Field Service App",
    description: "Win more jobs and get \nmore jobs done right.",
    image:"/solvgo-cover.png",
    icon: "/solvgo-logo.png",
    tags: ["Flutter", "OpenAI API"],
    short:
      "Win more jobs and get \nmore jobs done right. \nmore jobs done right.",
    brandColor: "#41AAAA",
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
      }
    ]
  },
  {
    slug: "find-eat-business-4",
    title: "Find Eat Business",
    subtitle: "Food & Beverage Marketplace",
    description: "A personal finance tracker with real-time bank syncing and spending insights.",
    image:
      "/find_eat_business_cover.png",
    icon: "/find_eat_business_logo.png",
    tags: ["React Native", "Plaid API"],
    short:
      "A personal finance tracker with real-time bank syncing and spending insights.",
    brandColor: "#000000",
    brandColorLight: "#000000",
    brandColorDark: "#000000",
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
        image: "/find_eat_business_cover.png"
      }
    ]
  },
];

