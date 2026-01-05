
import React from 'react';

const CTA: React.FC = () => {
  return (
    <section className="py-20 bg-deep-blue text-white text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-5xl font-black mb-6">Pronto para fazer a diferença?</h2>
        <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
          Junte-se a milhares de panas que estão reconstruindo comunidades, uma conexão de cada vez.
        </p>
        <button className="bg-primary hover:bg-yellow-400 text-deep-blue text-lg font-bold py-4 px-10 rounded-full shadow-xl shadow-primary/30 transition-all hover:-translate-y-1 active:translate-y-0">
          Começar Agora
        </button>
      </div>
    </section>
  );
};

export default CTA;
