import React from 'react';
import { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="text-sm text-blue-600 mb-2">{project.date}</div>
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <div className="text-sm text-gray-600 mb-2">{project.company}</div>
        <p className="text-gray-600 mb-4">{project.description}</p>
        {project.details && (
          <ul className="list-disc list-inside mb-4 text-gray-600">
            {project.details.map((detail, index) => (
              <li key={index} className="mb-1">{detail}</li>
            ))}
          </ul>
        )}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-gray-100 text-sm text-gray-700 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}