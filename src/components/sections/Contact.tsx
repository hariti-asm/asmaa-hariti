import React from 'react';
import { Mail, Linkedin, MapPin, ExternalLink } from 'lucide-react';

export function Contact() {
  const workingImage = "/profile_working.png";

  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-4xl font-black text-slate-900 tracking-tight">Let's Connect</h2>
              <p className="text-xl text-slate-600 font-medium leading-relaxed">
                I'm currently open to new opportunities and collaborations. 
                Feel free to reach out via email or LinkedIn.
              </p>
            </div>

            <div className="grid gap-6">
              <a href="mailto:haritiasmaa74@gmail.com" className="ui-card p-6 flex items-center gap-6 group hover:border-blue-600/30 transition-all">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">Email</div>
                  <div className="text-slate-900 font-bold">haritiasmaa74@gmail.com</div>
                </div>
                <ExternalLink className="w-5 h-5 text-slate-300 group-hover:text-blue-600 transition-colors" />
              </a>

              <a href="https://linkedin.com/in/asmaa-hariti" target="_blank" className="ui-card p-6 flex items-center gap-6 group hover:border-blue-600/30 transition-all">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600">
                  <Linkedin className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">LinkedIn</div>
                  <div className="text-slate-900 font-bold">linkedin.com/in/asmaa-hariti</div>
                </div>
                <ExternalLink className="w-5 h-5 text-slate-300 group-hover:text-blue-600 transition-colors" />
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
              <img 
                src={workingImage} 
                alt="Asmaa Hariti Working" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        
        <div className="mt-24 pt-8 border-t border-slate-200 text-center">
          <p className="text-slate-400 text-sm font-bold uppercase tracking-widest">© 2026 Asmaa Hariti • Software Engineer</p>
        </div>
      </div>
    </section>
  );
}