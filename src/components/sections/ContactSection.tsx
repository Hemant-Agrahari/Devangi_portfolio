"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { 
  Mail, 
  Send, 
  Sparkles, 
  CheckCircle2, 
  Calendar, 
  ArrowUpRight, 
  Clock
} from "lucide-react";
import { uxAudio } from "@/utils/audio";

const budgetOptions = [
  "< $5,000",
  "$5,000 - $15,000",
  "$15,000 - $30,000",
  "$30,000+"
];

export default function ContactSection() {
  const [selectedBudget, setSelectedBudget] = useState(budgetOptions[1]);
  const [formData, setFormData] = useState({ name: "", email: "", projectType: "Mobile UX", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleBudgetSelect = (budget: string) => {
    setSelectedBudget(budget);
    uxAudio.playPop();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    uxAudio.playClick();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      uxAudio.playChime();

      // Trigger Confetti
      confetti({
        particleCount: 80,
        spread: 80,
        origin: { y: 0.7 }
      });
    }, 1200);
  };

  return (
    <section id="contact" className="relative py-28 overflow-hidden bg-slate-950">
      {/* Glow */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact Details */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 font-mono text-xs mb-3"
            >
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>LET&apos;S CREATE MAGIC</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight"
            >
              Have a project in mind? <br />
              <span className="text-gradient-accent">Let&apos;s build it.</span>
            </motion.h2>

            <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              Whether you need a full product redesign, a scalable Figma design system, or high-fidelity motion prototypes, Devangi is ready to collaborate.
            </p>

            {/* Quick Info Grid */}
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3 p-4 rounded-2xl bg-slate-900/80 border border-white/10">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 border border-indigo-500/20">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-slate-400 uppercase">Direct Email</p>
                  <a href="mailto:devangi.uiux@design.com" className="text-sm font-bold text-white hover:text-indigo-400 transition-colors">
                    devangi.uiux@design.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 rounded-2xl bg-slate-900/80 border border-white/10">
                <div className="w-10 h-10 rounded-xl bg-pink-500/10 flex items-center justify-center text-pink-400 border border-pink-500/20">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-slate-400 uppercase">Book 30-min UX Audit</p>
                  <a href="#contact" className="text-sm font-bold text-white hover:text-pink-400 transition-colors flex items-center gap-1">
                    <span>Schedule Figma Handoff Call</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-pink-400" />
                  </a>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-900/80 border border-white/10 font-mono text-xs text-slate-400">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> Response Time: &lt; 4 Hours
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> EST / PST / UTC
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-6 sm:p-10 rounded-3xl border border-white/15 shadow-2xl relative"
            >
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Message Received!</h3>
                  <p className="text-slate-300 text-sm max-w-md mx-auto">
                    Thank you for reaching out! Devangi will review your project details and get back to you within 4 hours.
                  </p>
                  <button
                    onClick={() => {
                      uxAudio.playClick();
                      setSubmitted(false);
                    }}
                    className="px-6 py-2.5 rounded-full bg-slate-800 text-slate-200 text-xs font-semibold hover:bg-slate-700 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-2">Your Name</label>
                      <input
                        type="text"
                        required
                        placeholder="Jane Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-slate-900/90 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-2">Email Address</label>
                      <input
                        type="email"
                        required
                        placeholder="jane@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-slate-900/90 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Project Type */}
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-2">Project Focus</label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-slate-900/90 border border-white/10 text-white text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                    >
                      <option value="Mobile UX">Mobile App UI/UX (iOS &amp; Android)</option>
                      <option value="SaaS Web">SaaS Dashboard &amp; Web Platform</option>
                      <option value="Design System">Figma Design System Architecture</option>
                      <option value="UX Audit">UX Audit &amp; Micro-interaction Refresh</option>
                    </select>
                  </div>

                  {/* Project Budget Selector */}
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-2">Estimated Budget Range</label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {budgetOptions.map((budget) => (
                        <button
                          type="button"
                          key={budget}
                          onClick={() => handleBudgetSelect(budget)}
                          className={`py-2 px-3 rounded-xl text-xs font-mono transition-all ${
                            selectedBudget === budget
                              ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold shadow-md"
                              : "bg-slate-900/80 text-slate-400 border border-white/5 hover:bg-slate-800"
                          }`}
                        >
                          {budget}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-2">Project Brief &amp; Goals</label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Tell me about your product timelines, target users, and key deliverables..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-slate-900/90 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    data-cursor="SEND MESSAGE"
                    className="w-full py-4 rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-bold text-sm shadow-xl shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Transmitting Brief...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Proposal Request</span>
                      </>
                    )}
                  </button>

                </form>
              )}
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}

