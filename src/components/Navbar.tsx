import React, { useState, useEffect } from 'react';

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'skills', num: '01', label: 'TECHNICAL SKILLS' },
    { id: 'projects', num: '02', label: 'PROJECTS' },
    { id: 'education', num: '03', label: 'EDUCATION' },
    { id: 'certificates', num: '04', label: 'CERTIFICATES' },
    { id: 'contact', num: '05', label: 'CONTACT' }
  ];

  const handleNavClick = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`} id="navbar">
      <div className="nav-container">
        <a href="#hero" className="nav-brand" aria-label="Harshit Larenc Home" onClick={(e) => { e.preventDefault(); handleNavClick('hero'); }}>
          <div className="logo-ring">
            <svg viewBox="0 0 100 100" className="logo-svg">
              <circle cx="50" cy="50" r="44" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="6" fill="none" />
              <path d="M 50,6 A 44,44 0 1,1 6,50" stroke="#FFFFFF" strokeWidth="6" fill="none" strokeLinecap="round" />
            </svg>
            <span className="logo-letter">H</span>
          </div>
          <span className="brand-text">HARSHIT<span className="accent-dot">.</span></span>
        </a>

        <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`} id="nav-menu">
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.id} className="nav-item">
                <a
                  href={`#${item.id}`}
                  className="nav-link"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.id);
                  }}
                >
                  <span className="nav-num">{item.num}</span> {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className="nav-toggle"
          id="nav-toggle"
          aria-label="Toggle Navigation Menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
        </button>
      </div>
    </header>
  );
};
