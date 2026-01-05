
import React from 'react';

const PartnersPage: React.FC = () => {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 bg-white min-h-screen text-deep-blue">
      {/* Hero Section */}
      <section className="py-20 text-center px-4 bg-slate-50 border-b border-slate-100">
        <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight text-deep-blue">
          Junte forças com a <span className="text-primary">tecnologia</span>.
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Oferecemos infraestrutura de auditoria gratuita para ONGs sérias e garantia de recebimento para fornecedores locais.
        </p>
      </section>

      {/* Split Section */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

          {/* Card ONG */}
          <div className="bg-white border border-slate-200 rounded-3xl p-10 hover:shadow-xl hover:border-pink-200 transition-all flex flex-col items-start group">
            <div className="bg-pink-50 p-4 rounded-2xl mb-6 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-4xl text-pink-500">volunteer_activism</span>
            </div>
            <h2 className="text-3xl font-bold mb-4 text-deep-blue">Para ONGs</h2>
            <p className="text-slate-600 mb-8 text-lg flex-1">
              Receba doações em dólar/euro auditadas. Sua organização foca no impacto, nós garantimos a transparência e a captação de recursos global.
            </p>
            <ul className="space-y-3 mb-8 text-slate-500">
              <li className="flex gap-2 items-center"><span className="material-symbols-outlined text-green-500 text-sm">check_circle</span> Dashboard de Gestão Gratuito</li>
              <li className="flex gap-2 items-center"><span className="material-symbols-outlined text-green-500 text-sm">check_circle</span> Auditoria Automática por IA</li>
              <li className="flex gap-2 items-center"><span className="material-symbols-outlined text-green-500 text-sm">check_circle</span> Pagamentos em Moeda Forte</li>
            </ul>
            <button className="w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-4 px-6 rounded-xl transition-all shadow-lg hover:shadow-pink-500/25">
              Aplicar como ONG
            </button>
          </div>

          {/* Card Fornecedor */}
          <div className="bg-white border border-slate-200 rounded-3xl p-10 hover:shadow-xl hover:border-blue-200 transition-all flex flex-col items-start group">
            <div className="bg-blue-50 p-4 rounded-2xl mb-6 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-4xl text-blue-500">storefront</span>
            </div>
            <h2 className="text-3xl font-bold mb-4 text-deep-blue">Para Fornecedores</h2>
            <p className="text-slate-600 mb-8 text-lg flex-1">
              Venda para a ajuda humanitária. O dinheiro das doações é usado para comprar no seu comércio. Pagamento garantido e fluxo constante de clientes.
            </p>
            <ul className="space-y-3 mb-8 text-slate-500">
              <li className="flex gap-2 items-center"><span className="material-symbols-outlined text-green-500 text-sm">check_circle</span> Aumento do Faturamento</li>
              <li className="flex gap-2 items-center"><span className="material-symbols-outlined text-green-500 text-sm">check_circle</span> Sem Taxas de Adesão</li>
              <li className="flex gap-2 items-center"><span className="material-symbols-outlined text-green-500 text-sm">check_circle</span> Liquidação Imediata</li>
            </ul>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-xl transition-all shadow-lg hover:shadow-blue-500/25">
              Cadastrar Comércio
            </button>
          </div>

        </div>
      </section>
    </div>
  );
};

export default PartnersPage;
