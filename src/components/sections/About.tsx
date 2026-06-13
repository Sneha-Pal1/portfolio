"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="w-full border-t border-border-color bg-bg-primary py-24 px-8 md:px-10">
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">

        {/* Left — photo placeholder + quick stats */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:w-[380px] flex-shrink-0 flex flex-col gap-6"
        >
          {/* Photo placeholder with mountain art */}
          <div className="w-full aspect-[4/5] rounded-2xl overflow-hidden relative bg-gradient-to-br from-[#e4e0d0]/40 to-[#c8bfa8]/40 border border-border-color">
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 380 475" xmlns="http://www.w3.org/2000/svg">
              <rect width="380" height="475" fill="none"/>
              <path d="M0,475 L0,280 L60,200 L130,250 L200,140 L270,210 L340,160 L380,190 L380,475 Z" fill="rgba(160,150,128,0.2)"/>
              <path d="M0,475 L0,360 L80,280 L170,340 L260,270 L380,310 L380,475 Z" fill="rgba(130,120,100,0.2)"/>
              <path d="M0,475 L0,420 L120,360 L240,410 L380,375 L380,475 Z" fill="rgba(100,92,76,0.15)"/>
              <ellipse cx="190" cy="230" rx="30" ry="35" fill="rgba(60,52,40,0.1)"/>
              <rect x="175" y="262" width="30" height="60" rx="4" fill="rgba(60,52,40,0.08)"/>
            </svg>
            <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/30 to-transparent"/>
            <div className="absolute bottom-5 left-5">
              <p className="text-[10px] font-black tracking-[0.15em] text-text-secondary uppercase">IMAGE BACKDROP</p>
            </div>
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-2 gap-3">
            {[
              { val: "2027", label: "B.Tech Graduation" },
              { val: "300+", label: "DSA problems solved" },
              { val: "5+", label: "Projects completed" },
              { val: "4", label: "Internships completed" },
            ].map((s) => (
              <div key={s.label} className="border border-border-color bg-card-bg rounded-xl p-4">
                <p className="text-[28px] font-black tracking-[-0.03em] text-text-primary">{s.val}</p>
                <p className="text-[10px] font-bold text-text-secondary mt-0.5 uppercase tracking-wider leading-tight">{s.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right — bio */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex flex-col justify-center"
        >
          <span className="text-[10px] font-black tracking-[0.18em] text-accent-color block mb-5 uppercase">ABOUT ME</span>
          <h2 className="text-[40px] md:text-[52px] font-black tracking-[-0.04em] leading-[1.05] mb-8 text-text-primary">
            Engineering tools<br />
            <span className="text-outline">and architectures</span><br />
            from the ground up
          </h2>

          <div className="flex flex-col gap-5 text-[15px] leading-[1.75] text-text-secondary max-w-[580px] font-medium">
            <p>
              Hello — I&apos;m Sneha Pal, a Computer Science student and software engineer candidate based in Kalyani. I have built a deep focus on backend services architecture, data engineering pipelines, and machine learning models.
            </p>
            <p>
              I spend my time engineering robust modules utilizing NestJS, Next.js, and FastAPI, integrating secure database layers using PostgreSQL, and researching autonomous compiler loops. I enjoy understanding the low-level protocols of computer science — from AST outline parsers to network handshakes.
            </p>
            <p>
              When I&apos;m not writing code, I active participate in LeetCode contests, write technical development blogs on system design, and track software sprints for open source platforms.
            </p>
          </div>

          {/* Chips */}
          <div className="flex flex-wrap gap-2 mt-10">
            {["Backend Architecture", "Full Stack Dev", "NestJS & PostgreSQL", "Machine Learning & NLP", "Open Source"].map((t) => (
              <span key={t}
                className="text-[11px] font-bold tracking-[0.08em] border border-border-color bg-bg-secondary/40 px-3.5 py-1.5 rounded-full text-text-secondary">
                {t}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
