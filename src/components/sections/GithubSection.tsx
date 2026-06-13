"use client";

import { motion } from "framer-motion";
import { GitPullRequest, Star, GitFork, BookOpen, Activity } from "lucide-react";

const repos = [
  {
    name: "ignita-core",
    desc: "Autonomous developer agent planner core incorporating dynamic state backtracking and context caching.",
    stars: "142",
    forks: "24",
    lang: "Python",
    langColor: "#3572A5"
  },
  {
    name: "bloom-wealth",
    desc: "Millennial wealth consolidated dashboard tracking portfolios, investment rebalancing tip engines.",
    stars: "89",
    forks: "12",
    lang: "TypeScript",
    langColor: "#3178c6"
  },
  {
    name: "ast-outline-parser",
    desc: "Lightweight Abstract Syntax Tree outline parser decoupling codebase symbols for LLM integrations.",
    stars: "54",
    forks: "6",
    lang: "Python",
    langColor: "#3572A5"
  }
];

export default function GithubSection() {
  // Generate mock activity dots for the contribution calendar grid
  const activityRows = 7;
  const activityCols = 40;
  
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
            <span className="text-[10px] font-black tracking-[0.2em] text-accent-color block mb-4 uppercase">OPEN SOURCE</span>
            <h2 className="text-[40px] md:text-[52px] font-black tracking-[-0.04em] leading-[1.05] text-text-primary">
              Development &amp;<br />
              <span className="text-outline">Git Activity</span>
            </h2>
          </div>
          <p className="text-[14px] leading-[1.7] text-text-secondary max-w-[340px] md:pb-1 font-medium">
            Active maintainer and contributor to community tools and custom package wrappers.
          </p>
        </motion.div>

        {/* Unified Board Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-px bg-border-color border border-border-color rounded-2xl overflow-hidden shadow-sm">
          
          {/* Left panel: Stats & Activity Calendar (Col 8) */}
          <div className="lg:col-span-8 p-8 md:p-10 bg-card-bg flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Activity className="w-4.5 h-4.5 text-accent-color" />
                <span className="text-[10px] font-black tracking-widest text-text-secondary uppercase">
                  CONTRIBUTION CALENDAR (MOCK MAPPING)
                </span>
              </div>

              {/* Grid block representing GitHub commit contributions */}
              <div className="border border-border-color rounded-xl p-6 bg-bg-primary overflow-x-auto">
                <div className="min-w-[560px] flex flex-col gap-1.5">
                  {Array.from({ length: activityRows }).map((_, rIdx) => (
                    <div key={rIdx} className="flex gap-1.5">
                      {Array.from({ length: activityCols }).map((_, cIdx) => {
                        // Generate mock color shading
                        const seed = (rIdx * cIdx + rIdx + cIdx) % 10;
                        let cellBg = "bg-border-color/20"; // 0
                        if (seed > 3 && seed <= 6) cellBg = "bg-accent-color/20";
                        if (seed > 6 && seed <= 8) cellBg = "bg-accent-color/50";
                        if (seed > 8) cellBg = "bg-accent-color";

                        return (
                          <div
                            key={cIdx}
                            className={`w-3.5 h-3.5 rounded-[3px] flex-shrink-0 transition-colors hover:scale-110 ${cellBg}`}
                            title={`Mock commits at cell [${rIdx}, ${cIdx}]`}
                          />
                        );
                      })}
                    </div>
                  ))}
                </div>
                <div className="flex justify-between items-center text-[9px] font-semibold text-text-secondary tracking-widest mt-4 pl-1">
                  <span>LESS WORK</span>
                  <div className="flex items-center gap-1">
                    <div className="w-2.5 h-2.5 rounded-[2px] bg-border-color/20" />
                    <div className="w-2.5 h-2.5 rounded-[2px] bg-accent-color/20" />
                    <div className="w-2.5 h-2.5 rounded-[2px] bg-accent-color/50" />
                    <div className="w-2.5 h-2.5 rounded-[2px] bg-accent-color" />
                  </div>
                  <span>MORE WORK</span>
                </div>
              </div>
            </div>

            {/* Git summary statistics cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-8 border-t border-border-color/60">
              {[
                { value: "1,420+", label: "YEARLY COMMITS" },
                { value: "48", label: "PULL REQUESTS" },
                { value: "92%", label: "COMMIT STREAK" },
                { value: "12", label: "ACTIVE PROJECTS" },
              ].map((stat, idx) => (
                <div key={idx}>
                  <p className="text-[22px] font-black text-text-primary leading-tight">{stat.value}</p>
                  <p className="text-[9px] font-black text-text-secondary tracking-widest mt-1 uppercase">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right panel: Repos list (Col 4) */}
          <div className="lg:col-span-4 p-8 md:p-10 bg-bg-secondary/10 flex flex-col justify-between gap-8">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <BookOpen className="w-4.5 h-4.5 text-accent-color" />
                <span className="text-[10px] font-black tracking-widest text-text-secondary uppercase">
                  FEATURED REPOSITORIES
                </span>
              </div>

              {/* Repos Cards */}
              <div className="flex flex-col gap-4">
                {repos.map((repo) => (
                  <div key={repo.name} className="border border-border-color rounded-xl p-4 bg-card-bg hover:border-accent-color/40 transition-colors group">
                    <div className="flex justify-between items-center mb-2">
                      <a href={`https://github.com/snehapal/${repo.name}`} target="_blank" rel="noopener noreferrer"
                        className="text-[13px] font-black text-text-primary hover:text-accent-color transition-colors flex items-center gap-1.5">
                        {repo.name} ↗
                      </a>
                    </div>
                    <p className="text-[11px] leading-[1.5] text-text-secondary font-medium mb-4">{repo.desc}</p>
                    <div className="flex items-center gap-4 text-[10px] font-bold text-text-secondary">
                      <div className="flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full" style={{ backgroundColor: repo.langColor }} />
                        <span>{repo.lang}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-3.5 h-3.5 text-accent-color" />
                        <span>{repo.stars}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <GitFork className="w-3.5 h-3.5 text-text-secondary" />
                        <span>{repo.forks}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <a href="https://github.com/snehapal" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-text-primary text-bg-primary text-[10px] font-black tracking-widest py-3.5 rounded-[4px] hover:opacity-90 transition-opacity">
              <GitPullRequest className="w-3.5 h-3.5" /> VIEW PROFILE ON GITHUB
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
