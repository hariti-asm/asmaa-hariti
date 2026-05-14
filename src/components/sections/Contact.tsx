import React from 'react';
import { Mail } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="section-container">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <h2 
            className="text-4xl md:text-5xl font-black tracking-tight"
            style={{ 
              background: 'linear-gradient(90deg, #7c9cfb, #c48dfc)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Let's Work Together
          </h2>
          
          <p className="text-[15px] text-[#8b949e] leading-relaxed">
            Whether you're looking for a developer to join your team, collaborate on an exciting project, or just want to chat about the latest tech—I'd love to hear from you.
          </p>

          <div className="flex justify-center pt-6">
            <a 
              href="mailto:haritiasmaa74@gmail.com"
              className="px-6 py-3 rounded-md text-[14px] font-medium text-white transition-transform hover:scale-[1.02] flex items-center justify-center gap-2 shadow-[0_4px_14px_rgba(0,0,0,0.25)]"
              style={{ background: 'linear-gradient(90deg, #7c9cfb, #c48dfc)' }}
            >
              <Mail className="w-4 h-4" />
              haritiasmaa74@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}