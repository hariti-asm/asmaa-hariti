import React from 'react';
import { projects } from '../../data/projects';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';

export function ProjectHighlights() {
  const highlightedProjects = projects.slice(0, 3);

  return (
    <section id="featured" className="py-12 relative">
      <div className="section-container">
        <div className="text-center mb-24">
          <h2 className="section-title !mb-4">Project Highlights</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {highlightedProjects.map((project, index) => (
            <div key={index} className="project-card group cursor-pointer hover:border-blue-500/30">
              <div className="flex justify-between items-start mb-8">
                <span className={`px-3 py-1 rounded-full text-[10px] font-black tracking-widest uppercase border ${
                  project.company === 'FREELANCE' 
                    ? 'border-emerald-500/20 bg-emerald-500/5 text-emerald-500' 
                    : 'border-blue-500/20 bg-blue-500/5 text-blue-500'
                }`}>
                  {project.company}
                </span>
                <div className="flex gap-4">
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" className="text-slate-500 hover:text-white transition-colors">
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" className="text-slate-500 hover:text-white transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>

              <div className="space-y-4 flex-1">
                <h3 className="text-2xl font-black text-white group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <span className="block text-xs font-black text-slate-700 tracking-widest">{project.date}</span>
                <p className="text-slate-400 leading-relaxed font-light line-clamp-4">
                  {project.description}
                </p>
              </div>

              <div className="project-tech mt-auto">
                {project.technologies.slice(0, 4).map((tech, i) => (
                  <span key={i} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <a href="#projects" className="btn-outline px-8 py-3 inline-flex items-center gap-2 bg-transparent border-slate-800 text-slate-400 hover:text-white hover:border-blue-500/50 transition-all">
            View all projects <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
