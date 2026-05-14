import React from 'react';
import { Project } from '../../../types';
import { Github, ExternalLink, Image as ImageIcon } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const isFreelance = project.company === 'FREELANCE';
  
  return (
    <div className="project-card group hover:translate-y-[-4px]">
      <div className="flex justify-between items-start mb-6">
        <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border ${
          isFreelance 
            ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' 
            : 'bg-amber-500/10 text-amber-400 border-amber-500/20'
        }`}>
          {project.company}
        </span>
        
        <div className="flex gap-3">
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" className="p-2 rounded-lg text-slate-500 hover:text-white hover:bg-white/5 transition-all">
              <Github className="w-5 h-5" />
            </a>
          )}
          <a href="#" className="p-2 rounded-lg text-slate-500 hover:text-white hover:bg-white/5 transition-all">
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </div>

      <div className="space-y-4 mb-6">
        <div>
          <h3 className="text-2xl font-black text-white group-hover:text-blue-400 transition-colors">
            {project.title}
          </h3>
          <div className="text-xs font-bold text-slate-600 mt-1 uppercase tracking-widest">{project.date}</div>
        </div>
        
        <p className="text-sm text-slate-400 leading-relaxed font-light line-clamp-4">
          {project.description}
        </p>
      </div>

      <div className="project-tech mt-auto">
        {project.technologies.map((tech, i) => (
          <span key={i} className="tech-tag">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}