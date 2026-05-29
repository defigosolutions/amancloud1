import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/home/ContactForm";
import { services } from "@/data/services";
import { Compass, ShieldAlert, Activity, Laptop, Users, Coins, Lock, CloudDownload, Award, ShieldCheck } from "lucide-react";
import { notFound } from "next/navigation";

// Dynamic routing map
export async function generateStaticParams() {
  return services.map((s) => ({
    slug: s.slug,
  }));
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const getIcon = (name: string) => {
    switch (name) {
      case "Compass": return <Compass className="w-8 h-8 text-brand-primary" />;
      case "CloudDownload": return <CloudDownload className="w-8 h-8 text-brand-primary" />;
      case "ShieldAlert": return <ShieldAlert className="w-8 h-8 text-brand-primary" />;
      case "Activity": return <Activity className="w-8 h-8 text-brand-primary" />;
      case "Laptop": return <Laptop className="w-8 h-8 text-brand-primary" />;
      case "Users": return <Users className="w-8 h-8 text-brand-primary" />;
      case "Coins": return <Coins className="w-8 h-8 text-brand-primary" />;
      case "Lock": return <Lock className="w-8 h-8 text-brand-primary" />;
      default: return <Compass className="w-8 h-8 text-brand-primary" />;
    }
  };

  return (
    <>
      <Header />
      <main className="flex-grow pt-24 text-left">
        
        {/* Detail Hero */}
        <section className="py-20 bg-slate-50 border-b border-slate-100 dot-grid-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-2 bg-brand-bg rounded-lg shrink-0">
                {getIcon(service.iconName)}
              </div>
              <span className="text-xs font-bold text-brand-primary uppercase tracking-widest self-center">
                Aman Cloud Expertise Area
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-brand-dark tracking-tight max-w-3xl">
              {service.title}
            </h1>
            <p className="text-base text-slate-500 mt-4 leading-relaxed max-w-2xl">
              {service.shortDescription}
            </p>
          </div>
        </section>

        {/* Detailed Scope Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* Left Column: Description */}
              <div className="lg:col-span-7 flex flex-col gap-6">
                <h2 className="text-2xl font-bold text-brand-dark tracking-tight">
                  Strategic Scope & Engineering Focus
                </h2>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {service.fullDescription}
                </p>
                <div className="p-6 bg-slate-50 rounded-xl border border-slate-100 flex gap-4 mt-2">
                  <ShieldCheck className="w-6 h-6 text-brand-primary shrink-0" />
                  <p className="text-xs text-slate-500 leading-relaxed">
                    All engineering deliverables under this framework undergo strict Zero-Trust network validation, automated secret protection scanning, and ISO 27001 baseline reviews before project completion.
                  </p>
                </div>
              </div>

              {/* Right Column: Custom Checklist Grid */}
              <div className="lg:col-span-5 bg-slate-900 text-white p-8 rounded-2xl border border-slate-800 shadow-sm">
                <h3 className="text-sm font-bold tracking-wider uppercase mb-6 flex items-center gap-2">
                  <Award className="w-5 h-5 text-brand-primary shrink-0" />
                  Primary GRC Deliverables:
                </h3>
                
                <ul className="space-y-4 text-xs font-semibold text-slate-350">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-brand-primary/25 text-[10px] font-bold text-brand-primary flex items-center justify-center shrink-0 mt-0.5">
                        ✓
                      </span>
                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </section>

        {/* Dynamic Booking form */}
        <ContactForm />

      </main>
      <Footer />
    </>
  );
}
