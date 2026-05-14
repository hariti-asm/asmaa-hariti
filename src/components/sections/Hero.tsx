import React from 'react';
import { Github, Linkedin, FileText } from 'lucide-react';

export function Hero() {
  const profileImage = "/profile_professional_v2.png";
  
  return (
    <section id="home" className="hero min-h-screen pt-32 pb-24 relative overflow-hidden flex items-center justify-center">
      {/* Grid Background */}
      <div className="absolute inset-0 grid-bg opacity-30"></div>
      
      {/* Background Glows */}
      <div className="glow-bg top-[-10%] left-[20%] w-[500px] h-[500px] bg-blue-600/10"></div>
      <div className="glow-bg bottom-[10%] right-[20%] w-[400px] h-[400px] bg-purple-600/10"></div>
      
      <div className="section-container text-center space-y-8 relative z-10">
        <div className="relative inline-block group mb-4">
          <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative w-40 h-40 rounded-full overflow-hidden border-2 border-white/10 shadow-2xl hover:shadow-[0_0_80px_rgba(59,130,246,0.4)] transition-shadow duration-500 mx-auto">
            <img 
              src={profileImage} 
              alt="Asmaa Hariti" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div>
          <h1 className="hero-name">
            Asmaa Hariti
          </h1>
          <p className="hero-title">
            SOFTWARE ENGINEER <span className="text-slate-800 mx-2">|</span> FULL STACK DEVELOPER <span className="text-slate-800 mx-2">|</span> JAVA SPECIALIST
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 pt-4">
          <a href="https://linkedin.com/in/asmaa-hariti" target="_blank" className="btn-gradient px-8 py-4 shadow-[0_0_30px_rgba(59,130,246,0.3)]">
            <Linkedin className="w-5 h-5 fill-white" />
            Get in touch
          </a>
          <a href="/Asmaa_Hariti_CV.pdf" target="_blank" className="btn-outline px-8 py-4 bg-transparent">
            <FileText className="w-5 h-5 text-slate-400" />
            Download CV
          </a>
        </div>

      </div>

      {/* Scroll Indicator */}
      <a 
        href="#about" 
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 group cursor-pointer z-20 hover:scale-105 transition-transform"
      >
        <span className="text-[10px] font-black tracking-[0.4em] text-slate-500 uppercase group-hover:text-blue-400 transition-colors">
          SCROLL
        </span>
        <div className="mouse-scroll opacity-60 group-hover:opacity-100 group-hover:border-blue-400 transition-all"></div>
      </a>
    </section>
  );
}