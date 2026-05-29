"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Award } from "lucide-react";
import { caseStudies } from "@/data/caseStudies";

export default function CaseStudiesSection() {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = ["All", "Government", "Enterprise", "Fintech", "DevSecOps", "Healthcare"];

  const filteredCaseStudies = activeFilter === "All"
    ? caseStudies
    : caseStudies.filter((cs) => cs.category === activeFilter);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Block */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
          <div className="text-left">
            <span className="text-xs font-bold text-brand-primary uppercase tracking-widest block mb-3">
              CLIENT SUCCESS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight">
              Delivering secure transformation at scale
            </h2>
          </div>
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-1 text-sm font-bold text-brand-primary hover:underline cursor-pointer"
          >
            All Case Studies &rarr;
          </Link>
        </div>

        {/* Real-time Category Filtering Row */}
        <div className="flex flex-wrap gap-2.5 mb-10 pb-2 border-b border-slate-100 justify-start">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeFilter === category
                  ? "bg-brand-primary text-white shadow-xs"
                  : "bg-slate-50 text-slate-500 hover:bg-slate-100 hover:text-brand-dark"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Filtering Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left"
        >
          <AnimatePresence mode="popLayout">
            {filteredCaseStudies.map((cs) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                key={cs.id}
                className="group flex flex-col bg-white rounded-xl border border-slate-150 overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 min-h-[460px] justify-between"
              >
                <div>
                  {/* Image wrapper */}
                  <div className="relative w-full h-[190px] overflow-hidden bg-slate-100">
                    <img
                      src={cs.imageUrl}
                      alt={cs.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    {/* Category pill */}
                    <span className="absolute top-4 left-4 px-2.5 py-1 rounded bg-slate-900/90 text-white text-[9px] font-bold tracking-widest uppercase">
                      {cs.category}
                    </span>
                  </div>

                  {/* Core Card Content */}
                  <div className="p-6">
                    <div className="flex justify-between items-center text-[10px] text-slate-400 font-bold mb-2.5">
                      <span>{cs.client}</span>
                      <span>{cs.date}</span>
                    </div>

                    <h3 className="text-base font-bold text-brand-dark leading-snug group-hover:text-brand-primary transition-colors line-clamp-2">
                      {cs.title}
                    </h3>

                    {/* Impact verified metrics pill */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {cs.metrics.slice(0, 2).map((metric, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-600 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded"
                        >
                          <Award className="w-3 h-3 text-emerald-500 shrink-0" />
                          {metric}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom link */}
                <div className="px-6 pb-6 pt-3 mt-auto border-t border-slate-50 flex justify-between items-center">
                  <span className="text-xs font-semibold text-slate-400">Security Verified</span>
                  <Link
                    href={`/case-studies/${cs.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-primary group-hover:text-brand-hover tracking-wider uppercase"
                  >
                    Read case study
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
