
import React, { useState } from 'react';
import { supabase } from '../lib/supabase';

interface LoginPageProps {
    onLoginSuccess: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLoginSuccess }) => {
    const [isLogin, setIsLogin] = useState(true);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [message, setMessage] = useState<string | null>(null);

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        fullName: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleAuth = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setMessage(null);

        try {
            if (isLogin) {
                const { error } = await supabase.auth.signInWithPassword({
                    email: formData.email,
                    password: formData.password,
                });
                if (error) throw error;
                onLoginSuccess();
            } else {
                const { error } = await supabase.auth.signUp({
                    email: formData.email,
                    password: formData.password,
                    options: {
                        data: {
                            full_name: formData.fullName,
                        },
                    },
                });
                if (error) throw error;
                setMessage('Cadastro realizado! Verifique seu email para confirmar.');
                setIsLogin(true);
            }
        } catch (err: any) {
            setError(err.message || 'Ocorreu um erro.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 animate-in fade-in zoom-in-95 duration-500">
            <div className="bg-white max-w-md w-full rounded-3xl shadow-xl border border-slate-100 overflow-hidden relative">
                <div className="p-8 md:p-10">
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-black text-deep-blue mb-2">
                            {isLogin ? 'Bem-vindo de volta' : 'Crie sua conta'}
                        </h1>
                        <p className="text-slate-500">
                            {isLogin ? 'Acesse sua conta para continuar' : 'Junte-se à rede de ajuda humanitária'}
                        </p>
                    </div>

                    {error && (
                        <div className="bg-red-50 text-red-600 p-4 rounded-xl text-sm mb-6 flex items-center gap-2">
                            <span className="material-symbols-outlined text-lg">error</span>
                            {error}
                        </div>
                    )}

                    {message && (
                        <div className="bg-green-50 text-green-600 p-4 rounded-xl text-sm mb-6 flex items-center gap-2">
                            <span className="material-symbols-outlined text-lg">check_circle</span>
                            {message}
                        </div>
                    )}

                    <form onSubmit={handleAuth} className="space-y-5">
                        {!isLogin && (
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2">Nome Completo</label>
                                <input
                                    type="text"
                                    name="fullName"
                                    placeholder="Seu nome"
                                    required={!isLogin}
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all font-medium"
                                />
                            </div>
                        )}

                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-2">Email</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="seu@email.com"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all font-medium"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-2">Senha</label>
                            <input
                                type="password"
                                name="password"
                                placeholder="••••••••"
                                required
                                value={formData.password}
                                onChange={handleChange}
                                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all font-medium"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-primary hover:bg-yellow-400 text-deep-blue font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-yellow-400/20 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {loading ? 'Carregando...' : (isLogin ? 'Entrar' : 'Criar Conta')}
                        </button>
                    </form>

                    <div className="mt-8 text-center">
                        <p className="text-slate-500 text-sm">
                            {isLogin ? 'Não tem uma conta?' : 'Já tem uma conta?'}
                            <button
                                onClick={() => setIsLogin(!isLogin)}
                                className="text-deep-blue font-bold ml-1 hover:underline"
                            >
                                {isLogin ? 'Cadastre-se' : 'Faça Login'}
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
