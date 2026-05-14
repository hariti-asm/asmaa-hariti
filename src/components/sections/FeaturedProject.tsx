import React from 'react';
import { Github, ExternalLink, ArrowRight, Star } from 'lucide-react';

const featuredProjects = [
  {
    title: "MyDoctor Platform",
    description: "A comprehensive healthcare platform connecting patients with doctors through AI-driven search and consultation management.",
    image: "/mydoctor_mockup.png",
    tags: ["React", "Spring Boot", "OpenAI", "PostgreSQL"],
    github: "https://github.com/hariti-asm/MyDoctor",
    demo: "#",
    status: "Featured"
  },
  {
    title: "E-Commerce Microservices",
    description: "Scalable e-commerce backend built with microservices architecture, featuring real-time inventory and payment processing.",
    image: "/eurafric.png",
    tags: ["Java", "Spring Cloud", "Kafka", "Redis"],
    github: "https://github.com/hariti-asm",
    demo: "#",
    status: "Latest"
  }
];

export function FeaturedProject() {
  return (
    <section id="featured" className="py-32 relative">
      <div className="section-container">
        <h2 className="section-title-premium">Project Highlights</h2>
        
        <div className="grid lg:grid-cols-2 gap-10">
          {featuredProjects.map((project, index) => (
            <div key={index} className="glass-card overflow-hidden group flex flex-col">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent"></div>
                <div className="absolute top-6 left-6">
                  <span className="px-3 py-1 bg-blue-600/20 backdrop-blur-md text-blue-400 text-[10px] font-black uppercase tracking-widest rounded-full border border-blue-500/20 flex items-center gap-2">
                    <Star className="w-3 h-3" />
                    {project.status}
                  </span>
                </div>
              </div>
              
              <div className="p-10 space-y-6 flex-1 flex flex-col">
                <h3 className="text-2xl font-black text-white group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 font-light leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-[10px] font-bold text-slate-500 border border-white/5 px-2 py-0.5 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-6 pt-6 mt-auto">
                  <a href={project.github} className="text-white hover:text-blue-400 transition-colors flex items-center gap-2 font-bold text-sm">
                    <Github className="w-4 h-4" />
                    Source
                  </a>
                  <a href={project.demo} className="text-white hover:text-blue-400 transition-colors flex items-center gap-2 font-bold text-sm">
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a href="#projects" className="inline-flex items-center gap-3 px-8 py-3 bg-slate-900 border border-slate-800 rounded-lg text-sm font-bold text-white hover:bg-slate-800 transition-all group">
            View all projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
