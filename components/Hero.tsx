
import React from 'react';
import { CV_DATA } from '../constants';
import { useLanguage } from '../context/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="relative pt-32 pb-20 overflow-hidden bg-white">
      {/* Grilles de fond tech */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#22c55e 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:pl-24 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-md border border-green-100 bg-green-50 text-green-600 text-[10px] font-black uppercase tracking-[0.2em]">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-ping"></span>
              {t('hero.tag')}
            </div>
            <h1 className="text-6xl md:text-9xl font-black mb-8 text-slate-900 tracking-tighter leading-none uppercase">
              {t('hero.title_first')} <br/><span className="gradient-text">{t('hero.title_second')}</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-xl leading-relaxed font-medium border-l-4 border-green-500 pl-6">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <a href="#projects" className="px-10 py-4 bg-slate-900 hover:bg-green-600 text-white rounded-xl font-bold transition-all shadow-xl hover:shadow-green-200 active:scale-95 text-xs uppercase tracking-widest flex items-center gap-3">
                <span>{t('hero.cta_primary')}</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </a>
              <a href="#contact" className="px-10 py-4 bg-white border-2 border-slate-900 hover:bg-slate-50 text-slate-900 rounded-xl font-bold transition-all text-xs uppercase tracking-widest text-center">
                {t('hero.cta_secondary')}
              </a>
              <a 
                href={`./${CV_DATA.cv_file}`} 
                download
                className="px-10 py-4 bg-green-500 hover:bg-green-400 text-slate-900 rounded-xl font-black transition-all text-xs uppercase tracking-widest flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                {t('hero.cta_cv')}
              </a>
            </div>
          </div>
          
          <div className="flex-shrink-0 w-80 h-80 md:w-[450px] md:h-[450px] relative">
            <div className="absolute inset-0 border-2 border-dashed border-green-200 rounded-full animate-[spin_20s_linear_infinite]"></div>
            
            <div className="absolute inset-4 bg-white rounded-3xl shadow-2xl overflow-hidden group">
            <img 
              src="./profile.jpg" 
              alt="Léa Desse" 
              className="w-full h-full object-cover"
            />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/40 to-transparent"></div>
            </div>

            {/* Badge OPEN TO WORK style */}
            <div className="absolute -bottom-6 -right-6 bg-green-500 text-slate-900 px-6 py-4 rounded-2xl shadow-[0_20px_50px_rgba(34,197,94,0.4)] z-20 font-black text-xs uppercase tracking-[0.2em] border-4 border-white rotate-3 flex flex-col items-center">
              <div className="flex items-center gap-2 mb-0.5">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                <span className="text-white">{t('hero.status')}</span>
              </div>
              <span className="text-[8px] text-green-100/80 tracking-widest">#OPENTOWORK</span>
            </div>
            
            <div className="absolute top-10 -left-10 bg-slate-900 text-white p-4 rounded-xl shadow-xl z-20 font-mono text-[9px] -rotate-12 border border-green-400/30">
              <div className="text-green-400">root@lea_desse:~$</div>
              <div>whoami --pro</div>
            </div>

            <div className="absolute -top-4 right-10 bg-white/90 backdrop-blur px-3 py-1 rounded border border-slate-200 text-[8px] font-bold text-slate-400 z-20">
              43.6000° N, 7.0167° E
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
