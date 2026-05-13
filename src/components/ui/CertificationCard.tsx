import React from 'react';
import { Award, ExternalLink } from 'lucide-react';
import { Certification } from '../../types';

interface CertificationCardProps {
  certification: Certification;
}

export function CertificationCard({ certification }: CertificationCardProps) {
  return (
    <a 
      href={certification.linkedInUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="glass rounded-[2rem] overflow-hidden hover:bg-white transition-all duration-500 group"
    >
      <div className="relative h-40 overflow-hidden">
        <img
          src={certification.image}
          alt={certification.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
        <div className="absolute bottom-4 left-6 right-6">
          <div className="flex items-center gap-2 text-white/80 text-[10px] font-black uppercase tracking-widest mb-1">
            <Award className="w-3 h-3 text-indigo-400" />
            {certification.organization}
          </div>
        </div>
      </div>
      <div className="p-8">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-black text-slate-900 tracking-tight group-hover:text-indigo-600 transition-colors">
            {certification.title}
          </h3>
          <span className="text-[10px] font-black text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
            {certification.date}
          </span>
        </div>
        <p className="text-slate-500 text-sm leading-relaxed font-medium">
          {certification.description}
        </p>
      </div>
    </a>
  );
}