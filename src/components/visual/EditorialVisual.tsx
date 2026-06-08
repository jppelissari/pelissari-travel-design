import React from 'react';

type EditorialVisualVariant = 'route' | 'document' | 'arrival' | 'stillness';
type EditorialVisualAspect = 'wide' | 'portrait' | 'compact';

interface EditorialVisualProps {
  variant: EditorialVisualVariant;
  eyebrow?: string;
  caption?: string;
  aspect?: EditorialVisualAspect;
  className?: string;
}

const variantLabel: Record<EditorialVisualVariant, string> = {
  route: 'Route logic',
  document: 'Private document',
  arrival: 'Arrival study',
  stillness: 'Protected space',
};

export default function EditorialVisual({
  variant,
  eyebrow,
  caption,
  aspect = 'wide',
  className = '',
}: EditorialVisualProps) {
  return (
    <figure
      className={`editorial-visual editorial-visual-${variant} editorial-visual-${aspect} ${className}`}
      aria-label={caption ?? variantLabel[variant]}
    >
      <div className="editorial-visual-frame" aria-hidden="true">
        <span className="editorial-visual-index">ELZ / {variantLabel[variant]}</span>
        <span className="editorial-visual-marker editorial-visual-marker-a" />
        <span className="editorial-visual-marker editorial-visual-marker-b" />
        <span className="editorial-visual-marker editorial-visual-marker-c" />
      </div>
      {(eyebrow || caption) && (
        <figcaption className="editorial-visual-caption">
          {eyebrow && <span>{eyebrow}</span>}
          {caption && <p>{caption}</p>}
        </figcaption>
      )}
    </figure>
  );
}
