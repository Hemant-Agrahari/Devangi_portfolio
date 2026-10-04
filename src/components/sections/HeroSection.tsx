"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Sparkles, 
  Figma, 
  Layers, 
  ArrowRight, 
  MousePointerClick, 
  Palette, 
  Smartphone, 
  Zap, 
  Eye,
  EyeOff
} from "lucide-react";
import FigmaMultiplayerCursors from "../FigmaMultiplayerCursors";
import { uxAudio } from "@/utils/audio";

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState<"wireframe" | "highfi">("highfi");
  const [showBalance, setShowBalance] = useState(true);

  const handleTabSwitch = (tab: "wireframe" | "highfi") => {
    setActiveTab(tab);
    uxAudio.playPop();
  };

  const handleToggleBalance = () => {
    setShowBalance(!showBalance);
    uxAudio.playClick();
  };

  return (
    <section id="hero" className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden">
      {/* Simulated Live Figma Multiplayer Cursors Floating */}
      <FigmaMultiplayerCursors />

      {/* Dynamic Ambient Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[140px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-pink-500/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-10 left-10 w-[350px] h-[350px] bg-cyan-500/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Text Content */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Status Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-mono mb-6 backdrop-blur-md"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for Senior UI/UX &amp; Design Lead Roles</span>
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            </motion.div>

            {/* Main Animated Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] text-white"
            >
              Designing <br className="hidden sm:block" />
              <span className="text-gradient-accent">Intuitive &amp; Motion</span> <br />
              Digital Experiences.
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal"
            >
              Hi, I&apos;m <strong className="text-indigo-400 font-semibold">Devangi</strong> — a Senior Product &amp; UI/UX Designer crafting high-converting mobile applications, scalable design systems, and micro-animated digital interfaces.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center gap-4 w-full sm:w-auto"
            >
              <a
                href="#works"
                onClick={() => uxAudio.playClick()}
                data-cursor="VIEW WORKS"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-semibold text-sm shadow-xl shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <span>Explore Case Studies</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#design-system"
                onClick={() => uxAudio.playClick()}
                data-cursor="PLAYGROUND"
                className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white border border-white/10 text-sm font-semibold backdrop-blur-md hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Zap className="w-4 h-4 text-amber-400" />
                <span>Interactive Design Sandbox</span>
              </a>
            </motion.div>

            {/* Metric Floating Cards */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-12 grid grid-cols-3 gap-4 w-full pt-8 border-t border-white/10"
            >
              <div>
                <h4 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-1">
                  50<span className="text-indigo-400">+</span>
                </h4>
                <p className="text-xs text-slate-400 mt-1 font-mono">Interfaces Designed</p>
              </div>
              <div>
                <h4 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-1">
                  99.8<span className="text-pink-400">%</span>
                </h4>
                <p className="text-xs text-slate-400 mt-1 font-mono">User Satisfaction</p>
              </div>
              <div>
                <h4 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-1">
                  12<span className="text-cyan-400">+</span>
                </h4>
                <p className="text-xs text-slate-400 mt-1 font-mono">Design Systems Built</p>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Interactive 3D Mockup Container */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative w-full max-w-md aspect-[4/5] rounded-3xl glass-card p-4 border border-white/15 shadow-2xl overflow-hidden group"
            >
              {/* Header inside Phone Mockup */}
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                
                {/* Wireframe vs High-Fi Toggle Switch */}
                <div className="flex bg-slate-900/90 p-1 rounded-full border border-white/10 text-[10px] font-mono">
                  <button
                    onClick={() => handleTabSwitch("wireframe")}
                    className={`px-2.5 py-1 rounded-full transition-colors ${
                      activeTab === "wireframe"
                        ? "bg-indigo-600 text-white font-bold"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    Wireframe
                  </button>
                  <button
                    onClick={() => handleTabSwitch("highfi")}
                    className={`px-2.5 py-1 rounded-full transition-colors ${
                      activeTab === "highfi"
                        ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    High-Fi UI
                  </button>
                </div>
              </div>

              {/* Dynamic Interactive Phone Content View */}
              <div className="mt-4 h-[380px] rounded-2xl overflow-hidden relative bg-slate-950/80 p-4 border border-white/5 flex flex-col justify-between">
                
                {activeTab === "highfi" ? (
                  <motion.div
                    key="highfi"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className="space-y-4 h-full flex flex-col justify-between"
                  >
                    {/* Top App Card */}
                    <div className="p-4 rounded-xl bg-gradient-to-br from-indigo-900/50 to-slate-900 border border-indigo-500/30">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-pink-500 to-indigo-600 flex items-center justify-center font-bold text-white text-sm shadow-md">
                            D
                          </div>
                          <div>
                            <h5 className="text-sm font-semibold text-white">Fintech Neobank App</h5>
                            <p className="text-[11px] text-indigo-300">UX Audit &amp; Micro-interactions</p>
                          </div>
                        </div>
                        <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-950/50 px-2 py-0.5 rounded-full border border-emerald-500/30">
                          +42% Conv.
                        </span>
                      </div>
                    </div>

                    {/* Interactive Chart Mockup with Balance Toggle */}
                    <div className="p-4 rounded-xl bg-slate-900/90 border border-white/10">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs text-slate-400 font-mono">User Growth Velocity</span>
                        <button
                          onClick={handleToggleBalance}
                          className="flex items-center gap-1 text-xs font-bold text-indigo-400 hover:text-indigo-300 transition-colors"
                        >
                          <span>{showBalance ? "$142,890" : "••••••••"}</span>
                          {showBalance ? <EyeOff className="w-3 h-3 text-slate-400" /> : <Eye className="w-3 h-3 text-slate-400" />}
                        </button>
                      </div>
                      <div className="flex items-end gap-1.5 h-20 pt-4">
                        {[40, 65, 45, 80, 55, 95, 85, 100].map((h, i) => (
                          <motion.div
                            key={i}
                            initial={{ height: 0 }}
                            animate={{ height: `${h}%` }}
                            transition={{ duration: 0.5, delay: i * 0.05 }}
                            onClick={() => uxAudio.playPop()}
                            className="flex-1 bg-gradient-to-t from-indigo-600 to-pink-500 rounded-t-md hover:brightness-125 transition-all cursor-pointer"
                          />
                        ))}
                      </div>
                    </div>

                    {/* Bottom Nav Bar */}
                    <div className="flex items-center justify-around py-2.5 px-4 rounded-xl bg-slate-900 border border-white/10 text-slate-400 text-xs">
                      <div className="text-indigo-400 flex flex-col items-center gap-0.5">
                        <Layers className="w-4 h-4" />
                        <span className="text-[9px]">Home</span>
                      </div>
                      <div className="flex flex-col items-center gap-0.5 hover:text-white cursor-pointer" onClick={() => uxAudio.playClick()}>
                        <Palette className="w-4 h-4" />
                        <span className="text-[9px]">System</span>
                      </div>
                      <div className="flex flex-col items-center gap-0.5 hover:text-white cursor-pointer" onClick={() => uxAudio.playClick()}>
                        <Smartphone className="w-4 h-4" />
                        <span className="text-[9px]">Mobile</span>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="wireframe"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className="space-y-4 h-full flex flex-col justify-between font-mono"
                  >
                    {/* Wireframe Mockup */}
                    <div className="p-4 rounded-xl border border-dashed border-indigo-400/40 bg-indigo-950/20">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl border border-slate-600 border-dashed flex items-center justify-center text-slate-500">
                          [IMG]
                        </div>
                        <div className="space-y-1 flex-1">
                          <div className="h-3 bg-slate-700/60 rounded w-3/4" />
                          <div className="h-2 bg-slate-800/60 rounded w-1/2" />
                        </div>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl border border-dashed border-slate-700 bg-slate-900/40 space-y-2">
                      <div className="h-3 bg-slate-700/60 rounded w-1/3" />
                      <div className="h-16 border border-dashed border-slate-700 rounded-lg flex items-center justify-center text-slate-500 text-xs">
                        [UX Motion Graph Skeleton]
                      </div>
                    </div>

                    <div className="flex justify-around py-3 rounded-xl border border-dashed border-slate-700 bg-slate-900/40 text-slate-500 text-[10px]">
                      <span>[Nav 1]</span>
                      <span>[Nav 2]</span>
                      <span>[Nav 3]</span>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Floating Badge 1 */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-6 glass-card p-3 rounded-2xl border border-white/20 shadow-xl flex items-center gap-3 backdrop-blur-xl"
              >
                <div className="w-10 h-10 rounded-xl bg-indigo-500/20 flex items-center justify-center text-indigo-400 border border-indigo-500/30">
                  <Figma className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-white">Figma Auto-Layout 5.0</p>
                  <p className="text-[10px] text-slate-400">Design Token Specialist</p>
                </div>
              </motion.div>

              {/* Floating Badge 2 */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 glass-card p-3 rounded-2xl border border-white/20 shadow-xl flex items-center gap-2.5 backdrop-blur-xl"
              >
                <MousePointerClick className="w-4 h-4 text-pink-400" />
                <span className="text-xs font-semibold text-slate-200">Micro-interaction Master</span>
              </motion.div>

            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}

