"use client";

import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function SecurityCompliancePage() {
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
              Security &amp; Compliance Safeguards
            </h1>
            <p className="text-sm text-slate-500 mt-2">
              Last updated: May 2026.
            </p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate text-sm text-slate-500 space-y-6 leading-relaxed">
            
            <div>
              <h2 className="text-lg font-bold text-brand-dark mb-3">1. Continuous Compliance Auditing</h2>
              <p>
                Our engineering practices are audited against international ISO/IEC 27001 (Information Security Management) and SOC 2 Type II controls. We execute continuous internal architecture scans to verify that our operations protect client metadata.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-brand-dark mb-3">2. Pipeline Gating Guardrails</h2>
              <p>
                Aman Cloud leverages automated static and dynamic analysis (SAST/DAST) across all coding repositories. Any commit triggering compliance errors or exposing structural keys is blocked from merge pipelines automatically.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-brand-dark mb-3">3. External Vulnerability Assessments</h2>
              <p>
                We hire independent, licensed third-party white-hat cybersecurity firms twice yearly to carry out rigorous black-box penetration testing against our systems and client mockups to ensure absolute protection.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-brand-dark mb-3">4. Security Certification Standards</h2>
              <p>
                Every cloud engineer, security analyst, and systems administrator at Aman Cloud holds advanced certifications including Microsoft Certified: Cybersecurity Architect Expert, CISSP, or Certified DevSecOps Professional.
              </p>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
