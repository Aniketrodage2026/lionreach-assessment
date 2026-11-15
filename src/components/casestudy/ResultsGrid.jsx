import React from 'react';
import { MetricCard } from '../common/MetricCard';
import { TrendingUp, Award, DollarSign, Clock } from 'lucide-react';
import { ScrollReveal } from '../common/ScrollReveal';

export const ResultsGrid = () => {
  return (
    <section className="py-16 bg-[#020b14] border-t border-white/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="text-2xl font-bold text-white mb-10">Verified Results</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <MetricCard
              value="3.4x"
              label="Pipeline Growth"
              subtitle="Verified expansion in qualified sales pipeline."
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
              label="Closed-Won Revenue"
              subtitle="Net-new revenue attributed to the first 6 months."
              icon={DollarSign}
            />
            <MetricCard
              value="-14 Days"
              label="Sales Cycle Reduction"
              subtitle="Faster closing velocity through pre-qualified intent."
              icon={Clock}
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
