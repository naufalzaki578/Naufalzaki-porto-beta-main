import React, { useState, useEffect } from 'react';
import { useThemeLanguage } from '../context/ThemeLanguageContext';
import confetti from 'canvas-confetti';
import { MessageSquare, Send, Trash2, Edit3, Check, X, User } from 'lucide-react';

export default function CommentsSection() {
  const { lang } = useThemeLanguage();

  const [comments, setComments] = useState(() => {
    const saved = localStorage.getItem('nz_portfolio_comments');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return [];
      }
    }
    return [
      {
        id: 1,
        name: "Rizky Firmansyah",
        message: "Portofolio yang sangat rapi dan komprehensif! Sukses terus untuk proyek dan kariernya.",
        date: "Baru saja"
      }
    ];
  });

  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editMessage, setEditMessage] = useState('');

  useEffect(() => {
    localStorage.setItem('nz_portfolio_comments', JSON.stringify(comments));
  }, [comments]);

  const handleAddComment = (e) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    const newComment = {
      id: Date.now(),
      name: name.trim(),
      message: message.trim(),
      date: new Date().toLocaleDateString(lang === 'id' ? 'id-ID' : 'en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      })
    };

    setComments([newComment, ...comments]);
    setName('');
    setMessage('');

    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 }
    });
  };

  const handleDelete = (id) => {
    setComments(comments.filter(c => c.id !== id));
  };

  const handleStartEdit = (comment) => {
    setEditingId(comment.id);
    setEditMessage(comment.message);
  };

  const handleSaveEdit = (id) => {
    setComments(comments.map(c => c.id === id ? { ...c, message: editMessage } : c));
    setEditingId(null);
  };

  return (
    <section id="comments" className="py-16 px-4 sm:px-6 max-w-4xl mx-auto">
      
      {/* Header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-500 text-xs font-mono font-semibold mb-2">
          <MessageSquare className="w-3.5 h-3.5" />
          <span>{lang === 'id' ? 'GUESTBOOK & KOMENTAR' : 'GUESTBOOK & COMMENTS'}</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          {lang === 'id' ? 'Tinggalkan Pesan & Komentar' : 'Leave a Comment'}
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-1">
          {lang === 'id' 
            ? 'Beri tanggapan, apresiasi, atau tinggalkan catatan untuk Naufal Zaki.' 
            : 'Share your feedback, appreciation, or leave a quick note for Naufal.'}
        </p>
      </div>

      {/* Comment Form */}
      <div className="p-6 sm:p-8 rounded-3xl glass-panel glow-card mb-8">
        <form onSubmit={handleAddComment} className="space-y-4">
          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">
              {lang === 'id' ? 'Nama Anda' : 'Your Name'}
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Alex Pratama"
              className="w-full px-4 py-2.5 rounded-xl text-sm bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
            />
          </div>

          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">
              {lang === 'id' ? 'Komentar Anda' : 'Your Comment'}
            </label>
            <textarea
              rows={3}
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={lang === 'id' ? "Tuliskan komentar atau apresiasi..." : "Write a friendly comment..."}
              className="w-full px-4 py-2.5 rounded-xl text-sm bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
            />
          </div>

          <button
            type="submit"
            className="px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-600 hover:to-indigo-700 text-white shadow-md shadow-cyan-500/20 flex items-center gap-2 transition-all"
          >
            <span>{lang === 'id' ? 'Kirim Komentar' : 'Add Comment'}</span>
            <Send className="w-3.5 h-3.5" />
          </button>
        </form>
      </div>

      {/* Comment List */}
      <div className="space-y-3">
        {comments.map((item) => (
          <div
            key={item.id}
            className="p-5 rounded-2xl glass-panel flex flex-col sm:flex-row sm:items-start justify-between gap-3 border border-slate-200/60 dark:border-slate-800"
          >
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-7 h-7 rounded-full bg-cyan-500/20 text-cyan-600 dark:text-cyan-400 flex items-center justify-center font-bold text-xs">
                  <User className="w-3.5 h-3.5" />
                </div>
                <span className="font-bold text-sm text-slate-900 dark:text-white">
                  {item.name}
                </span>
                <span className="text-[11px] text-slate-400 font-mono">
                  • {item.date}
                </span>
              </div>

              {editingId === item.id ? (
                <div className="mt-2 flex gap-2">
                  <input
                    type="text"
                    value={editMessage}
                    onChange={(e) => setEditMessage(e.target.value)}
                    className="flex-1 px-3 py-1.5 text-xs rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white"
                  />
                  <button
                    onClick={() => handleSaveEdit(item.id)}
                    className="p-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700"
                  >
                    <Check className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => setEditingId(null)}
                    className="p-2 bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-lg"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              ) : (
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1.5 leading-relaxed">
                  {item.message}
                </p>
              )}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-1.5 self-end sm:self-start">
              <button
                onClick={() => handleStartEdit(item)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-cyan-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                title="Edit"
              >
                <Edit3 className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => handleDelete(item.id)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-rose-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                title="Delete"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
