"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, ShieldAlert, BadgeCheck, Send } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    scope: "Cloud Consultation",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API request
    setTimeout(() => {
      setSubmitted(true);
    }, 600);
  };

  return (
    <section className="py-24 bg-white relative" id="contact-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Column 1: Left Form Block */}
          <div className="lg:col-span-7 bg-slate-50 p-8 sm:p-10 rounded-2xl border border-slate-100/80 shadow-xs text-left">
            <div className="mb-8">
              <span className="text-xs font-bold text-brand-primary uppercase tracking-widest block mb-2">
                STRATEGY CALL BOOKING
              </span>
              <h3 className="text-2xl font-extrabold text-brand-dark tracking-tight">
                Request a Security &amp; Infrastructure Assessment
              </h3>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                Connect with our elite cloud security architects to examine potential infrastructure gaps, GRC compliance baselines, and scaling blueprints.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 bg-emerald-50 rounded-xl border border-emerald-250 flex flex-col items-center gap-4 text-center">
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center">
                  <BadgeCheck className="w-7 h-7 text-emerald-600" />
                </div>
                <h4 className="text-lg font-bold text-slate-800">Assessment Request Received</h4>
                <p className="text-xs text-slate-500 max-w-sm">
                  Our founder &amp; cloud engineering lead Imran Shah will review your company scope within 24 operational hours. A direct meeting invite has been sent to your email.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-2 text-xs font-bold text-brand-primary hover:underline cursor-pointer"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 text-sm">
                
                {/* 2-Column Row: Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      placeholder="e.g., Imran Shah"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="h-11 w-full bg-white rounded-lg border border-slate-200 px-4 py-2 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-primary transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      placeholder="e.g., info@amancloud.ae"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="h-11 w-full bg-white rounded-lg border border-slate-200 px-4 py-2 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-primary transition-colors"
                    />
                  </div>
                </div>

                {/* 2-Column Row: Company & Role */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="company" className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      id="company"
                      required
                      placeholder="e.g., Aman Cloud UAE"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="h-11 w-full bg-white rounded-lg border border-slate-200 px-4 py-2 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-primary transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="role" className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                      Your Corporate Role
                    </label>
                    <input
                      type="text"
                      id="role"
                      placeholder="e.g., Director of Operations"
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="h-11 w-full bg-white rounded-lg border border-slate-200 px-4 py-2 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-primary transition-colors"
                    />
                  </div>
                </div>

                {/* Dropdown Selector: Scope */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="scope" className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                    Primary Service Focus
                  </label>
                  <select
                    id="scope"
                    value={formData.scope}
                    onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
                    className="h-11 w-full bg-white rounded-lg border border-slate-200 px-4 py-2 text-slate-800 focus:outline-none focus:border-brand-primary transition-colors"
                  >
                    <option>Cloud Consultation</option>
                    <option>Secure Cloud Migration</option>
                    <option>Cybersecurity Architecture</option>
                    <option>DevSecOps Pipeline Gating</option>
                    <option>Fintech GRC Setup</option>
                  </select>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                    Project Scope / Details
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Briefly describe your cloud infrastructure, transaction volume, or compliance goals..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white rounded-lg border border-slate-200 px-4 py-3 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-primary transition-colors resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full h-12 rounded-lg text-sm font-bold bg-brand-primary text-white hover:bg-brand-hover transition-colors shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                >
                  Book Executive Consultation
                  <Send className="w-4 h-4 shrink-0" />
                </button>

              </form>
            )}

          </div>

          {/* Column 2: Right Credentials & Contact Card */}
          <div className="lg:col-span-5 flex flex-col gap-6 text-left">
            
            {/* Contact Parameters */}
            <div className="p-8 bg-slate-900 rounded-2xl text-white flex flex-col gap-6 shadow-sm border border-slate-800">
              <h4 className="text-lg font-bold tracking-tight">Dubai Corporate Coordinates</h4>
              
              <div className="space-y-5 text-sm text-slate-350">
                <div className="flex gap-3">
                  <MapPin className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                  <span className="leading-relaxed">
                    Meydan Grandstand, 6th floor, Meydan Road, Nad Al Sheba, Dubai, U.A.E.
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-brand-primary shrink-0" />
                  <a href="tel:+971501595075" className="hover:text-white transition-colors">+971 50 159 5075</a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-brand-primary shrink-0" />
                  <a href="mailto:info@amancloud.ae" className="hover:text-white transition-colors">info@amancloud.ae</a>
                </div>
              </div>
            </div>

            {/* Quality credentials lists */}
            <div className="p-8 bg-brand-bg/40 rounded-2xl border border-slate-100 flex flex-col gap-6">
              <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                <ShieldAlert className="w-5 h-5 text-brand-primary shrink-0" />
                <h4 className="text-base font-bold text-brand-dark">Security Commitments</h4>
              </div>

              <ul className="space-y-4 text-xs font-semibold text-slate-600">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-brand-primary rounded-full shrink-0"></span>
                  <span>100% Strict Executive Non-Disclosure Agreements (NDA)</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-brand-primary rounded-full shrink-0"></span>
                  <span>Direct Advisory by founder Imran Shah</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-brand-primary rounded-full shrink-0"></span>
                  <span>Validated by UAE Sovereign Network baselines</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-brand-primary rounded-full shrink-0"></span>
                  <span>All Engineers hold Azure Security Architect Credentials</span>
                </li>
              </ul>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
