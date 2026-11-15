import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FAQAccordion = () => {
  const faqRef = useRef(null);
  const [scrollOffset, setScrollOffset] = useState(0);

  // Calculate scroll offset for fixed header
  useEffect(() => {
    const calculateOffset = () => {
      const header = document.querySelector('header');
      if (header) {
        setScrollOffset(header.offsetHeight);
      }
    };

    calculateOffset();
    window.addEventListener('resize', calculateOffset);
    return () => window.removeEventListener('resize', calculateOffset);
  }, []);
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What is included in the free B2B Demand Gen Audit?",
      answer: "Our audit delivers a comprehensive analysis of your target account universe across APAC, an audit of your current lead qualification bottlenecks, tech stack alignment analysis, and a custom 90-day pipeline expansion strategy tailored to your ICP."
    },
    {
      question: "How do you filter out unqualified or personal leads?",
      answer: "Every lead submitted through our syndication network undergoes dual verification: domain checking against our proprietary business database (rejecting Gmail, Yahoo, Outlook, etc.) and manual/automated phone confirmation of corporate title and company size."
    },
    {
      question: "Which APAC markets do you cover?",
      answer: "We run active B2B campaigns across 14+ APAC markets including Singapore, India, Australia, Japan, Malaysia, Indonesia, Vietnam, Thailand, the Philippines, and South Korea, with native language capabilities for localized markets."
    },
    {
      question: "How long does it take to receive the complete audit?",
      answer: "Once you submit your company details and target APAC markets through the form above, our regional strategy team will process your data and deliver your custom audit within 48 business hours."
    },
    {
      question: "Are your lead generation methods compliant with regional privacy laws?",
      answer: "Yes, 100%. All LionReach campaigns operate under strict double-opt-in protocols compliant with EU GDPR, Singapore PDPA, Australian Privacy Act, and regional data protection regulations across APAC."
    }
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" ref={faqRef} className="py-20 bg-[#041221]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Hidden anchor for direct navigation */}
        <div className="absolute -top-20" id="faq-anchor"></div>

        {/* Section Title */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-[#C8FF00] text-xs font-semibold uppercase tracking-wider">
            <HelpCircle className="w-4 h-4" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-gray-300">
            Everything you need to know about our APAC demand generation audit and campaign execution.
          </p>
        </div>

        {/* Accordion Items */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus:ring-2 focus:ring-[#C8FF00]"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-semibold text-white pr-4">
                    {faq.question}
                  </span>
                  <div className={`p-1.5 rounded-full bg-white/10 text-[#C8FF00] transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180' : ''}`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-0 text-sm sm:text-base text-gray-300 leading-relaxed border-t border-white/5 mt-2">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
