import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t border-[rgba(25,25,24,0.08)] bg-[#FFFEF2] relative overflow-hidden">
      {/* Mountain graphic for footer */}
      <div className="absolute inset-0 pointer-events-none select-none opacity-20">
        <svg
          className="absolute bottom-0 left-0 w-full h-full"
          viewBox="0 0 1400 600"
          preserveAspectRatio="xMidYMax slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0,600 L0,350 L120,230 L250,310 L400,140 L560,230 L720,80 L900,180 L1060,100 L1220,200 L1400,150 L1400,600 Z" fill="rgba(180,168,148,0.4)" />
          <path d="M0,600 L0,430 L180,310 L360,400 L540,270 L720,360 L900,280 L1080,360 L1260,290 L1400,340 L1400,600 Z" fill="rgba(155,143,120,0.5)" />
          <path d="M0,600 L0,510 L200,410 L420,490 L640,390 L860,460 L1080,400 L1300,460 L1400,430 L1400,600 Z" fill="rgba(130,118,96,0.45)" />
        </svg>
        <div className="absolute inset-0 bg-gradient-to-b from-[#FFFEF2] via-transparent to-[#FFFEF2]" />
      </div>

      {/* CTA Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-8 md:px-10 pt-28 pb-20">
        <h2
          className="font-black text-[52px] md:text-[64px] leading-[1.05] tracking-[-0.04em] mb-6 max-w-[660px]"
          style={{ letterSpacing: "-2.56px" }}
        >
          Get started in minutes
        </h2>
        <p className="text-[18px] leading-[1.65] text-[rgba(25,25,24,0.55)] max-w-[500px] mb-10">
          Try out our playground, and start with our free tier to test Relace
          models in your application.
        </p>
        <div className="flex flex-wrap justify-center items-center gap-3">
          <button className="inline-flex items-center gap-2 bg-[#fcaa2d] text-[#191918] text-[11px] font-black tracking-[0.12em] px-7 py-4 rounded-[4px] hover:brightness-95 transition-all duration-200 uppercase">
            Get a Demo <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
          <button className="inline-flex items-center gap-2 bg-[#f0efe4] border border-[rgba(25,25,24,0.1)] text-[#191918] text-[11px] font-black tracking-[0.12em] px-7 py-4 rounded-[4px] hover:brightness-97 transition-all duration-200 uppercase">
            Sign Up for Free <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative z-10 border-t border-[rgba(25,25,24,0.08)] px-8 md:px-10 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-6">
          <Link href="#" className="text-[10px] font-black tracking-[0.15em] uppercase text-[rgba(25,25,24,0.45)] hover:text-[#191918] transition-colors">
            Y Combinator
          </Link>
          <Link href="#" className="text-[10px] font-black tracking-[0.15em] uppercase text-[rgba(25,25,24,0.45)] hover:text-[#191918] transition-colors">
            About Us
          </Link>
          <Link href="#" className="text-[10px] font-black tracking-[0.15em] uppercase text-[rgba(25,25,24,0.45)] hover:text-[#191918] transition-colors">
            Email Us
          </Link>
        </div>
        <div className="flex items-center gap-6">
          <Link href="#" className="text-[10px] font-semibold tracking-[0.1em] text-[rgba(25,25,24,0.35)] hover:text-[rgba(25,25,24,0.65)] transition-colors">
            Status
          </Link>
          <Link href="#" className="text-[10px] font-semibold tracking-[0.1em] text-[rgba(25,25,24,0.35)] hover:text-[rgba(25,25,24,0.65)] transition-colors">
            Terms of Use
          </Link>
          <Link href="#" className="text-[10px] font-semibold tracking-[0.1em] text-[rgba(25,25,24,0.35)] hover:text-[rgba(25,25,24,0.65)] transition-colors">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
