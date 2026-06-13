"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { projects } from "@/data/projects";

export default function Work() {
  return (
    <section id="work" className="w-full border-t border-border-color bg-bg-primary py-24 px-8 md:px-10">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14"
        >
          <div>
            <span className="text-[10px] font-black tracking-[0.2em] text-accent-color block mb-4 uppercase">SELECTED WORK</span>
            <h2 className="text-[40px] md:text-[52px] font-black tracking-[-0.04em] leading-[1.05] text-text-primary">
              Full Stack &amp;<br />
              <span className="text-outline">AI Engineering</span>
            </h2>
          </div>
          <p className="text-[14px] leading-[1.7] text-text-secondary max-w-[340px] md:pb-1 font-medium">
            A curated selection of systems spanning autonomous developers tooling, fintech applications, and collaborative platforms.
          </p>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border-color border border-border-color rounded-2xl overflow-hidden shadow-sm">

          {/* Wide card — spans 2 cols (Ignita) */}
          {projects.slice(0, 1).map((p) => (
            <motion.div key={p.num}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="col-span-1 md:col-span-2 bg-accent-color p-10 flex flex-col min-h-[340px] group cursor-pointer hover:brightness-95 transition-all text-[#191918]">
              <Link href={`/projects/${p.slug}`} className="flex flex-col justify-between h-full flex-1">
                <div className="flex justify-between items-start mb-auto">
                  <span className="text-[10px] font-black tracking-[0.2em] opacity-60">{p.num}</span>
                  <span className="text-[9px] font-black tracking-[0.15em] bg-bg-primary/20 px-2.5 py-1 rounded-full uppercase">{p.tag}</span>
                </div>
                <div className="mt-8">
                  <div className="flex items-end justify-between mb-4">
                    <h3 className="text-[26px] md:text-[34px] font-black tracking-[-0.03em] leading-tight max-w-[400px]">{p.title}</h3>
                    <ArrowUpRight className="w-6 h-6 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all flex-shrink-0 mb-1" />
                  </div>
                  <p className="text-[14px] leading-[1.6] opacity-75 max-w-[540px] mb-6 font-medium">{p.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.tech.map((t) => (
                      <span key={t} className="text-[9px] font-bold tracking-[0.08em] border border-text-primary/20 bg-bg-primary/10 px-2.5 py-1 rounded">
                        {t.toUpperCase()}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}

          {/* Regular cards (Bloom, MyPrep, Grubbly, ShelfSoul) */}
          {projects.slice(1).map((p, i) => (
            <motion.div key={p.num}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i + 1) * 0.08 }}
              className="bg-card-bg p-8 flex flex-col min-h-[290px] group cursor-pointer hover:bg-bg-secondary/40 transition-colors">
              <Link href={`/projects/${p.slug}`} className="flex flex-col justify-between h-full flex-1">
                <div className="flex justify-between items-start mb-auto">
                  <span className="text-[10px] font-black tracking-[0.2em] text-text-secondary/40">{p.num}</span>
                  <span className="text-[9px] font-black tracking-[0.15em] text-text-secondary bg-bg-secondary px-2.5 py-1 rounded-full uppercase">{p.tag}</span>
                </div>
                <div className="mt-6">
                  <div className="flex items-end justify-between mb-3">
                    <h3 className="text-[18px] font-black tracking-[-0.02em] leading-tight text-text-primary">{p.title}</h3>
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all flex-shrink-0 mb-0.5 text-text-primary" />
                  </div>
                  <p className="text-[13px] leading-[1.6] text-text-secondary mb-5 font-medium">{p.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.tech.map((t) => (
                      <span key={t} className="text-[9px] font-bold tracking-[0.08em] border border-border-color bg-bg-secondary/50 px-2 py-0.5 rounded text-text-secondary">
                        {t.toUpperCase()}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
