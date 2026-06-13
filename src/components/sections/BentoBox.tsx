"use client";

import { motion } from "framer-motion";

const items = [
  {
    num: "NO. 1",
    title: "SPECIALIZED MODELS",
    desc: "Purpose-built SLMs fine-tuned exclusively on coding agent tasks for maximum accuracy.",
    accent: true,
  },
  {
    num: "NO. 2",
    title: "FAST RETRIEVAL",
    desc: "Semantic search that indexes millions of code tokens and returns results in milliseconds.",
    accent: false,
  },
  {
    num: "NO. 3",
    title: "SMART MERGING",
    desc: "Universal code merge model that applies edits at 10,000 tok/s with zero conflicts.",
    accent: false,
  },
  {
    num: "NO. 4",
    title: "LOW LATENCY",
    desc: "Inference infrastructure optimized for real-time agent loops with sub-100ms responses.",
    accent: false,
  },
  {
    num: "NO. 5",
    title: "SIMPLE INTEGRATION",
    desc: "Drop-in API compatible with every major agent framework. Up and running in minutes.",
    accent: false,
  },
  {
    num: "NO. 6",
    title: "BUILT FOR RELIABILITY",
    desc: "99.9% uptime SLA, global edge deployment, and no rate limits on source control operations.",
    accent: false,
  },
];

export default function BentoBox() {
  return (
    <section className="w-full border-t border-[rgba(25,25,24,0.08)] bg-[#FFFEF2] py-24 px-8 md:px-10">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end gap-6 md:gap-20 mb-14"
        >
          <h2 className="text-[36px] md:text-[44px] font-black tracking-[-0.04em] leading-[1.05] max-w-[480px]">
            Building blocks for reliability and scale
          </h2>
          <p className="text-[14px] leading-[1.7] text-[rgba(25,25,24,0.55)] max-w-[380px] md:pb-1">
            Source control with out-of-the-box codebase retrieval, fast utility
            SLMs, and task-specific agents you can run on any repo.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[rgba(25,25,24,0.08)] border border-[rgba(25,25,24,0.08)] rounded-2xl overflow-hidden">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className={`flex flex-col justify-between p-8 min-h-[260px] transition-colors duration-200 group cursor-default ${
                item.accent
                  ? "bg-[#fcaa2d] hover:brightness-95"
                  : "bg-[#FFFEF2] hover:bg-[rgba(252,170,45,0.06)]"
              }`}
            >
              <span className={`text-[10px] font-black tracking-[0.2em] ${item.accent ? "text-[rgba(25,25,24,0.5)]" : "text-[rgba(25,25,24,0.35)]"}`}>
                {item.num}
              </span>
              <div>
                <h3 className={`text-[13px] font-black tracking-[0.1em] mb-3 ${item.accent ? "text-[#191918]" : "text-[#191918]"}`}>
                  {item.title}
                </h3>
                <p className={`text-[13px] leading-[1.65] ${item.accent ? "text-[rgba(25,25,24,0.65)]" : "text-[rgba(25,25,24,0.5)]"}`}>
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
