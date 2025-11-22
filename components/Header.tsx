import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <div 
          className={`text-2xl font-bold tracking-tighter cursor-pointer ${isScrolled ? 'text-brand-700' : 'text-white'}`}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          SPOTLESS<span className="text-brand-500">.</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center">
          {['Services', 'Pricing', 'Why Us'].map((item) => (
            <button 
              key={item}
              onClick={() => scrollToSection(item.toLowerCase() === 'why us' ? 'why-us' : item.toLowerCase())}
              className={`font-medium hover:text-brand-500 transition-colors ${isScrolled ? 'text-gray-600' : 'text-white/90'}`}
            >
              {item}
            </button>
          ))}
          <button 
            onClick={() => scrollToSection('book')}
            className={`px-5 py-2 rounded-full font-semibold transition-all ${
              isScrolled 
                ? 'bg-brand-600 text-white hover:bg-brand-700' 
                : 'bg-white text-brand-600 hover:bg-brand-50'
            }`}
          >
            Book Now
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
             <X className={`w-6 h-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
          ) : (
             <Menu className={`w-6 h-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
          )}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-xl md:hidden flex flex-col p-4 gap-4">
          {['Services', 'Pricing', 'Why Us', 'Book'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase() === 'why us' ? 'why-us' : item.toLowerCase())}
              className="text-left px-4 py-3 text-gray-800 font-medium hover:bg-gray-50 rounded-lg"
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};