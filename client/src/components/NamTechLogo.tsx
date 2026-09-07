import React from "react";
import { Link } from "wouter";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  withTagline?: boolean;
}

export const NamTechLogo: React.FC<LogoProps> = ({ size = "md", withTagline = false }) => {
  const iconSize = size === "sm" ? "w-8 h-8" : size === "lg" ? "w-12 h-12" : "w-10 h-10";
  const titleClass = size === "sm" ? "text-lg" : size === "lg" ? "text-2xl" : "text-xl";

  return (
    <Link href="/" className="group inline-flex items-center gap-3 no-underline">
      {/* Dynamic SVG Icon recreating the NamTech logo: 'N' connected nodes + camera lens */}
      <div className={`relative ${iconSize} flex-shrink-0 flex items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 via-blue-600/30 to-slate-900 border border-cyan-400/40 p-1.5 shadow-[0_0_15px_rgba(6,182,212,0.3)] group-hover:border-cyan-300 transition-all duration-300`}>
        <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-current" xmlns="http://www.w3.org/2000/svg">
          {/* Cyber Nodes & Stylized N */}
          <path
            d="M 22 78 L 22 28 Q 22 22 28 22 L 32 22 L 68 76 L 72 76 Q 78 76 78 70 L 78 40"
            stroke="url(#namtech-cyan-grad)"
            strokeWidth="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* CCTV Camera Head at top of N */}
          <circle cx="78" cy="28" r="14" fill="#0284c7" stroke="#38bdf8" strokeWidth="5" />
          <circle cx="78" cy="28" r="6" fill="#38bdf8" />
          <circle cx="80" cy="26" r="2.5" fill="#ffffff" />
          {/* Left bottom node */}
          <circle cx="22" cy="78" r="7" fill="#0284c7" stroke="#38bdf8" strokeWidth="4" />
          {/* Center node link */}
          <circle cx="48" cy="48" r="5" fill="#38bdf8" />

          <defs>
            <linearGradient id="namtech-cyan-grad" x1="0" y1="100" x2="100" y2="0" gradientUnits="userSpaceOnUse">
              <stop stopColor="#0284c7" />
              <stop offset="0.5" stopColor="#06b6d4" />
              <stop offset="1" stopColor="#38bdf8" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="flex flex-col">
        <div className="flex items-baseline leading-none">
          <span className={`${titleClass} font-extrabold tracking-tight text-white font-['Space_Grotesk']`}>
            Nam<span className="text-cyan-400">Tech</span>
          </span>
          <span className="ml-1.5 text-xs font-bold uppercase tracking-widest px-1.5 py-0.5 rounded bg-cyan-950/80 border border-cyan-800 text-cyan-300">
            Kenya
          </span>
        </div>
        {withTagline && (
          <span className="text-[10px] uppercase tracking-wider text-slate-400 font-medium mt-1">
            Connecting & Securing Kenya
          </span>
        )}
      </div>
    </Link>
  );
};
