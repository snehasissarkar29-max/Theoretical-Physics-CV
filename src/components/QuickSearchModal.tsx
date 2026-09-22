import React, { useState, useEffect, useMemo } from 'react';
import { 
  Search, 
  X, 
  ArrowRight, 
  Compass, 
  BookOpen, 
  Terminal, 
  HelpCircle, 
  FileText 
} from 'lucide-react';
import { 
  RESEARCH_DIRECTIONS, 
  RESEARCH_NOTES, 
  COMPUTATIONAL_PROJECTS, 
  RESEARCH_QUESTIONS, 
  ROADMAP_NODES 
} from '../data/researchData';

interface QuickSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (sectionId: string) => void;
}

export const QuickSearchModal: React.FC<QuickSearchModalProps> = ({
  isOpen,
  onClose,
  onNavigate
}) => {
  const [query, setQuery] = useState('');

  // Keyboard shortcut listener (Cmd+K / Ctrl+K / Escape)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Aggregate searchable items
  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();

    const matched: Array<{
      id: string;
      title: string;
      category: string;
      sectionId: string;
      desc: string;
      icon: 'topic' | 'note' | 'comp' | 'question' | 'roadmap';
    }> = [];

    // Research topics
    RESEARCH_DIRECTIONS.forEach((dir) => {
      dir.topics.forEach((t) => {
        if (
          t.title.toLowerCase().includes(q) ||
          t.description.toLowerCase().includes(q) ||
          t.suggestedTools.some((s) => s.toLowerCase().includes(q))
        ) {
          matched.push({
            id: t.id,
            title: t.title,
            category: `Topic • ${dir.title}`,
            sectionId: 'directions',
            desc: t.description,
            icon: 'topic'
          });
        }
      });
    });

    // Research notes
    RESEARCH_NOTES.forEach((n) => {
      if (
        n.title.toLowerCase().includes(q) ||
        n.summary.toLowerCase().includes(q) ||
        n.category.toLowerCase().includes(q)
      ) {
        matched.push({
          id: n.id,
          title: n.title,
          category: `Note • ${n.category}`,
          sectionId: 'notes',
          desc: n.summary,
          icon: 'note'
        });
      }
    });

    // Computational projects
    COMPUTATIONAL_PROJECTS.forEach((cp) => {
      if (
        cp.title.toLowerCase().includes(q) ||
        cp.summary.toLowerCase().includes(q) ||
        cp.method.toLowerCase().includes(q)
      ) {
        matched.push({
          id: cp.id,
          title: cp.title,
          category: `Computational • ${cp.language}`,
          sectionId: 'computational',
          desc: cp.summary,
          icon: 'comp'
        });
      }
    });

    // Research questions
    RESEARCH_QUESTIONS.forEach((rq) => {
      if (
        rq.question.toLowerCase().includes(q) ||
        rq.theoreticalContext.toLowerCase().includes(q) ||
        rq.relevantConcepts.some(c => c.toLowerCase().includes(q))
      ) {
        matched.push({
          id: rq.id,
          title: rq.question,
          category: `Open Question • ${rq.domain}`,
          sectionId: 'explorer',
          desc: rq.theoreticalContext,
          icon: 'question'
        });
      }
    });

    // Learning roadmap
    ROADMAP_NODES.forEach((rn) => {
      if (
        rn.title.toLowerCase().includes(q) ||
        rn.keyConcepts.some(kc => kc.toLowerCase().includes(q))
      ) {
        matched.push({
          id: rn.id,
          title: rn.title,
          category: `Roadmap • ${rn.stage}`,
          sectionId: 'roadmap',
          desc: rn.keyConcepts.slice(0, 3).join(', '),
          icon: 'roadmap'
        });
      }
    });

    return matched.slice(0, 8);
  }, [query]);

  if (!isOpen) return null;

  const handleSelect = (sectionId: string) => {
    onNavigate(sectionId);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div
        className="bg-[#0b0f19] border border-slate-700/80 rounded-xl max-w-2xl w-full shadow-2xl overflow-hidden"
        role="dialog"
        aria-modal="true"
      >
        {/* Search Input */}
        <div className="flex items-center px-4 py-3 border-b border-slate-800 gap-3">
          <Search className="w-5 h-5 text-slate-400" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search QFT, AdS/CFT, pole-skipping, differential geometry, textbooks..."
            className="w-full bg-transparent text-sm sm:text-base text-slate-100 placeholder-slate-500 focus:outline-none font-mono"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-slate-400 hover:text-slate-200 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <kbd className="hidden sm:inline px-2 py-0.5 text-[10px] font-mono bg-slate-800 border border-slate-700 rounded text-slate-400">
            ESC
          </kbd>
        </div>

        {/* Results List */}
        <div className="max-h-96 overflow-y-auto p-2">
          {query.trim() === '' ? (
            <div className="p-6 text-center text-xs font-mono text-slate-500 space-y-2">
              <p>Type keywords like "BTZ", "Matsubara", "Neutrino", "Lie algebra", "Path integral"</p>
              <div className="flex justify-center gap-2 pt-2">
                {['Holography', 'Pole-skipping', 'QFT', 'Neutrino', 'Curvature'].map((kw) => (
                  <button
                    key={kw}
                    onClick={() => setQuery(kw)}
                    className="px-2 py-1 rounded bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700 cursor-pointer"
                  >
                    {kw}
                  </button>
                ))}
              </div>
            </div>
          ) : results.length === 0 ? (
            <div className="p-8 text-center text-xs font-mono text-slate-400">
              No matching topics, notes, or formulations found for "{query}".
            </div>
          ) : (
            <div className="space-y-1">
              {results.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleSelect(item.sectionId)}
                  className="w-full p-3 rounded-lg text-left hover:bg-slate-800/60 transition-colors flex items-start justify-between gap-3 group cursor-pointer"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono text-indigo-400">
                        {item.category}
                      </span>
                    </div>
                    <h4 className="text-sm font-serif font-medium text-slate-200 group-hover:text-indigo-300 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-400 font-light line-clamp-1">
                      {item.desc}
                    </p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-indigo-400 shrink-0 mt-2 transition-transform group-hover:translate-x-1" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-4 py-2 bg-slate-950 border-t border-slate-850 flex items-center justify-between text-[11px] font-mono text-slate-500">
          <span>{results.length} results displayed</span>
          <span>Press ESC or click outside to dismiss</span>
        </div>
      </div>
    </div>
  );
};

export default QuickSearchModal;
