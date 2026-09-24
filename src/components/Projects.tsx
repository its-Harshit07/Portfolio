import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import { ProjectItem } from '../types/portfolio';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export const Projects: React.FC = () => {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const handleGlobeClick = (e: React.MouseEvent, url: string) => {
    e.stopPropagation();
    if (url && url !== '#') {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section className="section projects-section" id="projects" ref={ref}>
      <div className="container">
        <div className={`section-header reveal-init ${isIntersecting ? 'reveal-active' : ''}`}>
          <h2 className="section-title">
            <span className="section-num">02</span> PROJECTS
          </h2>
          <div className="portfolio-see-more-wrap">
            <span className="portfolio-see-more-text">MY LATEST WORK. SEE MORE</span>
            <a
              href="https://github.com/its-Harshit07"
              target="_blank"
              rel="noopener noreferrer"
              className="see-more-github-badge"
              title="View GitHub Repositories"
              aria-label="View Harshit's GitHub Repositories"
            >
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
        </div>

        <div className="portfolio-grid">
          {PROJECTS.map((project, idx) => (
            <div
              key={project.id}
              className={`portfolio-tile-link reveal-init ${isIntersecting ? 'reveal-active' : ''}`}
              style={{ transitionDelay: `${idx * 0.12}s` }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="portfolio-tile" data-project={project.id}>
                {/* Globe Live Link Button in Top Right */}
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-globe-btn"
                  title="Open Live Project"
                  onClick={(e) => handleGlobeClick(e, project.liveUrl)}
                  aria-label={`Open live site for ${project.title}`}
                >
                  <i className="fa-solid fa-globe"></i>
                </a>

                {/* Top 60% Image Container */}
                <div className="portfolio-tile-top">
                  <img src={project.image} alt={`${project.title} Project`} className="portfolio-bg-img" />
                </div>

                {/* Bottom 40% Details Container */}
                <div className="portfolio-tile-bottom">
                  <span className="portfolio-cat">{project.category}</span>
                  <h3 className="portfolio-project-title">{project.title}</h3>
                  <p className="portfolio-short-desc">{project.description}</p>
                  <div className="tile-hover-badge">
                    VIEW DETAILS <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="modal-backdrop" onClick={() => setSelectedProject(null)}>
          <div className="modal-container project-detail-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedProject(null)} aria-label="Close modal">
              <i className="fa-solid fa-xmark"></i>
            </button>
            <div className="modal-header">
              <span className="portfolio-cat">{selectedProject.category}</span>
              <h2>{selectedProject.title}</h2>
            </div>
            <div className="modal-body">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="modal-project-img"
              />
              <p className="modal-project-desc">
                {selectedProject.fullDescription}
              </p>
              <div className="modal-tech-wrapper">
                <h4 className="modal-tech-heading">TECHNOLOGY STACK</h4>
                <div className="modal-tech-tags">
                  {selectedProject.technologies.map((tech) => (
                    <span key={tech} className="modal-tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="modal-footer">
              {selectedProject.liveUrl && selectedProject.liveUrl !== '#' && (
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  LIVE DEMO <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              )}
              <button className="btn btn-outline" onClick={() => setSelectedProject(null)}>
                CLOSE
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
