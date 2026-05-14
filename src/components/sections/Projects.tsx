import React, { useState } from 'react';
import { projects } from '../../data/projects';
import { ProjectCard } from '../ui/ProjectCard/ProjectCard';
import { Search } from 'lucide-react';

export function Projects() {
  const [searchTerm, setSearchTerm] = useState('');
  const otherProjects = projects.filter(p => !p.featured);

  const filteredProjects = otherProjects.filter(project => 
    project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase())) ||
    project.company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="projects" className="py-12 relative">
      <div className="section-container space-y-16">
        <div className="text-center">
          <h2 className="section-title !mb-4">All Projects</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl blur opacity-25 group-focus-within:opacity-100 transition duration-1000"></div>
          <div className="relative flex items-center bg-slate-900/50 backdrop-blur-xl border border-white/5 rounded-2xl p-4 group-focus-within:border-blue-500/50 transition-all">
            <Search className="w-5 h-5 text-slate-500 ml-2" />
            <input 
              type="text" 
              placeholder="Filter by technology, role..."
              className="w-full bg-transparent border-none focus:ring-0 text-white placeholder-slate-600 px-4 text-sm font-medium"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div key={index} className="h-full">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}