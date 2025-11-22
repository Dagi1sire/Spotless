import React from 'react';
import { Users, CheckCircle } from 'lucide-react';
import { Button } from './Button';

export const Careers: React.FC = () => {
  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden shadow-xl flex flex-col md:flex-row">
          
          <div className="p-8 md:p-12 flex-1 text-white">
            <div className="flex items-center gap-2 text-brand-300 font-semibold mb-2">
              <Users className="w-5 h-5" />
              <span>Careers</span>
            </div>
            <h2 className="text-3xl font-bold mb-4">Join the Spotless Team</h2>
            <p className="text-gray-300 mb-6">
              We are always hiring professional cleaners. We pay better than the market and treat our staff with the respect they deserve.
            </p>
            
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Must have valid Kebele ID</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Must have a Guarantor</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Professional attitude required</span>
              </div>
            </div>

            <a href="https://t.me/spotless_hr_demo" target="_blank" rel="noopener noreferrer">
              <Button variant="primary" className="bg-white text-gray-900 hover:bg-gray-100">
                Apply via Telegram
              </Button>
            </a>
          </div>

          {/* Image side */}
          <div className="hidden md:block w-1/3 bg-gray-700 relative">
            <img 
              src="https://picsum.photos/600/800?grayscale" 
              alt="Team member" 
              className="w-full h-full object-cover opacity-50 hover:opacity-75 transition-opacity duration-500"
            />
          </div>

        </div>
      </div>
    </section>
  );
};