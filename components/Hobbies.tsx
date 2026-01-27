
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Hobbies: React.FC = () => {
  const { t } = useLanguage();

  const hobbyList = [
    {
      id: 'moto',
      title: t('hobbies.moto_title'),
      desc: t('hobbies.moto_desc'),
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      color: "bg-orange-500",
      image: "./moto.png"
    },
    {
      id: 'bivouac',
      title: t('hobbies.bivouac_title'),
      desc: t('hobbies.bivouac_desc'),
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 21h18M3 10l9-7 9 7v11H3V10z" />
        </svg>
      ),
      color: "bg-blue-500"
    },
    {
      id: 'maker',
      title: t('hobbies.maker_title'),
      desc: t('hobbies.maker_desc'),
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
      color: "bg-purple-500"
    }
  ];

  return (
    <section id="hobbies" className="py-32 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:pl-24 relative">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-black text-slate-900 mb-4 uppercase tracking-tighter italic">
            {t('hobbies.title')}
          </h2>
          <p className="text-slate-500 font-medium">{t('hobbies.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {hobbyList.map((hobby) => (
            <div key={hobby.id} className="group relative bg-white p-10 rounded-[2.5rem] border-2 border-slate-100 hover:border-green-500 transition-all duration-500 shadow-xl hover:shadow-2xl overflow-hidden">
              <div className={`absolute top-0 right-0 w-32 h-32 ${hobby.color} opacity-[0.03] rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700`}></div>
              
              <div className="relative mb-8 flex items-center justify-between">
                <div className={`w-16 h-16 ${hobby.color} text-white rounded-2xl flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform relative z-10`}>
                  {hobby.icon}
                </div>
                
                {hobby.image && (
                  <div className="w-24 h-24 rounded-2xl overflow-hidden border-2 border-slate-100 rotate-3 group-hover:rotate-0 transition-all duration-500 shadow-inner">
                    <img 
                      src={hobby.image} 
                      alt={hobby.title} 
                      className="w-full h-full object-cover grayscale brightness-110 contrast-125 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" 
                    />
                  </div>
                )}
              </div>
              
              <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase tracking-tight">{hobby.title}</h3>
              <p className="text-slate-500 leading-relaxed font-medium text-sm italic">
                {hobby.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
