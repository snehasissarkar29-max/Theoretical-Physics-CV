import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Search, 
  FileText, 
  Compass, 
  GitBranch, 
  Atom, 
  Terminal, 
  HelpCircle, 
  User, 
  Mail, 
  BookOpen, 
  ChevronRight 
} from 'lucide-react';
import { RESEARCHER_INFO } from '../data/researchData';

interface NavigationProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenSearch: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  activeSection,
  onNavigate,
  onOpenSearch
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'research', label: 'Research' },
    { id: 'directions', label: 'Research Directions' },
    { id: 'current-project', label: 'Current Project' },
    { id: 'previous-project', label: 'Previous Work' },
    { id: 'notes', label: 'Research Notes' },
    { id: 'computational', label: 'Computational' },
    { id: 'roadmap', label: 'Learning Roadmap' },
    { id: 'explorer', label: 'Question Explorer' },
    { id: 'cv', label: 'CV' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleItemClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      id="main-navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#07090e]/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20'
          : 'bg-[#07090e]/60 backdrop-blur-sm border-b border-slate-800/30'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand/Academic Name */}
          <button
            id="nav-brand-button"
            onClick={() => handleItemClick('home')}
            className="flex items-center gap-2.5 text-left group cursor-pointer"
          >
            <div className="w-8 h-8 rounded border border-indigo-500/40 bg-indigo-950/40 flex items-center justify-center text-indigo-400 font-mono text-xs shadow-inner">
              Ψ
            </div>
            <div>
              <span className="font-serif text-lg tracking-wide text-slate-100 group-hover:text-indigo-300 transition-colors font-medium">
                {RESEARCHER_INFO.name}
              </span>
              <span className="hidden sm:block text-[11px] font-mono tracking-tight text-cyan-400/80">
                Theoretical & Mathematical Physics • Delhi
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav id="desktop-nav-links" className="hidden xl:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`nav-link-${item.id}`}
                onClick={() => handleItemClick(item.id)}
                className={`px-2.5 py-1.5 rounded text-xs font-medium transition-all ${
                  activeSection === item.id
                    ? 'text-indigo-300 bg-indigo-950/40 border border-indigo-800/60 shadow-xs'
                    : 'text-slate-300 hover:text-slate-100 hover:bg-slate-800/40'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Secondary Actions: Search & CV & Mobile Toggle */}
          <div className="flex items-center gap-2">
            <button
              id="nav-search-trigger"
              onClick={onOpenSearch}
              aria-label="Search research platform"
              className="flex items-center gap-2 px-2.5 py-1.5 rounded text-xs font-mono text-slate-400 hover:text-slate-200 bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all cursor-pointer"
            >
              <Search className="w-3.5 h-3.5 text-slate-400" />
              <span className="hidden md:inline">Quick Search</span>
              <kbd className="hidden md:inline px-1.5 py-0.5 text-[10px] bg-slate-800 border border-slate-700 rounded text-slate-400">
                ⌘K
              </kbd>
            </button>

            <button
              id="nav-cv-quick-button"
              onClick={() => handleItemClick('cv')}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-medium text-slate-200 bg-slate-800/60 hover:bg-slate-800 border border-slate-700 hover:border-indigo-500/40 transition-all cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-indigo-400" />
              <span>CV</span>
            </button>

            {/* Mobile menu hamburger */}
            <button
              id="nav-mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded text-slate-400 hover:text-slate-200 hover:bg-slate-800 focus:outline-none cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div id="mobile-nav-drawer" className="xl:hidden bg-[#0a0e1a] border-b border-slate-800 px-4 pt-2 pb-6 space-y-1 shadow-2xl">
          <div className="grid grid-cols-2 gap-1.5 pt-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`mobile-nav-link-${item.id}`}
                onClick={() => handleItemClick(item.id)}
                className={`flex items-center justify-between px-3 py-2 rounded text-xs font-medium text-left ${
                  activeSection === item.id
                    ? 'text-indigo-300 bg-indigo-950/50 border border-indigo-800/60'
                    : 'text-slate-300 hover:text-slate-100 hover:bg-slate-800/50'
                }`}
              >
                <span>{item.label}</span>
                <ChevronRight className="w-3 h-3 text-slate-500" />
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;
