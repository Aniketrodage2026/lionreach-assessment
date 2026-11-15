import React from 'react';
import { Header } from '../components/common/Header';
import { Footer } from '../components/common/Footer';
import { CaseHero } from '../components/casestudy/CaseHero';
import { StorySection } from '../components/casestudy/StorySection';
import { ResultsGrid } from '../components/casestudy/ResultsGrid';
import { CaseStudyGallery } from '../components/casestudy/CaseStudyGallery';
import { FAQAccordion } from '../components/landing/FAQAccordion';

export const CaseStudyPage = () => {
  return (
    <div className="min-h-screen bg-[#041221]">
      <Header />
      <main>
        <CaseHero />
        <StorySection />
        <ResultsGrid />
        <CaseStudyGallery />
        <FAQAccordion />
      </main>
      <Footer />
    </div>
  );
};
