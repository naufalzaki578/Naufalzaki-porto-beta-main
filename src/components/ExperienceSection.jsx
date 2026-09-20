import React from 'react';
import { useThemeLanguage } from '../context/ThemeLanguageContext';
import { portfolioData } from '../data/portfolioData';
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';

export default function ExperienceSection() {
  const { lang, t } = useThemeLanguage();
  const { experiences } = portfolioData;

  return (
    <section id="experience" className="py-16 px-4 sm:px-6 max-w-6xl mx-auto">
      
      {/* Header */}
      <div className="mb-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 text-purple-500 text-xs font-mono font-semibold mb-2">
          <Briefcase className="w-3.5 h-3.5" />
          <span>{lang === 'id' ? 'REKAM JEJAK' : 'CAREER JOURNEY'}</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          {lang === 'id' ? 'Pengalaman & Riwayat Karier' : 'Professional Experience & Roles'}
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-1 max-w-xl">
          {lang === 'id' 
            ? 'Perjalanan profesional dalam membangun platform perangkat lunak, memimpin inisiatif teknologi, dan berkolaborasi dalam tim.' 
            : 'Track record of delivering software systems, driving engineering initiatives, and collaborating across engineering teams.'}
        </p>
      </div>

      {/* Stepper Timeline */}
      <div className="relative pl-6 sm:pl-8 border-l-2 border-indigo-500/30 dark:border-indigo-500/20 space-y-10 ml-2 sm:ml-4">
        {experiences.map((exp) => (
          <div key={exp.id} className="relative group">
            
            {/* Glowing timeline node dot */}
            <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-indigo-600 ring-4 ring-slate-100 dark:ring-slate-950 group-hover:scale-125 transition-transform shadow-md shadow-indigo-500/50" />

            {/* Content card */}
            <div className="p-6 sm:p-7 rounded-3xl glass-panel glow-card">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <div>
                  <h3 className="font-bold text-lg text-slate-900 dark:text-white">
                    {t(exp.role)}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-indigo-600 dark:text-indigo-400">
                    {exp.company}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                    <Calendar className="w-3 h-3 text-slate-400" />
                    <span>{lang === 'id' ? exp.period : exp.periodEn}</span>
                  </span>
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
                    {exp.type}
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                {t(exp.description)}
              </p>

              {/* Achievements list */}
              <div className="space-y-2 pt-3 border-t border-slate-100 dark:border-slate-800/60">
                {(lang === 'id' ? exp.achievements.id : exp.achievements.en).map((ach, aIdx) => (
                  <div key={aIdx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-indigo-500 shrink-0 mt-0.5" />
                    <span>{ach}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}
