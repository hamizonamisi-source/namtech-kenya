import React, { useState } from "react";
import { Send, CheckCircle2, Phone, Mail, MapPin, Loader2, MessageSquare } from "lucide-react";
import { BRAND } from "../data/namtechData";
import { Button } from "@/components/ui/button";

interface LeadFormProps {
  initialService?: "Internet" | "CCTV" | "Both" | "";
  onSuccess?: () => void;
  compact?: boolean;
}

export const LeadForm: React.FC<LeadFormProps> = ({ initialService = "Both", onSuccess, compact = false }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: initialService || "Both",
    location: "Nairobi",
    message: ""
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert("Please provide your name and phone number so our technical team can reach you.");
      return;
    }

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      if (onSuccess) onSuccess();
    }, 700);
  };

  const handleWhatsAppRedirect = () => {
    const text = encodeURIComponent(
      `Hello NamTech Kenya,\nMy Name: ${formData.name || "Client"}\nPhone: ${formData.phone || "Not specified"}\nService Needed: ${formData.service}\nLocation in Kenya: ${formData.location}\nRequirement: ${formData.message || "I would like a free site assessment and quote."}`
    );
    window.open(`https://wa.me/254738735545?text=${text}`, "_blank");
  };

  if (submitted) {
    return (
      <div className="bg-slate-900/90 border border-emerald-500/40 rounded-2xl p-6 sm:p-8 text-center space-y-4 shadow-xl">
        <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full mx-auto flex items-center justify-center border border-emerald-400/40">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h3 className="text-2xl font-bold text-white font-['Space_Grotesk']">
          Quote Request Received!
        </h3>
        <p className="text-slate-300 text-sm max-w-md mx-auto">
          Thank you, <span className="font-semibold text-cyan-300">{formData.name}</span>. Our lead technician will review your request for{" "}
          <span className="font-semibold text-cyan-300">{formData.service}</span> in{" "}
          <span className="font-semibold text-cyan-300">{formData.location}</span> and call you at{" "}
          <span className="font-semibold text-cyan-300">{formData.phone}</span> within 30 minutes.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button
            onClick={handleWhatsAppRedirect}
            className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-5 py-2.5 rounded-lg flex items-center gap-2"
          >
            <MessageSquare className="w-4 h-4" />
            Chat Instantly on WhatsApp
          </Button>
          <Button
            variant="outline"
            onClick={() => {
              setSubmitted(false);
              setFormData({ name: "", phone: "", service: "Both", location: "Nairobi", message: "" });
            }}
            className="border-slate-700 text-slate-300 hover:text-white"
          >
            Submit Another Inquiry
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${compact ? "" : "p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-cyan-500/30 shadow-2xl backdrop-blur-xl"}`}>
      {!compact && (
        <div className="border-b border-slate-800 pb-4 mb-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-semibold mb-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
            Instant Kenya Site Assessment
          </div>
          <h3 className="text-2xl font-bold text-white font-['Space_Grotesk']">
            Ready to Upgrade Your Connection or Secure Your Property?
          </h3>
          <p className="text-sm text-slate-400 mt-1">
            Fill out this quick form or reach out directly on WhatsApp/Call for immediate dispatch.
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Name */}
        <div>
          <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
            Your Full Name *
          </label>
          <input
            type="text"
            required
            placeholder="e.g. Samuel Karanja"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full bg-slate-950/90 border border-slate-700 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 rounded-lg px-4 py-2.5 text-sm text-white placeholder-slate-500 transition-colors"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
            Kenyan Phone / WhatsApp *
          </label>
          <input
            type="tel"
            required
            placeholder="e.g. +254 7XX XXX XXX"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full bg-slate-950/90 border border-slate-700 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 rounded-lg px-4 py-2.5 text-sm text-white placeholder-slate-500 transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Service Needed */}
        <div>
          <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
            Service Needed *
          </label>
          <select
            value={formData.service}
            onChange={(e) => setFormData({ ...formData, service: e.target.value as any })}
            className="w-full bg-slate-950/90 border border-slate-700 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 rounded-lg px-4 py-2.5 text-sm text-white transition-colors"
          >
            <option value="Internet">Internet & Networking Setup (Fiber/WiFi/LAN)</option>
            <option value="CCTV">CCTV & Security Solutions (HD/IP Cameras)</option>
            <option value="Both">Both (Internet Setup + CCTV Security)</option>
            <option value="Structured Cabling">Structured Cabling & Server Rack</option>
          </select>
        </div>

        {/* Location */}
        <div>
          <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
            Location in Kenya *
          </label>
          <input
            type="text"
            placeholder="e.g. Nairobi (Kilimani / Westlands), Mombasa, Kisumu"
            value={formData.location}
            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
            className="w-full bg-slate-950/90 border border-slate-700 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 rounded-lg px-4 py-2.5 text-sm text-white placeholder-slate-500 transition-colors"
          />
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
          Project Details / Property Type (Optional)
        </label>
        <textarea
          rows={3}
          placeholder="Tell us about your home, apartment, office, or compound (e.g. 4-bedroom house WiFi setup, 8-camera CCTV system, warehouse networking)..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full bg-slate-950/90 border border-slate-700 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 rounded-lg px-4 py-2.5 text-sm text-white placeholder-slate-500 transition-colors resize-none"
        ></textarea>
      </div>

      {/* Action Buttons */}
      <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
        <Button
          type="submit"
          disabled={submitting}
          className="w-full sm:flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold py-3 text-sm rounded-lg shadow-lg shadow-cyan-500/20 active:scale-95 transition-all flex items-center justify-center gap-2"
        >
          {submitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Sending Request...</span>
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              <span>Get a Free Quote Now</span>
            </>
          )}
        </Button>

        <Button
          type="button"
          onClick={handleWhatsAppRedirect}
          className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-3 px-5 text-sm rounded-lg flex items-center justify-center gap-2 transition-all"
        >
          <MessageSquare className="w-4 h-4" />
          <span>Send via WhatsApp</span>
        </Button>
      </div>

      <p className="text-[11px] text-slate-500 text-center pt-1">
        🔒 Your contact information is kept strictly private. No spam. Rapid technical dispatch across Kenya.
      </p>
    </form>
  );
};
