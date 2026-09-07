import React, { useState } from "react";
import { Calculator, ArrowRight, Check, Shield, Wifi, Server } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BRAND } from "../data/namitechData";

export const QuoteCalculator: React.FC<{ onSelectPackage: (pkgDesc: string) => void }> = ({ onSelectPackage }) => {
  const [propertyType, setPropertyType] = useState<"residential" | "commercial" | "compound">("residential");
  const [needsInternet, setNeedsInternet] = useState(true);
  const [needsCctv, setNeedsCctv] = useState(true);
  const [cctvCameras, setCctvCameras] = useState(4);
  const [wifiPoints, setWifiPoints] = useState(2);

  // Dynamic estimate calculation in KES (Kenyan Shillings)
  const calculateEstimate = () => {
    let base = 0;
    if (needsInternet) {
      base += propertyType === "residential" ? 7500 : propertyType === "commercial" ? 18000 : 25000;
      base += (wifiPoints - 1) * 4500; // Extra mesh node / AP
    }
    if (needsCctv) {
      const perCamRate = propertyType === "commercial" ? 6500 : 5000;
      base += cctvCameras * perCamRate;
      base += 12000; // NVR/DVR 1TB/2TB hard disk setup & accessories
    }
    return base;
  };

  const estimatedKES = calculateEstimate();

  const handleBook = () => {
    const summary = `${propertyType.toUpperCase()} package: ${needsInternet ? `WiFi/LAN (${wifiPoints} APs)` : "No WiFi"} + ${needsCctv ? `CCTV (${cctvCameras} Cameras)` : "No CCTV"} - Est. KES ${estimatedKES.toLocaleString()}`;
    onSelectPackage(summary);
  };

  return (
    <div className="bg-slate-900/90 border border-cyan-500/30 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl relative overflow-hidden">
      <div className="flex items-center gap-3 mb-6 border-b border-slate-800 pb-4">
        <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
          <Calculator className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-white font-['Space_Grotesk']">
            Instant Kenyan Installation Cost Estimator
          </h3>
          <p className="text-xs sm:text-sm text-slate-400">
            Customize your property requirements for immediate budget transparency (KES).
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left: Inputs */}
        <div className="lg:col-span-2 space-y-5">
          {/* Property Type */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
              1. Property Category
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: "residential", label: "Home / Apartment" },
                { id: "commercial", label: "Business / Office" },
                { id: "compound", label: "Estate / Warehouse" },
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setPropertyType(item.id as any)}
                  className={`py-2.5 px-3 rounded-xl text-xs sm:text-sm font-semibold transition-all border ${
                    propertyType === item.id
                      ? "bg-cyan-500/20 border-cyan-400 text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.2)]"
                      : "bg-slate-950/60 border-slate-800 text-slate-400 hover:border-slate-700"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Service selection checkboxes */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
              2. Select Services Needed
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <label
                onClick={() => setNeedsInternet(!needsInternet)}
                className={`p-3.5 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                  needsInternet
                    ? "bg-cyan-950/40 border-cyan-400/50 text-white"
                    : "bg-slate-950/40 border-slate-800 text-slate-400"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Wifi className={`w-5 h-5 ${needsInternet ? "text-cyan-400" : "text-slate-500"}`} />
                  <span className="text-sm font-semibold">Internet & WiFi Setup</span>
                </div>
                <div className={`w-5 h-5 rounded-md flex items-center justify-center border ${needsInternet ? "bg-cyan-500 border-cyan-400 text-slate-950" : "border-slate-700"}`}>
                  {needsInternet && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                </div>
              </label>

              <label
                onClick={() => setNeedsCctv(!needsCctv)}
                className={`p-3.5 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                  needsCctv
                    ? "bg-cyan-950/40 border-cyan-400/50 text-white"
                    : "bg-slate-950/40 border-slate-800 text-slate-400"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Shield className={`w-5 h-5 ${needsCctv ? "text-cyan-400" : "text-slate-500"}`} />
                  <span className="text-sm font-semibold">CCTV & Surveillance</span>
                </div>
                <div className={`w-5 h-5 rounded-md flex items-center justify-center border ${needsCctv ? "bg-cyan-500 border-cyan-400 text-slate-950" : "border-slate-700"}`}>
                  {needsCctv && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                </div>
              </label>
            </div>
          </div>

          {/* Quantity sliders */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
            {needsCctv && (
              <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-semibold text-slate-300">CCTV Cameras:</span>
                  <span className="text-cyan-400 font-bold text-base">{cctvCameras} Cameras</span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="16"
                  step="2"
                  value={cctvCameras}
                  onChange={(e) => setCctvCameras(Number(e.target.value))}
                  className="w-full accent-cyan-400 bg-slate-800 rounded-lg cursor-pointer"
                />
                <span className="text-[11px] text-slate-500 mt-1 block">HD / IP with Night Vision + Mobile App</span>
              </div>
            )}

            {needsInternet && (
              <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-semibold text-slate-300">WiFi Access Points:</span>
                  <span className="text-cyan-400 font-bold text-base">{wifiPoints} APs / Mesh</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="8"
                  value={wifiPoints}
                  onChange={(e) => setWifiPoints(Number(e.target.value))}
                  className="w-full accent-cyan-400 bg-slate-800 rounded-lg cursor-pointer"
                />
                <span className="text-[11px] text-slate-500 mt-1 block">Full coverage, zero dead-zones</span>
              </div>
            )}
          </div>
        </div>

        {/* Right: Output card */}
        <div className="bg-slate-950/90 border border-cyan-500/40 rounded-2xl p-6 flex flex-col justify-between relative shadow-xl">
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-widest text-cyan-400 font-bold">
              Estimated Project Budget
            </span>
            <div className="flex items-baseline gap-2">
              <span className="text-xs text-slate-400 font-medium">KES</span>
              <span className="text-3xl sm:text-4xl font-extrabold text-white font-['Space_Grotesk']">
                {estimatedKES > 0 ? estimatedKES.toLocaleString() : "Contact Us"}
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Includes certified hardware, Cat6 cabling, professional mounting, NVR/router setup, and mobile view testing.
            </p>

            <ul className="text-xs space-y-1.5 text-slate-300 pt-2 border-t border-slate-800/80">
              <li className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span>Free on-site assessment across Kenya</span>
              </li>
              <li className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span>1-Year Hardware Warranty</span>
              </li>
              <li className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span>Neat, structured cabling (zero ugly wires)</span>
              </li>
            </ul>
          </div>

          <div className="pt-6">
            <Button
              onClick={handleBook}
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold py-3 text-sm rounded-xl shadow-lg shadow-cyan-500/20 active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              <span>Lock In This Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
