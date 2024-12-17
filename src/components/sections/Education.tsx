import React from 'react';
import { education } from '../../data/education';
import { EducationCard } from '../ui/EducationCard';
import { SectionTitle } from '../ui/SectionTitle';

export function Education() {
  return (
    <section id="education" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>Educational Background</SectionTitle>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          My academic journey has equipped me with a strong foundation in computer science,
          engineering principles, and practical development skills.
        </p>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <EducationCard key={index} education={edu} />
          ))}
        </div>
      </div>
    </section>
  );
}