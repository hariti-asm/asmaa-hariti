import React from 'react';
import { skills } from '../../data/skills';
import { Terminal, Database, Layout, ShieldCheck } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  'Backend Development': <Terminal className="w-5 h-5" />,
  'Database & Tools': <Database className="w-5 h-5" />,
  'Frontend Technologies': <Layout className="w-5 h-5" />,
};

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-white">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h2 className="text-4xl font-black text-slate-900 tracking-tight">Technical Arsenal</h2>
          <p className="text-lg text-slate-600 font-medium leading-relaxed">
            A comprehensive overview of the technologies and tools I use to build 
            scalable, enterprise-grade applications.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <div key={index} className="ui-card p-8 flex flex-col">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                  {iconMap[skillGroup.category] || <ShieldCheck className="w-5 h-5" />}
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  {skillGroup.category}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {skillGroup.items.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 bg-slate-50 text-slate-700 text-xs font-bold rounded-lg border border-slate-100"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}