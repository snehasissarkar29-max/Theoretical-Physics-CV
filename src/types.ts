export type ResearchStatus = 'Exploring' | 'Learning' | 'Learned' | 'Active Research' | 'Completed';

export interface ResearchTopic {
  id: string;
  title: string;
  directionId: string;
  directionName: string;
  status: ResearchStatus;
  description: string;
  whyInteresting: string;
  prerequisites: string[];
  suggestedTools: string[];
  possibleQuestions: string[];
  latexFormula?: string;
}

export interface ResearchDirection {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  accentColor: string;
  overview: string;
  topics: ResearchTopic[];
}

export interface ResearchArea {
  id: string;
  title: string;
  shortDesc: string;
  formula: string;
  formulaDesc: string;
  subtopics: string[];
  keyTechniques: string[];
  accent: string;
}

export interface ResearchNote {
  id: string;
  title: string;
  category: 'QFT' | 'AdS/CFT' | 'General Relativity' | 'Mathematical Physics' | 'Particle Physics' | 'Quantum Information' | 'Computational Physics';
  date: string;
  summary: string;
  content: {
    intro: string;
    equations: { label: string; formula: string; explanation: string }[];
    derivation?: string;
    codeSnippet?: {
      language: string;
      title: string;
      code: string;
    };
    keyTakeaways: string[];
    references: string[];
  };
  relatedTopics: string[];
}

export interface ComputationalProject {
  id: string;
  title: string;
  language: 'Python' | 'Mathematica' | 'C++ / Fortran';
  method: 'Numerical PDE' | 'Symbolic Tensors' | 'Markov Chain / MCMC' | 'Spectral Methods';
  summary: string;
  algorithmDesc: string;
  codeSnippet?: string;
  equation: string;
}

export interface RoadmapNode {
  id: string;
  order: number;
  title: string;
  stage: 'Foundational' | 'Core Physics' | 'Advanced Theory' | 'Frontier Research';
  prerequisites: string[];
  keyConcepts: string[];
  recommendedBooks: { title: string; author: string; notes: string }[];
  frontierProblems: string[];
  primaryFormula: string;
}

export interface ResearchQuestion {
  id: string;
  domain: 'QFT' | 'Holography' | 'Black Holes' | 'Quantum Information' | 'Particle Physics';
  question: string;
  theoreticalContext: string;
  mathematicalFormulation: string;
  whyOpen: string;
  relevantConcepts: string[];
  literatureSeeds: string[];
}

export interface TimelineItem {
  id: string;
  period: string;
  stage: string;
  institutionOrFocus: string;
  description: string;
  milestones: string[];
  keyMethods: string[];
  status: 'Completed' | 'Ongoing' | 'Upcoming';
}

export interface PublicationItem {
  id: string;
  title: string;
  authors: string[];
  year: string;
  area: string;
  status: 'In Preparation' | 'Working Draft' | 'Preprint Expected';
  abstract: string;
  arxivCategory?: string;
  note: string;
}
