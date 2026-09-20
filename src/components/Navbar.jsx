import React, { useState, useEffect } from 'react';
import { useThemeLanguage } from '../context/ThemeLanguageContext';
import { 
  Sun, 
  Moon, 
  Globe, 
  Search, 
  Menu, 
  X, 
  Terminal,
  FolderGit2,
  Cpu,
  Briefcase,
  GraduationCap,
  MessageSquare,
  Award,
  Send
} from 'lucide-react';

export default function Navbar() {
  const { theme, toggleTheme, lang, toggleLang, setIsCommandOpen } = useThemeLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: "#projects", label: lang === 'id' ? 'Portofolio' : 'Portfolio', icon: FolderGit2 },
    { href: "#education", label: lang === 'id' ? 'Pendidikan' : 'Education', icon: GraduationCap },
    { href: "#skills", label: lang === 'id' ? 'Keahlian' : 'Skills', icon: Cpu },
    { href: "#experience", label: lang === 'id' ? 'Pengalaman' : 'Experience', icon: Briefcase },
    { href: "#comments", label: lang === 'id' ? 'Komentar' : 'Comments', icon: MessageSquare },
    { href: "#contact", label: lang === 'id' ? 'Kontak' : 'Contact', icon: Send },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'py-3 bg-slate-950/80 dark:bg-slate-950/80 bg-white/80 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-800/80 shadow-lg shadow-black/5' 
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        
        {/* Brand Logo & Avatar */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-400 to-indigo-500 p-0.5 shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform overflow-hidden">
            <img 
              src="/profile.jpg" 
              alt="Naufal Zaki" 
              className="w-full h-full object-cover object-top rounded-[10px]" 
            />
            <span className="absolute -bottom-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
          </div>
          <div>
            <span className="font-bold text-base tracking-tight text-slate-900 dark:text-white flex items-center gap-1.5">
              Naufal Zaki
              <span className="text-[10px] uppercase font-mono tracking-widest px-1.5 py-0.5 rounded bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
                PORTFOLIO
              </span>
            </span>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-mono hidden sm:block">
              Web Developer & Data Enthusiast
            </p>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-100/70 dark:bg-slate-900/70 border border-slate-200/60 dark:border-slate-800/80 px-2 py-1.5 rounded-full backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-medium px-3 py-1.5 rounded-full text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white hover:bg-white dark:hover:bg-slate-800/80 transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Buttons: Command Palette, Language, Theme */}
        <div className="flex items-center gap-2">
          
          {/* Cmd + K Quick Search Trigger */}
          <button
            onClick={() => setIsCommandOpen(true)}
            title="Command Palette (Ctrl + K)"
            className="hidden sm:flex items-center gap-2 px-2.5 py-1.5 text-xs font-mono rounded-lg bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 transition-colors"
          >
            <Search className="w-3.5 h-3.5 text-indigo-500" />
            <span>Search</span>
            <kbd className="text-[10px] bg-white dark:bg-slate-800 px-1.5 py-0.5 rounded border border-slate-200 dark:border-slate-700 text-slate-500">
              Ctrl K
            </kbd>
          </button>

          {/* Language Toggle (ID / EN) */}
          <button
            onClick={toggleLang}
            title="Toggle Language"
            className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium rounded-lg bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 transition-colors"
          >
            <Globe className="w-3.5 h-3.5 text-cyan-500" />
            <span className="uppercase font-mono">{lang}</span>
          </button>

          {/* Theme Toggle (Dark / Light) */}
          <button
            onClick={toggleTheme}
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 transition-colors"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400 hover:rotate-45 transition-transform" />
            ) : (
              <Moon className="w-4 h-4 text-indigo-600 hover:-rotate-12 transition-transform" />
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl px-4 py-4 space-y-2 mt-2">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-indigo-50 dark:hover:bg-indigo-950/40 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                <Icon className="w-4 h-4 text-indigo-500" />
                {link.label}
              </a>
            );
          })}
          <div className="pt-2 border-t border-slate-200 dark:border-slate-800">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setIsCommandOpen(true);
              }}
              className="w-full flex items-center justify-center gap-2 py-2 text-xs font-mono rounded-lg bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300"
            >
              <Search className="w-4 h-4 text-indigo-500" />
              Quick Command Palette
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
