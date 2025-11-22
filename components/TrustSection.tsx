import React from 'react';
import { ShieldCheck, ThumbsUp, Briefcase } from 'lucide-react';

export const TrustSection: React.FC = () => {
  const features = [
    {
      icon: <ShieldCheck className="w-10 h-10 text-brand-600" />,
      title: "Vetted Staff",
      desc: "Every cleaner goes through a strict background check, valid ID verification, and guarantor confirmation."
    },
    {
      icon: <ThumbsUp className="w-10 h-10 text-brand-600" />,
      title: "100% Satisfaction",
      desc: "Not happy with the service? We will come back and re-clean the area for free. No questions asked."
    },
    {
      icon: <Briefcase className="w-10 h-10 text-brand-600" />,
      title: "Fully Equipped",
      desc: "We bring our own professional vacuums, chemicals, and supplies. You simply relax, we do the work."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Spotless?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">We understand letting someone into your home is a big deal. That's why trust is our #1 priority.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((f, idx) => (
            <div key={idx} className="p-6 bg-brand-50 rounded-xl border border-brand-100 hover:shadow-lg transition-shadow text-center md:text-left">
              <div className="mb-4 inline-flex items-center justify-center p-3 bg-white rounded-lg shadow-sm">
                {f.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{f.title}</h3>
              <p className="text-gray-600 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};