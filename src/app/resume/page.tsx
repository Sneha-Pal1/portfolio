"use client";

import Navbar from "@/components/layout/Navbar";
import Contact from "@/components/sections/Contact";
import { motion } from "framer-motion";
import { Printer, Download, ArrowUpRight, GraduationCap, Code, Briefcase, Award } from "lucide-react";

export default function ResumePage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-bg-primary text-text-primary min-h-screen flex flex-col overflow-hidden print:bg-white print:text-black">
      {/* Hide navbar on print */}
      <div className="print:hidden">
        <Navbar />
      </div>

      {/* Main Resume Sheet */}
      <main className="pt-40 pb-24 px-8 md:px-10 flex-1 max-w-[1000px] mx-auto w-full print:pt-0 print:pb-0">
        {/* Actions header (hide on print) */}
        <div className="flex justify-between items-center mb-12 pb-6 border-b border-border-color print:hidden">
          <div>
            <span className="text-[10px] font-black tracking-widest text-text-secondary uppercase block mb-1">CURRICULUM VITAE</span>
            <h1 className="text-[28px] font-black tracking-tight text-text-primary">Sneha Pal</h1>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 border border-border-color text-text-primary text-[10px] font-black tracking-widest px-4 py-2.5 rounded-[4px] hover:bg-bg-secondary cursor-pointer transition-all"
            >
              <Printer className="w-3.5 h-3.5" /> PRINT CV
            </button>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 bg-accent-color text-text-primary text-[10px] font-black tracking-widest px-4 py-2.5 rounded-[4px] hover:brightness-95 transition-all"
            >
              <Download className="w-3.5 h-3.5" /> DOWNLOAD PDF
            </a>
          </div>
        </div>

        {/* CV Contents */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-12"
        >
          {/* Header Block */}
          <div className="flex flex-col md:flex-row md:justify-between items-start gap-6 pb-8 border-b border-border-color/60">
            <div>
              <h2 className="text-[36px] font-black tracking-tight text-text-primary leading-none">Sneha Pal</h2>
              <p className="text-[15px] font-semibold text-accent-color mt-2">B.Tech Computer Science &amp; Engineering Student</p>
              <p className="text-[13px] text-text-secondary mt-1 font-medium">IIIT Kalyani // Software Placement Candidate</p>
            </div>
            <div className="flex flex-col gap-1 text-[12px] font-semibold text-text-secondary md:items-end">
              <span>sneha.pal@example.com</span>
              <span>github.com/snehapal</span>
              <span>linkedin.com/in/snehapal</span>
              <span>Kalyani, West Bengal, India</span>
            </div>
          </div>

          {/* Grid Layout: Main info (left) & Sidebar stats (right) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            {/* Left Column: Education & Experience */}
            <div className="md:col-span-8 flex flex-col gap-10">
              {/* Education */}
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <GraduationCap className="w-5 h-5 text-accent-color" />
                  <h3 className="text-[16px] font-black tracking-widest text-text-primary uppercase">Education</h3>
                </div>
                <div className="flex flex-col gap-6 pl-4 border-l-2 border-border-color">
                  <div>
                    <div className="flex justify-between items-start">
                      <h4 className="text-[15px] font-black text-text-primary">B.Tech in Computer Science &amp; Engineering</h4>
                      <span className="text-[11px] font-bold text-text-secondary uppercase">2023 — 2027</span>
                    </div>
                    <p className="text-[13px] font-semibold text-accent-color mt-0.5">Indian Institute of Information Technology, Kalyani</p>
                    <p className="text-[12px] text-text-secondary mt-2 font-medium">
                      Relevant Coursework: Data Structures &amp; Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, Computer Networks.
                    </p>
                  </div>
                </div>
              </div>

              {/* Experience / Internships */}
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <Briefcase className="w-5 h-5 text-accent-color" />
                  <h3 className="text-[16px] font-black tracking-widest text-text-primary uppercase">Experience</h3>
                </div>
                <div className="flex flex-col gap-8 pl-4 border-l-2 border-border-color">
                  {/* Job 1 */}
                  <div>
                    <div className="flex justify-between items-start">
                      <h4 className="text-[15px] font-black text-text-primary">AI/ML Intern</h4>
                      <span className="text-[11px] font-bold text-text-secondary uppercase">June 2026 — Present</span>
                    </div>
                    <p className="text-[13px] font-semibold text-accent-color mt-0.5">IIIT Kalyani</p>
                    <ul className="list-disc list-inside text-[12px] text-text-secondary mt-2 flex flex-col gap-1 pl-1 font-medium">
                      <li>Worked on Artificial Intelligence and Machine Learning projects as part of internship.</li>
                      <li>Explored Machine Learning workflows, NLP-related tasks, and model experimentation.</li>
                      <li>Conducted research, data preprocessing, model testing, and technical documentation.</li>
                    </ul>
                  </div>

                  {/* Job 2 */}
                  <div>
                    <div className="flex justify-between items-start">
                      <h4 className="text-[15px] font-black text-text-primary">Full Stack Developer Intern</h4>
                      <span className="text-[11px] font-bold text-text-secondary uppercase">June 2025 — August 2025</span>
                    </div>
                    <p className="text-[13px] font-semibold text-accent-color mt-0.5">National Informatics Centre (NIC), Agartala</p>
                    <ul className="list-disc list-inside text-[12px] text-text-secondary mt-2 flex flex-col gap-1 pl-1 font-medium">
                      <li>Contributed to a government-backed platform to streamline data operations for Self Help Groups (SHGs).</li>
                      <li>Developed robust backend modules and APIs using NestJS and unified PostgreSQL database targets.</li>
                      <li>Integrated frontend Next.js layers and optimized database index triggers.</li>
                    </ul>
                  </div>

                  {/* Job 3 */}
                  <div>
                    <div className="flex justify-between items-start">
                      <h4 className="text-[15px] font-black text-text-primary">Backend Developer Intern</h4>
                      <span className="text-[11px] font-bold text-text-secondary uppercase">May 2024 — July 2024 // June 2025 — July 2025</span>
                    </div>
                    <p className="text-[13px] font-semibold text-accent-color mt-0.5">Directorate of Information Technology (DIT), Agartala</p>
                    <ul className="list-disc list-inside text-[12px] text-text-secondary mt-2 flex flex-col gap-1 pl-1 font-medium">
                      <li>Led backend development efforts for Taxpal Pro, a secure digital tax filing management platform.</li>
                      <li>Built secure REST APIs, authentication pipelines, token validations, and database schema mappings.</li>
                    </ul>
                  </div>

                  {/* Job 4 */}
                  <div>
                    <div className="flex justify-between items-start">
                      <h4 className="text-[15px] font-black text-text-primary">Android Development Intern</h4>
                      <span className="text-[11px] font-bold text-text-secondary uppercase">December 2024 — January 2025</span>
                    </div>
                    <p className="text-[13px] font-semibold text-accent-color mt-0.5">NIELIT Agartala</p>
                    <ul className="list-disc list-inside text-[12px] text-text-secondary mt-2 flex flex-col gap-1 pl-1 font-medium">
                      <li>Developed a real-time chatting application using Flutter and Firebase services.</li>
                      <li>Implemented authentication protocols, message channels synchronization, and UI responsiveness.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Skills & Highlights */}
            <div className="md:col-span-4 flex flex-col gap-10">
              {/* Technical skills */}
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <Code className="w-5 h-5 text-accent-color" />
                  <h3 className="text-[15px] font-black tracking-widest text-text-primary uppercase">Technical Skills</h3>
                </div>
                <div className="flex flex-col gap-5 pl-2">
                  <div>
                    <span className="text-[10px] font-black text-text-secondary uppercase block mb-1.5">Languages</span>
                    <div className="flex flex-wrap gap-1">
                      {["Python", "TypeScript", "JavaScript", "C++", "SQL", "Dart"].map((s) => (
                        <span key={s} className="text-[10px] font-bold px-2 py-0.5 bg-bg-secondary text-text-primary rounded">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span className="text-[10px] font-black text-text-secondary uppercase block mb-1.5">Backend Frameworks</span>
                    <div className="flex flex-wrap gap-1">
                      {["NestJS", "Node.js", "Express", "FastAPI", "REST APIs", "GraphQL"].map((s) => (
                        <span key={s} className="text-[10px] font-bold px-2 py-0.5 bg-bg-secondary text-text-primary rounded">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span className="text-[10px] font-black text-text-secondary uppercase block mb-1.5">Frontend & Mobile</span>
                    <div className="flex flex-wrap gap-1">
                      {["Next.js", "React", "Tailwind CSS", "Flutter", "HTML5/CSS3"].map((s) => (
                        <span key={s} className="text-[10px] font-bold px-2 py-0.5 bg-bg-secondary text-text-primary rounded">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span className="text-[10px] font-black text-text-secondary uppercase block mb-1.5">Databases & Tools</span>
                    <div className="flex flex-wrap gap-1">
                      {["PostgreSQL", "MongoDB", "SQLite", "Prisma", "Git", "Docker", "Firebase"].map((s) => (
                        <span key={s} className="text-[10px] font-bold px-2 py-0.5 bg-bg-secondary text-text-primary rounded">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Achievements */}
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <Award className="w-5 h-5 text-accent-color" />
                  <h3 className="text-[15px] font-black tracking-widest text-text-primary uppercase">Achievements</h3>
                </div>
                <div className="flex flex-col gap-4 pl-4 border-l border-border-color text-[12px] font-medium text-text-secondary">
                  <div>
                    <h5 className="font-bold text-text-primary">LeetCode Profile</h5>
                    <p className="mt-0.5">Solved 300+ problems, active participant in bi-weekly contests.</p>
                  </div>
                  <div>
                    <h5 className="font-bold text-text-primary">Open Source Contributor</h5>
                    <p className="mt-0.5">Active contributions to tooling repositories and AI planner frameworks.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </main>

      <div className="print:hidden">
        <Contact />
      </div>
    </div>
  );
}
