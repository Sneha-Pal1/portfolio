"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "How does the code retrieval work?",
    a: "Relace indexes your repository using a purpose-built embedding model trained on code. It creates a semantic representation of every file and function, enabling agents to query natural-language descriptions and receive precise, ranked code snippets in milliseconds.",
  },
  {
    q: "Can I use it with my existing repository?",
    a: "Yes. Relace integrates with your existing Git workflow. A single lightweight adapter gives agents read/write access with no rate limits, and the indexing pipeline runs incrementally on every commit.",
  },
  {
    q: "What agent frameworks are supported?",
    a: "Relace exposes a standard REST and streaming API. Any framework that can make HTTP requests works — including LangChain, CrewAI, AutoGen, custom loops, and more.",
  },
  {
    q: "What are the rate limits and pricing?",
    a: "The free tier includes unlimited source control operations and up to 1M retrieval tokens per month. Paid plans remove all limits and add dedicated infrastructure. Contact us for enterprise pricing.",
  },
  {
    q: "How does Fast Apply compare to a standard LLM edit?",
    a: "Fast Apply is a specialized merge model, not a general-purpose LLM. It ingests the original file and a diff description, then outputs a merged file at ~10,000 tok/s — roughly 10× faster than applying edits through a frontier model.",
  },
];

export default function FAQs() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="w-full border-t border-[rgba(25,25,24,0.08)] bg-[#FFFEF2] py-24 px-8 md:px-10">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row gap-16 md:gap-24">
        {/* Left label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="md:w-[280px] flex-shrink-0"
        >
          <h2 className="text-[36px] md:text-[40px] font-black tracking-[-0.04em] leading-[1.05]">
            Frequently<br />asked<br />questions
          </h2>
        </motion.div>

        {/* Accordion */}
        <div className="flex-1 flex flex-col">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="border-b border-[rgba(25,25,24,0.1)]"
            >
              <button
                className="w-full flex justify-between items-center py-6 text-left gap-4 group"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="text-[16px] font-bold tracking-[-0.01em] text-[#191918] group-hover:opacity-70 transition-opacity">
                  {faq.q}
                </span>
                <span className="flex-shrink-0 w-5 h-5 text-[rgba(25,25,24,0.4)]">
                  {open === i ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </span>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="text-[14px] leading-[1.75] text-[rgba(25,25,24,0.55)] pb-6 max-w-[600px]">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
