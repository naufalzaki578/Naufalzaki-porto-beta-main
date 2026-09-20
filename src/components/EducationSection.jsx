import React from 'react';
import { useThemeLanguage } from '../context/ThemeLanguageContext';
import { portfolioData } from '../data/portfolioData';
import { GraduationCap, Award, Calendar } from 'lucide-react';

export default function EducationSection() {
  const { lang, t } = useThemeLanguage();
  const { education } = portfolioData;

  return (
    <section id="education" className="py-16 px-4 sm:px-6 max-w-6xl mx-auto">
      
      {/* Header */}
      <div className="mb-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-500 text-xs font-mono font-semibold mb-2">
          <GraduationCap className="w-3.5 h-3.5" />
          <span>{lang === 'id' ? 'LATAR BELAKANG PENDIDIKAN' : 'ACADEMIC BACKGROUND'}</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          {lang === 'id' ? 'Pendidikan Formal' : 'Education Journey'}
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-1 max-w-xl">
          {lang === 'id' 
            ? 'Fondasi akademik di bidang Sistem Informasi dan sains terapan yang menunjang kapabilitas teknis saya.' 
            : 'Academic foundations in Information Systems supporting modern engineering competencies.'}
        </p>
      </div>

      {/* Education Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {education.map((edu) => (
          <div
            key={edu.id}
            className="p-6 sm:p-7 rounded-3xl glass-panel glow-card flex flex-col justify-between"
          >
            <div>
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-cyan-500/20 to-indigo-500/20 border border-cyan-500/30 flex items-center justify-center font-bold font-mono text-cyan-600 dark:text-cyan-400 text-sm">
                    {edu.logoText}
                  </div>
                  <div>
                    <h3 className="font-bold text-base sm:text-lg text-slate-900 dark:text-white">
                      {edu.institution}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium text-indigo-600 dark:text-indigo-400 mt-0.5">
                      {t(edu.degree)}
                    </p>
                  </div>
                </div>

                <span className="text-[10px] font-mono uppercase font-semibold px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 shrink-0">
                  {edu.badge}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {t(edu.description)}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-slate-800/60 mt-4 flex items-center justify-between text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-cyan-500" />
                <span>Terverifikasi</span>
              </span>
              <span className="font-mono text-[11px]">Academic Record</span>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
