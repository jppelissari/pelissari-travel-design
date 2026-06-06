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
import { Surface } from './types';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [currentSurface, setCurrentSurface] = useState<Surface>('home');
  const [isPrivateMode, setIsPrivateMode] = useState<boolean>(true);
  const [isFitCallOpen, setIsFitCallOpen] = useState<boolean>(false);

  // Automatically scroll to top during navigation transitions
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [currentSurface]);

  const onNavigate = (surface: Surface) => {
    setCurrentSurface(surface);
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
    setCurrentSurface('home');
    scrollToHomeSection(sectionId);
  };

  const onOpenFitCall = () => {
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
            onNavigate={onNavigate} 
            onOpenFitCall={onOpenFitCall} 
          />
        );
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
            key={currentSurface}
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
      />
    </div>
  );
}
