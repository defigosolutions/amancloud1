"use client";

import React from "react";
import Link from "next/link";
import { Compass, ShieldAlert, Activity, Laptop, Users, Coins, Lock, CloudDownload, ArrowRight } from "lucide-react";
import { services } from "@/data/services";

export default function ServicesSection() {
  // Map icon strings to Lucide components
  const getIcon = (name: string) => {
    switch (name) {
      case "Compass": return <Compass className="w-6 h-6 text-brand-primary" />;
      case "CloudDownload": return <CloudDownload className="w-6 h-6 text-brand-primary" />;
      case "ShieldAlert": return <ShieldAlert className="w-6 h-6 text-brand-primary" />;
      case "Activity": return <Activity className="w-6 h-6 text-brand-primary" />;
      case "Laptop": return <Laptop className="w-6 h-6 text-brand-primary" />;
      case "Users": return <Users className="w-6 h-6 text-brand-primary" />;
      case "Coins": return <Coins className="w-6 h-6 text-brand-primary" />;
      case "Lock": return <Lock className="w-6 h-6 text-brand-primary" />;
      default: return <Compass className="w-6 h-6 text-brand-primary" />;
    }
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
          <div className="text-left">
            <span className="text-xs font-bold text-brand-primary uppercase tracking-widest block mb-3">
              WHAT WE DO
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight">
              We design and implement:
            </h2>
          </div>
          <p className="text-base text-slate-500 leading-relaxed max-w-md text-left">
            Aman Cloud delivers secure cloud infrastructure, cybersecurity architecture, DevSecOps pipelines, and identity management solutions.
          </p>
        </div>

        {/* Corporate Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-slate-100">
          {services.map((service) => (
            <div
              key={service.id}
              className="p-8 border-r border-b border-slate-100 corporate-grid-cell group bg-white flex flex-col justify-between min-h-[300px]"
            >
              <div>
                {/* Icon wrapper */}
                <div className="w-12 h-12 rounded-lg bg-brand-bg flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-105">
                  {getIcon(service.iconName)}
                </div>

                {/* Service Title */}
                <h3 className="text-lg font-bold text-brand-dark tracking-tight mb-3 group-hover:text-brand-primary transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-500 leading-relaxed mb-6">
                  {service.shortDescription}
                </p>
              </div>

              {/* Action Link */}
              <Link
                href={`/services/${service.slug}`}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-primary hover:text-brand-hover tracking-wider uppercase self-start"
              >
                Explore Details
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
