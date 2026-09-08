import React, { useState } from "react";
import { Link } from "wouter";
import {
  Wifi,
  ShieldAlert,
  Server,
  Check,
  ArrowRight,
  Phone,
  MessageSquare,
  Laptop,
  Radio,
  ShieldCheck,
  Cpu,
  HardDrive,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { QuoteModal, FloatingContactBar } from "@/components/QuoteModal";
import { LeadForm } from "@/components/LeadForm";
import { BRAND, SERVICES } from "@/data/namitechData";
import { Button } from "@/components/ui/button";

export default function ServicesPage() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [activeService, setActiveService] = useState<any>("Both");

  const openQuote = (serviceName: string) => {
    setActiveService(serviceName);
    setQuoteModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100">
      <Header onOpenQuoteModal={() => openQuote("Both")} />

      <main className="flex-grow">
        {/* Banner */}
        <section className="relative py-16 lg:py-24 bg-gradient-to-b from-slate-900 to-slate-950 border-b border-slate-800">
          <div className="container mx-auto text-center max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-semibold">
              Comprehensive Networking & Security Solutions Kenya
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-['Space_Grotesk'] tracking-tight">
              Our Professional ICT & Surveillance Services
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
              From high-speed fiber internet and mesh WiFi setups to enterprise
              Cat6 structured cabling and 24/7 smart IP CCTV surveillance across
              Kenya.
            </p>
          </div>
        </section>

        {/* Deep Dive Services Section */}
        <section className="py-20">
          <div className="container mx-auto space-y-24">
            {/* Service 1: Internet & Networking */}
            <div
              id="internet"
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
            >
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-400 text-xs font-bold">
                  <Wifi className="w-3.5 h-3.5" />
                  Primary Networking Service
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-['Space_Grotesk']">
                  Internet & Networking Setup in Kenya
                </h2>
                <p className="text-slate-300 leading-relaxed text-base">
                  High-speed internet deployment, fiber configuration, router
                  setup, structured LAN/WAN cabling, and WiFi dead-zone
                  elimination for homes and offices across Kenya.
                </p>

                <div className="space-y-3 pt-2">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-cyan-300">
                    What We Deliver:
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-300">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span>Fiber optic configuration</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span>Mesh WiFi dead-zone fixes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span>Cat6 / Cat6A structured cabling</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span>Multi-tenant & compound WiFi</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span>MikroTik / Cisco router config</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span>Captive portals & guest WiFi</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-4 flex flex-wrap gap-4">
                  <Button
                    onClick={() => openQuote("Internet")}
                    className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold px-6 py-2.5 rounded-xl"
                  >
                    Get Internet Setup Quote
                  </Button>
                  <a
                    href={BRAND.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-xl border border-emerald-500/40 text-emerald-300 bg-emerald-950/40 hover:bg-emerald-900/50 text-sm font-semibold flex items-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4" />
                    Discuss with Technician
                  </a>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="rounded-3xl overflow-hidden border border-cyan-500/30 shadow-2xl relative">
                  <img
                    src={BRAND.images.rack}
                    alt="Network server rack cabling and internet installation Kenya"
                    className="w-full h-auto object-cover"
                  />
                  <div className="p-4 bg-slate-900/90 border-t border-slate-800 text-xs text-slate-300 flex justify-between items-center">
                    <span>Neat Server Rack & Router Setup</span>
                    <span className="text-cyan-400 font-bold">
                      Fluke Certified
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Service 2: CCTV & Security Solutions */}
            <div
              id="cctv"
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
            >
              <div className="lg:col-span-6 order-2 lg:order-1">
                <div className="rounded-3xl overflow-hidden border border-cyan-500/30 shadow-2xl relative">
                  <img
                    src={BRAND.images.cctv}
                    alt="CCTV security camera installation technician in Kenya"
                    className="w-full h-auto object-cover"
                  />
                  <div className="p-4 bg-slate-900/90 border-t border-slate-800 text-xs text-slate-300 flex justify-between items-center">
                    <span>HD & IP Camera Installation</span>
                    <span className="text-cyan-400 font-bold">
                      24/7 Mobile View
                    </span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-400 text-xs font-bold">
                  <ShieldAlert className="w-3.5 h-3.5" />
                  Primary Surveillance Service
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-['Space_Grotesk']">
                  CCTV & Smart Security Solutions
                </h2>
                <p className="text-slate-300 leading-relaxed text-base">
                  Professional HD/IP CCTV camera installation, remote mobile
                  view setup, maintenance, and smart security monitoring for
                  residential and commercial properties.
                </p>

                <div className="space-y-3 pt-2">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-blue-300">
                    Surveillance Capabilities:
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-300">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span>Full HD & 4K Ultra-clear IP cameras</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span>Color-at-night infrared vision</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span>Smartphone remote view (iOS & Android)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span>Smart human & vehicle motion alerts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span>NVR recording & cloud synchronization</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span>CCTV system upgrade & maintenance</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-4 flex flex-wrap gap-4">
                  <Button
                    onClick={() => openQuote("CCTV")}
                    className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold px-6 py-2.5 rounded-xl"
                  >
                    Get CCTV Quote
                  </Button>
                  <a
                    href={BRAND.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-xl border border-emerald-500/40 text-emerald-300 bg-emerald-950/40 hover:bg-emerald-900/50 text-sm font-semibold flex items-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4" />
                    Request Site Survey
                  </a>
                </div>
              </div>
            </div>

            {/* Service 3 & 4: Structured Cabling & Access Control */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
              <div
                id="cabling"
                className="p-8 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-4"
              >
                <div className="p-3 w-fit rounded-xl bg-cyan-500/10 text-cyan-400">
                  <Server className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white font-['Space_Grotesk']">
                  Structured Cabling & Server Racks
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Avoid cable clutter and network bottlenecks. We design and
                  install standardized Cat6 cabling, patch panels, cable trays,
                  and rack cabinets with labeled points and continuous testing.
                </p>
                <ul className="space-y-1.5 text-xs text-slate-400 pt-2">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Rack cable dressing & patch cords management</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-cyan-400" />
                    <span>
                      Wall trunking and floor conduits for neat aesthetics
                    </span>
                  </li>
                </ul>
              </div>

              <div
                id="access"
                className="p-8 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-4"
              >
                <div className="p-3 w-fit rounded-xl bg-blue-500/10 text-blue-400">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white font-['Space_Grotesk']">
                  Access Control & Video Intercom
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Upgrade your premises with keyless biometric door entry, smart
                  video doorbells, employee time-and-attendance logs, and
                  automated gate locks.
                </p>
                <ul className="space-y-1.5 text-xs text-slate-400 pt-2">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Fingerprint, RFID card, and facial recognition</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-cyan-400" />
                    <span>
                      Video gate station with smartphone call notifications
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Lead Form embed on Services page */}
        <section className="py-20 bg-slate-900/50 border-t border-slate-800">
          <div className="container mx-auto max-w-4xl">
            <LeadForm initialService={activeService} />
          </div>
        </section>
      </main>

      <Footer />
      <FloatingContactBar onOpenQuote={() => openQuote("Both")} />
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        initialService={activeService}
      />
    </div>
  );
}
