import React from 'react';
import { Header } from './components/layout/Header';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { BackgroundSummary } from './components/sections/BackgroundSummary';
import { ProjectHighlights } from './components/sections/ProjectHighlights';
import { Education } from './components/sections/Education';
import { Projects } from './components/sections/Projects';
import { WorkHistory } from './components/sections/WorkHistory';
import { Certifications } from './components/sections/Certifications';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/layout/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#030712]">
      <Header />
      <main>
        <Hero />
        <About />
        <BackgroundSummary />
        <ProjectHighlights />
        <WorkHistory />
        <Education />
        <Certifications />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;