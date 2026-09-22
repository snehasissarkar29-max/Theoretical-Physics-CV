import React from 'react';
import { CV_DATA, RESEARCHER_INFO } from '../data/researchData';
import { 
  GraduationCap, 
  FileText, 
  Download, 
  Printer, 
  Briefcase, 
  BookOpen, 
  Code2, 
  Award, 
  Layers, 
  Sparkles,
  ShieldCheck
} from 'lucide-react';

export const AcademicCV: React.FC = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="cv" className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-t border-slate-800/80">
      {/* Header & Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-indigo-400 mb-1 tracking-wider uppercase">
            <GraduationCap className="w-4 h-4" />
            <span>Curriculum Vitae</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-slate-100 font-medium tracking-tight">
            Academic CV
          </h2>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={handlePrint}
            className="px-3.5 py-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-slate-100 text-xs font-mono flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print CV</span>
          </button>
          <a
            href="#contact"
            className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 border border-indigo-500 text-white text-xs font-mono flex items-center gap-1.5 transition-all shadow-md shadow-indigo-950/30 cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Request Official PDF</span>
          </a>
        </div>
      </div>

      {/* Academic Integrity Badge */}
      <div className="p-3.5 rounded-lg bg-[#0a0e1a] border border-slate-800 text-xs font-mono text-slate-400 flex items-center gap-2.5 mb-10">
        <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
        <span>Verified Academic Record • M.Sc. Mathematical Physics (Faculty of Mechanics and Mathematics, Lomonosov Moscow State University 2024–2026) & M.Sc. Physics (2022–2024) • Aspiring Doctoral Researcher</span>
      </div>

      {/* Printable CV Container */}
      <div className="space-y-12 text-slate-200">
        {/* 1. Education */}
        <div>
          <h3 className="text-xs font-mono uppercase tracking-wider text-indigo-400 border-b border-slate-800 pb-2 mb-6 flex items-center gap-2">
            <GraduationCap className="w-4 h-4" />
            <span>1. Formal Education</span>
          </h3>

          <div className="space-y-6">
            {CV_DATA.education.map((edu, idx) => (
              <div key={idx} className="p-5 rounded-lg bg-[#0a0e1a]/90 border border-slate-850">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2">
                  <h4 className="text-lg font-serif font-medium text-slate-100">
                    {edu.degree} in {edu.field}
                  </h4>
                  <span className="text-xs font-mono text-indigo-300">{edu.period}</span>
                </div>

                <div className="text-sm font-sans text-slate-300 mb-2">
                  {edu.institution}, {edu.location}
                </div>

                {edu.thesis && (
                  <div className="text-xs text-slate-400 font-light mt-2 pt-2 border-t border-slate-850 space-y-1">
                    <div>
                      <span className="font-mono text-slate-400">Dissertation:</span>{' '}
                      <span className="italic text-slate-300">"{edu.thesis}"</span>
                    </div>
                    {edu.advisor && (
                      <div>
                        <span className="font-mono text-slate-400">Advisor / Supervisor:</span>{' '}
                        <span className="text-slate-300">{edu.advisor}</span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 2. Research Experience */}
        <div>
          <h3 className="text-xs font-mono uppercase tracking-wider text-indigo-400 border-b border-slate-800 pb-2 mb-6 flex items-center gap-2">
            <Briefcase className="w-4 h-4" />
            <span>2. Research Projects & Appointments</span>
          </h3>

          <div className="space-y-6">
            {CV_DATA.researchExperience.map((exp, idx) => (
              <div key={idx} className="p-5 rounded-lg bg-[#0a0e1a]/90 border border-slate-850">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
                  <h4 className="text-lg font-serif font-medium text-slate-100">
                    {exp.role}
                  </h4>
                  <span className="text-xs font-mono text-indigo-300">{exp.period}</span>
                </div>

                <div className="text-sm font-sans text-slate-300 mb-2">
                  {exp.projectTitle} • {exp.institution}
                </div>

                <p className="text-xs text-slate-300 font-light leading-relaxed mb-3">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-850">
                  {exp.keyOutcomes.map((out, oIdx) => (
                    <span
                      key={oIdx}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-900 text-slate-400 border border-slate-800"
                    >
                      {out}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Teaching & Mentoring */}
        <div>
          <h3 className="text-xs font-mono uppercase tracking-wider text-indigo-400 border-b border-slate-800 pb-2 mb-6 flex items-center gap-2">
            <BookOpen className="w-4 h-4" />
            <span>3. Teaching & Academic Mentoring</span>
          </h3>

          <div className="space-y-4">
            {CV_DATA.teachingExperience.map((teach, idx) => (
              <div key={idx} className="p-4 rounded-lg bg-[#0a0e1a]/90 border border-slate-850">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
                  <h4 className="text-base font-serif font-medium text-slate-100">
                    {teach.role} — {teach.course}
                  </h4>
                  <span className="text-xs font-mono text-indigo-300">{teach.period}</span>
                </div>
                <div className="text-xs font-mono text-slate-400 mb-2">{teach.institution}</div>
                <p className="text-xs text-slate-300 font-light leading-relaxed">
                  {teach.responsibilities}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Technical, Mathematical & Computational Skills */}
        <div>
          <h3 className="text-xs font-mono uppercase tracking-wider text-indigo-400 border-b border-slate-800 pb-2 mb-6 flex items-center gap-2">
            <Code2 className="w-4 h-4" />
            <span>4. Mathematical & Computational Skills</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 rounded-lg bg-[#0a0e1a]/90 border border-slate-850">
              <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                Programming & Scientific Software
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {CV_DATA.skills.programming.map((p, idx) => (
                  <span key={idx} className="px-2.5 py-1 rounded text-xs font-mono bg-slate-900 text-slate-300 border border-slate-800">
                    {p}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-lg bg-[#0a0e1a]/90 border border-slate-850">
              <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                Mathematical Analysis & Methods
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {CV_DATA.skills.mathematics.map((m, idx) => (
                  <span key={idx} className="px-2.5 py-1 rounded text-xs font-sans bg-indigo-950/40 text-indigo-200 border border-indigo-800/40">
                    {m}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-lg bg-[#0a0e1a]/90 border border-slate-850">
              <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                Numerical & Modeling Frameworks
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {CV_DATA.skills.frameworks.map((f, idx) => (
                  <span key={idx} className="px-2.5 py-1 rounded text-xs font-mono bg-slate-900 text-slate-300 border border-slate-800">
                    {f}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 5. Selected Graduate Coursework */}
        <div>
          <h3 className="text-xs font-mono uppercase tracking-wider text-indigo-400 border-b border-slate-800 pb-2 mb-6 flex items-center gap-2">
            <Layers className="w-4 h-4" />
            <span>5. Selected Graduate & Advanced Coursework</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {CV_DATA.coursework.map((course, idx) => (
              <div
                key={idx}
                className="p-3 rounded bg-[#0a0e1a]/80 border border-slate-850 flex items-center justify-between"
              >
                <span className="text-xs font-medium text-slate-200">{course.title}</span>
                <span className="text-[10px] font-mono text-indigo-400 px-1.5 py-0.5 rounded bg-indigo-950/50 border border-indigo-800/50">
                  {course.level}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademicCV;
