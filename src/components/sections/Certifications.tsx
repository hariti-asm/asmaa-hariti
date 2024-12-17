import React from 'react';
import { certifications } from '../../data/certifications';
import { SectionTitle } from '../ui/SectionTitle';
import { CertificationCard } from '../ui/CertificationCard';

export function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>Certifications</SectionTitle>
        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((certification, index) => (
            <CertificationCard key={index} certification={certification} />
          ))}
        </div>
      </div>
    </section>
  );
}