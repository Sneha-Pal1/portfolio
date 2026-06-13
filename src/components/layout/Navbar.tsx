"use client";

import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const links = [
  { label: "WORK", href: "/#work" },
  { label: "ABOUT", href: "/#about" },
  { label: "SKILLS", href: "/#skills" },
  { label: "EXPERIENCE", href: "/#experience" },
  { label: "BLOG", href: "/blog" },
  { label: "RESUME", href: "/resume" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      <header
        className={`fixed left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "top-0 bg-bg-primary/95 backdrop-blur-md border-b border-border-color shadow-sm"
            : "top-0 bg-transparent"
        }`}
      >
        <div className="max-w-[1400px] mx-auto flex items-center justify-between px-8 md:px-10 py-5">
          {/* Logo / name */}
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-7 h-7 bg-text-primary rounded-[4px] flex items-center justify-center">
              <span className="text-bg-primary font-black text-xs">S</span>
            </div>
            <span className="font-black text-[15px] tracking-tight text-text-primary">
              Sneha Pal
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="text-[11px] font-semibold tracking-[0.12em] text-text-primary hover:opacity-50 transition-opacity"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* CTA & Theme toggle */}
          <div className="hidden lg:flex items-center gap-5">
            <span
              className="text-[9px] font-black tracking-widest text-text-secondary border border-border-color px-2 py-1.5 rounded bg-bg-secondary/40 select-none cursor-default"
              title="Press Ctrl+K to open search"
            >
              CMD + K
            </span>
            <ThemeToggle />
            <Link
              href="mailto:xsnehapal@gmail.com"
              className="text-[11px] font-semibold tracking-[0.12em] text-text-primary hover:opacity-50 transition-opacity"
            >
              CONTACT
            </Link>
            <Link
              href="/resume"
              className="inline-flex items-center gap-1.5 bg-accent-color text-text-primary text-[11px] font-black tracking-[0.12em] px-4 py-2.5 rounded-[4px] hover:brightness-95 transition-all"
            >
              RÉSUMÉ <ArrowUpRight className="w-3 h-3" />
            </Link>
            {/* <a
              href="/Sneha_Pal_Resume.pdf"
              download
              className="inline-flex items-center gap-1.5 bg-accent-color text-text-primary text-[11px] font-black tracking-[0.12em] px-4 py-2.5 rounded-[4px] hover:brightness-95 transition-all"
            >
              RÉSUMÉ <ArrowUpRight className="w-3 h-3" />
            </a> */}
          </div>

          {/* Hamburger & mobile toggle indicators */}
          <div className="flex items-center gap-3 lg:hidden">
            <ThemeToggle />
            <button
              onClick={() => setOpen(!open)}
              aria-label="Menu"
              className="text-text-primary"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-bg-primary flex flex-col items-center justify-center gap-8"
          >
            {links.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-2xl font-black tracking-widest text-text-primary hover:opacity-50 transition-opacity"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="mailto:xsnehapal@gmail.com"
              className="mt-4 bg-accent-color text-text-primary font-black tracking-widest px-10 py-4 rounded-[4px] text-sm"
              onClick={() => setOpen(false)}
            >
              CONTACT
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
