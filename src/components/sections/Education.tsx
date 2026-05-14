import React from 'react';
import { education } from '../../data/education';
import { GraduationCap } from 'lucide-react';

export function Education() {
  return (
    <section id="education" className="py-12 relative">
      <div className="section-container">
        <div className="text-center mb-24">
          <h2 className="section-title !mb-4">Education</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-[31px] top-4 bottom-4 w-px bg-slate-800"></div>
          
          <div className="space-y-12">
            {education.map((edu, index) => (
              <div key={index} className="relative flex items-start gap-12 group">
                {/* Logo Container */}
                <div className="relative z-10 shrink-0">
                  <div className="w-16 h-16 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-center p-3 shadow-2xl group-hover:border-blue-500/50 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] transition-all duration-500">
                    {edu.image ? (
                      <img 
                        src={edu.image} 
                        alt={edu.institution} 
                        className="w-full h-full object-contain"
                      />
                    ) : (
                      <GraduationCap className="w-8 h-8 text-slate-500 group-hover:text-blue-400 transition-colors" />
                    )}
                  </div>
                </div>

                {/* Content Card */}
                <div className="flex-1 glass-card p-8 group-hover:border-blue-500/20 group-hover:bg-slate-900/60 transition-all duration-500">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                    <h3 className="text-xl font-black text-white group-hover:text-blue-400 transition-colors">
                      {edu.degree}
                    </h3>
                    <span className="text-sm font-black text-blue-500 tracking-tight uppercase whitespace-nowrap">
                      {edu.duration}
                    </span>
                  </div>
                  <div className="text-lg font-bold text-slate-500">{edu.institution} • {edu.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}