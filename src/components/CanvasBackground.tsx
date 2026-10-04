"use client";

import React, { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
  alpha: number;
}

export default function CanvasBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    const colors = [
      "rgba(99, 102, 241, ",   // indigo
      "rgba(168, 85, 247, ",  // purple
      "rgba(236, 72, 153, ",  // pink
      "rgba(6, 182, 212, "    // cyan
    ];

    const particles: Particle[] = [];
    const particleCount = Math.min(Math.floor(width / 20), 65);

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2.5 + 0.8,
        speedX: (Math.random() - 0.5) * 0.4,
        speedY: (Math.random() - 0.5) * 0.4,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.5 + 0.2,
      });
    }

    let mouseX = width / 2;
    let mouseY = height / 2;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw subtle connecting lines between nearby particles
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];

        // Update position
        p1.x += p1.speedX;
        p1.y += p1.speedY;

        // Bounce off screen bounds
        if (p1.x < 0 || p1.x > width) p1.speedX *= -1;
        if (p1.y < 0 || p1.y > height) p1.speedY *= -1;

        // Subtle mouse interaction push
        const dx = mouseX - p1.x;
        const dy = mouseY - p1.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 120) {
          const angle = Math.atan2(dy, dx);
          const force = (120 - dist) / 120;
          p1.x -= Math.cos(angle) * force * 0.8;
          p1.y -= Math.sin(angle) * force * 0.8;
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.size, 0, Math.PI * 2);
        ctx.fillStyle = p1.color + p1.alpha + ")";
        ctx.fill();

        // Connect particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const distTwo = Math.hypot(p1.x - p2.x, p1.y - p2.y);
          if (distTwo < 110) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(129, 140, 248, ${0.15 * (1 - distTwo / 110)})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-70"
    />
  );
}
