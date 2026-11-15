import React from 'react';
import { AlertCircle, TrendingDown, Users, Target } from 'lucide-react';
import { ScrollReveal } from '../common/ScrollReveal';

export const PainPoints = () => {
  const problems = [
    {
      icon: TrendingDown,
      title: "Wasted Budget on Low-Intent Leads",
      description: "Generic digital campaigns deliver personal emails, job-seekers, and non-decision makers. Sales teams waste 60%+ of their time filtering unqualified leads.",
      impact: "High CAC & Frustrated Sales Reps"
    },
    {
      icon: Users,
      title: "Fragmented APAC Market Dynamics",
      description: "APAC isn't a single market. Targeting IT leaders in Japan requires completely different localization, compliance, and messaging than reaching buyers in Singapore or India.",
      impact: "Poor Regional Conversion Rates"
    },
    {
      icon: Target,
      title: "Unpredictable Account-Based Scale",
      description: "In-house outbound teams hit scaling ceilings quickly without localized B2B publisher networks, verified tech stack intelligence, and first-party intent data.",
      impact: "Stagnant Pipeline Expansion"
    }
  ];

  return (
    <section className="py-20 bg-[#020b14] border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-[#C8FF00] text-xs font-semibold uppercase tracking-wider">
            <AlertCircle className="w-4 h-4" />
            <span>The APAC B2B Bottleneck</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Why Standard Demand Gen Fails in the APAC Enterprise Tech Market
          </h2>
          <p className="text-base text-gray-300">
            Tech companies expanding into Asia-Pacific face unique barriers that standard Western marketing templates simply cannot solve.
          </p>
        </div>

        {/* 3 Grid Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#041221] border border-white/10 rounded-2xl p-8 hover:border-[#C8FF00]/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 flex items-center justify-center mb-6 group-hover:bg-red-500/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <Icon className="w-6 h-6 group-hover:animate-pulse" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#C8FF00] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-300 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>
                <div className="pt-4 border-t border-white/5 flex items-center gap-2 text-xs font-semibold text-red-400 group-hover:text-[#C8FF00] transition-colors">
                  <span className="w-2 h-2 rounded-full bg-red-400 inline-block group-hover:bg-[#C8FF00]" />
                  <span>Cost impact: {item.impact}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
