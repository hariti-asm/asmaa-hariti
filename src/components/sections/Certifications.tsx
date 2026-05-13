import React from 'react';
import { certifications } from '../../data/certifications';
import { SectionTitle } from '../ui/SectionTitle';
import { CertificationCard } from '../ui/CertificationCard';

export function Certifications() {
  return (
    <section id="certifications" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>Professional Certifications</SectionTitle>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((certification, index) => (
            <CertificationCard key={index} certification={certification} />
          ))}
        </div>
      </div>
    </section>
  );
}