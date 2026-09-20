import React, { useState, useEffect } from 'react';
import { useThemeLanguage } from '../context/ThemeLanguageContext';
import { portfolioData } from '../data/portfolioData';

export default function CodeTerminal() {
  const { lang } = useThemeLanguage();
  const { profile } = portfolioData;

  const codeString = `// Web Developer Portfolio
const developer = {
  name: "${profile.name}",
  role: "Web Developer & Data Enthusiast",
  education: "Universitas Pancasakti Tegal (Teknik Informatika)",
  skills: ["Laravel", "React", "Python", "Tailwind CSS"],
  passions: ["Web Development", "Data Science", "UI/UX Design"],
  status: "Open for New Opportunities"
};`;

  const [displayedText, setDisplayedText] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);

  // Typewriter effect with pause and reset loop
  useEffect(() => {
    let index = 0;
    let isDeleting = false;
    let timeoutId;

    const typeStep = () => {
      if (!isDeleting) {
        setDisplayedText(codeString.slice(0, index));
        index++;
        if (index > codeString.length) {
          // Pause at full text for 6 seconds
          timeoutId = setTimeout(() => {
            isDeleting = true;
            typeStep();
          }, 6000);
          return;
        }
      } else {
        // Fast reset
        setDisplayedText('');
        index = 0;
        isDeleting = false;
        timeoutId = setTimeout(typeStep, 1000);
        return;
      }

      // Natural typing speed variation
      const delay = Math.random() * 25 + 20;
      timeoutId = setTimeout(typeStep, delay);
    };

    timeoutId = setTimeout(typeStep, 600);
    return () => clearTimeout(timeoutId);
  }, [codeString]);

  // Cursor blink
  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 530);
    return () => clearInterval(interval);
  }, []);

  // Syntax highlighting helper for code lines
  const renderHighlightedLine = (line, lineIdx) => {
    if (line.trim().startsWith('//')) {
      return <span className="text-slate-400 dark:text-slate-500 italic">{line}</span>;
    }

    const tokens = line.split(/(\s+|[{}()[\];,:.=<>!+\-*/&|]|"[^"]*"|'[^']*')/);

    return (
      <span key={lineIdx}>
        {tokens.map((token, tIdx) => {
          if (!token) return null;
          if (token.startsWith('"') || token.startsWith("'")) {
            return (
              <span key={tIdx} className="text-emerald-500 dark:text-emerald-400 font-medium">
                {token}
              </span>
            );
          }
          if (['const', 'let', 'var', 'function', 'return', 'import', 'from'].includes(token)) {
            return (
              <span key={tIdx} className="text-purple-500 dark:text-purple-400 font-semibold">
                {token}
              </span>
            );
          }
          if (['developer', 'profile'].includes(token)) {
            return (
              <span key={tIdx} className="text-cyan-500 dark:text-cyan-400 font-bold">
                {token}
              </span>
            );
          }
          if (['name', 'role', 'education', 'skills', 'passions', 'status'].includes(token)) {
            return (
              <span key={tIdx} className="text-rose-500 dark:text-rose-400">
                {token}
              </span>
            );
          }
          return <span key={tIdx} className="text-slate-800 dark:text-slate-200">{token}</span>;
        })}
      </span>
    );
  };

  const lines = displayedText.split('\n');

  return (
    <div className="w-full rounded-2xl overflow-hidden border border-slate-200/80 dark:border-slate-800 shadow-2xl bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl group">
      
      {/* Mac Terminal Header Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-slate-100/90 dark:bg-slate-900 border-b border-slate-200/80 dark:border-slate-800/80">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56] shadow-sm hover:opacity-80 transition-opacity" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e] shadow-sm hover:opacity-80 transition-opacity" />
          <div className="w-3 h-3 rounded-full bg-[#27c93f] shadow-sm hover:opacity-80 transition-opacity" />
        </div>

        <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400 tracking-wider flex items-center gap-2">
          <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
          <span>naufal_zaki — zsh</span>
        </div>

        <div className="text-[10px] font-mono text-slate-400 hidden sm:block">
          portfolio.js
        </div>
      </div>

      {/* Terminal Body */}
      <div className="p-5 sm:p-6 font-mono text-xs sm:text-[13px] leading-relaxed min-h-[250px] bg-slate-50/70 dark:bg-slate-950/50">
        
        {/* Terminal prompt */}
        <div className="flex items-center gap-2 mb-3 text-xs text-slate-500 dark:text-slate-400 select-none">
          <span className="text-emerald-600 dark:text-emerald-400 font-bold">➜</span>
          <span className="text-cyan-600 dark:text-cyan-400 font-bold">~/portfolio</span>
          <span className="px-1.5 py-0.2 rounded bg-indigo-500/10 text-indigo-500 text-[10px] font-bold">
            main
          </span>
          <span className="text-slate-400">git status -s</span>
        </div>

        {/* Typed Lines */}
        <div className="space-y-1">
          {lines.map((line, idx) => (
            <div key={idx} className="min-h-[1.4rem] flex items-center whitespace-pre font-mono">
              {renderHighlightedLine(line, idx)}
              {idx === lines.length - 1 && (
                <span 
                  className={`inline-block w-2 h-4 bg-cyan-500 ml-1 transition-opacity ${
                    cursorVisible ? 'opacity-100' : 'opacity-0'
                  }`} 
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Terminal Status Bar */}
      <div className="px-4 py-1.5 bg-slate-100/90 dark:bg-slate-900 border-t border-slate-200/80 dark:border-slate-800/80 flex items-center justify-between text-[10px] font-mono text-slate-500 dark:text-slate-400">
        <div className="flex items-center gap-3">
          <span className="text-emerald-600 dark:text-emerald-400 font-bold">● Ready</span>
          <span>UTF-8</span>
        </div>
        <div className="flex items-center gap-3">
          <span>JavaScript</span>
          <span>Ln 9, Col 2</span>
        </div>
      </div>

    </div>
  );
}
