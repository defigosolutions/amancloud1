"use client";

import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import InsightsSection from "@/components/home/InsightsSection";
import ContactForm from "@/components/home/ContactForm";

export default function InsightsPage() {
  return (
    <>
      <Header />
      <main className="flex-grow pt-24">
        
        {/* Page Hero */}
        <section className="py-20 bg-slate-50 border-b border-slate-100 dot-grid-light text-left">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="text-xs font-bold text-brand-primary uppercase tracking-widest block mb-3">
              AMAN ADVISORY INSIGHTS
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-brand-dark tracking-tight max-w-3xl">
              Cloud architecture, GRC compliance guidance, and DevSecOps playbooks
            </h1>
            <p className="text-base text-slate-500 mt-4 leading-relaxed max-w-2xl">
              Stay ahead of emerging threat vectors, learn modern sovereign cloud guidelines, and discover technical best practices written directly by our advisory team.
            </p>
          </div>
        </section>

        {/* Global Insights grid */}
        <InsightsSection />

        {/* Lead capturing booking form */}
        <ContactForm />

      </main>
      <Footer />
    </>
  );
}
