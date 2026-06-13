"use client";

import { motion } from "framer-motion";
import { Activity } from "lucide-react";
import dynamic from "next/dynamic";

const GitHubCalendar = dynamic(
  () => import("react-github-calendar").then((mod) => mod.GitHubCalendar),
  { ssr: false },
);

export default function GithubSection() {
  return (
    <section className="w-full border-t border-border-color bg-bg-primary py-24 px-8 md:px-10">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14"
        >
          <div>
            <span className="text-[10px] font-black tracking-[0.2em] text-accent-color block mb-4 uppercase">
              OPEN SOURCE
            </span>

            <h2 className="text-[40px] md:text-[52px] font-black tracking-[-0.04em] leading-[1.05] text-text-primary">
              Development &amp;
              <br />
              <span className="text-outline">Git Activity</span>
            </h2>
          </div>

          <p className="text-[14px] leading-[1.7] text-text-secondary max-w-[340px] md:pb-1 font-medium">
            Building full-stack applications, backend services, and
            developer-focused projects while continuously improving
            problem-solving and software engineering skills.
          </p>
        </motion.div>

        <div className="border border-border-color rounded-2xl bg-card-bg p-8 md:p-10 overflow-hidden">
          <div className="flex items-center gap-2 mb-8">
            <Activity className="w-4.5 h-4.5 text-accent-color" />

            <span className="text-[10px] font-black tracking-widest text-text-secondary uppercase">
              GITHUB CONTRIBUTION GRAPH
            </span>
          </div>

          <div className="overflow-x-auto">
            <div className="min-w-[1100px]">
              <GitHubCalendar
                username="Sneha-Pal1"
                blockSize={14}
                blockMargin={5}
                fontSize={12}
                showWeekdayLabels
              />
            </div>
          </div>

          {/* <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10 pt-8 border-t border-border-color/60">
            {[
              { value: "4", label: "INTERNSHIPS" },
              { value: "5+", label: "PROJECTS" },
              { value: "NestJS", label: "PRIMARY STACK" },
              { value: "2025", label: "ACTIVE YEAR" },
            ].map((stat, idx) => (
              <div key={idx}>
                <p className="text-[22px] font-black text-text-primary leading-tight">
                  {stat.value}
                </p>

                <p className="text-[9px] font-black text-text-secondary tracking-widest mt-1 uppercase">
                  {stat.label}
                </p>
              </div>
            ))}
          </div> */}

          <div className="mt-10">
            <a
              href="https://github.com/Sneha-Pal1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-text-primary text-bg-primary text-[10px] font-black tracking-widest py-3.5 px-6 rounded-[4px] hover:opacity-90 transition-opacity"
            >
              VIEW PROFILE ON GITHUB ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
