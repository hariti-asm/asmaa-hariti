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
      className="block bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition group"
    >
      <div className="relative h-48">
        <img
          src={certification.image}
          alt={certification.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4 text-white">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5" />
              <span className="text-sm">{certification.organization}</span>
            </div>
            <ExternalLink className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <h3 className="text-xl font-bold">{certification.title}</h3>
        </div>
      </div>
      <div className="p-6">
        <div className="text-sm text-blue-600 mb-2">{certification.date}</div>
        <p className="text-gray-600">{certification.description}</p>
      </div>
    </a>
  );
}