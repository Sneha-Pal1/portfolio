"use client";

import { useParams, useRouter } from "next/navigation";
import { projects } from "@/data/projects";
import Navbar from "@/components/layout/Navbar";
import Contact from "@/components/sections/Contact";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function ProjectDetail() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;

  const currentIdx = projects.findIndex((p) => p.slug === slug);
  const project = projects[currentIdx];

  if (!project) {
    return (
      <div className="min-h-screen bg-bg-primary text-text-primary flex flex-col items-center justify-center p-8">
        <h1 className="text-4xl font-black mb-4">Project Not Found</h1>
        <Link href="/" className="text-accent-color font-bold tracking-widest text-xs hover:underline">
          RETURN TO HOME
        </Link>
      </div>
    );
  }

  const prevProject = projects[(currentIdx - 1 + projects.length) % projects.length];
  const nextProject = projects[(currentIdx + 1) % projects.length];

  return (
    <div className="bg-bg-primary text-text-primary min-h-screen flex flex-col overflow-hidden">
      <Navbar />

      {/* Hero Header */}
      <section className="relative w-full pt-40 pb-20 px-8 md:px-10 border-b border-border-color bg-bg-primary">
        <div className="max-w-[1200px] mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Meta row */}
            <div className="flex flex-wrap items-center gap-4 text-[10px] font-black tracking-widest text-text-secondary mb-6 uppercase">
              <span>{project.num}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-accent-color" />
              <span>{project.tag}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-accent-color" />
              <span>{project.year}</span>
            </div>

            {/* Title */}
            <h1 className="font-black leading-[1.0] tracking-[-0.04em] mb-8"
              style={{ fontSize: "clamp(48px, 7vw, 88px)", letterSpacing: "-3px" }}>
              <span className="text-outline block">Project Case</span>
              <span className="block">{project.title}</span>
            </h1>

            {/* Main summary grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-12 pt-8 border-t border-border-color">
              <div className="lg:col-span-8">
                <h3 className="text-[11px] font-black tracking-widest text-text-secondary uppercase mb-4">Overview</h3>
                <p className="text-[17px] leading-[1.7] text-text-secondary font-medium">
                  {project.overview}
                </p>
              </div>
              <div className="lg:col-span-4 flex flex-col gap-6">
                <div>
                  <h3 className="text-[11px] font-black tracking-widest text-text-secondary uppercase mb-3">Tech Stack</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span key={t} className="text-[10px] font-bold px-3 py-1 rounded bg-bg-secondary text-text-primary">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-4 mt-2">
                  <a href={project.github} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-text-primary text-bg-primary text-[10px] font-black tracking-widest px-4 py-2.5 rounded-[4px] hover:opacity-90 transition-opacity">
                    <GithubIcon className="w-3.5 h-3.5" /> GITHUB REPO
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-accent-color text-text-primary text-[10px] font-black tracking-widest px-4 py-2.5 rounded-[4px] hover:brightness-95 transition-all">
                    <ExternalLink className="w-3.5 h-3.5" /> LIVE DEMO
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Case Study Details */}
      <section className="py-20 px-8 md:px-10 bg-bg-primary">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left panel: Problem & Solution */}
          <div className="lg:col-span-7 flex flex-col gap-14">
            <div>
              <span className="text-[10px] font-black tracking-widest text-accent-color uppercase block mb-3">01 // Problem Statement</span>
              <h2 className="text-[28px] font-black tracking-tight mb-4 text-text-primary">The Challenge</h2>
              <p className="text-[15px] leading-[1.75] text-text-secondary font-medium">{project.problem}</p>
            </div>

            <div>
              <span className="text-[10px] font-black tracking-widest text-accent-color uppercase block mb-3">02 // The Solution</span>
              <h2 className="text-[28px] font-black tracking-tight mb-4 text-text-primary">How It Works</h2>
              <p className="text-[15px] leading-[1.75] text-text-secondary font-medium">{project.solution}</p>
            </div>

            <div>
              <span className="text-[10px] font-black tracking-widest text-accent-color uppercase block mb-3">03 // Key Features</span>
              <h2 className="text-[28px] font-black tracking-tight mb-6 text-text-primary">Core Deliverables</h2>
              <ul className="flex flex-col gap-4">
                {project.features.map((f, i) => {
                  const parts = f.split(":");
                  const title = parts[0];
                  const desc = parts.slice(1).join(":");
                  return (
                    <li key={i} className="flex gap-4 items-start p-4 border border-border-color rounded-xl bg-card-bg">
                      <span className="text-[11px] font-black text-accent-color bg-accent-color/10 w-6 h-6 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      <div>
                        <h4 className="text-[14px] font-black text-text-primary mb-1">{title}</h4>
                        <p className="text-[13px] leading-[1.6] text-text-secondary font-medium">{desc}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* Right panel: Architecture */}
          <div className="lg:col-span-5 flex flex-col gap-10">
            <div className="border border-border-color rounded-2xl p-6 bg-card-bg relative overflow-hidden">
              <span className="text-[9px] font-black tracking-widest text-text-secondary uppercase block mb-2">SYSTEM ARCHITECTURE</span>
              <h3 className="text-[18px] font-black text-text-primary mb-2">{project.architecture.title}</h3>
              <p className="text-[12px] text-text-secondary mb-6">{project.architecture.description}</p>

              {/* Vector flow chart styled in Relace thin-outline aesthetic */}
              <div className="flex flex-col gap-4 relative">
                {project.architecture.nodes.map((node, i) => (
                  <div key={node.id} className="relative flex flex-col items-center">
                    <div className="w-full border border-border-color rounded-lg p-3 bg-bg-primary text-left z-10">
                      <div className="flex items-center justify-between">
                        <span className="text-[12px] font-black text-text-primary">{node.label}</span>
                        <span className="text-[9px] font-mono px-1.5 py-0.5 bg-bg-secondary text-text-secondary rounded">NODE {node.id}</span>
                      </div>
                      <p className="text-[10px] text-text-secondary mt-1">{node.desc}</p>
                    </div>
                    {/* Connecting line */}
                    {i < project.architecture.nodes.length - 1 && (
                      <div className="w-px h-8 bg-border-color my-1 relative">
                        <div className="absolute bottom-0 -left-[3px] w-2 h-2 border-r border-b border-border-color transform rotate-45" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Challenges / Blog snippet */}
            <div className="border border-border-color rounded-2xl p-6 bg-bg-secondary/40">
              <span className="text-[9px] font-black tracking-widest text-accent-color uppercase block mb-2">ENGINEERING LOG</span>
              <h3 className="text-[18px] font-black text-text-primary mb-3">Key Challenges Faced</h3>
              <p className="text-[13px] leading-[1.7] text-text-secondary font-medium italic">
                &ldquo;{project.challenges}&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshots Gallery Section */}
      <section className="py-20 px-8 md:px-10 border-t border-border-color bg-bg-secondary/20">
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-12">
            <span className="text-[10px] font-black tracking-widest text-text-secondary uppercase block mb-3">VISUAL WALKTHROUGH</span>
            <h2 className="text-[32px] font-black tracking-tight text-text-primary">Interface Gallery</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.screenshots.map((screen, idx) => (
              <div key={idx} className="border border-border-color rounded-2xl overflow-hidden bg-card-bg flex flex-col group hover:shadow-sm transition-all duration-200">
                {/* Visual placeholder box simulating high-end graphics canvas */}
                <div className="w-full aspect-[16/10] relative overflow-hidden flex items-center justify-center" style={{ backgroundColor: screen.color + "15" }}>
                  {/* Styled canvas outlines */}
                  <svg className="absolute inset-0 w-full h-full stroke-text-primary/10 stroke-[1]" fill="none">
                    <line x1="0" y1="0" x2="100%" y2="100%" />
                    <line x1="100%" y1="0" x2="0" y2="100%" />
                    <circle cx="50%" cy="50%" r="20%" />
                  </svg>
                  <div className="z-10 bg-bg-primary border border-border-color px-4 py-2.5 rounded-lg shadow-sm">
                    <span className="text-[10px] font-black tracking-widest text-text-primary uppercase">{screen.title}</span>
                  </div>
                </div>
                <div className="p-5 border-t border-border-color">
                  <h4 className="text-[12px] font-black text-text-primary uppercase mb-1">{screen.title}</h4>
                  <p className="text-[11px] leading-[1.5] text-text-secondary">{screen.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Navigator Footer */}
      <section className="border-t border-border-color py-12 px-8 md:px-10 bg-bg-primary">
        <div className="max-w-[1200px] mx-auto flex items-center justify-between">
          <button
            onClick={() => router.push(`/projects/${prevProject.slug}`)}
            className="flex items-center gap-3 group text-left cursor-pointer"
          >
            <div className="w-10 h-10 border border-border-color rounded-full flex items-center justify-center group-hover:bg-bg-secondary transition-colors">
              <ArrowLeft className="w-4 h-4 text-text-primary" />
            </div>
            <div>
              <span className="text-[9px] font-black text-text-secondary tracking-widest uppercase block">PREVIOUS PROJECT</span>
              <span className="text-[13px] font-black text-text-primary group-hover:text-accent-color transition-colors">{prevProject.title}</span>
            </div>
          </button>

          <Link href="/#work" className="text-[10px] font-black tracking-[0.2em] text-text-secondary hover:text-text-primary transition-colors hidden md:block">
            ALL CASE STUDIES
          </Link>

          <button
            onClick={() => router.push(`/projects/${nextProject.slug}`)}
            className="flex items-center gap-3 group text-right cursor-pointer"
          >
            <div>
              <span className="text-[9px] font-black text-text-secondary tracking-widest uppercase block">NEXT PROJECT</span>
              <span className="text-[13px] font-black text-text-primary group-hover:text-accent-color transition-colors">{nextProject.title}</span>
            </div>
            <div className="w-10 h-10 border border-border-color rounded-full flex items-center justify-center group-hover:bg-bg-secondary transition-colors">
              <ArrowRight className="w-4 h-4 text-text-primary" />
            </div>
          </button>
        </div>
      </section>

      <Contact />
    </div>
  );
}
