import React from 'react';
import { projects } from '../../data/projects';
import { ExternalLink, Github } from 'lucide-react';

export function FeaturedProject() {
  const project = projects.find(p => p.featured) || projects[0];

  return (
    <section id="featured" className="py-24 bg-slate-50">
      <div className="section-container">
        <div className="flex flex-col mb-16">
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">Featured Project</h2>
          <div className="h-1 w-20 bg-blue-600 mt-4 rounded-full"></div>
        </div>

        <div className="ui-card overflow-hidden">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 lg:p-12 space-y-8">
              <div className="space-y-4">
                <h3 className="text-4xl font-black text-slate-900">{project.title}</h3>
                <p className="text-lg text-slate-600 leading-relaxed font-medium">
                  {project.description}
                </p>
              </div>

              <div className="space-y-6">
                <div className="text-xs font-bold uppercase tracking-widest text-slate-400">Built With</div>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="px-3 py-1.5 bg-white border border-slate-200 text-slate-700 text-xs font-bold rounded-lg shadow-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-6 pt-4">
                <a 
                  href="https://github.com/hariti-asm/myDoctor" 
                  target="_blank" 
                  className="flex items-center gap-2 text-sm font-bold text-slate-900 hover:text-blue-600 transition-colors"
                >
                  <Github className="w-5 h-5" />
                  View Source Code
                </a>
              </div>
            </div>

            <div className="relative bg-slate-100 flex items-center justify-center p-8">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-auto rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
