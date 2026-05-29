"use client";

import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ServicesSection from "@/components/home/ServicesSection";
import ContactForm from "@/components/home/ContactForm";

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="flex-grow pt-24">
        
        {/* Page Hero */}
        <section className="py-20 bg-slate-50 border-b border-slate-100 dot-grid-light text-left">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="text-xs font-bold text-brand-primary uppercase tracking-widest block mb-3">
              OUR CAPABILITIES
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-brand-dark tracking-tight max-w-3xl">
              Elite cloud engineering, Zero-Trust security, and automated DevSecOps
            </h1>
            <p className="text-base text-slate-500 mt-4 leading-relaxed max-w-2xl">
              We design and construct secure cloud landings, integrate strict automated pipeline validations, and maintain continuous threat operations monitoring for highly-regulated corporations.
            </p>
          </div>
        </section>

        {/* Global services component */}
        <ServicesSection />

        {/* Lead capturing booking form */}
        <ContactForm />

      </main>
      <Footer />
    </>
  );
}
