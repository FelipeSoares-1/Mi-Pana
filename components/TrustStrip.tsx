
import React from 'react';

const TrustStrip: React.FC = () => {
  const logos = [
    { icon: 'credit_card', name: 'Stripe' },
    { icon: 'cloud', name: 'AWS' },
    { icon: 'lock', name: 'Auth0' },
    { icon: 'sms', name: 'Twilio' }
  ];

  return (
    <section className="border-y border-slate-200 bg-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium text-slate-400 mb-8 uppercase tracking-widest">Confiança Global</p>
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {logos.map((logo) => (
            <div key={logo.name} className="h-8 flex items-center gap-2 font-bold text-2xl text-slate-700">
              <span className="material-symbols-outlined text-3xl">{logo.icon}</span> {logo.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;
