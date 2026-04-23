"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send } from "lucide-react";

interface EmailModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EmailModal({ isOpen, onClose }: EmailModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:info@ssb.co.id?subject=${encodeURIComponent(
      formData.subject || "Inquiry from Website"
    )}&body=${encodeURIComponent(
      `Nama: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`;
    window.open(mailtoLink, "_blank");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[70] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-midnight/80 backdrop-blur-md"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="relative glass-strong rounded-2xl p-6 sm:p-8 max-w-md w-full max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.9, y: 30, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 30, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            {/* Close */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-8 h-8 rounded-full glass flex items-center justify-center text-slate hover:text-white-custom transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <h3 className="font-heading font-bold text-xl text-white-custom mb-1">
              Kirim Pesan
            </h3>
            <p className="text-sm text-slate mb-6">
              Hubungi kami untuk konsultasi atau pertanyaan.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-slate-light mb-1.5">
                  Nama
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-2.5 glass rounded-lg text-sm text-white-custom placeholder-slate/50 focus:outline-none focus:border-circuit-green/40 transition-colors"
                  placeholder="Nama lengkap"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-light mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-2.5 glass rounded-lg text-sm text-white-custom placeholder-slate/50 focus:outline-none focus:border-circuit-green/40 transition-colors"
                  placeholder="email@contoh.com"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-light mb-1.5">
                  Subjek
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  className="w-full px-4 py-2.5 glass rounded-lg text-sm text-white-custom placeholder-slate/50 focus:outline-none focus:border-circuit-green/40 transition-colors"
                  placeholder="Topik pesan"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-light mb-1.5">
                  Pesan
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-2.5 glass rounded-lg text-sm text-white-custom placeholder-slate/50 focus:outline-none focus:border-circuit-green/40 transition-colors resize-none"
                  placeholder="Tuliskan pesan Anda..."
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-circuit-green text-midnight font-heading font-bold text-sm rounded-lg hover:bg-circuit-green-dim transition-all hover:shadow-[0_0_30px_rgba(0,255,136,0.3)] active:scale-95"
              >
                <Send className="w-4 h-4" />
                Kirim Pesan
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
