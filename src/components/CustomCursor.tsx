"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [cursorText, setCursorText] = useState("");

  useEffect(() => {
    document.body.classList.add("custom-cursor-active");

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      // Check if hovering over clickable or interactive element with data-cursor attribute
      const target = e.target as HTMLElement | null;
      const interactiveEl = target?.closest("[data-cursor]") as HTMLElement | null;
      
      if (interactiveEl) {
        setIsHovered(true);
        setCursorText(interactiveEl.getAttribute("data-cursor") || "");
      } else if (target?.closest("button, a, input, textarea, [role='button']")) {
        setIsHovered(true);
        setCursorText("");
      } else {
        setIsHovered(false);
        setCursorText("");
      }
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      document.body.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden hidden lg:block">
      {/* Outer Cursor Aura */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-indigo-500/40 bg-indigo-500/10 backdrop-blur-[2px] pointer-events-none flex items-center justify-center text-[10px] font-semibold tracking-wider text-indigo-200 uppercase shadow-lg shadow-indigo-500/20"
        animate={{
          x: mousePosition.x - (isHovered ? 36 : 16),
          y: mousePosition.y - (isHovered ? 36 : 16),
          width: isHovered ? 72 : 32,
          height: isHovered ? 72 : 32,
          scale: isHovered ? 1.1 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 350,
          damping: 25,
          mass: 0.5,
        }}
      >
        {cursorText && (
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="px-1 text-center truncate font-mono text-[10px]"
          >
            {cursorText}
          </motion.span>
        )}
      </motion.div>

      {/* Inner Precision Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-gradient-to-r from-indigo-400 to-pink-400 rounded-full pointer-events-none shadow-[0_0_10px_#818cf8]"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          opacity: isHovered ? 0.3 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 700,
          damping: 30,
        }}
      />
    </div>
  );
}
