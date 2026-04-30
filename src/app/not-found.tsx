import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import CircuitBackground from "@/components/CircuitBackground";
import ContactFooter from "@/components/ContactFooter";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="relative min-h-screen bg-midnight selection:bg-circuit-green/20 selection:text-white flex flex-col">
      <CircuitBackground />
      <Navbar />
      
      <main className="relative z-10 flex-grow flex items-center justify-center pt-24 pb-12 px-6">
        <div className="text-center max-w-2xl mx-auto glass p-12 rounded-3xl border border-white/10 relative overflow-hidden">
          {/* Subtle gradient effect */}
          <div className="absolute -top-32 -left-32 w-64 h-64 bg-circuit-green/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-circuit-green/10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 flex flex-col items-center">
            <div className="mb-8 p-4 bg-white/5 rounded-2xl ring-1 ring-white/10 shadow-lg">
              <AlertCircle className="w-16 h-16 text-circuit-green" strokeWidth={1.5} />
            </div>
            
            <h1 className="text-7xl font-bold font-heading text-white-custom mb-4">
              4<span className="text-circuit-green">0</span>4
            </h1>
            
            <h2 className="text-2xl font-semibold text-slate-light mb-4 font-heading">
              Page Not Found
            </h2>
            
            <p className="text-slate-muted mb-8 max-w-md mx-auto leading-relaxed">
              We couldn't find the page you're looking for. It might have been moved, deleted, or perhaps the URL is incorrect.
            </p>
            
            <Link 
              href="/" 
              className="inline-flex items-center justify-center px-8 py-3.5 bg-circuit-green text-midnight font-bold rounded-xl hover:bg-circuit-green/90 transition-all duration-300 hover:shadow-[0_0_20px_rgba(46,213,115,0.3)] hover:-translate-y-0.5"
            >
              Return to Homepage
            </Link>
          </div>
        </div>
      </main>
      
      <ContactFooter />
    </div>
  );
}
