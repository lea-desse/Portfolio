
import React, { useState, useEffect } from 'react';
import { PROJECTS_BASE } from '../constants';
import { useLanguage } from '../context/LanguageContext';

const ProjectModal: React.FC<{ project: any, tData: any, onClose: () => void }> = ({ project, tData, onClose }) => {
  const [activeMedia, setActiveMedia] = useState(0);
  const mediaList = project.gallery || [project.videoUrl || project.imageUrl];

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'unset'; };
  }, []);

  const renderMedia = (url: string) => {
    const isVideo = url.endsWith('.mp4') || url.endsWith('.webm') || url.endsWith('.mov');
    if (isVideo) {
      return <video src={url} autoPlay loop muted controls className="w-full h-full object-contain bg-black" />;
    }
    return <img src={url} alt={tData.title} className="w-full h-full object-contain bg-slate-950" />;
  };

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-6 md:p-10">
      <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-xl" onClick={onClose}></div>
      
      <div className="relative bg-slate-900 border-2 border-slate-800 w-full max-w-6xl max-h-[90vh] overflow-y-auto rounded-[2rem] shadow-2xl custom-scrollbar animate-in zoom-in-95 duration-300 flex flex-col lg:flex-row">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-30 w-10 h-10 bg-slate-800/80 backdrop-blur hover:bg-green-500 text-white hover:text-slate-900 rounded-full flex items-center justify-center transition-all"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>

        {/* Media Section */}
        <div className="lg:w-3/5 bg-slate-950 flex flex-col relative border-r border-slate-800">
          <div className="flex-1 flex items-center justify-center overflow-hidden min-h-[300px] lg:min-h-[500px]">
            {renderMedia(mediaList[activeMedia])}
          </div>
          
          {/* Thumbnails */}
          {mediaList.length > 1 && (
            <div className="p-4 bg-slate-900/50 backdrop-blur flex gap-2 overflow-x-auto custom-scrollbar">
              {mediaList.map((url: string, i: number) => (
                <button 
                  key={i} 
                  onClick={() => setActiveMedia(i)}
                  className={`flex-shrink-0 w-20 h-14 rounded-lg overflow-hidden border-2 transition-all ${activeMedia === i ? 'border-green-500 scale-105' : 'border-transparent opacity-50 hover:opacity-100'}`}
                >
                  {url.endsWith('.mp4') || url.endsWith('.webm') ? (
                    <div className="w-full h-full bg-slate-800 flex items-center justify-center">
                      <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                    </div>
                  ) : (
                    <img src={url} className="w-full h-full object-cover" />
                  )}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="lg:w-2/5 p-8 md:p-12 overflow-y-auto">
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 bg-green-500/10 border border-green-500/20 text-green-500 text-[10px] font-black uppercase tracking-widest rounded-full">{tData.category}</span>
          </div>
          
          <h2 className="text-4xl font-black text-white mb-6 uppercase tracking-tight italic">{tData.title}</h2>
          
          <p className="text-slate-400 leading-relaxed mb-10 font-medium italic border-l-4 border-green-500 pl-6">
            {tData.details?.fullDescription || tData.description}
          </p>

          {tData.details?.features && (
            <div className="mb-10">
              <h3 className="text-xs font-black text-white uppercase tracking-[0.3em] mb-6 flex items-center gap-3">
                <span className="w-8 h-px bg-green-500"></span>
                Points_Clés
              </h3>
              <ul className="grid grid-cols-1 gap-4">
                {tData.details.features.map((feature: string, i: number) => (
                  <li key={i} className="flex items-start gap-3 text-slate-400 text-sm">
                    <span className="text-green-500 font-mono mt-1">0{i+1}</span>
                    <span className="font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {tData.details?.technologies && (
            <div>
              <h3 className="text-xs font-black text-white uppercase tracking-[0.3em] mb-6 flex items-center gap-3">
                <span className="w-8 h-px bg-green-500"></span>
                Stack_Technique
              </h3>
              <div className="flex flex-wrap gap-2">
                {tData.details.technologies.map((tech: string) => (
                  <span key={tech} className="px-3 py-1.5 bg-slate-800 border border-slate-700 text-slate-300 text-[10px] font-bold rounded-lg uppercase tracking-wider">
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

const ProjectCard: React.FC<{ project: any, tData: any, onOpen: () => void }> = ({ project, tData, onOpen }) => {
  const { t } = useLanguage();
  const isMediaReady = project.imageUrl && !project.imageUrl.includes('Coming_Soon') && !project.imageUrl.includes('placeholder'); 

  return (
    <div 
      onClick={onOpen}
      className="bg-slate-800/50 rounded-3xl overflow-hidden group h-full flex flex-col transition-all duration-500 hover:scale-[1.02] border-2 border-slate-700 hover:border-green-500 shadow-2xl cursor-pointer"
    >
      <div className="relative h-72 overflow-hidden bg-slate-950 flex items-center justify-center">
        {isMediaReady ? (
          <img 
            src={project.imageUrl} 
            alt={tData.title} 
            className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 opacity-80 group-hover:opacity-100"
          />
        ) : (
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12 border-2 border-green-500/20 rounded-full flex items-center justify-center animate-pulse">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            </div>
            <span className="text-[10px] font-black text-green-500/50 uppercase tracking-[0.3em]">{t('projects.details')}...</span>
            <span className="text-[8px] text-slate-700 font-mono">Coming_Soon.exe</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
        <div className="absolute top-4 left-4 flex gap-2">
          {project.tags.map((tag: string) => (
            <span key={tag} className="px-2 py-1 bg-green-500/90 text-white text-[8px] font-black rounded uppercase tracking-tighter backdrop-blur-sm">
              {tag}
            </span>
          ))}
        </div>
        
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-green-500/10 backdrop-blur-[2px]">
            <div className="px-6 py-3 bg-green-500 text-slate-900 rounded-full font-black text-[10px] uppercase tracking-widest shadow-xl scale-90 group-hover:scale-100 transition-transform">
                Détails_Projet
            </div>
        </div>
      </div>
      <div className="p-8 flex flex-col flex-1">
        <h3 className="text-2xl font-black mb-4 text-white uppercase tracking-tight leading-tight group-hover:text-green-400 transition-colors">{tData.title}</h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-1 font-medium">
          {tData.description}
        </p>
        <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-800">
          <span className="text-[10px] text-green-500 font-black uppercase tracking-widest">{tData.category}</span>
          <span className="w-8 h-8 rounded-full border border-slate-700 flex items-center justify-center text-slate-500 group-hover:border-green-500 group-hover:text-green-500 transition-all">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
          </span>
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const { t } = useLanguage();
  const tProjects = t('data.projects');
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#22c55e 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:pl-24 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <h2 className="text-6xl font-black mb-4 text-white tracking-tighter uppercase">{t('projects.title')}</h2>
            <div className="w-24 h-2 bg-green-500 mb-6"></div>
            <p className="text-slate-400 font-medium max-w-xl">
              {t('projects.subtitle')}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PROJECTS_BASE.map((project, idx) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              tData={tProjects[idx]} 
              onOpen={() => setSelectedProject(idx)}
            />
          ))}
        </div>
      </div>

      {selectedProject !== null && (
        <ProjectModal 
          project={PROJECTS_BASE[selectedProject]} 
          tData={tProjects[selectedProject]} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </section>
  );
};

export default Projects;
