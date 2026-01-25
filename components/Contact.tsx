import React, { useState } from 'react';
import { CV_DATA } from '../constants';
import { useLanguage } from '../context/LanguageContext';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mgokwryl", {
        method: "POST",
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <footer id="contact" className="py-32 bg-white relative border-t border-slate-100 overflow-hidden">
      {/* Background glow effects - softer for light mode */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-green-500/[0.03] rounded-full blur-[120px]"></div>
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-green-500/[0.03] rounded-full blur-[100px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:pl-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <div>
            <div className="inline-block px-4 py-1 mb-8 rounded-full bg-green-500/10 border border-green-500/20 text-green-600 text-[10px] font-black uppercase tracking-[0.4em]">
              Ready_To_Deploy
            </div>
            <h2 className="text-6xl md:text-7xl font-black mb-8 text-slate-900 leading-none uppercase italic pr-12 overflow-visible">
              {t('contact.title_first')} <br/>
              <span className="gradient-text italic pr-6 inline-block">{t('contact.title_second')}</span>
            </h2>
            <p className="text-slate-500 text-lg mb-12 max-w-sm font-medium leading-relaxed border-l-4 border-green-500 pl-6">
              {t('contact.subtitle')}
            </p>
            
            <div className="space-y-6">
              <a href={`mailto:${CV_DATA.email}`} className="flex items-center gap-6 p-6 rounded-3xl bg-white border border-slate-200 hover:border-green-500 transition-all group shadow-sm hover:shadow-xl">
                <div className="w-14 h-14 rounded-2xl bg-green-500 flex items-center justify-center text-slate-900 shadow-[0_0_20px_rgba(34,197,94,0.3)] transition-transform group-hover:scale-110">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[9px] text-green-600 font-black uppercase tracking-widest mb-1">Transmission Channel</p>
                  <p className="font-black text-slate-900 text-md tracking-tight">{CV_DATA.email}</p>
                </div>
              </a>
              
              <div className="flex gap-4">
                <a href={CV_DATA.socials.linkedin} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center p-6 rounded-3xl bg-white border border-slate-200 hover:border-green-500 transition-all font-black text-[10px] uppercase tracking-widest text-slate-900 hover:text-green-600 shadow-sm hover:shadow-xl">
                  LinkedIn_Profile
                </a>
                <a href={CV_DATA.socials.github} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center p-6 rounded-3xl bg-white border border-slate-200 hover:border-green-500 transition-all font-black text-[10px] uppercase tracking-widest text-slate-900 hover:text-green-600 shadow-sm hover:shadow-xl">
                  GitHub_Lab
                </a>
              </div>
            </div>
          </div>
          
          <div className="bg-slate-50 p-10 md:p-14 rounded-[3rem] border-2 border-slate-200 shadow-2xl relative overflow-hidden group">
            {/* Background design */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/5 rounded-full blur-3xl -mr-16 -mt-16"></div>
            
            <h3 className="text-3xl font-black mb-10 text-slate-900 tracking-tight uppercase italic pr-6 overflow-visible">{t('contact.form_title')}</h3>
            
            {status === 'success' ? (
              <div className="bg-green-500/10 border-2 border-green-500 rounded-2xl p-8 text-center animate-in fade-in zoom-in duration-500">
                <div className="w-16 h-16 bg-green-500 text-slate-900 rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(34,197,94,0.4)]">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <p className="text-slate-900 font-black uppercase tracking-widest mb-2">Message Transmitted</p>
                <p className="text-slate-500 text-xs font-medium">Léa vous répondra dans les plus brefs délais.</p>
                <button onClick={() => setStatus('idle')} className="mt-8 text-green-600 text-[10px] font-black uppercase tracking-widest hover:text-green-800 transition-colors">Envoyer un autre message</button>
              </div>
            ) : (
              <form className="space-y-8" onSubmit={handleSubmit}>
                <div className="relative">
                  <label className="block text-[9px] font-black text-slate-500 uppercase tracking-[0.2em] mb-3 ml-1">{t('contact.label_name')}</label>
                  <input 
                    required
                    name="name"
                    type="text" 
                    className="w-full bg-white border-2 border-slate-100 rounded-2xl px-6 py-5 focus:outline-none focus:border-green-500 transition-all font-black text-sm text-slate-900 placeholder-slate-300" 
                    placeholder={t('contact.placeholder_name')} 
                  />
                </div>
                <div className="relative">
                  <label className="block text-[9px] font-black text-slate-500 uppercase tracking-[0.2em] mb-3 ml-1">{t('contact.label_email')}</label>
                  <input 
                    required
                    name="email"
                    type="email" 
                    className="w-full bg-white border-2 border-slate-100 rounded-2xl px-6 py-5 focus:outline-none focus:border-green-500 transition-all font-black text-sm text-slate-900 placeholder-slate-300" 
                    placeholder={t('contact.placeholder_email')} 
                  />
                </div>
                <div className="relative">
                  <label className="block text-[9px] font-black text-slate-500 uppercase tracking-[0.2em] mb-3 ml-1">{t('contact.label_message')}</label>
                  <textarea 
                    required
                    name="message"
                    rows={4} 
                    className="w-full bg-white border-2 border-slate-100 rounded-2xl px-6 py-5 focus:outline-none focus:border-green-500 transition-all font-black text-sm text-slate-900 placeholder-slate-300" 
                    placeholder={t('contact.placeholder_message')}
                  ></textarea>
                </div>
                <button 
                  disabled={status === 'sending'}
                  type="submit" 
                  className="w-full py-6 bg-slate-900 hover:bg-slate-800 disabled:bg-slate-200 disabled:text-slate-400 text-white rounded-2xl font-black uppercase tracking-[0.2em] text-[11px] transition-all shadow-xl hover:shadow-2xl active:scale-95 flex items-center justify-center gap-3 group/btn"
                >
                  <span>{status === 'sending' ? 'Transmission...' : t('contact.send')}</span>
                  {status !== 'sending' && <svg className="w-5 h-5 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path></svg>}
                </button>
                {status === 'error' && <p className="text-red-500 text-[10px] font-black text-center uppercase tracking-widest">Erreur de transmission. Réessayez plus tard.</p>}
              </form>
            )}
          </div>
        </div>
        
        <div className="mt-40 pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-8 text-slate-400 text-[9px] font-black uppercase tracking-[0.4em]">
          <p>{t('contact.footer_copy')}</p>
          <div className="flex gap-12">
            <a href="#" className="hover:text-green-600 transition-colors flex items-center gap-2">
              <span className="w-1 h-1 bg-green-500 rounded-full"></span>
              Documentation
            </a>
            <a href="#" className="hover:text-green-600 transition-colors flex items-center gap-2">
              <span className="w-1 h-1 bg-green-500 rounded-full"></span>
              Build_v2.5.0
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;