import React from 'react';
import { ScrollReveal } from '../common/ScrollReveal';

export const CaseStudyGallery = () => {
  const caseStudies = [
    {
      id: 1,
      name: 'Zentrix SaaS Solutions',
      industry: 'Enterprise SaaS',
      region: '5 APAC Regions',
      headline: '3.4x Pipeline Growth in 6 Months',
      description: 'Zentrix transformed their APAC demand generation through intent-based content syndication and double-opt-in lead qualification.',
      results: ['3.4x Pipeline Growth', '42% SQL Conversion', '$1.2M+ Revenue'],
      color: 'from-[#C8FF00] to-emerald-400'
    },
    {
      id: 2,
      name: 'CloudPeak Infrastructure',
      industry: 'Cloud Infrastructure',
      region: 'Singapore & India',
      headline: '145% Increase in Qualified Leads',
      description: 'CloudPeak scaled their enterprise sales pipeline across APAC with targeted account intelligence and localized content campaigns.',
      results: ['145% Lead Increase', '60% Cost Reduction', '90-Day ROI'],
      color: 'from-blue-400 to-cyan-400'
    },
    {
      id: 3,
      name: 'Stackwise Analytics',
      industry: 'Data Analytics',
      region: 'Australia & Japan',
      headline: '2.8x Revenue Growth',
      description: 'Stackwise leveraged LionReach\'s ABM strategy to penetrate enterprise accounts and accelerate deal cycles across APAC.',
      results: ['2.8x Revenue', '-14 Day Sales Cycle', '500+ Accounts'],
      color: 'from-purple-400 to-pink-400'
    }
  ];

  return (
    <section className="py-20 bg-[#020b14] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 text-[#C8FF00] text-xs font-semibold uppercase tracking-wider">
              <span>Client Success Stories</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Proven Results Across APAC Enterprise Tech
            </h2>
            <p className="text-base text-gray-300">
              Real client engagements demonstrating measurable pipeline growth and revenue expansion across APAC markets.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, idx) => (
            <ScrollReveal key={study.id} delay={idx * 150}>
              <div className="bg-gradient-to-b from-white/10 to-white/5 border border-white/15 rounded-3xl p-8 hover:border-[#C8FF00]/40 transition-all duration-300 flex flex-col h-full group">
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${study.color} flex items-center justify-center text-[#041221] font-bold text-lg group-hover:scale-110 transition-transform`}>
                    {study.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg group-hover:text-[#C8FF00] transition-colors">
                      {study.name}
                    </h3>
                    <p className="text-xs text-gray-400 font-mono">{study.industry}</p>
                  </div>
                </div>

                <div className="mb-4">
                  <span className="text-xs text-gray-400 font-mono uppercase tracking-wider">Markets</span>
                  <p className="text-sm text-gray-300 mt-1">{study.region}</p>
                </div>

                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-[#C8FF00] transition-colors">
                  {study.headline}
                </h4>

                <p className="text-sm text-gray-300 leading-relaxed mb-6 flex-grow">
                  {study.description}
                </p>

                <div className="border-t border-white/10 pt-4 space-y-2">
                  {study.results.map((result, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#C8FF00]" />
                      <span className="text-gray-300">{result}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudyGallery;