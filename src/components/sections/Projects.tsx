import React from 'react';
import { projects } from '../../data/projects';
import { ProjectCard } from '../ui/ProjectCard/ProjectCard';

export function Projects() {
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="section-container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">Other Initiatives</h2>
            <div className="h-1 w-20 bg-blue-600 rounded-full"></div>
          </div>
          <p className="max-w-md text-slate-600 font-medium leading-relaxed">
            A selection of specialized systems and experimental applications developed 
            to solve specific technical challenges.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherProjects.map((project, index) => (
            <div key={index} className="h-full">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}