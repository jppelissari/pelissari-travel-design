import React from 'react';
import EditorialVisual from './EditorialVisual';

interface DocumentPreviewPanelProps {
  eyebrow: string;
  title: string;
  description: string;
  lines?: string[];
  className?: string;
}

export default function DocumentPreviewPanel({
  eyebrow,
  title,
  description,
  lines = [],
  className = '',
}: DocumentPreviewPanelProps) {
  return (
    <div className={`document-preview-panel ${className}`}>
      <EditorialVisual variant="document" aspect="compact" />
      <div className="document-preview-copy">
        <span className="eyebrow text-stone">{eyebrow}</span>
        <h3>{title}</h3>
        <p>{description}</p>
        {lines.length > 0 && (
          <div className="document-preview-lines">
            {lines.map((line, index) => (
              <div key={line}>
                <span>0{index + 1}</span>
                <p>{line}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
