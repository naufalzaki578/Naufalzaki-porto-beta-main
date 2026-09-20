import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeLanguageContext = createContext();

export function ThemeLanguageProvider({ children }) {
  // Theme state (dark / light)
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('app-theme');
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'dark'; // default to modern dark
  });

  // Language state (id / en)
  const [lang, setLang] = useState(() => {
    const saved = localStorage.getItem('app-lang');
    return saved || 'id'; // default to Indonesian as requested
  });

  // Command palette state
  const [isCommandOpen, setIsCommandOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
    }
    localStorage.setItem('app-theme', theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('app-lang', lang);
  }, [lang]);

  // Keyboard shortcut for Command Palette (Ctrl+K or Cmd+K)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsCommandOpen((prev) => !prev);
      }
      if (e.key === 'Escape') {
        setIsCommandOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const toggleLang = () => {
    setLang((prev) => (prev === 'id' ? 'en' : 'id'));
  };

  // Helper function to resolve bilingual strings or objects
  const t = (item) => {
    if (!item) return '';
    if (typeof item === 'string') return item;
    return item[lang] || item['en'] || item['id'] || '';
  };

  return (
    <ThemeLanguageContext.Provider
      value={{
        theme,
        toggleTheme,
        lang,
        setLang,
        toggleLang,
        t,
        isCommandOpen,
        setIsCommandOpen
      }}
    >
      {children}
    </ThemeLanguageContext.Provider>
  );
}

export function useThemeLanguage() {
  const context = useContext(ThemeLanguageContext);
  if (!context) {
    throw new Error('useThemeLanguage must be used within a ThemeLanguageProvider');
  }
  return context;
}
