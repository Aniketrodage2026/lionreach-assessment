import React from 'react';
import { Database, Filter, Rocket, ArrowRight } from 'lucide-react';
import { ScrollReveal } from '../common/ScrollReveal';
import { handleAuditFormClick } from '../../utils/scroll';

export const HowItWorks = () => {
  const steps = [
    {
      step: "01",
      icon: Database,
      title: "1. Account & Tech Stack Intelligence",
      description: "We analyze your ideal customer profile (ICP) across APAC, mapping target accounts by headcount, active technology installs, and verified decision-maker titles."
    },
    {
      step: "02",
      icon: Filter,
      title: "2. Intent Audit & Content Placement",
      description: "We audit your existing collateral and deploy localized content syndication across LionReach's verified publisher networks to capture buyers actively researching solutions."
    },
    {
      step: "03",
      icon: Rocket,
      title: "3. Double-Opt-In Lead Qualification",
      description: "Every lead passes strict phone and email verification. Personal domains are filtered out before leads enter your CRM, ensuring 100% sales-ready SQL opportunities."
    }
  ];

  return (
    <section className="py-20 bg-[#041221]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-[#C8FF00] text-xs font-semibold uppercase tracking-wider">
            <span>The Audit Framework</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            How The LionReach B2B Audit Unlocks Pipeline
          </h2>
          <p className="text-base text-gray-300">
            A structured, 3-step audit process engineered to transform your regional demand generation strategy into a predictable revenue engine.
          </p>
        </div>

        {/* 3 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 relative hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-xl bg-[#C8FF00]/10 text-[#C8FF00] group-hover:bg-[#C8FF00] group-hover:text-[#041221] transition-all duration-300">
                    <Icon className="w-6 h-6 group-hover:rotate-12" />
                  </div>
                  <span className="text-3xl font-extrabold text-[#C8FF00]/40 font-mono group-hover:text-[#C8FF00] transition-colors">
                    {item.step}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#C8FF00] transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Audit Guarantee Banner */}
        <div className="mt-12 bg-gradient-to-r from-emerald-900/30 via-[#041221] to-[#0a2540] border border-[#C8FF00]/30 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg font-bold text-white">Ready for your custom APAC demand gen roadmap?</h4>
            <p className="text-sm text-gray-300">Get an actionable analysis of your target accounts in Singapore, India, Japan & Australia.</p>
          </div>
          <a
            href="#audit-form"
            onClick={handleAuditFormClick}
            className="shrink-0 inline-flex items-center gap-2 bg-[#C8FF00] text-[#041221] font-bold px-6 py-3 rounded-xl hover:bg-[#b0e600] transition-all"
          >
            <span>Request 48-Hour Audit</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
