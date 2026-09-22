import React, { useState } from 'react';
import { ROADMAP_NODES } from '../data/researchData';
import { RoadmapNode } from '../types';
import MathView from './MathView';
import { 
  GitFork, 
  BookMarked, 
  CheckCircle, 
  Sparkles, 
  ChevronRight, 
  BookOpen,
  X,
  Layers,
  Compass
} from 'lucide-react';

export const LearningRoadmap: React.FC = () => {
  const stages: Array<'Foundational' | 'Core Physics' | 'Advanced Theory' | 'Frontier Research'> = [
    'Foundational',
    'Core Physics',
    'Advanced Theory',
    'Frontier Research'
  ];

  const [activeStage, setActiveStage] = useState<'Foundational' | 'Core Physics' | 'Advanced Theory' | 'Frontier Research'>('Advanced Theory');
  const [selectedNode, setSelectedNode] = useState<RoadmapNode | null>(null);

  const currentNodes = ROADMAP_NODES.filter((n) => n.stage === activeStage);

  return (
    <section id="roadmap" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-800/80">
      <div className="max-w-3xl mb-10">
        <div className="flex items-center gap-2 text-xs font-mono text-amber-400 mb-2 tracking-wider uppercase">
          <GitFork className="w-3.5 h-3.5" />
          <span>Curriculum & Pedagogy</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-serif text-slate-100 font-medium tracking-tight mb-3">
          Learning Roadmap
        </h2>
        <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
          A structured academic progression mapping foundational physics and mathematics through advanced field theory, differential geometry, and frontier topics in holography and quantum gravity.
        </p>
      </div>

      {/* Stage Tabs Navigation */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
        {stages.map((stg, idx) => {
          const isActive = stg === activeStage;
          const count = ROADMAP_NODES.filter((n) => n.stage === stg).length;
          return (
            <button
              key={stg}
              onClick={() => setActiveStage(stg)}
              className={`p-4 rounded-lg border text-left transition-all cursor-pointer ${
                isActive
                  ? 'bg-[#0f172a] border-amber-500/70 shadow-lg shadow-amber-950/20'
                  : 'bg-[#0a0e1a]/80 border-slate-800 hover:border-slate-700 hover:bg-[#0c1220]'
              }`}
            >
              <div className="flex items-center justify-between gap-2 mb-1">
                <span className="text-[11px] font-mono text-amber-400 uppercase tracking-wider">
                  Stage 0{idx + 1}
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400">
                  {count} Modules
                </span>
              </div>
              <h3 className="text-base font-serif font-medium text-slate-100 mb-1">
                {stg}
              </h3>
              <p className="text-xs text-slate-400 font-light">
                {idx === 0 && 'Lagrangian mechanics, electrodynamics, and complex calculus'}
                {idx === 1 && 'Quantum postulates, angular momentum, and statistical ensembles'}
                {idx === 2 && 'Path integrals, renormalization, gauge theory, and GR'}
                {idx === 3 && 'AdS/CFT duality, pole-skipping, and quantum extremal surfaces'}
              </p>
            </button>
          );
        })}
      </div>

      {/* Active Stage Modules Grid */}
      <div className="p-6 rounded-xl border border-slate-800 bg-[#0a0e1a] mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4 mb-4">
          <div>
            <span className="text-xs font-mono text-amber-400 uppercase tracking-wider block mb-1">
              Active Stage Modules • {activeStage}
            </span>
            <h3 className="text-2xl font-serif font-medium text-slate-100">
              Curriculum & Canonical Literature
            </h3>
          </div>
          <span className="text-xs font-mono text-slate-400 self-start sm:self-auto">
            Click any module for detailed textbook references & open questions
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {currentNodes.map((node) => (
            <div
              key={node.id}
              onClick={() => setSelectedNode(node)}
              className="p-5 rounded-lg border border-slate-800/80 bg-[#06080e] hover:border-amber-500/50 hover:bg-[#0a0f1d] transition-all cursor-pointer flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[10px] font-mono text-slate-400">
                    Module #{node.order}
                  </span>
                  <span className="text-[10px] font-mono text-amber-400">
                    {node.recommendedBooks.length} Canonical Texts
                  </span>
                </div>

                <h4 className="text-lg font-serif font-medium text-slate-100 group-hover:text-amber-300 transition-colors mb-2">
                  {node.title}
                </h4>

                {/* Primary formula preview */}
                <div className="p-2 rounded bg-slate-950 border border-slate-850 mb-3 text-center overflow-x-auto text-xs">
                  <MathView math={node.primaryFormula} />
                </div>

                {/* Key Concepts Preview */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {node.keyConcepts.slice(0, 3).map((kc, kIdx) => (
                    <span
                      key={kIdx}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-900 text-slate-400 border border-slate-800"
                    >
                      {kc}
                    </span>
                  ))}
                  {node.keyConcepts.length > 3 && (
                    <span className="px-1.5 py-0.5 rounded text-[10px] font-mono text-slate-500">
                      +{node.keyConcepts.length - 3}
                    </span>
                  )}
                </div>
              </div>

              <div className="pt-2 border-t border-slate-850 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>{node.prerequisites.join(', ') || 'Foundational'}</span>
                <span className="group-hover:translate-x-1 transition-transform text-amber-400 flex items-center gap-1">
                  <span>Explore</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Node Detail Modal */}
      {selectedNode && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div
            className="bg-[#0c1220] border border-slate-700/80 rounded-xl max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl p-6 relative"
            role="dialog"
            aria-modal="true"
          >
            <button
              onClick={() => setSelectedNode(null)}
              className="absolute top-5 right-5 p-1.5 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-4 pr-8">
              <span className="text-xs font-mono text-amber-400 uppercase tracking-wider block mb-1">
                Module 0{selectedNode.order} • {selectedNode.stage}
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif text-slate-100 font-medium">
                {selectedNode.title}
              </h3>
            </div>

            {/* Formula Block */}
            <div className="p-4 rounded-lg bg-[#06080e] border border-slate-800 text-center mb-6 overflow-x-auto">
              <div className="text-[11px] font-mono text-slate-400 mb-1">Representative Formulation:</div>
              <MathView math={selectedNode.primaryFormula} block />
            </div>

            {/* Key Concepts */}
            <div className="mb-6 space-y-2">
              <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                Core Concepts & Theorems:
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {selectedNode.keyConcepts.map((kc, kIdx) => (
                  <span
                    key={kIdx}
                    className="px-2.5 py-1 rounded text-xs font-mono bg-amber-950/40 text-amber-200 border border-amber-800/40"
                  >
                    {kc}
                  </span>
                ))}
              </div>
            </div>

            {/* Recommended Canonical Textbooks */}
            <div className="space-y-3 mb-6">
              <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-amber-400" />
                <span>Canonical Textbooks & Monographs:</span>
              </h4>
              <div className="space-y-2">
                {selectedNode.recommendedBooks.map((book, bIdx) => (
                  <div
                    key={bIdx}
                    className="p-3 rounded-lg bg-[#06080e] border border-slate-800 flex items-start gap-3"
                  >
                    <BookMarked className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-sm font-medium text-slate-200 block">
                        {book.title}
                      </span>
                      <span className="text-xs font-mono text-slate-400 block mb-1">
                        {book.author}
                      </span>
                      <p className="text-xs text-slate-400 font-light">
                        {book.notes}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Frontier Problems */}
            <div className="mb-6 pt-4 border-t border-slate-800 space-y-2">
              <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-indigo-400" />
                <span>Frontier Conceptual Problems:</span>
              </h4>
              <ul className="space-y-1.5">
                {selectedNode.frontierProblems.map((prob, pIdx) => (
                  <li key={pIdx} className="text-xs text-slate-300 font-light flex items-start gap-2">
                    <span className="text-amber-400 font-mono">•</span>
                    <span>{prob}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex justify-end">
              <button
                onClick={() => setSelectedNode(null)}
                className="px-4 py-2 rounded text-xs font-mono text-slate-300 bg-slate-850 hover:bg-slate-800 border border-slate-700 cursor-pointer"
              >
                Close Module
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default LearningRoadmap;
