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
    tag: "AI / ML PLATFORM",
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
    live: "https://ignita.snehapal.dev",
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
    tag: "FINTECH WEB APP",
    year: "2025",
    desc: "A clean, data-driven personal wealth advisor and investment tracker designed for millennials.",
    tech: [
      "Next.js",
      "NestJS",
      "TypeScript",
      "PostgreSQL",
      "Chart.js",
      "Tailwind CSS",
    ],
    overview:
      "Bloom is a financial management platform providing aggregate views of portfolios, savings, and investments. It automates goal tracking and offers personalized rebalancing tips based on portfolio volatility.",
    problem:
      "Millennials struggle with split financial records across micro-investing apps, standard banks, and credit accounts, leading to a fragmented understanding of net worth and long-term targets.",
    solution:
      "Bloom consolidates all accounts securely, providing visual performance charts, projection curves, and intelligent recommendations to help users optimize asset allocation.",
    features: [
      "Aggregated Wealth Tracker: Real-time sync with major accounts.",
      "Personalized Asset Allocator: Goal-based portfolio suggestions.",
      "Interactive Projections: Live adjustment curves for interest, savings rates, and inflation.",
      "Secure Encrypted Vaults: Bank-grade database hashing and JWT-based auth.",
    ],
    github: "https://github.com/snehapal/bloom",
    live: "https://bloom.snehapal.dev",
    backendHeavy: true,
    architecture: {
      title: "Bloom Aggregator Backend Flow",
      description:
        "Flow of financial institution syncs, secure API gateway, data processing queue, and dashboard visualizer.",
      nodes: [
        {
          id: "1",
          label: "Plaid / Banking API",
          desc: "Pulls investment and balances data dynamically.",
        },
        {
          id: "2",
          label: "Worker Queue",
          desc: "Processes ledger records and calculates allocations asynchronously.",
        },
        {
          id: "3",
          label: "NestJS core API",
          desc: "Calculates interest yields and asset volatility values.",
        },
        {
          id: "4",
          label: "Next.js Dashboard",
          desc: "Renders interactive SVG charts and goal cards.",
        },
      ],
      edges: [
        { from: "1", to: "2", label: "Webhook updates" },
        { from: "2", to: "3", label: "Store ledger records" },
        { from: "3", to: "4", label: "Serve unified data" },
      ],
    },
    screenshots: [
      {
        title: "Aggregated Portfolio View",
        caption:
          "Displays asset allocation percentages with dynamic interactive charts.",
        color: "#E8A23A",
      },
      {
        title: "Retirement Calculator",
        caption:
          "Interactive sliders showing wealth growth based on compounding intervals.",
        color: "#1C1C1A",
      },
    ],
    challenges: [
      "Managing rate-limiting and connection dropouts from banking APIs was a primary obstacle. We designed an event-driven worker queue with exponential backoff retries to ensure accounts updated smoothly in the background without locking user requests.",
    ],
  },
  {
    slug: "myprep",
    num: "03",
    title: "MyPrep",
    tag: "EDUCATION PLATFORM",
    year: "2025",
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
    live: "https://myprep.snehapal.dev",
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
    tag: "LOGISTICS WEB APP",
    year: "2024",
    desc: "A hyper-local delivery dashboard optimization system connecting local kitchens with students.",
    tech: [
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "Google Maps API",
      "Tailwind CSS",
    ],
    overview:
      "Grubbly optimizes local delivery routes and connects micro-kitchens around campus. It incorporates smart batching to route multiple deliveries on a single trip, lowering fees for students and boosting kitchen profits.",
    problem:
      "Ordering from multiple local home-cooks around campus incurs high delivery fees for students due to single-order dispatch cycles.",
    solution:
      "Grubbly groups orders by geographical blocks and dispatch windows, enabling couriers to deliver up to 5 orders in a single, optimized circular loop.",
    features: [
      "Geographical Batching Engine: Groups order dispatches by dorm blocks.",
      "Live Courier Map: Shows real-time delivery tracking utilizing geolocation.",
      "Merchant Portal: Allows local home-cooks to update daily menus instantly.",
      "Instant Micro-payments: Fast, secure transaction handling.",
    ],
    github: "https://github.com/snehapal/grubbly",
    live: "https://grubbly.snehapal.dev",
    backendHeavy: true,
    architecture: {
      title: "Grubbly Dynamic Routing Architecture",
      description:
        "How order events flow through coordinate lookup, spatial clustering, and the driver routing gateway.",
      nodes: [
        {
          id: "1",
          label: "Customer App",
          desc: "Places orders with geo-coordinates.",
        },
        {
          id: "2",
          label: "Spatial Database (PostGIS)",
          desc: "Groups orders into geographical clusters.",
        },
        {
          id: "3",
          label: "Routing Engine (OSRM)",
          desc: "Calculates optimized circular routes for couriers.",
        },
        {
          id: "4",
          label: "Driver Mobile Web App",
          desc: "Receives step-by-step navigation cues.",
        },
      ],
      edges: [
        { from: "1", to: "2", label: "Send order" },
        { from: "2", to: "3", label: "Calculate batches" },
        { from: "3", to: "4", label: "Push navigation path" },
      ],
    },
    screenshots: [
      {
        title: "Merchant Dashboard",
        caption: "Tracks active orders, cook statuses, and revenue statistics.",
        color: "#E8A23A",
      },
      {
        title: "Driver Route Tracker",
        caption: "Interactive map view displaying batch drop points.",
        color: "#1C1C1A",
      },
    ],
    challenges: [
      "Handling sudden spikes in driver supply/demand at meal hours led to latency in route calculations. We implemented PostGIS spatial caching to pre-compute delivery zones, dropping map query times to under 50ms.",
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
