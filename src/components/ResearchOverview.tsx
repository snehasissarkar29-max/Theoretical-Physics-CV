import React, { useState } from 'react';
import { RESEARCH_AREAS } from '../data/researchData';
import MathView from './MathView';
import { Layers, ChevronDown, ChevronUp, ArrowUpRight, Sparkles } from 'lucide-react';

interface ResearchOverviewProps {
  onSelectDirection: (directionNumber: number) => void;
}

export const ResearchOverview: React.FC<ResearchOverviewProps> = ({ onSelectDirection }) => {
  const [expandedArea, setExpandedArea] = useState<string | null>('holography');

  return (
    <section id="research" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-800/80">
      {/* Section Header */}
      <div className="max-w-3xl mb-12">
        <div className="flex items-center gap-2 text-xs font-mono text-indigo-400 mb-2 tracking-wider uppercase">
          <Layers className="w-3.5 h-3.5" />
          <span>Core Program</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-serif text-slate-100 font-medium tracking-tight mb-4">
          Research Overview
        </h2>
        <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed">
          My work is situated at the intersection of quantum field theory, gravitational physics, and mathematical methods. I investigate how non-perturbative boundary field theories encode the thermal, chaotic, and geometric properties of black hole horizons and spacetime geometry.
        </p>
      </div>

      {/* Research Areas Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {RESEARCH_AREAS.map((area, idx) => {
          const isExpanded = expandedArea === area.id;
          return (
            <div
              key={area.id}
              id={`research-card-${area.id}`}
              className={`rounded-lg border transition-all duration-200 bg-[#0a0e1a]/90 backdrop-blur-sm ${
                isExpanded
                  ? 'border-indigo-500/50 shadow-xl shadow-indigo-950/20'
                  : 'border-slate-800/80 hover:border-slate-700/80 shadow-md'
              }`}
            >
              {/* Card Header */}
              <div className="p-6">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-1">
                      Area 0{idx + 1}
                    </span>
                    <h3 className="text-2xl font-serif font-medium text-slate-100">
                      {area.title}
                    </h3>
                  </div>
                  <button
                    onClick={() => setExpandedArea(isExpanded ? null : area.id)}
                    className="p-1.5 rounded text-slate-400 hover:text-slate-200 hover:bg-slate-800/60 transition-colors cursor-pointer"
                    aria-label={`Toggle details for ${area.title}`}
                  >
                    {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </button>
                </div>

                <p className="text-sm text-slate-300 font-light leading-relaxed mb-4">
                  {area.shortDesc}
                </p>

                {/* Mathematical Formula Preview */}
                <div className="p-3.5 rounded bg-[#06080d] border border-slate-800/80 mb-4 overflow-x-auto">
                  <div className="text-xs font-mono text-slate-400 mb-1 flex items-center justify-between">
                    <span>Fundamental Relation</span>
                    <span className="text-[10px] text-indigo-400/80">LaTeX</span>
                  </div>
                  <MathView math={area.formula} block />
                  <p className="text-[11px] font-mono text-slate-400 text-center mt-1">
                    {area.formulaDesc}
                  </p>
                </div>

                {/* Subtopic Chips */}
                <div className="space-y-2">
                  <span className="text-xs font-mono text-slate-400 block">
                    Key Topics & Phenomena:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {area.subtopics.map((sub, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 rounded text-xs font-sans bg-slate-900/90 text-slate-200 border border-slate-800"
                      >
                        {sub}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Expandable Key Techniques & Connection */}
                {isExpanded && (
                  <div className="mt-5 pt-4 border-t border-slate-800/80 space-y-4 text-xs font-sans animate-fadeIn">
                    <div>
                      <span className="font-mono text-slate-400 block mb-1.5">
                        Analytical & Computational Techniques:
                      </span>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-slate-300">
                        {area.keyTechniques.map((tech, tIdx) => (
                          <li key={tIdx} className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
                            <span>{tech}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex justify-end pt-2">
                      <button
                        onClick={() => onSelectDirection(idx + 1)}
                        className="inline-flex items-center gap-1.5 text-xs font-mono text-indigo-300 hover:text-indigo-200 underline underline-offset-4 cursor-pointer"
                      >
                        <span>View Direction 0{idx + 1} Detailed Syllabus</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ResearchOverview;
