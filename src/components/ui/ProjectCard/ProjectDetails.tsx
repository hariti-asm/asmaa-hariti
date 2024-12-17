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
        absolute inset-0 bg-white/95 backdrop-blur-sm
        transition-all duration-300 
        ${isExpanded ? 'opacity-100' : 'opacity-0 pointer-events-none'}
      `}
    >
      <div className="p-6 h-full overflow-auto">
        <h3 className="text-xl font-bold mb-2 text-gray-900">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        
        {project.details && (
          <ul className="list-disc list-inside mb-4 text-gray-600 space-y-1">
            {project.details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        )}
        
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.technologies.map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}