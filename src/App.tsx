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
import BottomNavBar from './components/BottomNavBar';
import FloatingActionButton from './components/FloatingActionButton';
import { FitCallSource, Surface, TrackedFitCallLocation } from './types';
import { motion, AnimatePresence } from 'motion/react';
import { trackEvent } from './lib/tracking';
import { getStrategicFinding } from './data/strategicFindings';
import { useLanguage } from './context/LanguageContext';
import { useIsMobile } from './hooks/useIsMobile';

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
  const isMobile = useIsMobile();

  const _rawPath = window.location.pathname;
  const _normalizedPath = _rawPath.replace(/^\/pt(?=\/|$)/, '') || '/';

  // /acesso unlocks the exclusive access (client-link) surface with privacy off
  const isAcessoPath = _normalizedPath === '/acesso' || _normalizedPath === '/acesso/';
  const initialFinding = !isAcessoPath
    ? getStrategicFinding(_normalizedPath.replace(/^\/achados\//, '').replace(/\/$/, ''))
    : null;

  const [currentSurface, setCurrentSurface] = useState<Surface>(
    isAcessoPath ? 'client-link' : initialFinding ? 'strategic-finding' : 'home'
  );
  const [activeFindingSlug, setActiveFindingSlug] = useState<string | null>(initialFinding?.slug ?? null);
  const [isPrivateMode, setIsPrivateMode] = useState<boolean>(!isAcessoPath);
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
  }, []);

  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      const popPath = window.location.pathname;
      const normalizedPopPath = popPath.replace(/^\/pt(?=\/|$)/, '') || '/';
      const isAcesso = normalizedPopPath === '/acesso' || normalizedPopPath === '/acesso/';
      const finding = !isAcesso
        ? getStrategicFinding(normalizedPopPath.replace(/^\/achados\//, '').replace(/\/$/, ''))
        : null;
      const historySurface = event.state?.surface as Surface | undefined;

      if (isAcesso) {
        setIsPrivateMode(false);
        setCurrentSurface('client-link');
        setActiveFindingSlug(null);
        return;
      }

      setActiveFindingSlug(finding?.slug ?? event.state?.findingSlug ?? null);
      setCurrentSurface(finding ? 'strategic-finding' : historySurface ?? 'home');
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const onNavigate = (surface: Surface) => {
    const langPrefix = lang === 'pt' ? '/pt' : '';

    if (surface === 'client-link') {
      if (currentSurface !== 'client-link') {
        window.history.pushState({ surface }, '', `${langPrefix}/acesso`);
      } else {
        window.history.replaceState({ surface }, '', `${langPrefix}/acesso`);
      }
      setIsPrivateMode(false);
      setActiveFindingSlug(null);
      setCurrentSurface(surface);
      return;
    }

    if (currentSurface === 'strategic-finding' || currentSurface === 'client-link') {
      window.history.pushState({ surface }, '', langPrefix || '/');
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
      {/* Global Top Navigation Bar — desktop only layout, mobile shows logo only */}
      <TopAppBar
        currentSurface={currentSurface}
        onNavigate={onNavigate}
        onNavigateHomeSection={onNavigateHomeSection}
        onOpenFitCall={onOpenFitCall}
      />

      {/* Main Content Area — add bottom padding on mobile to clear the bottom nav */}
      <main
        className="flex-grow"
        style={isMobile ? { paddingBottom: 'calc(4rem + env(safe-area-inset-bottom, 0px))' } : undefined}
      >
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

      {/* Footer — hidden on mobile (bottom nav takes its place) */}
      {!isMobile && (
        <Footer
          onNavigate={onNavigate}
          currentSurface={currentSurface}
        />
      )}

      {/* ── Mobile-only UI ─────────────────────────────────────── */}
      {isMobile && (
        <>
          {/* Floating Action Button — Schedule Fit Call */}
          <FloatingActionButton onClick={() => onOpenFitCall('top_nav')} />

          {/* Bottom Navigation Bar */}
          <BottomNavBar
            currentSurface={currentSurface}
            onNavigate={onNavigate}
          />
        </>
      )}

      {/* Premium Diagnostic Fit Call Modal */}
      <FitCallModal
        isOpen={isFitCallOpen}
        onClose={() => setIsFitCallOpen(false)}
        source={fitCallSource}
      />
    </div>
  );
}
