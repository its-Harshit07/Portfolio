import React from 'react';
import { CONTACT_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      {/* Social Bar */}
      <div className="footer-social-strip">
        <div className="social-links-row">
          <a
            href={CONTACT_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            title="GitHub Profile"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href={CONTACT_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn Profile"
          >
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
          <a
            href={CONTACT_INFO.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LeetCode"
            title="LeetCode Profile"
          >
            <svg
              className="social-svg-icon"
              viewBox="0 0 24 24"
              width="18"
              height="18"
              fill="currentColor"
            >
              <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.17 6.2a1.374 1.374 0 0 0-.416.977c.004.37.152.723.416.98l4.316 4.317a1.374 1.374 0 0 0 1.948 0c.264-.264.412-.617.416-.98a1.374 1.374 0 0 0-.416-.977L9.67 6.75l3.813-3.813a1.374 1.374 0 0 0 0-1.948A1.374 1.374 0 0 0 13.483 0zm-6.22 8.78a1.374 1.374 0 0 0-.961.438L1.986 14.536a1.374 1.374 0 0 0 0 1.948l4.316 4.317a1.374 1.374 0 0 0 1.948 0c.264-.264.412-.617.416-.98a1.374 1.374 0 0 0-.416-.977l-3.813-3.813 3.813-3.813a1.374 1.374 0 0 0 0-1.948 1.374 1.374 0 0 0-.987-.49zm12.398 5.756a1.374 1.374 0 0 0-.977.416l-4.317 4.316a1.374 1.374 0 0 0 0 1.948c.264.264.617.412.98.416.37-.004.723-.152.98-.416l4.317-4.316a1.374 1.374 0 0 0 0-1.948c-.264-.264-.617-.412-.983-.416z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Copyright Strip */}
      <div className="footer-bottom-strip">
        <div className="container footer-bottom-container">
          <div className="footer-brand">
            <div className="logo-ring logo-ring-sm">
              <svg viewBox="0 0 100 100" className="logo-svg">
                <circle cx="50" cy="50" r="44" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="6" fill="none" />
                <path d="M 50,6 A 44,44 0 1,1 6,50" stroke="#FFFFFF" strokeWidth="6" fill="none" strokeLinecap="round" />
              </svg>
              <span className="logo-letter">H</span>
            </div>
            <span className="footer-copyright">&copy; 2026 HARSHIT LARENC. ALL RIGHTS RESERVED. BOLD MINIMAL TECH.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
