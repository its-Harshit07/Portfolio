import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export const Hero: React.FC = () => {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section className="hero-section full-viewport-hero" id="hero" ref={ref}>
      {/* Dark Base Background */}
      <div className="hero-bg-solid"></div>

      {/* Sharp Prominent Foreground Portrait on the Left */}
      <div className="hero-portrait-wrapper">
        <img
          src="/assets/hero/hero-portrait.jpg"
          alt="Harshit Larenc Portrait"
          className="hero-portrait-img"
        />
        <div className="hero-portrait-edge-fade"></div>
      </div>

      {/* Typography Layer on the Right (z-index 10) */}
      <div className={`hero-right-content reveal-init ${isIntersecting ? 'reveal-active' : ''}`}>
        <h1 className="hero-title stacked-hero-title">
          <span className="line-1">I AM</span>
          <span className="line-2">HARSHIT</span>
          <span className="line-3">LARENC<span className="accent-dot">.</span></span>
        </h1>
        <p className="hero-subtitle">AI &amp; ML ENGINEER &amp; WEB DEVELOPER</p>
      </div>
    </section>
  );
};
