"use client";

import React from "react";
import Header from "@/components/layout/Header";
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import WhyAmanSection from "@/components/home/WhyAmanSection";
import CaseStudiesSection from "@/components/home/CaseStudiesSection";
import ApproachTimeline from "@/components/home/ApproachTimeline";
import StatsSection from "@/components/home/StatsSection";
import InsightsSection from "@/components/home/InsightsSection";
import ContactForm from "@/components/home/ContactForm";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <ServicesSection />
        <WhyAmanSection />
        <StatsSection />
        <ApproachTimeline />
        <CaseStudiesSection />
        <InsightsSection />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
