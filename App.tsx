
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ImpactPage from './pages/ImpactPage';
import FAQsPage from './pages/FAQsPage';
import PartnersPage from './pages/PartnersPage';
import TransparencyPage from './pages/TransparencyPage';
import LoginPage from './pages/LoginPage';

export type Page = 'home' | 'about' | 'impact' | 'faq' | 'partners' | 'transparency' | 'login';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <HomePage onNavigate={setCurrentPage} />;
      case 'about': return <AboutPage />;
      case 'impact': return <ImpactPage />;
      case 'faq': return <FAQsPage />;
      case 'partners': return <PartnersPage />;
      case 'transparency': return <TransparencyPage />;
      case 'login': return <LoginPage onLoginSuccess={() => setCurrentPage('home')} />;
      default: return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-background-light font-sans text-deep-blue overflow-x-hidden antialiased flex flex-col">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      {currentPage !== 'login' && <Footer onNavigate={setCurrentPage} />}
    </div>
  );
};

export default App;
