"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Users, 
  Layers, 
  Zap, 
  Palette, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight,
  Search,
  Code
} from "lucide-react";
import { uxAudio } from "@/utils/audio";

const steps = [
  {
    number: "01",
    title: "Empathize & Research",
    icon: Search,
    subtitle: "Understanding User Pain Points & Market Gaps",
    description: "Conduct qualitative user interviews, analyze competitor heuristics, and map comprehensive user journey blueprints to ensure data-driven design decisions.",
    deliverables: ["User Personas", "Journey Maps", "Competitor Matrix", "Pain Point Mapping"],
    color: "from-blue-500 to-indigo-600"
  },
  {
    number: "02",
    title: "Define & Wireframe",
    icon: Layers,
    subtitle: "Structuring Information Architecture & Flow",
    description: "Translate research findings into rapid paper sketches, interactive wireframes, and optimized user navigation hierarchy before aesthetic polish.",
    deliverables: ["Information Architecture", "Lo-Fi Wireframes", "UX Flows", "Clickable Skeletal Prototypes"],
    color: "from-indigo-500 to-purple-600"
  },
  {
    number: "03",
    title: "Prototype & Motion",
    icon: Zap,
    subtitle: "Crafting Micro-Interactions & Feel",
    description: "Transform static concepts into fluid Framer & Figma prototypes with custom spring physics, page transitions, and tactile touch feedback.",
    deliverables: ["Interactive Prototypes", "Micro-interaction Specs", "Gesture Guidelines", "Haptic Timings"],
    color: "from-purple-500 to-pink-600"
  },
  {
    number: "04",
    title: "Visual System & Tokens",
    icon: Palette,
    subtitle: "Creating Scalable Component Libraries",
    description: "Establish robust design systems with semantic color tokens, responsive auto-layouts, dark/light theme variables, and WCAG AAA compliance.",
    deliverables: ["Figma Component Library", "Design Tokens", "Typography Hierarchy", "WCAG Contrast Specs"],
    color: "from-pink-500 to-rose-600"
  },
  {
    number: "05",
    title: "Test & Dev Handoff",
    icon: CheckCircle2,
    subtitle: "Validating with Users & Seamless Dev Specs",
    description: "Run unmoderated usability tests, measure completion rates, iterate on bottlenecks, and hand off pixel-perfect specs with production-ready tokens.",
    deliverables: ["Usability Audit Report", "Dev-Ready Component Specs", "Asset Export Pipeline", "Design QA Checklist"],
    color: "from-emerald-500 to-teal-600"
  }
];

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);

  const handleStepChange = (idx: number) => {
    setActiveStep(idx);
    uxAudio.playPop();
  };

  return (
    <section id="process" className="relative py-28 overflow-hidden bg-slate-950">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 font-mono text-xs mb-3"
          >
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>DESIGN METHODOLOGY</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            Devangi&apos;s 5-Stage <span className="text-gradient-accent">UX Process</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed"
          >
            From empathetic discovery to high-fidelity motion and engineering handoff, every step is crafted to ensure delightful usability and business ROI.
          </motion.p>
        </div>

        {/* Process Step Navigation Nodes */}
        <div className="relative mb-12">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-slate-800 -translate-y-1/2 z-0" />
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isActive = activeStep === idx;
              return (
                <button
                  key={step.number}
                  onClick={() => handleStepChange(idx)}
                  data-cursor={`STEP ${step.number}`}
                  className={`p-4 rounded-2xl border transition-all duration-300 text-left flex flex-col items-start ${
                    isActive
                      ? "bg-slate-900 border-indigo-500 shadow-xl shadow-indigo-500/20 scale-105"
                      : "bg-slate-950/70 border-white/10 hover:border-slate-700 hover:bg-slate-900/40"
                  }`}
                >
                  <div className="flex items-center justify-between w-full mb-3">
                    <span className={`text-xs font-mono font-bold ${isActive ? "text-indigo-400" : "text-slate-500"}`}>
                      {step.number}
                    </span>
                    <div className={`p-2 rounded-xl bg-gradient-to-tr ${step.color} text-white shadow-md`}>
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <h4 className="text-sm font-bold text-white leading-tight">{step.title}</h4>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Step Detailed Display Card */}
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="glass-card rounded-3xl p-6 sm:p-10 border border-white/15 relative overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-mono font-bold text-indigo-400 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20">
                  STAGE {steps[activeStep].number} OF 05
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  {steps[activeStep].subtitle}
                </span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-extrabold text-white">
                {steps[activeStep].title}
              </h3>

              <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                {steps[activeStep].description}
              </p>

              <div className="mt-8">
                <h5 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                  Key Stage Artifacts &amp; Deliverables:
                </h5>
                <div className="grid grid-cols-2 gap-3">
                  {steps[activeStep].deliverables.map((deliv, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs font-medium text-slate-200 bg-slate-900/80 p-3 rounded-xl border border-white/5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      <span>{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Interactive Visual Graphic for Active Step */}
            <div className="lg:col-span-5 flex justify-center">
              <div className={`w-full max-w-sm aspect-square rounded-3xl bg-gradient-to-br ${steps[activeStep].color} p-[1px] shadow-2xl`}>
                <div className="w-full h-full bg-slate-950 rounded-[23px] p-6 flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl pointer-events-none" />
                  
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-extrabold text-white">{steps[activeStep].number}</span>
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">Interactive UX Node</span>
                  </div>

                  <div className="my-auto space-y-3">
                    <div className="p-4 rounded-xl bg-slate-900/90 border border-white/10">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs text-indigo-300 font-mono">Figma Auto-Flow</span>
                        <span className="text-[10px] text-emerald-400 font-mono">VERIFIED</span>
                      </div>
                      <div className="h-2 bg-indigo-500/30 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: "0%" }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 1.2 }}
                          className="h-full bg-indigo-400 rounded-full"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center text-xs text-slate-400 font-mono">
                    <span>Dev Handoff Ready</span>
                    <ArrowRight className="w-4 h-4 text-indigo-400" />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

