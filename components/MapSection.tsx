import React from 'react';
import { MapPin } from 'lucide-react';

export const MapSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">We Serve All of Addis</h2>
          <div className="flex flex-wrap justify-center gap-2 text-gray-600">
            <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> Bole</span>
            <span className="hidden md:inline">•</span>
            <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> CMC</span>
            <span className="hidden md:inline">•</span>
            <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> Ayat</span>
            <span className="hidden md:inline">•</span>
            <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> Old Airport</span>
          </div>
        </div>

        <div className="w-full h-80 md:h-96 bg-gray-200 rounded-xl overflow-hidden shadow-inner relative">
          {/* Placeholder for Google Maps Iframe. 
              Using a grayscale filter for aesthetics until user interacts. 
              Note: Using an embed URL for Addis Ababa.
          */}
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126115.07813689757!2d38.69635763052581!3d9.022769831340852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85cef5ab402d%3A0x8467b6b037a24d49!2sAddis%20Ababa!5e0!3m2!1sen!2set!4v1708900000000!5m2!1sen!2set" 
            width="100%" 
            height="100%" 
            style={{ border: 0, filter: 'grayscale(0%) opacity(0.9)' }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Service Radius Map"
          ></iframe>
          
          <div className="absolute bottom-4 right-4 bg-white px-4 py-2 rounded-lg shadow-lg text-sm font-medium text-gray-700">
            📍 Serving 10km Radius from Bole
          </div>
        </div>
      </div>
    </section>
  );
};