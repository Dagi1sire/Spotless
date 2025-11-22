import React from 'react';
import { X, Check, AlertCircle } from 'lucide-react';
import { CleaningPackage } from '../types';
import { Button } from './Button';

interface ServiceModalProps {
  pkg: CleaningPackage;
  isOpen: boolean;
  onClose: () => void;
  onBook: () => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({ pkg, isOpen, onClose, onBook }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in duration-200">
        <div className="sticky top-0 bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between z-10">
          <h3 className="text-xl font-bold text-gray-900">{pkg.title}</h3>
          <button 
            onClick={onClose}
            className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        <div className="p-6">
          <div className="mb-6">
            <div className="text-3xl font-bold text-brand-600 mb-2">{pkg.price}</div>
            <p className="text-gray-600 leading-relaxed">
              {pkg.detailedDescription || pkg.description}
            </p>
          </div>

          <div className="space-y-4 mb-8">
            <h4 className="font-semibold text-gray-900 flex items-center gap-2">
              <Check className="w-4 h-4 text-green-500" />
              What's Included
            </h4>
            <ul className="grid grid-cols-1 gap-3">
              {pkg.features.filter(f => f.included).map((feature, idx) => (
                <li key={`inc-${idx}`} className="flex items-start gap-3 text-sm text-gray-700">
                  <div className="min-w-[6px] h-[6px] rounded-full bg-green-500 mt-2"></div>
                  {feature.text}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4 mb-8 p-4 bg-red-50 rounded-lg border border-red-100">
            <h4 className="font-semibold text-gray-900 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-red-500" />
              What's NOT Included
            </h4>
            <ul className="grid grid-cols-1 gap-3">
               {pkg.features.filter(f => !f.included).length > 0 ? (
                 pkg.features.filter(f => !f.included).map((feature, idx) => (
                  <li key={`exc-${idx}`} className="flex items-start gap-3 text-sm text-gray-700">
                    <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                    {feature.text}
                  </li>
                ))
               ) : (
                 <li className="text-sm text-gray-500 italic">This is our most comprehensive package.</li>
               )}
            </ul>
          </div>
        </div>

        <div className="sticky bottom-0 bg-gray-50 border-t border-gray-100 p-6">
          <Button 
            fullWidth 
            onClick={() => {
              onClose();
              onBook();
            }}
          >
            Book This Service
          </Button>
        </div>
      </div>
    </div>
  );
};