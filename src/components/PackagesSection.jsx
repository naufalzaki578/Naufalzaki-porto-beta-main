import React, { useState } from 'react';
import { useThemeLanguage } from '../context/ThemeLanguageContext';
import { portfolioData } from '../data/portfolioData';
import { Package, Copy, Check, Download, ExternalLink, Terminal } from 'lucide-react';

export default function PackagesSection() {
  const { lang } = useThemeLanguage();
  const { packages } = portfolioData;
  const [copiedIndex, setCopiedIndex] = useState(null);

  const handleCopy = (command, index) => {
    navigator.clipboard.writeText(command);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <section id="packages" className="py-16 px-4 sm:px-6 max-w-6xl mx-auto">
      
      {/* Header */}
      <div className="mb-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-500 text-xs font-mono font-semibold mb-2">
          <Package className="w-3.5 h-3.5" />
          <span>{lang === 'id' ? 'KONTRIBUSI OPEN SOURCE' : 'OPEN SOURCE PACKAGES'}</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          {lang === 'id' ? 'Pustaka & Paket Siap Pakai' : 'Published Packages & Modules'}
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-1 max-w-xl">
          {lang === 'id' 
            ? 'Paket open source yang dipublikasikan ke NPM & Packagist untuk membantu pengembang lain mempercepat pengembangan.' 
            : 'Reusable open-source packages released on NPM & Packagist for developer productivity.'}
        </p>
      </div>

      {/* Package Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {packages.map((pkg, idx) => (
          <div
            key={idx}
            className="p-6 rounded-3xl glass-panel glow-card flex flex-col justify-between"
          >
            <div>
              <div className="flex items-start justify-between gap-2 mb-3">
                <div className="flex items-center gap-2">
                  <div className={`p-2 rounded-xl text-xs font-mono font-bold uppercase ${
                    pkg.type === 'npm' 
                      ? 'bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20' 
                      : 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20'
                  }`}>
                    {pkg.type}
                  </div>
                  <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white font-mono">
                    {pkg.name}
                  </h3>
                </div>

                <span className="inline-flex items-center gap-1 text-xs font-mono text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                  <Download className="w-3 h-3" />
                  <span>{pkg.downloads}</span>
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                {pkg.description}
              </p>
            </div>

            {/* Install Command & Link Bar */}
            <div className="space-y-3 pt-3 border-t border-slate-100 dark:border-slate-800/60">
              <div className="flex items-center justify-between p-2 rounded-xl bg-slate-900 text-slate-200 text-xs font-mono border border-slate-800">
                <div className="flex items-center gap-2 overflow-x-auto">
                  <Terminal className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                  <span className="truncate">{pkg.installCommand}</span>
                </div>
                <button
                  onClick={() => handleCopy(pkg.installCommand, idx)}
                  className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-colors shrink-0"
                  title="Copy command"
                >
                  {copiedIndex === idx ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>

              <div className="flex justify-end">
                <a
                  href={pkg.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-medium text-indigo-600 dark:text-indigo-400 hover:underline"
                >
                  <span>{lang === 'id' ? 'Lihat Dokumentasi' : 'View Documentation'}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}
