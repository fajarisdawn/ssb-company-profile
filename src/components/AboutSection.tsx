"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, Target, Building2, Users, Globe } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const missionContent = {
  title: "Misi Kami",
  icon: Target,
  items: [
    "Menyediakan suku cadang perangkat sarana telekomunikasi berkualitas tinggi dengan standar teknis terbaik.",
    "Memberikan layanan konsultasi dan pemeliharaan yang profesional dan terpercaya.",
    "Mendukung infrastruktur telekomunikasi nasional dengan solusi inovatif dan efisien.",
    "Membangun kemitraan jangka panjang berdasarkan integritas dan keunggulan teknis.",
  ],
};

const visionContent = {
  title: "Visi Kami",
  icon: Eye,
  description:
    "Menjadi mitra terdepan dalam penyediaan solusi suku cadang perangkat sarana telekomunikasi yang menghubungkan seluruh Indonesia — dari Sabang sampai Merauke.",
};

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState<"mission" | "vision">("mission");

  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background transition */}
      <AnimatePresence mode="wait">
        {activeTab === "mission" ? (
          <motion.div
            key="mission-bg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-midnight via-midnight-light/50 to-midnight" />
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-circuit-green/20 to-transparent" />
          </motion.div>
        ) : (
          <motion.div
            key="vision-bg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-midnight via-midnight-light to-midnight" />
            {/* Connected map dots */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(20)].map((_, i) => {
                // Use pseudo-random deterministic values based on index to fix lint errors
                const randomX = (Math.sin(i * 1.5) * 40 + 50);
                const randomY = (Math.cos(i * 2.3) * 40 + 50);
                const randomDelay = (Math.sin(i * 3.7) + 1);
                const randomDuration = (Math.cos(i * 4.1) + 1) + 2;

                return (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 rounded-full bg-electric-blue"
                    style={{
                      left: `${randomX}%`,
                      top: `${randomY}%`,
                    }}
                    animate={{
                      opacity: [0.2, 0.8, 0.2],
                      scale: [1, 1.5, 1],
                    }}
                    transition={{
                      duration: randomDuration,
                      repeat: Infinity,
                      delay: randomDelay,
                    }}
                  />
                );
              })}
            </div>
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-electric-blue/30 to-transparent" />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="font-mono text-xs text-circuit-green tracking-widest uppercase">
              Tentang Kami
            </span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white-custom mt-4">
              Asal Mula <span className="text-circuit-green">SSB</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Origin story */}
          <ScrollReveal delay={0.2}>
            <div className="glass rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-circuit-green/10 flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-circuit-green" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-white-custom">
                    PT Sukmana Sukses Bersama
                  </h3>
                  <p className="text-xs font-mono text-slate">
                    Perseroan Perorangan
                  </p>
                </div>
              </div>
              <p className="text-slate-light leading-relaxed mb-6">
                Didirikan oleh <strong className="text-white-custom">Bapak Iwa Sukmana</strong> sebagai
                sebuah <em className="text-circuit-green">Perseroan Perorangan</em> yang
                berdedikasi penuh dalam penyediaan solusi suku cadang perangkat
                sarana telekomunikasi di Indonesia.
              </p>
              <p className="text-slate-light leading-relaxed">
                Dengan pengalaman bertahun-tahun di industri telekomunikasi, SSB
                hadir sebagai mitra terpercaya yang mengedepankan kualitas,
                presisi, dan standar teknis tinggi untuk mendukung konektivitas
                nasional.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-circuit-green/10">
                {[
                  { icon: Users, value: "50+", label: "Tim Ahli" },
                  { icon: Globe, value: "34", label: "Provinsi" },
                  { icon: Target, value: "100%", label: "Komitmen" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <stat.icon className="w-5 h-5 text-circuit-green mx-auto mb-2" />
                    <div className="font-heading font-bold text-xl text-white-custom">
                      {stat.value}
                    </div>
                    <div className="text-xs font-mono text-slate">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Vision / Mission Toggle */}
          <ScrollReveal delay={0.4}>
            <div>
              {/* Toggle */}
              <div className="flex glass rounded-xl p-1 mb-6">
                {(["mission", "vision"] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`relative flex-1 py-3 px-4 text-sm font-heading font-semibold rounded-lg transition-all ${
                      activeTab === tab
                        ? "text-midnight"
                        : "text-slate hover:text-white-custom"
                    }`}
                  >
                    {activeTab === tab && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-circuit-green rounded-lg"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {tab === "mission" ? (
                        <Target className="w-4 h-4" />
                      ) : (
                        <Eye className="w-4 h-4" />
                      )}
                      {tab === "mission" ? "Misi" : "Visi"}
                    </span>
                  </button>
                ))}
              </div>

              {/* Content */}
              <AnimatePresence mode="wait">
                {activeTab === "mission" ? (
                  <motion.div
                    key="mission"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className="glass rounded-2xl p-6 sm:p-8"
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <missionContent.icon className="w-6 h-6 text-circuit-green" />
                      <h3 className="font-heading font-bold text-xl text-white-custom">
                        {missionContent.title}
                      </h3>
                    </div>
                    <ul className="space-y-4">
                      {missionContent.items.map((item, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="flex gap-3 text-slate-light"
                        >
                          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-circuit-green/10 flex items-center justify-center text-xs font-mono text-circuit-green mt-0.5">
                            {i + 1}
                          </span>
                          <span className="leading-relaxed">{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                ) : (
                  <motion.div
                    key="vision"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className="glass rounded-2xl p-6 sm:p-8 border-electric-blue/20"
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <visionContent.icon className="w-6 h-6 text-electric-blue" />
                      <h3 className="font-heading font-bold text-xl text-white-custom">
                        {visionContent.title}
                      </h3>
                    </div>
                    <p className="text-lg text-slate-light leading-relaxed mb-8">
                      {visionContent.description}
                    </p>
                    {/* Indonesia connectivity map visualization */}
                    <div className="relative h-32 sm:h-40 rounded-xl overflow-hidden bg-gradient-to-r from-electric-blue/5 via-electric-blue/10 to-electric-blue/5">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative">
                          {/* Simplified Indonesia archipelago dots */}
                          <svg viewBox="0 0 400 120" className="w-full max-w-sm h-auto">
                            {/* Sumatra */}
                            <circle cx="80" cy="60" r="4" fill="#00d4ff" opacity="0.8" />
                            <circle cx="90" cy="55" r="3" fill="#00d4ff" opacity="0.6" />
                            <circle cx="70" cy="65" r="3" fill="#00d4ff" opacity="0.6" />
                            {/* Java */}
                            <circle cx="130" cy="75" r="5" fill="#00ff88" opacity="0.9" />
                            <circle cx="145" cy="78" r="3" fill="#00d4ff" opacity="0.7" />
                            <circle cx="160" cy="76" r="3" fill="#00d4ff" opacity="0.7" />
                            {/* Kalimantan */}
                            <circle cx="170" cy="50" r="5" fill="#00d4ff" opacity="0.8" />
                            <circle cx="180" cy="45" r="3" fill="#00d4ff" opacity="0.6" />
                            {/* Sulawesi */}
                            <circle cx="220" cy="50" r="4" fill="#00d4ff" opacity="0.7" />
                            <circle cx="230" cy="55" r="3" fill="#00d4ff" opacity="0.6" />
                            {/* Bali/NTT */}
                            <circle cx="190" cy="80" r="3" fill="#00d4ff" opacity="0.6" />
                            <circle cx="210" cy="82" r="2" fill="#00d4ff" opacity="0.5" />
                            {/* Maluku */}
                            <circle cx="270" cy="55" r="3" fill="#00d4ff" opacity="0.6" />
                            {/* Papua */}
                            <circle cx="330" cy="55" r="5" fill="#00d4ff" opacity="0.7" />
                            <circle cx="345" cy="50" r="3" fill="#00d4ff" opacity="0.5" />

                            {/* Connection lines */}
                            <line x1="80" y1="60" x2="130" y2="75" stroke="#00d4ff" strokeWidth="0.5" opacity="0.3" />
                            <line x1="130" y1="75" x2="170" y2="50" stroke="#00d4ff" strokeWidth="0.5" opacity="0.3" />
                            <line x1="170" y1="50" x2="220" y2="50" stroke="#00d4ff" strokeWidth="0.5" opacity="0.3" />
                            <line x1="220" y1="50" x2="270" y2="55" stroke="#00d4ff" strokeWidth="0.5" opacity="0.3" />
                            <line x1="270" y1="55" x2="330" y2="55" stroke="#00d4ff" strokeWidth="0.5" opacity="0.3" />
                          </svg>
                          <div className="absolute -bottom-2 left-0 right-0 text-center">
                            <span className="text-xs font-mono text-electric-blue/60">
                              Sabang — Merauke
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
