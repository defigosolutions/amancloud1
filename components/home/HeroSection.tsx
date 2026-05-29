"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ShieldCheck, ChevronRight, Activity, Cpu, Server } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden dot-grid">
      
      {/* Visual background glows */}
      <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-radial from-brand-primary/10 via-transparent to-transparent rounded-full blur-3xl -z-10 glow-circle"></div>
      <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-radial from-brand-accent/8 via-transparent to-transparent rounded-full blur-2xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Column 1: Left Text Block */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left">
            
            {/* Top compliance tag */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full bg-brand-bg border border-brand-accent/25"
            >
              <ShieldCheck className="w-4 h-4 text-brand-primary shrink-0" />
              <span className="text-[11px] font-bold tracking-wider text-brand-primary uppercase">
                ISO 27001 & DFSA Regulatory Aligned
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-brand-dark leading-[1.08] lg:max-w-xl"
            >
              Secure Your Infrastructure. <br />
              <span className="text-brand-primary bg-clip-text">Meet Compliance.</span> <br />
              Scale Without Risk.
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-slate-500 leading-relaxed max-w-xl"
            >
              We help fintech, government, and enterprise organizations build secure, compliant, and scalable infrastructure without slowing down innovation.
            </motion.p>

            {/* Call-to-actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-col sm:flex-row gap-4 mt-2"
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-base font-bold bg-brand-primary text-white hover:bg-brand-hover hover:shadow-md transition-all shadow-sm cursor-pointer"
              >
                Book a Strategy Call
              </Link>
              
              <Link
                href="/methodology"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-base font-bold bg-white text-brand-dark border border-slate-200 hover:bg-slate-50 hover:border-slate-300 transition-all cursor-pointer gap-2"
              >
                Explore Methodology
                <ChevronRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* Trusted partner logos text */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex items-center gap-6 mt-8 pt-8 border-t border-slate-100"
            >
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Global Standards</span>
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-bold text-slate-400 tracking-wider">
                <span>MICROSOFT AZURE</span>
                <span>•</span>
                <span>PCI-DSS</span>
                <span>•</span>
                <span>PCI-3DS</span>
                <span>•</span>
                <span>HIPAA</span>
              </div>
            </motion.div>

          </div>

          {/* Column 2: Right Interactive CSS Architecture Graphic */}
          <div className="lg:col-span-5 relative w-full h-[450px] flex items-center justify-center">
            
            {/* Visual background element */}
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-bg/60 to-white/10 rounded-2xl border border-slate-100 p-8 shadow-sm overflow-hidden flex items-center justify-center">
              
              {/* Animated Cloud Security Dashboard Mockup */}
              <div className="relative w-full max-w-[340px] aspect-[4/5] bg-white rounded-xl shadow-lg border border-slate-200/60 p-5 flex flex-col gap-4 overflow-hidden">
                
                {/* Header Mockup */}
                <div className="flex justify-between items-center pb-3 border-b border-slate-150">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-brand-primary"></span>
                    <span className="text-xs font-bold text-brand-dark tracking-wide">Aman SecOps</span>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-50 text-emerald-600 font-bold border border-emerald-100 uppercase">
                    Secured
                  </span>
                </div>

                {/* Simulated Network Architecture Nodes */}
                <div className="flex-grow flex flex-col justify-around py-2">
                  
                  {/* Node 1: Public Gateway */}
                  <div className="flex items-center gap-3 p-2 bg-slate-50 rounded-lg border border-slate-100">
                    <div className="p-1.5 bg-brand-bg rounded">
                      <Cpu className="w-4 h-4 text-brand-primary" />
                    </div>
                    <div className="flex-grow">
                      <div className="h-2 w-20 bg-slate-200 rounded"></div>
                      <div className="h-1.5 w-12 bg-slate-150 rounded mt-1.5"></div>
                    </div>
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                  </div>

                  {/* Flow Arrow */}
                  <div className="flex justify-center -my-1">
                    <div className="w-0.5 h-6 border-l-2 border-dashed border-brand-accent/50 animate-pulse"></div>
                  </div>

                  {/* Node 2: Zero-Trust Guard */}
                  <div className="flex items-center gap-3 p-2 bg-brand-primary/5 rounded-lg border border-brand-primary/20">
                    <div className="p-1.5 bg-brand-primary rounded">
                      <ShieldCheck className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-grow">
                      <div className="h-2 w-24 bg-brand-primary/30 rounded"></div>
                      <div className="h-1.5 w-16 bg-brand-primary/20 rounded mt-1.5"></div>
                    </div>
                    <Activity className="w-4 h-4 text-brand-primary animate-pulse" />
                  </div>

                  {/* Flow Arrow */}
                  <div className="flex justify-center -my-1">
                    <div className="w-0.5 h-6 border-l-2 border-dashed border-brand-accent/50 animate-pulse"></div>
                  </div>

                  {/* Node 3: Private Storage */}
                  <div className="flex items-center gap-3 p-2 bg-slate-50 rounded-lg border border-slate-100">
                    <div className="p-1.5 bg-brand-bg rounded">
                      <Server className="w-4 h-4 text-brand-primary" />
                    </div>
                    <div className="flex-grow">
                      <div className="h-2 w-16 bg-slate-200 rounded"></div>
                      <div className="h-1.5 w-10 bg-slate-150 rounded mt-1.5"></div>
                    </div>
                    <span className="text-[10px] font-bold text-slate-400">100% compliant</span>
                  </div>

                </div>

                {/* Progress Indicators overlay */}
                <div className="pt-2 border-t border-slate-100 flex justify-between text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                  <span>Audits OK</span>
                  <span>SIEM ACTIVE</span>
                </div>

              </div>

            </div>

          </div>

        </div>
      </div>
      
    </section>
  );
}
