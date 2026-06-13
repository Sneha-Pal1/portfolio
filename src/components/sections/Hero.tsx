"use client";

import { ArrowUpRight, ArrowDown, Download } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center overflow-hidden bg-bg-primary">
      {/* Background mountain SVG — right side */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute right-0 top-0 w-full md:w-[65%] h-full">
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 700 900"
            preserveAspectRatio="xMaxYMid slice"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="heroSkyGrad" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="0%"
                  stopColor="var(--sky-start)"
                  stopOpacity="0.4"
                />
                <stop
                  offset="100%"
                  stopColor="var(--sky-end)"
                  stopOpacity="0.6"
                />
              </linearGradient>
            </defs>
            <rect width="700" height="900" fill="url(#heroSkyGrad)" />
            <path
              d="M0,900 L0,500 L80,380 L180,460 L280,280 L380,380 L480,200 L580,320 L700,260 L700,900 Z"
              fill="rgba(var(--mountain-1),0.35)"
            />
            <path
              d="M0,900 L0,600 L120,480 L240,560 L360,420 L480,510 L600,440 L700,490 L700,900 Z"
              fill="rgba(var(--mountain-2),0.35)"
            />
            <path
              d="M0,900 L0,700 L150,590 L310,670 L480,580 L640,650 L700,620 L700,900 Z"
              fill="rgba(var(--mountain-3),0.3)"
            />
            <path
              d="M0,900 L0,790 L200,700 L400,760 L600,700 L700,730 L700,900 Z"
              fill="rgba(var(--mountain-4),0.25)"
            />
          </svg>
          {/* Fade from left */}
          <div className="absolute inset-0 bg-gradient-to-r from-bg-primary via-bg-primary/50 to-transparent" />
          {/* Fade from bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-bg-primary to-transparent" />
        </div>
      </div>

      {/* Main content grid */}
      <div className="relative z-10 max-w-[1400px] mx-auto w-full px-8 md:px-10 pt-40 pb-24 flex-1 flex flex-col justify-between">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full my-auto">
          {/* Left: Text content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="lg:col-span-7 flex flex-col"
          >
            {/* Available badge */}
            <div className="inline-flex items-center gap-2 border border-border-color rounded-full px-4 py-1.5 mb-8 w-fit bg-card-bg/25">
              <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] animate-pulse" />
              <span className="text-[11px] font-semibold tracking-[0.1em] text-text-secondary">
                Available for Sprints &amp; Roles
              </span>
            </div>

            {/* Headline */}
            <h1
              className="font-black leading-[0.95] tracking-[-0.04em] mb-8"
              style={{
                fontSize: "clamp(56px, 7vw, 90px)",
                letterSpacing: "-4px",
              }}
            >
              <span className="text-outline block">Full Stack</span>
              <span className="text-text-primary block">Developer &amp;</span>
              <span className="text-text-primary block">CS Student</span>
            </h1>

            <p className="text-[17px] md:text-[19px] leading-[1.6] text-text-secondary max-w-[540px] mb-8 font-medium">
              I am Sneha Pal, a Computer Science student, Building reliable
              software, solving real-world problems, and growing as a full-stack
              developer one project at a time.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="#work"
                className="inline-flex items-center gap-2 bg-accent-color text-text-primary text-[11px] font-black tracking-[0.12em] px-7 py-4 rounded-[4px] hover:brightness-95 transition-all uppercase"
              >
                View Projects <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
              {/* <Link
                href="/Sneha_Pal_Resume.pdf"
                className="inline-flex items-center gap-2 bg-bg-secondary border border-border-color text-text-primary text-[11px] font-black tracking-[0.12em] px-7 py-4 rounded-[4px] hover:brightness-97 transition-all uppercase"
              >
                Download Resume
              </Link> */}
              <a
                href="/Sneha_Pal_Resume.pdf"
                download
                className="inline-flex items-center gap-2 bg-bg-secondary border border-border-color text-text-primary text-[11px] font-black tracking-[0.12em] px-7 py-4 rounded-[4px] hover:brightness-97 transition-all uppercase"
              >
                <Download className="w-3.5 h-3.5" /> DOWNLOAD PDF
              </a>
            </div>
          </motion.div>

          {/* Right: Floating Info Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.2,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="lg:col-span-5 w-full flex justify-center lg:justify-end"
          >
            <div className="border border-border-color rounded-2xl p-6 md:p-8 bg-card-bg/60 backdrop-blur-md shadow-lg max-w-[420px] w-full relative overflow-hidden group hover:border-accent-color/30 transition-colors">
              {/* Graphic background lines */}
              <div className="absolute top-0 right-0 w-24 h-24 pointer-events-none opacity-[0.08]">
                <svg className="w-full h-full stroke-text-primary" fill="none">
                  <circle cx="96" cy="0" r="80" />
                  <circle cx="96" cy="0" r="60" />
                </svg>
              </div>

              <div className="flex items-center justify-between pb-4 border-b border-border-color/60 mb-6">
                <div>
                  <span className="text-[10px] font-black tracking-widest text-text-secondary uppercase">
                    SNEHA_PAL // SWE
                  </span>
                  <h3 className="text-[18px] font-black text-text-primary mt-0.5">
                    Console Summary
                  </h3>
                </div>
                <div className="w-2.5 h-2.5 rounded-full bg-accent-color animate-pulse" />
              </div>

              {/* Summary Items */}
              <div className="flex flex-col gap-5">
                <div>
                  <span className="text-[9px] font-black text-text-secondary tracking-widest uppercase block mb-1">
                    EDUCATION
                  </span>
                  <p className="text-[13px] font-bold text-text-primary">
                    B.Tech Computer Science
                  </p>
                  <p className="text-[11px] text-text-secondary font-medium">
                    Batch of 2023 — 2027
                  </p>
                </div>

                {/* <div>
                  <span className="text-[9px] font-black text-text-secondary tracking-widest uppercase block mb-1">
                    CORE EXPERTISE
                  </span>
                  <p className="text-[13px] font-bold text-text-primary">
                    NestJS, Next.js, FastAPI, PostgreSQL
                  </p>
                  <p className="text-[11px] text-text-secondary font-medium">
                    Languages: Python, TypeScript, C++
                  </p>
                </div> */}

                <div>
                  <span className="text-[9px] font-black text-text-secondary tracking-widest uppercase block mb-1">
                    CURRENT STATUS
                  </span>
                  <p className="text-[13px] font-bold text-text-primary">
                    AI/ML Intern @ IIIT Kalyani
                  </p>
                  <p className="text-[11px] text-text-secondary font-medium">
                    Building: Ignita Autonomous Sandbox
                  </p>
                </div>

                {/* Micro metrics */}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border-color/60 mt-2">
                  {/* <div>
                    <span className="text-[20px] font-black text-text-primary">
                      300+
                    </span>
                    <span className="text-[9px] font-bold text-text-secondary tracking-widest uppercase block mt-0.5">
                      DSA SOLVED
                    </span>
                  </div> */}
                  {/* <div>
                    <span className="text-[20px] font-black text-text-primary">
                      4+
                    </span>
                    <span className="text-[9px] font-bold text-text-secondary tracking-widest uppercase block mt-0.5">
                      INTERNSHIPS
                    </span>
                  </div> */}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="mt-auto flex items-center gap-2 text-text-secondary/40 pt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <ArrowDown className="w-4 h-4 animate-bounce" />
          <span className="text-[11px] font-semibold tracking-[0.12em] uppercase">
            Scroll to explore
          </span>
        </motion.div>
      </div>
    </section>
  );
}
