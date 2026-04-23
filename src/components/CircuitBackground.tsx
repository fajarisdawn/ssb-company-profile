"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function CircuitBackground() {
  const { scrollYProgress } = useScroll();
  const glowOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.15, 0.4, 0.7]);
  const traceProgress = useTransform(scrollYProgress, [0, 1], [1000, 0]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Grid pattern */}
      <div className="absolute inset-0 circuit-grid" />

      {/* Animated SVG circuit traces */}
      <motion.svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        style={{ opacity: glowOpacity }}
      >
        {/* Main vertical trace left */}
        <motion.path
          d="M10 0 L10 30 L20 30 L20 50 L10 50 L10 80 L18 80 L18 100"
          fill="none"
          stroke="var(--circuit-green)"
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
          style={{ strokeDashoffset: traceProgress }}
          strokeDasharray="1000"
          filter="url(#glow)"
        />

        {/* Main vertical trace right */}
        <motion.path
          d="M90 0 L90 20 L80 20 L80 45 L90 45 L90 70 L82 70 L82 100"
          fill="none"
          stroke="var(--circuit-green)"
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
          style={{ strokeDashoffset: traceProgress }}
          strokeDasharray="1000"
          filter="url(#glow)"
        />

        {/* Horizontal connector top */}
        <motion.path
          d="M20 30 L30 30 L30 20 L45 20"
          fill="none"
          stroke="var(--electric-blue)"
          strokeWidth="1.5"
          vectorEffect="non-scaling-stroke"
          style={{ strokeDashoffset: traceProgress }}
          strokeDasharray="1000"
          filter="url(#glowBlue)"
        />

        {/* Horizontal connector mid */}
        <motion.path
          d="M80 45 L68 45 L68 55 L52 55"
          fill="none"
          stroke="var(--electric-blue)"
          strokeWidth="1.5"
          vectorEffect="non-scaling-stroke"
          style={{ strokeDashoffset: traceProgress }}
          strokeDasharray="1000"
          filter="url(#glowBlue)"
        />

        {/* Additional traces */}
        <motion.path
          d="M50 0 L50 15 L42 15 L42 40 L50 40 L50 60 L58 60 L58 80 L50 80 L50 100"
          fill="none"
          stroke="var(--circuit-green)"
          strokeWidth="1"
          strokeOpacity="0.5"
          vectorEffect="non-scaling-stroke"
          style={{ strokeDashoffset: traceProgress }}
          strokeDasharray="1000"
          filter="url(#glow)"
        />

        {/* Circuit nodes */}
        {[
          [10, 30], [20, 30], [20, 50], [10, 50],
          [90, 20], [80, 20], [80, 45], [90, 45],
          [50, 15], [50, 40], [50, 60], [50, 80],
        ].map(([cx, cy], i) => (
          <motion.circle
            key={i}
            cx={`${cx}%`}
            cy={`${cy}%`}
            r="4"
            fill="var(--circuit-green)"
            filter="url(#glow)"
            style={{ opacity: glowOpacity }}
          />
        ))}

        {/* Glow filter */}
        <defs>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="glowBlue" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </motion.svg>

      {/* Radial gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, transparent 0%, var(--midnight) 70%)",
        }}
      />
    </div>
  );
}
