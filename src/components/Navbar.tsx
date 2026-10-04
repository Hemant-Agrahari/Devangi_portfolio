"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Menu, X, ArrowUpRight, Compass, Volume2, VolumeX } from "lucide-react";
import { uxAudio } from "@/utils/audio";

const navLinks = [
  { name: "Hero", href: "#hero" },
  { name: "Selected Works", href: "#works" },
  { name: "UX Process", href: "#process" },
  { name: "Design System", href: "#design-system" },
  { name: "Skills", href: "#skills" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Section highlight observer
      const sections = navLinks.map((link) => link.href.substring(1));
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => {
    uxAudio.playClick();
  };

  const handleSoundToggle = () => {
    const muted = uxAudio.toggleMute();
    setIsMuted(muted);
    if (!muted) {
      uxAudio.playPop();
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-8 py-4 transition-all duration-300">
      <div className="max-w-7xl mx-auto">
        <div
          className={`flex items-center justify-between px-6 py-3.5 rounded-full transition-all duration-500 ${
            scrolled
              ? "bg-slate-950/80 backdrop-blur-xl border border-white/10 shadow-2xl shadow-indigo-950/40"
              : "bg-transparent border border-white/5"
          }`}
        >
          {/* Brand Logo */}
          <a
            href="#hero"
            onClick={handleNavClick}
            className="flex items-center gap-2.5 group"
            data-cursor="DEVANGI"
          >
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 p-[1.5px] transition-transform duration-300 group-hover:scale-110">
              <div className="w-full h-full bg-slate-950 rounded-full flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-indigo-400 group-hover:rotate-12 transition-transform duration-300" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-base font-bold tracking-tight text-white flex items-center gap-1">
                DEVANGI <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              </span>
              <span className="text-[10px] font-mono tracking-wider text-slate-400 uppercase -mt-0.5">
                UI/UX Architect
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-white/5 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={handleNavClick}
                  data-cursor={link.name}
                  className={`relative px-4 py-1.5 text-xs font-medium rounded-full transition-colors duration-200 ${
                    isActive ? "text-white font-semibold" : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-gradient-to-r from-indigo-600/80 to-purple-600/80 rounded-full border border-indigo-400/30 shadow-md shadow-indigo-500/20"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Action CTA & Audio Toggle */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Audio Feedback Switcher */}
            <button
              onClick={handleSoundToggle}
              data-cursor={isMuted ? "SOUND OFF" : "SOUND ON"}
              aria-label="Toggle Sound Effects"
              className="p-2 rounded-full bg-slate-900/80 hover:bg-slate-800 border border-white/10 text-slate-300 hover:text-white transition-colors"
            >
              {isMuted ? <VolumeX className="w-4 h-4 text-rose-400" /> : <Volume2 className="w-4 h-4 text-emerald-400" />}
            </button>

            <a
              href="#contact"
              onClick={handleNavClick}
              data-cursor="LET'S TALK"
              className="relative inline-flex items-center justify-center gap-2 px-5 py-2 text-xs font-semibold text-white rounded-full overflow-hidden group bg-gradient-to-r from-indigo-600 to-pink-600 p-[1px] shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all duration-300 hover:scale-105"
            >
              <span className="absolute inset-0 bg-slate-950 rounded-full transition-all duration-300 group-hover:bg-opacity-0" />
              <Compass className="w-3.5 h-3.5 text-indigo-400 group-hover:text-white transition-colors z-10" />
              <span className="relative z-10 tracking-wide">Hire Devangi</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform z-10" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => {
              uxAudio.playPop();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="md:hidden p-2 text-slate-300 hover:text-white rounded-lg bg-slate-900/80 border border-white/10"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-3 max-w-7xl mx-auto"
          >
            <div className="glass-card p-6 rounded-3xl border border-white/10 flex flex-col gap-3 shadow-2xl">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => {
                    uxAudio.playClick();
                    setMobileMenuOpen(false);
                  }}
                  className="px-4 py-2.5 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 font-medium text-sm flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="w-4 h-4 text-indigo-400" />
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => {
                  uxAudio.playClick();
                  setMobileMenuOpen(false);
                }}
                className="mt-2 text-center py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-pink-600 text-white font-semibold text-sm shadow-lg"
              >
                Hire Devangi Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

