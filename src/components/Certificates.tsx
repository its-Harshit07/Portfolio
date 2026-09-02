import React from 'react';
import { CERTIFICATES } from '../data/portfolioData';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export const Certificates: React.FC = () => {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section className="section certificates-section" id="certificates" ref={ref}>
      <div className="container">
        <div className={`section-header reveal-init ${isIntersecting ? 'reveal-active' : ''}`}>
          <h2 className="section-title">
            <span className="section-num">04</span> CERTIFICATES
          </h2>
          <div className="section-line"></div>
        </div>

        <div className="cert-grid cert-grid-2x2">
          {CERTIFICATES.map((cert, idx) => (
            <div
              key={cert.id}
              className={`cert-card reveal-init ${isIntersecting ? 'reveal-active' : ''}`}
              style={{ transitionDelay: `${idx * 0.12}s` }}
            >
              <div className="cert-img-box">
                <img src={cert.image} alt={`${cert.title} Preview`} className="cert-img" />
              </div>
              <div className="cert-card-content">
                <div className="cert-header">
                  <div className="cert-icon">
                    <i className={cert.issuerIcon}></i>
                  </div>
                  <span className="cert-badge">
                    <i className="fa-solid fa-shield-halved"></i> {cert.issuerBadge}
                  </span>
                </div>
                <h3 className="cert-title">{cert.title}</h3>
                <div className="cert-issuer">{cert.issuer}</div>
                <div className="cert-meta">
                  <span className="cert-year">
                    <i className="fa-regular fa-calendar"></i> OFFICIAL CREDENTIAL
                  </span>
                  <span className="cert-id">{cert.credentialId}</span>
                </div>
                <a href={cert.verifyUrl} target="_blank" rel="noopener noreferrer" className="cert-link btn-verify-link">
                  VERIFY <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
