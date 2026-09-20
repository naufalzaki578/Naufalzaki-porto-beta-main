import React from 'react';
import { useThemeLanguage } from '../context/ThemeLanguageContext';
import { portfolioData } from '../data/portfolioData';
import { Cpu, CheckCircle2, Sparkles } from 'lucide-react';

export default function SkillsSection() {
  const { lang, t } = useThemeLanguage();
  const { skillsCategories, softSkills } = portfolioData;

  const getLevelBadgeClass = (level) => {
    switch (level) {
      case 'Expert':
        return 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20';
      case 'Advanced':
        return 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20';
      default:
        return 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20';
    }
  };

  return (
    <section id="skills" className="py-16 px-4 sm:px-6 max-w-6xl mx-auto">
      
      {/* Header */}
      <div className="mb-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-500 text-xs font-mono font-semibold mb-2">
          <Cpu className="w-3.5 h-3.5" />
          <span>{lang === 'id' ? 'KAPABILITAS TEKNIS' : 'TECHNICAL ARSENAL'}</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          {lang === 'id' ? 'Hard Skills & Keahlian' : 'Technical Skills & Arsenal'}
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-1 max-w-xl">
          {lang === 'id' 
            ? 'Perangkat lunak, framework modern, dan bahasa pemrograman yang saya gunakan untuk mewujudkan solusi digital.' 
            : 'Technologies, modern frameworks, and tools leveraged to engineer reliable software systems.'}
        </p>
      </div>

      {/* Grid of Hard Skills Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {skillsCategories.map((category, idx) => (
          <div
            key={idx}
            className="p-6 rounded-3xl glass-panel glow-card flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100 dark:border-slate-800">
                <h3 className="font-bold text-base text-slate-900 dark:text-white">
                  {t(category.name)}
                </h3>
                <span className="text-[11px] font-mono text-slate-400">
                  {category.skills.length} Technologies
                </span>
              </div>

              {/* Skills badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {category.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/80 hover:border-indigo-500/40 transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                      <span className="text-xs font-medium text-slate-800 dark:text-slate-200">
                        {skill.name}
                      </span>
                    </div>
                    <span className={`text-[10px] font-mono font-medium px-2 py-0.5 rounded border ${getLevelBadgeClass(skill.level)}`}>
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Soft Skills Section */}
      {softSkills && (
        <div className="p-6 sm:p-8 rounded-3xl glass-panel glow-card">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <h3 className="font-bold text-base text-slate-900 dark:text-white">
              {lang === 'id' ? 'Keterampilan Interpersonal (Soft Skills)' : 'Interpersonal & Soft Skills'}
            </h3>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {softSkills.map((soft, idx) => (
              <span
                key={idx}
                className="px-4 py-2 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700/80 hover:border-cyan-500/50 hover:text-cyan-500 transition-colors"
              >
                {lang === 'id' ? soft.id : soft.en}
              </span>
            ))}
          </div>
        </div>
      )}

    </section>
  );
}
