import React, { useState } from 'react';
import { ThemeLanguageProvider, useThemeLanguage } from './context/ThemeLanguageContext';
import IntroAnimation from './components/IntroAnimation';
import Navbar from './components/Navbar';
import CommandPalette from './components/CommandPalette';
import HeroBento from './components/HeroBento';
import ProjectsSection from './components/ProjectsSection';
import EducationSection from './components/EducationSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import CommentsSection from './components/CommentsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function PortfolioMain() {
  const { theme } = useThemeLanguage();
  const [showIntro, setShowIntro] = useState(true);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      theme === 'dark' ? 'bg-mesh-dark text-slate-100' : 'bg-mesh-light text-slate-900'
    }`}>
      {/* Opening Intro Splash Animation */}
      {showIntro && <IntroAnimation onFinish={() => setShowIntro(false)} />}

      {/* Dynamic Background Noise / Blur Ambient Balls */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-[128px]" />
        <div className="absolute top-1/3 -right-40 w-96 h-96 bg-indigo-600/10 rounded-full blur-[128px]" />
        <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[128px]" />
      </div>

      {/* Navigation Header */}
      <Navbar />

      {/* Global Command Palette (Ctrl+K) */}
      <CommandPalette />

      {/* Main Content Sections */}
      <main>
        <HeroBento />
        <ProjectsSection />
        <EducationSection />
        <SkillsSection />
        <ExperienceSection />
        <CommentsSection />
        <ContactSection />
      </main>

      {/* Site Footer */}
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <ThemeLanguageProvider>
      <PortfolioMain />
    </ThemeLanguageProvider>
  );
}
