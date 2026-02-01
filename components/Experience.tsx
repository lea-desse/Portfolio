import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

const ExperienceModal: React.FC<{ exp: any, onClose: () => void }> = ({ exp, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'unset'; };
  }, []);

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-6 md:p-10">
      <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-xl" onClick={onClose}></div>
      <div className="relative bg-slate-900 border-2 border-slate-800 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[2rem] shadow-2xl custom-scrollbar animate-in zoom-in-95 duration-300 p-8 md:p-12">
        <button onClick={onClose} className="absolute top-6 right-6 w-10 h-10 bg-slate-800 hover:bg-green-500 text-white rounded-full flex items-center justify-center transition-all">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>

        <div className="flex items-center gap-6 mb-10">
          {exp.logo && <img src={exp.logo} alt={exp.company} className="w-20 h-20 object-contain bg-white rounded-2xl p-2" />}
          <div>
            <h2 className="text-3xl font-black text-white uppercase italic">{exp.details?.title || exp.role}</h2>
            <p className="text-green-500 font-bold uppercase tracking-widest">@ {exp.company}</p>
          </div>
        </div>

        <div className="space-y-8">
          <p className="text-slate-300 leading-relaxed text-lg font-medium italic border-l-4 border-green-500 pl-6">
            {exp.details?.fullDescription || exp.description.join(' ')}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {exp.details?.videoUrl && (
              <div className="rounded-3xl overflow-hidden border-2 border-slate-800 bg-black">
                <video src={exp.details.videoUrl} controls className="w-full aspect-video h-full object-cover" />
              </div>
            )}
            {exp.details?.imageUrl && (
              <div className="rounded-3xl overflow-hidden border-2 border-slate-800 bg-black">
                <img src={exp.details.imageUrl} className="w-full h-full object-cover" alt="Projet demo" />
              </div>
            )}
          </div>

          {exp.details?.technologies && (
            <div>
              <h3 className="text-[10px] font-black text-white uppercase tracking-[0.3em] mb-4">Technologies_Utilisées</h3>
              <div className="flex flex-wrap gap-2">
                {exp.details.technologies.map((tech: string) => (
                  <span key={tech} className="px-3 py-1 bg-slate-800 border border-slate-700 text-slate-400 text-[10px] font-bold rounded-lg uppercase">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Experience: React.FC = () => {
  const { t } = useLanguage();
  const tExperiences = t('data.experiences');
  const [selectedExp, setSelectedExp] = useState<number | null>(null);

  return (
    <section id="experience" className="py-32 bg-slate-900 relative overflow-hidden">
      {/* Background decoration - Uniform with Projects */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#22c55e 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 lg:pl-24 relative z-10">
        <div className="text-center mb-24">
          <div className="inline-block px-4 py-1 mb-4 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-[10px] font-black uppercase tracking-[0.4em]">
            History_Archive
          </div>
          <h2 className="text-5xl md:text-7xl font-black mb-6 text-white tracking-tighter uppercase italic">
            {t('experience.title')}
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-1 bg-slate-800 rounded-full">
            <div className="absolute inset-0 bg-green-500 shadow-[0_0_15px_rgba(34,197,94,0.6)] animate-pulse"></div>
          </div>

          <div className="space-y-20">
            {tExperiences.map((exp: any, idx: number) => (
              <div key={idx} className={`relative flex flex-col md:flex-row md:items-center gap-8 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Bullet point fixed to the line */}
                <div className="absolute left-[1.125rem] md:left-1/2 -translate-x-1/2 top-10 md:top-1/2 md:-translate-y-1/2 w-6 h-6 rounded-full bg-slate-900 border-4 border-green-500 shadow-[0_0_20px_rgba(34,197,94,0.8)] z-20 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-white rounded-full animate-ping"></div>
                </div>

                <div className="w-full md:w-[45%] pl-12 md:pl-0">
                  <div className="bg-slate-800/50 backdrop-blur-xl p-8 rounded-[2rem] border-2 border-slate-700 hover:border-green-500 transition-all duration-500 group relative shadow-2xl">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex flex-col">
                        <span className="text-[10px] font-black text-slate-500 uppercase mb-1">{exp.period}</span>
                        <h3 className="text-2xl font-black text-white tracking-tight uppercase group-hover:text-green-400 transition-colors">{exp.role}</h3>
                        <p className="text-green-500/80 font-bold uppercase tracking-widest text-[11px]">@ {exp.company}</p>
                      </div>
                      {exp.logo && <img src={exp.logo} alt={exp.company} className="w-12 h-12 object-contain bg-white rounded-xl p-1.5" />}
                    </div>
                    
                    <ul className="space-y-3 mb-8">
                      {exp.description.slice(0, 2).map((item: string, i: number) => (
                        <li key={i} className="text-slate-400 text-xs leading-relaxed flex gap-3">
                          <span className="text-green-500 font-mono font-bold">[{i}]</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {exp.details && (
                      <button 
                        onClick={() => setSelectedExp(idx)}
                        className="text-[10px] font-black text-green-500 uppercase tracking-widest flex items-center gap-2 hover:text-white transition-colors group/btn"
                      >
                        En savoir plus
                        <svg className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                      </button>
                    )}
                  </div>
                </div>
                <div className="hidden md:block w-[45%]"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedExp !== null && (
        <ExperienceModal 
          exp={tExperiences[selectedExp]} 
          onClose={() => setSelectedExp(null)} 
        />
      )}
    </section>
  );
};

export default Experience;