"use client";

import React from "react";
import { Award, Lightbulb, Users, BadgeDollarSign } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const values = [
  {
    icon: Award,
    title: "Berkualitas & Terpercaya",
    description:
      "Setiap produk melewati quality control ketat dan memenuhi standar internasional untuk keandalan maksimal.",
    color: "circuit-green",
  },
  {
    icon: Lightbulb,
    title: "Teknologi Inovatif",
    description:
      "Mengadopsi teknologi terkini dalam setiap solusi untuk efisiensi dan performa optimal.",
    color: "electric-blue",
  },
  {
    icon: Users,
    title: "Tim Profesional",
    description:
      "Didukung oleh tim ahli bersertifikasi dengan pengalaman bertahun-tahun di industri telekomunikasi.",
    color: "circuit-green",
  },
  {
    icon: BadgeDollarSign,
    title: "Harga Kompetitif",
    description:
      "Menawarkan solusi bernilai tinggi dengan harga yang bersaing tanpa mengorbankan kualitas.",
    color: "electric-blue",
  },
];

function ValueCard({
  icon: Icon,
  title,
  description,
  color,
}: (typeof values)[0]) {
  const isGreen = color === "circuit-green";
  return (
    <div
      className={`flex-shrink-0 w-72 sm:w-80 glass rounded-2xl p-6 mx-3 transition-all duration-300 hover:scale-105 ${
        isGreen
          ? "hover:shadow-[0_0_30px_rgba(0,255,136,0.15)]"
          : "hover:shadow-[0_0_30px_rgba(0,212,255,0.15)]"
      }`}
    >
      <div
        className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
          isGreen ? "bg-circuit-green/10" : "bg-electric-blue/10"
        }`}
      >
        <Icon
          className={`w-6 h-6 ${
            isGreen ? "text-circuit-green" : "text-electric-blue"
          }`}
        />
      </div>
      <h3 className="font-heading font-bold text-lg text-white-custom mb-2">
        {title}
      </h3>
      <p className="text-sm text-slate leading-relaxed">{description}</p>
    </div>
  );
}

export default function ValueProposition() {
  // Double the cards for seamless infinite loop
  const doubledValues = [...values, ...values];

  return (
    <section id="values" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Top divider */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-electric-blue/20 to-transparent" />

      <div className="relative z-10">
        {/* Section header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <ScrollReveal>
            <div className="text-center">
              <span className="font-mono text-xs text-electric-blue tracking-widest uppercase">
                Mengapa Memilih Kami
              </span>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white-custom mt-4">
                Keunggulan{" "}
                <span className="text-electric-blue">SSB</span>
              </h2>
            </div>
          </ScrollReveal>
        </div>

        {/* Marquee */}
        <ScrollReveal>
          <div className="relative">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-midnight to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-midnight to-transparent z-10 pointer-events-none" />

            {/* Scrolling row */}
            <div className="flex animate-marquee">
              {doubledValues.map((value, i) => (
                <ValueCard key={`${value.title}-${i}`} {...value} />
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Static feature grid below marquee */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((value, i) => (
              <ScrollReveal key={value.title} delay={i * 0.1}>
                <div className="text-center py-6">
                  <value.icon
                    className={`w-8 h-8 mx-auto mb-3 ${
                      value.color === "circuit-green"
                        ? "text-circuit-green"
                        : "text-electric-blue"
                    }`}
                  />
                  <h4 className="font-heading font-semibold text-sm text-white-custom mb-1">
                    {value.title}
                  </h4>
                  <p className="text-xs text-slate font-mono">
                    {value.description.split(" ").slice(0, 6).join(" ")}...
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
