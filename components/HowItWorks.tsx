import React from 'react';
import { MousePointerClick, Sparkles, Coffee } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <MousePointerClick className="w-8 h-8 text-white" />,
      title: "1. Book Online",
      desc: "Choose your package, date, and location in under 60 seconds."
    },
    {
      icon: <Sparkles className="w-8 h-8 text-white" />,
      title: "2. We Clean",
      desc: "Our uniformed, fully-equipped team arrives on time and gets to work."
    },
    {
      icon: <Coffee className="w-8 h-8 text-white" />,
      title: "3. You Relax",
      desc: "Enjoy your free time. Pay via Telebirr or Bank Transfer after the job."
    }
  ];

  return (
    <section className="py-16 bg-brand-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">How It Works</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-brand-200 -z-10 transform -translate-y-1/2"></div>

          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center text-center relative z-10">
              <div className="w-16 h-16 bg-brand-600 rounded-full flex items-center justify-center shadow-lg mb-6 border-4 border-white">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-600 max-w-xs">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};