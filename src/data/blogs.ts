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
    title: "Why NestJS is My Go-To Framework for Full Stack Placements",
    excerpt: "An in-depth look at how NestJS's structured architecture helps you write cleaner APIs and impress technical interviewers.",
    date: "June 2, 2026",
    category: "NestJS",
    tags: ["NestJS", "Backend", "Web Development"],
    readTime: "6 min read",
    featured: true,
    content: `
NestJS has quickly become the gold standard for backend development in TypeScript. For a computer science student preparing for placements, building projects with NestJS is one of the best ways to demonstrate an understanding of enterprise-level design patterns.

## The Problem with Express.js
While Express is incredibly popular, it is highly unopinionated. In large scale projects, this leads to a lack of structure. Files are organized differently by every developer, making codebase maintenance difficult. 

In a technical interview, when you show a project with flat Express routers, the interviewer might wonder if you understand software engineering patterns.

## The NestJS Solution
NestJS brings structure. It heavily borrows architectural patterns from Angular, utilizing decorators, modules, controllers, and services. It encourages Dependency Injection (DI) and modular development out of the box.

Here's why NestJS makes your portfolio stand out:
1. **Dependency Injection**: It handles object lifetimes and dependencies automatically. You can explain how you decouple database layers from business logic easily.
2. **TypeScript by Default**: Strong types mean fewer runtime exceptions. It shows you care about code safety.
3. **Built-in Pipes & Guards**: It provides structured validation (via class-validator) and authorization protocols.

By structuring projects like *Ignita* and *Bloom* using NestJS modules, I was able to easily write clean unit tests and design modular backend services.
    `
  },
  {
    slug: "demystifying-dsa-interviews",
    title: "Demystifying System Design & DSA Patterns in 2026",
    excerpt: "Key patterns and strategies for mastering data structures and system design questions in upcoming software engineering recruitment cycles.",
    date: "May 28, 2026",
    category: "DSA",
    tags: ["DSA", "System Design", "Career"],
    readTime: "8 min read",
    featured: false,
    content: `
Data Structures and Algorithms (DSA) remain the primary filter for software engineering interviews. However, memorizing solutions is a losing strategy. Instead, focusing on underlying patterns is key to solving unseen problems.

## Top Patterns to Master
1. **Sliding Window**: Used for tracking subarray matches (e.g. longest substring without repeating characters).
2. **Two Pointers**: Efficient space optimization (e.g. sorting in-place, finding pairs).
3. **Fast and Slow Pointers**: Detect cycle loops (e.g. Floyd's cycle detection).
4. **Monotonic Stack**: Next greater element queries.

## Connecting DSA to System Design
During placement interviews, top companies love to ask questions that bridge algorithms and architecture. For example, how do you design a rate limiter?
- **Algorithm**: Token Bucket or Sliding Window Log.
- **Data Structure**: Redis sorted set for tracking active requests.
- **System Component**: API Gateway middleware intercepts incoming calls.

Understanding these connections shows recruiters you can translate conceptual algorithms into scalable production solutions.
    `
  },
  {
    slug: "building-ignita-agentic-ai",
    title: "Building Ignita: Challenges in Creating Multi-Agent AI Environments",
    excerpt: "A technical dive into building an autonomous workspace agent. How we solved infinite loops and index lookups.",
    date: "May 15, 2026",
    category: "Projects",
    tags: ["Projects", "Backend", "AI / ML"],
    readTime: "10 min read",
    featured: false,
    content: `
Building *Ignita* was an eye-opener in asynchronous backend engineering and LLM planning constraints. Here is the technical breakdown of the challenges we solved.

## 1. The Loops Problem
When executing autonomous correction code loops, LLMs often attempt similar fixes repeatedly when faced with compiler tracebacks. 

We resolved this by injecting a state memory ledger. Before proposing a code edit, the Orchestrator checks if a similar diff has already failed. If so, it raises a penalty weight to force the model to try an alternate approach.

## 2. AST Context Parsing
LLMs perform poorly when given huge code files. To preserve token budgets, we implemented a custom Python parser that extracts the Abstract Syntax Tree (AST) of the workspace. It creates clean outline files detailing class signatures and import bindings. 

This enables the agent to search for imports and only load the specific files it needs to modify, reducing prompt tokens by 75%.
    `
  },
  {
    slug: "internship-preparation-tips",
    title: "How I Secured Internships at DIT and NIC: A Prep Guide",
    excerpt: "Steps, resumes templates, and coding practice routines that helped me secure backend and full-stack placements.",
    date: "April 20, 2026",
    category: "Career",
    tags: ["Career", "Interview Prep", "Placements"],
    readTime: "5 min read",
    featured: false,
    content: `
Securing internships at the National Informatics Centre (NIC) and the Directorate of Information Technology (DIT) required a balanced preparation strategy combining solid backend projects and core computer science fundamentals.

## Resume Strategy
1. **Lead with Projects**: Recruiters spend 6 seconds reviewing your resume. Make sure your top project includes a bold list of technologies and key metrics (e.g. "reduced DB query times by 40%").
2. **Emphasize Impact**: Don't just list what you did. Highlight the business/operational result.
3. **Format**: Keep a clean, single-column design.

## Core CS Prep
Aside from LeetCode, spend time review:
- **DBMS**: Database normalization (1NF, 2NF, 3NF), index structures (B-Trees), and ACID properties.
- **Computer Networks**: TCP handshakes, HTTP/HTTPS architectures, and DNS routing.
- **Operating Systems**: Thread scheduling, semaphore blocks, and page allocation policies.
    `
  }
];
