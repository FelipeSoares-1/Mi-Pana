
import React from 'react';
import Hero from '../components/Hero';
import TrustStrip from '../components/TrustStrip';
import BentoSection from '../components/BentoSection';
import HowItWorks from '../components/HowItWorks';
import PanasCarousel from '../components/PanasCarousel';
import CTA from '../components/CTA';
import { Page } from '../App';

interface HomePageProps {
  onNavigate: (page: Page) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <>
      <Hero />
      <TrustStrip />
      <BentoSection />
      <HowItWorks />
      <PanasCarousel />
      <CTA />
    </>
  );
};

export default HomePage;
