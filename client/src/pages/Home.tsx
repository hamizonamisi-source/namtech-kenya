import React, { useState } from "react";
import { Link } from "wouter";
import { 
  Wifi, 
  ShieldAlert, 
  Compass, 
  Zap, 
  Clock, 
  Smartphone, 
  ArrowRight, 
  Phone, 
  MessageSquare, 
  CheckCircle2, 
  Server, 
  Eye, 
  Check, 
  Radio, 
  ShieldCheck,
  Cpu
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LeadForm } from "@/components/LeadForm";
import { QuoteModal, FloatingContactBar } from "@/components/QuoteModal";
import { QuoteCalculator } from "@/components/QuoteCalculator";
import { BRAND, SERVICES, WHY_CHOOSE_US, TESTIMONIALS, KENYA_LOCATIONS } from "@/data/namtechData";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<any>("Both");

  const openQuoteForService = (service: any) => {
    setSelectedService(service);
    setQuoteModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100">
      <Header onOpenQuoteModal={() => openQuoteForService("Both")} />

      <main className="flex-grow">
        {/* ========================================================
            1. HERO SECTION
            Exact prompt requirements:
            - Headline: Fast Internet & Advanced CCTV Installation in Kenya
            - Subheadline: NamTech delivers high-speed networking, reliable home/office internet setups, and 24/7 security camera solutions.
            - CTAs: [ Get a Free Quote ] (Links to Contact section) & [ Call Us: +254 738 735 545 ]
            - Attached Image Integration
           ======================================================== */}
        <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28">
          {/* Background Ambient Glow */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[400px] bg-gradient-to-tr from-cyan-500/15 via-blue-600/10 to-indigo-600/10 blur-[130px] pointer-events-none rounded-full" />

          <div className="container mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Column: Copy & Actions */}
              <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
                {/* Kenya Tech Badge */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs sm:text-sm font-semibold shadow-[0_0_20px_rgba(6,182,212,0.15)]">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                  Kenya's Leading Internet & CCTV Specialist
                </div>

                {/* Main Headline */}
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-['Space_Grotesk'] leading-[1.1]">
                  Fast Internet & Advanced{" "}
                  <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 bg-clip-text text-transparent">
                    CCTV Installation
                  </span>{" "}
                  in Kenya
                </h1>

                {/* Subheadline */}
                <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                  NamTech delivers high-speed networking, reliable home/office internet setups, and 24/7 security camera solutions.
                </p>

                {/* Call to Action Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <a href="#contact" className="w-full sm:w-auto">
                    <Button
                      size="lg"
                      className="w-full sm:w-auto bg-gradient-to-r from-cyan-500 via-sky-400 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-extrabold px-8 py-6 text-base rounded-xl shadow-xl shadow-cyan-500/25 active:scale-95 transition-all flex items-center justify-center gap-2.5"
                    >
                      <span>Get a Free Quote</span>
                      <ArrowRight className="w-5 h-5 stroke-[2.5]" />
                    </Button>
                  </a>

                  <a href={BRAND.phoneTel} className="w-full sm:w-auto">
                    <Button
                      size="lg"
                      variant="outline"
                      className="w-full sm:w-auto border-cyan-500/40 bg-slate-900/60 hover:bg-slate-800 text-cyan-300 hover:text-white px-7 py-6 text-base rounded-xl active:scale-95 transition-all flex items-center justify-center gap-2.5"
                    >
                      <Phone className="w-5 h-5 text-cyan-400" />
                      <span>Call Us: +254 738 735 545</span>
                    </Button>
                  </a>
                </div>

                {/* Quick Trust Highlights */}
                <div className="pt-4 grid grid-cols-3 gap-3 border-t border-slate-800/80 max-w-lg mx-auto lg:mx-0 text-left">
                  <div className="space-y-0.5">
                    <p className="text-lg sm:text-xl font-bold text-white font-['Space_Grotesk']">24-48h</p>
                    <p className="text-xs text-slate-400">Fast Kenya Setup</p>
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-lg sm:text-xl font-bold text-white font-['Space_Grotesk']">100% HD</p>
                    <p className="text-xs text-slate-400">IP Remote View</p>
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-lg sm:text-xl font-bold text-white font-['Space_Grotesk']">24/7</p>
                    <p className="text-xs text-slate-400">Local Tech Support</p>
                  </div>
                </div>
              </div>

              {/* Right Column: Hero Visual Showcase (Attached User Image) */}
              <div className="lg:col-span-5 relative">
                <div className="relative rounded-3xl overflow-hidden border border-cyan-500/40 shadow-2xl shadow-cyan-950/60 group">
                  {/* Glowing frame */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 via-transparent to-blue-500/20 pointer-events-none z-10" />
                  
                  <img
                    src={BRAND.images.hero}
                    alt="NamTech Kenya - Internet Setup, Fiber Optic, and CCTV Installation"
                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                    loading="eager"
                  />

                  {/* Glass overlay badge on bottom */}
                  <div className="absolute bottom-3 left-3 right-3 p-3.5 rounded-2xl bg-slate-950/85 backdrop-blur-md border border-cyan-500/30 z-20 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center text-cyan-400">
                        <Radio className="w-5 h-5 animate-pulse" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-white">Live Monitoring & Fiber Active</p>
                        <p className="text-[11px] text-cyan-300">Nairobi • Mombasa • Kisumu • Rift</p>
                      </div>
                    </div>
                    <a
                      href={BRAND.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-colors"
                    >
                      Inquire
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            2. CORE SERVICES SECTION
            Prompt Copy:
            - Internet & Networking Setup: High-speed internet deployment, fiber configuration, router setup, structured LAN/WAN cabling, and WiFi dead-zone elimination for homes and offices across Kenya.
            - CCTV & Security Solutions: Professional HD/IP CCTV camera installation, remote mobile view setup, maintenance, and smart security monitoring for residential and commercial properties.
           ======================================================== */}
        <section id="services" className="py-20 bg-slate-900/40 border-y border-slate-800/80 relative">
          <div className="container mx-auto">
            {/* Section Heading */}
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-semibold">
                Core Offerings
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-['Space_Grotesk'] tracking-tight">
                Specialized Internet & Security Services in Kenya
              </h2>
              <p className="text-base sm:text-lg text-slate-300">
                Engineered for speed, durability, and absolute security across residential, commercial, and enterprise spaces.
              </p>
            </div>

            {/* Core Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Service 1: Internet & Networking Setup */}
              <div className="rounded-3xl bg-slate-900/80 border border-cyan-500/30 p-8 flex flex-col justify-between hover:border-cyan-400/60 hover:shadow-2xl hover:shadow-cyan-950/40 transition-all duration-300 group">
                <div className="space-y-6">
                  {/* Service Graphic Preview */}
                  <div className="h-52 rounded-2xl overflow-hidden relative border border-slate-800">
                    <img
                      src={BRAND.images.rack}
                      alt="Internet installation services Kenya, structured cabling, rack setup"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-cyan-500/20 backdrop-blur-md border border-cyan-400/40 text-cyan-300 text-xs font-bold flex items-center gap-1.5">
                      <Wifi className="w-3.5 h-3.5" />
                      High-Speed Deployment
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-white font-['Space_Grotesk'] group-hover:text-cyan-300 transition-colors">
                      Internet & Networking Setup
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed mt-3">
                      High-speed internet deployment, fiber configuration, router setup, structured LAN/WAN cabling, and WiFi dead-zone elimination for homes and offices across Kenya.
                    </p>
                  </div>

                  {/* Bullet features */}
                  <ul className="space-y-2 text-sm text-slate-300 pt-2 border-t border-slate-800/80">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      <span>Fiber optic configuration & ISP optimization</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      <span>Whole-home & office Mesh WiFi setup (Zero dead zones)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      <span>Cat6 structured cabling & patch panel neat dressing</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      <span>Bandwidth management & high-density guest WiFi portals</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-8 flex items-center gap-4">
                  <Button
                    onClick={() => openQuoteForService("Internet")}
                    className="flex-1 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold py-2.5 text-sm rounded-xl shadow-lg shadow-cyan-500/20 active:scale-95 transition-all"
                  >
                    Request Internet Quote
                  </Button>
                  <Link href="/services#internet" className="px-4 py-2.5 rounded-xl border border-slate-700 hover:border-slate-500 text-slate-300 text-sm font-semibold flex items-center gap-1.5 transition-colors">
                    <span>Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Service 2: CCTV & Security Solutions */}
              <div className="rounded-3xl bg-slate-900/80 border border-cyan-500/30 p-8 flex flex-col justify-between hover:border-cyan-400/60 hover:shadow-2xl hover:shadow-cyan-950/40 transition-all duration-300 group">
                <div className="space-y-6">
                  {/* Service Graphic Preview */}
                  <div className="h-52 rounded-2xl overflow-hidden relative border border-slate-800">
                    <img
                      src={BRAND.images.cctv}
                      alt="CCTV installation Kenya, HD IP security cameras, remote mobile view"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-blue-500/20 backdrop-blur-md border border-blue-400/40 text-blue-300 text-xs font-bold flex items-center gap-1.5">
                      <ShieldAlert className="w-3.5 h-3.5" />
                      24/7 Smart Surveillance
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-white font-['Space_Grotesk'] group-hover:text-cyan-300 transition-colors">
                      CCTV & Security Solutions
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed mt-3">
                      Professional HD/IP CCTV camera installation, remote mobile view setup, maintenance, and smart security monitoring for residential and commercial properties.
                    </p>
                  </div>

                  {/* Bullet features */}
                  <ul className="space-y-2 text-sm text-slate-300 pt-2 border-t border-slate-800/80">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      <span>HD & 4K Ultra-clear cameras with color night-vision</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      <span>Instant live viewing on iOS, Android smartphone & laptop</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      <span>Motion detection, perimeter alerts & intruder notifications</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      <span>NVR/DVR recording, backup power & preventive maintenance</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-8 flex items-center gap-4">
                  <Button
                    onClick={() => openQuoteForService("CCTV")}
                    className="flex-1 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold py-2.5 text-sm rounded-xl shadow-lg shadow-cyan-500/20 active:scale-95 transition-all"
                  >
                    Request CCTV Quote
                  </Button>
                  <Link href="/services#cctv" className="px-4 py-2.5 rounded-xl border border-slate-700 hover:border-slate-500 text-slate-300 text-sm font-semibold flex items-center gap-1.5 transition-colors">
                    <span>Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Additional Secondary Services Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
              <div className="p-6 rounded-2xl bg-slate-950/60 border border-slate-800 flex items-start gap-4">
                <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <Server className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white font-['Space_Grotesk']">Structured Cabling Kenya</h4>
                  <p className="text-xs text-slate-400 mt-1">Organized Cat6/Cat6A patch cabling, server racks, and network trunking.</p>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-slate-950/60 border border-slate-800 flex items-start gap-4">
                <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white font-['Space_Grotesk']">Biometric Access & Intercom</h4>
                  <p className="text-xs text-slate-400 mt-1">Smart door access controllers, RFID cards, and video gate entry phones.</p>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-slate-950/60 border border-slate-800 flex items-start gap-4 sm:col-span-2 lg:col-span-1">
                <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <Cpu className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white font-['Space_Grotesk']">WiFi Dead-Zone Elimination</h4>
                  <p className="text-xs text-slate-400 mt-1">Seamless roaming mesh setups for multi-story villas, offices & compounds.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            INTERACTIVE QUOTE ESTIMATOR SECTION (High Conversion)
           ======================================================== */}
        <section className="py-20 bg-slate-950 relative overflow-hidden">
          <div className="container mx-auto">
            <QuoteCalculator
              onSelectPackage={(pkg) => {
                setSelectedService(pkg);
                setQuoteModalOpen(true);
              }}
            />
          </div>
        </section>

        {/* ========================================================
            3. WHY CHOOSE NAMTECH?
            Prompt Copy:
            - Local Expertise: Tailored networking and surveillance solutions built for Kenyan businesses and homes.
            - Fast Installation: Rapid deployment with neat, structured cabling and minimal downtime.
            - 24/7 Support & Maintenance: Dedicated technical assistance whenever you need it.
           ======================================================== */}
        <section className="py-20 bg-slate-900/60 border-t border-slate-800/80 relative">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Column: Visual Coverage Map */}
              <div className="lg:col-span-5 relative">
                <div className="rounded-3xl overflow-hidden border border-cyan-500/30 shadow-2xl relative">
                  <img
                    src={BRAND.images.map}
                    alt="Kenya fiber optic and internet coverage network map"
                    className="w-full h-auto object-cover"
                  />
                  <div className="p-5 bg-slate-950/90 border-t border-cyan-500/20">
                    <p className="text-xs uppercase tracking-wider text-cyan-400 font-bold mb-1">
                      Nationwide Deployment
                    </p>
                    <p className="text-sm font-semibold text-white">
                      Connecting & Securing Nairobi, Mombasa, Kisumu, Nakuru & Beyond
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Why Choose NamTech Pillars */}
              <div className="lg:col-span-7 space-y-8">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-semibold mb-3">
                    Why NamTech
                  </div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-['Space_Grotesk'] tracking-tight">
                    Why Choose NamTech Kenya?
                  </h2>
                  <p className="text-slate-300 text-base mt-2">
                    We combine Kenyan local field experience with enterprise-grade networking equipment to ensure you stay constantly connected and protected.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Pillar 1: Local Expertise */}
                  <div className="p-6 rounded-2xl bg-slate-950/70 border border-slate-800 hover:border-cyan-500/40 transition-colors space-y-3">
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center">
                      <Compass className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-white font-['Space_Grotesk']">
                      Local Expertise
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      Tailored networking and surveillance solutions built for Kenyan businesses and homes.
                    </p>
                  </div>

                  {/* Pillar 2: Fast Installation */}
                  <div className="p-6 rounded-2xl bg-slate-950/70 border border-slate-800 hover:border-cyan-500/40 transition-colors space-y-3">
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center">
                      <Zap className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-white font-['Space_Grotesk']">
                      Fast Installation
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      Rapid deployment with neat, structured cabling and minimal downtime.
                    </p>
                  </div>

                  {/* Pillar 3: 24/7 Support & Maintenance */}
                  <div className="p-6 rounded-2xl bg-slate-950/70 border border-slate-800 hover:border-cyan-500/40 transition-colors space-y-3">
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center">
                      <Clock className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-white font-['Space_Grotesk']">
                      24/7 Support & Maintenance
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      Dedicated technical assistance whenever you need it.
                    </p>
                  </div>

                  {/* Pillar 4: Crystal-Clear Remote View */}
                  <div className="p-6 rounded-2xl bg-slate-950/70 border border-slate-800 hover:border-cyan-500/40 transition-colors space-y-3">
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center">
                      <Smartphone className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-white font-['Space_Grotesk']">
                      Mobile Remote View
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      Stream your security feeds live to your phone anywhere in the world.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            CLIENT REVIEWS / TESTIMONIALS (Kenyan Trust Factor)
           ======================================================== */}
        <section className="py-20 bg-slate-950 relative">
          <div className="container mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
              <span className="text-xs uppercase tracking-widest text-cyan-400 font-bold">
                Trusted Across Kenyan Communities
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-['Space_Grotesk']">
                What Kenyan Clients Say About NamTech
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {TESTIMONIALS.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between space-y-4 hover:border-cyan-500/30 transition-all"
                >
                  <p className="text-sm text-slate-300 italic leading-relaxed">
                    "{item.review}"
                  </p>
                  <div className="pt-4 border-t border-slate-800">
                    <p className="font-bold text-white text-sm">{item.name}</p>
                    <p className="text-xs text-cyan-400">{item.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================
            4. CONTACT & LEAD FORM SECTION
            Prompt Copy:
            - Headline: Ready to Upgrade Your Connection or Secure Your Property?
            - Phone / WhatsApp: +254 738 735 545
            - Email: hamizonamisi@gmail.com
            - Location: Kenya
            - Form Fields: Name | Phone Number | Service Needed (Internet / CCTV / Both) | Message
           ======================================================== */}
        <section id="contact" className="py-20 bg-gradient-to-b from-slate-900/80 to-slate-950 border-t border-slate-800 relative">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Left Column: Direct Contacts */}
              <div className="lg:col-span-5 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-semibold">
                  Get in Touch Today
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-['Space_Grotesk'] tracking-tight">
                  Ready to Upgrade Your Connection or Secure Your Property?
                </h2>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Speak directly with a certified technician. We provide free site inspections and quotations across Nairobi, Mombasa, Kisumu, Nakuru, and countrywide.
                </p>

                {/* Direct info cards */}
                <div className="space-y-4 pt-2">
                  <a
                    href={BRAND.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-xl bg-slate-900/90 border border-emerald-500/30 hover:border-emerald-400 flex items-center gap-4 transition-all group"
                  >
                    <div className="p-3 rounded-lg bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-colors">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-semibold">Phone / WhatsApp</p>
                      <p className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
                        {BRAND.phoneDisplay}
                      </p>
                    </div>
                  </a>

                  <a
                    href={`mailto:${BRAND.email}`}
                    className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/40 flex items-center gap-4 transition-all group"
                  >
                    <div className="p-3 rounded-lg bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-colors">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-semibold">Email Address</p>
                      <p className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors break-all">
                        {BRAND.email}
                      </p>
                    </div>
                  </a>

                  <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-blue-500/10 text-blue-400">
                      <Compass className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-semibold">Primary Location</p>
                      <p className="text-base font-bold text-white">Kenya (Nationwide Coverage)</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Lead Form */}
              <div className="lg:col-span-7">
                <LeadForm
                  initialService={selectedService}
                  onSuccess={() => {}}
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingContactBar onOpenQuote={() => openQuoteForService("Both")} />
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        initialService={selectedService}
      />
    </div>
  );
}
