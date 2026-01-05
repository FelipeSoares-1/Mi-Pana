
import React from 'react';

const ImpactPage: React.FC = () => {
  const stats = [
    { label: 'Entregas Realizadas', value: '12.450+', icon: 'local_shipping', color: 'bg-blue-500' },
    { label: 'Famílias Ajudadas', value: '4.820', icon: 'family_restroom', color: 'bg-green-500' },
    { label: 'Comércios Parceiros', value: '892', icon: 'storefront', color: 'bg-primary' },
    { label: 'Economia em Taxas', value: '$145K', icon: 'savings', color: 'bg-secondary' },
  ];

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 bg-background-light min-h-screen">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-black text-deep-blue mb-4">Impacto Real</h1>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">Números que provam como a conexão direta transforma vidas todos os dias.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
                <div className={`${stat.color} text-white p-4 rounded-2xl mb-4 shadow-lg`}>
                  <span className="material-symbols-outlined text-3xl">{stat.icon}</span>
                </div>
                <p className="text-3xl font-black text-deep-blue mb-1">{stat.value}</p>
                <p className="text-sm font-medium text-slate-400 uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-20 bg-white rounded-[2rem] p-8 md:p-12 border border-slate-100 shadow-sm overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-0"></div>
            <div className="relative z-10 flex flex-col lg:flex-row gap-12 items-center">
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-black text-deep-blue mb-6">Relatório de Transparência 2024</h2>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  Diferente de ONGs tradicionais, a Mi Pana opera com um modelo "Open Book". Qualquer doador pode solicitar o hash de auditoria de sua transação para verificar a entrega final.
                </p>
                <button className="bg-deep-blue text-white font-bold py-4 px-8 rounded-xl flex items-center gap-3 hover:bg-slate-800 transition-all">
                  <span className="material-symbols-outlined">download</span>
                  Baixar Relatório Completo (PDF)
                </button>
              </div>
              <div className="lg:w-1/2 grid grid-cols-2 gap-4">
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                  <p className="text-2xl font-bold text-deep-blue mb-1">98.2%</p>
                  <p className="text-xs text-slate-500 uppercase font-bold">Taxa de Sucesso</p>
                </div>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                  <p className="text-2xl font-bold text-deep-blue mb-1">&lt; 4h</p>
                  <p className="text-xs text-slate-500 uppercase font-bold">Tempo de Entrega</p>
                </div>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                  <p className="text-2xl font-bold text-deep-blue mb-1">0%</p>
                  <p className="text-xs text-slate-500 uppercase font-bold">Desvio de Verba</p>
                </div>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                  <p className="text-2xl font-bold text-deep-blue mb-1">24/7</p>
                  <p className="text-xs text-slate-500 uppercase font-bold">Suporte Ativo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ImpactPage;
