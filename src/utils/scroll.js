/**
 * Smooth scroll utility for FAQ and anchor navigation
 * Handles fixed header offset and ensures reliable scrolling
 */

export const scrollToSection = (sectionId, behavior = 'smooth') => {
  const element = document.getElementById(sectionId);
  if (!element) {
    // Try to find the section by class or data attribute as fallback
    const fallback = document.querySelector(`[data-section="${sectionId}"]`);
    if (!fallback) {
      console.warn(`Section "${sectionId}" not found on the page`);
      return false;
    }
    performScroll(fallback, behavior);
    return true;
  }

  performScroll(element, behavior);
  return true;
};

const performScroll = (element, behavior) => {
  // Get the fixed header height dynamically
  const header = document.querySelector('header');
  const headerHeight = header ? header.offsetHeight : 80;

  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

  window.scrollTo({
    top: Math.max(0, offsetPosition),
    behavior
  });
};

export const handleFaqClick = (e) => {
  e.preventDefault();
  scrollToSection('faq');
};

export const handleAuditFormClick = (e) => {
  e.preventDefault();
  scrollToSection('audit-form');
};

export default {
  scrollToSection,
  handleFaqClick,
  handleAuditFormClick
};