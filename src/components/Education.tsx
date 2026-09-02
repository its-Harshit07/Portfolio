import React from 'react';
import { EDUCATION_ITEMS } from '../data/portfolioData';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export const Education: React.FC = () => {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section className="section education-section" id="education" ref={ref}>
      <div className="container">
        <div className={`section-header reveal-init ${isIntersecting ? 'reveal-active' : ''}`}>
          <h2 className="section-title">
            <span className="section-num">03</span> EDUCATION
          </h2>
          <div className="section-line"></div>
        </div>

        <div className="timeline-wrapper">
          {/* Timeline connecting line (SOLE GREEN ACCENT EXCEPTION ON SITE) */}
          <div className="timeline-line"></div>

          {EDUCATION_ITEMS.map((item, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <div
                key={item.id}
                className={`timeline-item ${isLeft ? 'timeline-left' : 'timeline-right'} reveal-init ${
                  isIntersecting ? 'reveal-active' : ''
                }`}
                style={{ transitionDelay: `${idx * 0.15}s` }}
              >
                {/* Timeline dot (SOLE GREEN ACCENT EXCEPTION ON SITE) */}
                <div className="timeline-dot"></div>
                <div className="timeline-card">
                  <span className="timeline-year">{item.period}</span>
                  <h3 className="timeline-degree">{item.degree}</h3>
                  <h4 className="timeline-institution">
                    <i className={`fa-solid ${item.institutionIcon}`}></i> {item.institution}
                  </h4>
                  <p className="timeline-desc">{item.description}</p>
                  <div className="timeline-tags">
                    {item.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
