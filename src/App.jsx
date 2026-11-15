import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { UTMProvider } from './context/UTMContext';
import { LandingPage } from './pages/LandingPage';
import { CaseStudyPage } from './pages/CaseStudyPage';
import { scrollToSection } from './utils/scroll';

// Scroll restoration component to handle navigation issues
const ScrollRestoration = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const animationFrame = window.requestAnimationFrame(() => {
        scrollToSection(location.hash.slice(1));
      });

      return () => window.cancelAnimationFrame(animationFrame);
    }

    // Force scroll to top on route change
    window.scrollTo(0, 0);

    // Ensure header scrolls to top when navigating
    const timeout = window.setTimeout(() => {
      const header = document.querySelector('header');
      if (header) {
        header.scrollIntoView({ behavior: 'auto' });
      }
    }, 0);

    return () => window.clearTimeout(timeout);
  }, [location.pathname, location.hash]);

  return null;
};

export function App() {
  return (
    <UTMProvider>
      <Router>
        <ScrollRestoration />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/case-study" element={<CaseStudyPage />} />
        </Routes>
      </Router>
    </UTMProvider>
  );
}

export default App;
