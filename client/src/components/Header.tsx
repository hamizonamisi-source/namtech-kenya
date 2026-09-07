import React, { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Phone, MessageSquare, Menu, X, Shield, Wifi, ArrowRight } from "lucide-react";
import { NamTechLogo } from "./NamTechLogo";
import { BRAND } from "../data/namtechData";
import { Button } from "@/components/ui/button";

export const Header: React.FC<{ onOpenQuoteModal?: () => void }> = ({ onOpenQuoteModal }) => {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact Us", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/" && location === "/") return true;
    if (href !== "/" && location.startsWith(href)) return true;
    return false;
  };

  return (
    <>
      {/* Top emergency / quick contact ticker */}
      <div className="bg-slate-900/90 border-b border-cyan-500/20 text-xs py-1.5 px-4 backdrop-blur-md">
        <div className="container mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-3 text-slate-300">
            <span className="inline-flex items-center gap-1.5 text-cyan-400 font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              24/7 Rapid Tech Dispatch Kenya
            </span>
            <span className="hidden md:inline text-slate-500">|</span>
            <span className="hidden md:inline text-slate-400">
              Nairobi, Mombasa, Kisumu & Nationwide Coverage
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs font-medium">
            <a
              href={BRAND.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Us: {BRAND.phoneDisplay}</span>
            </a>
            <span className="text-slate-600 hidden sm:inline">|</span>
            <a
              href={BRAND.phoneTel}
              className="inline-flex items-center gap-1 text-cyan-300 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call: {BRAND.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main sticky navigation */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-slate-950/95 backdrop-blur-xl border-b border-cyan-500/20 shadow-2xl shadow-cyan-950/40 py-3"
            : "bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80 py-4"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo */}
          <NamTechLogo withTagline={false} size="md" />

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                    active
                      ? "text-cyan-400 bg-cyan-950/50 border border-cyan-500/30 shadow-[0_0_12px_rgba(6,182,212,0.15)]"
                      : "text-slate-300 hover:text-white hover:bg-slate-900/60"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Quick Action Button & CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={BRAND.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 rounded-lg text-xs font-semibold border border-emerald-500/40 text-emerald-300 bg-emerald-950/40 hover:bg-emerald-900/50 transition-all flex items-center gap-1.5"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
              WhatsApp
            </a>

            <Button
              onClick={onOpenQuoteModal}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold px-5 py-2 text-sm shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 active:scale-95 transition-all"
            >
              Get Free Quote
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex items-center gap-2 md:hidden">
            <Button
              onClick={onOpenQuoteModal}
              size="sm"
              className="bg-cyan-500 text-slate-950 font-bold text-xs px-3 py-1.5 h-8"
            >
              Quote
            </Button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg border border-slate-700 bg-slate-900 text-slate-200 hover:text-white focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-950/98 border-b border-cyan-500/30 px-4 pt-3 pb-6 mt-3 space-y-3 animate-in slide-in-from-top duration-200">
            <nav className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-3 rounded-lg text-base font-medium flex items-center justify-between ${
                      active
                        ? "text-cyan-400 bg-cyan-950/60 border border-cyan-500/30"
                        : "text-slate-300 hover:bg-slate-900"
                    }`}
                  >
                    <span>{link.name}</span>
                    <ArrowRight className="w-4 h-4 opacity-50" />
                  </Link>
                );
              })}
            </nav>

            <div className="pt-3 border-t border-slate-800/80 flex flex-col gap-2">
              <a
                href={BRAND.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-lg text-center font-semibold text-sm bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                WhatsApp: {BRAND.phoneDisplay}
              </a>
              <a
                href={BRAND.phoneTel}
                className="w-full py-2.5 px-4 rounded-lg text-center font-semibold text-sm bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-cyan-400" />
                Call Us: {BRAND.phoneDisplay}
              </a>
              <Button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal && onOpenQuoteModal();
                }}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold py-3 text-sm mt-1"
              >
                Get a Free Quote Now
              </Button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
