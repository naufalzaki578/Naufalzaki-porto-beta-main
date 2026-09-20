import React, { useState, useEffect, useRef } from 'react';
import { useThemeLanguage } from '../context/ThemeLanguageContext';
import { 
  Search, 
  Moon, 
  Sun, 
  Globe, 
  Mail, 
  FolderGit2, 
  ArrowRight, 
  X, 
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { Github, Linkedin } from './Icons';

export default function CommandPalette() {
  const { isCommandOpen, setIsCommandOpen, theme, toggleTheme, lang, toggleLang } = useThemeLanguage();
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);

  const actions = [
    {
      id: 'projects',
      title: lang === 'id' ? 'Buka Galeri Proyek' : 'Explore Projects',
      category: 'Navigation',
      icon: FolderGit2,
      action: () => {
        const el = document.getElementById('projects');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    },
    {
      id: 'skills',
      title: lang === 'id' ? 'Lihat Matriks Keahlian' : 'View Skills Matrix',
      category: 'Navigation',
      icon: Sparkles,
      action: () => {
        const el = document.getElementById('skills');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    },
    {
      id: 'experience',
      title: lang === 'id' ? 'Lihat Riwayat Karier & Magang' : 'Career & Experience Timeline',
      category: 'Navigation',
      icon: ArrowRight,
      action: () => {
        const el = document.getElementById('experience');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    },
    {
      id: 'packages',
      title: lang === 'id' ? 'Paket Open Source (NPM & Packagist)' : 'Open Source Packages (NPM/Packagist)',
      category: 'Navigation',
      icon: FolderGit2,
      action: () => {
        const el = document.getElementById('packages');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    },
    {
      id: 'theme',
      title: theme === 'dark' ? 'Ganti ke Light Mode' : 'Switch to Dark Mode',
      category: 'Preference',
      icon: theme === 'dark' ? Sun : Moon,
      action: toggleTheme
    },
    {
      id: 'lang',
      title: lang === 'id' ? 'Switch to English' : 'Ganti ke Bahasa Indonesia',
      category: 'Preference',
      icon: Globe,
      action: toggleLang
    },
    {
      id: 'email',
      title: lang === 'id' ? 'Salin Alamat Email' : 'Copy Email Address',
      category: 'Contact',
      icon: Mail,
      action: () => {
        navigator.clipboard.writeText('naufalzakiaulia717@gmail.com');
        alert(lang === 'id' ? 'Email (naufalzakiaulia717@gmail.com) berhasil disalin ke clipboard!' : 'Email copied to clipboard!');
      }
    },
    {
      id: 'github',
      title: 'Kunjungi GitHub Profile',
      category: 'External',
      icon: Github,
      action: () => {
        window.open('https://github.com/naufalzaki578', '_blank');
      }
    }
  ];

  const filtered = actions.filter((item) => 
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.category.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    if (isCommandOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setSelectedIndex(0);
      setQuery('');
    }
  }, [isCommandOpen]);

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % filtered.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filtered.length) % filtered.length);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filtered[selectedIndex]) {
        filtered[selectedIndex].action();
        setIsCommandOpen(false);
      }
    }
  };

  if (!isCommandOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4 bg-black/60 backdrop-blur-md">
      <div 
        className="w-full max-w-xl rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-slate-100 dark:border-slate-800">
          <Search className="w-5 h-5 text-slate-400" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            onKeyDown={handleKeyDown}
            placeholder={lang === 'id' ? "Ketik perintah atau cari bagian..." : "Type a command or jump to section..."}
            className="w-full bg-transparent text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none"
          />
          <button 
            onClick={() => setIsCommandOpen(false)}
            className="p-1 text-slate-400 hover:text-slate-600 dark:hover:text-white rounded"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Action List */}
        <div className="max-h-80 overflow-y-auto p-2">
          {filtered.length === 0 ? (
            <div className="py-8 text-center text-xs text-slate-400 font-mono">
              {lang === 'id' ? 'Tidak ada hasil untuk pencarian ini' : 'No commands match your query'}
            </div>
          ) : (
            filtered.map((item, idx) => {
              const Icon = item.icon;
              const isSelected = idx === selectedIndex;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    item.action();
                    setIsCommandOpen(false);
                  }}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-left text-sm transition-all ${
                    isSelected 
                      ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20' 
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/60'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-1.5 rounded-lg ${isSelected ? 'bg-white/20 text-white' : 'bg-slate-100 dark:bg-slate-800 text-indigo-500'}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="font-medium">{item.title}</span>
                  </div>
                  <span className={`text-[11px] font-mono px-2 py-0.5 rounded ${
                    isSelected ? 'bg-white/20 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-400'
                  }`}>
                    {item.category}
                  </span>
                </button>
              );
            })
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="px-4 py-2 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 flex items-center justify-between text-[11px] text-slate-400 font-mono">
          <div className="flex items-center gap-2">
            <span>↑↓ Pilih</span>
            <span>↵ Jalankan</span>
          </div>
          <span>Esc untuk keluar</span>
        </div>
      </div>
    </div>
  );
}
