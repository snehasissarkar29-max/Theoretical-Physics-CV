import React, { useState, useMemo } from 'react';
import { RESEARCH_DIRECTIONS } from '../data/researchData';
import { ResearchTopic, ResearchStatus } from '../types';
import MathView from './MathView';
import { 
  Compass, 
  Search, 
  Filter, 
  Info, 
  BookOpen, 
  CheckCircle2, 
  Clock, 
  Sparkles, 
  Brain, 
  ArrowRight,
  X,
  ExternalLink
} from 'lucide-react';

interface ResearchDirectionsProps {
  selectedDirectionFilter?: number | null;
  onClearFilter?: () => void;
}

export const ResearchDirections: React.FC<ResearchDirectionsProps> = ({
  selectedDirectionFilter,
  onClearFilter
}) => {
  const [activeDirectionId, setActiveDirectionId] = useState<string>('all');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedTopic, setSelectedTopic] = useState<ResearchTopic | null>(null);

  // Sync external filter if supplied
  React.useEffect(() => {
    if (selectedDirectionFilter) {
      setActiveDirectionId(`dir-${selectedDirectionFilter}`);
    }
  }, [selectedDirectionFilter]);

  const allTopics = useMemo(() => {
    return RESEARCH_DIRECTIONS.flatMap((d) => d.topics);
  }, []);

  const filteredTopics = useMemo(() => {
    return allTopics.filter((topic) => {
      // Direction filter
      if (activeDirectionId !== 'all' && topic.directionId !== activeDirectionId) {
        return false;
      }
      // Status filter
      if (statusFilter !== 'all' && topic.status !== statusFilter) {
        return false;
      }
      // Search query
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const matchesTitle = topic.title.toLowerCase().includes(q);
        const matchesDesc = topic.description.toLowerCase().includes(q);
        const matchesTools = topic.suggestedTools.some((t) => t.toLowerCase().includes(q));
        const matchesQuestions = topic.possibleQuestions.some((pq) => pq.toLowerCase().includes(q));
        return matchesTitle || matchesDesc || matchesTools || matchesQuestions;
      }
      return true;
    });
  }, [allTopics, activeDirectionId, statusFilter, searchQuery]);

  const getStatusBadge = (status: ResearchStatus) => {
    switch (status) {
      case 'Learned':
        return (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-mono bg-teal-950/70 text-teal-300 border border-teal-800/60">
            <CheckCircle2 className="w-3 h-3 text-teal-400" />
            <span>Learned</span>
          </span>
        );
      case 'Completed':
        return (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-mono bg-emerald-950/70 text-emerald-300 border border-emerald-800/60">
            <CheckCircle2 className="w-3 h-3 text-emerald-400" />
            <span>Completed</span>
          </span>
        );
      case 'Active Research':
        return (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-mono bg-indigo-950/70 text-indigo-300 border border-indigo-700/60">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse"></span>
            <span>Active Research</span>
          </span>
        );
      case 'Learning':
        return (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-mono bg-amber-950/70 text-amber-300 border border-amber-800/60">
            <Clock className="w-3 h-3 text-amber-400" />
            <span>Learning</span>
          </span>
        );
      case 'Exploring':
        return (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-mono bg-cyan-950/70 text-cyan-300 border border-cyan-800/60">
            <Sparkles className="w-3 h-3 text-cyan-400" />
            <span>Exploring</span>
          </span>
        );
    }
  };

  return (
    <section id="directions" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-800/80">
      {/* Section Header */}
      <div className="max-w-4xl mb-8">
        <div className="flex items-center gap-2 text-xs font-mono text-teal-400 mb-2 tracking-wider uppercase">
          <Compass className="w-3.5 h-3.5" />
          <span>Curiosity & Future Horizons</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-serif text-slate-100 font-medium tracking-tight mb-4">
          Research Directions
        </h2>
        
        {/* Academic Transparency Callout Box */}
        <div className="p-4 rounded-lg bg-indigo-950/30 border border-indigo-800/50 text-slate-300 text-sm leading-relaxed flex items-start gap-3 mb-6">
          <Info className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold text-indigo-300 block mb-1">
              Scope of Investigation & Learning Agenda
            </span>
            <p className="font-light">
              This section explicitly organizes topics and methodologies I am currently interested in studying, developing, and potentially researching. These do not represent claimed completed discoveries, but rather my progressive academic curriculum and theoretical trajectory toward PhD-level research.
            </p>
          </div>
        </div>
      </div>

      {/* Filter and Search Controls */}
      <div className="space-y-4 mb-8 bg-[#0a0e1a]/80 border border-slate-800/80 p-4 rounded-lg">
        {/* Direction Tabs */}
        <div className="flex flex-wrap gap-2 items-center">
          <span className="text-xs font-mono text-slate-400 mr-2 flex items-center gap-1">
            <Filter className="w-3 h-3" />
            <span>Direction:</span>
          </span>
          <button
            onClick={() => setActiveDirectionId('all')}
            className={`px-3 py-1.5 rounded text-xs font-mono transition-colors cursor-pointer ${
              activeDirectionId === 'all'
                ? 'bg-indigo-600 text-white font-medium'
                : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
            }`}
          >
            All Directions ({allTopics.length})
          </button>
          {RESEARCH_DIRECTIONS.map((dir) => (
            <button
              key={dir.id}
              onClick={() => setActiveDirectionId(dir.id)}
              className={`px-3 py-1.5 rounded text-xs font-mono transition-colors cursor-pointer ${
                activeDirectionId === dir.id
                  ? 'bg-indigo-600 text-white font-medium'
                  : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
              }`}
            >
              Dir 0{dir.number}: {dir.title} ({dir.topics.length})
            </button>
          ))}
        </div>

        {/* Secondary Filters: Status & Search */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 border-t border-slate-800/60">
          {/* Status buttons */}
          <div className="flex flex-wrap gap-1.5 w-full sm:w-auto items-center">
            <span className="text-xs font-mono text-slate-400 mr-2">Status:</span>
            {['all', 'Learned', 'Active Research', 'Learning', 'Exploring', 'Completed'].map((st) => (
              <button
                key={st}
                onClick={() => setStatusFilter(st)}
                className={`px-2.5 py-1 rounded text-[11px] font-mono transition-colors cursor-pointer ${
                  statusFilter === st
                    ? 'bg-slate-700 text-white'
                    : 'bg-slate-900/90 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                {st === 'all' ? 'All Statuses' : st}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full sm:w-64">
            <Search className="w-3.5 h-3.5 absolute left-3 top-2.5 text-slate-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search topics, math tools..."
              className="w-full bg-[#07090e] border border-slate-800 rounded pl-8 pr-3 py-1.5 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-2 text-slate-500 hover:text-slate-300 cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Topics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredTopics.map((topic) => (
          <div
            key={topic.id}
            id={`topic-card-${topic.id}`}
            onClick={() => setSelectedTopic(topic)}
            className="group rounded-lg border border-slate-800/80 bg-[#0a0e1a]/70 hover:bg-[#0c1222] p-5 transition-all duration-200 hover:border-indigo-500/40 cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                  {topic.directionName}
                </span>
                {getStatusBadge(topic.status)}
              </div>

              <h3 className="text-lg font-serif font-medium text-slate-100 group-hover:text-indigo-300 transition-colors mb-2">
                {topic.title}
              </h3>

              <p className="text-xs text-slate-300 font-light leading-relaxed line-clamp-3 mb-3">
                {topic.description}
              </p>

              {topic.latexFormula && (
                <div className="p-2 rounded bg-[#06080d] border border-slate-850 my-2 overflow-x-auto text-center">
                  <MathView math={topic.latexFormula} />
                </div>
              )}
            </div>

            <div className="pt-3 border-t border-slate-800/60 flex items-center justify-between text-xs font-mono text-slate-400">
              <span>{topic.possibleQuestions.length} Open Questions</span>
              <span className="group-hover:translate-x-1 transition-transform text-indigo-400 flex items-center gap-1">
                <span>Expand</span>
                <ArrowRight className="w-3 h-3" />
              </span>
            </div>
          </div>
        ))}
      </div>

      {filteredTopics.length === 0 && (
        <div className="text-center py-16 border border-dashed border-slate-800 rounded-lg">
          <p className="text-slate-400 text-sm font-mono mb-2">No research topics match your current filter.</p>
          <button
            onClick={() => {
              setActiveDirectionId('all');
              setStatusFilter('all');
              setSearchQuery('');
            }}
            className="text-xs font-mono text-indigo-400 hover:underline cursor-pointer"
          >
            Reset all filters
          </button>
        </div>
      )}

      {/* Detailed Topic Modal Dialog */}
      {selectedTopic && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div
            className="bg-[#0c1220] border border-slate-700/80 rounded-xl max-w-2xl w-full max-h-[88vh] overflow-y-auto shadow-2xl p-6 relative"
            role="dialog"
            aria-modal="true"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedTopic(null)}
              className="absolute top-5 right-5 p-1.5 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Close topic dialog"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="mb-4 pr-8">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-xs font-mono text-indigo-400 uppercase tracking-wider">
                  {selectedTopic.directionName}
                </span>
                <span className="text-slate-600">•</span>
                {getStatusBadge(selectedTopic.status)}
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif text-slate-100 font-medium">
                {selectedTopic.title}
              </h3>
            </div>

            {/* Formula if available */}
            {selectedTopic.latexFormula && (
              <div className="p-4 rounded-lg bg-[#06080e] border border-slate-800 mb-6 text-center overflow-x-auto">
                <div className="text-[11px] font-mono text-slate-500 mb-1">Characteristic Formulation:</div>
                <MathView math={selectedTopic.latexFormula} block />
              </div>
            )}

            {/* Body Sections: 1 to 5 */}
            <div className="space-y-5 text-sm">
              {/* 1. What the topic is */}
              <div>
                <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                  <span>1. What the Topic Is</span>
                </h4>
                <p className="text-slate-300 font-light leading-relaxed pl-3 border-l border-slate-800">
                  {selectedTopic.description}
                </p>
              </div>

              {/* 2. Why it is interesting */}
              <div>
                <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
                  <span>2. Why It Is Interesting</span>
                </h4>
                <p className="text-slate-300 font-light leading-relaxed pl-3 border-l border-slate-800">
                  {selectedTopic.whyInteresting}
                </p>
              </div>

              {/* 3. Prerequisites */}
              <div>
                <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                  <span>3. Prerequisites</span>
                </h4>
                <div className="flex flex-wrap gap-1.5 pl-3 border-l border-slate-800">
                  {selectedTopic.prerequisites.map((req, rIdx) => (
                    <span
                      key={rIdx}
                      className="px-2.5 py-1 rounded text-xs font-mono bg-slate-900 text-slate-300 border border-slate-800"
                    >
                      {req}
                    </span>
                  ))}
                </div>
              </div>

              {/* 4. Suggested Mathematical Tools */}
              <div>
                <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                  <span>4. Suggested Mathematical Tools</span>
                </h4>
                <div className="flex flex-wrap gap-1.5 pl-3 border-l border-slate-800">
                  {selectedTopic.suggestedTools.map((tool, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded text-xs font-sans bg-indigo-950/40 text-indigo-200 border border-indigo-800/40"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* 5. Possible Research Questions */}
              <div>
                <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-400"></span>
                  <span>5. Open Research Questions</span>
                </h4>
                <ul className="space-y-2 pl-3 border-l border-slate-800">
                  {selectedTopic.possibleQuestions.map((q, qIdx) => (
                    <li key={qIdx} className="text-xs text-slate-300 font-light flex items-start gap-2">
                      <span className="font-mono text-indigo-400 shrink-0">Q{qIdx + 1}:</span>
                      <span>{q}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-800 flex justify-end">
              <button
                onClick={() => setSelectedTopic(null)}
                className="px-4 py-2 rounded text-xs font-mono text-slate-300 bg-slate-850 hover:bg-slate-800 border border-slate-700 cursor-pointer"
              >
                Close Window
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ResearchDirections;
