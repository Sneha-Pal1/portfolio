export interface Project {
  slug: string;
  num: string;
  title: string;
  tag: string;
  year: string;
  desc: string;
  tech: string[];
  overview: string;
  problem: string;
  solution: string;
  features: string[];
  github: string;
  live: string;
  backendHeavy: boolean;
  architecture: {
    title: string;
    description: string;
    nodes: { id: string; label: string; desc: string }[];
    edges: { from: string; to: string; label?: string }[];
  };
  screenshots: {
    title: string;
    caption: string;
    color: string;
  }[];
  challenges: string[];
}

export const projects: Project[] = [
  {
    slug: "ignita",
    num: "01",
    title: "Ignita",
    tag: "event aggregator platform",
    year: "2026",
    desc: "IGNITA is a full-stack event aggregator platform designed for college students to discover and explore tech events like hackathons, internships, coding fests, and workshops. ",
    tech: [
      "Nest.js",
      "Next.js",
      "PostgreSQL",
      "TypeORM",
      "JWT Authentication",
      "Google OAuth Verification",
      "TypeScript",
      "Tailwind CSS",
      "ShadCN UI",
    ],
    overview:
      "IGNITA is a modern event discovery and career growth platform designed for students, developers, and tech enthusiasts. It helps users discover hackathons, internships, coding contests, workshops, and other opportunities while providing personalized tracking, analytics, alerts, bookmarks, and LinkedIn post generation.",
    problem:
      "College students often miss valuable opportunities such as: Hackathons,Internships, Coding competitions, Tech events, Workshops and bootcamps, These opportunities are scattered across multiple platforms like LinkedIn, Devfolio, Unstop, websites, Discord communities, and social media. As a result: Students struggle to discover relevant events. Important deadlines are missed. There is no centralized platform to track saved opportunities. Students don't receive personalized reminders.Managing participation history becomes difficult.",
    solution:
      "Ignita is a centralized platform that brings together hackathons, internships, coding contests, and tech events in one place. It allows students to easily discover opportunities, save and organize events through bookmarks, set personalized alerts and reminders, receive timely notifications, and track their engagement through a dedicated dashboard. The platform also includes an admin panel for event management and analytics, making it easier to maintain and deliver relevant opportunities to students.",
    features: [
      "Event Aggregation - Discover hackathons, internships, coding contests, workshops, and tech events from a single platform.",
      "Advanced Filtering & Search - Find opportunities based on category, mode, and interests.",
      "Bookmark Management - Save and organize events for quick access later.",
      "Alerts & Notifications - Get reminders and updates for bookmarked opportunities and important deadlines.",
      "Authentication & Authorization - Secure login with Email/Password and Google OAuth, along with role-based access control.",
      "Analytics Dashboard - View platform insights, event statistics, and user activity trends.",
      "Admin Dashboard - Manage events, users, alerts, and platform content efficiently.",
      "LinkedIn Post Generator - Generate LinkedIn-ready posts to showcase event participation and achievements.",
      "Responsive UI - Optimized experience across desktop, tablet, and mobile devices.",
      "Real-Time Opportunity Tracking - Stay updated with the latest opportunities and activity notifications.",
    ],
    github: "https://github.com/Sneha-Pal1/Ignita-fullstack",
    live: "https://ignita.in/",
    backendHeavy: true,
    architecture: {
      title: "Ignita Multi-Agent AST Core Architecture",
      description:
        "How user queries map to planning agents, workspace code indexes, and the compilation/execution sandbox.",
      nodes: [
        {
          id: "1",
          label: "Next.js Frontend",
          desc: "User interface for browsing events, bookmarks, alerts, and analytics.",
        },
        {
          id: "2",
          label: "NestJS Backend",
          desc: "Handles authentication, events, bookmarks, alerts, and admin operations.",
        },
        {
          id: "3",
          label: "PostgreSQL Database",
          desc: "Stores users, events, bookmarks, notifications, and analytics data.",
        },
        {
          id: "4",
          label: "JWT Authentication",
          desc: "Secures protected routes with role-based access control.",
        },
        {
          id: "5",
          label: "Admin Dashboard",
          desc: "Manage events, users, analytics, and platform content.",
        },
      ],
      edges: [
        { from: "1", to: "2", label: "API Requests" },
        { from: "2", to: "3", label: "Store & Retrieve Data" },
        { from: "1", to: "4", label: "Login / Register" },
        { from: "4", to: "2", label: "JWT Validation" },
        { from: "5", to: "2", label: "Manage Platform" },
      ],
    },
    screenshots: [
      {
        title: "Events Dashboard",
        caption: "Browse hackathons, internships, and coding competitions.",
        color: "#10B981",
      },
      {
        title: "Admin Dashboard",
        caption: "Manage events, users, alerts, and analytics.",
        color: "#06B6D4",
      },
      {
        title: "Analytics Panel",
        caption: "Track platform growth, user engagement, and event activity.",
        color: "#8B5CF6",
      },
    ],
    challenges: [
      "Implementing JWT authentication, Google OAuth, and role-based access control for both users and admins.",
      "Building and integrating multiple modules (Events, Bookmarks, Alerts, Notifications, Analytics, and Admin Dashboard) while maintaining a clean NestJS architecture.",
      "Resolving TypeScript type mismatches and frontend-backend integration issues across a large Next.js codebase.",
      "Containerizing the application with Docker and debugging environment/configuration differences between local and Dockerized setups.",
      "Designing a scalable PostgreSQL database schema and managing relationships between users, events, bookmarks, and alerts.",
    ],
  },

  {
    slug: "bloom",
    num: "02",
    title: "Bloom",
    tag: "Women’s Health & Wellness Platform",
    year: "2025",
    desc: "Bloom is a self-care and mental wellness web app that helps users track their mood, follow gentle workout routines, and build personalized self-care habits. It offers a calming interface to reset, reflect, and rise—designed to promote emotional well-being and growth.",
    tech: [
      "Next.js",
      "NestJS",
      "TypeScript",
      "PostgreSQL",
      "Chart.js",
      "Tailwind CSS",
    ],
    overview:
      "Bloom is a comprehensive wellness companion designed specifically for women's health and well-being. From menstrual cycle tracking to personalized yoga routines, community support, and AI-powered insights, Bloom empowers women to understand their bodies, optimize their wellness, and connect with a supportive community.",
    problem:
      "Millions of women struggle to access reliable and personalized guidance for menstrual health, PCOS, mental wellness, and self-care. Existing solutions are fragmented, often providing generic or conflicting information. Social stigma and limited access to experts further prevent women from seeking timely support.",
    solution:
      "Bloom is a women-first wellness platform that brings together self-care routines, wellness tracking, expert consultations, digital resources, and curated wellness products into one trusted ecosystem.",
    features: [
      "Personalized Wellness Routines: Custom self-care, fitness, and mindfulness plans based on individual needs.",
      "Mood & Wellness Tracking: Track mood, habits, energy levels, and overall wellness progress.",
      "Women's Health Resources: Trusted information on PCOS, menstrual health, nutrition, mental well-being, and lifestyle management.",
      "Digital Wellness Store: Journals, planners, self-care guides, e-books, and printable wellness resources.",
      "Wellness Essentials Marketplace: Curated products including menstrual care, yoga accessories, herbal wellness products, and self-care essentials.",
      "Safe Community Support: A stigma-free space where women can learn, share experiences, and support each other.",
    ],
    github: "https://github.com/Sneha-Pal1/Bloom",
    live: "comming soon",
    backendHeavy: true,
    architecture: {
      title: "Bloom Wellness Platform Backend Flow",
      description:
        "Flow of user wellness tracking, authentication, personalized routines, expert consultations, and digital store management.",
      nodes: [
        {
          id: "1",
          label: "Bloom Web App",
          desc: "Users access wellness routines, mood tracking, and health resources.",
        },
        {
          id: "2",
          label: "Auth & User Service",
          desc: "Handles authentication, profiles, wellness preferences, and secure access.",
        },
        {
          id: "3",
          label: "Bloom API Server",
          desc: "Processes wellness data, routines, digital products, and consultation requests.",
        },
        {
          id: "4",
          label: "MongoDB Database",
          desc: "Stores users, wellness routines, mood logs, consultations, and digital products.",
        },
        {
          id: "5",
          label: "Expert Consultation Module",
          desc: "Manages appointments with gynecologists, therapists, and nutritionists.",
        },
      ],
      edges: [
        { from: "1", to: "2", label: "User Login & Registration" },
        { from: "2", to: "3", label: "Authenticated Requests" },
        { from: "3", to: "4", label: "Store Wellness Data" },
        { from: "3", to: "5", label: "Consultation Requests" },
        { from: "4", to: "1", label: "Personalized Dashboard" },
      ],
    },

    screenshots: [
      {
        title: "Personalized Wellness Dashboard",
        caption:
          "Track mood, habits, routines, and wellness progress through an intuitive dashboard.",
        color: "#D89AC8",
      },
      {
        title: "Digital Wellness Store",
        caption:
          "Browse journals, planners, self-care guides, and wellness essentials designed for women.",
        color: "#B794F4",
      },
    ],

    challenges: [
      "Designing a secure and scalable platform for handling sensitive women's health information while maintaining privacy, personalized experiences, and future expert consultation integration was a key challenge. The architecture was built with modular services and secure authentication to support long-term growth.",
    ],
  },
  {
    slug: "myprep",
    num: "03",
    title: "MyPrep",
    tag: "EDUCATION PLATFORM",
    year: "2026",
    desc: "A collaborative prep and testing ecosystem tailored for competitive Computer Science examinations.",
    tech: [
      "React",
      "Express",
      "Node.js",
      "MongoDB",
      "Tailwind CSS",
      "Socket.io",
    ],
    overview:
      "MyPrep is a live testing platform designed to help students prepare for CS placements and GATE exams. It offers synchronized group test sessions, detailed performance analytics, and community-driven doubt discussion boards.",
    problem:
      "Most test prep websites are isolating, lacking real-time peer comparisons, which reduces motivation and makes peer-to-peer discussions cumbersome.",
    solution:
      "MyPrep introduces synchronous testing lobbies where student cohorts start exams together and receive instant, question-by-question comparative breakdowns immediately after finishing.",
    features: [
      "Live Testing Lobbies: Real-time socket connections for synchronized test sessions.",
      "Granular Analytics: Performance breakdowns by topic (DSA, OS, DBMS) and speed.",
      "Interactive Discussion Boards: Nested threads with code highlight support.",
      "AI Study Planner: Automatically flags weak areas and suggests targets.",
    ],
    github: "https://github.com/snehapal/myprep",
    live: "https://my-prep-gilt.vercel.app/",
    backendHeavy: false,
    architecture: {
      title: "MyPrep Socket Lobbies Flow",
      description:
        "Client synchronization flow during multiplayer live test sessions.",
      nodes: [
        {
          id: "1",
          label: "Student Clients",
          desc: "Send answers and receive sync pings.",
        },
        {
          id: "2",
          label: "Socket.io Server",
          desc: "Coordinates timer counts and lobby states.",
        },
        {
          id: "3",
          label: "MongoDB Database",
          desc: "Stores question banks and student answers.",
        },
      ],
      edges: [
        { from: "1", to: "2", label: "Send option selected" },
        { from: "2", to: "1", label: "Sync timer ticks" },
        { from: "2", to: "3", label: "Save completed session" },
      ],
    },
    screenshots: [
      {
        title: "Test Interface",
        caption:
          "Minimalist, distraction-free screen with split-panel layout for code and questions.",
        color: "#E8A23A",
      },
      {
        title: "Leaderboard & Stats",
        caption:
          "Detailed graph showing accuracy vs speed compared to other participants.",
        color: "#191918",
      },
    ],
    challenges: [
      "Synchronizing timers across hundreds of concurrent socket connections without lagging the client was difficult. We implemented server-side authoritative clocks that emitted delta offsets to keep all interfaces strictly aligned.",
    ],
  },
  {
    slug: "grubbly",
    num: "04",
    title: "Grubbly",
    tag: "MERN FOOD DELIVERY APP",
    year: "2026",
    desc: "A full-stack MERN food delivery platform with multi-role access, real-time WebSocket order tracking, Leaflet maps, and online payment integration.",
    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.io",
      "Leaflet Maps",
      "Razorpay API",
    ],
    overview:
      "Grubbly is a comprehensive food delivery application connecting customers, kitchen vendors, and platform administrators. It unifies order management, coordinate address pinning, live courier location animations, and secure transaction handling into a single, optimized Vite-React deployment.",
    problem:
      "Managing separate admin and customer web hostings creates deployment complexity, while static delivery status pages provide poor visibility into order transit updates.",
    solution:
      "Consolidated customer storefront and partner portals into a single Vite deployment with role-based JWT navigation guards, and implemented real-time Socket.io timeline updates with Leaflet map tracking animations.",
    features: [
      "Multi-Role Auth & Redirects: Automatically routes vendors to partner dashboards and customers to shop fronts.",
      "Interactive Pinpoint Map: Pins exact delivery locations using OpenStreetMap and Nominatim reverse-geocoding.",
      "Live WebSocket Timeline: Broadcaster timeline status updates and animates rider courier movements in real-time.",
      "Secure payment gateway: Handles Razorpay checkout verified by backend HMAC-SHA256 signatures.",
    ],
    github: "https://github.com/Sneha-Pal1/Grubbly",
    live: "https://grubbly.vercel.app",
    backendHeavy: true,
    architecture: {
      title: "Grubbly WebSocket and Map Architecture",
      description:
        "How events flow through customer checkout, backend Socket.io channels, and live courier map tracking loops.",
      nodes: [
        {
          id: "1",
          label: "Customer Frontend",
          desc: "Pins address on Leaflet Map and triggers Razorpay checkout.",
        },
        {
          id: "2",
          label: "Express Backend & Socket.io",
          desc: "Verifies payment signatures, saves orders, and broadcasts status updates.",
        },
        {
          id: "3",
          label: "Vendor Dashboard",
          desc: "Updates order states (Processing, Out for Delivery, Delivered).",
        },
        {
          id: "4",
          label: "Live Tracking Timeline",
          desc: "Renders smooth rider movement along OpenStreetMap paths via WebSocket signals.",
        },
      ],
      edges: [
        { from: "1", to: "2", label: "Place order and payment" },
        { from: "3", to: "2", label: "Update order status" },
        { from: "2", to: "4", label: "Emit live status_update" },
      ],
    },
    screenshots: [
      {
        title: "Vendor Dashboard",
        caption:
          "Tracks active orders, daily item listings, and revenue metrics.",
        color: "#dc2f02",
      },
      {
        title: "Live Courier Tracking",
        caption:
          "Interactive map view displaying animated rider location updates.",
        color: "#1C1C1A",
      },
    ],
    challenges: [
      "Consolidating independent customer and admin portals into a single React bundle required dynamic routing layout guards. We implemented useLocation layout filters to isolate CSS grid frameworks and navigation headers, achieving compile success in under 4 seconds.",
    ],
  },

  {
    slug: "shelfsoul",
    num: "05",
    title: "ShelfSoul",
    tag: "BOOK CONCIERGE PLATFORM",
    year: "2024",
    desc: "A personalized cataloging tool and P2P book lending platform.",
    tech: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "SQLite",
      "Tailwind CSS",
      "OpenLibrary API",
    ],
    overview:
      "ShelfSoul is a community cataloging tool. It helps users index physical book libraries instantly via ISBN lookup, matches local readers for peer-to-peer borrows, and generates personalized reading logs.",
    problem:
      "Book enthusiasts find managing collections and coordinates for local loaning complicated, often resulting in unreturned books and unused collections.",
    solution:
      "ShelfSoul automates index creation, tracks loan lifetimes, sends reminder notifications, and maps nearby readers willing to swap books.",
    features: [
      "ISBN Scanner integration: Fetches rich cover and book metadata.",
      "Interactive Loans Ledger: Tracks book checkout states and due dates.",
      "Local Radius Search: Finds books available for swap within walking distance.",
      "Personalized Reviews Grid: Editorial layout showing reading logs.",
    ],
    github: "https://github.com/snehapal/shelfsoul",
    live: "https://shelfsoul.snehapal.dev",
    backendHeavy: false,
    architecture: {
      title: "ShelfSoul ISBN Sync Flow",
      description:
        "How book records are synced and P2P loan status transitions occur.",
      nodes: [
        {
          id: "1",
          label: "ISBN Lookup Trigger",
          desc: "Input ISBN code to import book meta.",
        },
        {
          id: "2",
          label: "OpenLibrary Sync Service",
          desc: "Resolves book title, author, and high-res cover image.",
        },
        {
          id: "3",
          label: "Prisma & SQLite",
          desc: "Stores book items linked to a user catalog.",
        },
      ],
      edges: [
        { from: "1", to: "2", label: "ISBN Request" },
        { from: "2", to: "3", label: "Persist metadata" },
      ],
    },
    screenshots: [
      {
        title: "Personal Bookshelf",
        caption:
          "Sleek card grid displaying high-res cover assets and lending statuses.",
        color: "#E8A23A",
      },
      {
        title: "Loaning Panel",
        caption: "Tracks loan agreements, borrow durations, and contact logs.",
        color: "#191918",
      },
    ],
    challenges: [
      "Standardizing metadata fields returned from external APIs, which are often incomplete, was complex. We built a data transformer layer that cleanses and normalizes external schemas before writing them to the SQLite store.",
    ],
  },
];
