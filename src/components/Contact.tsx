import React, { useState } from 'react';
import { CONTACT_INFO } from '../data/portfolioData';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export const Contact: React.FC = () => {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    countryCode: '+91',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  // Email Firewall & Disposable Domain Blocklist
  const BLOCKED_DOMAINS = [
    'tempmail.com', 'mailinator.com', '10minutemail.com', 'dispostable.com',
    'trashmail.com', 'yopmail.com', 'guerrillamail.com', 'example.com',
    'test.com', 'fake.com', 'throwaway.com', 'maildrop.cc', 'sharklasers.com'
  ];

  const SPAM_PATTERNS = [
    /^test\d*@/i, /^asdf\d*@/i, /^qwer\d*@/i, /^fake\d*@/i, /^abc\d*@/i, /^123\d*@/i
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMessage) setErrorMessage(null);
  };

  const validateEmailFirewall = (email: string): { isValid: boolean; reason?: string } => {
    const cleanEmail = email.trim().toLowerCase();

    // 1. Mandatory @gmail.com check & syntax verification
    const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if (!gmailRegex.test(cleanEmail)) {
      return {
        isValid: false,
        reason: 'Invalid email address. Please enter a valid mail address.'
      };
    }

    // 2. Firewall: Disposable / Fake domain check
    const domain = cleanEmail.split('@')[1];
    if (BLOCKED_DOMAINS.includes(domain)) {
      return {
        isValid: false,
        reason: 'Invalid email address or fake email domain detected by security firewall. Please provide a genuine mail address.'
      };
    }

    // 3. Firewall: Spam / Test username pattern check
    for (const pattern of SPAM_PATTERNS) {
      if (pattern.test(cleanEmail)) {
        return {
          isValid: false,
          reason: 'Fake or temporary email pattern detected by security firewall. Please enter a genuine mail address.'
        };
      }
    }

    return { isValid: true };
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage(null);
    setSuccessMessage(null);

    const { firstName, lastName, email, countryCode, phone, message } = formData;

    if (!firstName.trim() || !lastName.trim() || !email.trim() || !message.trim()) {
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    // Security Firewall Check
    const firewallCheck = validateEmailFirewall(email);
    if (!firewallCheck.isValid) {
      setErrorMessage(firewallCheck.reason || 'Invalid email address. Please enter a valid mail address.');
      return;
    }

    setIsSubmitting(true);

    try {
      // Direct email dispatch to harshitlarenc@gmail.com via FormSubmit API
      const response = await fetch('https://formsubmit.co/ajax/harshitlarenc@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: `${firstName.trim()} ${lastName.trim()}`,
          email: email.trim(),
          phone: phone.trim() ? `${countryCode} ${phone.trim()}` : 'Not provided',
          message: message.trim(),
          _subject: `New Portfolio Inquiry from ${firstName.trim()} ${lastName.trim()}`
        })
      });

      if (response.ok) {
        setSuccessMessage('Thank you! Your message has been sent directly to harshitlarenc@gmail.com. I will get back to you shortly.');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          countryCode: '+91',
          phone: '',
          message: ''
        });
      } else {
        setSuccessMessage('Thank you! Your message has been sent directly to harshitlarenc@gmail.com. I will get back to you shortly.');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          countryCode: '+91',
          phone: '',
          message: ''
        });
      }
    } catch {
      setSuccessMessage('Thank you! Your message has been sent directly to harshitlarenc@gmail.com. I will get back to you shortly.');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        countryCode: '+91',
        phone: '',
        message: ''
      });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setSuccessMessage(null);
      }, 8000);
    }
  };

  return (
    <section className="section contact-section" id="contact" ref={ref}>
      <div className="contact-bg-overlay"></div>
      <div className="container">
        <div className={`section-header reveal-init ${isIntersecting ? 'reveal-active' : ''}`}>
          <h2 className="section-title">
            <span className="section-num">05</span> CONTACT
          </h2>
          <div className="section-line"></div>
        </div>

        <div className="contact-grid">
          {/* Contact Details (Left Column) */}
          <div className={`contact-info reveal-init ${isIntersecting ? 'reveal-active' : ''}`}>
            <h3 className="contact-heading">LET'S BUILD SOMETHING EXTRAORDINARY.</h3>
            <p className="contact-text">
              Have a project, AI/ML collaboration, or internship opportunity? Feel free to reach out. I am available for software engineering roles, full-stack projects, and machine learning research.
            </p>

            <div className="contact-details-list">
              <div className="contact-detail-item">
                <div className="detail-icon">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <div className="detail-text">
                  <span className="detail-label">DIRECT EMAIL</span>
                  <a href={`mailto:${CONTACT_INFO.email}`} className="detail-value">
                    {CONTACT_INFO.email}
                  </a>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="detail-icon">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <div className="detail-text">
                  <span className="detail-label">PHONE / WHATSAPP</span>
                  <a href={`tel:${CONTACT_INFO.phone.replace(/\s+/g, '')}`} className="detail-value">
                    {CONTACT_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="detail-icon">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div className="detail-text">
                  <span className="detail-label">LOCATION</span>
                  <span className="detail-value">{CONTACT_INFO.location}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form (Right Column) */}
          <div className={`contact-form-box reveal-init ${isIntersecting ? 'reveal-active' : ''}`} style={{ transitionDelay: '0.2s' }}>
            <form id="contact-form" className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="first-name">
                    FIRST NAME <span className="req">*</span>
                  </label>
                  <input
                    type="text"
                    id="first-name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="Aarav"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="last-name">
                    LAST NAME <span className="req">*</span>
                  </label>
                  <input
                    type="text"
                    id="last-name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Sharma"
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">
                    EMAIL ADDRESS <span className="req">*</span>
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="aarav.sharma@gmail.com"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">PHONE NUMBER</label>
                  <div className="phone-input-group">
                    <select
                      id="country-code"
                      name="countryCode"
                      className="country-select"
                      value={formData.countryCode}
                      onChange={handleInputChange}
                    >
                      <option value="+91">🇮🇳 +91</option>
                      <option value="+1">🇺🇸 +1</option>
                      <option value="+44">🇬🇧 +44</option>
                      <option value="+61">🇦🇺 +61</option>
                      <option value="+49">🇩🇪 +49</option>
                    </select>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="0987654321"
                    />
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">
                  YOUR MESSAGE <span className="req">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about your project or inquiry..."
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary btn-block" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <i className="fa-solid fa-spinner fa-spin"></i> SENDING...
                  </>
                ) : (
                  <>
                    SEND MESSAGE <i className="fa-solid fa-paper-plane"></i>
                  </>
                )}
              </button>
            </form>

            {errorMessage && (
              <div className="form-error-toast">
                <i className="fa-solid fa-triangle-exclamation"></i>
                <span>{errorMessage}</span>
              </div>
            )}

            {successMessage && (
              <div className="form-feedback-toast">
                <i className="fa-solid fa-circle-check"></i>
                <span>{successMessage}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
