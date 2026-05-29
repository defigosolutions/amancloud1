"use client";

import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhyAmanSection from "@/components/home/WhyAmanSection";
import ContactForm from "@/components/home/ContactForm";
import { User, ShieldAlert, BadgeCheck, Network, Award } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="flex-grow pt-24">
        
        {/* Page Hero */}
        <section className="py-20 bg-slate-50 border-b border-slate-100 dot-grid-light text-left">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="text-xs font-bold text-brand-primary uppercase tracking-widest block mb-3">
              ABOUT AMAN CLOUD
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-brand-dark tracking-tight max-w-3xl">
              Empowering financial, government, and enterprise organizations to grow safely
            </h1>
            <p className="text-base text-slate-500 mt-4 leading-relaxed max-w-2xl">
              Combining industry-leading certifications, secure engineering automation, and a zero-trust technical focus to protect mission-critical digital environments.
            </p>
          </div>
        </section>

        {/* Corporate Profile & Philosophy */}
        <section className="py-20 bg-white text-left">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-7 flex flex-col gap-6">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark tracking-tight">
                  Security is not an afterthought — it is the engineering blueprint
                </h2>
                <div className="space-y-4 text-sm text-slate-500 leading-relaxed">
                  <p>
                    At Aman Cloud, we believe that modern digital scaling must not come at the expense of data security. Instead of wrapping protection tools around systems after they are designed, we embed Zero-Trust network segmentation, identity guardrails, and compliance validations directly into the foundation code.
                  </p>
                  <p>
                    We combine our elite team’s deep sector experience with automated CI/CD gating to eliminate vulnerabilities early in the software pipeline, saving organizations millions in incident mitigation costs while satisfying rigorous ISO 27001, DFSA, and local geographical compliance rules.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-5 bg-brand-bg/50 p-8 rounded-2xl border border-slate-100">
                <h3 className="text-base font-bold text-brand-dark mb-4">Our Core Philosophy</h3>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <BadgeCheck className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">Outcomes Over Tools</h4>
                      <p className="text-[11px] text-slate-500 mt-1">We never push single-vendor licenses. We design custom engineering patterns chosen specifically to support your operations.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <BadgeCheck className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">Auditable Integrity</h4>
                      <p className="text-[11px] text-slate-500 mt-1">Every gateway configuration and pipeline validation we construct is 100% transparent, version-controlled, and audit-ready.</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Leadership Segment: Imran Shah Profile */}
        <section className="py-20 bg-slate-50 border-y border-slate-100 text-left">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* Left Column: Leadership Bio */}
              <div className="lg:col-span-8 flex flex-col gap-6">
                <div>
                  <span className="text-xs font-bold text-brand-primary uppercase tracking-widest block mb-2">
                    TECHNICAL LEADERSHIP
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark tracking-tight">
                    Imran Shah
                  </h2>
                  <p className="text-sm font-bold text-slate-400 mt-0.5 uppercase tracking-wide">
                    Founder &amp; Cloud Architecture Lead
                  </p>
                </div>

                <div className="space-y-4 text-sm text-slate-500 leading-relaxed">
                  <p>
                    Imran Shah is a cloud infrastructure and cybersecurity leader with over a decade of experience designing and operating secure, scalable enterprise environments across healthcare, housing, banking, and government sectors.
                  </p>
                  <p>
                    He specializes in Microsoft Azure architecture, DevSecOps enablement, and infrastructure automation (Infrastructure as Code via Terraform), helping organizations transition legacy, high-risk datacenters into resilient, zero-trust digital clouds.
                  </p>
                  <p>
                    Throughout his career, Imran has delivered high-profile, mission-critical solutions, including NHS network modernization, enterprise virtual desktop security arrays, and secure financial database compliance pipelines that reduce deployment risk by over 80%.
                  </p>
                  <p>
                    At Aman Cloud, he coordinates technical strategy and engineering excellence parameters, ensuring that every deployment matches strict corporate security guidelines.
                  </p>
                </div>

                {/* Professional Qualifications Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                  <div className="p-4 bg-white rounded-xl border border-slate-200/60 flex items-center gap-3">
                    <Award className="w-5 h-5 text-brand-primary shrink-0" />
                    <span className="text-xs font-semibold text-slate-700">Certified Azure Security Architect</span>
                  </div>
                  <div className="p-4 bg-white rounded-xl border border-slate-200/60 flex items-center gap-3">
                    <Network className="w-5 h-5 text-brand-primary shrink-0" />
                    <span className="text-xs font-semibold text-slate-700">Expert DevSecOps Automation Practitioner</span>
                  </div>
                </div>

              </div>

              {/* Right Column: Founder Mockup Visual */}
              <div className="lg:col-span-4 relative flex justify-center bg-white p-8 rounded-2xl border border-slate-150 shadow-sm">
                <div className="flex flex-col items-center text-center gap-4 w-full">
                  <div className="w-20 h-20 bg-brand-bg rounded-full flex items-center justify-center border border-brand-accent/20">
                    <User className="w-10 h-10 text-brand-primary" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-lg font-extrabold text-brand-dark">Imran Shah</span>
                    <span className="text-xs text-slate-400 font-semibold uppercase mt-0.5">Advisory Board Member</span>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed max-w-xs mt-2 border-t border-slate-50 pt-4">
                    &quot;Our goal is to build long-term advisory trust. We ensure that our clients never worry about data breach, configuration drift, or audit failures.&quot;
                  </p>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* Why Aman Differentiators block */}
        <WhyAmanSection />

        {/* Action Call booking form */}
        <ContactForm />

      </main>
      <Footer />
    </>
  );
}
