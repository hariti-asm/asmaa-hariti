import React from 'react';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';

export function Hero() {
  const profileImage = "/profile_professional_v2.png";
  
  return (
    <section id="home" className="pt-32 pb-20 lg:pt-48 lg:pb-32 relative">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider">
                Software Engineer
              </div>
              <h1 className="text-5xl lg:text-7xl font-black text-slate-900 leading-tight">
                Engineering <br />
                <span className="text-blue-600">Reliable</span> Solutions.
              </h1>
            </div>
            
            <p className="text-lg lg:text-xl text-slate-600 font-medium leading-relaxed max-w-xl">
              Asmaa Hariti designs and builds high-performance distributed systems. 
              Specialized in Spring Boot, Angular, and enterprise-grade microservices.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-6 pt-4">
              <a href="#projects" className="btn-action w-full sm:w-auto text-center">
                Explore Projects
                <ArrowRight className="inline ml-2 w-4 h-4" />
              </a>
              
              <div className="flex items-center gap-6 text-slate-400">
                <a href="https://github.com/hariti-asm" target="_blank" className="hover:text-blue-600 transition-colors">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://linkedin.com/in/asmaa-hariti" target="_blank" className="hover:text-blue-600 transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="mailto:haritiasmaa74@gmail.com" className="hover:text-blue-600 transition-colors">
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="absolute -inset-4 bg-blue-100 rounded-[2.5rem] -rotate-3"></div>
              <div className="relative bg-white p-4 rounded-[2.5rem] shadow-2xl">
                <img 
                  src={profileImage} 
                  alt="Asmaa Hariti" 
                  className="w-full h-auto rounded-[1.5rem] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}