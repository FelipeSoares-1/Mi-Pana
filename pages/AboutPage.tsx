
import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-black text-deep-blue mb-6">O Manifesto</h1>
          <p className="text-xl text-slate-600 leading-relaxed mb-12">
            A diáspora venezuelana representa uma força econômica imensa. Mi Pana transforma a caridade em uma transação auditada, eliminando a desconfiança e a opacidade.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mt-16">
            <div className="p-8 bg-background-light rounded-2xl border border-slate-100">
              <div className="text-secondary mb-4"><span className="material-symbols-outlined text-4xl">favorite</span></div>
              <h3 className="text-xl font-bold mb-2">Por que "Mi Pana"?</h3>
              <p className="text-slate-600">Na Venezuela, um "pana" é mais que um amigo; é um irmão que você escolhe. Nós não pedimos doações; facilitamos a compra de itens específicos.</p>
            </div>
            <div className="p-8 bg-background-light rounded-2xl border border-slate-100">
              <div className="text-blue-600 mb-4"><span className="material-symbols-outlined text-4xl">psychology</span></div>
              <h3 className="text-xl font-bold mb-2">IA para o Bem</h3>
              <p className="text-slate-600">Garantimos a entrega através de visão computacional e inteligência artificial (Antigravity), eliminando fraudes e custos operacionais.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-deep-blue text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="text-3xl font-black mb-6">A Transparência é o nosso Código.</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <span className="material-symbols-outlined text-primary">done_all</span>
                  <p className="text-slate-300">Cada centavo é rastreado desde a origem até o comerciante local.</p>
                </div>
                <div className="flex gap-4">
                  <span className="material-symbols-outlined text-primary">done_all</span>
                  <p className="text-slate-300">Auditoria fotográfica com geolocalização em todas as entregas.</p>
                </div>
                <div className="flex gap-4">
                  <span className="material-symbols-outlined text-primary">done_all</span>
                  <p className="text-slate-300">Sistema descentralizado que empodera o comércio de bairro.</p>
                </div>
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="aspect-video bg-slate-800 rounded-3xl overflow-hidden shadow-2xl border border-slate-700 flex items-center justify-center group cursor-pointer">
                <span className="material-symbols-outlined text-6xl text-white/20 group-hover:scale-110 group-hover:text-primary transition-all">play_circle</span>
                <p className="absolute bottom-6 text-sm text-slate-400 font-mono">ASSISTIR MANIFESTO.MP4</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
