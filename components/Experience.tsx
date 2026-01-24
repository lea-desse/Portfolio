
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Experience: React.FC = () => {
  const { t } = useLanguage();
  const tExperiences = t('data.experiences');

  return (
    <section id="experience" className="py-32 bg-slate-950 relative overflow-hidden">
      {/* Background decoration: Neon grid or circuit-like lines */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#22c55e 1px, transparent 1px), linear-gradient(90deg, #22c55e 1px, transparent 1px)', backgroundSize: '50px 50px' }}>
      </div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24">
          <div className="inline-block px-4 py-1 mb-4 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-[10px] font-black uppercase tracking-[0.4em]">
            History_Archive
          </div>
          <h2 className="text-5xl md:text-7xl font-black mb-6 text-white tracking-tighter uppercase italic">
            {t('experience.title')}
          </h2>
          <p className="text-slate-400 font-medium max-w-xl mx-auto border-b-2 border-green-500/30 pb-6">
            {t('experience.subtitle')}
          </p>
        </div>

        <div className="relative">
          {/* Centralized electrified line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-1 bg-slate-800 rounded-full">
            <div className="absolute inset-0 bg-green-500 shadow-[0_0_15px_rgba(34,197,94,0.6)] animate-pulse"></div>
          </div>

          <div className="space-y-20">
            {tExperiences.map((exp: any, idx: number) => (
              <div key={idx} className={`relative flex flex-col md:flex-row items-center gap-8 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Connector Dot */}
                <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-6 h-6 rounded-full bg-slate-900 border-4 border-green-500 shadow-[0_0_20px_rgba(34,197,94,0.8)] z-20 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-white rounded-full animate-ping"></div>
                </div>

                {/* Content Card */}
                <div className="w-full md:w-[45%] pl-12 md:pl-0">
                  <div className="bg-slate-900/80 backdrop-blur-xl p-8 rounded-[2rem] border-2 border-slate-800 hover:border-green-500 transition-all duration-500 group shadow-2xl relative">
                    {/* Corner accents */}
                    <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-green-500 rounded-tl-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-green-500 rounded-br-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    
                    <div className="flex flex-col mb-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-black text-green-500 uppercase tracking-widest bg-green-500/10 px-2 py-1 rounded">
                          0x{idx.toString(16).toUpperCase()}
                        </span>
                        <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">
                          {exp.period}
                        </span>
                      </div>
                      <h3 className="text-2xl font-black text-white tracking-tight uppercase group-hover:text-green-400 transition-colors">
                        {exp.role}
                      </h3>
                      <p className="text-green-500/80 font-bold uppercase tracking-[0.2em] text-[11px] mt-1">
                        @ {exp.company}
                      </p>
                    </div>
                    
                    <ul className="space-y-4">
                      {exp.description.map((item: string, i: number) => (
                        <li key={i} className="text-slate-400 text-xs leading-relaxed flex gap-3">
                          <span className="text-green-500 font-mono font-bold">[{i}]</span>
                          <span className="font-medium group-hover:text-slate-300 transition-colors">{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Footer decoration */}
                    <div className="mt-8 pt-4 border-t border-slate-800 flex justify-between items-center">
                      <div className="flex gap-1">
                        <div className="w-1 h-1 bg-green-500 rounded-full"></div>
                        <div className="w-1 h-1 bg-green-500 rounded-full opacity-50"></div>
                        <div className="w-1 h-1 bg-green-500 rounded-full opacity-25"></div>
                      </div>
                      <span className="text-[8px] font-mono text-slate-600 uppercase">Status: Success</span>
                    </div>
                  </div>
                </div>

                {/* Empty space for alignment on desktop */}
                <div className="hidden md:block w-[45%]"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
