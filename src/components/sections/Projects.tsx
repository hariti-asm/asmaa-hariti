import React from 'react';
import { projects } from '../../data/projects';
import { ProjectCard } from '../ui/ProjectCard/ProjectCard';
import { SectionTitle } from '../ui/SectionTitle';

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>Professional Experience</SectionTitle>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}