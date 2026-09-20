import React from 'react';
import { useThemeLanguage } from '../context/ThemeLanguageContext';
import { X, ExternalLink, CheckCircle2, Layers } from 'lucide-react';
import { Github } from './Icons';

export default function ProjectModal({ project, onClose }) {
  const { lang, t } = useThemeLanguage();

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="w-full max-w-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header Image */}
        <div className="relative h-60 w-full overflow-hidden bg-slate-950">
          <img 
            src={project.image} 
            alt={t(project.title)} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
          
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Title on image */}
          <div className="absolute bottom-4 left-6 right-6">
            <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded bg-indigo-500 text-white uppercase tracking-wider">
              {project.category}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white mt-2">
              {t(project.title)}
            </h3>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6 space-y-5 max-h-[60vh] overflow-y-auto">
          
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5 font-semibold">
              {lang === 'id' ? 'Deskripsi Lengkap' : 'Project Overview'}
            </h4>
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              {t(project.description)}
            </p>
          </div>

          {/* Highlights */}
          {project.highlights && (
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 font-semibold">
                {lang === 'id' ? 'Sorotan & Fitur Kunci' : 'Key Highlights'}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {(lang === 'id' ? project.highlights.id : project.highlights.en).map((hl, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-800/60 p-2.5 rounded-xl border border-slate-100 dark:border-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech stack */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 font-semibold flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-indigo-500" />
              <span>Tech Stack</span>
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag, i) => (
                <span 
                  key={i} 
                  className="px-2.5 py-1 text-xs font-mono font-medium rounded-lg bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-900/50"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Action Footer */}
        <div className="p-4 sm:p-6 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 flex items-center justify-end gap-3">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>Source Code</span>
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-xl text-xs sm:text-sm font-medium bg-indigo-600 hover:bg-indigo-700 text-white shadow-md shadow-indigo-500/20 transition-all"
            >
              <span>{lang === 'id' ? 'Kunjungi Demo' : 'Live Preview'}</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
