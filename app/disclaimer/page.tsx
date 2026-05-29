"use client";

import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function DisclaimerPage() {
  return (
    <>
      <Header />
      <main className="flex-grow pt-24 text-left">
        <section className="py-20 bg-slate-50 border-b border-slate-100 dot-grid-light">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="text-xs font-bold text-brand-primary uppercase tracking-widest block mb-2">
              COMPLIANCE DISCLOSURE
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight">
              Corporate Legal Disclaimer
            </h1>
            <p className="text-sm text-slate-500 mt-2">
              Last updated: May 2026.
            </p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate text-sm text-slate-500 space-y-6 leading-relaxed">
            
            <div>
              <h2 className="text-lg font-bold text-brand-dark mb-3">1. Advisory Limits</h2>
              <p>
                The information provided on this corporate website is for general informational and advisory purposes only. While we construct highly secure, GRC-aligned architectures, the technical suggestions or compliance guidelines expressed here do not constitute direct operational legal warranties.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-brand-dark mb-3">2. Third-Party References</h2>
              <p>
                Any references or hyper-links pointing to external frameworks, ISO standards, or cloud platform providers (such as Microsoft Azure or Vercel) are provided purely as industry context. We do not maintain administrative control over these external websites.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-brand-dark mb-3">3. Operational Liability</h2>
              <p>
                Aman Cloud UAE shall not be held liable for any data breaches, operational downtime, or compliance audit failures resulting from client-side credential sharing, configuration modifications executed without our approval, or external zero-day exploits outside our firewall gating parameters.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-brand-dark mb-3">4. Jurisdiction</h2>
              <p>
                These disclaimers, GRC compliance declarations, and terms of service are governed by and construed under the direct legal systems of the Emirate of Dubai, United Arab Emirates, and the courts of London, United Kingdom.
              </p>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
