import React, { useState, useMemo } from 'react';
import { useThemeLanguage } from '../context/ThemeLanguageContext';
import { portfolioData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';
import { Search, FolderGit2, ExternalLink, Eye, Sparkles } from 'lucide-react';
import { Github } from './Icons';

export default function ProjectsSection() {
  const { lang, t } = useThemeLanguage();
  const { projects } = portfolioData;

  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'Full Stack', 'Web Dev', 'UI/UX Design', 'Backend & Web', 'Machine Learning', 'AI & Web'];

  const filteredProjects = useMemo(() => {
    return projects.filter((p) => {
      const matchCat = activeCategory === 'All' || p.category === activeCategory;
      const title = t(p.title).toLowerCase();
      const desc = t(p.description).toLowerCase();
      const query = searchQuery.toLowerCase();
      const matchSearch = !searchQuery || 
        title.includes(query) || 
        desc.includes(query) || 
        p.tags.some(t => t.toLowerCase().includes(query));
      return matchCat && matchSearch;
    });
  }, [projects, activeCategory, searchQuery, lang]);

  return (
    <section id="projects" className="py-16 px-4 sm:px-6 max-w-6xl mx-auto">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-500 text-xs font-mono font-semibold mb-2">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>{lang === 'id' ? 'KARYA TERPILIH' : 'FEATURED WORKS'}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {lang === 'id' ? 'Proyek & Eksplorasi Rekayasa' : 'Engineering & Product Showcase'}
          </h2>
        </div>
        
        {/* Real-time Search Input */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={lang === 'id' ? "Cari nama atau teknologi..." : "Search title or tech stack..."}
            className="w-full pl-9 pr-4 py-2 text-xs rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
          />
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap items-center gap-2 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
              activeCategory === cat
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20'
                : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      {filteredProjects.length === 0 ? (
        <div className="py-16 text-center rounded-3xl glass-panel p-8">
          <p className="text-sm text-slate-400 font-mono">
            {lang === 'id' 
              ? 'Tidak ada proyek yang sesuai dengan kriteria pencarian.' 
              : 'No projects found matching your search.'}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-3xl glass-panel glow-card overflow-hidden flex flex-col justify-between group"
            >
              <div>
                {/* Project Image Banner with Hover Zoom */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-950">
                  <img
                    src={project.image}
                    alt={t(project.title)}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  
                  {/* Category badge */}
                  <span className="absolute top-3 left-3 text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-slate-900/80 text-white backdrop-blur-md border border-white/10">
                    {project.category}
                  </span>

                  {project.featured && (
                    <span className="absolute top-3 right-3 text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-amber-500 text-slate-950 flex items-center gap-1 shadow">
                      <Sparkles className="w-2.5 h-2.5" />
                      FEATURED
                    </span>
                  )}
                </div>

                {/* Project Body */}
                <div className="p-5">
                  <h3 className="font-bold text-base text-slate-900 dark:text-white line-clamp-1 mb-2 group-hover:text-indigo-500 transition-colors">
                    {t(project.title)}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed mb-4">
                    {t(project.description)}
                  </p>

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {project.tags.slice(0, 4).map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="text-[10px] font-mono px-1.5 py-0.5 text-slate-400">
                        +{project.tags.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="px-5 pb-5 pt-2 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-indigo-600 dark:text-indigo-400 hover:underline"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>{lang === 'id' ? 'Lihat Detail' : 'View Details'}</span>
                </button>

                <div className="flex items-center gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                      title="GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-1.5 rounded-lg text-indigo-500 hover:bg-indigo-50 dark:hover:bg-indigo-950/60 transition-colors"
                      title="Live Demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
