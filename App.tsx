import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustSection } from './components/TrustSection';
import { HowItWorks } from './components/HowItWorks';
import { Packages } from './components/Packages';
import { BookingForm } from './components/BookingForm';
import { MapSection } from './components/MapSection';
import { Careers } from './components/Careers';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';

function App() {
  const [selectedPackage, setSelectedPackage] = useState<string | undefined>(undefined);

  const handleBookClick = () => {
    document.getElementById('book')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handlePricingClick = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handlePackageSelect = (pkgName: string) => {
    setSelectedPackage(pkgName);
    handleBookClick();
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Header />
      
      <main>
        <Hero onBookClick={handleBookClick} onPricingClick={handlePricingClick} />
        
        <div id="why-us">
          <TrustSection />
        </div>

        <div id="services">
          <HowItWorks />
        </div>

        <Packages onSelectPackage={handlePackageSelect} />
        
        <MapSection />
        
        <BookingForm selectedPackage={selectedPackage} />
        
        <Careers />
      </main>

      <Footer />
      <FloatingActions />
    </div>
  );
}

export default App;