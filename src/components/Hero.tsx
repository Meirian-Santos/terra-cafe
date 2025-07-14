import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Globe, Coffee } from 'lucide-react';
import heroImage from '@/assets/hero-coffee-culture.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Terra Café - Cultura em cada grão"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-coffee-bean/60"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-coffee-bean/80 via-transparent to-primary/40"></div>
      </div>

      {/* Floating Coffee Elements */}
      <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-cultural-gold/30 rounded-full coffee-steam"></div>
      <div className="absolute top-1/3 right-1/3 w-6 h-6 bg-primary/40 rounded-full coffee-steam" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-1/4 left-1/3 w-4 h-4 bg-secondary/50 rounded-full coffee-steam" style={{ animationDelay: '2s' }}></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-cultural-gold/20 backdrop-blur-sm rounded-full px-4 py-2 mb-8 border border-cultural-gold/30">
            <Globe className="w-4 h-4 text-cultural-gold" />
            <span className="text-sm font-medium text-cultural-cream font-inter">
              Cafés autênticos de 25 países
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-playfair font-bold mb-6 leading-tight">
            <span className="heading-cultural block">Uma Viagem</span>
            <span className="text-cultural-cream block">Cultural em</span>
            <span className="text-cultural-gold block">Cada Xícara</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-cultural-cream/90 mb-12 max-w-2xl mx-auto font-inter leading-relaxed">
            Descubra tradições milenares, sabores únicos e histórias fascinantes 
            que conectam culturas através da arte do café premium.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button variant="cultural" size="lg" className="group">
              <span className="font-semibold">Iniciar Jornada Cultural</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 cultural-transition" />
            </Button>
            
            <Button variant="explorer" size="lg" className="group">
              <Play className="w-5 h-5 group-hover:scale-110 cultural-transition" />
              <span className="font-medium">Ver Nossa História</span>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-cultural-gold/20">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-playfair font-bold text-cultural-gold mb-2">25+</div>
              <div className="text-sm text-cultural-cream/80 font-inter">Países Representados</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-playfair font-bold text-cultural-gold mb-2">150+</div>
              <div className="text-sm text-cultural-cream/80 font-inter">Métodos de Preparo</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-playfair font-bold text-cultural-gold mb-2">500+</div>
              <div className="text-sm text-cultural-cream/80 font-inter">Experiências Únicas</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center space-y-2 text-cultural-cream/60">
          <span className="text-xs font-inter">Descubra mais</span>
          <div className="w-px h-8 bg-cultural-gold/50 heritage-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;