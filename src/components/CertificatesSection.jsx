import React from 'react';
import { useThemeLanguage } from '../context/ThemeLanguageContext';
import { portfolioData } from '../data/portfolioData';
import { Award, CheckCircle } from 'lucide-react';

export default function CertificatesSection() {
  const { lang, t } = useThemeLanguage();
  const { certificates } = portfolioData;

  return (
    <section id="certificates" className="py-16 px-4 sm:px-6 max-w-6xl mx-auto">
      
      {/* Header */}
      <div className="mb-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-500 text-xs font-mono font-semibold mb-2">
          <Award className="w-3.5 h-3.5" />
          <span>{lang === 'id' ? 'PENGHARGAAN & LISENSI' : 'AWARDS & CERTIFICATES'}</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          {lang === 'id' ? 'Sertifikasi & Prestasi' : 'Certifications & Honors'}
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-1 max-w-xl">
          {lang === 'id' 
            ? 'Validasi kompetensi resmi dari institusi terpercaya dan pencapaian kejuaraan kompetisi teknologi.' 
            : 'Verified credentials, tech competition awards, and recognized software engineering certifications.'}
        </p>
      </div>

      {/* Certificates Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {certificates.map((cert) => (
          <div
            key={cert.id}
            className="p-5 rounded-3xl glass-panel glow-card flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 font-semibold">
                  {cert.badge}
                </span>
                <span className="text-xs font-mono text-slate-400">
                  {cert.year}
                </span>
              </div>

              <h3 className="font-bold text-sm text-slate-900 dark:text-white mb-2 leading-snug line-clamp-2">
                {t(cert.title)}
              </h3>
            </div>

            <div className="pt-3 border-t border-slate-100 dark:border-slate-800/60 mt-3 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
              <span>{cert.issuer}</span>
              <CheckCircle className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
