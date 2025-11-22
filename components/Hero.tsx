import React from 'react';
import { Button } from './Button';
import { ChevronRight, Sparkles } from 'lucide-react';

interface HeroProps {
  onBookClick: () => void;
  onPricingClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookClick, onPricingClick }) => {
  return (
    <div className="relative bg-brand-900 text-white overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-brand-500 blur-3xl"></div>
        <div className="absolute top-1/2 -left-24 w-72 h-72 rounded-full bg-accent-500 blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40 flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 bg-brand-800/50 px-4 py-2 rounded-full mb-6 border border-brand-700 backdrop-blur-sm">
          <Sparkles className="w-4 h-4 text-yellow-400" />
          <span className="text-sm font-medium text-brand-100">Now serving Bole, CMC & Ayat</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
          Professional. Reliable. <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-teal-300">
            Spotless.
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-brand-100 mb-10 max-w-2xl mx-auto leading-relaxed">
          Addis Ababa’s most trusted cleaning agency. Fully vetted staff, satisfaction guaranteed. We bring the supplies, you get your time back.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Button onClick={onBookClick} variant="primary" className="text-lg">
            Book Now
            <ChevronRight className="w-5 h-5" />
          </Button>
          <Button onClick={onPricingClick} variant="outline" className="border-white text-white hover:bg-white/10">
            See Pricing
          </Button>
        </div>
      </div>
    </div>
  );
};