import React from 'react';
import { ClientDeliveryTemplate } from '../../data/clientDeliveryTemplate';
import { Surface } from '../../types';

import DeliverySecurityBanner from './DeliverySecurityBanner';
import PrivacyModeToggle from './PrivacyModeToggle';
import DeliveryCover from './DeliveryCover';
import DeliveryHowToRead from './DeliveryHowToRead';
import RouteArchitectureSection from './RouteArchitectureSection';
import PacingSection from './PacingSection';
import HotelAreaLogicSection from './HotelAreaLogicSection';
import ExperiencePrioritiesSection from './ExperiencePrioritiesSection';
import BudgetAndBookingOrderSection from './BudgetAndBookingOrderSection';
import TransitionDesignSection from './TransitionDesignSection';
import RiskAndContingencySection from './RiskAndContingencySection';
import MapPlaceholderSection from './MapPlaceholderSection';
import ScopeBoundarySection from './ScopeBoundarySection';
import NextStepsSection from './NextStepsSection';
import DeliveryFooterActions from './DeliveryFooterActions';

interface ClientDeliveryShellProps {
  template: ClientDeliveryTemplate;
  isPrivateMode: boolean;
  setIsPrivateMode: React.Dispatch<React.SetStateAction<boolean>>;
  onNavigate: (surface: Surface) => void;
  onOpenFitCall?: () => void;
}

export default function ClientDeliveryShell({
  template,
  isPrivateMode,
  setIsPrivateMode,
  onNavigate,
  onOpenFitCall,
}: ClientDeliveryShellProps) {
  const handleGeneratePreview = () => {
    onNavigate('shareable-preview');
  };

  return (
    <div className="max-w-[900px] mx-auto px-4 md:px-8 py-8 md:py-14">

      <DeliverySecurityBanner meta={template.meta} isPrivateMode={isPrivateMode} />

      <PrivacyModeToggle
        isPrivateMode={isPrivateMode}
        onToggle={() => setIsPrivateMode((prev) => !prev)}
      />

      {/* A. Cover / executive overview */}
      <DeliveryCover meta={template.meta} isPrivateMode={isPrivateMode} />

      {/* C. How to read this document */}
      <DeliveryHowToRead />

      {/* D. Route architecture */}
      <RouteArchitectureSection phases={template.routePhases} />

      {/* E. Pacing view */}
      <PacingSection rows={template.pacingRows} />

      {/* F. Hotel area logic */}
      <HotelAreaLogicSection areas={template.hotelAreaLogic} />

      {/* G. Experience priorities */}
      <ExperiencePrioritiesSection items={template.experiencePriorities} />

      {/* H. Budget and booking order */}
      <BudgetAndBookingOrderSection
        budgetLogic={template.budgetLogic}
        bookingOrder={template.bookingOrder}
        isPrivateMode={isPrivateMode}
      />

      {/* I. Transition design */}
      <TransitionDesignSection transitions={template.transitions} />

      {/* J. Risk and contingency */}
      <RiskAndContingencySection
        flags={template.riskFlags}
        serviceTier={template.meta.serviceTier}
      />

      {/* K. Map placeholder */}
      <MapPlaceholderSection />

      {/* L. Scope boundary */}
      <ScopeBoundarySection scope={template.scopeBoundary} />

      {/* M. Next steps */}
      <NextStepsSection
        steps={template.nextSteps}
        onOpenFitCall={onOpenFitCall}
      />

      {/* Footer actions */}
      <DeliveryFooterActions
        onGeneratePreview={handleGeneratePreview}
        revisionWindowDays={template.meta.revisionWindowDays}
      />

    </div>
  );
}
