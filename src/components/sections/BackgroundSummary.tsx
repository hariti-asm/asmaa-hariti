import React from 'react';
import { GraduationCap, Briefcase, ArrowRight } from 'lucide-react';

export function BackgroundSummary() {
  return (
    <section id="background" className="py-12 relative">
      <div className="section-container">
        <div className="text-center mb-24">
          <h2 className="section-title !mb-4">Background</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Education Card */}
          <div className="glass-card p-12 group hover:border-blue-500/30 transition-all duration-500">
            <div className="w-16 h-16 rounded-xl bg-blue-600/5 border border-white/5 flex items-center justify-center text-blue-400 mb-8 group-hover:bg-blue-600/10 transition-all">
              <GraduationCap className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-black text-white mb-4">Software Development Professional.</h3>
            <p className="text-slate-400 mb-8 leading-relaxed">
              Studied software development at YouCode | UM6P, focusing on architectural patterns and modern engineering practices.
            </p>
            <a href="#education" className="inline-flex items-center gap-2 text-sm font-black text-blue-500 hover:text-blue-400 transition-colors">
              See full education <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Work Card */}
          <div className="glass-card p-12 group hover:border-blue-500/30 transition-all duration-500 border-blue-500/20 shadow-[0_0_30px_rgba(59,130,246,0.05)]">
            <div className="w-16 h-16 rounded-xl bg-blue-600/5 border border-white/5 flex items-center justify-center text-blue-400 mb-8 group-hover:bg-blue-600/10 transition-all">
              <Briefcase className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-black text-white mb-4">Software Engineer</h3>
            <p className="text-slate-400 mb-8 leading-relaxed">
              Developing high-performance solutions for financial institutions and enterprise-scale platforms.
            </p>
            <a href="#work" className="inline-flex items-center gap-2 text-sm font-black text-blue-500 hover:text-blue-400 transition-colors">
              See full work history <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
