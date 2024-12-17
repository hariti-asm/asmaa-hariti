import React, { useState } from 'react';
import { Project } from '../../../types';
import { ProjectDetails } from './ProjectDetails';
import { ProjectPreview } from './ProjectPreview';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      className="group relative bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <div className={`transition-all duration-300 ${isExpanded ? 'scale-105' : 'scale-100'}`}>
        <ProjectPreview project={project} />
        <ProjectDetails 
          project={project} 
          isExpanded={isExpanded} 
        />
      </div>
    </div>
  );
}