import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ResearchOverview from './components/ResearchOverview';
import ResearchDirections from './components/ResearchDirections';
import CurrentResearch from './components/CurrentResearch';
import PreviousResearch from './components/PreviousResearch';
import ResearchTimeline from './components/ResearchTimeline';
import Publications from './components/Publications';
import ResearchNotes from './components/ResearchNotes';
import ComputationalPhysics from './components/ComputationalPhysics';
import LearningRoadmap from './components/LearningRoadmap';
import QuestionExplorer from './components/QuestionExplorer';
import AcademicCV from './components/AcademicCV';
import AboutContact from './components/AboutContact';
import Footer from './components/Footer';
import QuickSearchModal from './components/QuickSearchModal';
import GravitationalWaveAudio from './components/GravitationalWaveAudio';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [selectedDirectionFilter, setSelectedDirectionFilter] = useState<number | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

  // Smooth scroll handler
  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const navOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleSelectDirection = (directionNumber: number) => {
    setSelectedDirectionFilter(directionNumber);
    handleNavigate('directions');
  };

  // Keyboard shortcut for Cmd+K / Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Update active section on scroll
  useEffect(() => {
    const sections = [
      'home',
      'research',
      'directions',
      'current-project',
      'previous-project',
      'timeline',
      'publications',
      'notes',
      'computational',
      'roadmap',
      'explorer',
      'cv',
      'about',
      'contact'
    ];

    const handleScroll = () => {
      const scrollY = window.scrollY + 200;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-sciency-spacetime relative min-h-screen text-slate-200 selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden">
      {/* Sciency Ambient Atmospheric Accents */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Subtle gravitational wave metric ripple rings */}
        <div className="absolute top-[18%] left-[10%] w-[500px] h-[500px] rounded-full border border-cyan-500/10 animate-gw-ripple pointer-events-none" />
        <div className="absolute top-[65%] right-[5%] w-[650px] h-[650px] rounded-full border border-indigo-500/10 animate-gw-ripple pointer-events-none" style={{ animationDelay: '3s' }} />
        
        {/* Spacetime Coordinate Ticks along the screen edge */}
        <div className="hidden 2xl:flex flex-col justify-between absolute left-3 top-24 bottom-24 text-[9px] font-mono text-cyan-500/20 select-none">
          <span>r = 0.00 rg</span>
          <span>r = 2.45 rg</span>
          <span>r = 6.00 rg (ISCO)</span>
          <span>r = 12.5 rg</span>
          <span>r → ∞</span>
        </div>
      </div>

      {/* Sticky Academic Navigation */}
      <Navigation
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Main Research Content Layout */}
      <main className="relative z-10">
        {/* 1. Hero with Animated Spacetime Geodesics */}
        <Hero
          onExploreResearch={() => handleNavigate('research')}
          onAboutMe={() => handleNavigate('about')}
        />

        {/* 2. Research Overview */}
        <ResearchOverview onSelectDirection={handleSelectDirection} />

        {/* 3. Research Directions (Curiosity, Agenda, 5 Directions) */}
        <ResearchDirections
          selectedDirectionFilter={selectedDirectionFilter}
          onClearFilter={() => setSelectedDirectionFilter(null)}
        />

        {/* 4. Current Research: BTZ Pole-Skipping & Interactive Visualizer */}
        <CurrentResearch />

        {/* 5. Previous Research: Neutrino Oscillations in Supernova & MSW Sim */}
        <PreviousResearch />

        {/* 6. Research Timeline */}
        <ResearchTimeline />

        {/* 7. Publications & Preprints */}
        <Publications />

        {/* 8. Research Notes (Digital Notebook with KaTeX & Code) */}
        <ResearchNotes />

        {/* 9. Computational Physics (Spectral density & Symbolic Tensor inspector) */}
        <ComputationalPhysics />

        {/* 10. Learning Roadmap (Foundational to Research) */}
        <LearningRoadmap />

        {/* 11. Question Explorer (Conceptual Frontiers) */}
        <QuestionExplorer />

        {/* 12. Academic CV */}
        <AcademicCV />

        {/* 13. About Me & Contact */}
        <AboutContact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Gravitational Wave Sound Synthesizer & Visualizer */}
      <GravitationalWaveAudio />

      {/* Global Quick Search Modal (⌘K) */}
      <QuickSearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onNavigate={handleNavigate}
      />
    </div>
  );
}
