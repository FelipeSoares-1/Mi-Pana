
import React from 'react';

const Hero: React.FC = () => {
  const avatarUrl = "https://lh3.googleusercontent.com/aida-public/AB6AXuBS0DABYv5WMcKsLI-mW7uTHCzdKvE3TeeDgiZMGJEnwA55t8tqB3keKeHfH-pwaHFeP1iXEY0hDTW-na7ZuBQNnqH3lTgjALEQcxSg_KQK73GnhWEY4aV3rjb7jHcFDfIRk4foVAbIpQ4a_yEMwbGn8Epl6FJogqmWtZPlWdsKGlvjUnNYkQHtUoQkGQvSKxYOM3doTP_5Yjn742bluggg0HA9xyow1gAmKLnJdNF21yrbg_p4B9HwLYXKW-kkYjo1pId2WV_sLRBf";
  const chatPhotoUrl = "https://lh3.googleusercontent.com/aida-public/AB6AXuDv_w1AaPmFkdQRqy2YYtFbk7emsjGiKzqcNA46LutVyWtMBt4NpG_R3KZSByhWer1P34l5Erioer20BgqvzQY_TsVCG3fHsXCo0IwjKZmMmR7oyBbI3I0roO2lg_CVVmlLjZ1z-qc-jnRZ_ew1gaf7STtzTk_B_WCEkWDxVeo1oAiA_rPwUgFHTMHGvHNeMLWrqGxJ_6Z0Xj7YV4UYMMJcSgUfzybGF7-VzZJ-3qMp5of79GSNXao_Kv__z13Hl1PQekQA-uaBZ-0s";

  return (
    <section className="relative pt-12 pb-20 lg:pt-24 lg:pb-32 overflow-hidden">
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="flex flex-col gap-6 max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 w-fit mx-auto lg:mx-0">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
              <span className="text-xs font-semibold text-blue-700 tracking-wide uppercase">Tecnologia Humanitária</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight text-deep-blue">
              Conexión directa. <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">Ayuda real.</span>
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed">
              Conectando a los venezolanos en el mundo con su gente en casa.
            </p>

            <div className="w-full max-w-md mx-auto lg:mx-0 mt-2">
              <form className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-grow">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="material-symbols-outlined text-slate-400">mail</span>
                  </div>
                  <input className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all shadow-sm" placeholder="Tu mejor email" required type="email" />
                </div>
                <button className="bg-primary hover:bg-yellow-400 text-deep-blue font-bold py-3 px-6 rounded-xl shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap">
                  Soy un Pana en el Exterior
                </button>
              </form>
              <p className="text-xs text-slate-500 mt-3 flex items-center justify-center lg:justify-start gap-1">
                <span className="material-symbols-outlined text-sm text-green-500">check_circle</span>
                Acesso antecipado gratuito. Sem spam.
              </p>
            </div>
          </div>

          <div className="relative lg:h-[600px] flex items-center justify-center">
            <div className="relative w-[300px] h-[600px] bg-deep-blue rounded-[3rem] border-8 border-slate-900 shadow-2xl overflow-hidden transform rotate-[-3deg] hover:rotate-0 transition-all duration-500">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-slate-900 rounded-b-2xl z-20"></div>
              <div className="w-full h-full bg-slate-100 flex flex-col relative">
                <div className="h-12 w-full bg-slate-100"></div>
                <div className="bg-[#075E54] p-4 text-white flex items-center gap-3 shadow-md z-10">
                  <span className="material-symbols-outlined">arrow_back</span>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-slate-300 overflow-hidden">
                      <img src={avatarUrl} alt="Mi Pana Bot" className="w-full h-full object-cover" />
                    </div>
                    <span className="font-medium text-sm">Mi Pana Bot</span>
                  </div>
                </div>
                <div className="flex-1 p-4 bg-[#E5DDD5] flex flex-col gap-4 overflow-hidden relative">
                  <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                  <div className="self-end bg-[#DCF8C6] p-3 rounded-lg rounded-tr-none shadow-sm max-w-[85%] text-sm relative z-0">
                    <p className="text-slate-800">Quiero enviar una canasta a mi tía en Caracas.</p>
                    <span className="text-[10px] text-slate-500 flex justify-end gap-1 mt-1">10:42 AM <span className="material-symbols-outlined text-[12px] text-blue-500">done_all</span></span>
                  </div>
                  <div className="self-start bg-white p-3 rounded-lg rounded-tl-none shadow-sm max-w-[85%] text-sm relative z-0">
                    <p className="text-slate-800">¡Entendido! 🤖 Hemos verificado la ubicación. Aquí está la confirmación de entrega:</p>
                    <div className="mt-2 rounded-lg overflow-hidden relative">
                      <img src={chatPhotoUrl} alt="Delivery confirmation" className="w-full h-32 object-cover" />
                      <div className="absolute bottom-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md border border-green-100 flex items-center gap-1 shadow-sm">
                        <span className="material-symbols-outlined text-green-600 text-xs">verified_user</span>
                        <span className="text-[10px] font-bold text-green-800 uppercase tracking-wider">Auditado por IA</span>
                      </div>
                    </div>
                    <span className="text-[10px] text-slate-500 flex justify-end gap-1 mt-1">10:45 AM</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -right-4 top-1/4 bg-white p-4 rounded-xl shadow-xl border border-slate-100 animate-bounce" style={{ animationDuration: '3s' }}>
              <div className="flex items-center gap-3">
                <div className="bg-green-100 p-2 rounded-full text-green-600">
                  <span className="material-symbols-outlined">payments</span>
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase font-semibold">Costo Total</p>
                  <p className="text-sm font-bold text-deep-blue">$0 Intermediarios</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
