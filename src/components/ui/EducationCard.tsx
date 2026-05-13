import React from 'react';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';
import { Education } from '../../types/education';

interface EducationCardProps {
  education: Education;
}

export function EducationCard({ education }: EducationCardProps) {
  return (
    <div className="glass rounded-[2rem] p-8 hover:bg-white transition-all duration-500 group">
      <div className="flex flex-col md:flex-row md:items-center gap-6">
        <div className="w-16 h-16 bg-indigo-500/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-indigo-600 transition-all duration-500">
          <GraduationCap className="w-8 h-8 text-indigo-600 group-hover:text-white transition-colors" />
        </div>
        <div className="flex-1">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
            <h3 className="text-2xl font-black text-slate-900 tracking-tight">
              {education.degree}
            </h3>
            <span className="text-xs font-black uppercase tracking-widest text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full mt-2 md:mt-0 w-fit">
              {education.duration}
            </span>
          </div>
          <p className="text-indigo-600 font-bold text-lg mb-4">{education.institution}</p>
          
          <div className="flex flex-wrap gap-4 text-slate-500 text-sm mb-6">
            {education.location && (
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-indigo-400" />
                <span className="font-medium">{education.location}</span>
              </div>
            )}
          </div>
          
          {education.description && (
            <p className="text-slate-500 leading-relaxed font-medium">{education.description}</p>
          )}
        </div>
      </div>
    </div>
  );
}