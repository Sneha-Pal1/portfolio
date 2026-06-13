"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Cpu, GitBranch, RefreshCw, Layers } from "lucide-react";
import Link from "next/link";

export default function CurrentlyBuilding() {
  return (
    <section className="w-full border-t border-border-color bg-bg-primary py-24 px-8 md:px-10 relative overflow-hidden">
      {/* Background visual outlines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] select-none">
        <svg className="w-full h-full stroke-text-primary" fill="none">
          <pattern id="gridPattern" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#gridPattern)" />
        </svg>
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14"
        >
          <div>
            <span className="text-[10px] font-black tracking-[0.2em] text-accent-color block mb-4 uppercase">CURRENTLY BUILDING</span>
            <h2 className="text-[40px] md:text-[52px] font-black tracking-[-0.04em] leading-[1.05] text-text-primary">
              Active Project &amp;<br />
              <span className="text-outline">Live Sprints</span>
            </h2>
          </div>
          <p className="text-[14px] leading-[1.7] text-text-secondary max-w-[340px] md:pb-1 font-medium">
            A real-time window into my local machine. Currently crafting and optimizing autonomous coder agent networks.
          </p>
        </motion.div>

        {/* Highlight Card */}
        <div className="border border-border-color rounded-2xl overflow-hidden bg-card-bg shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left: Project Stats & Info */}
            <div className="lg:col-span-7 p-8 md:p-12 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-border-color">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="bg-accent-color/10 text-accent-color text-[9px] font-black tracking-widest px-2.5 py-1 rounded-full uppercase">
                    SPRINT CYCLE 04
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] animate-pulse" />
                  <span className="text-[10px] font-bold text-text-secondary uppercase">ACTIVE RUNNING</span>
                </div>

                <h3 className="text-[28px] md:text-[34px] font-black tracking-tight text-text-primary mb-4">
                  Ignita — Autonomous Developer Agent
                </h3>
                <p className="text-[15px] leading-[1.7] text-text-secondary font-medium mb-8">
                  Building a secure execution sandbox that enables LLM planning models to run test suites, capture compilation tracebacks, and self-correct files locally.
                </p>

                {/* Subtask list */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {[
                    { icon: Cpu, title: "AST Context Parsing", desc: "Decoupling workspace symbol imports." },
                    { icon: RefreshCw, title: "Self-Correction Loop", desc: "Backtracking algorithms for fixes." },
                    { icon: GitBranch, title: "Commit Diff Generator", desc: "Creating secure codebase pull requests." },
                    { icon: Layers, title: "Sandbox Isolation", desc: "Containerizing execution logs." },
                  ].map((sub, i) => (
                    <div key={i} className="flex gap-3 items-start">
                      <div className="p-1.5 border border-border-color rounded bg-bg-primary text-accent-color mt-0.5">
                        <sub.icon className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <h4 className="text-[12px] font-black text-text-primary uppercase leading-tight">{sub.title}</h4>
                        <p className="text-[11px] text-text-secondary mt-0.5 font-medium">{sub.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4 pt-6 border-t border-border-color/60">
                <Link href="/projects/ignita"
                  className="inline-flex items-center gap-2 bg-accent-color text-text-primary text-[10px] font-black tracking-widest px-6 py-3.5 rounded-[4px] hover:brightness-95 transition-all">
                  READ DEV LOG ↗
                </Link>
                <a href="https://github.com/snehapal/ignita" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-border-color text-text-primary text-[10px] font-black tracking-widest px-6 py-3.5 rounded-[4px] hover:bg-bg-secondary transition-all">
                  VIEW ON GITHUB
                </a>
              </div>
            </div>

            {/* Right: Live Sprint Board Simulator */}
            <div className="lg:col-span-5 p-8 md:p-12 bg-bg-secondary/20 flex flex-col justify-between">
              <div>
                <span className="text-[9px] font-black tracking-widest text-text-secondary uppercase block mb-6">SPRINT METRICS</span>
                
                {/* Sprint progress meter */}
                <div className="mb-8">
                  <div className="flex justify-between items-center text-[11px] font-black tracking-widest text-text-primary mb-2">
                    <span>OVERALL PROGRESS</span>
                    <span>82%</span>
                  </div>
                  <div className="w-full h-2 bg-border-color rounded-full overflow-hidden">
                    <div className="h-full bg-accent-color" style={{ width: "82%" }} />
                  </div>
                </div>

                {/* Simulated task items */}
                <div className="flex flex-col gap-3">
                  {[
                    { task: "AST Symbol Context Retrieval", status: "completed", percent: 100 },
                    { task: "Self-Correction Backtracking Memory", status: "completed", percent: 100 },
                    { task: "Dockerized Sandbox Isolation", status: "active", percent: 70 },
                    { task: "Interactive Goal Palette dashboard", status: "queued", percent: 0 },
                  ].map((item, idx) => (
                    <div key={idx} className="border border-border-color rounded-xl p-3 bg-bg-primary flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="text-[11px] font-bold text-text-primary line-clamp-1">{item.task}</span>
                        <span className="text-[8px] font-black tracking-wider uppercase mt-0.5 text-text-secondary">
                          {item.status}
                        </span>
                      </div>
                      <span className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded ${
                        item.status === "completed" ? "bg-[#22c55e]/15 text-[#22c55e]" :
                        item.status === "active" ? "bg-accent-color/15 text-accent-color animate-pulse" :
                        "bg-border-color/30 text-text-secondary"
                      }`}>
                        {item.percent}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Status bar */}
              <div className="pt-6 border-t border-border-color/60 mt-8 flex justify-between items-center text-[10px] font-black tracking-widest text-text-secondary uppercase">
                <span>COMMIT D42E11B</span>
                <span>PUSHED 4H AGO</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
