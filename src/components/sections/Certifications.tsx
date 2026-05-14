import React from 'react';
import { certifications } from '../../data/certifications';
import { ExternalLink } from 'lucide-react';

export function Certifications() {
  return (
    <section id="certifications" className="py-12 relative">
      <div className="section-container">
        <div className="text-center mb-24">
          <h2 className="section-title !mb-4">Certifications</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-[31px] top-4 bottom-4 w-px bg-slate-800"></div>
          
          <div className="space-y-12">
            {certifications.map((cert, index) => (
              <div key={index} className="relative flex items-start gap-12 group">
                {/* Logo Container */}
                <div className="relative z-10 shrink-0">
                  <div className="w-16 h-16 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-center p-3 shadow-2xl group-hover:border-blue-500/50 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] transition-all duration-500">
                    <img 
                      src={cert.image} 
                      alt={cert.title} 
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>

                {/* Content Card */}
                <div className="flex-1 glass-card p-8 group-hover:border-blue-500/20 group-hover:bg-slate-900/60 transition-all duration-500">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-black text-blue-500 tracking-tight uppercase whitespace-nowrap">
                        {cert.date}
                      </span>
                      <h3 className="text-xl font-black text-white group-hover:text-blue-400 transition-colors">
                        {cert.title}
                      </h3>
                      <a 
                        href={cert.linkedInUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-slate-500 hover:text-blue-400 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                  <div className="text-lg font-bold text-slate-500 mb-2">{cert.organization}</div>
                  <p className="text-slate-400 font-light leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}