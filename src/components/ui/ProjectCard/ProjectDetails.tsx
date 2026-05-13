import React from 'react';
import { Project } from '../../../types';

interface ProjectDetailsProps {
  project: Project;
  isExpanded: boolean;
}

export function ProjectDetails({ project, isExpanded }: ProjectDetailsProps) {
  return (
    <div 
      className={`
        absolute inset-0 bg-slate-900/95 backdrop-blur-xl
        transition-all duration-500 
        ${isExpanded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full pointer-events-none'}
      `}
    >
      <div className="p-8 h-full flex flex-col justify-between overflow-auto scrollbar-hide">
        <div>
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-2xl font-black text-white tracking-tight">{project.title}</h3>
          </div>
          <p className="text-slate-300 text-sm leading-relaxed mb-6 font-medium">{project.description}</p>
          
          {project.details && (
            <div className="space-y-3 mb-8">
              {project.details.map((detail, index) => (
                <div key={index} className="flex items-start space-x-3 group/item">
                  <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-indigo-500 flex-shrink-0 group-hover/item:scale-125 transition-transform" />
                  <span className="text-sm text-slate-400 group-hover/item:text-slate-200 transition-colors">{detail}</span>
                </div>
              ))}
            </div>
          )}
        </div>
        
        <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800">
          {project.technologies.map((tech, i) => (
            <span
              key={i}
              className="px-2.5 py-1 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[10px] font-bold uppercase tracking-wider rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}