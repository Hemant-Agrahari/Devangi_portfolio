"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";

interface FigmaUser {
  id: string;
  name: string;
  role: string;
  color: string;
  comment: string;
  initialX: number;
  initialY: number;
  animateX: number[];
  animateY: number[];
  delay: number;
}

const figmaUsers: FigmaUser[] = [
  {
    id: "user-1",
    name: "Alex (PM)",
    role: "Product Manager",
    color: "#f43f5e", // Rose
    comment: "Approved! The conversion flow looks crisp 🔥",
    initialX: 120,
    initialY: 280,
    animateX: [120, 240, 180, 120],
    animateY: [280, 200, 320, 280],
    delay: 0,
  },
  {
    id: "user-2",
    name: "Liam (Dev Lead)",
    role: "Frontend Engineer",
    color: "#10b981", // Emerald
    comment: "Token variables map perfectly to Tailwind config 🚀",
    initialX: 680,
    initialY: 160,
    animateX: [680, 580, 720, 680],
    animateY: [160, 240, 190, 160],
    delay: 1.5,
  },
  {
    id: "user-3",
    name: "Sarah (Design System)",
    role: "UX Researcher",
    color: "#a855f7", // Purple
    comment: "WCAG AAA contrast check passed 100% ✨",
    initialX: 350,
    initialY: 480,
    animateX: [350, 450, 290, 350],
    animateY: [480, 420, 520, 480],
    delay: 3,
  }
];

export default function FigmaMultiplayerCursors() {
  const [showComments, setShowComments] = useState(true);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-20 hidden md:block">
      {figmaUsers.map((user) => (
        <motion.div
          key={user.id}
          initial={{ x: user.initialX, y: user.initialY, opacity: 0 }}
          animate={{
            x: user.animateX,
            y: user.animateY,
            opacity: [0.3, 0.9, 0.7, 0.3],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: user.delay,
          }}
          className="absolute top-0 left-0 flex flex-col items-start gap-1"
        >
          {/* Classic Figma Cursor Arrow */}
          <div className="relative flex items-center gap-1.5">
            <svg
              width="18"
              height="22"
              viewBox="0 0 18 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="drop-shadow-md"
            >
              <path
                d="M1 1L16.5 11.5L9.5 13.5L6 20.5L1 1Z"
                fill={user.color}
                stroke="#ffffff"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
            </svg>
            <span
              className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold text-white shadow-md flex items-center gap-1"
              style={{ backgroundColor: user.color }}
            >
              {user.name}
            </span>
          </div>

          {/* Figma Live Comment Bubble */}
          {showComments && (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: [0.9, 1, 0.95], opacity: [0.8, 1, 0.9] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="mt-1 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-white/20 text-[11px] text-slate-200 shadow-xl backdrop-blur-md flex items-center gap-1.5 max-w-[220px]"
            >
              <MessageSquare className="w-3 h-3 flex-shrink-0 text-white" style={{ color: user.color }} />
              <span className="leading-tight">{user.comment}</span>
            </motion.div>
          )}
        </motion.div>
      ))}
    </div>
  );
}
