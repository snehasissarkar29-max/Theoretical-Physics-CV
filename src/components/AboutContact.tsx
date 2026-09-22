import React, { useState } from 'react';
import { RESEARCHER_INFO, ABOUT_CONTENT } from '../data/researchData';
import { 
  User, 
  Mail, 
  MapPin, 
  Send, 
  Check, 
  ExternalLink, 
  Github, 
  Globe, 
  BookOpen, 
  MessageSquare,
  Sparkles,
  HeartHandshake
} from 'lucide-react';

export const AboutContact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    affiliation: '',
    topic: 'Academic Discussion',
    message: ''
  });
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate sending message locally
    setIsSent(true);
    setTimeout(() => {
      setIsSent(false);
      setFormData({ name: '', email: '', affiliation: '', topic: 'Academic Discussion', message: '' });
    }, 4000);
  };

  return (
    <div className="border-t border-slate-800/80">
      {/* 1. About Me Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="max-w-3xl mb-10">
          <div className="flex items-center gap-2 text-xs font-mono text-indigo-400 mb-2 tracking-wider uppercase">
            <User className="w-3.5 h-3.5" />
            <span>Profile & Scientific Perspective</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-slate-100 font-medium tracking-tight mb-3">
            About Me
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Researcher Profile Card (4 Cols) */}
          <div className="lg:col-span-4 rounded-xl border border-slate-800 bg-[#0a0e1a] p-6 text-center space-y-4 shadow-xl">
            <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-indigo-600/30 to-slate-900 border border-indigo-500/40 flex items-center justify-center text-3xl font-serif text-indigo-300">
              Ψ
            </div>
            <div>
              <h3 className="text-xl font-serif font-medium text-slate-100">
                {RESEARCHER_INFO.name}
              </h3>
              <p className="text-xs font-mono text-indigo-400 mt-0.5">
                {RESEARCHER_INFO.title}
              </p>
            </div>

            <div className="text-xs text-slate-300 font-light space-y-1.5 pt-3 border-t border-slate-850">
              <div className="flex items-center justify-center gap-1.5 text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                <span>{RESEARCHER_INFO.location}</span>
              </div>
              <div className="text-slate-400 font-mono text-[11px]">
                {RESEARCHER_INFO.affiliation}
              </div>
            </div>

            {/* Academic Profiles Icons */}
            <div className="pt-3 border-t border-slate-850 flex items-center justify-center gap-2.5">
              <a
                href={RESEARCHER_INFO.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-100 hover:border-slate-700 transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={RESEARCHER_INFO.links.inspireHep}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded bg-slate-900 border border-slate-800 text-slate-400 hover:text-indigo-400 hover:border-indigo-800 transition-colors text-xs font-mono font-bold"
                aria-label="Inspire-HEP Profile"
              >
                HEP
              </a>
              <a
                href={RESEARCHER_INFO.links.arxiv}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded bg-slate-900 border border-slate-800 text-slate-400 hover:text-indigo-400 hover:border-indigo-800 transition-colors text-xs font-mono font-bold"
                aria-label="arXiv Author Profile"
              >
                arXiv
              </a>
              <a
                href={RESEARCHER_INFO.links.orcid}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded bg-slate-900 border border-slate-800 text-slate-400 hover:text-emerald-400 hover:border-emerald-800 transition-colors text-xs font-mono font-bold"
                aria-label="ORCID Profile"
              >
                iD
              </a>
            </div>
          </div>

          {/* Detailed Philosophy & Statement (8 Cols) */}
          <div className="lg:col-span-8 space-y-6">
            <div className="p-6 rounded-xl border border-slate-800 bg-[#0a0e1a] space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-indigo-400">
                Personal Statement & Research Mission
              </h4>
              <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
                {ABOUT_CONTENT.bio}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-lg bg-[#0a0e1a] border border-slate-850 space-y-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-teal-400">
                  Research Philosophy
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                  {ABOUT_CONTENT.philosophy}
                </p>
              </div>

              <div className="p-5 rounded-lg bg-[#0a0e1a] border border-slate-850 space-y-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-purple-400">
                  Mathematical Perspective
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                  {ABOUT_CONTENT.perspective}
                </p>
              </div>
            </div>

            <div className="p-5 rounded-lg bg-indigo-950/20 border border-indigo-800/40 space-y-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-indigo-300">
                Long-Term Doctoral & Postdoctoral Goals
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                {ABOUT_CONTENT.longTermGoals}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Contact & Collaboration Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-t border-slate-800/80">
        <div className="max-w-3xl mb-10">
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 mb-2 tracking-wider uppercase">
            <HeartHandshake className="w-3.5 h-3.5" />
            <span>Dialogue & Collaboration</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-slate-100 font-medium tracking-tight mb-3">
            Contact & Academic Inquiries
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
            I enthusiastically welcome theoretical physics discussions, reading group invitations, inquiries from prospective doctoral advisors, and research collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Direct Contact Info (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-xl border border-slate-800 bg-[#0a0e1a] space-y-4 shadow-lg">
              <h3 className="text-lg font-serif font-medium text-slate-100">
                Direct Academic Coordinates
              </h3>

              <div className="space-y-3 text-xs font-mono text-slate-300">
                <div className="p-3 rounded bg-slate-900/80 border border-slate-800 flex items-center gap-3">
                  <Mail className="w-4 h-4 text-indigo-400 shrink-0" />
                  <div>
                    <span className="text-slate-500 block text-[10px]">Academic Email:</span>
                    <a
                      href={`mailto:${RESEARCHER_INFO.email}`}
                      className="text-slate-200 hover:text-indigo-300 transition-colors"
                    >
                      {RESEARCHER_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="p-3 rounded bg-slate-900/80 border border-slate-800 flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                  <div>
                    <span className="text-slate-500 block text-[10px]">Location:</span>
                    <span>{RESEARCHER_INFO.location}</span>
                  </div>
                </div>

                <div className="p-3 rounded bg-slate-900/80 border border-slate-800 flex items-center gap-3">
                  <BookOpen className="w-4 h-4 text-purple-400 shrink-0" />
                  <div>
                    <span className="text-slate-500 block text-[10px]">Academic Background:</span>
                    <span>M.Sc. Mathematical Physics (Faculty of Mechanics and Mathematics, Lomonosov Moscow State Univ. 2024–2026) • Seeking PhD Positions</span>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded bg-indigo-950/30 border border-indigo-800/40 text-xs text-slate-300 font-light leading-relaxed">
                <span className="font-semibold text-indigo-300 block mb-1">
                  Open for Academic Inquiries:
                </span>
                If you are a faculty member, researcher, or fellow student working on holography, black holes, pole-skipping, or neutrino physics, feel free to reach out directly via email.
              </div>
            </div>
          </div>

          {/* Academic Inquiry Form (7 Cols) */}
          <div className="lg:col-span-7 rounded-xl border border-slate-800 bg-[#0a0e1a] p-6 sm:p-7 shadow-xl">
            <h3 className="text-lg font-serif font-medium text-slate-100 mb-1">
              Send a Message or Discussion Prompt
            </h3>
            <p className="text-xs text-slate-400 font-light mb-6">
              Connect regarding research collaborations, seminars, reading groups, or doctoral opportunities.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs font-mono">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-400 mb-1">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Prof. / Dr. / Researcher"
                    className="w-full bg-[#06080d] border border-slate-800 rounded px-3 py-2 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="colleague@university.edu"
                    className="w-full bg-[#06080d] border border-slate-800 rounded px-3 py-2 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-indigo-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-400 mb-1">Institutional Affiliation</label>
                  <input
                    type="text"
                    value={formData.affiliation}
                    onChange={(e) => setFormData({ ...formData, affiliation: e.target.value })}
                    placeholder="University / Research Institute"
                    className="w-full bg-[#06080d] border border-slate-800 rounded px-3 py-2 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 mb-1">Inquiry Topic</label>
                  <select
                    value={formData.topic}
                    onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                    className="w-full bg-[#06080d] border border-slate-800 rounded px-3 py-2 text-slate-200 focus:outline-none focus:border-indigo-500 cursor-pointer"
                  >
                    <option value="Academic Discussion">Theoretical Discussion</option>
                    <option value="PhD Opportunity">Doctoral / Research Opportunity</option>
                    <option value="Collaboration">Research Collaboration</option>
                    <option value="Seminar or Reading Group">Seminar or Reading Group</option>
                    <option value="General Question">General Academic Question</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-slate-400 mb-1">Message / Physics Discussion Prompt *</label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share ideas, questions, papers of mutual interest, or opportunities..."
                  className="w-full bg-[#06080d] border border-slate-800 rounded px-3 py-2 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-indigo-500 font-sans text-xs sm:text-sm"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-2.5 rounded bg-indigo-600 hover:bg-indigo-500 border border-indigo-500 text-white font-medium flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-lg shadow-indigo-950/30"
              >
                {isSent ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-300" />
                    <span>Message Recorded Successfully!</span>
                  </>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Inquiry</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutContact;
