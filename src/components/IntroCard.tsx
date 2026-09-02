import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface IntroCardProps {
  onOpenResume: () => void;
}

export const IntroCard: React.FC<IntroCardProps> = ({ onOpenResume }) => {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.15 });

  return (
    <section className="intro-card-section" id="intro" ref={ref}>
      <div className="container">
        <div className={`square-intro-card reveal-init ${isIntersecting ? 'reveal-active' : ''}`}>
          <div className="intro-badge">
            <i className="fa-solid fa-code"></i> FULL-STACK &amp; AI/ML ENTHUSIAST
          </div>
          <p className="intro-bio">
            Hey, I'm Harshit — an AI &amp; ML student who genuinely enjoys figuring out how things work and then building something with them. I'm interested in AI, full-stack development, cloud computing, and databases, but more than the technologies themselves, I enjoy the process of turning an idea into something real. I'm a hands-on learner, always experimenting, exploring new technologies, and looking for better ways to build useful things.
          </p>
          <div className="intro-actions">
            <button className="btn btn-primary" id="btn-open-resume-intro" onClick={onOpenResume}>
              DOWNLOAD RESUME <i className="fa-solid fa-file-arrow-down"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
