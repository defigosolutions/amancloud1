"use client";

import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/home/ContactForm";
import { Compass, Sliders, Play, ShieldCheck, CheckCircle2, ChevronRight, Award } from "lucide-react";
import { methodologyStages } from "@/data/methodology";

export default function MethodologyPage() {
  const getStepIcon = (index: number) => {
    switch (index) {
      case 0: return <Compass className="w-6 h-6 text-brand-primary" />;
      case 1: return <Sliders className="w-6 h-6 text-brand-primary" />;
      case 2: return <Play className="w-6 h-6 text-brand-primary" />;
      case 3: return <ShieldCheck className="w-6 h-6 text-brand-primary" />;
      case 4: return <CheckCircle2 className="w-6 h-6 text-brand-primary" />;
      default: return <Compass className="w-6 h-6 text-brand-primary" />;
    }
  };

  return (
    <>
      <Header />
      <main className="flex-grow pt-24">
        
        {/* Page Hero */}
        <section className="py-20 bg-slate-900 text-white border-b border-slate-800 dot-grid-light text-left">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="text-xs font-bold text-brand-accent uppercase tracking-widest block mb-3">
              OUR FRAMEWORK
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight max-w-3xl">
              Strict governance and structured engineering at every stage of work
            </h1>
            <p className="text-base text-slate-400 mt-4 leading-relaxed max-w-2xl">
              We apply standardized, version-controlled workflows to ensure absolute security, GRC compliance alignment, and minimal disruption across enterprise platforms.
            </p>
          </div>
        </section>

        {/* Detailed Timeline Stages */}
        <section className="py-24 bg-white text-left">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="relative border-l border-slate-200 pl-8 ml-4 space-y-16">
              
              {methodologyStages.map((stage, index) => (
                <div key={stage.step} className="relative group">
                  
                  {/* Glowing step circle on timeline path */}
                  <div className="absolute -left-[53px] top-1.5 w-10 h-10 rounded-xl bg-white border-2 border-brand-primary flex items-center justify-center shrink-0 shadow-sm z-10 transition-transform duration-300 group-hover:scale-105">
                    {getStepIcon(index)}
                  </div>

                  {/* Stage Card */}
                  <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 shadow-xs hover:shadow-md transition-all duration-300">
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <span className="text-xs font-bold text-brand-primary uppercase tracking-widest block">
                          STAGE {stage.step}
                        </span>
                        <h2 className="text-xl sm:text-2xl font-bold text-brand-dark tracking-tight mt-1">
                          {stage.title}
                        </h2>
                      </div>
                      <span className="text-xs font-bold px-2 py-0.5 rounded bg-brand-bg text-brand-primary border border-brand-accent/25 uppercase">
                        Verified
                      </span>
                    </div>

                    <p className="text-sm text-slate-500 leading-relaxed mt-4 mb-6">
                      {stage.description}
                    </p>

                    {/* Deliverables Checklist list */}
                    <div className="border-t border-slate-150 pt-5 mt-5">
                      <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-4 flex items-center gap-2">
                        <Award className="w-4 h-4 text-brand-primary" />
                        Stage Deliverables Checklist:
                      </h3>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        {stage.details.map((detail, idx) => (
                          <div key={idx} className="flex items-start gap-2.5">
                            <span className="w-5 h-5 rounded-full bg-brand-bg flex items-center justify-center shrink-0 text-[10px] font-bold text-brand-primary mt-0.5">
                              ✓
                            </span>
                            <span className="text-xs font-medium text-slate-650 leading-relaxed">
                              {detail}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>

                </div>
              ))}

            </div>

          </div>
        </section>

        {/* Lead capturing booking form */}
        <ContactForm />

      </main>
      <Footer />
    </>
  );
}
