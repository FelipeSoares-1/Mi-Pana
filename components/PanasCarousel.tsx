
import React from 'react';

const PanasCarousel: React.FC = () => {
  const cases = [
    {
      id: 1,
      name: 'Sra. Carmen',
      location: 'Maracaibo',
      category: 'Medicamentos',
      icon: 'medical_services',
      catColor: 'text-secondary',
      desc: 'Necesita tratamiento para hipertensión por 3 meses. La farmacia local ya reservó el pedido.',
      progress: 80,
      goal: 12,
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAzR8Zp05G-bbkhfHUOcWsjh7OTTXooIoEXCjLo35hYalqO8WOV5smLT8v8b1i3Z59LrJWIGulUHoP-hvY4pOVTwgWzaMZJ58VEhp4Jdd65SByAL2U7OF0KNPXpGf0l57PCX2lUY4fOGXaC97dDdmy_uUfTCeZBTG9BJ0oUTLyqusqHX928xAT3Pg2OijyRy_jqFXtGhgqOpvf8E-ABMfGZHJGqT-1TT8uiafrS113p302nnfd3mo84871bW6uM9bIUMMZmBUC4zwJG'
    },
    {
      id: 2,
      name: 'Roberto',
      location: 'Caracas',
      category: 'Educação',
      icon: 'school',
      catColor: 'text-blue-500',
      desc: 'Estudiante de ingeniería buscando libros técnicos para el semestre. Futuro brillante.',
      progress: 45,
      goal: 25,
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCrCYY6NPFmVLwGqW9QbaZc-MLihbn6BLYts6N3C01QU4TBV2lAAp6J9PczD7kcYiCmhlsAHyZHEqA12imVfb4tkSRJRLNfRV1Y_7ZlNPC1Kya6hfXbDmJoliRdJDx2qHN0jh8kHoPXg1d4Axe6OFJui58O7ds4ZSRV0EPvhevpfQkDdTl7jR1xsVqum77HaDJLUCQoQiyYaaT9itB0n_srckeBy3bv1vTykGsUkfchL7HYHK58o6I73W3qWUGh-FYC-ztqBJZ-9fxu'
    },
    {
      id: 3,
      name: 'Familia Perez',
      location: 'Valencia',
      category: 'Alimentação',
      icon: 'shopping_basket',
      catColor: 'text-orange-500',
      desc: 'Cesta básica mensal para família de 4 personas. Mercado local parceiro pronto para entrega.',
      progress: 15,
      goal: 40,
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA5heA8-DcZrjI05fkh1MIRe1mSNbs96tuK3se6zP2CoFU7Lb1094C4Cp6RENgxf7bSTfcK5ri_clcg_Yro06u_aXo6bf4SM72GAG1TJ-DRS-csZ-IOgTitH6Ud6BJvOIc2tW99xcRyyMFsdpEUBPX5Io0WRofPceb8ObEDUIb3gvMAQO3rox0b6k8pQDG8ZPjIgwYEWyfI1go4cUBtXLd3VwiLsBW3U6SNMfn2PA-otnXmsqAMh9pqVeZz_itLuQjr-IxQE8_upkkD'
    }
  ];

  return (
    <section className="py-24 bg-background-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 flex flex-col md:flex-row justify-between items-end gap-6">
        <div>
          <h2 className="text-3xl md:text-4xl font-black text-deep-blue mb-2">Panas en Espera</h2>
          <p className="text-slate-600">Histórias reais aguardando um herói.</p>
        </div>
        <div className="flex gap-2">
          <button className="w-10 h-10 rounded-full border border-slate-300 flex items-center justify-center hover:bg-white transition-colors text-slate-600">
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <button className="w-10 h-10 rounded-full border border-slate-300 flex items-center justify-center hover:bg-white transition-colors text-slate-600">
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
      </div>

      <div className="flex overflow-x-auto pb-8 gap-6 px-4 md:px-8 lg:px-[calc((100vw-1280px)/2)] snap-x snap-mandatory scrollbar-hide">
        {cases.map((item) => (
          <div key={item.id} className="min-w-[300px] md:min-w-[340px] bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden snap-center flex flex-col group hover:-translate-y-1 transition-transform duration-300">
            <div className="h-48 overflow-hidden relative">
              <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-bold text-deep-blue flex items-center gap-1">
                <span className={`material-symbols-outlined text-xs ${item.catColor}`}>{item.icon}</span>
                {item.category}
              </div>
            </div>
            <div className="p-6 flex flex-col flex-1">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-bold text-deep-blue">{item.name}</h3>
                <span className="text-xs text-slate-400 flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">location_on</span> {item.location}
                </span>
              </div>
              <p className="text-sm text-slate-500 mb-6 line-clamp-2">{item.desc}</p>
              <div className="mt-auto">
                <div className="flex justify-between text-xs font-bold mb-2">
                  <span className="text-slate-400">Arrecadado</span>
                  <span className="text-primary-dark">{item.progress}%</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2.5 mb-6 overflow-hidden">
                  <div className="bg-primary h-2.5 rounded-full" style={{ width: `${item.progress}%` }}></div>
                </div>
                <button className="w-full py-3 rounded-lg border-2 border-primary text-deep-blue font-bold hover:bg-primary transition-colors flex items-center justify-center gap-2 group-hover:bg-primary">
                  {item.category === 'Alimentação' ? 'Doar' : item.category === 'Educação' ? 'Ajudar' : 'Completar'} (${item.goal})
                </button>
              </div>
            </div>
          </div>
        ))}
        
        <div className="min-w-[300px] md:min-w-[340px] bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200 flex flex-col items-center justify-center snap-center hover:bg-slate-100 transition-colors cursor-pointer group">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-4 group-hover:scale-110 transition-transform">
            <span className="material-symbols-outlined text-3xl text-slate-400">add</span>
          </div>
          <p className="text-slate-500 font-medium">Ver mais 124 casos</p>
        </div>
      </div>
    </section>
  );
};

export default PanasCarousel;
