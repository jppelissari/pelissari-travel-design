import React from 'react';
import { Surface } from '../types';
import { ClientDeliveryShell } from './client-delivery';
import { sampleDeliveryTemplate } from '../data/clientDeliveryTemplate';

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
