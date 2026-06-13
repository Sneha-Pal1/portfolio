export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  tags: string[];
  readTime: string;
  featured?: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "nestjs-architecture-placements",
    title: "Getting Started with NestJS",
    excerpt:
      "A beginner-friendly overview of NestJS, exploring its modular architecture, dependency injection, and why it has become my preferred framework for building scalable backend applications.",
    date: "July 2, 2025",
    category: "NestJS",
    tags: ["NestJS", "Backend", "Web Development"],
    readTime: "6 min read",
    featured: true,
    content: `
# Getting Started with NestJS

As I started building larger backend applications, I realized that managing routes, services, authentication, and databases in plain Express.js could become difficult as projects grew. That's when I discovered NestJS.

NestJS is a progressive Node.js framework built with TypeScript. It provides a structured architecture inspired by Angular and helps developers build scalable and maintainable server-side applications.

One of the features I appreciate most is its modular architecture. Instead of placing all logic in a single file, NestJS encourages separating features into modules, controllers, and services. This makes projects easier to understand and maintain.

While learning NestJS, I explored concepts such as dependency injection, middleware, guards, interceptors, and custom decorators. I also integrated PostgreSQL using TypeORM and implemented JWT-based authentication systems.

NestJS has significantly improved the way I approach backend development. It allows me to focus on writing clean business logic while providing a solid foundation for scalable applications. Today, it is one of my preferred technologies for building APIs and backend services.

    `,
  },
  {
    slug: "Git and GitHub",
    title: "How Git and GitHub Improved My Workflow",
    excerpt:
      "Key patterns and strategies for mastering data structures and system design questions in upcoming software engineering recruitment cycles.",
    date: "May 28, 2026",
    category: "DSA",
    tags: ["Git", "GitHub", "Open SOurce", "Version Control", "Productivity"],
    readTime: "8 min read",
    featured: false,
    content: `
When I first started programming, I managed projects by creating multiple folders with names like "final", "final-v2", and "final-final". As projects became larger, this approach quickly became difficult to manage.

Learning Git changed everything.

Git allows developers to track changes, experiment safely, and maintain a complete history of their projects. Instead of worrying about breaking existing code, I can create branches, test new features, and merge them when they are ready.

GitHub takes collaboration even further by providing a platform to host repositories, review code, and manage projects. It has become my central hub for showcasing projects, tracking progress, and maintaining my portfolio.

Using Git and GitHub has taught me important software development practices such as commit management, version control, branching strategies, and pull requests. These skills are essential in professional development environments.

Today, every project I build starts with Git initialization. It helps me stay organized, track my progress, and maintain confidence while developing new features.
    `,
  },
  {
    slug: "building-ignita",
    title: "What I Learned from Building Full-Stack Project – Ignita",
    excerpt:
      "A technical dive into building an autonomous workspace agent. How we solved infinite loops and index lookups.",
    date: "May 15, 2026",
    category: "Projects",
    tags: ["Projects", "Backend", "Project Journey", "NestJS", "System Design"],
    readTime: "10 min read",
    featured: false,
    content: `
Building Ignita was one of the most valuable learning experiences in my software development journey. The project was designed to help students discover hackathons, internships, coding contests, and other career opportunities in one place.

When I started, I thought the biggest challenge would be writing code. However, I quickly realized that planning the application architecture was equally important. I spent time designing database schemas, API structures, authentication flows, and feature modules before implementing them.

Through Ignita, I learned how frontend and backend systems communicate. I worked with Next.js for the frontend and NestJS with PostgreSQL for the backend. Managing authentication, bookmarks, notifications, alerts, and event data taught me how real-world applications are structured.

One of the biggest lessons was understanding the importance of clean code and modular design. Features become easier to maintain when responsibilities are clearly separated across components and services.

The project also improved my debugging skills. Every error became an opportunity to learn something new about APIs, databases, deployment, or system design.

Ignita continues to evolve, but the experience of building it taught me much more than any tutorial ever could. It showed me how software engineering is not only about coding but also about problem-solving, planning, and continuous improvement.
    `,
  },
  {
    slug: "why-problem-solving-matters-in-software-development",
    title: "Why Problem Solving Matters in Software Development",
    excerpt:
      "Steps, resumes templates, and coding practice routines that helped me secure backend and full-stack placements.",
    date: "April 20, 2026",
    category: "Career",
    tags: [
      "Problem Solving",
      "DSA",
      "why-problem-solving-matters-in-software-development",
      "Programming",
    ],
    readTime: "7 min read",
    featured: false,
    content: `
Many beginners believe software development is primarily about learning programming languages. While languages are important, the real skill behind successful development is problem solving.

Every application is essentially a collection of problems that need solutions. Whether it is optimizing a database query, designing an authentication system, or fixing a bug, developers spend most of their time solving problems rather than simply writing code.

Practicing Data Structures and Algorithms has helped me strengthen my analytical thinking. It has taught me how to break complex challenges into smaller, manageable parts and evaluate different approaches before implementing a solution.

Problem-solving skills also improve debugging. Instead of randomly changing code, developers learn to identify root causes and systematically test solutions.

As I continue my journey in software development, I have realized that technologies change frequently, but strong problem-solving abilities remain valuable throughout a career. Learning frameworks is important, but learning how to think like an engineer is what truly makes a difference.

    `,
  },
];
