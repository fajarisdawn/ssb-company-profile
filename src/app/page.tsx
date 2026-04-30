import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CircuitBackground from "@/components/CircuitBackground";
import AboutSection from "@/components/AboutSection";
import ProductGallery from "@/components/ProductGallery";
import ValueProposition from "@/components/ValueProposition";
import ContactFooter from "@/components/ContactFooter";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-midnight selection:bg-circuit-green/20 selection:text-white">
      {/* Background layer */}
      <CircuitBackground />

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ProductGallery />
        <ValueProposition />
      </main>

      {/* Footer */}
      <ContactFooter />
    </div>
  );
}
