"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Alex delivered work that was 10 steps ahead of what we briefed. The attention to detail in every interaction is extraordinary.",
    name: "SARAH PARK",
    role: "CEO, ORBIT LABS",
    initial: "S",
  },
  {
    quote: "One of the most complete designers I've ever worked with — equally strong in strategy, pixels, and code. Rare find.",
    name: "MARCUS WANG",
    role: "CTO, PULSE HQ",
    initial: "M",
  },
  {
    quote: "Alex redesigned our onboarding flow and our activation rate jumped 40%. The data speaks for itself.",
    name: "PRIYA THOMAS",
    role: "HEAD OF PRODUCT, HALO",
    initial: "P",
  },
];

export default function Testimonials() {
  return (
    <section className="w-full border-t border-[rgba(25,25,24,0.08)] bg-[#FFFEF2] py-24 px-8 md:px-10">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="text-[11px] font-black tracking-[0.18em] text-[rgba(25,25,24,0.4)] block mb-4">TESTIMONIALS</span>
          <h2 className="text-[40px] md:text-[52px] font-black tracking-[-0.04em] leading-[1.05]">
            Kind words from<br />people I&apos;ve worked with
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="border border-[rgba(25,25,24,0.1)] rounded-2xl p-8 bg-white flex flex-col justify-between min-h-[240px] hover:shadow-sm transition-shadow duration-200"
            >
              {/* Quote mark */}
              <div className="text-[48px] font-black text-[#fcaa2d] leading-none mb-2">&ldquo;</div>
              <p className="text-[16px] md:text-[17px] font-medium leading-[1.55] text-[#191918] mb-10 flex-1">
                {t.quote}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#fcaa2d]/20 border border-[rgba(25,25,24,0.08)] flex items-center justify-center font-black text-[13px] text-[#191918] flex-shrink-0">
                  {t.initial}
                </div>
                <div>
                  <p className="text-[11px] font-black tracking-[0.12em]">{t.name}</p>
                  <p className="text-[10px] tracking-[0.1em] text-[rgba(25,25,24,0.4)] mt-0.5">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
