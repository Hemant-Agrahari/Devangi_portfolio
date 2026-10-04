"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Figma, 
  Sparkles, 
  Award, 
  CheckCircle2, 
  Wrench, 
  Cpu, 
  Code2, 
  Compass, 
  Layers 
} from "lucide-react";
import { uxAudio } from "@/utils/audio";

const skillCategories = [
  {
    category: "Design & Systems",
    skills: [
      { name: "Figma (Auto-Layout 5.0 & Variables)", level: 98, levelLabel: "Master" },
      { name: "Design Systems & Token Architecture", level: 95, levelLabel: "Expert" },
      { name: "Information Architecture & Wireframing", level: 92, levelLabel: "Expert" },
      { name: "Mobile App UX (iOS Human Interface & Material 3)", level: 96, levelLabel: "Master" }
    ]
  },
  {
    category: "Prototyping & Motion",
    skills: [
      { name: "Framer (Advanced Micro-interactions)", level: 94, levelLabel: "Expert" },
      { name: "Protopie & Interactive Haptics", level: 90, levelLabel: "Advanced" },
      { name: "Lottie & Vector Animations", level: 88, levelLabel: "Advanced" },
      { name: "Spline 3D Interactive Web UI", level: 85, levelLabel: "Proficient" }
    ]
  },
  {
    category: "Research & Strategy",
    skills: [
      { name: "Qualitative & Quantitative User Testing", level: 92, levelLabel: "Expert" },
      { name: "Usability Audits & Heuristic Evaluation", level: 96, levelLabel: "Master" },
      { name: "A/B Testing & Conversion Optimization", level: 89, levelLabel: "Advanced" },
      { name: "Accessibility (WCAG 2.1 AAA Compliance)", level: 94, levelLabel: "Expert" }
    ]
  },
  {
    category: "Code Handoff & Frontend",
    skills: [
      { name: "HTML5 / CSS3 / Tailwind CSS", level: 95, levelLabel: "Expert" },
      { name: "Next.js & React Component Structure", level: 88, levelLabel: "Advanced" },
      { name: "Git & Dev Tokens Handoff", level: 90, levelLabel: "Advanced" }
    ]
  }
];

const certifications = [
  { title: "NN/g UX Master Certification", issuer: "Nielsen Norman Group", year: "2024" },
  { title: "Advanced Design Systems Specialist", issuer: "Figma Academy", year: "2023" },
  { title: "Interaction Design & Motion", issuer: "Interaction Design Foundation", year: "2023" }
];

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState(0);

  const handleCategorySelect = (idx: number) => {
    setActiveCategory(idx);
    uxAudio.playPop();
  };

  return (
    <section id="skills" className="relative py-28 overflow-hidden bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 font-mono text-xs mb-3"
          >
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            <span>TECHNICAL PROFICIENCY</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            Design Capabilities &amp; <span className="text-gradient-cyan">Skill Matrix</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed"
          >
            Devangi combines deep human-centered research, pixel-perfect visual craft, and technical code handoff capabilities.
          </motion.p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {skillCategories.map((cat, idx) => (
            <button
              key={cat.category}
              onClick={() => handleCategorySelect(idx)}
              data-cursor={cat.category.toUpperCase()}
              className={`px-5 py-2.5 rounded-2xl text-xs font-semibold transition-all duration-300 border ${
                activeCategory === idx
                  ? "bg-gradient-to-r from-cyan-600 to-indigo-600 text-white border-cyan-400/40 shadow-lg shadow-cyan-600/20 scale-105"
                  : "bg-slate-900/60 text-slate-400 border-white/10 hover:text-white hover:bg-slate-800"
              }`}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
        >
          {skillCategories[activeCategory].skills.map((skill, idx) => (
            <div
              key={skill.name}
              className="glass-card p-6 rounded-3xl border border-white/10 flex flex-col justify-between group hover:border-cyan-500/40 transition-colors"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                    <Wrench className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {skill.name}
                  </h4>
                </div>
                <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-950/60 px-3 py-1 rounded-full border border-cyan-500/30">
                  {skill.levelLabel}
                </span>
              </div>

              {/* Progress Meter Bar */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs text-slate-400 font-mono">
                  <span>Proficiency</span>
                  <span className="font-bold text-white">{skill.level}%</span>
                </div>
                <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden border border-white/5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: idx * 0.1 }}
                    className="h-full bg-gradient-to-r from-cyan-500 via-indigo-500 to-pink-500 rounded-full"
                  />
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Certifications & Industry Recognition */}
        <div className="glass-card rounded-3xl p-8 border border-white/10">
          <div className="flex items-center gap-3 mb-6">
            <Award className="w-6 h-6 text-amber-400" />
            <h3 className="text-xl font-bold text-white">Certifications &amp; UX Accreditation</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {certifications.map((cert, i) => (
              <div key={i} className="p-4 rounded-2xl bg-slate-900/80 border border-white/5 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                    {cert.year}
                  </span>
                  <h4 className="text-sm font-bold text-white mt-2">{cert.title}</h4>
                  <p className="text-xs text-slate-400 font-mono mt-1">{cert.issuer}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/5 flex items-center text-xs text-emerald-400 gap-1 font-mono">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified Credential</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

