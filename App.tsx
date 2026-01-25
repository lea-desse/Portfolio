
import React from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Assistant from './components/Assistant';

const AppContent: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-green-100 selection:text-green-900">
      <Navbar />
      
      <main>
        <Hero />
        
        <Projects />
        
        <Skills />
        
        <Experience />
        
        <Contact />
      </main>

      <Assistant />
      
      <div className="fixed left-8 bottom-6 hidden lg:flex flex-col items-center gap-4 z-40">
        <div className="w-px h-24 bg-gradient-to-b from-transparent via-green-400 to-green-600"></div>
        <span className="[writing-mode:vertical-lr] text-[9px] uppercase tracking-[0.5em] text-green-600 font-black italic pr-2">{t('hero.scroll')}</span>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
};

export default App;
