import React from 'react';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';
import { Education } from '../../types/education';

interface EducationCardProps {
  education: Education;
}

export function EducationCard({ education }: EducationCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-100">
      <div className="flex items-start space-x-4">
        <div className="p-3 bg-blue-50 rounded-xl">
          <GraduationCap className="w-6 h-6 text-blue-600" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
            {education.degree}
          </h3>
          <p className="text-blue-600 font-medium mb-3">{education.institution}</p>
          <div className="flex flex-wrap gap-4 text-gray-600 text-sm mb-3">
            <div className="flex items-center gap-2 bg-gray-50 px-3 py-1 rounded-full">
              <Calendar className="w-4 h-4 text-gray-500" />
              <span>{education.duration}</span>
            </div>
            {education.location && (
              <div className="flex items-center gap-2 bg-gray-50 px-3 py-1 rounded-full">
                <MapPin className="w-4 h-4 text-gray-500" />
                <span>{education.location}</span>
              </div>
            )}
          </div>
          {education.description && (
            <p className="text-gray-600 leading-relaxed">{education.description}</p>
          )}
        </div>
      </div>
    </div>
  );
}