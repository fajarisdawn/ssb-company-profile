"use client";

import React from "react";
import {
  Cpu,
  Battery,
  Wifi,
  Wrench,
  MessageSquare,
  Shield,
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import ProductCard from "./ProductCard";

const products = [
  // Power & Storage
  {
    icon: Cpu,
    title: "Rectifier Module",
    category: "Power & Storage",
    description:
      "Modul rectifier berkualitas tinggi untuk infrastruktur telekomunikasi. Dirancang untuk konversi daya AC ke DC dengan efisiensi maksimal dan keandalan operasional jangka panjang.",
    specs: [
      "Efisiensi konversi hingga 96%",
      "Input voltage: 90-290 VAC",
      "Output voltage: 48V DC (adjustable)",
      "Power factor correction (PFC) > 0.99",
      "Hot-swappable design",
      "SNMP monitoring support",
    ],
    accentColor: "green" as const,
  },
  {
    icon: Battery,
    title: "Lithium Energy Storage",
    category: "Power & Storage",
    description:
      "Sistem penyimpanan energi lithium berkapasitas tinggi sebagai backup daya untuk site telekomunikasi. Lebih ringan, tahan lama, dan efisien dibanding solusi tradisional.",
    specs: [
      "Teknologi LiFePO4 (Lithium Iron Phosphate)",
      "Siklus hidup: > 6000 cycles",
      "Depth of Discharge (DoD): 90%",
      "Built-in BMS (Battery Management System)",
      "Operasi suhu: -20°C hingga 55°C",
      "Modular dan scalable design",
    ],
    accentColor: "green" as const,
  },
  // Industrial Connectivity
  {
    icon: Wifi,
    title: "Industrial Router",
    category: "Industrial Connectivity",
    description:
      "Router industri tangguh untuk konektivitas site telekomunikasi di berbagai kondisi lingkungan. Mendukung multi-WAN failover dan VPN untuk manajemen jarak jauh.",
    specs: [
      "4G/5G cellular connectivity",
      "Dual SIM dengan failover otomatis",
      "IP67 rated enclosure",
      "GPS/GNSS tracking built-in",
      "Edge computing capability",
      "Suhu operasi: -40°C hingga 75°C",
    ],
    accentColor: "blue" as const,
    signalPulse: true,
  },
  // Services
  {
    icon: Wrench,
    title: "Maintenance & Pemeliharaan",
    category: "Services",
    description:
      "Layanan pemeliharaan preventif dan korektif untuk seluruh perangkat infrastruktur telekomunikasi. Tim teknisi berpengalaman siap memberikan respons cepat dan solusi tepat.",
    specs: [
      "Preventive maintenance terjadwal",
      "Corrective maintenance 24/7",
      "SLA response time < 4 jam",
      "Spare parts management",
      "Performance monitoring & reporting",
    ],
    badge: "Tim Ahli",
    accentColor: "green" as const,
  },
  {
    icon: MessageSquare,
    title: "Konsultasi Teknis",
    category: "Services",
    description:
      "Layanan konsultasi teknis menyeluruh untuk perencanaan, optimasi, dan upgrade infrastruktur telekomunikasi. Didukung oleh tim ahli bersertifikasi.",
    specs: [
      "Site survey & assessment",
      "Network planning & design",
      "Power system optimization",
      "Technology migration advisory",
      "Training & knowledge transfer",
    ],
    badge: "Tim Ahli",
    accentColor: "blue" as const,
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    category: "Services",
    description:
      "Jaminan kualitas untuk setiap produk dan layanan yang kami berikan. Setiap suku cadang melewati proses QC ketat sebelum pengiriman ke pelanggan.",
    specs: [
      "Incoming quality inspection",
      "Functional testing 100%",
      "Burn-in testing for reliability",
      "Certification compliance check",
      "Warranty management",
    ],
    accentColor: "green" as const,
  },
];

export default function ProductGallery() {
  return (
    <section id="products" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Top divider */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-circuit-green/20 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="font-mono text-xs text-circuit-green tracking-widest uppercase">
              Solusi Kami
            </span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white-custom mt-4">
              Produk &{" "}
              <span className="text-circuit-green">Layanan</span>
            </h2>
            <p className="text-slate mt-4 max-w-2xl mx-auto">
              Portofolio lengkap suku cadang dan layanan untuk mendukung
              infrastruktur telekomunikasi nasional.
            </p>
          </div>
        </ScrollReveal>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 auto-rows-fr">
          {products.map((product, i) => {
            // Make first two cards span 2 columns on xl screens for bento feel
            const isLarge = i < 2;
            return (
              <ScrollReveal
                key={product.title}
                delay={i * 0.1}
                className={isLarge ? "xl:col-span-2" : ""}
              >
                <ProductCard {...product} />
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
