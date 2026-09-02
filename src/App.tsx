import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { IntroCard } from './components/IntroCard';
import { TechnicalSkills } from './components/TechnicalSkills';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Certificates } from './components/Certificates';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { AIBlobCursor } from './components/AIBlobCursor';

export const App: React.FC = () => {
  const [isResumeOpen, setIsResumeOpen] = useState<boolean>(false);

  return (
    <div className="portfolio-app">
      <AIBlobCursor size={22} hoverSize={38} />
      <Navbar />
      <main>
        <Hero />
        <IntroCard onOpenResume={() => setIsResumeOpen(true)} />
        <TechnicalSkills />
        <Projects />

        {/* Continuous Mountain Parallax Wrapper for Education & Certificates */}
        <div className="mountains-section-wrapper">
          <div className="mountains-overlay"></div>
          <Education />
          <Certificates />
        </div>

        <Contact />
      </main>
      <Footer />

      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </div>
  );
};

export default App;
