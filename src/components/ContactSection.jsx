import React, { useState } from 'react';
import { useThemeLanguage } from '../context/ThemeLanguageContext';
import { portfolioData } from '../data/portfolioData';
import confetti from 'canvas-confetti';
import { Mail, Send, CheckCircle2, MessageSquare, ArrowUpRight, Copy, Check } from 'lucide-react';

export default function ContactSection() {
  const { lang } = useThemeLanguage();
  const { profile } = portfolioData;

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setSubmitted(true);
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.7 }
    });

    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.socials.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-16 px-4 sm:px-6 max-w-6xl mx-auto">
      
      {/* Header */}
      <div className="mb-10 text-center max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-500 text-xs font-mono font-semibold mb-2">
          <Mail className="w-3.5 h-3.5" />
          <span>{lang === 'id' ? 'KOLABORASI & KONTAK' : 'GET IN TOUCH'}</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          {lang === 'id' ? 'Mari Wujudkan Proyek Hebat Bersama' : "Let's Build Something Exceptional"}
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-2">
          {lang === 'id' 
            ? 'Terbuka untuk tawaran posisi Full-Time, proyek lepas (freelance), konsultasi arsitektur perangkat lunak, maupun kolaborasi open source.' 
            : 'Open for full-time engineering roles, freelance software consulting, and open-source collaborations.'}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Quick Contact Links (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          
          {/* Email card */}
          <div className="p-6 rounded-3xl glass-panel glow-card">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-2xl bg-indigo-500/10 text-indigo-500">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-slate-900 dark:text-white">Email Address</h3>
                  <p className="text-xs text-slate-400 font-mono">{profile.socials.email}</p>
                </div>
              </div>
              <button
                onClick={handleCopyEmail}
                className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                title="Copy email"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
            <a
              href={`mailto:${profile.socials.email}`}
              className="w-full inline-flex items-center justify-center gap-1.5 py-2 text-xs font-medium rounded-xl bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100 dark:hover:bg-indigo-900/50 transition-colors"
            >
              <span>{lang === 'id' ? 'Kirim Email Langsung' : 'Send Direct Email'}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* WhatsApp card */}
          <div className="p-6 rounded-3xl glass-panel glow-card">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-2xl bg-emerald-500/10 text-emerald-500">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-slate-900 dark:text-white">WhatsApp Direct</h3>
                  <p className="text-xs text-slate-400 font-mono">Fast Response</p>
                </div>
              </div>
            </div>
            <a
              href={profile.socials.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="w-full inline-flex items-center justify-center gap-1.5 py-2 text-xs font-medium rounded-xl bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-100 dark:hover:bg-emerald-900/50 transition-colors"
            >
              <span>{lang === 'id' ? 'Mulai Chat WhatsApp' : 'Chat via WhatsApp'}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

        {/* Message Form (7 cols) */}
        <div className="lg:col-span-7">
          <form
            onSubmit={handleSubmit}
            className="p-6 sm:p-8 rounded-3xl glass-panel glow-card space-y-4"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">
                  {lang === 'id' ? 'Nama Anda' : 'Your Name'}
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="John Doe"
                  className="w-full px-4 py-2.5 rounded-xl text-sm bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
                />
              </div>
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">
                  {lang === 'id' ? 'Alamat Email' : 'Email Address'}
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="john@example.com"
                  className="w-full px-4 py-2.5 rounded-xl text-sm bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">
                {lang === 'id' ? 'Pesan / Rincian Proyek' : 'Message / Project Details'}
              </label>
              <textarea
                rows={4}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder={lang === 'id' ? "Tuliskan pesan atau kebutuhan proyek Anda..." : "Tell me about your project or inquiry..."}
                className="w-full px-4 py-2.5 rounded-xl text-sm bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
              />
            </div>

            <button
              type="submit"
              disabled={submitted}
              className={`w-full py-3 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-all shadow-md ${
                submitted 
                  ? 'bg-emerald-600 text-white shadow-emerald-500/20' 
                  : 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-indigo-500/20'
              }`}
            >
              {submitted ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-white" />
                  <span>{lang === 'id' ? 'Pesan Terkirim dengan Sukses!' : 'Message Sent Successfully!'}</span>
                </>
              ) : (
                <>
                  <span>{lang === 'id' ? 'Kirim Pesan Sekarang' : 'Send Message Now'}</span>
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        </div>

      </div>

    </section>
  );
}
