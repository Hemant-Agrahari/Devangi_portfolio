"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, ArrowRight, Figma, Sparkles, Layers, Sliders } from "lucide-react";

export interface ProjectData {
  id: string;
  title: string;
  category: string;
  subtitle: string;
  description: string;
  metrics: { label: string; value: string }[];
  tags: string[];
  gradient: string;
  highFiColor: string;
  wireframeFeatures: string[];
  highFiFeatures: string[];
}

interface ModalProps {
  project: ProjectData | null;
  onClose: () => void;
}

export default function WireframeComparisonModal({ project, onClose }: ModalProps) {
  const [sliderPos, setSliderPos] = useState(50);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-slate-950/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto glass-card rounded-3xl border border-white/20 shadow-2xl p-6 sm:p-8"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-white border border-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header */}
          <div className="mb-6">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-mono bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 mb-2">
              {project.category}
            </span>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white">
              {project.title}
            </h3>
            <p className="text-slate-300 text-sm mt-1">{project.subtitle}</p>
          </div>

          {/* Interactive Split Wireframe vs High-Fi Slider */}
          <div className="relative w-full h-[320px] sm:h-[400px] rounded-2xl overflow-hidden border border-white/15 select-none bg-slate-950">
            {/* High-Fi Layer (Underneath right side) */}
            <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} p-6 flex flex-col justify-between`}>
              <div className="flex justify-between items-center text-white">
                <span className="font-bold tracking-wider text-sm flex items-center gap-1.5 bg-black/40 px-3 py-1 rounded-full backdrop-blur-md">
                  <Sparkles className="w-4 h-4 text-amber-300" /> High-Fidelity UI Design
                </span>
                <span className="text-xs font-mono opacity-80">Design System v2.4</span>
              </div>
              <div className="space-y-4 max-w-md bg-slate-950/60 p-6 rounded-2xl backdrop-blur-md border border-white/10">
                <h4 className="text-xl font-bold text-white">Interactive Prototype View</h4>
                <p className="text-xs text-slate-300">
                  Built with atomic component hierarchy, smooth spring transitions, and accessible dark mode contrast ratios.
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.highFiFeatures.map((feat, idx) => (
                    <span key={idx} className="text-[10px] font-mono bg-indigo-500/20 text-indigo-200 px-2.5 py-1 rounded-full border border-indigo-500/30">
                      ✓ {feat}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Wireframe Layer (Clipped left side) */}
            <div
              className="absolute inset-0 bg-slate-900 border-r border-indigo-400 p-6 flex flex-col justify-between"
              style={{ width: `${sliderPos}%` }}
            >
              <div className="flex justify-between items-center text-indigo-300 font-mono">
                <span className="font-bold tracking-wider text-sm flex items-center gap-1.5 bg-slate-950/70 px-3 py-1 rounded-full">
                  <Layers className="w-4 h-4 text-cyan-400" /> Low-Fi Wireframe
                </span>
                <span className="text-xs opacity-80">[Lo-Fi Grid]</span>
              </div>
              <div className="space-y-3 max-w-md bg-slate-950/80 p-5 rounded-2xl border border-dashed border-slate-700 font-mono">
                <span className="text-xs text-indigo-400 font-bold uppercase tracking-widest">[UX Blueprint Structure]</span>
                <p className="text-xs text-slate-400">
                  Focusing on user flow speed, card component hierarchy, and zero visual distraction during testing.
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.wireframeFeatures.map((wf, idx) => (
                    <span key={idx} className="text-[10px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded border border-slate-700">
                      [ {wf} ]
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Drag Handle Slider Bar */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20 shadow-[0_0_15px_#fff]"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-slate-900 text-white border-2 border-indigo-400 flex items-center justify-center shadow-lg">
                <Sliders className="w-4 h-4 text-indigo-300" />
              </div>
            </div>

            {/* Slider Range Input Overlay */}
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPos}
              onChange={(e) => setSliderPos(Number(e.target.value))}
              className="absolute inset-0 opacity-0 cursor-ew-resize w-full h-full z-30"
            />
          </div>

          <p className="text-center text-xs text-slate-400 mt-3 font-mono">
            ← Drag slider left or right to compare Wireframe vs High-Fidelity UI →
          </p>

          {/* Project Details Grid */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-white/10">
            <div className="md:col-span-2">
              <h4 className="text-lg font-bold text-white mb-2">Case Study Overview</h4>
              <p className="text-slate-300 text-sm leading-relaxed">{project.description}</p>
              
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span key={i} className="text-xs px-3 py-1 rounded-full bg-slate-900 text-slate-300 border border-white/10 font-mono">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Metrics */}
            <div className="bg-slate-900/60 p-5 rounded-2xl border border-white/10 flex flex-col justify-around">
              <h5 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">User Impact Metrics</h5>
              {project.metrics.map((m, i) => (
                <div key={i} className="mb-2 last:mb-0">
                  <span className="text-2xl font-bold text-gradient-accent">{m.value}</span>
                  <p className="text-xs text-slate-400 font-mono">{m.label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
