import React from 'react';
import { skills } from '../../data/skills';
import { Terminal, Database, Layout, ShieldCheck, Cpu } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  'Backend Development': <Terminal className="w-8 h-8" />,
  'Databases': <Database className="w-8 h-8" />,
  'Frontend Technologies': <Layout className="w-8 h-8" />,
  'DevOps & Tools': <ShieldCheck className="w-8 h-8" />,
};

export function Skills() {
  return (
    <section id="background" className="py-32 relative">
      <div className="section-container">
        <div className="text-center mb-24 space-y-4">
          <h2 className="text-4xl font-black text-white">Background</h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skillGroup, index) => (
            <div key={index} className="glass-card p-10 flex flex-col sm:flex-row items-start gap-8 group hover:scale-[1.02]">
              <div className="w-20 h-20 rounded-2xl bg-blue-600/5 border border-white/5 flex items-center justify-center text-blue-400 shrink-0 group-hover:bg-blue-600/10 group-hover:border-blue-500/20 transition-all shadow-[0_0_20px_rgba(59,130,246,0.05)] group-hover:shadow-[0_0_30px_rgba(59,130,246,0.1)]">
                {iconMap[skillGroup.category] || <Cpu className="w-8 h-8" />}
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl font-black text-white group-hover:text-blue-400 transition-colors">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skillGroup.items.map((skill, i) => (
                    <span
                      key={i}
                      className="px-4 py-1.5 bg-white/5 text-slate-300 text-xs font-bold rounded-xl border border-white/5 group-hover:border-white/10 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}