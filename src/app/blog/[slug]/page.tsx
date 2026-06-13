"use client";

import { useParams } from "next/navigation";
import { blogPosts } from "@/data/blogs";
import Navbar from "@/components/layout/Navbar";
import Contact from "@/components/sections/Contact";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function BlogDetail() {
  const params = useParams();
  const slug = params.slug as string;

  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-bg-primary text-text-primary flex flex-col items-center justify-center p-8">
        <h1 className="text-4xl font-black mb-4">Article Not Found</h1>
        <Link href="/blog" className="text-accent-color font-bold tracking-widest text-xs hover:underline">
          RETURN TO BLOGS
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-bg-primary text-text-primary min-h-screen flex flex-col overflow-hidden">
      <Navbar />

      {/* Hero Header */}
      <section className="pt-40 pb-16 px-8 md:px-10 border-b border-border-color bg-bg-primary">
        <div className="max-w-[800px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Back button */}
            <Link href="/blog" className="inline-flex items-center gap-2 text-[10px] font-black tracking-widest text-text-secondary hover:text-text-primary mb-8 transition-colors uppercase">
              <ArrowLeft className="w-3.5 h-3.5" /> BACK TO ALL ARTICLES
            </Link>

            {/* Category / Read time */}
            <div className="flex items-center gap-3 text-[10px] font-black tracking-widest text-accent-color uppercase mb-4">
              <span>{post.category}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-accent-color" />
              <span>{post.readTime}</span>
            </div>

            {/* Title */}
            <h1 className="text-[36px] md:text-[48px] font-black tracking-tight leading-[1.15] text-text-primary mb-6">
              {post.title}
            </h1>

            {/* Date / Author */}
            <div className="flex items-center gap-3 text-[11px] font-bold text-text-secondary uppercase">
              <span>{post.date}</span>
              <span>•</span>
              <span>BY SNEHA PAL</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content Body */}
      <section className="py-16 px-8 md:px-10 bg-bg-primary flex-1">
        <div className="max-w-[800px] mx-auto">
          <motion.article
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="prose prose-zinc dark:prose-invert max-w-none text-[16px] leading-[1.8] text-text-secondary font-medium"
          >
            {/* Split content by double newlines and render paragraphs/headings nicely */}
            {post.content.split("\n\n").map((block, idx) => {
              const trimmed = block.trim();
              if (!trimmed) return null;

              if (trimmed.startsWith("## ")) {
                return (
                  <h2 key={idx} className="text-[22px] font-black text-text-primary tracking-tight mt-10 mb-4 uppercase">
                    {trimmed.replace("## ", "")}
                  </h2>
                );
              }

              if (trimmed.startsWith("1. ") || trimmed.startsWith("- ")) {
                const listItems = trimmed.split("\n");
                return (
                  <ul key={idx} className="list-disc list-inside flex flex-col gap-2.5 my-6 pl-4 border-l-2 border-accent-color/40">
                    {listItems.map((li, i) => (
                      <li key={i} className="text-[15px]">
                        {li.replace(/^[0-9]\.\s|^-\s/, "")}
                      </li>
                    ))}
                  </ul>
                );
              }

              return (
                <p key={idx} className="mb-6">
                  {trimmed}
                </p>
              );
            })}
          </motion.article>

          {/* Tags Footer */}
          <div className="border-t border-border-color mt-16 pt-8">
            <span className="text-[10px] font-black tracking-widest text-text-secondary uppercase block mb-3">TAGGED UNDER</span>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((t) => (
                <span key={t} className="text-[9px] font-bold px-3 py-1 rounded bg-bg-secondary text-text-secondary">
                  #{t.toUpperCase()}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Contact />
    </div>
  );
}
