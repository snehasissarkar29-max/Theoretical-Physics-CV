import React from 'react';
import { PUBLICATIONS_LIST } from '../data/researchData';
import { BookOpen, FileText, ExternalLink, Clock, ShieldCheck } from 'lucide-react';

export const Publications: React.FC = () => {
  return (
    <section id="publications" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-800/80">
      <div className="max-w-3xl mb-10">
        <div className="flex items-center gap-2 text-xs font-mono text-indigo-400 mb-2 tracking-wider uppercase">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Academic Output</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-serif text-slate-100 font-medium tracking-tight mb-3">
          Publications & Preprints
        </h2>

        {/* Mandatory Academic Honesty Notice */}
        <div className="p-4 rounded-lg bg-[#0a0e1a] border border-slate-800 text-slate-300 text-sm leading-relaxed flex items-center gap-3 mb-6">
          <ShieldCheck className="w-5 h-5 text-indigo-400 shrink-0" />
          <p className="font-light italic text-slate-200">
            "Publications and preprints will be added as research progresses."
          </p>
        </div>
      </div>

      {/* Preprints / Working Manuscripts in Preparation */}
      <div className="space-y-6">
        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
          <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
            Works in Preparation & Working Drafts (Honest Academic Disclosure)
          </span>
          <span className="text-xs font-mono text-indigo-400">
            {PUBLICATIONS_LIST.length} Forthcoming
          </span>
        </div>

        {PUBLICATIONS_LIST.map((pub) => (
          <div
            key={pub.id}
            className="p-6 sm:p-7 rounded-xl border border-slate-800/90 bg-[#0a0e1a] hover:border-slate-700 transition-colors shadow-md"
          >
            <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-indigo-950/70 text-indigo-300 border border-indigo-800/60">
                  {pub.status}
                </span>
                <span className="text-xs font-mono text-slate-400">{pub.area}</span>
              </div>
              <span className="text-xs font-mono text-slate-400">{pub.year}</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-serif font-medium text-slate-100 mb-2">
              {pub.title}
            </h3>

            <div className="text-xs font-mono text-slate-400 mb-4">
              Authors: <span className="text-slate-200">{pub.authors.join(', ')}</span>
            </div>

            <p className="text-sm text-slate-300 font-light leading-relaxed mb-4 pl-4 border-l-2 border-indigo-500/40">
              {pub.abstract}
            </p>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-850 text-xs font-mono text-slate-400">
              <span className="text-[11px] text-slate-400 italic">
                Note: {pub.note}
              </span>

              <div className="flex items-center gap-3">
                <span className="text-slate-400">arXiv: {pub.arxivCategory} (Upcoming)</span>
                <button
                  disabled
                  className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-400 text-xs cursor-not-allowed flex items-center gap-1 opacity-70"
                >
                  <FileText className="w-3 h-3" />
                  <span>PDF (In Prep)</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Publications;
