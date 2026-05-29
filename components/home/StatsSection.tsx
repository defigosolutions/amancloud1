"use client";

import React from "react";
import { Server, ShieldAlert, Cpu, Trophy } from "lucide-react";

export const stats = [
  {
    value: "50+",
    label: "Enterprise Projects Completed",
    description: "Highly complex integrations across banking, health, and government registries.",
    icon: <Trophy className="w-5 h-5 text-brand-primary" />
  },
  {
    value: "100%",
    label: "DevSecOps Pipeline Security",
    description: "No code vulnerability or secret leaking has ever bypassed automated gating.",
    icon: <Cpu className="w-5 h-5 text-brand-primary" />
  },
  {
    value: "99.9%",
    label: "Sovereign Infrastructure Uptime",
    description: "Multi-region fallback patterns engineered for highly-regulated systems.",
    icon: <Server className="w-5 h-5 text-brand-primary" />
  },
  {
    value: "24/7",
    label: "Continuous Log Threats Auditing",
    description: "Fully-managed dynamic SIEM monitors security signals in real-time.",
    icon: <ShieldAlert className="w-5 h-5 text-brand-primary" />
  }
];

export default function StatsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Spacious Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="p-8 rounded-xl bg-slate-50 border border-slate-100/80 shadow-xs text-left relative overflow-hidden group hover:shadow-md transition-all duration-300"
            >
              {/* Top border decoration */}
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-brand-primary to-brand-accent transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>

              {/* Icon wrapper */}
              <div className="w-9 h-9 bg-brand-bg rounded flex items-center justify-center mb-5">
                {stat.icon}
              </div>

              {/* Stat Value */}
              <div className="text-4xl sm:text-5xl font-extrabold tracking-tight text-brand-dark mb-1 bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent">
                {stat.value}
              </div>

              {/* Stat Title */}
              <div className="text-sm font-bold text-slate-800 tracking-tight mb-2">
                {stat.label}
              </div>

              {/* Description */}
              <p className="text-xs text-slate-500 leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
