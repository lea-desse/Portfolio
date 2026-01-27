
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Navbar: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-900/90 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center font-black text-slate-900 shadow-[0_0_20px_rgba(34,197,94,0.4)] rotate-3">LD</div>
            <span className="font-black text-xl hidden sm:block text-white tracking-tighter uppercase italic">Léa Desse</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-10">
            <a href="#about" className="text-slate-400 hover:text-green-400 transition-colors font-black text-[10px] uppercase tracking-[0.2em]">{t('nav.about')}</a>
            <a href="#projects" className="text-slate-400 hover:text-green-400 transition-colors font-black text-[10px] uppercase tracking-[0.2em]">{t('nav.projects')}</a>
            <a href="#skills" className="text-slate-400 hover:text-green-400 transition-colors font-black text-[10px] uppercase tracking-[0.2em]">{t('nav.skills')}</a>
            <a href="#experience" className="text-slate-400 hover:text-green-400 transition-colors font-black text-[10px] uppercase tracking-[0.2em]">{t('nav.experience')}</a>
            <a href="#hobbies" className="text-slate-400 hover:text-green-400 transition-colors font-black text-[10px] uppercase tracking-[0.2em]">{t('nav.hobbies')}</a>
            
            <div className="flex items-center gap-1 p-1 bg-slate-800 rounded-lg border border-slate-700">
              <button 
                onClick={() => setLanguage('fr')} 
                className={`px-3 py-1 text-[9px] font-black rounded-md transition-all ${language === 'fr' ? 'bg-green-500 text-slate-900' : 'text-slate-500 hover:text-white'}`}
              >
                FR
              </button>
              <button 
                onClick={() => setLanguage('en')} 
                className={`px-3 py-1 text-[9px] font-black rounded-md transition-all ${language === 'en' ? 'bg-green-500 text-slate-900' : 'text-slate-500 hover:text-white'}`}
              >
                EN
              </button>
            </div>

            <a href="#contact" className="px-6 py-3 bg-green-500 hover:bg-green-400 text-slate-900 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:scale-105 active:scale-95">{t('nav.contact')}</a>
          </div>

          <div className="md:hidden flex items-center gap-4">
             <button 
                onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')} 
                className="px-3 py-1 bg-slate-800 rounded-lg text-[10px] font-black text-green-500 border border-slate-700"
              >
                {language.toUpperCase()}
              </button>
            <button className="p-2 text-white bg-slate-800 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
