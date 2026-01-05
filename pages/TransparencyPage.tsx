
import React from 'react';

const TransparencyPage: React.FC = () => {
    return (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 bg-white min-h-screen">
            <section className="py-20 bg-slate-50 border-b border-slate-100">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <div className="inline-block bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider mb-6">
                        Radical Transparency
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black text-deep-blue mb-6">
                        Contas Abertas, <br /><span className="text-primary">Confiança Total.</span>
                    </h1>
                    <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
                        Não tocamos no dinheiro da doação. Nossa receita vem exclusivamente da taxa de serviço paga pelo doador. Veja para onde vai cada centavo.
                    </p>
                </div>
            </section>

            <section className="py-20 px-4">
                <div className="max-w-5xl mx-auto">
                    {/* Visual Graph Card */}
                    <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden relative">
                        <div className="p-8 md:p-12">
                            <h3 className="text-2xl font-bold text-deep-blue mb-8">Fluxo de uma Doação de $100</h3>

                            <div className="flex flex-col md:flex-row gap-4 items-stretch h-full md:h-32 mb-12">
                                {/* 100% Bar */}
                                <div className="flex-[100] bg-green-500 rounded-2xl flex items-center justify-center p-4 relative group hover:bg-green-600 transition-colors cursor-default">
                                    <div className="text-center text-white">
                                        <span className="block text-3xl md:text-4xl font-black mb-1">$100</span>
                                        <span className="text-sm font-medium opacity-90 uppercase tracking-widest">Produto (100%)</span>
                                        <div className="absolute top-full mt-4 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs p-2 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity w-64 pointer-events-none z-10">
                                            Vai direto para o fornecedor local que entrega o produto à família.
                                        </div>
                                    </div>
                                </div>

                                {/* Plus Sign */}
                                <div className="flex-none flex items-center justify-center text-slate-300">
                                    <span className="material-symbols-outlined text-4xl">add</span>
                                </div>

                                {/* Fee Bar */}
                                <div className="flex-[15] bg-blue-500 rounded-2xl flex items-center justify-center p-4 relative group hover:bg-blue-600 transition-colors cursor-default min-w-[120px]">
                                    <div className="text-center text-white">
                                        <span className="block text-3xl md:text-4xl font-black mb-1">$8</span>
                                        <span className="text-sm font-medium opacity-90 uppercase tracking-widest">Taxa</span>
                                        <div className="absolute top-full mt-4 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs p-2 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity w-64 pointer-events-none z-10">
                                            Cobre taxas bancárias (Stripe), servidores e auditoria por IA.
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 pt-8 border-t border-slate-100">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 flex-shrink-0">
                                        <span className="material-symbols-outlined text-2xl">shopping_basket</span>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg text-deep-blue">Impacto Real</h4>
                                        <p className="text-slate-500 text-sm">O valor do item (ex: Insulina) é preservado. Nós negociamos descontos com fornecedores para maximizar o poder de compra.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">
                                        <span className="material-symbols-outlined text-2xl">security</span>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg text-deep-blue">Taxa de Sustentabilidade</h4>
                                        <p className="text-slate-500 text-sm">A taxa adicional é opcional para tip, mas obrigatória para cobrir custos de transação e tecnologia.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Disclaimer Footer */}
                        <div className="bg-slate-50 p-6 text-center border-t border-slate-100">
                            <p className="text-slate-500 text-sm">
                                Somos uma empresa de tecnologia social, auditada independentemente. Nossos relatórios são públicos trimestralmente.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TransparencyPage;
