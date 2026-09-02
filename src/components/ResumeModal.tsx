import React from 'react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-container modal-resume" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <i className="fa-solid fa-xmark"></i>
        </button>
        <div className="modal-header">
          <div className="modal-badge">
            <i className="fa-solid fa-file-lines"></i> CURRICULUM VITAE
          </div>
          <h2>HARSHIT LARENC</h2>
          <p className="modal-sub">AI &amp; ML Engineer &amp; Full-Stack Developer</p>
        </div>

        <div className="modal-body resume-body">
          <div className="resume-section">
            <h3>
              <i className="fa-solid fa-user"></i> PROFILE SUMMARY
            </h3>
            <p>
              Hey, I'm Harshit — an AI &amp; ML student who genuinely enjoys figuring out how things work and then building something with them. I'm interested in AI, full-stack development, cloud computing, and databases, but more than the technologies themselves, I enjoy the process of turning an idea into something real.
            </p>
          </div>

          <div className="resume-section">
            <h3>
              <i className="fa-solid fa-graduation-cap"></i> EDUCATION
            </h3>
            <div className="resume-entry">
              <strong>B.Tech in Computer Science &amp; Engineering (AI/ML)</strong> &bull; Lovely Professional University (2025 – 2029)
              <p>Current CGPA: 8.00 | Specialization in AI &amp; Deep Learning</p>
            </div>
            <div className="resume-entry">
              <strong>Intermediate (12th Grade, CBSE)</strong> &bull; St. Michael's Academy
              <p>Score: 75% Aggregate</p>
            </div>
            <div className="resume-entry">
              <strong>Matriculation (10th Grade, CBSE)</strong> &bull; St. Xavier's Higher Secondary School
              <p>Score: 84% Aggregate</p>
            </div>
          </div>

          <div className="resume-section">
            <h3>
              <i className="fa-solid fa-award"></i> CERTIFICATIONS
            </h3>
            <p>&bull; AWS Cloud Practitioner Essentials (AWS)</p>
            <p>&bull; AWS Technical Essentials (AWS)</p>
            <p>&bull; Oracle Cloud Infrastructure AI Foundations Associate (Oracle)</p>
            <p>&bull; Oracle Data Platform Foundations Associate (Oracle)</p>
          </div>
        </div>

        <div className="modal-footer">
          <button className="btn btn-primary" onClick={() => window.print()}>
            <i className="fa-solid fa-print"></i> PRINT / SAVE PDF
          </button>
          <button className="btn btn-outline" onClick={onClose}>
            CLOSE
          </button>
        </div>
      </div>
    </div>
  );
};
