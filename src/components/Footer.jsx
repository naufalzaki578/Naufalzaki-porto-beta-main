import React from 'react';
import { useThemeLanguage } from '../context/ThemeLanguageContext';
import { portfolioData } from '../data/portfolioData';
import { ArrowUp, Mail } from 'lucide-react';
import { Github, Linkedin, Instagram, Youtube } from './Icons';

export default function Footer() {
  const { lang, t } = useThemeLanguage();
  const { profile } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800/80 bg-white/50 dark:bg-slate-950/50 backdrop-blur-xl py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Side Brand */}
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
            <span className="font-extrabold text-base tracking-tight text-slate-900 dark:text-white">
              {profile.name}
            </span>
            <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
              PORTFOLIO
            </span>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 max-w-md">
            {t(profile.tagline)}
          </p>
        </div>

        {/* Center & Right Side: Links and Back to top */}
        <div className="flex items-center gap-3">
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noreferrer"
            className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-cyan-500 dark:hover:text-white transition-colors"
            title="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-cyan-500 dark:hover:text-white transition-colors"
            title="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={profile.socials.instagram}
            target="_blank"
            rel="noreferrer"
            className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-pink-500 transition-colors"
            title="Instagram"
          >
            <Instagram className="w-4 h-4" />
          </a>
          <a
            href={profile.socials.youtube}
            target="_blank"
            rel="noreferrer"
            className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-rose-500 transition-colors"
            title="YouTube"
          >
            <Youtube className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${profile.socials.email}`}
            className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-cyan-500 dark:hover:text-white transition-colors"
            title="Email"
          >
            <Mail className="w-4 h-4" />
          </a>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-600 hover:to-indigo-700 text-white shadow-md shadow-cyan-500/20 transition-all ml-2"
            title="Back to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>

      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-slate-100 dark:border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-2">
        <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <p className="flex items-center gap-1 font-mono text-[11px]">
          React 19 • Vite • Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
