"use client";

import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Zap,
  ArrowUpRight,
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import EmailModal from "./EmailModal";

export default function ContactFooter() {
  const [emailModalOpen, setEmailModalOpen] = useState(false);

  return (
    <footer id="contact" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Top divider */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-circuit-green/30 to-transparent" />

      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-circuit-green/5 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="font-mono text-xs text-circuit-green tracking-widest uppercase">
              Hubungi Kami
            </span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white-custom mt-4">
              Mari{" "}
              <span className="text-circuit-green">Terhubung</span>
            </h2>
            <p className="text-slate mt-4 max-w-xl mx-auto">
              Siap mendiskusikan kebutuhan infrastruktur telekomunikasi Anda.
              Hubungi kami sekarang.
            </p>
          </div>
        </ScrollReveal>

        {/* Contact Card - Glassmorphism */}
        <ScrollReveal delay={0.2}>
          <div className="max-w-2xl mx-auto glass-strong rounded-3xl p-6 sm:p-10 glow-border-green">
            {/* Action buttons */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {/* WhatsApp */}
              <a
                href="https://wa.me/6287781716580"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-6 py-4 bg-circuit-green text-midnight font-heading font-bold text-sm rounded-xl hover:bg-circuit-green-dim transition-all hover:shadow-[0_0_30px_rgba(0,255,136,0.3)] active:scale-95 group"
              >
                <MessageCircle className="w-5 h-5" />
                Chat WhatsApp
                <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>

              {/* Email */}
              <button
                onClick={() => setEmailModalOpen(true)}
                className="flex items-center justify-center gap-3 px-6 py-4 glass text-white-custom font-heading font-bold text-sm rounded-xl hover:border-electric-blue/30 transition-all hover:shadow-[0_0_30px_rgba(0,212,255,0.15)] active:scale-95 group"
              >
                <Mail className="w-5 h-5 text-electric-blue" />
                Kirim Email
                <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            </div>

            {/* Contact details */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-slate-light">
                <div className="w-10 h-10 rounded-xl bg-circuit-green/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-circuit-green" />
                </div>
                <div>
                  <p className="text-xs font-mono text-slate">Telepon</p>
                  <p className="text-sm text-white-custom font-mono">
                    +62 877 8171 6580
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-slate-light">
                <div className="w-10 h-10 rounded-xl bg-electric-blue/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-electric-blue" />
                </div>
                <div>
                  <p className="text-xs font-mono text-slate">Email</p>
                  <p className="text-sm text-white-custom font-mono">
                    info@ssb.co.id
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 text-slate-light">
                <div className="w-10 h-10 rounded-xl bg-circuit-green/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-circuit-green" />
                </div>
                <div>
                  <p className="text-xs font-mono text-slate">Alamat</p>
                  <p className="text-sm text-white-custom">
                    Jakarta, Indonesia
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Footer bottom */}
        <div className="mt-16 pt-8 border-t border-circuit-green/10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-circuit-green" />
              <span className="font-heading font-bold text-sm text-white-custom">
                PT Sukmana Sukses Bersama
              </span>
            </div>
            <p className="text-xs font-mono text-slate text-center">
              © {new Date().getFullYear()} PT Sukmana Sukses Bersama. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Email Modal */}
      <EmailModal
        isOpen={emailModalOpen}
        onClose={() => setEmailModalOpen(false)}
      />
    </footer>
  );
}
