"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import Link from "next/link";

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const socials = [
  { label: "GitHub", href: "https://github.com/snehapal", icon: GithubIcon },
  { label: "Twitter", href: "https://twitter.com/snehapal", icon: TwitterIcon },
  { label: "LinkedIn", href: "https://linkedin.com/in/snehapal", icon: LinkedinIcon },
];

export default function Contact() {
  return (
    <section id="contact" className="w-full border-t border-border-color bg-bg-primary relative overflow-hidden">

      {/* Mountain backdrop */}
      <div className="absolute inset-0 pointer-events-none select-none opacity-[0.08] dark:opacity-[0.04]">
        <svg className="absolute bottom-0 left-0 w-full h-[70%]" viewBox="0 0 1400 500"
          preserveAspectRatio="xMidYMax slice" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,500 L0,300 L120,200 L260,280 L420,130 L580,220 L740,70 L920,170 L1080,90 L1240,180 L1400,130 L1400,500 Z" fill="rgba(var(--mountain-2),0.5)"/>
          <path d="M0,500 L0,380 L180,270 L360,360 L560,240 L760,330 L960,260 L1160,340 L1400,290 L1400,500 Z" fill="rgba(var(--mountain-3),0.55)"/>
          <path d="M0,500 L0,440 L200,370 L440,430 L680,360 L920,420 L1160,370 L1400,400 L1400,500 Z" fill="rgba(var(--mountain-4),0.5)"/>
        </svg>
        <div className="absolute inset-0 bg-gradient-to-b from-bg-primary via-transparent to-bg-primary/80"/>
      </div>

      {/* CTA content */}
      <div className="relative z-10 flex flex-col items-center text-center px-8 md:px-10 pt-28 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center"
        >
          <span className="text-[10px] font-black tracking-[0.2em] text-accent-color block mb-6 uppercase">CONTACT</span>

          <h2 className="font-black leading-[1.0] tracking-[-0.04em] mb-6 text-text-primary"
            style={{ fontSize: "clamp(48px, 7vw, 80px)", letterSpacing: "-3px" }}>
            <span className="text-outline block">Let&apos;s build</span>
            <span className="block">something great</span>
          </h2>

          <p className="text-[17px] leading-[1.65] text-text-secondary max-w-[480px] mb-10 font-medium">
            I&apos;m currently open to software engineering internships, backend architecture roles, and open-source collaborations.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-3 mb-14">
            <a href="mailto:sneha.pal@example.com"
              className="inline-flex items-center gap-2 bg-accent-color text-text-primary text-[11px] font-black tracking-[0.12em] px-7 py-4 rounded-[4px] hover:brightness-95 transition-all uppercase">
              <Mail className="w-3.5 h-3.5"/> Say Hello
            </a>
            <Link href="/resume"
              className="inline-flex items-center gap-2 bg-bg-secondary border border-border-color text-text-primary text-[11px] font-black tracking-[0.12em] px-7 py-4 rounded-[4px] hover:brightness-97 transition-all uppercase">
              View Résumé <ArrowUpRight className="w-3.5 h-3.5"/>
            </Link>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            {socials.map(({ label, href, icon: Icon }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 border border-border-color rounded-[8px] flex items-center justify-center bg-card-bg hover:bg-bg-secondary hover:border-accent-color/40 transition-all text-text-secondary hover:text-text-primary"
                aria-label={label}>
                <Icon className="w-4.5 h-4.5"/>
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom bar */}
      <div className="relative z-10 border-t border-border-color px-8 md:px-10 py-6 flex flex-col md:flex-row justify-between items-center gap-3">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 bg-text-primary rounded-[3px] flex items-center justify-center">
            <span className="text-bg-primary font-black text-[9px]">S</span>
          </div>
          <span className="text-[11px] font-black tracking-tight text-text-primary">Sneha Pal</span>
        </div>
        <p className="text-[11px] text-text-secondary/60 tracking-[0.05em] font-semibold">
          © {new Date().getFullYear()} — Designed &amp; built with Next.js &amp; Tailwind v4
        </p>
        <div className="flex items-center gap-5">
          {["Work", "About", "Skills", "Experience"].map((l) => (
            <Link key={l} href={`#${l.toLowerCase()}`}
              className="text-[10px] font-bold tracking-[0.12em] uppercase text-text-secondary/60 hover:text-text-primary transition-colors">
              {l}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
