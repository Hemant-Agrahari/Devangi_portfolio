"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { 
  Sparkles, 
  Palette, 
  Sliders, 
  Check, 
  Copy, 
  Layers, 
  MousePointer,
  BellRing
} from "lucide-react";
import { uxAudio } from "@/utils/audio";

const colorTokens = [
  { name: "Primary Brand Indigo", hex: "#6366f1", variable: "--color-indigo" },
  { name: "Accent Cyber Purple", hex: "#a855f7", variable: "--color-purple" },
  { name: "Vibrant Neon Pink", hex: "#ec4899", variable: "--color-pink" },
  { name: "Electric Cyan", hex: "#06b6d4", variable: "--color-cyan" },
  { name: "Emerald Signal", hex: "#10b981", variable: "--color-emerald" },
  { name: "Obsidian Deep", hex: "#090a0f", variable: "--color-bg" },
];

export default function DesignSystemPlayground() {
  const [copiedColor, setCopiedColor] = useState<string | null>(null);
  const [toggleActive, setToggleActive] = useState(true);
  const [selectedVariant, setSelectedVariant] = useState<"glass" | "glow" | "neumorphic">("glass");
  const [buttonLoading, setButtonLoading] = useState(false);

  const handleCopyColor = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedColor(hex);
    uxAudio.playChime();
    
    // Trigger celebratory confetti burst
    confetti({
      particleCount: 35,
      spread: 60,
      origin: { y: 0.8 },
      colors: ["#6366f1", "#a855f7", "#ec4899"]
    });

    setTimeout(() => setCopiedColor(null), 2000);
  };

  const handleVariantSwitch = (variant: "glass" | "glow" | "neumorphic") => {
    setSelectedVariant(variant);
    uxAudio.playPop();
  };

  const handleToggle = () => {
    setToggleActive(!toggleActive);
    uxAudio.playPop();
  };

  const handleInteractiveButtonClick = () => {
    uxAudio.playClick();
    setButtonLoading(true);
    setTimeout(() => {
      setButtonLoading(false);
      uxAudio.playChime();
    }, 1200);
  };

  return (
    <section id="design-system" className="relative py-28 overflow-hidden bg-slate-950/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 font-mono text-xs mb-3"
          >
            <Sliders className="w-3.5 h-3.5 text-purple-400" />
            <span>INTERACTIVE UI PLAYGROUND</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            Design System &amp; <span className="text-gradient-accent">Micro-Interactions</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed"
          >
            Test Devangi&apos;s live component state engine. Click tokens to copy color variables, switch component states, and trigger micro-animations.
          </motion.p>
        </div>

        {/* Playground Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Side: Color Token Swatches */}
          <div className="lg:col-span-5 glass-card rounded-3xl p-6 border border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
                <span className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
                  <Palette className="w-4 h-4 text-indigo-400" /> Figma Design Tokens
                </span>
                <span className="text-[10px] font-mono text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20">
                  v2.4 Ready
                </span>
              </div>
              <p className="text-xs text-slate-400 mb-6">
                Click any design token Swatch to copy hex code and launch particle animation.
              </p>

              <div className="space-y-3">
                {colorTokens.map((token) => (
                  <div
                    key={token.hex}
                    onClick={() => handleCopyColor(token.hex)}
                    data-cursor="COPY HEX"
                    className="flex items-center justify-between p-3 rounded-2xl bg-slate-900/80 hover:bg-slate-800 border border-white/5 hover:border-indigo-500/40 transition-all duration-200 cursor-pointer group"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="w-8 h-8 rounded-xl shadow-md border border-white/20 transition-transform group-hover:scale-110"
                        style={{ backgroundColor: token.hex }}
                      />
                      <div>
                        <p className="text-xs font-bold text-white group-hover:text-indigo-300 transition-colors">
                          {token.name}
                        </p>
                        <p className="text-[10px] font-mono text-slate-400">{token.variable}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 font-mono text-xs text-slate-400 group-hover:text-white">
                      <span>{token.hex}</span>
                      {copiedColor === token.hex ? (
                        <Check className="w-4 h-4 text-emerald-400 animate-bounce" />
                      ) : (
                        <Copy className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 text-center">
              <span className="text-[11px] text-slate-400 font-mono">
                Tokens automatically sync to Figma Variable Modes &amp; Tailwind Theme.
              </span>
            </div>
          </div>

          {/* Right Side: Interactive Component State Tester */}
          <div className="lg:col-span-7 glass-card rounded-3xl p-6 sm:p-8 border border-white/10 space-y-8">
            
            {/* Component Variant Tabs */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
                  <Layers className="w-4 h-4 text-pink-400" /> Component Surface Styles
                </span>
                <div className="flex gap-1.5 bg-slate-900 p-1 rounded-xl border border-white/10 text-xs">
                  {(["glass", "glow", "neumorphic"] as const).map((variant) => (
                    <button
                      key={variant}
                      onClick={() => handleVariantSwitch(variant)}
                      className={`px-3 py-1 rounded-lg text-[11px] font-semibold capitalize transition-colors ${
                        selectedVariant === variant
                          ? "bg-indigo-600 text-white"
                          : "text-slate-400 hover:text-white"
                      }`}
                    >
                      {variant}
                    </button>
                  ))}
                </div>
              </div>

              {/* Dynamic Card Surface Preview */}
              <div
                className={`p-6 rounded-2xl transition-all duration-500 border ${
                  selectedVariant === "glass"
                    ? "bg-slate-900/60 backdrop-blur-xl border-white/15 shadow-2xl"
                    : selectedVariant === "glow"
                    ? "bg-gradient-to-r from-indigo-900/50 to-purple-900/50 border-indigo-500/40 shadow-[0_0_30px_rgba(99,102,241,0.3)]"
                    : "bg-slate-900 border-slate-800 shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)]"
                }`}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-base font-bold text-white">Dynamic Surface Engine</h4>
                    <p className="text-xs text-slate-300 mt-1">
                      Current Surface: <strong className="text-indigo-400 uppercase font-mono">{selectedVariant}</strong>
                    </p>
                  </div>
                  <Sparkles className="w-5 h-5 text-indigo-400" />
                </div>
              </div>
            </div>

            {/* Interactive Micro-Interaction Controls */}
            <div className="pt-6 border-t border-white/10">
              <span className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2 mb-4">
                <MousePointer className="w-4 h-4 text-cyan-400" /> Micro-Interaction Controls
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Custom Animated Spring Toggle Switch */}
                <div className="p-4 rounded-2xl bg-slate-900/80 border border-white/10 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-white">Spring Physics Toggle</p>
                    <p className="text-[10px] text-slate-400 font-mono">State: {toggleActive ? "ENABLED" : "DISABLED"}</p>
                  </div>
                  
                  <button
                    onClick={handleToggle}
                    data-cursor="TOGGLE"
                    className={`relative w-14 h-8 rounded-full p-1 transition-colors duration-300 ${
                      toggleActive ? "bg-gradient-to-r from-indigo-600 to-pink-600" : "bg-slate-800"
                    }`}
                  >
                    <motion.div
                      layout
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      className={`w-6 h-6 rounded-full bg-white shadow-md ${
                        toggleActive ? "ml-6" : "ml-0"
                      }`}
                    />
                  </button>
                </div>

                {/* Animated Ripple Button Trigger */}
                <div className="p-4 rounded-2xl bg-slate-900/80 border border-white/10 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-white">Ripple Feedback</p>
                    <p className="text-[10px] text-slate-400 font-mono">Test Click Trigger</p>
                  </div>

                  <button
                    onClick={handleInteractiveButtonClick}
                    disabled={buttonLoading}
                    data-cursor="TRIGGER"
                    className="relative px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold text-xs shadow-md hover:scale-105 active:scale-95 transition-all flex items-center gap-2 overflow-hidden"
                  >
                    {buttonLoading ? (
                      <>
                        <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Processing...</span>
                      </>
                    ) : (
                      <>
                        <BellRing className="w-3.5 h-3.5 text-amber-300" />
                        <span>Trigger Pulse</span>
                      </>
                    )}
                  </button>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

