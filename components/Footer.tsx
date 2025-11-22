import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h3 className="text-white text-lg font-bold">Spotless Cleaning Services</h3>
          <p className="text-sm mt-1">Addis Ababa, Ethiopia</p>
        </div>
        
        <div className="flex gap-6 text-sm">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
          <a href="#" className="hover:text-white transition-colors">Facebook</a>
          <a href="#" className="hover:text-white transition-colors">Instagram</a>
        </div>

        <div className="text-xs">
          &copy; {new Date().getFullYear()} Spotless. All rights reserved.
        </div>
      </div>
    </footer>
  );
};