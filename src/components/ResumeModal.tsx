import React from 'react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const pdfUrl = '/harshit_larenc_cv.pdf';

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-container modal-resume" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          <i className="fa-solid fa-xmark"></i>
        </button>
        
        <div className="modal-header">
          <div className="modal-badge">
            <i className="fa-solid fa-file-pdf"></i> CURRICULUM VITAE PREVIEW
          </div>
          <h2>HARSHIT LARENC</h2>
          <p className="modal-sub">AI &amp; ML Engineer &amp; Full-Stack Developer</p>
        </div>

        <div className="modal-body resume-body">
          <div className="pdf-preview-container">
            <iframe
              src={`${pdfUrl}#view=FitH`}
              title="Harshit Larenc CV Preview"
              className="pdf-preview-iframe"
            />
          </div>
        </div>

        <div className="modal-footer">
          <a
            href={pdfUrl}
            download="Harshit_Larenc_CV.pdf"
            className="btn btn-primary"
          >
            <i className="fa-solid fa-file-arrow-down"></i> DOWNLOAD PDF
          </a>
          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            <i className="fa-solid fa-up-right-from-square"></i> OPEN IN NEW TAB
          </a>
          <button className="btn btn-outline" onClick={onClose}>
            CLOSE
          </button>
        </div>
      </div>
    </div>
  );
};

