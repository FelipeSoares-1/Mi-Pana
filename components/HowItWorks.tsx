
import React from 'react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: 'volunteer_activism',
      title: '1. Vitrine de Necessidades',
      desc: 'ONGs parceiras e líderes comunitários cadastram necessidades reais (ex: insulina, cesta básica) com foto e custo exato.',
      color: 'text-primary'
    },
    {
      icon: 'payments',
      title: '2. Patrocínio Direto',
      desc: 'Você escolhe uma história no mapa e realiza o pagamento. O valor é garantido em Dólar/Euro para não sofrer inflação.',
      color: 'text-blue-500'
    },
    {
      icon: 'local_shipping',
      title: '3. Execução Logística',
      desc: 'A ONG recebe créditos para retirar os produtos nos fornecedores parceiros e entrega diretamente à família.',
      color: 'text-secondary'
    },
    {
      icon: 'security',
      title: '4. Validado por IA',
      desc: 'O voluntário envia uma foto da entrega, que é auditada por IA para confirmar identidade e itens antes de avisar você.',
      color: 'text-green-500'
    }
  ];

  return (
    <section className="py-20 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">Simples & Transparente</span>
          <h2 className="text-3xl md:text-4xl font-black text-deep-blue">Como Funciona</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
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
