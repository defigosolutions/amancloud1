"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Calendar, User, Clock } from "lucide-react";
import { insights } from "@/data/insights";

export default function InsightsSection() {
  return (
    <section className="py-24 bg-brand-bg/30 border-t border-slate-100 dot-grid-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Block */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
          <div className="text-left">
            <span className="text-xs font-bold text-brand-primary uppercase tracking-widest block mb-3">
              INSIGHTS & PERSPECTIVES
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight">
              Executive leadership in cloud engineering
            </h2>
          </div>
          <Link
            href="/insights"
            className="inline-flex items-center gap-1 text-sm font-bold text-brand-primary hover:underline cursor-pointer"
          >
            All Insights &rarr;
          </Link>
        </div>

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {insights.map((insight) => (
            <div
              key={insight.id}
              className="flex flex-col bg-white rounded-xl border border-slate-150 overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 min-h-[440px] justify-between group"
            >
              <div>
                {/* Image */}
                <div className="relative w-full h-[180px] overflow-hidden bg-slate-100">
                  <img
                    src={insight.imageUrl}
                    alt={insight.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <span className="absolute top-4 left-4 px-2.5 py-1 rounded bg-slate-900/90 text-white text-[9px] font-bold tracking-widest uppercase">
                    {insight.category}
                  </span>
                </div>

                {/* Article Card Content */}
                <div className="p-6">
                  {/* Meta items */}
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[10px] text-slate-400 font-bold mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-300" />
                      {insight.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-300" />
                      {insight.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold text-brand-dark leading-snug group-hover:text-brand-primary transition-colors line-clamp-2">
                    {insight.title}
                  </h3>

                  {/* Summary */}
                  <p className="text-xs text-slate-500 leading-relaxed mt-3 line-clamp-3">
                    {insight.summary}
                  </p>
                </div>
              </div>

              {/* Bottom bar */}
              <div className="px-6 pb-6 pt-3 mt-auto border-t border-slate-50 flex justify-between items-center">
                <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-600">
                  <div className="w-5.5 h-5.5 bg-slate-100 border border-slate-200 rounded-full flex items-center justify-center shrink-0">
                    <User className="w-3 h-3 text-slate-500" />
                  </div>
                  <span>By {insight.author}</span>
                </div>

                <Link
                  href={`/insights/${insight.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-bold text-brand-primary tracking-wider uppercase"
                >
                  Read Article
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
