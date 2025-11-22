import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

export const FloatingActions: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
      {/* Telegram Button */}
      <a 
        href="https://t.me/spotless_demo" 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-14 h-14 bg-[#0088cc] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200 group relative"
        aria-label="Chat on Telegram"
      >
        <MessageCircle className="w-7 h-7 text-white" />
        <span className="absolute right-16 bg-gray-900 text-white text-xs font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Chat with us
        </span>
      </a>

      {/* Phone Button */}
      <a 
        href="tel:+251911000000" 
        className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200 animate-bounce-subtle group relative"
        aria-label="Call Us"
      >
        <Phone className="w-7 h-7 text-white" />
        <span className="absolute right-16 bg-gray-900 text-white text-xs font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Call Now
        </span>
      </a>
    </div>
  );
};