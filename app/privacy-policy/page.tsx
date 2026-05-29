"use client";

import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function PrivacyPolicyPage() {
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
              Privacy Policy &amp; Data Safeguards
            </h1>
            <p className="text-sm text-slate-500 mt-2">
              Last updated: May 2026.
            </p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate text-sm text-slate-500 space-y-6 leading-relaxed">
            
            <div>
              <h2 className="text-lg font-bold text-brand-dark mb-3">1. Operational Overview</h2>
              <p>
                Aman Cloud UAE ("Aman Cloud", "we", "us", "our") takes data protection and privacy extremely seriously. We are committed to safeguarding corporate identities, customer transaction details, and operational records under local UAE sovereign cybersecurity regulations and international ISO 27001 parameters.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-brand-dark mb-3">2. Data Collection Baselines</h2>
              <p>
                We only collect professional coordinates (such as name, company email, corporate phone numbers, and operational project scopes) voluntarily provided during strategy booking requests. No sensitive infrastructure keys or code repositories are ever requested or logged via public web forms.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-brand-dark mb-3">3. Infrastructure Security Safeguards</h2>
              <p>
                All consulting data, active NDA parameters, and strategy records are isolated inside highly secure multi-tenant cloud storage structures. These vaults utilize end-to-end asymmetric database encryption and identity-first Entra ID MFA barriers blocking unapproved access.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-brand-dark mb-3">4. Contact Information</h2>
              <p>
                For GRC questions, data rights requests, or audit validations, please contact our compliance desk at: <a href="mailto:info@amancloud.ae" className="text-brand-primary underline font-bold">info@amancloud.ae</a>.
              </p>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
