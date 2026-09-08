import React, { useState } from "react";
import { X, MessageSquare, Phone } from "lucide-react";
import { BRAND } from "../data/namitechData";
import { LeadForm } from "./LeadForm";

export const QuoteModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  initialService?: any;
}> = ({ isOpen, onClose, initialService = "Both" }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-slate-900 border border-cyan-500/40 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/70">
          <div>
            <h3 className="text-xl font-bold text-white font-['Space_Grotesk']">
              Request a Free Quote / Site Survey
            </h3>
            <p className="text-xs text-slate-400">
              NamiTech Kenya Technical Dispatch • Prompt response within 30 mins
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto">
          <LeadForm
            compact={true}
            initialService={initialService}
            onSuccess={() => {}}
          />
        </div>
      </div>
    </div>
  );
};

export const FloatingContactBar: React.FC<{ onOpenQuote: () => void }> = ({
  onOpenQuote,
}) => {
  return (
    <div className="fixed bottom-4 right-4 z-40 flex flex-col items-end gap-2.5">
      {/* WhatsApp float button */}
      <a
        href={BRAND.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-3 rounded-full shadow-2xl shadow-emerald-900/60 border border-emerald-400/40 transition-all duration-300 hover:scale-105 active:scale-95"
      >
        <MessageSquare className="w-5 h-5 fill-current" />
        <span className="text-xs font-bold tracking-wide hidden sm:inline">
          WhatsApp Us
        </span>
      </a>

      {/* Direct Call float button */}
      <a
        href={BRAND.phoneTel}
        aria-label="Call NamiTech Kenya"
        className="group flex items-center gap-2 bg-cyan-600 hover:bg-cyan-500 text-white px-4 py-3 rounded-full shadow-2xl shadow-cyan-900/60 border border-cyan-400/40 transition-all duration-300 hover:scale-105 active:scale-95"
      >
        <Phone className="w-5 h-5" />
        <span className="text-xs font-bold tracking-wide hidden sm:inline">
          Call: {BRAND.phoneDisplay}
        </span>
      </a>
    </div>
  );
};
