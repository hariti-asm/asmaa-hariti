import React, { useState } from 'react';
import { Menu, X, Linkedin, Download } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { href: "#home", label: "Home" },
    { href: "#skills", label: "Skills" },
    { href: "#education", label: "Education" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl z-50 transition-all duration-300">
      <div className="glass rounded-full px-6 py-3 flex justify-between items-center">
        <div className="text-xl font-black text-slate-900 tracking-tighter">
          HARITI<span className="text-indigo-600">.</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="px-4 py-2 text-sm font-bold text-slate-600 hover:text-indigo-600 rounded-full hover:bg-indigo-50 transition-all"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center space-x-3">
          <a
            href="https://www.linkedin.com/in/asmaa-hariti"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-slate-400 hover:text-indigo-600 transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="/Asmaa_Hariti_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
            className="flex items-center gap-2 px-5 py-2.5 text-[10px] font-black uppercase tracking-widest text-white bg-slate-900 rounded-full hover:bg-indigo-600 transition-all shadow-xl shadow-slate-200"
          >
            <Download className="w-4 h-4" />
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 hover:bg-slate-100 rounded-full transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 mt-4 animate-in slide-in-from-top-4 duration-300">
          <div className="glass rounded-3xl p-6 shadow-2xl">
            <div className="flex flex-col space-y-2">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="px-4 py-3 text-lg font-bold text-slate-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-all"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="h-px bg-slate-100 my-4" />
              <a
                href="/Asmaa_Hariti_CV.pdf"
                className="flex items-center justify-center gap-3 px-6 py-4 text-sm font-black uppercase tracking-widest text-white bg-indigo-600 rounded-xl shadow-lg"
              >
                <Download className="w-5 h-5" />
                Download CV
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;