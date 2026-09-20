import React, { useState, useEffect } from 'react';

export default function IntroAnimation({ onFinish }) {
  const words = [
    { text: "Halo", lang: "Indonesia" },
    { text: "Hello", lang: "English" },
    { text: "Selamat Datang", lang: "Indonesia" },
    { text: "Welcome", lang: "English" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSlidingUp, setIsSlidingUp] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Cycle words quickly
    const wordInterval = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev < words.length - 1) {
          return prev + 1;
        }
        return prev;
      });
    }, 400);

    // Progress bar animation
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 5;
      });
    }, 70);

    // Slide up curtain after words finish (~1.8 seconds)
    const timer = setTimeout(() => {
      setIsSlidingUp(true);
      setTimeout(() => {
        if (onFinish) onFinish();
      }, 700); // match transition duration
    }, 1900);

    return () => {
      clearInterval(wordInterval);
      clearInterval(progressInterval);
      clearTimeout(timer);
    };
  }, []);

  const handleSkip = () => {
    setIsSlidingUp(true);
    setTimeout(() => {
      if (onFinish) onFinish();
    }, 300);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950 text-white transition-transform duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] ${
        isSlidingUp ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      {/* Background ambient glow */}
      <div className="absolute top-1/3 w-72 h-72 bg-cyan-500/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 w-72 h-72 bg-indigo-500/15 rounded-full blur-[100px] pointer-events-none" />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        
        {/* Animated Greeting Word */}
        <div className="h-20 flex items-center justify-center mb-6">
          <span 
            key={currentIndex}
            className="text-4xl sm:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-indigo-400 animate-in fade-in zoom-in-90 duration-300"
          >
            {words[currentIndex].text}
          </span>
        </div>

        {/* Subtitle / Subtext */}
        <div className="flex items-center gap-2 text-xs font-mono text-slate-400 uppercase tracking-widest mb-8">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          <span>Naufal Zaki Aulia • Portfolio</span>
        </div>

        {/* Sleek Progress Bar */}
        <div className="w-48 sm:w-64 h-1 rounded-full bg-slate-800 overflow-hidden relative">
          <div
            className="h-full bg-gradient-to-r from-cyan-400 to-indigo-500 transition-all duration-100 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Skip Button */}
      <button
        onClick={handleSkip}
        className="absolute bottom-8 right-8 text-xs font-mono text-slate-500 hover:text-white transition-colors underline cursor-pointer"
      >
        Lewati / Skip Intro ➜
      </button>
    </div>
  );
}
