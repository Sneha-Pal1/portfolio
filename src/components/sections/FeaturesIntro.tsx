"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "Repos",
    desc: "Source control designed for agents with lightweight push/pull operations and no rate limits.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="3" width="6" height="6" rx="1.5" stroke="#191918" strokeWidth="1.5"/>
        <rect x="11" y="3" width="6" height="6" rx="1.5" stroke="#191918" strokeWidth="1.5"/>
        <rect x="3" y="11" width="6" height="6" rx="1.5" stroke="#191918" strokeWidth="1.5"/>
        <rect x="11" y="11" width="6" height="6" rx="1.5" stroke="#191918" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    title: "Code Retrieval",
    desc: "Best in class semantic search that scales to large codebases out-of-the-box.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="9" cy="9" r="5.5" stroke="#191918" strokeWidth="1.5"/>
        <path d="M13.5 13.5L17 17" stroke="#191918" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Fast Apply",
    desc: "Universal code merging model that applies file edits at 10,000 tok/s.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 10H16M12 6L16 10L12 14" stroke="#191918" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

export default function FeaturesIntro() {
  return (
    <section className="w-full bg-[#FFFEF2] border-t border-[rgba(25,25,24,0.08)] py-24 px-8 md:px-10">
      <div className="max-w-[1400px] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[36px] font-black tracking-[-0.04em] leading-[1.1] mb-16 max-w-[400px]"
        >
          Everything you need for autonomous codegen
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col"
            >
              <div className="w-9 h-9 mb-5 flex items-center justify-center border border-[rgba(25,25,24,0.12)] rounded-[6px]">
                {f.icon}
              </div>
              <h3 className="text-[16px] font-black tracking-[-0.02em] mb-3">{f.title}</h3>
              <p className="text-[14px] leading-[1.7] text-[rgba(25,25,24,0.55)]">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
