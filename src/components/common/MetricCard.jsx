import React from 'react';

export const MetricCard = ({ value, label, subtitle, icon: Icon, highlight = false }) => {
  return (
    <div className={`p-6 rounded-2xl border transition-all duration-300 ${
      highlight
        ? 'bg-gradient-to-br from-[#0a2540] to-[#041221] border-[#C8FF00]/40 shadow-xl shadow-[#C8FF00]/5'
        : 'bg-white/5 border-white/10 hover:border-white/20'
    }`}>
      <div className="flex items-center justify-between mb-4">
        {Icon && (
          <div className="p-3 rounded-xl bg-[#C8FF00]/10 text-[#C8FF00]">
            <Icon className="w-6 h-6" />
          </div>
        )}
      </div>
      <div className="text-4xl sm:text-5xl font-extrabold text-[#C8FF00] tracking-tight mb-2">
        {value}
      </div>
      <div className="text-white font-semibold text-base mb-1">
        {label}
      </div>
      {subtitle && (
        <div className="text-xs text-gray-300 leading-relaxed">
          {subtitle}
        </div>
      )}
    </div>
  );
};
