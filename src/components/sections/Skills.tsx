"use client";

import { motion } from "framer-motion";

const categories = [
  {
    label: "LANGUAGES",
    items: ["Python", "TypeScript", "JavaScript", "C++", "SQL", "Dart"],
  },
  {
    label: "BACKEND CORE",
    items: ["NestJS", "Node.js", "Express", "FastAPI", "REST APIs", "GraphQL"],
  },
  {
    label: "FRONTEND & MOBILE",
    items: ["Next.js", "React", "Tailwind CSS", "Flutter", "Framer Motion", "HTML/CSS"],
  },
  {
    label: "TOOLS & DATABASES",
    items: ["PostgreSQL", "MongoDB", "SQLite", "Git", "Docker", "Firebase"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="w-full border-t border-border-color bg-bg-primary py-24 px-8 md:px-10">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14"
        >
          <div>
            <span className="text-[10px] font-black tracking-[0.2em] text-accent-color block mb-4 uppercase">SKILLS &amp; STACK</span>
            <h2 className="text-[40px] md:text-[52px] font-black tracking-[-0.04em] leading-[1.05] text-text-primary">
              Core Tech &amp;<br />
              <span className="text-outline">Competencies</span>
            </h2>
          </div>
          <p className="text-[14px] leading-[1.7] text-text-secondary max-w-[340px] md:pb-1 font-medium">
            Solid foundation in languages, backend frameworks, relational databases, and dynamic web architectures.
          </p>
        </motion.div>

        {/* Grid of skill categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border-color border border-border-color rounded-2xl overflow-hidden shadow-sm">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card-bg p-8 hover:bg-bg-secondary/20 transition-colors"
            >
              <span className="text-[10px] font-black tracking-[0.2em] text-text-secondary block mb-6">
                {cat.label}
              </span>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item, j) => (
                  <motion.span
                    key={item}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.05 + j * 0.04 }}
                    className={`text-[12px] font-bold px-3.5 py-2 rounded transition-colors cursor-default ${
                      j === 0
                        ? "bg-accent-color text-text-primary"
                        : "bg-bg-secondary text-text-primary/80 hover:bg-border-color/30"
                    }`}
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
