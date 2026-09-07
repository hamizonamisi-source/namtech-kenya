import React, { useState } from "react";
import { Link } from "wouter";
import { 
  Compass, 
  Zap, 
  Clock, 
  ShieldCheck, 
  Users, 
  CheckCircle, 
  MapPin, 
  Phone, 
  MessageSquare, 
  ArrowRight 
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { QuoteModal, FloatingContactBar } from "@/components/QuoteModal";
import { BRAND, WHY_CHOOSE_US, KENYA_LOCATIONS } from "@/data/namitechData";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100">
      <Header onOpenQuoteModal={() => setQuoteModalOpen(true)} />

      <main className="flex-grow">
        {/* Banner */}
        <section className="relative py-16 lg:py-24 bg-gradient-to-b from-slate-900 to-slate-950 border-b border-slate-800">
          <div className="container mx-auto text-center max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-semibold">
              About NamiTech Kenya
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-['Space_Grotesk'] tracking-tight">
              Connecting & Securing Kenyan Homes & Businesses
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
              We are a dedicated Kenyan ICT, networking, and surveillance engineering firm. Our mission is delivering rock-solid connectivity and reliable 24/7 security systems.
            </p>
          </div>
        </section>

        {/* Company Narrative & Visual */}
        <section className="py-20">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 space-y-6">
                <span className="text-xs uppercase tracking-widest text-cyan-400 font-bold">
                  Our Background & Commitment
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-['Space_Grotesk']">
                  Kenyan Practical Expertise Built for Local Realities
                </h2>
                <p className="text-slate-300 text-base leading-relaxed">
                  Founded with a clear focus on overcoming common connectivity frustrations—such as poor WiFi coverage in concrete walls, tangled cables, and substandard surveillance cameras that fail in low light—NamiTech brings structured engineering discipline to every installation.
                </p>
                <p className="text-slate-300 text-base leading-relaxed">
                  Whether you are an estate homeowner in Nairobi needing flawless internet across multiple floors, or a logistics company in Mombasa requiring perimeter CCTV and central control, we supply tested hardware and neat workmanship.
                </p>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-800">
                  <div className="space-y-1">
                    <p className="text-2xl font-extrabold text-cyan-400 font-['Space_Grotesk']">500+</p>
                    <p className="text-xs text-slate-400">Installations Across Kenya</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-2xl font-extrabold text-cyan-400 font-['Space_Grotesk']">99.8%</p>
                    <p className="text-xs text-slate-400">Network Uptime Guarantee</p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="rounded-3xl overflow-hidden border border-cyan-500/30 shadow-2xl relative">
                  <img
                    src={BRAND.images.noc}
                    alt="NamiTech Kenya Operations and Monitoring Team"
                    className="w-full h-auto object-cover"
                  />
                  <div className="p-4 bg-slate-900/90 border-t border-slate-800">
                    <p className="text-sm font-bold text-white">Central Support & Rapid Dispatch Team</p>
                    <p className="text-xs text-cyan-300">Monitored infrastructure & certified technicians</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Detailed */}
        <section className="py-20 bg-slate-900/40 border-y border-slate-800">
          <div className="container mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-['Space_Grotesk']">
                What Sets NamiTech Apart
              </h2>
              <p className="text-slate-300 text-base">
                Core standards that define our work on every Kenyan site.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center">
                  <Compass className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white font-['Space_Grotesk']">
                  Local Expertise
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Tailored networking and surveillance solutions built for Kenyan businesses and homes. We recommend hardware resilient to local power fluctuations and outdoor tropical conditions.
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white font-['Space_Grotesk']">
                  Fast Installation
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Rapid deployment with neat, structured cabling and minimal downtime. Our technicians arrive with all tools and fixtures to complete standard installations in 24 to 48 hours.
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white font-['Space_Grotesk']">
                  24/7 Support & Maintenance
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Dedicated technical assistance whenever you need it. We assist with app reconfiguration, password resets, camera clean-ups, and proactive link checks.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Coverage Areas across Kenya */}
        <section className="py-20">
          <div className="container mx-auto text-center max-w-4xl space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-['Space_Grotesk']">
              Service Areas in Kenya
            </h2>
            <p className="text-slate-300 text-base">
              NamiTech field engineers are on standby for prompt site assessments in:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-left">
              {KENYA_LOCATIONS.map((loc, i) => (
                <div key={i} className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span className="text-xs text-slate-200 font-medium">{loc}</span>
                </div>
              ))}
            </div>

            <div className="pt-8">
              <Button
                onClick={() => setQuoteModalOpen(true)}
                className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold px-8 py-3 text-base rounded-xl"
              >
                Schedule a Free Site Visit
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingContactBar onOpenQuote={() => setQuoteModalOpen(true)} />
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        initialService="Both"
      />
    </div>
  );
}
