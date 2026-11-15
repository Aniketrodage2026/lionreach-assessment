import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, Award, DollarSign, Clock, ArrowRight, Building2 } from 'lucide-react';
import { MetricCard } from '../common/MetricCard';
import { ScrollReveal } from '../common/ScrollReveal';

export const ProofBlock = () => {
  return (
    <section id="proof" className="py-20 bg-[#020b14] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 text-[#C8FF00] text-xs font-semibold uppercase tracking-wider">
              <span>Verified Track Record</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Proven Results Across APAC Enterprise B2B Tech
            </h2>
            <p className="text-base text-gray-300">
              Real figures from verified client engagements. No inflated numbers or unverified claims.
            </p>
          </div>
        </ScrollReveal>

        {/* 4 Stats Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <MetricCard
            value="3.4x"
            label="Pipeline Growth"
            subtitle="Verified expansion in qualified sales pipeline within 90 days."
            icon={TrendingUp}
            highlight={true}
          />
          <MetricCard
            value="42%"
            label="SQL Conversion"
            subtitle="MQL to SQL conversion rate vs 12% industry baseline."
            icon={Award}
          />
          <MetricCard
            value="$1.2M+"
            label="Closed Revenue"
            subtitle="Net-new closed-won ARR directly attributed to campaign."
            icon={DollarSign}
          />
          <MetricCard
            value="-14 Days"
            label="Sales Cycle Reduction"
            subtitle="Shorter average sales velocity through high-intent qualification."
            icon={Clock}
          />
        </div>

        {/* Case Study Feature Spotlight Card */}
        <div className="bg-gradient-to-br from-white/10 to-white/5 border border-white/15 rounded-3xl p-8 lg:p-12 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-md bg-[#C8FF00] text-[#041221] text-xs font-extrabold uppercase">
                  Featured Case Study
                </span>
                <span className="text-xs text-gray-300 flex items-center gap-1">
                  <Building2 className="w-3.5 h-3.5" />
                  Zentrix Enterprise SaaS
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-snug">
                How Zentrix Scaled Enterprise Lead Generation Across 5 APAC Regions in 6 Months
              </h3>

              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                Facing stagnant regional expansion and poor lead quality, Zentrix partnered with LionReach Media to implement intent-based content syndication. Learn how they achieved 3.4x pipeline growth and $1.2M in net-new revenue.
              </p>

              <div className="pt-2">
                <Link
                  to="/case-study"
                  className="inline-flex items-center gap-2 text-[#C8FF00] font-bold text-base hover:underline group"
                >
                  <span>Read Full Zentrix Case Study</span>
                  <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Quick Result Highlight */}
            <div className="lg:col-span-4 bg-[#041221]/90 border border-white/10 rounded-2xl p-6 space-y-4">
              <div className="text-xs text-gray-400 font-mono uppercase">Key Highlights</div>
              <div className="border-b border-white/10 pb-3">
                <div className="text-2xl font-bold text-white">5 Countries</div>
                <div className="text-xs text-gray-300">Singapore, India, Japan, Malaysia, Australia</div>
              </div>
              <div className="border-b border-white/10 pb-3">
                <div className="text-2xl font-bold text-white">100% Work Emails</div>
                <div className="text-xs text-gray-300">Zero personal domains accepted</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[#C8FF00]">48-Hour SLAs</div>
                <div className="text-xs text-gray-300">Direct integration into Salesforce CRM</div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
