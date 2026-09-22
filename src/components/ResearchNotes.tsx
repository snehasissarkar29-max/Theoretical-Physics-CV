import React, { useState } from 'react';
import { RESEARCH_NOTES } from '../data/researchData';
import { ResearchNote } from '../types';
import MathView from './MathView';
import { 
  BookOpen, 
  Tag, 
  ChevronRight, 
  X, 
  ExternalLink,
  Search
} from 'lucide-react';

export const ResearchNotes: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeNote, setActiveNote] = useState<ResearchNote | null>(RESEARCH_NOTES[0]);

  const categories = ['All', 'AdS/CFT', 'QFT', 'Mathematical Physics'];

  const filteredNotes = selectedCategory === 'All' 
    ? RESEARCH_NOTES 
    : RESEARCH_NOTES.filter(note => note.category === selectedCategory);

  return (
    <section id="notes" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-800/80">
      {/* Header */}
      <div className="max-w-3xl mb-10">
        <div className="flex items-center gap-2 text-xs font-mono text-purple-400 mb-2 tracking-wider uppercase">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Digital Notebook</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-serif text-slate-100 font-medium tracking-tight mb-3">
          Research Notes
        </h2>
        <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
          Detailed mathematical derivations, pedagogical field theory summaries, and computational implementations maintained during ongoing theoretical investigations.
        </p>
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3 py-1.5 rounded text-xs font-mono transition-colors cursor-pointer ${
              selectedCategory === cat
                ? 'bg-purple-600 text-white font-medium shadow-md shadow-purple-900/20'
                : 'bg-slate-900/90 text-slate-400 hover:text-slate-200 border border-slate-800'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Notes Master-Detail Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: List of Notes (5 Cols) */}
        <div className="lg:col-span-5 space-y-3">
          {filteredNotes.map((note) => {
            const isActive = activeNote?.id === note.id;
            return (
              <div
                key={note.id}
                id={`note-card-${note.id}`}
                onClick={() => setActiveNote(note)}
                className={`p-4 sm:p-5 rounded-lg border transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#0d1326] border-purple-500/60 shadow-lg shadow-purple-950/20'
                    : 'bg-[#0a0e1a]/80 border-slate-800/80 hover:border-slate-700 hover:bg-[#0c1222]'
                }`}
              >
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-purple-950/60 text-purple-300 border border-purple-800/40">
                    {note.category}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">{note.date}</span>
                </div>

                <h3 className="text-base font-serif font-medium text-slate-100 mb-1.5 group-hover:text-purple-300 transition-colors">
                  {note.title}
                </h3>

                <p className="text-xs text-slate-300 font-light line-clamp-2 mb-3">
                  {note.summary}
                </p>

                <div className="flex items-center justify-between text-xs font-mono text-slate-400 pt-2 border-t border-slate-850">
                  <span>{note.content.equations.length} Formulations</span>
                  <span className={`flex items-center gap-1 ${isActive ? 'text-purple-400' : 'text-slate-400'}`}>
                    <span>Read Note</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Column: Note Reader (7 Cols) */}
        {activeNote && (
          <div className="lg:col-span-7 rounded-xl border border-slate-800 bg-[#0a0e1a] p-6 sm:p-8 shadow-2xl space-y-6">
            <div className="border-b border-slate-800 pb-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded text-xs font-mono bg-purple-950/60 text-purple-300 border border-purple-800/50">
                  {activeNote.category}
                </span>
                <span className="text-xs font-mono text-slate-400">{activeNote.date}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-medium text-slate-100">
                {activeNote.title}
              </h3>
            </div>

            {/* Introduction */}
            <div>
              <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
                {activeNote.content.intro}
              </p>
            </div>

            {/* Key LaTeX Equations */}
            <div className="space-y-4">
              <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                Analytical Formulations & Derivation Steps
              </h4>
              {activeNote.content.equations.map((eq, eIdx) => (
                <div
                  key={eIdx}
                  className="p-4 rounded-lg bg-[#06080d] border border-slate-850 space-y-2"
                >
                  <div className="text-xs font-mono text-purple-300 font-medium">
                    {eq.label}
                  </div>
                  <div className="py-1 overflow-x-auto text-center">
                    <MathView math={eq.formula} block />
                  </div>
                  <p className="text-xs text-slate-300 font-light">
                    {eq.explanation}
                  </p>
                </div>
              ))}
            </div>

            {/* Derivation Text if any */}
            {activeNote.content.derivation && (
              <div className="p-4 rounded-lg bg-slate-900/40 border border-slate-800 text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                <span className="font-mono text-purple-400 font-semibold block mb-1">
                  Derivation Narrative:
                </span>
                {activeNote.content.derivation}
              </div>
            )}

            {/* Key Takeaways */}
            <div>
              <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                Key Theoretical Insights
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-300 font-light">
                {activeNote.content.keyTakeaways.map((k, kIdx) => (
                  <li key={kIdx} className="flex items-start gap-2">
                    <span className="text-purple-400 font-mono">•</span>
                    <span>{k}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* References */}
            <div className="pt-4 border-t border-slate-800">
              <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                Seminal Academic References
              </h4>
              <ul className="space-y-1 text-xs font-mono text-slate-400">
                {activeNote.content.references.map((ref, rIdx) => (
                  <li key={rIdx} className="hover:text-slate-300">
                    [{rIdx + 1}] {ref}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ResearchNotes;
