import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Target, Zap, ArrowRight, CheckCircle2 } from 'lucide-react';
import { ScrollReveal } from '../common/ScrollReveal';
import { handleAuditFormClick } from '../../utils/scroll';

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28">
      {/* Animated Background Mesh */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C8FF00]/10 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#C8FF00]/5 to-blue-500/5 rounded-full blur-3xl pointer-events-none animate-pulse" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column: Hero Text */}
          <div className="lg:col-span-7 space-y-6">
            {/* Animated Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C8FF00]/10 border border-[#C8FF00]/30 text-[#C8FF00] text-xs font-semibold uppercase tracking-wide hover:bg-[#C8FF00]/20 transition-all duration-300 transform hover:scale-105">
              <Zap className="w-3.5 h-3.5 animate-bounce" />
              <span>Free B2B Demand Gen Audit for APAC Tech Leaders</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
              Accelerate B2B Pipeline across <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C8FF00] to-emerald-400">APAC Markets</span>
            </h1>

            {/* Subhead */}
            <p className="text-lg sm:text-xl text-gray-300 font-normal leading-relaxed max-w-2xl">
              Stop burning marketing budget on low-intent form fills. LionReach connects enterprise B2B tech companies directly with verified, in-market decision makers across Singapore, India, Australia, Japan, and SEA.
            </p>

            {/* Trust Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-gray-200">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#C8FF00] shrink-0" />
                <span>Zero Risk: 100% Qualified SQL Guarantee</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#C8FF00] shrink-0" />
                <span>Localized Campaigns in 14+ APAC Nations</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#C8FF00] shrink-0" />
                <span>Full Audit Delivered in 48 Business Hours</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#C8FF00] shrink-0" />
                <span>Double Opt-In GDPR & PDPA Compliant</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="#audit-form"
                onClick={handleAuditFormClick}
                className="inline-flex items-center justify-center gap-3 bg-[#C8FF00] text-[#041221] font-bold text-base px-8 py-4 rounded-xl hover:bg-[#b0e600] transition-all transform hover:-translate-y-0.5 shadow-lg shadow-[#C8FF00]/20 focus:outline-none focus:ring-2 focus:ring-[#C8FF00] focus:ring-offset-2 focus:ring-offset-[#041221] active:scale-95"
              >
                <span>Claim Your Free Audit</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <Link
                to="/case-study"
                className="inline-flex items-center justify-center gap-2 bg-white/10 text-white font-semibold text-base px-6 py-4 rounded-xl hover:bg-white/15 hover:border-white/30 transition-all border border-white/10 active:scale-95"
              >
                <span>View Zentrix Case Study</span>
              </Link>
            </div>

          </div>

          {/* Right Column: Hero Visual Highlight / Quick Stats */}
          <div className="lg:col-span-5">
            <div className="bg-gradient-to-b from-white/10 to-white/5 border border-white/15 rounded-3xl p-6 sm:p-8 backdrop-blur-xl relative shadow-2xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                <div>
                  <h2 className="text-white font-bold text-lg">APAC Growth Snapshot</h2>
                  <p className="text-xs text-gray-300">Verified Client Results (2026)</p>
                </div>
                <div className="px-3 py-1 rounded-full bg-[#C8FF00]/20 text-[#C8FF00] text-xs font-mono font-bold">
                  LIVE DATA
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-[#041221]/80 rounded-2xl p-4 border border-white/10 hover:border-[#C8FF00]/40 hover:shadow-lg hover:shadow-[#C8FF00]/10 transition-all duration-300 transform hover:scale-105">
                  <div className="text-3xl font-extrabold text-[#C8FF00] animate-pulse">3.4x</div>
                  <div className="text-sm font-semibold text-white">Pipeline Multiplier</div>
                  <div className="text-xs text-gray-300 mt-1">Average pipeline expansion within 90 days for tech clients.</div>
                </div>

                <div className="bg-[#041221]/80 rounded-2xl p-4 border border-white/10 hover:border-[#C8FF00]/40 hover:shadow-lg hover:shadow-[#C8FF00]/10 transition-all duration-300 transform hover:scale-105">
                  <div className="text-3xl font-extrabold text-[#C8FF00] animate-pulse">42%</div>
                  <div className="text-sm font-semibold text-white">MQL to SQL Conversion</div>
                  <div className="text-xs text-gray-300 mt-1">Industry benchmark is ~12%. Intent filters eliminate junk leads.</div>
                </div>

                <div className="bg-[#041221]/80 rounded-2xl p-4 border border-white/10 hover:border-[#C8FF00]/40 hover:shadow-lg hover:shadow-[#C8FF00]/10 transition-all duration-300 transform hover:scale-105">
                  <div className="text-3xl font-extrabold text-[#C8FF00] animate-pulse">$1.2M+</div>
                  <div className="text-sm font-semibold text-white">New Closed-Won Revenue</div>
                  <div className="text-xs text-gray-300 mt-1">Generated for Zentrix in first 6 months of campaign execution.</div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 text-center">
                <p className="text-xs text-gray-300">
                  Trusted by growth leaders at CloudPeak, Stackwise, Zentrix, & Finlytic.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
