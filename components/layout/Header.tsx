"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Compass, ShieldAlert, Activity, Laptop, Users, Coins, Lock, CloudDownload } from "lucide-react";
import { services } from "@/data/services";

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on page change
  useEffect(() => {
    setIsOpen(false);
    setDropdownOpen(false);
  }, [pathname]);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Map icon strings to Lucide components
  const getIcon = (name: string) => {
    switch (name) {
      case "Compass": return <Compass className="w-5 h-5 text-brand-primary" />;
      case "CloudDownload": return <CloudDownload className="w-5 h-5 text-brand-primary" />;
      case "ShieldAlert": return <ShieldAlert className="w-5 h-5 text-brand-primary" />;
      case "Activity": return <Activity className="w-5 h-5 text-brand-primary" />;
      case "Laptop": return <Laptop className="w-5 h-5 text-brand-primary" />;
      case "Users": return <Users className="w-5 h-5 text-brand-primary" />;
      case "Coins": return <Coins className="w-5 h-5 text-brand-primary" />;
      case "Lock": return <Lock className="w-5 h-5 text-brand-primary" />;
      default: return <Compass className="w-5 h-5 text-brand-primary" />;
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-100 py-3"
          : "bg-white/40 backdrop-blur-xs py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Corporate Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 overflow-hidden transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/logo.png"
                alt="Aman Cloud Logo"
                fill
                priority
                sizes="48px"
                className="object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-brand-dark leading-none">
                AMAN <span className="text-brand-primary">CLOUD</span>
              </span>
              <span className="text-[9px] font-medium text-slate-400 tracking-wider uppercase mt-0.5">
                Reach Higher. Build Smarter.
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link
              href="/"
              className={`text-sm font-semibold transition-colors hover:text-brand-primary ${
                pathname === "/" ? "text-brand-primary" : "text-brand-dark"
              }`}
            >
              Home
            </Link>
            
            <Link
              href="/about"
              className={`text-sm font-semibold transition-colors hover:text-brand-primary ${
                pathname === "/about" ? "text-brand-primary" : "text-brand-dark"
              }`}
            >
              About
            </Link>

            <Link
              href="/methodology"
              className={`text-sm font-semibold transition-colors hover:text-brand-primary ${
                pathname === "/methodology" ? "text-brand-primary" : "text-brand-dark"
              }`}
            >
              Methodology
            </Link>

            {/* Services Dropdown Trigger */}
            <div
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button
                className={`text-sm font-semibold flex items-center gap-1.5 transition-colors hover:text-brand-primary cursor-pointer py-2 ${
                  pathname.startsWith("/services") ? "text-brand-primary" : "text-brand-dark"
                }`}
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${dropdownOpen ? "rotate-180" : ""}`} />
              </button>

              {/* Mega Dropdown Panel */}
              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full -left-48 w-[580px] bg-white rounded-xl shadow-xl border border-slate-100 p-6 grid grid-cols-2 gap-4"
                  >
                    <div className="col-span-2 pb-3 mb-2 border-b border-slate-50 flex justify-between items-center">
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Expertise Areas</span>
                      <Link href="/services" className="text-xs font-semibold text-brand-primary hover:underline">
                        View All Services &rarr;
                      </Link>
                    </div>
                    {services.map((service) => (
                      <Link
                        key={service.id}
                        href={`/services/${service.slug}`}
                        className="flex gap-3 p-2.5 rounded-lg transition-all duration-200 hover:bg-slate-50 border border-transparent hover:border-slate-100"
                      >
                        <div className="flex-shrink-0 mt-0.5 p-1 bg-brand-bg rounded">
                          {getIcon(service.iconName)}
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-brand-dark leading-tight group-hover:text-brand-primary">
                            {service.title}
                          </h4>
                          <p className="text-xs text-slate-500 mt-1 line-clamp-1">
                            {service.shortDescription}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/industries"
              className={`text-sm font-semibold transition-colors hover:text-brand-primary ${
                pathname === "/industries" ? "text-brand-primary" : "text-brand-dark"
              }`}
            >
              Industries
            </Link>

            <Link
              href="/case-studies"
              className={`text-sm font-semibold transition-colors hover:text-brand-primary ${
                pathname === "/case-studies" ? "text-brand-primary" : "text-brand-dark"
              }`}
            >
              Case Studies
            </Link>

            <Link
              href="/insights"
              className={`text-sm font-semibold transition-colors hover:text-brand-primary ${
                pathname === "/insights" ? "text-brand-primary" : "text-brand-dark"
              }`}
            >
              Insights
            </Link>
          </nav>

          {/* Desktop High-Contrast CTA button */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-sm font-bold bg-brand-primary text-white hover:bg-brand-hover transition-colors shadow-sm cursor-pointer"
            >
              Book a Strategy Call
            </Link>
          </div>

          {/* Mobile Hamburger Trigger */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg text-brand-dark hover:bg-slate-50 cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-slate-100 mt-3 max-h-[85vh] overflow-y-auto"
          >
            <div className="px-4 pt-4 pb-6 space-y-3">
              <Link
                href="/"
                className={`block px-3 py-2.5 rounded-lg text-base font-semibold hover:bg-slate-50 ${
                  pathname === "/" ? "text-brand-primary bg-brand-bg/50" : "text-brand-dark"
                }`}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={`block px-3 py-2.5 rounded-lg text-base font-semibold hover:bg-slate-50 ${
                  pathname === "/about" ? "text-brand-primary bg-brand-bg/50" : "text-brand-dark"
                }`}
              >
                About
              </Link>
              <Link
                href="/methodology"
                className={`block px-3 py-2.5 rounded-lg text-base font-semibold hover:bg-slate-50 ${
                  pathname === "/methodology" ? "text-brand-primary bg-brand-bg/50" : "text-brand-dark"
                }`}
              >
                Methodology
              </Link>

              {/* Mobile Services Panel */}
              <div className="px-3 py-2">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">Our Services</span>
                <div className="pl-2 border-l border-slate-100 space-y-1 mt-1">
                  <Link
                    href="/services"
                    className="block py-1.5 text-sm font-semibold text-brand-dark hover:text-brand-primary"
                  >
                    Services Overview
                  </Link>
                  {services.map((service) => (
                    <Link
                      key={service.id}
                      href={`/services/${service.slug}`}
                      className="block py-1.5 text-sm font-medium text-slate-600 hover:text-brand-primary"
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="/industries"
                className={`block px-3 py-2.5 rounded-lg text-base font-semibold hover:bg-slate-50 ${
                  pathname === "/industries" ? "text-brand-primary bg-brand-bg/50" : "text-brand-dark"
                }`}
              >
                Industries
              </Link>
              <Link
                href="/case-studies"
                className={`block px-3 py-2.5 rounded-lg text-base font-semibold hover:bg-slate-50 ${
                  pathname === "/case-studies" ? "text-brand-primary bg-brand-bg/50" : "text-brand-dark"
                }`}
              >
                Case Studies
              </Link>
              <Link
                href="/insights"
                className={`block px-3 py-2.5 rounded-lg text-base font-semibold hover:bg-slate-50 ${
                  pathname === "/insights" ? "text-brand-primary bg-brand-bg/50" : "text-brand-dark"
                }`}
              >
                Insights
              </Link>

              <div className="pt-4 border-t border-slate-100">
                <Link
                  href="/contact"
                  className="flex items-center justify-center w-full px-4 py-3 rounded-lg text-base font-bold bg-brand-primary text-white hover:bg-brand-hover shadow-sm transition-colors"
                >
                  Book a Strategy Call
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
