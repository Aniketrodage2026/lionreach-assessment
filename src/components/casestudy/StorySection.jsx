import React from 'react';
import { AlertCircle, Target, CheckCircle } from 'lucide-react';
import { ScrollReveal } from '../common/ScrollReveal';

export const StorySection = () => {
  return (
    <section className="py-16 bg-[#041221]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* The Challenge */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-red-500/10 text-red-400">
              <AlertCircle className="w-5 h-5" />
            </div>
            <h2 className="text-2xl font-bold text-white">The Challenge</h2>
          </div>
          <p className="text-gray-300 leading-relaxed">
            Zentrix, a cloud-native SaaS provider, was aggressively expanding into the APAC region. Their primary marketing channel was generic global content syndication. The result? A massive influx of leads from non-decision makers and personal email addresses (Gmail, Yahoo), leading to a <strong>12% MQL to SQL conversion rate</strong> and sales teams bogged down by manual lead filtering.
          </p>
        </div>

        {/* The Strategy */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-[#C8FF00]/10 text-[#C8FF00]">
              <Target className="w-5 h-5" />
            </div>
            <h2 className="text-2xl font-bold text-white">The LionReach Strategy</h2>
          </div>
          <p className="text-gray-300 leading-relaxed">
            LionReach Media replaced Zentrix's global approach with an <strong>APAC-specific Intent-Based Account-Based Marketing (ABM) strategy</strong>:
          </p>
          <ul className="space-y-4 text-gray-300">
            <li className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-[#C8FF00] shrink-0" />
              <span><strong>Account Intelligence:</strong> Identified 500+ key enterprise accounts across India, Singapore, Australia, Japan, and Malaysia based on tech stack fit.</span>
            </li>
            <li className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-[#C8FF00] shrink-0" />
              <span><strong>Localized Content Syndication:</strong> Deployed regional-specific technical whitepapers and audit tools in native business contexts.</span>
            </li>
            <li className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-[#C8FF00] shrink-0" />
              <span><strong>Double-Opt-In Qualification:</strong> Implemented a 100% work-email mandatory field and post-fill phone verification protocol to ensure executive-level lead quality.</span>
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
};
