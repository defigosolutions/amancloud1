"use client";

import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/home/ContactForm";

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="flex-grow pt-24">
        
        {/* Page Hero */}
        <section className="py-20 bg-slate-50 border-b border-slate-100 dot-grid-light text-left">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="text-xs font-bold text-brand-primary uppercase tracking-widest block mb-3">
              CONTACT US
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-brand-dark tracking-tight max-w-3xl">
              Connect with our elite cloud and cybersecurity advisory board
            </h1>
            <p className="text-base text-slate-500 mt-4 leading-relaxed max-w-2xl">
              Partner with Aman Cloud to safeguard transaction records, audit configuration drifts, automate pipeline tests, or coordinate legacy migration targets.
            </p>
          </div>
        </section>

        {/* Global Contact Component */}
        <ContactForm />

      </main>
      <Footer />
    </>
  );
}
