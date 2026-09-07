import React from "react";
import { Link } from "wouter";
import { Phone, Mail, MapPin, MessageSquare, ShieldCheck, Wifi, ArrowUpRight } from "lucide-react";
import { NamTechLogo } from "./NamTechLogo";
import { BRAND, KENYA_LOCATIONS } from "../data/namtechData";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 text-slate-400 pt-16 pb-12 relative overflow-hidden">
      {/* Glow background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-32 bg-cyan-500/5 blur-3xl pointer-events-none" />

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <NamTechLogo withTagline={true} size="lg" />
            <p className="text-sm text-slate-300 leading-relaxed pr-4 mt-2">
              NamTech delivers high-speed networking, reliable home/office internet setups, structured cabling, and 24/7 security camera solutions across Kenya. Connecting and securing homes, estates, and enterprise facilities.
            </p>

            <div className="pt-2 flex flex-wrap gap-2 text-xs">
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-cyan-300 font-medium">
                #1 WiFi Installers Kenya
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-cyan-300 font-medium">
                Certified CCTV Experts
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-cyan-300 font-medium">
                Fiber & Structured Cabling
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wider uppercase font-['Space_Grotesk']">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-cyan-400 transition-colors inline-flex items-center gap-1">
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-cyan-400 transition-colors inline-flex items-center gap-1">
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-cyan-400 transition-colors inline-flex items-center gap-1">
                  <span>Services</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-cyan-400 transition-colors inline-flex items-center gap-1">
                  <span>Contact & Free Quote</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Core Services */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wider uppercase font-['Space_Grotesk']">
              Core Services
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services#internet" className="hover:text-cyan-400 transition-colors">
                  High-Speed Internet Setup Kenya
                </Link>
              </li>
              <li>
                <Link href="/services#cctv" className="hover:text-cyan-400 transition-colors">
                  HD / IP CCTV Installation Kenya
                </Link>
              </li>
              <li>
                <Link href="/services#wifi" className="hover:text-cyan-400 transition-colors">
                  Home WiFi & Dead-Zone Elimination
                </Link>
              </li>
              <li>
                <Link href="/services#cabling" className="hover:text-cyan-400 transition-colors">
                  Structured Cabling & Server Racks
                </Link>
              </li>
              <li>
                <Link href="/services#access" className="hover:text-cyan-400 transition-colors">
                  Biometric Access Control & Intercom
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wider uppercase font-['Space_Grotesk']">
              Direct Contact
            </h4>
            <div className="space-y-2.5 text-sm">
              <a
                href={BRAND.phoneTel}
                className="flex items-center gap-2.5 text-slate-300 hover:text-cyan-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>{BRAND.phoneDisplay}</span>
              </a>

              <a
                href={BRAND.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-slate-300 hover:text-emerald-400 transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>WhatsApp: {BRAND.phoneDisplay}</span>
              </a>

              <a
                href={`mailto:${BRAND.email}`}
                className="flex items-center gap-2.5 text-slate-300 hover:text-cyan-400 transition-colors break-all"
              >
                <Mail className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>{BRAND.email}</span>
              </a>

              <div className="flex items-start gap-2.5 text-slate-300">
                <MapPin className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span>Nairobi, Mombasa, Kisumu & Countrywide Kenya</span>
              </div>
            </div>
          </div>
        </div>

        {/* Coverage regions list for Kenyan SEO boost */}
        <div className="py-6 border-b border-slate-800/80 text-xs text-slate-400">
          <p className="font-semibold text-slate-300 mb-2">
            Coverage Areas across Kenya:
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-1.5">
            {KENYA_LOCATIONS.map((loc, i) => (
              <span key={i} className="inline-flex items-center gap-1 hover:text-slate-200">
                <span className="w-1 h-1 rounded-full bg-cyan-400"></span>
                {loc}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom copyright & SEO footer */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <p>© {new Date().getFullYear()} NamTech Kenya. All Rights Reserved. Connecting & Securing the Nation.</p>
          <div className="flex items-center gap-4">
            <span className="text-slate-400">Fast Internet • CCTV Installation • Structured Cabling</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
