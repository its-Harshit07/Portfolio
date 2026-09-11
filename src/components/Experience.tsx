import React from 'react';
import { EXPERIENCE_ITEMS } from '../data/portfolioData';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export const Experience: React.FC = () => {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section className="section experience-section" id="experience" ref={ref}>
      <div className="container">
        <div className={`section-header reveal-init ${isIntersecting ? 'reveal-active' : ''}`}>
          <h2 className="section-title">
            <span className="section-num">03</span> EXPERIENCE
          </h2>
          <div className="section-line"></div>
        </div>

        <div className="experience-grid">
          {EXPERIENCE_ITEMS.map((item, idx) => (
            <div
              key={item.id}
              className={`experience-card reveal-init ${isIntersecting ? 'reveal-active' : ''}`}
              style={{ transitionDelay: `${idx * 0.15}s` }}
            >
              <div className="experience-card-header">
                <div className="experience-badge-wrap">
                  <div className="experience-icon">
                    <i className={item.icon || 'fa-solid fa-briefcase'}></i>
                  </div>
                  {item.roleType && (
                    <span className="experience-role-badge">
                      <i className="fa-solid fa-graduation-cap"></i> {item.roleType}
                    </span>
                  )}
                </div>
                <span className="experience-period-badge">
                  <i className="fa-regular fa-calendar"></i> {item.period}
                </span>
              </div>

              <h3 className="experience-title">{item.title}</h3>

              <div className="experience-company">
                <i className="fa-solid fa-building-user"></i> {item.company}
                {item.location && (
                  <span className="experience-location">
                    <i className="fa-solid fa-location-dot"></i> {item.location}
                  </span>
                )}
              </div>

              <p className="experience-desc">{item.description}</p>

              <div className="experience-tags">
                {item.technologies.map((tech) => (
                  <span key={tech} className="experience-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
