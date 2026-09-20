import React, { useState, useEffect, useRef } from 'react';
import { useThemeLanguage } from '../context/ThemeLanguageContext';
import { portfolioData } from '../data/portfolioData';
import confetti from 'canvas-confetti';
import { 
  ArrowRight, 
  Copy, 
  Check, 
  Sparkles, 
  Mail, 
  GraduationCap, 
  Code2,
  FolderGit2
} from 'lucide-react';
import { Github, Linkedin, Instagram, Youtube } from './Icons';
import CodeTerminal from './CodeTerminal';

export default function HeroBento() {
  const { lang, t } = useThemeLanguage();
  const { profile, githubStats } = portfolioData;
  const [copied, setCopied] = useState(false);

  // Rotating headline phrases
  const rotatingWords = [
    {
      id: "Web Apps Modern Berkinerja Tinggi.",
      en: "High-Performance Web Solutions.",
      gradient: "from-cyan-400 via-indigo-500 to-purple-500"
    },
    {
      id: "Antarmuka UI/UX Intuitif & Interaktif.",
      en: "Intuitive & Dynamic UI/UX.",
      gradient: "from-pink-500 via-purple-500 to-indigo-500"
    },
    {
      id: "Machine Learning & Analisis Data.",
      en: "Machine Learning & Data Insights.",
      gradient: "from-amber-400 via-emerald-400 to-cyan-500"
    },
    {
      id: "Aplikasi Full-Stack Laravel & React.",
      en: "Full-Stack Laravel & React Systems.",
      gradient: "from-indigo-400 via-cyan-400 to-emerald-400"
    }
  ];

  const [wordIndex, setWordIndex] = useState(0);
  const [fade, setFade] = useState(true);

  // Cycle rotating words smoothly every 3.2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setWordIndex((prev) => (prev + 1) % rotatingWords.length);
        setFade(true);
      }, 280);
    }, 3200);
    return () => clearInterval(interval);
  }, [rotatingWords.length]);

  // Interactive mouse spotlight effect
  const cardRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0, active: false });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      active: true
    });
  };

  const handleMouseLeave = () => {
    setMousePos((prev) => ({ ...prev, active: false }));
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.socials.email);
    setCopied(true);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 }
    });
    setTimeout(() => setCopied(false), 2500);
  };

  const handleCelebrate = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  return (
    <section className="pt-28 pb-16 px-4 sm:px-6 max-w-6xl mx-auto">
      
      {/* Bento Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
        
        {/* Main Bio Card (8 cols) */}
        <div 
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="md:col-span-8 p-6 sm:p-8 rounded-3xl glass-panel glow-card relative overflow-hidden flex flex-col justify-between group"
        >
          {/* Cyber Dot / Tech Grid Background */}
          <div className="absolute top-0 right-0 w-80 h-80 opacity-20 dark:opacity-25 pointer-events-none -z-10 [mask-image:radial-gradient(ellipse_at_top_right,white,transparent_75%)]">
            <svg className="w-full h-full" width="100%" height="100%">
              <defs>
                <pattern id="cyber-grid" width="24" height="24" patternUnits="userSpaceOnUse">
                  <path d="M 24 0 L 0 0 0 24" fill="none" stroke="currentColor" strokeWidth="0.8" className="text-cyan-500" />
                  <circle cx="24" cy="24" r="1.5" className="fill-cyan-500/80" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#cyber-grid)" />
            </svg>
          </div>

          {/* Interactive Mouse Spotlight Glow */}
          {mousePos.active && (
            <div 
              className="pointer-events-none absolute -inset-px rounded-3xl transition-opacity duration-300 -z-10"
              style={{
                background: `radial-gradient(550px circle at ${mousePos.x}px ${mousePos.y}px, rgba(99, 102, 241, 0.14), transparent 50%)`
              }}
            />
          )}

          {/* Ambient blur backdrop glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 dark:bg-cyan-500/15 rounded-full blur-3xl -z-10 pointer-events-none" />
          
          <div>
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-semibold mb-6 shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{t(profile.status)}</span>
            </div>

            {/* Dynamic Rotating Headline */}
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.18] mb-4 min-h-[5.5rem] sm:min-h-[6.8rem]">
              {lang === 'id' ? 'Membangun Solusi ' : 'Crafting '}
              <br className="hidden sm:inline" />
              <span 
                className={`inline-block transition-all duration-300 transform text-transparent bg-clip-text bg-gradient-to-r ${rotatingWords[wordIndex].gradient} ${
                  fade ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-2 scale-95'
                }`}
              >
                {lang === 'id' ? rotatingWords[wordIndex].id : rotatingWords[wordIndex].en}
              </span>
            </h1>

            {/* Sub-bio description */}
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mb-6">
              {t(profile.bio)}
            </p>

            {/* Core Tech-Stack Mini Floating Pills */}
            <div className="mb-8 pt-1">
              <div className="flex items-center gap-2 mb-2.5">
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-600 dark:text-slate-400 font-semibold flex items-center gap-1.5">
                  <Code2 className="w-3.5 h-3.5 text-indigo-500" />
                  {lang === 'id' ? 'Keahlian & Teknologi Utama:' : 'Core Tech Stack:'}
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                {[
                  { name: 'Laravel', color: 'border-red-500/30 text-red-600 dark:text-red-400 bg-red-500/10' },
                  { name: 'React', color: 'border-cyan-500/30 text-cyan-600 dark:text-cyan-400 bg-cyan-500/10' },
                  { name: 'Tailwind CSS', color: 'border-sky-500/30 text-sky-600 dark:text-sky-400 bg-sky-500/10' },
                  { name: 'Python', color: 'border-amber-500/30 text-amber-600 dark:text-amber-400 bg-amber-500/10' },
                  { name: 'Node.js', color: 'border-emerald-500/30 text-emerald-600 dark:text-emerald-400 bg-emerald-500/10' },
                  { name: 'Figma', color: 'border-purple-500/30 text-purple-600 dark:text-purple-400 bg-purple-500/10' },
                ].map((tech) => (
                  <span 
                    key={tech.name}
                    className={`inline-flex items-center px-3 py-1 rounded-xl text-xs font-mono font-medium border ${tech.color} shadow-xs hover:-translate-y-0.5 hover:shadow-md transition-all cursor-default`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-current opacity-75 mr-1.5" />
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-100 dark:border-slate-800/80">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-600 hover:to-indigo-700 text-white font-medium text-sm shadow-md shadow-cyan-500/25 transition-all hover:gap-3"
            >
              <span>{lang === 'id' ? 'Lihat Portofolio' : 'Explore Portfolio'}</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700/80 text-slate-700 dark:text-slate-200 text-sm font-medium border border-slate-200 dark:border-slate-700 transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-500" />
                  <span className="text-emerald-500 font-medium">{lang === 'id' ? 'Email Tersalin!' : 'Email Copied!'}</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-slate-400" />
                  <span>{lang === 'id' ? 'Salin Email' : 'Copy Email'}</span>
                </>
              )}
            </button>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-slate-600 dark:text-slate-400 hover:text-cyan-500 dark:hover:text-white text-sm font-medium transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>{lang === 'id' ? 'Hubungi Saya' : 'Contact Me'}</span>
            </a>
          </div>

        </div>

        {/* Profile Card / Highlights (4 cols) */}
        <div className="md:col-span-4 p-6 sm:p-7 rounded-3xl glass-panel glow-card flex flex-col justify-between">
          
          <div className="flex items-center gap-4">
            <img 
              src={profile.avatar} 
              alt={profile.name}
              className="w-20 h-20 rounded-2xl object-cover object-top ring-2 ring-cyan-500/40 shadow-xl shadow-cyan-500/10 shrink-0"
            />
            <div>
              <h2 className="font-bold text-lg text-slate-900 dark:text-white">{profile.name}</h2>
              <p className="text-xs text-cyan-600 dark:text-cyan-400 font-mono font-medium">{t(profile.title)}</p>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">{profile.location}</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="grid grid-cols-4 gap-2 my-5">
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={profile.socials.instagram}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 text-pink-500 transition-colors"
              title="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href={profile.socials.youtube}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 text-rose-500 transition-colors"
              title="YouTube"
            >
              <Youtube className="w-4 h-4" />
            </a>
          </div>

          {/* Quick Metrics */}
          <div 
            onClick={handleCelebrate}
            className="p-3.5 rounded-2xl bg-cyan-50/90 dark:bg-cyan-950/40 border border-cyan-200/80 dark:border-cyan-900/40 cursor-pointer group"
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-semibold text-cyan-700 dark:text-cyan-400">
                {lang === 'id' ? 'Fokus & Spesialisasi' : 'Focus & Specialization'}
              </span>
              <Sparkles className="w-3.5 h-3.5 text-amber-400 group-hover:rotate-12 transition-transform" />
            </div>
            <p className="text-xs text-slate-700 dark:text-slate-300 font-medium">
              {lang === 'id' 
                ? 'Web Development, UI/UX Design, & Data Science.' 
                : 'Web Development, UI/UX Design, & Data Science.'}
            </p>
          </div>

        </div>

        {/* Bento Row 2: Metrics Strip (4 cols) */}
        <div className="md:col-span-4 p-6 rounded-3xl glass-panel glow-card flex flex-col justify-center">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <span className="text-3xl font-extrabold text-slate-900 dark:text-white font-mono">
                {profile.yearsExperience}
              </span>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 font-medium">
                {lang === 'id' ? 'Pengalaman Belajar & Proyek' : 'Active Experience'}
              </p>
            </div>
            <div>
              <span className="text-3xl font-extrabold text-cyan-600 dark:text-cyan-400 font-mono">
                {profile.completedProjects}
              </span>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 font-medium">
                {lang === 'id' ? 'Proyek Unggulan' : 'Featured Works'}
              </p>
            </div>
          </div>
        </div>

        {/* Bento Row 2: GitHub Summary Card (4 cols) */}
        <div className="md:col-span-4 p-6 rounded-3xl glass-panel glow-card flex flex-col justify-between">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Github className="w-4 h-4 text-slate-600 dark:text-slate-400" />
              <span className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider font-mono">
                GitHub Overview
              </span>
            </div>
            <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-mono font-medium">
              {githubStats.contributions}
            </span>
          </div>

          {/* Language Breakdown Bar */}
          <div className="space-y-2">
            <div className="w-full h-2 rounded-full overflow-hidden flex bg-slate-200 dark:bg-slate-800">
              {githubStats.topLanguages.map((item, idx) => (
                <div 
                  key={idx} 
                  style={{ width: `${item.percentage}%`, backgroundColor: item.color }}
                  title={`${item.name} (${item.percentage}%)`}
                />
              ))}
            </div>

            <div className="flex flex-wrap gap-x-3 gap-y-1 text-[11px] text-slate-600 dark:text-slate-400">
              {githubStats.topLanguages.slice(0, 3).map((item, idx) => (
                <div key={idx} className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
                  <span>{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bento Row 2: Education Focus (4 cols) */}
        <div className="md:col-span-4 p-6 rounded-3xl glass-panel glow-card flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400 mb-1">
              <GraduationCap className="w-4 h-4" />
              <span className="text-xs font-mono font-semibold uppercase">Pendidikan</span>
            </div>
            <span className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
              Univ. Pancasakti Tegal
            </span>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
              Teknik Informatika (2021 – 2026)
            </p>
          </div>
        </div>

        {/* Bento Row 3: Interactive Code Terminal Animation (12 cols) */}
        <div className="md:col-span-12 mt-1">
          <CodeTerminal />
        </div>

      </div>
    </section>
  );
}
