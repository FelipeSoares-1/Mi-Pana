
import React from 'react';
import { Page } from '../App';

interface HeaderProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const navItems: { label: string; value: Page }[] = [
    { label: 'Sobre', value: 'about' },
    { label: 'Impacto', value: 'impact' },
    { label: 'FAQs', value: 'faq' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full glass-panel border-b border-slate-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div 
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2 cursor-pointer group"
          >
            <div className="text-secondary transition-transform duration-300 group-hover:scale-110">
              <span className="material-symbols-outlined text-3xl">diversity_1</span>
            </div>
            <span className="text-deep-blue text-xl font-bold tracking-tight">Mi Pana</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button 
                key={item.value}
                onClick={() => onNavigate(item.value)}
                className={`text-sm font-medium transition-colors ${
                  currentPage === item.value ? 'text-blue-600' : 'text-slate-600 hover:text-deep-blue'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button className="bg-primary hover:bg-yellow-400 text-deep-blue text-sm font-bold py-2.5 px-6 rounded-full transition-all shadow-sm hover:shadow-md active:scale-95">
              Juntar-se
            </button>
          </nav>

          <div className="md:hidden flex items-center">
            <button className="text-deep-blue p-2">
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
