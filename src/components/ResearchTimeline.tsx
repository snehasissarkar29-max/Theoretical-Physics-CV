import React, { useState } from 'react';
import { TIMELINE_STAGES } from '../data/researchData';
import { Milestone, CheckCircle2, Clock, ArrowRight, Compass } from 'lucide-react';

export const ResearchTimeline: React.FC = () => {
  const [selectedStageId, setSelectedStageId] = useState<string>(TIMELINE_STAGES[4].id); // default to current stage

  const activeStage = TIMELINE_STAGES.find((s) => s.id === selectedStageId) || TIMELINE_STAGES[0];

  return (
    <section id="timeline" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-800/80">
      <div className="max-w-3xl mb-10">
        <div className="flex items-center gap-2 text-xs font-mono text-indigo-400 mb-2 tracking-wider uppercase">
          <Milestone className="w-3.5 h-3.5" />
          <span>Intellectual Trajectory</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-serif text-slate-100 font-medium tracking-tight mb-3">
          Research Timeline
        </h2>
        <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
          The progressive path of theoretical interests—from graduate physics foundations and astrophysical neutrino modeling to advanced mathematical physics, QFT, and current investigations in holographic horizon dynamics.
        </p>
      </div>

      {/* Horizontal / Stepper Timeline Bar */}
      <div className="relative mb-10 overflow-x-auto pb-4">
        <div className="flex items-center min-w-[720px] justify-between relative px-4">
          {/* Connecting line */}
          <div className="absolute top-1/2 left-6 right-6 -translate-y-1/2 h-0.5 bg-slate-800 z-0"></div>

          {TIMELINE_STAGES.map((stage, idx) => {
            const isSelected = stage.id === selectedStageId;
            const isCompleted = stage.status === 'Completed';
            const isCurrent = stage.status === 'Ongoing';

            return (
              <div key={stage.id} className="relative z-10 flex flex-col items-center group">
                <button
                  onClick={() => setSelectedStageId(stage.id)}
                  aria-label={`Select stage: ${stage.stage}`}
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-mono text-xs transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'bg-indigo-600 text-white ring-4 ring-indigo-500/20 shadow-lg shadow-indigo-600/30 scale-110'
                      : isCompleted
                      ? 'bg-slate-900 border border-emerald-600/70 text-emerald-400 hover:border-emerald-400'
                      : isCurrent
                      ? 'bg-slate-900 border border-indigo-500 text-indigo-300 hover:border-indigo-400 animate-pulse'
                      : 'bg-slate-950 border border-slate-750 text-slate-400 hover:border-slate-500'
                  }`}
                >
                  {idx + 1}
                </button>

                <span
                  onClick={() => setSelectedStageId(stage.id)}
                  className={`mt-2 text-xs font-mono text-center max-w-[95px] cursor-pointer truncate transition-colors ${
                    isSelected ? 'text-indigo-300 font-medium' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {stage.stage.split('•')[0].split('&')[0]}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Expanded Active Stage Detail Card */}
      <div className="rounded-xl border border-slate-800 bg-[#0a0e1a] p-6 sm:p-8 shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5 mb-6">
          <div>
            <span className="text-xs font-mono text-indigo-400 uppercase tracking-wider block mb-1">
              {activeStage.period} • {activeStage.institutionOrFocus}
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-medium text-slate-100">
              {activeStage.stage}
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <span
              className={`px-3 py-1 rounded text-xs font-mono border ${
                activeStage.status === 'Completed'
                  ? 'bg-emerald-950/60 text-emerald-300 border-emerald-800/60'
                  : activeStage.status === 'Ongoing'
                  ? 'bg-indigo-950/60 text-indigo-300 border-indigo-800/60'
                  : 'bg-slate-900 text-slate-400 border-slate-800'
              }`}
            >
              {activeStage.status}
            </span>
          </div>
        </div>

        <p className="text-base text-slate-300 font-light leading-relaxed mb-6">
          {activeStage.description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-850">
          <div>
            <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
              Key Academic Milestones:
            </h4>
            <ul className="space-y-2 text-sm text-slate-300 font-light">
              {activeStage.milestones.map((m, mIdx) => (
                <li key={mIdx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                  <span>{m}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
              Core Analytical & Mathematical Methods:
            </h4>
            <div className="flex flex-wrap gap-2">
              {activeStage.keyMethods.map((km, kmIdx) => (
                <span
                  key={kmIdx}
                  className="px-3 py-1.5 rounded text-xs font-mono bg-slate-900 text-slate-300 border border-slate-800"
                >
                  {km}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchTimeline;
