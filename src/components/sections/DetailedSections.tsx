"use client";

import { motion } from "framer-motion";

const sections = [
  {
    label: "MODELS",
    title: "State of the art SLMs as tools for coding agents",
    bullets: [
      "Specialized models fine-tuned on code retrieval tasks",
      "Optimized for low-latency inference at scale",
      "Drop-in tool interface for any agent framework",
    ],
  },
  {
    label: "INFRA",
    title: "Source control designed for the models using it",
    bullets: [
      "Lightweight push/pull with no rate limits",
      "Branching semantics purpose-built for agent workflows",
      "Scales from solo projects to enterprise monorepos",
    ],
  },
];

function MountainImage({ label }: { label: string }) {
  return (
    <div className="w-full aspect-[16/9] rounded-2xl overflow-hidden relative bg-gradient-to-br from-[#e4e0d0] via-[#d0cab8] to-[#bdb49e]">
      <svg
        className="absolute bottom-0 left-0 w-full h-[80%]"
        viewBox="0 0 1200 500"
        preserveAspectRatio="xMidYMax slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id={`sky-${label}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#c8c0a8" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#a89880" stopOpacity="0.7" />
          </linearGradient>
        </defs>
        <path d="M0,500 L0,280 L100,180 L200,240 L350,100 L500,180 L650,60 L800,150 L950,80 L1100,160 L1200,120 L1200,500 Z" fill={`url(#sky-${label})`} />
        <path d="M0,500 L0,340 L150,240 L280,310 L430,190 L580,270 L730,180 L880,250 L1050,190 L1200,240 L1200,500 Z" fill="rgba(140,130,110,0.55)" />
        <path d="M0,500 L0,400 L180,300 L340,370 L520,270 L680,350 L860,290 L1040,360 L1200,310 L1200,500 Z" fill="rgba(120,110,90,0.5)" />
        <path d="M0,500 L0,440 L200,370 L400,420 L600,360 L800,410 L1000,370 L1200,400 L1200,500 Z" fill="rgba(100,90,72,0.45)" />
      </svg>
      {/* Horizontal scan-line overlay for texture */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.3) 2px, rgba(0,0,0,0.3) 3px)" }} />
      {/* Subtle vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[rgba(25,25,18,0.15)]" />
      {/* Section label watermark */}
      <div className="absolute bottom-6 right-6 text-[10px] font-black tracking-[0.2em] text-white/30 uppercase">{label}</div>
    </div>
  );
}

export default function DetailedSections() {
  return (
    <section className="w-full bg-[#FFFEF2]">
      {sections.map((s, i) => (
        <div
          key={i}
          className="border-t border-[rgba(25,25,24,0.08)] py-20 px-8 md:px-10"
        >
          <div className="max-w-[1400px] mx-auto flex flex-col gap-10">
            {/* Text header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col md:flex-row md:items-end gap-6 md:gap-16"
            >
              <div className="max-w-[560px]">
                <span className="text-[11px] font-black tracking-[0.18em] text-[rgba(25,25,24,0.4)] block mb-4 uppercase">
                  {s.label}
                </span>
                <h2 className="text-[40px] md:text-[48px] font-black tracking-[-0.04em] leading-[1.05]">
                  {s.title}
                </h2>
              </div>
              <ul className="flex flex-col gap-3 md:max-w-[360px]">
                {s.bullets.map((b, j) => (
                  <li key={j} className="flex items-start gap-2.5 text-[14px] text-[rgba(25,25,24,0.55)] leading-[1.6]">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-[rgba(25,25,24,0.35)] flex-shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <MountainImage label={s.label} />
            </motion.div>
          </div>
        </div>
      ))}
    </section>
  );
}
