import React, { useState } from 'react';
import { useUTM } from '../../context/UTMContext';
import { validateLeadForm } from '../../utils/validation';
import { CheckCircle2, AlertTriangle, Loader2, Send, ShieldCheck } from 'lucide-react';

export const LeadForm = () => {
  const utmParams = useUTM();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    country: '',
    companySize: '51-200'
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submittedPayload, setSubmittedPayload] = useState(null);

  const apacCountries = [
    { code: 'SG', name: 'Singapore' },
    { code: 'IN', name: 'India' },
    { code: 'JP', name: 'Japan' },
    { code: 'AU', name: 'Australia' },
    { code: 'MY', name: 'Malaysia' },
    { code: 'ID', name: 'Indonesia' },
    { code: 'TH', name: 'Thailand' },
    { code: 'VN', name: 'Vietnam' },
    { code: 'PH', name: 'Philippines' },
    { code: 'KR', name: 'South Korea' }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error on field change
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Run field validations
    const validation = validateLeadForm(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setIsSubmitting(true);

    // Combine form data with extracted UTM parameters
    const payload = {
      ...formData,
      ...utmParams,
      submittedAt: new Date().toISOString()
    };

    try {
      // Mock API endpoint submission (simulated 1-second network latency)
      await new Promise(resolve => setTimeout(resolve, 1000));

      setSubmittedPayload(payload);
      setIsSuccess(true);
      setIsSubmitting(false);

      // Reset form fields
      setFormData({
        fullName: '',
        email: '',
        company: '',
        country: '',
        companySize: '51-200'
      });
    } catch (err) {
      setErrors({ form: 'Failed to submit form. Please try again.' });
      setIsSubmitting(false);
    }
  };

  return (
    <section id="audit-form" className="py-20 bg-[#020b14] border-t border-white/10 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="bg-[#041221] border border-white/15 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">

          {/* Form Header */}
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C8FF00]/10 text-[#C8FF00] text-xs font-semibold uppercase hover:bg-[#C8FF00]/20 transition-all duration-300 transform hover:scale-105">
              <ShieldCheck className="w-4 h-4 animate-pulse" />
              <span>Instant Qualification</span>
            </div>
            <h2 className="text-3xl font-extrabold text-white tracking-tight hover:text-[#C8FF00] transition-colors">
              Claim Your Free B2B Demand Gen Audit
            </h2>
            <p className="text-sm text-gray-300">
              Fill out your company details below. Our regional specialists will deliver a custom APAC growth audit within 48 business hours.
            </p>
          </div>

          {/* Success State Screen */}
          {isSuccess ? (
            <div className="bg-emerald-950/40 border border-emerald-500/40 rounded-2xl p-8 text-center space-y-6">
              <div className="w-16 h-16 bg-emerald-500/20 text-[#C8FF00] rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-white">Audit Request Received!</h3>
                <p className="text-sm text-gray-300 max-w-md mx-auto">
                  Thank you, <strong className="text-white">{submittedPayload?.fullName}</strong>. We have registered your request for <strong className="text-white">{submittedPayload?.company}</strong>.
                </p>
              </div>

              {/* Data Summary Box */}
              <div className="bg-[#041221] p-4 rounded-xl border border-white/10 text-left text-xs font-mono space-y-2 text-gray-300">
                <div className="text-[#C8FF00] font-bold uppercase mb-1 font-sans">Submission Payload Summary:</div>
                <div><span className="text-gray-400">Work Email:</span> {submittedPayload?.email}</div>
                <div><span className="text-gray-400">Target Region:</span> {submittedPayload?.country}</div>
                <div><span className="text-gray-400">Company Size:</span> {submittedPayload?.companySize}</div>
                <div><span className="text-gray-400">UTM Source:</span> {submittedPayload?.utm_source}</div>
              </div>

              <button
                onClick={() => setIsSuccess(false)}
                type="button"
                className="bg-[#C8FF00] text-[#041221] font-bold px-6 py-2.5 rounded-xl text-sm hover:bg-[#b0e600]"
              >
                Submit Another Audit Request
              </button>
            </div>
          ) : (
            /* Main Form */
            <form onSubmit={handleSubmit} className="space-y-6">

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                {/* Full Name */}
                <div className="space-y-2">
                  <label htmlFor="fullName" className="block text-xs font-semibold text-gray-300 uppercase tracking-wider hover:text-[#C8FF00] transition-colors">
                    Full Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g. Mei Ling"
                    className={`w-full bg-white/5 border ${
                      errors.fullName ? 'border-red-500 animate-shake' : 'border-white/15 focus:border-[#C8FF00]'
                    } rounded-xl px-4 py-3 text-white text-sm placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#C8FF00] transition-all duration-300 hover:bg-white/10 focus:scale-105`}
                  />
                  {errors.fullName && (
                    <p className="text-xs text-red-400 flex items-center gap-1 animate-pulse">
                      <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.fullName}</span>
                    </p>
                  )}
                </div>

                {/* Work Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-xs font-semibold text-gray-300 uppercase tracking-wider hover:text-[#C8FF00] transition-colors">
                    Work Email Address <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@company.com"
                    className={`w-full bg-white/5 border ${
                      errors.email ? 'border-red-500 bg-red-950/20 animate-shake' : 'border-white/15 focus:border-[#C8FF00]'
                    } rounded-xl px-4 py-3 text-white text-sm placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#C8FF00] transition-all duration-300 hover:bg-white/10 focus:scale-105`}
                  />
                  {/* Inline Domain Validation Error */}
                  {errors.email && (
                    <p className="text-xs text-red-400 flex items-start gap-1 bg-red-950/40 p-2 rounded-lg border border-red-500/30 animate-pulse">
                      <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>

                {/* Company Name */}
                <div className="space-y-2">
                  <label htmlFor="company" className="block text-xs font-semibold text-gray-300 uppercase tracking-wider">
                    Company Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="e.g. Zentrix Technologies"
                    className={`w-full bg-white/5 border ${
                      errors.company ? 'border-red-500' : 'border-white/15 focus:border-[#C8FF00]'
                    } rounded-xl px-4 py-3 text-white text-sm placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#C8FF00] transition-colors`}
                  />
                  {errors.company && (
                    <p className="text-xs text-red-400 flex items-center gap-1">
                      <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.company}</span>
                    </p>
                  )}
                </div>

                {/* Target APAC Country */}
                <div className="space-y-2">
                  <label htmlFor="country" className="block text-xs font-semibold text-gray-300 uppercase tracking-wider">
                    Target APAC Country <span className="text-red-400">*</span>
                  </label>
                  <select
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className={`w-full bg-[#041221] border ${
                      errors.country ? 'border-red-500' : 'border-white/15 focus:border-[#C8FF00]'
                    } rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:ring-1 focus:ring-[#C8FF00] transition-colors`}
                  >
                    <option value="">Select target market...</option>
                    {apacCountries.map(c => (
                      <option key={c.code} value={c.name}>{c.name} ({c.code})</option>
                    ))}
                  </select>
                  {errors.country && (
                    <p className="text-xs text-red-400 flex items-center gap-1">
                      <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.country}</span>
                    </p>
                  )}
                </div>

              </div>

              {/* Company Size */}
              <div className="space-y-2">
                <label htmlFor="companySize" className="block text-xs font-semibold text-gray-300 uppercase tracking-wider">
                  Company Size (Employee Count)
                </label>
                <select
                  id="companySize"
                  name="companySize"
                  value={formData.companySize}
                  onChange={handleChange}
                  className="w-full bg-[#041221] border border-white/15 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:ring-1 focus:ring-[#C8FF00]"
                >
                  <option value="11-50">11 - 50 employees</option>
                  <option value="51-200">51 - 200 employees</option>
                  <option value="201-500">201 - 500 employees</option>
                  <option value="500+">500+ employees (Enterprise)</option>
                </select>
              </div>

              {/* Captured UTM Metadata Display */}
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-xs text-gray-400">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#C8FF00]" />
                  <span>Tracking Source:</span>
                </span>
                <span className="font-mono text-[#C8FF00] font-semibold">
                  utm_source={utmParams.utm_source}
                </span>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-3 bg-[#C8FF00] text-[#041221] font-extrabold text-base px-8 py-4 rounded-xl hover:bg-[#b0e600] hover:shadow-lg hover:shadow-[#C8FF00]/20 transition-all disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-[#C8FF00] active:scale-95"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span className="animate-pulse">Processing Audit Request...</span>
                  </>
                ) : (
                  <>
                    <span>Submit & Claim Audit</span>
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>

              <p className="text-center text-xs text-gray-300">
                We respect your privacy. No spam. Unsubscribe anytime.
              </p>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};
