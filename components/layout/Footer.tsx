"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-350 border-t border-slate-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-slate-800">
          
          {/* Column 1: Corporate Profile */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-12 h-12 bg-white rounded-lg p-1 overflow-hidden transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/logo.png"
                  alt="Aman Cloud Logo"
                  fill
                  sizes="48px"
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-white leading-none">
                  AMAN <span className="text-brand-primary">CLOUD</span>
                </span>
                <span className="text-[9px] font-semibold text-slate-400 tracking-wider uppercase mt-0.5">
                  Reach Higher. Build Smarter.
                </span>
              </div>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">
              Aman Cloud delivers secure cloud infrastructure, cybersecurity architecture, DevSecOps pipelines, and identity management solutions for fintech, government, and enterprise clients.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/company/amancloud/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-brand-primary transition-all duration-200"
                aria-label="LinkedIn Profile"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/aman.cloud"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-brand-primary transition-all duration-200"
                aria-label="Instagram Profile"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-6">Company</h4>
            <ul className="space-y-3.5 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/methodology" className="hover:text-white transition-colors">Methodology</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">Services Overview</Link>
              </li>
              <li>
                <Link href="/industries" className="hover:text-white transition-colors">Industries We Serve</Link>
              </li>
              <li>
                <Link href="/case-studies" className="hover:text-white transition-colors">Client Success Stories</Link>
              </li>
              <li>
                <Link href="/insights" className="hover:text-white transition-colors">Insights & Research</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Core Services */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-6">Expertise</h4>
            <ul className="space-y-3.5 text-sm">
              <li>
                <Link href="/services/cloud-consultation" className="hover:text-white transition-colors">Cloud Consultation</Link>
              </li>
              <li>
                <Link href="/services/cloud-migration" className="hover:text-white transition-colors">Secure Cloud Migration</Link>
              </li>
              <li>
                <Link href="/services/cybersecurity-architecture" className="hover:text-white transition-colors">Cybersecurity Architecture</Link>
              </li>
              <li>
                <Link href="/services/devsecops-enablement" className="hover:text-white transition-colors">DevSecOps Enablement</Link>
              </li>
              <li>
                <Link href="/services/custom-application-development" className="hover:text-white transition-colors">Cloud Application Dev</Link>
              </li>
              <li>
                <Link href="/fintech-solutions" className="hover:text-white transition-colors">Fintech Infrastructure</Link>
              </li>
              <li>
                <Link href="/fintech-security" className="hover:text-white transition-colors">Fintech Regulatory Security</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Center */}
          <div className="flex flex-col gap-6">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-1">Dubai Head Office</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Meydan Grandstand, 6th floor, Meydan Road, Nad Al Sheba, Dubai, U.A.E.
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand-primary shrink-0" />
                <a href="tel:+971501595075" className="hover:text-white transition-colors">+971 50 159 5075</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-brand-primary shrink-0" />
                <a href="mailto:info@amancloud.ae" className="hover:text-white transition-colors">info@amancloud.ae</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Lower Footer: Copyright & Governance Policy Links */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <div>
            &copy; {currentYear} Aman Cloud. All Rights Reserved. Incorporated in Dubai, UAE & London, UK.
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-2 justify-center">
            <Link href="/data-protection-privacy" className="hover:text-slate-350 transition-colors">Data Protection & Privacy</Link>
            <span>/</span>
            <Link href="/security-compliance" className="hover:text-slate-350 transition-colors">Security & Compliance</Link>
            <span>/</span>
            <Link href="/privacy-policy" className="hover:text-slate-350 transition-colors">Privacy Policy</Link>
            <span>/</span>
            <Link href="/disclaimer" className="hover:text-slate-350 transition-colors">Disclaimer</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
