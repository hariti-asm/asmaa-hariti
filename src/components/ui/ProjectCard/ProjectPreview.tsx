import React from 'react';
import { Project } from '../../../types';

interface ProjectPreviewProps {
  project: Project;
}

export function ProjectPreview({ project }: ProjectPreviewProps) {
  return (
    <div className="relative h-64 overflow-hidden group">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />
      
      {project.featured && (
        <div className="absolute top-4 right-4 z-20">
          <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-white bg-indigo-600 rounded-full shadow-lg border border-indigo-400">
            Featured
          </span>
        </div>
      )}

      <div className="absolute bottom-6 left-6 right-6 text-white z-20">
        <div className="text-xs font-bold text-indigo-400 mb-2 uppercase tracking-widest">{project.date}</div>
        <h3 className="text-2xl font-black mb-1 tracking-tight">{project.title}</h3>
        <div className="text-sm font-medium text-slate-300">{project.company}</div>
      </div>
    </div>
  );
}