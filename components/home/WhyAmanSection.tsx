"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Target, Building2, HelpingHand, Award } from "lucide-react";

export const pillars = [
  {
    step: "01",
    title: "Security-First by Design",
    description: "We embed security into every layer of cloud architecture, DevOps, and operations — ensuring your systems stay protected from day one.",
    icon: <ShieldCheck className="w-6 h-6 text-brand-primary" />
  },
  {
    step: "02",
    title: "Outcomes Over Tools",
    description: "We don’t push platforms or vendors. We focus on business outcomes, choosing the right technology only when it supports your goals.",
    icon: <Target className="w-6 h-6 text-brand-primary" />
  },
  {
    step: "03",
    title: "Enterprise & Regulated Expertise",
    description: "From finance and healthcare to government and regulated industries, we understand compliance, governance, and mission-critical environments.",
    icon: <Building2 className="w-6 h-6 text-brand-primary" />
  },
  {
    step: "04",
    title: "Built for Reliability",
    description: "We prioritise stability, performance, and trust — working as a long-term technology partner, not just a service provider.",
    icon: <HelpingHand className="w-6 h-6 text-brand-primary" />
  }
];

export const metrics = [
  { label: "Secure Cloud Architecture from Day One", percentage: 99 },
  { label: "Automated Security in CI/CD Pipelines", percentage: 100 },
  { label: "Continuous Monitoring and Threat Detection", percentage: 99 },
  { label: "Identity-First Access Control", percentage: 100 }
];

export default function WhyAmanSection() {
  return (
    <section className="py-24 bg-brand-bg/50 border-y border-slate-100 dot-grid-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Block */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold text-brand-primary uppercase tracking-widest block mb-3">
            WHY AMAN CLOUD
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight">
            We embed security directly into your infrastructure and development lifecycle
          </h2>
          <p className="text-base text-slate-500 mt-4 leading-relaxed">
            Instead of adding protection after systems are built, we integrate security controls from day one, helping organizations stay compliant and protected.
          </p>
        </div>

        {/* 2x2 Pillar Cards & Metrics Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: 4 Pillars */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
            {pillars.map((pillar) => (
              <div
                key={pillar.step}
                className="p-6 bg-white rounded-xl border border-slate-100 shadow-xs hover:shadow-md transition-all duration-300 relative group"
              >
                <div className="absolute top-4 right-4 text-xs font-bold text-slate-200 group-hover:text-brand-accent/20 transition-colors">
                  {pillar.step}
                </div>
                <div className="w-10 h-10 rounded-lg bg-brand-bg flex items-center justify-center mb-5 shrink-0">
                  {pillar.icon}
                </div>
                <h3 className="text-base font-bold text-brand-dark tracking-tight mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>

          {/* Right Column: Original Progress Metrics */}
          <div className="lg:col-span-5 bg-white p-8 rounded-xl border border-slate-100 shadow-sm text-left">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
              <Award className="w-6 h-6 text-brand-primary shrink-0" />
              <h3 className="text-lg font-bold text-brand-dark">Aman Cloud Engineering Standards</h3>
            </div>
            
            <div className="space-y-6">
              {metrics.map((metric, index) => (
                <div key={index} className="flex flex-col gap-2">
                  <div className="flex justify-between text-sm font-semibold text-brand-dark">
                    <span>{metric.label}</span>
                    <span className="text-brand-primary">{metric.percentage}%</span>
                  </div>
                  {/* Progress Meter Bar */}
                  <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${metric.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut", delay: index * 0.1 }}
                      className="h-full bg-gradient-to-r from-brand-primary to-brand-accent rounded-full"
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick credentials text */}
            <p className="text-[11px] leading-relaxed text-slate-400 mt-8 pt-4 border-t border-slate-50">
              * Standards verified against national UAE cyber frameworks, NHS infrastructure playbooks, and continuous threat simulation cycles.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}
