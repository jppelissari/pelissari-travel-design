/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import TopAppBar from './components/TopAppBar';
import Footer from './components/Footer';
import HomeComercial from './components/HomeComercial';
import AntesDaReserva from './components/AntesDaReserva';
import SampleBlueprint from './components/SampleBlueprint';
import ClientTravelLink from './components/ClientTravelLink';
import ShareablePreview from './components/ShareablePreview';
import FitCallModal from './components/FitCallModal';
import StrategicFindingDetail from './components/StrategicFindingDetail';
import { FitCallSource, Surface, TrackedFitCallLocation } from './types';
import { motion, AnimatePresence } from 'motion/react';
import { trackEvent } from './lib/tracking';
import { getStrategicFinding } from './data/strategicFindings';
import { useLanguage } from './context/LanguageContext';

const trackedFitCallLocations = new Set<TrackedFitCallLocation>([
  'top_nav',
  'home_hero',
  'services_blueprint',
  'services_full_design',
  'services_signature',
  'diagnostic_section',
  'sample_blueprint_intro',
  'sample_blueprint_proof_bridge',
]);

export default function App() {
  const { lang } = useLanguage();
  const _rawPath = window.location.pathname;
  const _normalizedPath = _rawPath.startsWith('/pt') ? _rawPath.slice(3) : _rawPath;
  const initialFinding = getStrategicFinding(_normalizedPath.replace(/^\/achados\//, '').replace(/\/$/, ''));
  const [currentSurface, setCurrentSurface] = useState<Surface>(initialFinding ? 'strategic-finding' : 'home');
  const [activeFindingSlug, setActiveFindingSlug] = useState<string | null>(initialFinding?.slug ?? null);
  const [isPrivateMode, setIsPrivateMode] = useState<boolean>(true);
  const [isFitCallOpen, setIsFitCallOpen] = useState<boolean>(false);
  const [fitCallSource, setFitCallSource] = useState<FitCallSource>('top_nav');

  // Automatically scroll to top during navigation transitions
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [currentSurface, activeFindingSlug]);

  useEffect(() => {
    window.history.replaceState(
      { surface: currentSurface, findingSlug: activeFindingSlug },
      '',
      window.location.href,
    );
    // The initial history entry only needs to be labeled once for browser back/forward.
  }, []);

  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      const popPath = window.location.pathname;
      const normalizedPopPath = popPath.startsWith('/pt') ? popPath.slice(3) : popPath;
      const finding = getStrategicFinding(normalizedPopPath.replace(/^\/achados\//, '').replace(/\/$/, ''));
      const historySurface = event.state?.surface as Surface | undefined;

      setActiveFindingSlug(finding?.slug ?? event.state?.findingSlug ?? null);
      setCurrentSurface(finding ? 'strategic-finding' : historySurface ?? 'home');
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const onNavigate = (surface: Surface) => {
    if (currentSurface === 'strategic-finding') {
      window.history.pushState({ surface }, '', '/');
    } else {
      window.history.replaceState({ surface }, '', window.location.href);
    }
    setActiveFindingSlug(null);
    setCurrentSurface(surface);
  };

  const onOpenFinding = (slug: string) => {
    const finding = getStrategicFinding(slug);
    if (!finding) return;

    const langPrefix = lang === 'pt' ? '/pt' : '';
    window.history.replaceState(
      { surface: currentSurface, findingSlug: activeFindingSlug },
      '',
      window.location.href,
    );
    window.history.pushState(
      { surface: 'strategic-finding', findingSlug: finding.slug },
      '',
      `${langPrefix}/achados/${finding.slug}`,
    );
    setActiveFindingSlug(finding.slug);
    setCurrentSurface('strategic-finding');
  };

  const scrollToHomeSection = (sectionId: string, attempt = 0) => {
    window.requestAnimationFrame(() => {
      const section = document.getElementById(sectionId);

      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }

      if (attempt < 10) {
        window.setTimeout(() => scrollToHomeSection(sectionId, attempt + 1), 100);
      }
    });
  };

  const onNavigateHomeSection = (sectionId: string) => {
    onNavigate('home');
    scrollToHomeSection(sectionId);
  };

  const onOpenFitCall = (source: FitCallSource) => {
    if (trackedFitCallLocations.has(source as TrackedFitCallLocation)) {
      trackEvent('cta_fit_call_opened', { location: source });
    }

    setFitCallSource(source);
    setIsFitCallOpen(true);
  };

  const renderActiveSurface = () => {
    switch (currentSurface) {
      case 'home':
        return (
          <HomeComercial 
            onNavigate={onNavigate} 
            onOpenFitCall={onOpenFitCall} 
          />
        );
      case 'antes-da-reserva':
        return (
          <AntesDaReserva 
            onOpenFinding={onOpenFinding}
            onOpenFitCall={onOpenFitCall} 
          />
        );
      case 'strategic-finding': {
        const finding = activeFindingSlug ? getStrategicFinding(activeFindingSlug) : undefined;
        return finding ? (
          <StrategicFindingDetail
            finding={finding}
            onBack={() => onNavigate('antes-da-reserva')}
            onOpenFitCall={() => onOpenFitCall('antes_da_reserva')}
          />
        ) : null;
      }
      case 'sample-blueprint':
        return (
          <SampleBlueprint 
            onNavigate={onNavigate} 
            onOpenFitCall={onOpenFitCall} 
          />
        );
      case 'client-link':
        return (
          <ClientTravelLink
            onNavigate={onNavigate}
            isPrivateMode={isPrivateMode}
            setIsPrivateMode={setIsPrivateMode}
            onOpenFitCall={() => onOpenFitCall('sample_blueprint_bottom')}
          />
        );
      case 'shareable-preview':
        return (
          <ShareablePreview 
            onOpenFitCall={onOpenFitCall} 
          />
        );
      default:
        return (
          <HomeComercial 
            onNavigate={onNavigate} 
            onOpenFitCall={onOpenFitCall} 
          />
        );
    }
  };

  return (
    <div className="bg-white min-h-screen flex flex-col antialiased selection:bg-primary selection:text-white">
      {/* Global Top Navigation Bar */}
      <TopAppBar
        currentSurface={currentSurface}
        onNavigate={onNavigate}
        onNavigateHomeSection={onNavigateHomeSection}
        onOpenFitCall={onOpenFitCall}
      />

      {/* Main Content Area with fluid, premium motion transitions */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFindingSlug ?? currentSurface}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="w-full"
          >
            {renderActiveSurface()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Global Brand Footer */}
      <Footer 
        onNavigate={onNavigate} 
        currentSurface={currentSurface} 
      />

      {/* Premium Diagnostic Fit Call Modal */}
      <FitCallModal 
        isOpen={isFitCallOpen} 
        onClose={() => setIsFitCallOpen(false)} 
        source={fitCallSource}
      />
    </div>
  );
}
