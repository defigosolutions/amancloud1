"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Compass, Sliders, CheckCircle2, ChevronRight, Play } from "lucide-react";
import { methodologyStages } from "@/data/methodology";

export default function ApproachTimeline() {
  const [activeStep, setActiveStep] = useState(0);

  const getStepIcon = (index: number) => {
    switch (index) {
      case 0: return <Compass className="w-5 h-5" />;
      case 1: return <Sliders className="w-5 h-5" />;
      case 2: return <Play className="w-5 h-5" />;
      case 3: return <ShieldCheck className="w-5 h-5" />;
      case 4: return <CheckCircle2 className="w-5 h-5" />;
      default: return <Compass className="w-5 h-5" />;
    }
  };

  const currentStage = methodologyStages[activeStep];

  return (
    <section className="py-24 bg-slate-900 text-white border-y border-slate-800 dot-grid-light relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl text-left mb-16">
          <span className="text-xs font-bold text-brand-primary uppercase tracking-widest block mb-3">
            OUR APPROACH
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Delivery methodology based on security, compliance, and control
          </h2>
          <p className="text-sm text-slate-400 mt-4 leading-relaxed">
            From assessment through deployment and ongoing governance, we apply proven frameworks to ensure your platforms remain secure, reliable, and compliant.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Step Selectors (Interactive Timeline) */}
          <div className="lg:col-span-5 flex flex-col gap-4 text-left">
            {methodologyStages.map((stage, index) => (
              <button
                key={stage.step}
                onClick={() => setActiveStep(index)}
                className={`flex items-center gap-4 p-4 rounded-xl border transition-all text-left cursor-pointer group ${
                  activeStep === index
                    ? "bg-slate-800 border-brand-primary/50 shadow-md text-white"
                    : "bg-slate-800/40 border-slate-800 text-slate-400 hover:bg-slate-800/70 hover:text-white"
                }`}
              >
                {/* Step indicator */}
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                    activeStep === index
                      ? "bg-brand-primary text-white"
                      : "bg-slate-800 text-slate-400 group-hover:bg-slate-700"
                  }`}
                >
                  {getStepIcon(index)}
                </div>

                <div className="flex-grow">
                  <div className="text-[10px] font-bold text-brand-accent/70 uppercase tracking-widest">
                    Step {stage.step}
                  </div>
                  <h3 className="text-sm font-bold tracking-tight mt-0.5">
                    {stage.title}
                  </h3>
                </div>

                <ChevronRight
                  className={`w-5 h-5 shrink-0 transition-transform ${
                    activeStep === index ? "translate-x-1 text-brand-primary" : "text-slate-650"
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Right Side: Step Content Display panel */}
          <div className="lg:col-span-7 bg-slate-800/50 p-8 sm:p-10 rounded-2xl border border-slate-800 min-h-[380px] flex flex-col justify-between text-left relative overflow-hidden">
            {/* Visual glow background */}
            <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-radial from-brand-primary/10 to-transparent blur-2xl -z-10"></div>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col gap-6"
              >
                <div>
                  <div className="text-xs font-bold text-brand-accent uppercase tracking-widest">
                    STAGE OVERVIEW
                  </div>
                  <h3 className="text-2xl font-bold text-white tracking-tight mt-1.5">
                    {currentStage.title}
                  </h3>
                </div>

                <p className="text-sm text-slate-350 leading-relaxed">
                  {currentStage.description}
                </p>

                {/* GRC checklist */}
                <div className="space-y-3.5 mt-2">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                    Primary Deliverables:
                  </div>
                  {currentStage.details.map((detail, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-brand-primary/20 flex items-center justify-center shrink-0">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-primary"></span>
                      </div>
                      <span className="text-xs sm:text-sm text-slate-300 font-medium">{detail}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Bottom link to detailed page */}
            <div className="pt-8 mt-8 border-t border-slate-800 flex justify-between items-center text-xs">
              <span className="font-semibold text-slate-500">Continuous Auditing Framework</span>
              <Link href="/methodology" className="text-brand-accent hover:underline font-bold">
                Learn More About Our Methodology &rarr;
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
