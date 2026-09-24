import React from 'react';
import { ACHIEVEMENT_ITEMS } from '../data/portfolioData';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export const Achievements: React.FC = () => {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section className="section achievements-section" id="achievements" ref={ref}>
      <div className="container">
        <div className={`section-header reveal-init ${isIntersecting ? 'reveal-active' : ''}`}>
          <h2 className="section-title">
            <span className="section-num">04</span> ACHIEVEMENTS
          </h2>
          <div className="section-line"></div>
        </div>

        <div className="achievements-grid">
          {ACHIEVEMENT_ITEMS.map((item, idx) => (
            <div
              key={item.id}
              className={`achievement-card reveal-init ${isIntersecting ? 'reveal-active' : ''}`}
              style={{ transitionDelay: `${idx * 0.15}s` }}
            >
              <div className="achievement-card-header">
                <div className="achievement-badge-wrap">
                  <div className="achievement-icon">
                    <i className={item.icon || 'fa-solid fa-award'}></i>
                  </div>
                  {item.roleType && (
                    <span className="achievement-role-badge">
                      <i className="fa-solid fa-file-signature"></i> {item.roleType}
                    </span>
                  )}
                </div>
                <span className="achievement-period-badge">
                  <i className="fa-regular fa-clock"></i> {item.status}
                </span>
              </div>

              <h3 className="achievement-title">{item.title}</h3>

              <div className="achievement-company">
                <i className="fa-solid fa-microchip"></i> {item.patentNumber}
              </div>

              <p className="achievement-desc">{item.description}</p>

              <div className="achievement-tags">
                {item.technologies.map((tech) => (
                  <span key={tech} className="achievement-tag">
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

export default Achievements;
