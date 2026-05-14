import React from 'react';
import { Github, Linkedin } from 'lucide-react';

export function About() {
  const workingImage = "/profile_working.png";

  return (
    <section id="about" className="py-12 relative">
      <div className="section-container">
        <div className="grid lg:grid-cols-[3fr_2fr] gap-16 items-center">
          <div className="space-y-10 order-2 lg:order-1 introduction">
            <div className="mb-8">
              <h2 className="section-title !text-left !mb-4">About Me</h2>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            </div>
            
            <div className="space-y-6 about-body">
              <p>
                I am a <span className="text-white font-bold">software engineer</span> with over 5 years of experience, specialized in designing secure APIs, web application development, and database management. I have experience in various programming languages and frameworks, and I am always eager to learn new technologies.
              </p>
              <p>
                My goal is to create high-quality software that meets the needs of users and businesses alike. I am also an advocate for best practices in software development, including code reviews, testing, and continuous integration. In my free time, I enjoy contributing to open source projects and sharing my knowledge with the community.
              </p>
            </div>

            <div className="flex gap-4 py-4">
              <div className="w-20 h-20 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center p-2 shadow-2xl hover:shadow-[0_0_50px_rgba(59,130,246,0.3)] hover:border-blue-500/30 transition-all duration-500 group overflow-hidden">
                <img src="/oracle_ocp.png" alt="Oracle" className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="w-20 h-20 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center p-2 shadow-2xl hover:shadow-[0_0_50px_rgba(59,130,246,0.3)] hover:border-blue-500/30 transition-all duration-500 group overflow-hidden">
                <img src="/ibm.png" alt="IBM" className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="w-20 h-20 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center p-2 shadow-2xl hover:shadow-[0_0_50px_rgba(59,130,246,0.3)] hover:border-blue-500/30 transition-all duration-500 group overflow-hidden">
                <img src="/alx.png" alt="ALX" className="w-full h-full object-contain scale-110 group-hover:scale-125 transition-transform duration-500" />
              </div>
            </div>
            
            <div className="flex gap-4 pt-2">
              <a href="https://github.com/hariti-asm" target="_blank" className="btn-outline px-6 py-3 flex items-center gap-2 bg-[#1c2128] border-none">
                <Github className="w-5 h-5 text-white" />
                <span className="font-bold text-white">GitHub</span>
              </a>
              <a href="https://linkedin.com/in/asmaa-hariti" target="_blank" className="btn-outline px-6 py-3 flex items-center gap-2 bg-[#0077b5]/10 border-none">
                <Linkedin className="w-5 h-5 text-[#0077b5]" />
                <span className="font-bold text-[#0077b5]">LinkedIn</span>
              </a>
            </div>
          </div>

          <div className="relative order-1 lg:order-2 w-full max-w-md mx-auto">
            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600/10 via-purple-600/10 to-transparent rounded-[2.5rem] blur-3xl opacity-50"></div>
            <div className="relative rounded-[1.5rem] overflow-hidden border border-white/10 shadow-2xl">
              <img 
                src={workingImage} 
                alt="Working" 
                className="w-full h-auto object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
