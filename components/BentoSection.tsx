
import React from 'react';

const BentoSection: React.FC = () => {
  const mapImageUrl = "https://lh3.googleusercontent.com/aida-public/AB6AXuCQng63DY_MdhUi2zwzwleYBMQKZdrLyaoxjIQnAIBeNHXXHC8H_0xEFLyir62CNerjgm5UHat17kGvF61EGfx8ZvUmV7vMgKSwl6QT9pBTz2brkSzBa8ESMgnfVsicc5uBb2Q1dBDBZu_KeXoV_rWf02dzSa1biHy9WTmbt9uSRv5fbVhpPUkV-BwuYGTyutAa17-iVsXT9d1R92dUAKWwIE2e8LFO2va1kx4y9Yn3Hg_CNlS5JH1MVXpLMgdIObKwyZzHQMTp60FB";

  return (
    <section className="py-20 bg-background-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-black text-deep-blue mb-4">Por Que Mi Pana?</h2>
          <p className="text-slate-600 max-w-2xl text-lg">Tecnologia que elimina barreiras e garante que cada centavo chegue ao destino.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(200px,auto)]">
          <div className="md:col-span-2 md:row-span-2 bg-deep-blue rounded-2xl p-8 relative overflow-hidden text-white group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-slate-900 z-0"></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-primary/50 shadow-[0_0_20px_rgba(250,204,21,0.6)] animate-[scan_3s_ease-in-out_infinite] z-10 opacity-50"></div>

            <div className="relative z-20 flex flex-col h-full justify-between">
              <div>
                <div className="bg-white/10 w-fit p-3 rounded-xl mb-4 backdrop-blur-sm border border-white/10">
                  <span className="material-symbols-outlined text-primary text-3xl">qr_code_scanner</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-2">Auditoria por IA</h3>
                <p className="text-slate-300 max-w-md">Nosso sistema proprietário cruza dados em tempo real para verificar a necessidade e a entrega. Nada se perde no caminho.</p>
              </div>
              <div className="mt-8 p-4 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm flex items-center gap-4">
                <div className="flex-1 bg-white/10 h-2 rounded-full overflow-hidden">
                  <div className="w-full h-full bg-green-500 animate-[loading_2s_ease-in-out_infinite]"></div>
                </div>
                <span className="text-sm font-mono text-green-400">100% VERIFICADO</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-center items-start group">
            <div className="bg-blue-50 p-3 rounded-full mb-4 group-hover:bg-blue-100 transition-colors">
              <span className="material-symbols-outlined text-blue-600 text-2xl">handshake</span>
            </div>
            <h3 className="text-xl font-bold text-deep-blue mb-1">0% Intermediários</h3>
            <p className="text-sm text-slate-500">Conexão P2P direta.</p>
            <div className="mt-4 flex items-end gap-1">
              <span className="text-4xl font-black text-deep-blue tracking-tighter">0</span>
              <span className="text-sm text-slate-400 font-medium mb-1.5">% taxa de gestão</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex flex-col relative overflow-hidden group">
            <div className="absolute inset-0 z-0 opacity-20 group-hover:scale-105 transition-transform duration-700">
              <img src={mapImageUrl} className="w-full h-full object-cover filter saturate-0" alt="Map background" />
            </div>
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div className="bg-primary/20 p-3 w-fit rounded-full mb-4">
                <span className="material-symbols-outlined text-yellow-700 text-2xl">location_on</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-deep-blue mb-1">Impacto Local</h3>
                <p className="text-sm text-slate-600 font-medium bg-white/80 w-fit px-2 py-1 rounded-md backdrop-blur-sm">Comércio de Bairro ↗</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BentoSection;
