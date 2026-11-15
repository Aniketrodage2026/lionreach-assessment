import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Globe, ShieldCheck, ArrowLeft } from 'lucide-react';
import { ScrollReveal } from '../common/ScrollReveal';

export const CaseHero = () => {
  return (
    <section className="pt-12 pb-16 bg-gradient-to-b from-[#041221] to-[#020b14] border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Back Button */}
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#C8FF00] hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to B2B Demand Gen Audit</span>
          </Link>
        </div>

        {/* Hero Content */}
        <ScrollReveal>
          <div className="max-w-4xl space-y-6">

            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3.5 py-1 rounded-full bg-[#C8FF00]/10 border border-[#C8FF00]/30 text-[#C8FF00] text-xs font-bold uppercase tracking-wide">
                Verified Case Study
              </span>
              <span className="text-xs text-gray-300 flex items-center gap-1 font-mono">
                <Building2 className="w-3.5 h-3.5" />
                Client: Zentrix SaaS Solutions
              </span>
              <span className="text-xs text-gray-300 flex items-center gap-1 font-mono">
                <Globe className="w-3.5 h-3.5" />
                Markets: 5 APAC Regions
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              How Zentrix Generated <span className="text-[#C8FF00]">$1.2M+ Net-New ARR</span> in 6 Months with Account-Based Demand Gen
            </h1>

            <p className="text-lg text-gray-300 leading-relaxed">
              Discover how an enterprise software provider overcame fragmented regional audiences, low sales qualification rates, and long deal cycles across APAC through double-opt-in intent targeting.
            </p>

          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
