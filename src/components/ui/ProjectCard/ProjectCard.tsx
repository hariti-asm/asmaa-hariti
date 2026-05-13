import React from 'react';
import { Project } from '../../../types';
import { ArrowUpRight, Github } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group ui-card overflow-hidden flex flex-col h-full">
      <div className="aspect-[16/9] relative overflow-hidden bg-slate-100">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors"></div>
      </div>

      <div className="p-8 flex flex-col flex-1 space-y-6">
        <div className="space-y-3">
          <h3 className="text-2xl font-black text-slate-900 group-hover:text-blue-600 transition-colors">
            {project.title}
          </h3>
          <p className="text-slate-600 font-medium leading-relaxed line-clamp-3">
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 pt-2">
          {project.technologies.slice(0, 4).map((tech, i) => (
            <span key={i} className="px-2 py-1 bg-slate-50 text-slate-500 text-[10px] font-bold uppercase tracking-wider rounded-md border border-slate-100">
              {tech}
            </span>
          ))}
        </div>

        <div className="pt-6 mt-auto flex items-center justify-between border-t border-slate-100">
          <div className="flex items-center gap-4">
            <a href="https://github.com/hariti-asm" target="_blank" className="text-slate-400 hover:text-slate-900 transition-colors">
              <Github className="w-5 h-5" />
            </a>
          </div>
          <div className="text-blue-600 group-hover:translate-x-1 transition-transform">
            <ArrowUpRight className="w-5 h-5" />
          </div>
        </div>
      </div>
    </div>
  );
}