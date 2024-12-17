import React from 'react';
import { Project } from '../../../types';

interface ProjectPreviewProps {
  project: Project;
}

export function ProjectPreview({ project }: ProjectPreviewProps) {
  return (
    <div className="relative h-64">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
      <div className="absolute bottom-4 left-4 right-4 text-white">
        <div className="text-sm text-blue-300 mb-1">{project.date}</div>
        <h3 className="text-xl font-bold mb-1">{project.title}</h3>
        <div className="text-sm text-gray-200">{project.company}</div>
      </div>
    </div>
  );
}