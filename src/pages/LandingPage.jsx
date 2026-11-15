import React from 'react';
import { Header } from '../components/common/Header';
import { Footer } from '../components/common/Footer';
import { HeroSection } from '../components/landing/HeroSection';
import { PainPoints } from '../components/landing/PainPoints';
import { HowItWorks } from '../components/landing/HowItWorks';
import { ProofBlock } from '../components/landing/ProofBlock';
import { FAQAccordion } from '../components/landing/FAQAccordion';
import { LeadForm } from '../components/landing/LeadForm';

export const LandingPage = () => {
  return (
    <div className="min-h-screen bg-[#041221]">
      <Header />
      <main>
        <HeroSection />
        <PainPoints />
        <HowItWorks />
        <ProofBlock />
        <LeadForm />
        <FAQAccordion />
      </main>
      <Footer />
    </div>
  );
};
