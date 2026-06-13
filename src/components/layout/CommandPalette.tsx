"use client";

import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

interface CommandItem {
  title: string;
  category: string;
  action: () => void;
}

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (e.key === "Escape") {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (open) {
      setQuery("");
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  // Handle click outside to close
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  const toggleTheme = () => {
    const isDark = document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    setOpen(false);
  };

  const items: CommandItem[] = [
    { title: "Home Page", category: "Navigation", action: () => { router.push("/"); setOpen(false); } },
    { title: "Work Section", category: "Navigation", action: () => { router.push("/#work"); setOpen(false); } },
    { title: "About Section", category: "Navigation", action: () => { router.push("/#about"); setOpen(false); } },
    { title: "Skills Section", category: "Navigation", action: () => { router.push("/#skills"); setOpen(false); } },
    { title: "Experience Section", category: "Navigation", action: () => { router.push("/#experience"); setOpen(false); } },
    { title: "Blog Hub", category: "Navigation", action: () => { router.push("/blog"); setOpen(false); } },
    { title: "My Resume", category: "Navigation", action: () => { router.push("/resume"); setOpen(false); } },
    { title: "Ignita Project Case Study", category: "Projects", action: () => { router.push("/projects/ignita"); setOpen(false); } },
    { title: "Bloom Project Case Study", category: "Projects", action: () => { router.push("/projects/bloom"); setOpen(false); } },
    { title: "MyPrep Project Case Study", category: "Projects", action: () => { router.push("/projects/myprep"); setOpen(false); } },
    { title: "Grubbly Project Case Study", category: "Projects", action: () => { router.push("/projects/grubbly"); setOpen(false); } },
    { title: "ShelfSoul Project Case Study", category: "Projects", action: () => { router.push("/projects/shelfsoul"); setOpen(false); } },
    { title: "Toggle Color Theme", category: "Preferences", action: toggleTheme },
  ];

  const filtered = items.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.category.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % Math.max(1, filtered.length));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filtered.length) % Math.max(1, filtered.length));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (filtered[selectedIndex]) {
        filtered[selectedIndex].action();
      }
    }
  };

  return (
    <>
      {/* Floating help hint in bottom right */}
      <div className="fixed bottom-6 right-6 z-40 hidden md:block">
        <button
          onClick={() => setOpen(true)}
          className="bg-bg-primary/80 backdrop-blur border border-border-color text-text-primary px-3 py-2 rounded-lg text-[10px] font-black tracking-widest shadow-sm hover:bg-bg-secondary cursor-pointer"
        >
          PRESS <kbd className="bg-bg-secondary px-1.5 py-0.5 rounded border border-border-color">Ctrl + K</kbd> TO NAVIGATE
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-50 bg-[#191918]/60 backdrop-blur-sm flex items-start justify-center pt-24 px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: -8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -8 }}
              transition={{ duration: 0.2 }}
              ref={containerRef}
              className="bg-bg-primary border border-border-color w-full max-w-[540px] rounded-xl overflow-hidden shadow-2xl flex flex-col"
            >
              {/* Search bar */}
              <div className="flex items-center gap-3 px-4 border-b border-border-color py-3">
                <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2.5" fill="none" className="text-text-secondary flex-shrink-0">
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Where would you like to go?"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="bg-transparent border-0 outline-none text-[14px] text-text-primary w-full placeholder:text-text-secondary/50 font-semibold"
                />
              </div>

              {/* Items List */}
              <div className="max-h-[300px] overflow-y-auto py-2">
                {filtered.length > 0 ? (
                  filtered.map((item, idx) => (
                    <button
                      key={item.title}
                      onClick={item.action}
                      onMouseEnter={() => setSelectedIndex(idx)}
                      className={`w-full text-left px-5 py-2.5 flex items-center justify-between transition-colors ${
                        idx === selectedIndex ? "bg-bg-secondary" : "bg-transparent"
                      }`}
                    >
                      <div className="flex flex-col">
                        <span className="text-[12px] font-bold text-text-primary">{item.title}</span>
                        <span className="text-[9px] font-semibold text-text-secondary tracking-wider uppercase mt-0.5">{item.category}</span>
                      </div>
                      <span className="text-[10px] text-text-secondary font-black tracking-widest opacity-40">SELECT ↵</span>
                    </button>
                  ))
                ) : (
                  <div className="py-8 text-center text-text-secondary text-[11px] font-bold tracking-widest">
                    NO RESULTS FOUND FOR "{query.toUpperCase()}"
                  </div>
                )}
              </div>

              {/* Footer info */}
              <div className="px-5 py-2 border-t border-border-color bg-bg-secondary/40 flex items-center justify-between text-[9px] font-semibold text-text-secondary tracking-widest">
                <span>↑↓ TO NAVIGATE</span>
                <span>ENTER TO SELECT</span>
                <span>ESC TO CLOSE</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
