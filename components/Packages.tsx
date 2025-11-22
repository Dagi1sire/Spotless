import React, { useState } from 'react';
import { PACKAGES } from '../constants';
import { Button } from './Button';
import { Check, X, Info } from 'lucide-react';
import { ServiceModal } from './ServiceModal';
import { CleaningPackage } from '../types';

interface PackagesProps {
  onSelectPackage: (pkgName: string) => void;
}

export const Packages: React.FC<PackagesProps> = ({ onSelectPackage }) => {
  const [selectedModalPkg, setSelectedModalPkg] = useState<CleaningPackage | null>(null);

  return (
    <section id="pricing" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Transparent Pricing</h2>
          <p className="text-gray-600">Choose the level of clean that fits your needs.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PACKAGES.map((pkg, idx) => (
            <div 
              key={idx} 
              className={`relative flex flex-col bg-white rounded-2xl border ${pkg.isBestSeller ? 'border-brand-500 shadow-xl scale-105 z-10' : 'border-gray-200 shadow-lg'}`}
            >
              {pkg.isBestSeller && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-brand-600 text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wide">
                  Most Popular
                </div>
              )}
              
              <div className="p-6 flex-grow">
                <h3 className="text-xl font-bold text-gray-900">{pkg.title}</h3>
                <p className="text-sm text-gray-500 mt-2 h-10">{pkg.description}</p>
                <div className="mt-4 mb-6">
                  <span className="text-3xl font-bold text-brand-600">{pkg.price}</span>
                </div>
                <div className="text-sm font-medium text-gray-500 mb-4 bg-gray-50 p-2 rounded">
                  Best for: {pkg.recommendedFor}
                </div>

                <ul className="space-y-3 mb-6">
                  {pkg.features.slice(0, 5).map((feat, fIdx) => ( // Show only first 5 features in card
                    <li key={fIdx} className="flex items-start gap-3">
                      {feat.included ? (
                        <Check className="w-5 h-5 text-green-500 shrink-0" />
                      ) : (
                        <X className="w-5 h-5 text-red-300 shrink-0" />
                      )}
                      <span className={`text-sm ${feat.included ? 'text-gray-700' : 'text-gray-400'}`}>
                        {feat.text}
                      </span>
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={() => setSelectedModalPkg(pkg)}
                  className="text-brand-600 text-sm font-semibold flex items-center gap-1 hover:underline"
                >
                  <Info className="w-4 h-4" />
                  View Full Details
                </button>
              </div>

              <div className="p-6 pt-0">
                <Button 
                  fullWidth 
                  variant={pkg.isBestSeller ? 'primary' : 'outline'}
                  onClick={() => onSelectPackage(pkg.title)}
                >
                  Select Package
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Service Details Modal */}
      {selectedModalPkg && (
        <ServiceModal 
          pkg={selectedModalPkg}
          isOpen={!!selectedModalPkg}
          onClose={() => setSelectedModalPkg(null)}
          onBook={() => {
            onSelectPackage(selectedModalPkg.title);
            setSelectedModalPkg(null);
          }}
        />
      )}
    </section>
  );
};