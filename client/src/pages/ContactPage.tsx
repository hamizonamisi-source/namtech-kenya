import React, { useState } from "react";
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageSquare, 
  Clock, 
  ShieldCheck, 
  CheckCircle2, 
  Send 
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LeadForm } from "@/components/LeadForm";
import { QuoteModal, FloatingContactBar } from "@/components/QuoteModal";
import { BRAND, KENYA_LOCATIONS } from "@/data/namtechData";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100">
      <Header onOpenQuoteModal={() => setQuoteModalOpen(true)} />

      <main className="flex-grow">
        {/* Banner */}
        <section className="relative py-16 lg:py-20 bg-gradient-to-b from-slate-900 to-slate-950 border-b border-slate-800">
          <div className="container mx-auto text-center max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-semibold">
              Fast Response Across Kenya
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-['Space_Grotesk'] tracking-tight">
              Contact NamTech Kenya
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
              Ready to upgrade your internet connection or secure your property? Reach our technicians directly or request an on-site survey.
            </p>
          </div>
        </section>

        {/* Contact info grid & Main Form */}
        <section className="py-20">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Left Column: Direct channels */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-white font-['Space_Grotesk']">
                    Get In Touch Directly
                  </h2>
                  <p className="text-sm text-slate-400 mt-1">
                    Choose the fastest channel that suits you. We answer calls and WhatsApp inquiries immediately during business hours and provide 24/7 technical emergency assistance.
                  </p>
                </div>

                <div className="space-y-4">
                  {/* Phone */}
                  <a
                    href={BRAND.phoneTel}
                    className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-400 transition-all flex items-start gap-4 group"
                  >
                    <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-colors">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Phone Call</p>
                      <p className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {BRAND.phoneDisplay}
                      </p>
                      <p className="text-xs text-slate-400 mt-0.5">Direct line to Kenyan technician dispatch</p>
                    </div>
                  </a>

                  {/* WhatsApp */}
                  <a
                    href={BRAND.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-5 rounded-2xl bg-slate-900/80 border border-emerald-500/30 hover:border-emerald-400 transition-all flex items-start gap-4 group"
                  >
                    <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-emerald-400 font-semibold uppercase tracking-wider">WhatsApp Instant Chat</p>
                      <p className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                        {BRAND.phoneDisplay}
                      </p>
                      <p className="text-xs text-slate-400 mt-0.5">Send photos of your building or router for immediate advice</p>
                    </div>
                  </a>

                  {/* Email */}
                  <a
                    href={`mailto:${BRAND.email}`}
                    className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-400 transition-all flex items-start gap-4 group"
                  >
                    <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Official Email</p>
                      <p className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors break-all">
                        {BRAND.email}
                      </p>
                      <p className="text-xs text-slate-400 mt-0.5">For tenders, corporate inquiries & formal quotations</p>
                    </div>
                  </a>

                  {/* Location */}
                  <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Service Coverage</p>
                      <p className="text-base font-bold text-white">Kenya (All 47 Counties Supported)</p>
                      <p className="text-xs text-slate-400 mt-0.5">Primary hubs: Nairobi, Kiambu, Mombasa, Kisumu, Nakuru, Eldoret</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Lead Form */}
              <div className="lg:col-span-7">
                <LeadForm
                  initialService="Both"
                  onSuccess={() => {}}
                />
              </div>
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
