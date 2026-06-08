import React, { useState } from 'react';
import { Surface } from '../types';
import { ClientDeliveryShell } from './client-delivery';
import { sampleDeliveryTemplate } from '../data/clientDeliveryTemplate';
import ClientAccessPage from './ClientAccessPage';

interface ClientTravelLinkProps {
  onNavigate: (surface: Surface) => void;
  isPrivateMode: boolean;
  setIsPrivateMode: React.Dispatch<React.SetStateAction<boolean>>;
  onOpenFitCall?: () => void;
}

export default function ClientTravelLink({
  onNavigate,
  isPrivateMode,
  setIsPrivateMode,
  onOpenFitCall,
}: ClientTravelLinkProps) {
  const [showDelivery, setShowDelivery] = useState(false);

  const openDeliveryAtCover = () => {
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }

    setShowDelivery(true);

    [0, 400, 1000, 1800].forEach((delay) => {
      window.setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'auto' });
      }, delay);
    });
  };

  if (!showDelivery) {
    return (
      <ClientAccessPage
        onNavigate={onNavigate}
        onViewSampleDelivery={openDeliveryAtCover}
      />
    );
  }

  return (
    <ClientDeliveryShell
      template={sampleDeliveryTemplate}
      isPrivateMode={isPrivateMode}
      setIsPrivateMode={setIsPrivateMode}
      onNavigate={onNavigate}
      onOpenFitCall={onOpenFitCall}
    />
  );
}
