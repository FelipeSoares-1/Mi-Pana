
import React, { useState } from 'react';

const FAQsPage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "¿Como vocês garantem que o dinheiro chega à pessoa certa?",
      a: "Utilizamos um sistema de 'Voucher Auditado'. O pagamento não é enviado em dinheiro vivo, mas sim como um crédito direto no sistema do comerciante local parceiro. O recebedor apresenta um código QR único, e o comerciante só libera os itens após nossa IA validar a foto da entrega em tempo real."
    },
    {
      q: "Quais países vocês atendem atualmente?",
      a: "No momento, nosso foco principal é a Venezuela, com operações em Caracas, Maracaibo, Valencia e Barquisimeto. Estamos em fase de expansão para Colômbia e Argentina para apoiar comunidades de migrantes."
    },
    {
      q: "Existem taxas ocultas?",
      a: "Nenhuma. A Mi Pana não retém porcentagem das doações humanitárias. Operamos através de subsídios de parceiros tecnológicos e doações voluntárias diretas para a plataforma (opcionais no checkout)."
    },
    {
      q: "¿Qualquer pessoa pode se cadastrar como 'Pana' para receber ajuda?",
      a: "Não. Para manter a integridade do sistema, os beneficiários passam por uma auditoria social realizada por nossa IA e validadores locais, garantindo que a ajuda chegue a quem realmente enfrenta insegurança alimentar ou médica."
    },
    {
      q: "¿Como posso me tornar um parceiro logístico ou comercial?",
      a: "Comerciantes locais podem se inscrever através da aba 'Negócios'. Exigimos documentação legal e capacidade de emitir comprovantes digitais integrados ao nosso app."
    }
  ];

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 py-20 bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider mb-4 inline-block">Centro de Ajuda</span>
          <h1 className="text-4xl md:text-5xl font-black text-deep-blue">Preguntas Frequentes</h1>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border rounded-2xl transition-all duration-300 ${openIndex === index ? 'border-primary bg-yellow-50/30' : 'border-slate-100 hover:border-slate-200'}`}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left p-6 flex justify-between items-center gap-4"
              >
                <span className="font-bold text-deep-blue text-lg">{faq.q}</span>
                <span className={`material-symbols-outlined transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-primary' : 'text-slate-400'}`}>
                  expand_more
                </span>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-100/50 mt-2">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 p-8 bg-background-light rounded-3xl border border-slate-200 text-center">
          <h3 className="text-xl font-bold text-deep-blue mb-2">Ainda tem dúvidas?</h3>
          <p className="text-slate-500 mb-6">Nossa equipe de suporte humanitário está disponível 24/7 para te ajudar.</p>
          <button className="bg-white border border-slate-200 hover:border-primary hover:text-primary text-deep-blue font-bold py-3 px-8 rounded-xl shadow-sm transition-all flex items-center gap-2 mx-auto">
            <span className="material-symbols-outlined">chat</span>
            Falar com Suporte
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQsPage;
