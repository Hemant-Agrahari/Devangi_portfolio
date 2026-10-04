"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Star, Quote, Building2, UserCheck } from "lucide-react";

const testimonials = [
  {
    name: "Alexander Wright",
    role: "VP of Product",
    company: "Nova Neobank Inc.",
    quote: "Devangi redesigned our core iOS onboarding flow. Her focus on micro-interactions boosted our 7-day conversion rate by 42%. Handing off Figma tokens directly to React Native was seamless!",
    rating: 5,
    metric: "+42% Conversion Rate",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
  },
  {
    name: "Sophia Chen",
    role: "Head of Design",
    company: "Pulse AI Platform",
    quote: "Devangi is that rare senior designer who excels equally in deep UX research and high-fidelity motion graphics. Her component token system saved our frontend engineering team hundreds of hours.",
    rating: 5,
    metric: "75% Faster Dev Handoff",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80"
  },
  {
    name: "Marcus Vance",
    role: "Founder & CEO",
    company: "Vogue Luxury Commerce",
    quote: "The interactive 3D product showcase Devangi designed raised our average order value by 28%. Our customers constantly compliment how intuitive and buttery smooth the checkout feels.",
    rating: 5,
    metric: "+28% Order Value",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80"
  },
  {
    name: "Elena Rostova",
    role: "Lead UX Researcher",
    company: "Aura Telehealth",
    quote: "Devangi's dedication to WCAG AAA accessibility for our telemedicine app was inspiring. She proved that inclusive design can look incredibly sleek and modern.",
    rating: 5,
    metric: "4.9 ★ App Rating",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80"
  }
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative py-28 overflow-hidden bg-slate-950/60">
      {/* Background Accent */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-pink-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-300 font-mono text-xs mb-3"
          >
            <UserCheck className="w-3.5 h-3.5 text-pink-400" />
            <span>CLIENT RECOGNITION</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            Trusted by <span className="text-gradient-accent">Product Leaders</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed"
          >
            Here is what founders, product managers, and design leads have to say about collaborating with Devangi.
          </motion.p>
        </div>
      </div>

      {/* Infinite Smooth Testimonial Marquee Slider */}
      <div className="relative w-full overflow-hidden py-4">
        {/* Left & Right Blur Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-48 bg-gradient-to-r from-slate-950 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-48 bg-gradient-to-l from-slate-950 to-transparent z-20 pointer-events-none" />

        <div className="flex gap-6 animate-marquee hover:[animation-play-state:paused] w-max">
          {[...testimonials, ...testimonials].map((test, index) => (
            <div
              key={index}
              className="w-[340px] sm:w-[420px] glass-card glass-card-hover rounded-3xl p-6 sm:p-8 border border-white/10 flex flex-col justify-between flex-shrink-0"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400 gap-1">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded-full border border-emerald-500/20">
                    {test.metric}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed italic">
                  &ldquo;{test.quote}&rdquo;
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-3">
                <img
                  src={test.avatar}
                  alt={test.name}
                  className="w-11 h-11 rounded-full object-cover border border-white/20 shadow-md"
                />
                <div>
                  <h4 className="text-sm font-bold text-white">{test.name}</h4>
                  <p className="text-xs text-slate-400 font-mono">
                    {test.role} • <span className="text-indigo-300">{test.company}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
