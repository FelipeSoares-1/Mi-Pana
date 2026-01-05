
import React from 'react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: 'volunteer_activism',
      title: '1. Escolhe',
      desc: 'Selecione quem você quer ajudar ou que insumo enviar diretamente da lista verificada.',
      color: 'text-primary'
    },
    {
      icon: 'security',
      title: '2. IA Audita',
      desc: 'Nossa IA verifica a logística, o preço local e a identidade do recebedor em segundos.',
      color: 'text-blue-500'
    },
    {
      icon: 'add_a_photo',
      title: '3. Foto Real',
      desc: 'Receba uma foto com metadados verificados da entrega concluída no seu WhatsApp.',
      color: 'text-secondary'
    }
  ];

  return (
    <section className="py-20 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">Simples & Transparente</span>
          <h2 className="text-3xl md:text-4xl font-black text-deep-blue">Como Funciona</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-slate-200 to-transparent z-0"></div>
          
          {steps.map((step) => (
            <div key={step.title} className="relative z-10 flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-white rounded-full border-4 border-slate-50 flex items-center justify-center shadow-lg mb-6 group transition-transform hover:scale-110">
                <span className={`material-symbols-outlined text-4xl ${step.color}`}>{step.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-deep-blue mb-2">{step.title}</h3>
              <p className="text-slate-500 px-4">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
