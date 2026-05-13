import React from 'react';
import { education } from '../../data/education';

export function Education() {
  return (
    <section id="education" className="py-24 bg-white">
      <div className="section-container">
        <div className="flex flex-col mb-16">
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">Academic History</h2>
          <div className="h-1 w-20 bg-blue-600 mt-4 rounded-full"></div>
        </div>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <div key={index} className="ui-card p-8 flex flex-col md:flex-row justify-between gap-6 items-start">
              <div className="space-y-2">
                <h3 className="text-2xl font-black text-slate-900">{edu.degree}</h3>
                <p className="text-blue-600 font-bold text-lg">{edu.institution}</p>
                <div className="text-slate-400 text-sm font-bold uppercase tracking-widest">{edu.location}</div>
              </div>
              <div className="text-slate-500 font-black text-sm bg-slate-50 px-4 py-2 rounded-lg border border-slate-100">{edu.duration}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}