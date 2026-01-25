
import React, { useState } from 'react';
import { PROJECTS_BASE } from '../constants';
import { useLanguage } from '../context/LanguageContext';

const ProjectCard: React.FC<{ project: any, tData: any }> = ({ project, tData }) => {
  const [showVideo, setShowVideo] = useState(false);
  const { t } = useLanguage();

  const isMediaReady = project.imageUrl && !project.imageUrl.includes('projet');

  return (
    <div className="bg-slate-800/50 rounded-3xl overflow-hidden group h-full flex flex-col transition-all duration-500 hover:scale-[1.02] border-2 border-slate-700 hover:border-green-500 shadow-2xl">
      <div className="relative h-72 overflow-hidden bg-slate-950 flex items-center justify-center">
        {isMediaReady ? (
          <>
            {project.videoUrl && showVideo ? (
              <video 
                src={project.videoUrl} 
                autoPlay 
                loop 
                muted 
                controls
                className="w-full h-full object-cover"
              />
            ) : (
              <img 
                src={project.imageUrl} 
                alt={tData.title} 
                className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 opacity-80 group-hover:opacity-100"
              />
            )}
            {!showVideo && project.videoUrl && (
                <button 
                  onClick={() => setShowVideo(true)}
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40"
                >
                   <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center shadow-neon animate-pulse">
                    <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                   </div>
                </button>
            )}
          </>
        ) : (
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12 border-2 border-green-500/20 rounded-full flex items-center justify-center animate-pulse">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            </div>
            <span className="text-[10px] font-black text-green-500/50 uppercase tracking-[0.3em]">{t('projects.details')}...</span>
            <span className="text-[8px] text-slate-700 font-mono">Coming_Soon.exe</span>
          </div>
        )}
        <div className="absolute top-4 left-4 flex gap-2">
          {project.tags.map((tag: string) => (
            <span key={tag} className="px-2 py-1 bg-green-500/90 text-white text-[8px] font-black rounded uppercase tracking-tighter backdrop-blur-sm">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="p-8 flex flex-col flex-1">
        <h3 className="text-2xl font-black mb-4 text-white uppercase tracking-tight leading-tight">{tData.title}</h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-1 font-medium">
          {tData.description}
        </p>
        <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-800">
          <span className="text-[10px] text-green-500 font-black uppercase tracking-widest">{tData.category}</span>
          <button className="text-white text-[10px] font-black uppercase tracking-widest flex items-center gap-2 group/btn">
            {t('projects.details')}
            <span className="w-6 h-6 bg-green-500 rounded flex items-center justify-center group-hover/btn:translate-x-1 transition-transform">
                <svg className="w-3 h-3 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7"></path></svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const { t } = useLanguage();
  const tProjects = t('data.projects');

  return (
    <section id="projects" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Subtle grid for dark mode */}
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
          <a href="#" className="border-2 border-white/10 hover:border-green-500 text-white px-8 py-3 rounded-lg font-black text-[10px] uppercase tracking-widest transition-all">
            {t('projects.github_link')}
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PROJECTS_BASE.map((project, idx) => (
            <ProjectCard key={project.id} project={project} tData={tProjects[idx]} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
