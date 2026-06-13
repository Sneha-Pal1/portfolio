"use client";

import { useState } from "react";
import { blogPosts } from "@/data/blogs";
import Navbar from "@/components/layout/Navbar";
import Contact from "@/components/sections/Contact";
import { motion } from "framer-motion";
import { ArrowRight, Search } from "lucide-react";
import Link from "next/link";

const categories = ["ALL", "NestJS", "Backend", "DSA", "Career", "Projects", "Web Development"];

export default function BlogList() {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = blogPosts.filter((post) => {
    const matchesCategory = activeCategory === "ALL" || post.category === activeCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featured = blogPosts.find((p) => p.featured) || blogPosts[0];
  const others = filtered.filter((p) => p.slug !== featured.slug || activeCategory !== "ALL");

  return (
    <div className="bg-bg-primary text-text-primary min-h-screen flex flex-col overflow-hidden">
      <Navbar />

      {/* Hero Header */}
      <section className="pt-40 pb-12 px-8 md:px-10 border-b border-border-color bg-bg-primary">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-[10px] font-black tracking-widest text-text-secondary uppercase block mb-4">PUBLICATIONS</span>
            <h1 className="font-black leading-[1.0] tracking-[-0.04em] mb-6"
              style={{ fontSize: "clamp(48px, 7vw, 88px)", letterSpacing: "-3px" }}>
              <span className="text-outline block">Thoughts &amp;</span>
              <span className="block">Tech Logs</span>
            </h1>
            <p className="text-[16px] leading-[1.65] text-text-secondary max-w-[480px]">
              Notes, strategies, and guides written during B.Tech CS engineering placements and open source builds.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters & Search Toolbar */}
      <section className="py-6 px-8 md:px-10 border-b border-border-color bg-bg-secondary/20">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Categories */}
          <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-[10px] font-black tracking-widest px-4 py-2 rounded-full cursor-pointer transition-all ${
                  (cat === "ALL" && activeCategory === "ALL") || activeCategory === cat
                    ? "bg-accent-color text-text-primary"
                    : "bg-transparent border border-border-color text-text-secondary hover:bg-bg-secondary"
                }`}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Search bar */}
          <div className="flex items-center gap-2 border border-border-color bg-bg-primary rounded-lg px-3 py-2 w-full md:w-72">
            <Search className="w-4 h-4 text-text-secondary flex-shrink-0" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent border-0 outline-none text-[12px] font-semibold text-text-primary w-full placeholder:text-text-secondary/40"
            />
          </div>
        </div>
      </section>

      {/* Featured Article & Grid */}
      <section className="py-16 px-8 md:px-10 bg-bg-primary flex-1">
        <div className="max-w-[1200px] mx-auto">
          {/* Featured post (only visible when in 'ALL' category and search query is empty) */}
          {activeCategory === "ALL" && searchQuery === "" && featured && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="border border-border-color rounded-2xl overflow-hidden bg-card-bg p-8 md:p-12 mb-16 hover:shadow-sm transition-shadow group cursor-pointer"
            >
              <Link href={`/blog/${featured.slug}`} className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="lg:col-span-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 text-[10px] font-black tracking-widest text-accent-color uppercase mb-4">
                      <span>FEATURED ARTICLE</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-color" />
                      <span>{featured.category}</span>
                    </div>
                    <h2 className="text-[28px] md:text-[38px] font-black tracking-tight leading-[1.15] text-text-primary mb-4 group-hover:text-accent-color transition-colors">
                      {featured.title}
                    </h2>
                    <p className="text-[15px] leading-[1.65] text-text-secondary font-medium mb-6">
                      {featured.excerpt}
                    </p>
                  </div>
                  <div className="flex items-center gap-4 text-[10px] font-black tracking-widest text-text-secondary uppercase">
                    <span>{featured.date}</span>
                    <span>•</span>
                    <span>{featured.readTime}</span>
                  </div>
                </div>
                <div className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-border-color pt-8 lg:pt-0 lg:pl-8 flex flex-col justify-between items-start">
                  <span className="text-[10px] font-black tracking-widest text-text-secondary uppercase mb-4">KEYWORDS</span>
                  <div className="flex flex-wrap gap-1.5">
                    {featured.tags.map((t) => (
                      <span key={t} className="text-[9px] font-bold px-2 py-0.5 rounded bg-bg-secondary text-text-secondary">
                        #{t.toUpperCase()}
                      </span>
                    ))}
                  </div>
                  <div className="inline-flex items-center gap-2 text-[10px] font-black tracking-widest text-text-primary mt-8 hover:opacity-75 transition-opacity">
                    READ ARTICLE <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </Link>
            </motion.div>
          )}

          {/* Regular posts grid */}
          <div>
            <h3 className="text-[11px] font-black tracking-widest text-text-secondary uppercase mb-8">
              {filtered.length} {filtered.length === 1 ? "Article" : "Articles"} Published
            </h3>

            {others.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {others.map((post, i) => (
                  <motion.div
                    key={post.slug}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="border border-border-color rounded-2xl p-6 bg-card-bg hover:shadow-sm transition-all group flex flex-col justify-between min-h-[260px] cursor-pointer"
                  >
                    <Link href={`/blog/${post.slug}`} className="flex flex-col h-full justify-between">
                      <div>
                        <div className="flex items-center gap-2 text-[9px] font-black tracking-widest text-accent-color uppercase mb-3">
                          <span>{post.category}</span>
                          <span>•</span>
                          <span>{post.readTime}</span>
                        </div>
                        <h4 className="text-[16px] font-black tracking-tight text-text-primary leading-snug group-hover:text-accent-color transition-colors mb-3">
                          {post.title}
                        </h4>
                        <p className="text-[12px] leading-[1.6] text-text-secondary font-medium line-clamp-3 mb-6">
                          {post.excerpt}
                        </p>
                      </div>
                      <div className="flex items-center justify-between text-[9px] font-black tracking-widest text-text-secondary uppercase pt-4 border-t border-border-color/40">
                        <span>{post.date}</span>
                        <span className="inline-flex items-center gap-1 text-text-primary group-hover:translate-x-0.5 transition-transform">
                          READ ↗
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            ) : others.length === 0 && searchQuery !== "" ? (
              <div className="text-center py-16 text-text-secondary text-[12px] font-bold tracking-widest">
                NO ARTICLES FOUND MATCHING "{searchQuery.toUpperCase()}"
              </div>
            ) : null}
          </div>
        </div>
      </section>

      <Contact />
    </div>
  );
}
