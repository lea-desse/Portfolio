
import React, { useState } from 'react';
import { SKILLS } from '../constants';
import { Skill } from '../types';
import { useLanguage } from '../context/LanguageContext';

const Skills: React.FC = () => {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<Skill['category'] | 'All'>('All');
  
  const categories: (Skill['category'] | 'All')[] = ['All', 'Hardware', 'Software', 'Protocols', 'Tools'];
  
  const filteredSkills = filter === 'All' 
    ? SKILLS 
    : SKILLS.filter(s => s.category === filter);

  return (
    <section id="skills" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:pl-24">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-5xl font-black mb-4 text-slate-900 tracking-tighter uppercase">{t('skills.title')}</h2>
            <p className="text-slate-500 font-medium">{t('skills.subtitle')}</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all border-2 ${
                  filter === cat ? 'bg-green-500 border-green-500 text-white shadow-lg shadow-green-100' : 'bg-white border-slate-200 text-slate-400 hover:border-green-300'
                }`}
              >
                {t(`skills.categories.${cat}`)}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSkills.map((skill) => (
            <div key={skill.name} className="group relative bg-white p-6 rounded-xl border border-slate-200 hover:border-green-500 transition-all duration-300 shadow-sm hover:shadow-md overflow-hidden">
              {/* Contenu de base */}
              <div className="transition-all duration-300 group-hover:opacity-0 group-hover:-translate-y-4">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-black text-sm text-slate-900 uppercase tracking-tight">{skill.name}</span>
                  <span className="text-green-500 text-[10px] font-black uppercase">{skill.category}</span>
                </div>
                
                <div className="relative h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div 
                    className="absolute top-0 left-0 h-full bg-green-500 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>

              {/* Overlay Justification au survol */}
              <div className="absolute inset-0 bg-slate-900 p-6 flex flex-col justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
                <p className="text-green-500 text-[9px] font-black uppercase tracking-[0.2em] mb-2">Justification_Log</p>
                <p className="text-white text-xs font-medium leading-relaxed italic">
                  "{skill.justification}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
