"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Layers, Sparkles, Sliders, ArrowUpRight } from "lucide-react";
import WireframeComparisonModal, { ProjectData } from "./WireframeComparisonModal";
import { uxAudio } from "@/utils/audio";

const projects: ProjectData[] = [
  {
    id: "neobank",
    title: "Nova Fintech Neobank",
    category: "Mobile UX",
    subtitle: "End-to-End iOS Financial Mobile Experience",
    description: "Redesigned financial onboarding flow and transaction management dashboard. Reduced drop-off rates by 38% through smooth haptic micro-interactions and simplified biometric authentication UX.",
    metrics: [
      { label: "Conversion Lift", value: "+42%" },
      { label: "Onboarding Time", value: "-60s" }
    ],
    tags: ["iOS Design", "Fintech UX", "Framer Micro-interactions"],
    gradient: "from-indigo-900 via-slate-900 to-purple-950",
    highFiColor: "#6366f1",
    wireframeFeatures: ["Card Stack Layout", "Gesture Navigation", "Quick Pay Drawer"],
    highFiFeatures: ["Dark Theme Contrast AA+", "Haptic Sound Feedback", "Biometric Modal"]
  },
  {
    id: "saas-analytics",
    title: "Pulse AI Analytics Suite",
    category: "SaaS Web",
    subtitle: "Enterprise Data Visualization & AI Copilot Workspace",
    description: "Architected scalable multi-tenant SaaS dashboard for 50k+ daily active business users. Designed customizable modular widget system with drag-and-drop canvas capabilities.",
    metrics: [
      { label: "Daily Active Retention", value: "88.4%" },
      { label: "Task Speed", value: "+3.2x" }
    ],
    tags: ["Design System", "Data Visualization", "Enterprise SaaS"],
    gradient: "from-purple-900 via-slate-900 to-pink-950",
    highFiColor: "#a855f7",
    wireframeFeatures: ["Modular Grid System", "Top Navigation Bar", "Side Filter Rail"],
    highFiFeatures: ["Live Canvas Charts", "Figma Token Variables", "Keyboard Shortcuts"]
  },
  {
    id: "health-app",
    title: "Aura Health & Telemedicine",
    category: "Mobile UX",
    subtitle: "Holistic Care & Instant Doctor Consultations",
    description: "Crafted accessible telehealth application prioritizing patient empathy, clear appointment scheduling, and encrypted vitals tracking for elderly and non-tech users.",
    metrics: [
      { label: "App Store Rating", value: "4.9 ★" },
      { label: "User Satisfaction", value: "99.1%" }
    ],
    tags: ["Healthcare UX", "Accessibility WCAG 2.1", "iOS & Android"],
    gradient: "from-cyan-950 via-slate-900 to-indigo-950",
    highFiColor: "#06b6d4",
    wireframeFeatures: ["Big Touch Targets", "High Contrast Font", "Emergency Floating CTA"],
    highFiFeatures: ["WCAG AAA Color System", "Voice Assistant UX", "Simplified Forms"]
  },
  {
    id: "design-system",
    title: "Nexus Global Design System",
    category: "Design System",
    subtitle: "Multi-Platform Component Library with 120+ Components",
    description: "Built unified tokenized design system for cross-platform iOS, Android, and Web applications. Standardized typography, semantic spacing, dynamic themes, and component state guidelines.",
    metrics: [
      { label: "Dev Handoff Efficiency", value: "+75%" },
      { label: "Token Variants", value: "450+" }
    ],
    tags: ["Figma Tokens", "Component Library", "UX Documentation"],
    gradient: "from-pink-950 via-slate-900 to-purple-950",
    highFiColor: "#ec4899",
    wireframeFeatures: ["Atomic Hierarchy", "Auto-Layout Frames", "Component Specs"],
    highFiFeatures: ["Figma Variable Modes", "Code-Synced Tokens", "Motion Specs"]
  },
  {
    id: "ecommerce-luxe",
    title: "Vogue Commerce Mobile",
    category: "E-Commerce",
    subtitle: "Luxury Fashion & Immersive 3D Product Showcase",
    description: "Engineered ultra-sleek luxury shopping experience featuring smooth page transitions, sticky bottom cart drawer, and interactive 3D product view capabilities.",
    metrics: [
      { label: "Average Order Value", value: "+28%" },
      { label: "Cart Abandonment", value: "-22%" }
    ],
    tags: ["Luxury E-Commerce", "3D Product Viewer", "Checkout UX"],
    gradient: "from-emerald-950 via-slate-900 to-indigo-950",
    highFiColor: "#10b981",
    wireframeFeatures: ["Product Grid Blueprint", "Sticky Checkout Rail", "Filters Modal"],
    highFiFeatures: ["Dynamic Glass Cards", "Smooth Swipe Gestures", "Instant One-Tap Checkout"]
  }
];

const categories = ["All", "Mobile UX", "SaaS Web", "Design System", "E-Commerce"];

export default function WorksSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeProjectModal, setActiveProjectModal] = useState<ProjectData | null>(null);

  const handleCategorySelect = (cat: string) => {
    setSelectedCategory(cat);
    uxAudio.playPop();
  };

  const handleOpenModal = (project: ProjectData) => {
    setActiveProjectModal(project);
    uxAudio.playClick();
  };

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="works" className="relative py-28 overflow-hidden bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 font-mono text-xs mb-3"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>CURATED CASE STUDIES</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
            >
              Featured <span className="text-gradient-accent">UI/UX Projects</span>
            </motion.h2>
          </div>

          {/* Category Filter Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap gap-2 bg-slate-900/80 p-1.5 rounded-2xl border border-white/10"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategorySelect(cat)}
                data-cursor={cat.toUpperCase()}
                className={`relative px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                  selectedCategory === cat
                    ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md shadow-indigo-600/30"
                    : "text-slate-400 hover:text-slate-200 hover:bg-white/5"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Projects Cards Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group relative glass-card glass-card-hover rounded-3xl overflow-hidden border border-white/10 p-6 flex flex-col justify-between"
              >
                {/* Visual Header Card */}
                <div>
                  <div className={`relative w-full h-52 rounded-2xl bg-gradient-to-br ${project.gradient} p-5 flex flex-col justify-between overflow-hidden border border-white/10`}>
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] font-mono tracking-wider font-bold text-white uppercase bg-slate-950/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                        {project.category}
                      </span>
                      <button
                        onClick={() => handleOpenModal(project)}
                        data-cursor="INSPECT"
                        className="w-8 h-8 rounded-full bg-slate-950/70 hover:bg-indigo-600 text-white flex items-center justify-center border border-white/10 transition-colors"
                      >
                        <Sliders className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Interactive Prototype Wireframe Preview Badge */}
                    <div
                      onClick={() => handleOpenModal(project)}
                      className="space-y-2 bg-slate-950/70 backdrop-blur-md p-3 rounded-xl border border-white/10 transition-transform duration-300 group-hover:translate-y-0 translate-y-1 cursor-pointer"
                    >
                      <div className="flex items-center justify-between text-xs text-white font-semibold">
                        <span className="flex items-center gap-1">
                          <Layers className="w-3.5 h-3.5 text-indigo-400" /> Interactive UX Breakdown
                        </span>
                        <span className="text-[10px] text-indigo-300 font-mono">Click to Compare</span>
                      </div>
                      <div className="w-full bg-slate-800/80 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-gradient-to-r from-indigo-500 to-pink-500 h-full w-3/4 rounded-full" />
                      </div>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="mt-6">
                    <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors flex items-center justify-between">
                      <span>{project.title}</span>
                      <ArrowUpRight className="w-5 h-5 text-slate-500 group-hover:text-indigo-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                    </h3>
                    <p className="text-xs text-slate-400 mt-1 font-mono">{project.subtitle}</p>
                    <p className="text-slate-300 text-xs mt-3 leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                  <div className="flex gap-2">
                    {project.metrics.slice(0, 1).map((m, i) => (
                      <span key={i} className="text-xs font-bold text-emerald-400 bg-emerald-950/40 px-2.5 py-1 rounded-full border border-emerald-500/20 font-mono">
                        {m.value} {m.label}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => handleOpenModal(project)}
                    data-cursor="COMPARE"
                    className="text-xs font-semibold text-indigo-300 hover:text-white flex items-center gap-1 group/btn"
                  >
                    <span>Inspect UX</span>
                    <Sliders className="w-3.5 h-3.5 group-hover/btn:rotate-45 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal render */}
        <WireframeComparisonModal
          project={activeProjectModal}
          onClose={() => setActiveProjectModal(null)}
        />
      </div>
    </section>
  );
}

