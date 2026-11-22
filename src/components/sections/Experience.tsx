"use client";

import { motion } from "framer-motion";

const jobs = [
  {
    num: "NO. 1",
    company: "Indian Institute of Information Technology Kalyani",
    role: "AI/ML Intern",
    periodDisplay: "Jun 2026 — Aug 2026",
    desc: "Developed an NLP pipeline for Sanskrit language processing, working on the Bhagavata Purana Sanskrit Morphology Dataset.",
    responsibilities: [
      "Developed a Sanskrit NLP pipeline involving data collection, preprocessing, and dataset preparation for part-of-speech tagging from the Bhagavata Purana.",
      "Fine-tuned and benchmarked multiple transformer models using LoRA, evaluating their performance for Sanskrit POS tagging with standard NLP evaluation metrics.",
    ],
    tags: ["Python", "NLP", "Transformers", "LoRA", "PyTorch", "Sanskrit POS Tagging"],
    logoLetter: "I",
    current: false,
  },
  {
    num: "NO. 2",
    company: "Government of Tripura",
    role: "Full-Stack Developer",
    periodDisplay: "Jul 2025 — Jan 2026",
    desc: "Built the Gram Samriddhi Portal — a KPI Monitoring Platform for the Government of Tripura, focused on public analytics and high-read performance.",
    responsibilities: [
      "Implemented multi-layer caching using Node.js in-memory cache and Nginx to reduce repeated database queries and improve performance of high-read public analytics.",
      "Configured production deployment with Nginx reverse proxy, TLS/HTTPS, security headers, and PM2 for Node.js process management.",
    ],
    tags: ["Node.js", "Nginx", "PM2", "TLS/HTTPS", "Caching", "PostgreSQL"],
    logoLetter: "G",
    current: false,
  },
  {
    num: "NO. 3",
    company: "National Informatics Centre (NIC)",
    role: "Backend Developer Intern",
    periodDisplay: "Jun 2025 — Aug 2025",
    desc: "Contributed to the Self-Help Group (SHG) Management System — a digital government platform for SHG operations in Agartala, India.",
    responsibilities: [
      "Developed RESTful APIs for a Self-Help Group (SHG) Management System using NestJS, TypeScript, TypeORM, and PostgreSQL, implementing CRUD operations for SHGs and member records.",
      "Implemented JWT-based authentication and role-based authorization, with a structured relational database design for secure and reliable management of SHG organizational and financial data.",
    ],
    tags: ["NestJS", "TypeScript", "TypeORM", "PostgreSQL", "JWT", "REST APIs"],
    logoLetter: "N",
    current: false,
  },
  {
    num: "NO. 4",
    company: "Directorate of Information Technology (DIT)",
    role: "Backend Developer Intern",
    periodDisplay: "June 2025 — July 2025",
    desc: "Worked on Taxpal Pro, a government-backed platform focused on digital tax filing and management.",
    responsibilities: [
      "Developed secure REST APIs",
      "Worked on MERN Application",
      "Improved scalability and maintainability",
      "Collaborated with the backend team",
    ],
    tags: ["MongoDB", "Express.js", "React", "Node.js", "REST APIs"],
    logoLetter: "D",
    current: false,
  },
  {
    num: "NO. 5",
    company: "NIELIT Agartala",
    role: "Android Development Intern",
    periodDisplay: "June 2024 — September 2024",
    desc: "Developed a real-time chatting application using Firebase.",
    responsibilities: [
      "Built real-time messaging functionality",
      "Integrated Firebase services",
    ],
    tags: ["Flutter", "Firebase", "Dart"],
    logoLetter: "M",
    current: false,
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="w-full border-t border-border-color bg-bg-primary py-24 px-8 md:px-10"
    >
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="text-[10px] font-black tracking-[0.2em] text-accent-color block mb-4 uppercase">
            EXPERIENCE
          </span>
          <h2 className="text-[40px] md:text-[52px] font-black tracking-[-0.04em] leading-[1.05] text-text-primary">
            Career Timeline &amp;
            <br />
            <span className="text-outline">Internships</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative flex flex-col">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-[200px] top-0 bottom-0 w-px bg-border-color hidden md:block" />

          {jobs.map((job, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col md:flex-row gap-6 md:gap-12 border-b border-border-color py-10 last:border-b-0"
            >
              {/* Period */}
              <div className="md:w-[200px] flex-shrink-0 flex md:flex-col md:items-end gap-3 md:gap-1 md:pr-10">
                <span
                  className={`text-[11px] font-black tracking-[0.1em] ${job.current ? "text-accent-color" : "text-text-secondary/60"}`}
                >
                  {job.periodDisplay}
                </span>
                {job.current && (
                  <span className="inline-flex items-center gap-1.5 text-[9px] font-black tracking-[0.12em] text-[#22c55e]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] animate-pulse" />
                    CURRENT SPRINT
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="flex-1 md:pl-10 relative">
                {/* Dot on timeline */}
                <div className="hidden md:block absolute left-[196px] mt-2 w-[9px] h-[9px] rounded-full border-2 border-border-color bg-bg-primary" />

                <div className="flex items-start gap-4 mb-4">
                  {/* Organization logo letter badge */}
                  <div className="w-10 h-10 border border-border-color bg-card-bg rounded-[8px] flex items-center justify-center font-black text-text-primary text-[14px] flex-shrink-0 shadow-sm">
                    {job.logoLetter}
                  </div>
                  <div>
                    <h3 className="text-[20px] md:text-[23px] font-black tracking-[-0.02em] text-text-primary leading-tight">
                      {job.company}
                    </h3>
                    <p className="text-[13px] text-text-secondary font-semibold mt-0.5">
                      {job.role}
                    </p>
                  </div>
                </div>

                <p className="text-[14px] leading-[1.7] text-text-secondary max-w-[620px] mb-4 font-medium">
                  {job.desc}
                </p>

                {/* Responsibilities list */}
                <ul className="list-disc list-inside text-[13px] text-text-secondary/80 font-medium mb-6 flex flex-col gap-1 max-w-[620px] pl-1">
                  {job.responsibilities.map((resp, idx) => (
                    <li key={idx} className="leading-relaxed">
                      {resp}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5">
                  {job.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[9px] font-bold tracking-[0.08em] border border-border-color bg-bg-secondary/40 px-2.5 py-1 rounded text-text-secondary uppercase"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
