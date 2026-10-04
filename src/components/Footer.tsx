"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowUp, Dribbble, Linkedin, Twitter, Figma, Github } from "lucide-react";

const socialLinks = [
  { name: "Figma", icon: Figma, href: "https://figma.com", cursor: "FIGMA PROFILE" },
  { name: "Dribbble", icon: Dribbble, href: "https://dribbble.com", cursor: "DRIBBBLE SHOTS" },
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com", cursor: "LINKEDIN" },
  { name: "Twitter", icon: Twitter, href: "https://twitter.com", cursor: "X / TWITTER" },
  { name: "GitHub", icon: Github, href: "https://github.com", cursor: "GITHUB TOKENS" }
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-slate-950 border-t border-white/10 pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-white/10">
          
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-pink-500 p-[1px]">
                <div className="w-full h-full bg-slate-950 rounded-full flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-indigo-400" />
                </div>
              </div>
              <span className="text-xl font-bold tracking-tight text-white">DEVANGI</span>
            </div>
            <p className="text-xs text-slate-400 font-mono">
              Senior UI/UX Architect &amp; Micro-Interaction Specialist
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor={social.cursor}
                  className="w-10 h-10 rounded-full bg-slate-900/80 hover:bg-indigo-600 text-slate-400 hover:text-white border border-white/10 transition-all duration-300 flex items-center justify-center hover:scale-110 shadow-md"
                >
                  <Icon className="w-4 h-4" />
                </a>
              );
            })}
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            data-cursor="BACK TO TOP"
            className="flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-white bg-slate-900 px-4 py-2.5 rounded-full border border-white/10 transition-colors group"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-1 transition-transform text-indigo-400" />
          </button>
        </div>

        {/* Copyright */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-mono">
          <p>© {new Date().getFullYear()} Devangi UI/UX Portfolio. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with Next.js 14, Framer Motion &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
