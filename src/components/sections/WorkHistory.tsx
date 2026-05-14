import React from 'react';
import { workExperience } from '../../data/work';

const logoMap: Record<string, string> = {
  'Eurafric Information': '/eurafric.png',
  'Alef Digital Solutions': '/alef.png',
  'Oumdin': '/oumdin.png',
  'Gold Tech Technology': '/gold_tech.png',
};

export function WorkHistory() {
  return (
    <section id="work" className="py-12 relative">
      <div className="section-container">
        <div className="text-center mb-24">
          <h2 className="section-title !mb-4">Work History</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-5xl mx-auto">
          {workExperience.map((work, index) => (
            <div key={index} className="relative flex gap-8 mb-12 last:mb-0">
              {/* Timeline Element */}
              <div className="flex flex-col items-center shrink-0">
                <div className="w-14 h-14 bg-white rounded-lg p-2 flex items-center justify-center shadow-2xl relative z-10">
                  <img 
                    src={logoMap[work.company] || '/alx.png'} 
                    alt={work.company} 
                    className="w-full h-full object-contain"
                  />
                </div>
                {index !== workExperience.length - 1 && (
                  <div className="w-0.5 h-full bg-slate-800 my-2"></div>
                )}
              </div>

              {/* Content Card */}
              <div className="flex-1 glass-card p-8 group hover:border-blue-500/30 transition-all duration-500">
                <div className="flex flex-col md:flex-row md:items-center gap-2 mb-4">
                  <span className="text-xs font-black text-blue-500 tracking-widest uppercase">
                    {work.duration.replace(' - ', ' - ')}
                  </span>
                  <h3 className="text-xl font-black text-white">
                    {work.role}
                  </h3>
                </div>
                <div className="text-slate-400 font-light leading-relaxed">
                  {work.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
