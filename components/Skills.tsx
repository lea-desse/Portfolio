
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => (
            <div key={skill.name} className="bg-white p-8 rounded-2xl border-2 border-transparent hover:border-green-500 transition-all duration-300 group shadow-sm hover:shadow-xl">
              <div className="flex justify-between items-center mb-6">
                <span className="font-black text-lg text-slate-900 uppercase tracking-tighter">{skill.name}</span>
                <span className="text-green-500 text-xs font-black">{(skill.level.toString(16)).toUpperCase()}h</span>
              </div>
              
              <div className="relative h-3 bg-slate-100 rounded-full overflow-hidden">
                <div 
                  className="absolute top-0 left-0 h-full bg-green-500 rounded-full transition-all duration-1000 ease-out shadow-[0_0_10px_rgba(34,197,94,0.5)]"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              
              <div className="mt-4 flex justify-between items-center">
                <span className="text-[9px] font-black text-slate-300 uppercase tracking-widest">{skill.category}</span>
                <span className="text-[10px] font-black text-green-600">{skill.level}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
