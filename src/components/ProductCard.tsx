"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, type LucideIcon } from "lucide-react";

interface ProductCardProps {
  icon: LucideIcon;
  title: string;
  category: string;
  description: string;
  specs?: string[];
  badge?: string;
  accentColor?: "green" | "blue";
  signalPulse?: boolean;
}

export default function ProductCard({
  icon: Icon,
  title,
  category,
  description,
  specs,
  badge,
  accentColor = "green",
  signalPulse = false,
}: ProductCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const accentMap = {
    green: {
      text: "text-circuit-green",
      bg: "bg-circuit-green",
      bgLight: "bg-circuit-green/10",
      border: "border-circuit-green/20",
      glow: "hover:shadow-[0_0_30px_rgba(0,255,136,0.15)]",
    },
    blue: {
      text: "text-electric-blue",
      bg: "bg-electric-blue",
      bgLight: "bg-electric-blue/10",
      border: "border-electric-blue/20",
      glow: "hover:shadow-[0_0_30px_rgba(0,212,255,0.15)]",
    },
  };

  const accent = accentMap[accentColor];

  const [isTouchDevice, setIsTouchDevice] = useState(false);

  React.useEffect(() => {
    setIsTouchDevice(window.matchMedia("(hover: none)").matches);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current || isExpanded || isTouchDevice) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: y * -10, y: x * 10 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <>
      <motion.div
        ref={cardRef}
        onClick={() => setIsExpanded(true)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={`relative glass rounded-2xl p-5 sm:p-6 cursor-pointer transition-all duration-300 ${accent.glow} group`}
        style={{
          perspective: "1000px",
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transformStyle: "preserve-3d",
          transition: "transform 0.1s ease-out",
        }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {/* Badge */}
        {badge && (
          <div
            className={`absolute -top-2 -right-2 px-3 py-1 ${accent.bg} text-midnight text-xs font-heading font-bold rounded-full z-10`}
          >
            {badge}
          </div>
        )}

        {/* Signal Pulse Animation */}
        {signalPulse && (
          <div className="absolute top-4 right-4">
            <div className="relative">
              <div className="w-3 h-3 rounded-full bg-electric-blue" />
              <div className="absolute inset-0 w-3 h-3 rounded-full bg-electric-blue animate-ping opacity-75" />
            </div>
          </div>
        )}

        {/* Icon */}
        <div
          className={`w-12 h-12 rounded-xl ${accent.bgLight} flex items-center justify-center mb-4 transition-transform group-hover:scale-110`}
        >
          <Icon className={`w-6 h-6 ${accent.text}`} />
        </div>

        {/* Category */}
        <span className={`text-xs font-mono ${accent.text} tracking-wider uppercase`}>
          {category}
        </span>

        {/* Title */}
        <h3 className="font-heading font-bold text-lg text-white-custom mt-2 mb-3">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-slate leading-relaxed line-clamp-3">
          {description}
        </p>

        {/* Expand hint */}
        <div
          className={`mt-4 pt-3 border-t ${accent.border} flex items-center justify-between`}
        >
          <span className="text-xs font-mono text-slate group-hover:text-white-custom transition-colors">
            Lihat Detail
          </span>
          <div
            className={`w-6 h-6 rounded-full ${accent.bgLight} flex items-center justify-center group-hover:scale-110 transition-transform`}
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              className={accent.text}
            >
              <path
                d="M6 2v8M2 6h8"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
      </motion.div>

      {/* Expanded Modal */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-midnight/80 backdrop-blur-sm"
              onClick={() => setIsExpanded(false)}
            />

            {/* Modal */}
            <motion.div
              className="relative glass-strong rounded-2xl p-6 sm:p-8 max-w-lg w-full max-h-[80vh] overflow-y-auto"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {/* Close button */}
              <button
                onClick={() => setIsExpanded(false)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full glass flex items-center justify-center text-slate hover:text-white-custom transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-xl ${accent.bgLight} flex items-center justify-center mb-4`}
              >
                <Icon className={`w-7 h-7 ${accent.text}`} />
              </div>

              {/* Badge */}
              {badge && (
                <span
                  className={`inline-block px-3 py-1 ${accent.bg} text-midnight text-xs font-heading font-bold rounded-full mb-3`}
                >
                  {badge}
                </span>
              )}

              <span className={`text-xs font-mono ${accent.text} tracking-wider uppercase`}>
                {category}
              </span>
              <h3 className="font-heading font-bold text-2xl text-white-custom mt-2 mb-4">
                {title}
              </h3>
              <p className="text-slate-light leading-relaxed mb-6">{description}</p>

              {/* Specs */}
              {specs && specs.length > 0 && (
                <div>
                  <h4 className="font-heading font-semibold text-sm text-white-custom mb-3">
                    Spesifikasi Teknis
                  </h4>
                  <ul className="space-y-2">
                    {specs.map((spec, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className={`flex items-start gap-2 text-sm text-slate-light`}
                      >
                        <span className={`mt-1.5 w-1.5 h-1.5 rounded-full ${accent.bg} flex-shrink-0`} />
                        <span className="font-mono text-xs leading-relaxed">{spec}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
