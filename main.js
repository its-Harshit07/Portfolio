/**
 * HARSHIT LARENC PORTFOLIO - MAIN INTERACTION & ANIMATION LOGIC
 */

document.addEventListener('DOMContentLoaded', () => {

  /* ==========================================================================
     1. STICKY NAVBAR & MOBILE NAVIGATION DRAWER
     ========================================================================== */
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  const iconOpen = navToggle ? navToggle.querySelector('.icon-open') : null;
  const iconClose = navToggle ? navToggle.querySelector('.icon-close') : null;
  const navLinks = document.querySelectorAll('.nav-link');

  function toggleMenu() {
    navMenu.classList.toggle('active');
    const isOpen = navMenu.classList.contains('active');
    if (iconOpen) iconOpen.style.display = isOpen ? 'none' : 'block';
    if (iconClose) iconClose.style.display = isOpen ? 'block' : 'none';
  }

  if (navToggle) {
    navToggle.addEventListener('click', toggleMenu);
  }

  // Close mobile drawer when clicking a navigation link
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navMenu.classList.contains('active')) {
        toggleMenu();
      }
    });
  });

  /* ==========================================================================
     2. ACTIVE SECTION NAV HIGHLIGHTER (INTERSECTION OBSERVER)
     ========================================================================== */
  const sections = document.querySelectorAll('section[id]');

  const navObserverOptions = {
    root: null,
    rootMargin: '-30% 0px -40% 0px',
    threshold: 0
  };

  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }, navObserverOptions);

  sections.forEach(section => navObserver.observe(section));

  /* ==========================================================================
     3. SCROLL REVEAL ANIMATIONS
     ========================================================================== */
  const revealElements = document.querySelectorAll('.reveal-up, .reveal-fade-left, .reveal-fade-right');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealElements.forEach(el => revealObserver.observe(el));

  /* ==========================================================================
     4. SKILL BADGES MOBILE TOUCH BLOOM INTERACTION
     ========================================================================== */
  const skillBadges = document.querySelectorAll('.skill-badge');
  skillBadges.forEach(badge => {
    badge.addEventListener('touchstart', () => {
      badge.classList.add('bloomed');
    }, { passive: true });

    badge.addEventListener('touchend', () => {
      setTimeout(() => {
        badge.classList.remove('bloomed');
      }, 250);
    });

    badge.addEventListener('touchcancel', () => {
      badge.classList.remove('bloomed');
    });
  });

  /* ==========================================================================
     5. RESUME MODAL HANDLER
     ========================================================================== */
  const resumeModal = document.getElementById('resume-modal');
  const btnOpenIntro = document.getElementById('btn-open-resume-intro');
  const btnCloseResumeX = document.getElementById('close-resume-modal');
  const btnCloseResumeBtn = document.getElementById('btn-close-resume');

  function openResumeModal() {
    if (resumeModal) resumeModal.classList.remove('hidden');
  }

  function closeResumeModal() {
    if (resumeModal) resumeModal.classList.add('hidden');
  }

  if (btnOpenIntro) btnOpenIntro.addEventListener('click', openResumeModal);
  if (btnCloseResumeX) btnCloseResumeX.addEventListener('click', closeResumeModal);
  if (btnCloseResumeBtn) btnCloseResumeBtn.addEventListener('click', closeResumeModal);

  // Close modal when clicking backdrop
  window.addEventListener('click', (e) => {
    if (e.target === resumeModal) closeResumeModal();
  });

  /* ==========================================================================
     6. CONTACT FORM SUBMISSION HANDLER
     ========================================================================== */
  const contactForm = document.getElementById('contact-form');
  const formFeedback = document.getElementById('form-feedback');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const btnSubmit = document.getElementById('btn-submit-contact');
      const originalText = btnSubmit.innerHTML;

      btnSubmit.disabled = true;
      btnSubmit.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> SENDING...`;

      setTimeout(() => {
        btnSubmit.disabled = false;
        btnSubmit.innerHTML = originalText;
        contactForm.reset();
        
        formFeedback.classList.remove('hidden');
        setTimeout(() => {
          formFeedback.classList.add('hidden');
        }, 6000);
      }, 1200);
    });
  }

});
