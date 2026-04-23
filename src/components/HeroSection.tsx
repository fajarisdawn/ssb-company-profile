"use client";

import React from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const RectifierScene = dynamic(() => import("./RectifierModel"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-16 h-16 border-2 border-circuit-green/30 border-t-circuit-green rounded-full animate-spin" />
    </div>
  ),
});

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-circuit-green/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-electric-blue/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-5rem)]">
          {/* Left: Text Content */}
          <div className="flex flex-col justify-center order-2 lg:order-1">
            <ScrollReveal delay={0.2}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs font-mono text-circuit-green mb-6 w-fit">
                <span className="w-2 h-2 rounded-full bg-circuit-green animate-pulse" />
                PT Sukmana Sukses Bersama
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-white-custom leading-tight mb-6">
                Solusi Suku Cadang{" "}
                <span className="text-circuit-green glow-green">Perangkat</span>{" "}
                Sarana{" "}
                <span className="text-electric-blue glow-blue">Telekomunikasi</span>.
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.6}>
              <p className="text-base sm:text-lg text-slate-light max-w-lg mb-8 leading-relaxed">
                Supporting national connectivity through precision, reliability,
                and high technical standards.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.8}>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#products"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .querySelector("#products")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-circuit-green text-midnight font-heading font-bold text-sm rounded-lg hover:bg-circuit-green-dim transition-all hover:shadow-[0_0_30px_rgba(0,255,136,0.3)] active:scale-95"
                >
                  Jelajahi Solusi Kami
                </a>
                <a
                  href="#about"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .querySelector("#about")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 glass text-white-custom font-heading font-semibold text-sm rounded-lg hover:border-circuit-green/30 transition-all active:scale-95"
                >
                  Tentang Kami
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: 3D Model */}
          <div className="order-1 lg:order-2 h-[350px] sm:h-[400px] lg:h-[500px] xl:h-[600px]">
            <ScrollReveal delay={0.3} direction="right">
              <div className="w-full h-[350px] sm:h-[400px] lg:h-[500px] xl:h-[600px] relative">
                <RectifierScene />
                {/* Glow ring behind model */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-80 sm:h-80 rounded-full border border-circuit-green/20 animate-pulse-glow pointer-events-none" />
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-xs font-mono text-slate">Scroll</span>
          <ChevronDown className="w-5 h-5 text-circuit-green" />
        </motion.div>
      </div>
    </section>
  );
}
