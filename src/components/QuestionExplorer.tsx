import React, { useState } from 'react';
import { RESEARCH_QUESTIONS } from '../data/researchData';
import { ResearchQuestion } from '../types';
import MathView from './MathView';
import { 
  HelpCircle, 
  Brain, 
  AlertTriangle, 
  Compass, 
  BookOpen, 
  Layers
} from 'lucide-react';

export const QuestionExplorer: React.FC = () => {
  const domains: Array<'All' | 'Holography' | 'Black Holes' | 'QFT' | 'Quantum Information'> = [
    'All',
    'Holography',
    'Black Holes',
    'QFT',
    'Quantum Information'
  ];

  const [selectedDomain, setSelectedDomain] = useState<string>('All');
  const [expandedQuestionId, setExpandedQuestionId] = useState<string | null>(RESEARCH_QUESTIONS[0].id);

  const filteredQuestions = RESEARCH_QUESTIONS.filter((q) => {
    if (selectedDomain === 'All') return true;
    return q.domain === selectedDomain;
  });

  return (
    <section id="explorer" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-800/80">
      <div className="max-w-3xl mb-10">
        <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2 tracking-wider uppercase">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>Frontier Inquiries</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-serif text-slate-100 font-medium tracking-tight mb-3">
          Research Question Explorer
        </h2>
        <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
          Deep conceptual and structural puzzles across high-energy physics, black hole thermodynamics, and mathematical field theory that motivate my ongoing research and learning agenda.
        </p>
      </div>

      {/* Domain Filter Pills */}
      <div className="flex flex-wrap gap-2 mb-8">
        {domains.map((dom) => (
          <button
            key={dom}
            onClick={() => setSelectedDomain(dom)}
            className={`px-3 py-1.5 rounded text-xs font-mono transition-colors cursor-pointer ${
              selectedDomain === dom
                ? 'bg-cyan-600 text-white font-medium shadow-md shadow-cyan-950/20'
                : 'bg-slate-900/90 text-slate-400 hover:text-slate-200 border border-slate-800'
            }`}
          >
            {dom}
          </button>
        ))}
      </div>

      {/* Questions List */}
      <div className="space-y-4">
        {filteredQuestions.map((q) => {
          const isExpanded = expandedQuestionId === q.id;
          return (
            <div
              key={q.id}
              id={`question-card-${q.id}`}
              className={`rounded-xl border transition-all duration-200 ${
                isExpanded
                  ? 'bg-[#0a0f1d] border-cyan-500/60 shadow-xl shadow-cyan-950/20'
                  : 'bg-[#0a0e1a]/80 border-slate-800 hover:border-slate-700 hover:bg-[#0c1222]'
              }`}
            >
              {/* Question Header Row */}
              <div
                onClick={() => setExpandedQuestionId(isExpanded ? null : q.id)}
                className="p-5 sm:p-6 cursor-pointer flex items-start justify-between gap-4"
              >
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-950/70 text-cyan-300 border border-cyan-800/40">
                      {q.domain}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-serif font-medium text-slate-100">
                    {q.question}
                  </h3>
                </div>

                <button
                  className="p-1 rounded text-slate-400 hover:text-slate-200 shrink-0"
                  aria-label="Toggle question analysis"
                >
                  <span className="text-xs font-mono text-cyan-400">
                    {isExpanded ? 'Collapse' : 'Explore'}
                  </span>
                </button>
              </div>

              {/* Expandable Conceptual Analysis */}
              {isExpanded && (
                <div className="px-5 pb-6 sm:px-6 sm:pb-7 pt-2 border-t border-slate-800/80 space-y-6 animate-fadeIn">
                  {/* Mathematical Formulation Preview */}
                  {q.mathematicalFormulation && (
                    <div className="p-4 rounded-lg bg-[#06080e] border border-slate-850 text-center overflow-x-auto">
                      <div className="text-[11px] font-mono text-slate-400 mb-1">Theoretical Formulation:</div>
                      <MathView math={q.mathematicalFormulation} block />
                    </div>
                  )}

                  {/* Grid of Context & Difficulties */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-4 rounded-lg bg-[#06080e] border border-slate-850">
                      <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                        <Brain className="w-3.5 h-3.5 text-blue-400" />
                        <span>Theoretical Context & Foundations</span>
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                        {q.theoreticalContext}
                      </p>
                    </div>

                    <div className="p-4 rounded-lg bg-[#06080e] border border-slate-850">
                      <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                        <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
                        <span>Why This Question Remains Open</span>
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                        {q.whyOpen}
                      </p>
                    </div>
                  </div>

                  {/* Relevant Theoretical Concepts */}
                  <div>
                    <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                      <Compass className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Relevant Theoretical Concepts & Machinery:</span>
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {q.relevantConcepts.map((c, cIdx) => (
                        <span
                          key={cIdx}
                          className="px-3 py-1.5 rounded text-xs font-mono bg-cyan-950/40 text-cyan-200 border border-cyan-800/40"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Literature Seeds */}
                  <div className="pt-4 border-t border-slate-850">
                    <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-purple-400" />
                      <span>Seminal Literature Seeds & Papers:</span>
                    </h4>
                    <ul className="space-y-1 text-xs font-mono text-slate-400">
                      {q.literatureSeeds.map((lit, lIdx) => (
                        <li key={lIdx} className="hover:text-slate-200 flex items-start gap-1.5">
                          <span className="text-cyan-400">•</span>
                          <span>{lit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default QuestionExplorer;
