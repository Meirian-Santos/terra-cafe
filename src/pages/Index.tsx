import React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import CulturalShowcase from '@/components/CulturalShowcase';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <CulturalShowcase />
      <Footer />
    </div>
  );
};

export default Index;
