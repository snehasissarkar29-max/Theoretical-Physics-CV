import React from 'react';
import { RESEARCHER_INFO } from '../data/researchData';
import { Github, Mail, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800 bg-[#05070b] text-slate-400 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left space-y-1">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <span className="w-5 h-5 rounded border border-indigo-500/40 bg-indigo-950/40 flex items-center justify-center text-indigo-400 font-mono text-xs">
              Ψ
            </span>
            <span className="font-serif text-slate-200 font-medium text-base">
              {RESEARCHER_INFO.name}
            </span>
          </div>
          <p className="text-xs font-mono text-slate-500">
            Theoretical Physics • Quantum Field Theory • Holography & Black Holes
          </p>
          <p className="text-[11px] text-slate-400 font-light">
            Academic transparency: All research directions and topics represent current investigations and learning trajectories.
          </p>
        </div>

        <div className="flex items-center gap-4 text-xs font-mono">
          <a
            href={RESEARCHER_INFO.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-200 transition-colors"
          >
            GitHub
          </a>
          <a
            href={RESEARCHER_INFO.links.inspireHep}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-200 transition-colors"
          >
            Inspire-HEP
          </a>
          <a
            href={RESEARCHER_INFO.links.arxiv}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-200 transition-colors"
          >
            arXiv
          </a>
          <a
            href={`mailto:${RESEARCHER_INFO.email}`}
            className="hover:text-slate-200 transition-colors"
          >
            Email
          </a>
          <button
            onClick={scrollToTop}
            className="p-2 rounded bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-slate-200 transition-colors cursor-pointer"
            aria-label="Scroll back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
