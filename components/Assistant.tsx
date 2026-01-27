
import React, { useState, useRef, useEffect } from 'react';
import { askCVAssistant } from '../services/geminiService';
import { useLanguage } from '../context/LanguageContext';

const Assistant: React.FC = () => {
  const { t, language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [showBubble, setShowBubble] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'assistant', text: string}[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Show welcome bubble after 2 seconds
    const timer = setTimeout(() => {
      if (!isOpen) setShowBubble(true);
    }, 2000);

    // Hide bubble after 8 seconds
    const hideTimer = setTimeout(() => {
      setShowBubble(false);
    }, 10000);

    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
    };
  }, [isOpen]);

  useEffect(() => {
    setMessages([
      { role: 'assistant', text: t('assistant.welcome') }
    ]);
  }, [language]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    
    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    // Préparation de l'historique (on exclut le message de bienvenue initial pour ne pas perturber l'IA)
    const chatHistory = messages
      .filter(m => m.text !== t('assistant.welcome'))
      .map(m => ({
        role: m.role === 'user' ? ('user' as const) : ('model' as const),
        parts: [{ text: m.text }]
      }));

    const aiResponse = await askCVAssistant(userMsg, language, chatHistory);
    
    setMessages(prev => [...prev, { role: 'assistant', text: aiResponse }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      {isOpen ? (
        <div className="bg-slate-900 border-2 border-green-500/30 w-80 md:w-96 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-300">
          <div className="bg-slate-800 p-4 flex justify-between items-center border-b border-green-500/20">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="font-black text-[10px] text-white uppercase tracking-widest">{t('assistant.header')}</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white transition-colors">
              <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          
          <div ref={scrollRef} className="h-96 overflow-y-auto p-4 space-y-4 custom-scrollbar bg-slate-900/90 backdrop-blur-md">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-xl text-[11px] leading-relaxed font-bold ${
                  msg.role === 'user' 
                    ? 'bg-green-600 text-white shadow-lg' 
                    : 'bg-slate-800 text-green-400 border border-green-500/20'
                }`}>
                  {msg.role === 'user' ? `> ${msg.text}` : msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-slate-800 p-3 rounded-xl flex gap-1 items-center">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-bounce"></span>
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 bg-slate-800">
            <div className="flex gap-2">
              <input 
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder={t('assistant.placeholder')}
                className="flex-1 bg-slate-900 border border-green-500/20 rounded-lg px-4 py-2 text-[11px] text-white focus:outline-none focus:border-green-500 transition-colors font-bold"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="p-2 bg-green-600 hover:bg-green-500 text-white rounded-lg transition-all active:scale-95"
              >
                <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="relative group">
          {showBubble && (
            <div className="absolute bottom-20 right-0 w-64 bg-green-500 text-slate-950 p-4 rounded-2xl shadow-2xl animate-in slide-in-from-bottom-4 duration-500 cursor-pointer" onClick={() => setIsOpen(true)}>
              <div className="absolute -bottom-2 right-6 w-4 h-4 bg-green-500 rotate-45"></div>
              <p className="text-[11px] font-black leading-tight uppercase italic">
                {language === 'fr' 
                  ? "Besoin d'un renseignement ? Posez-moi vos questions sur le parcours de Léa !" 
                  : "Need info? Ask me anything about Léa's career!"}
              </p>
            </div>
          )}
          <button 
            onClick={() => {
              setIsOpen(true);
              setShowBubble(false);
            }}
            className="w-16 h-16 bg-slate-900 border-2 border-green-500 rounded-full flex items-center justify-center text-green-500 shadow-neon-strong transition-all hover:scale-110"
          >
            <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default Assistant;
