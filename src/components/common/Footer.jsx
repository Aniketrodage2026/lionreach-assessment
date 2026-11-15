import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Mail, MapPin, Globe } from 'lucide-react';
import logoWhite from '../../assets/logos/logo-neon-white.png';
import { handleFaqClick, handleAuditFormClick } from '../../utils/scroll';

export const Footer = () => {
  return (
    <footer className="bg-[#020b14] text-gray-400 border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <img
              src={logoWhite}
              alt="LionReach Media Logo"
              className="h-9 w-auto max-w-[180px] object-contain mb-4"
            />
            <p className="text-sm leading-relaxed max-w-md text-gray-300">
              LionReach Media is APAC's premier B2B demand generation agency. We empower fast-growing technology enterprises with account-based lead qualification, intent-driven content syndication, and predictable pipeline expansion across 14+ APAC markets.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#C8FF00]/90 font-mono pt-2">
              <ShieldCheck className="w-4 h-4" />
              <span>100% GDPR & PDPA Compliant Double Opt-In Leads</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Navigation</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-[#C8FF00] transition-colors">
                  B2B Demand Gen Audit
                </Link>
              </li>
              <li>
                <Link to="/case-study" className="hover:text-[#C8FF00] transition-colors">
                  Zentrix APAC Case Study
                </Link>
              </li>
              <li>
                <a
                  href="#faq"
                  onClick={handleFaqClick}
                  className="hover:text-[#C8FF00] transition-colors"
                >
                  Frequently Asked Questions
                </a>
              </li>
              <li>
                <a
                  href="#audit-form"
                  onClick={handleAuditFormClick}
                  className="hover:text-[#C8FF00] transition-colors"
                >
                  Claim Free Audit
                </a>
              </li>
            </ul>
          </div>

          {/* Regional Hubs & Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">APAC Coverage</h3>
            <ul className="space-y-2.5 text-sm">
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#C8FF00]" />
                <span>Singapore Hub (HQ)</span>
              </li>
              <li className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-[#C8FF00]" />
                <span>India • Japan • Australia • Malaysia</span>
              </li>
              <li className="flex items-center gap-2 pt-2">
                <Mail className="w-4 h-4 text-[#C8FF00]" />
                <span>growth@lionreach.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p>© {new Date().getFullYear()} LionReach Media Pte. Ltd. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-gray-300 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-gray-300 cursor-pointer">Terms of Service</span>
            <span className="hover:text-gray-300 cursor-pointer">Security</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
