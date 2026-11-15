import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import logoNeonWhite from '../../assets/logos/logo-neon-white.png';
import { ScrollReveal } from './ScrollReveal';
import { handleFaqClick, scrollToSection } from '../../utils/scroll';

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path) => location.pathname === path;

  const handleHeaderAuditClick = (e) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (location.pathname !== '/') {
      navigate('/#audit-form');
      return;
    }

    window.requestAnimationFrame(() => scrollToSection('audit-form'));
  };

  return (
    <header className="sticky top-0 z-50 bg-[#041221]/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <ScrollReveal delay={0} direction="down">
            <Link
              to="/"
              className="flex items-center focus:outline-none focus:ring-2 focus:ring-[#C8FF00] rounded-lg p-1 transition-all duration-300 hover:scale-105"
            >
              <img
                src={logoNeonWhite}
                alt="LionReach Media Logo"
                className="h-auto max-h-14 w-auto max-w-[300px] object-contain hover:opacity-90 transition-opacity drop-shadow-[0_0_12px_rgba(200,255,0,0.5)]"
              />
            </Link>
          </ScrollReveal>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <Link
              to="/"
              className={`relative transition-colors duration-200 hover:text-[#C8FF00] ${
                isActive('/') ? 'text-[#C8FF00] font-semibold' : 'text-gray-300'
              } after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-0.5 after:bg-[#C8FF00] after:scale-x-0 after:origin-bottom-right after:transition-transform hover:after:scale-x-100 hover:after:origin-bottom-left ${
                isActive('/') ? 'after:scale-x-100' : ''
              }`}
            >
              Demand Gen Audit
            </Link>
            <Link
              to="/case-study"
              className={`relative transition-colors duration-200 hover:text-[#C8FF00] ${
                isActive('/case-study') ? 'text-[#C8FF00] font-semibold' : 'text-gray-300'
              } after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-0.5 after:bg-[#C8FF00] after:scale-x-0 after:origin-bottom-right after:transition-transform hover:after:scale-x-100 hover:after:origin-bottom-left ${
                isActive('/case-study') ? 'after:scale-x-100' : ''
              }`}
            >
              APAC Case Study
            </Link>
            <a
              href="#faq"
              onClick={(e) => {
                e.preventDefault();
                setMobileMenuOpen(false);
                handleFaqClick(e);
              }}
              className="relative text-gray-300 hover:text-[#C8FF00] transition-colors duration-200 after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-0.5 after:bg-[#C8FF00] after:scale-x-0 after:origin-bottom-right after:transition-transform hover:after:scale-x-100 hover:after:origin-bottom-left"
            >
              FAQ
            </a>
          </nav>

          {/* Header Action CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#audit-form"
              onClick={handleHeaderAuditClick}
              className="inline-flex items-center gap-2 bg-[#C8FF00] text-[#041221] font-semibold px-5 py-2.5 rounded-full hover:bg-[#b0e600] hover:shadow-lg hover:shadow-[#C8FF00]/25 transition-all transform hover:-translate-y-0.5 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#C8FF00] focus:ring-offset-2 focus:ring-offset-[#041221]"
            >
              <span>Get Free Audit</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 rounded-md text-gray-300 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#C8FF00] transition-all transform hover:scale-110 active:scale-95"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <ScrollReveal delay={50} direction="down" duration={300}>
          <div className="md:hidden bg-[#041221] border-b border-white/10 px-4 pt-2 pb-6 space-y-3 animate-slide-in-down">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors hover:bg-white/10 hover:text-[#C8FF00] ${
                isActive('/') ? 'bg-white/10 text-[#C8FF00]' : 'text-gray-300 hover:text-white'
              }`}
            >
              Demand Gen Audit
            </Link>
            <Link
              to="/case-study"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors hover:bg-white/10 hover:text-[#C8FF00] ${
                isActive('/case-study') ? 'bg-white/10 text-[#C8FF00]' : 'text-gray-300 hover:text-white'
              }`}
            >
              APAC Case Study
            </Link>
            <a
              href="#faq"
              onClick={(e) => {
                e.preventDefault();
                setMobileMenuOpen(false);
                handleFaqClick(e);
              }}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
            >
              FAQ
            </a>
            <a
              href="#audit-form"
              onClick={handleHeaderAuditClick}
              className="w-full flex items-center justify-center gap-2 bg-[#C8FF00] text-[#041221] font-semibold px-4 py-3 rounded-xl mt-4 hover:bg-[#b0e600] transition-all transform hover:-translate-y-0.5 active:scale-95"
            >
              <span>Claim Free B2B Audit</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </ScrollReveal>
      )}
    </header>
  );
};
