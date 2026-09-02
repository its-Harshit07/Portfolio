import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export const TechnicalSkills: React.FC = () => {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });
  const [bloomedSkill, setBloomedSkill] = useState<string | null>(null);

  const handleTouchStart = (name: string) => {
    setBloomedSkill(name);
  };

  const handleTouchEnd = () => {
    setTimeout(() => {
      setBloomedSkill(null);
    }, 250);
  };

  return (
    <section className="section skills-section" id="skills" ref={ref}>
      <div className="container">
        <div className={`section-header reveal-init ${isIntersecting ? 'reveal-active' : ''}`}>
          <h2 className="section-title">
            <span className="section-num">01</span> TECHNICAL SKILLS
          </h2>
          <div className="section-line"></div>
        </div>

        <div className="skills-category-container">
          {SKILL_CATEGORIES.map((category, catIdx) => (
            <div
              key={category.id}
              className={`skills-group-free reveal-init ${isIntersecting ? 'reveal-active' : ''}`}
              style={{ transitionDelay: `${catIdx * 0.1}s` }}
            >
              <h3 className="skills-group-label">{category.title}</h3>
              <div className="skills-badge-grid">
                {category.skills.map((skill, skillIdx) => (
                  <div
                    key={skill.name}
                    className={`skill-badge ${bloomedSkill === skill.name ? 'bloomed' : ''}`}
                    onTouchStart={() => handleTouchStart(skill.name)}
                    onTouchEnd={handleTouchEnd}
                    onTouchCancel={() => setBloomedSkill(null)}
                    style={{ transitionDelay: `${skillIdx * 0.04}s` }}
                  >
                    <i className={skill.icon}></i>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
