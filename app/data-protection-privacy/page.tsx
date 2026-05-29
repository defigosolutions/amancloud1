"use client";

import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function DataProtectionPrivacyPage() {
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
              Data Protection &amp; Privacy Policies
            </h1>
            <p className="text-sm text-slate-500 mt-2">
              Last updated: May 2026.
            </p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate text-sm text-slate-500 space-y-6 leading-relaxed">
            
            <div>
              <h2 className="text-lg font-bold text-brand-dark mb-3">1. GRC Compliance Frameworks</h2>
              <p>
                Aman Cloud coordinates secure cloud architecture and migrations complying with absolute geographical data residency rules. We maintain technical controls aligning with UAE Federal data regulations and United Kingdom General Data Protection Regulation (UK GDPR).
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-brand-dark mb-3">2. Asymmetric Data Encryption</h2>
              <p>
                All sensitive project deliverables, architectural blueprints, and compliance reports are encrypted at rest using AES-256 bits specifications and in transit using TLS 1.3 standards. Asymmetric cryptographic operations are isolated within FIPS 140-2 Level 3 validated Hardware Security Modules (HSMs).
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-brand-dark mb-3">3. Sub-processor Governance</h2>
              <p>
                We do not outsource engineering operations or share client scopes with third-party sub-processors. All technical operations are handled by credentialed on-staff cloud security engineers bound by strict corporate NDAs.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-brand-dark mb-3">4. Audit &amp; Data Deletion rights</h2>
              <p>
                In compliance with regulatory rules, corporate clients can request complete, auditable purging of their system blueprints, logs, and contact parameters at any time by contacting our compliance division.
              </p>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
