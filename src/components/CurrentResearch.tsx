import React, { useState } from 'react';
import { CURRENT_PROJECT } from '../data/researchData';
import MathView from './MathView';
import { 
  GitBranch, 
  Layers, 
  Maximize2, 
  Activity, 
  Sliders, 
  AlertCircle, 
  BookOpen, 
  Check, 
  ChevronRight 
} from 'lucide-react';

export const CurrentResearch: React.FC = () => {
  // Interactive visualization parameters
  const [temperature, setTemperature] = useState<number>(1.0); // T = r_plus / (2*pi*L^2)
  const [momentumK, setMomentumK] = useState<number>(1.5);
  const [conformalDelta, setConformalDelta] = useState<number>(2.0);
  const [activeTab, setActiveTab] = useState<'correlator' | 'spacetime'>('correlator');

  // Derived pole-skipping point
  // For BTZ minimally coupled scalar, the leading Matsubara pole-skipping occurs at:
  // omega_* = -i * 2 * pi * T
  // and corresponding k_*
  const omegaStarIm = -2 * Math.PI * temperature;
  const omegaStarRe = 0;

  return (
    <section id="current-project" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-800/80">
      {/* Section Header */}
      <div className="max-w-4xl mb-10">
        <div className="flex items-center gap-2 text-xs font-mono text-indigo-400 mb-2 tracking-wider uppercase">
          <Activity className="w-3.5 h-3.5" />
          <span>Featured Active Project</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-serif text-slate-100 font-medium tracking-tight mb-3">
          {CURRENT_PROJECT.title}
        </h2>
        <p className="text-sm font-mono text-indigo-300/90 mb-4">
          {CURRENT_PROJECT.subtitle}
        </p>

        {/* Academic Integrity Callout */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-slate-900/90 border border-slate-800 text-xs font-mono text-slate-300">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          <span>Status: Active Theoretical Investigation • Analytic & Numerical Calculations</span>
        </div>
      </div>

      {/* Main Grid: Description & Visualizer */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Theoretical Framework (7 Cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Key Metric Formulation Card */}
          <div className="p-5 rounded-lg bg-[#0a0e1a] border border-slate-800/90 shadow-md">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-2">
              Gravitational Background & Horizon Temperature
            </span>
            <div className="p-3 bg-[#06080d] rounded border border-slate-850 overflow-x-auto text-center mb-2">
              <MathView math={CURRENT_PROJECT.metric} block />
            </div>
            <p className="text-xs font-mono text-slate-400 text-center mb-3">
              {CURRENT_PROJECT.metricDesc}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 border-t border-slate-800/80 text-xs">
              <div className="p-2.5 rounded bg-slate-900/60 border border-slate-800">
                <span className="text-slate-400 font-mono block mb-1">Hawking Temperature:</span>
                <MathView math={CURRENT_PROJECT.temperatureFormula} />
              </div>
              <div className="p-2.5 rounded bg-slate-900/60 border border-slate-800">
                <span className="text-slate-400 font-mono block mb-1">Pole-Skipping Signature:</span>
                <MathView math="G^R(\omega_*, k_*) = \frac{0}{0}" />
              </div>
            </div>
          </div>

          {/* Research Summary Breakdown */}
          <div className="space-y-3">
            <h3 className="text-lg font-serif text-slate-100 font-medium">
              Research Summary & Physics Mechanism
            </h3>
            <div className="space-y-3 text-sm text-slate-300 font-light leading-relaxed">
              {CURRENT_PROJECT.summary.map((paragraph, pIdx) => (
                <p key={pIdx} className="p-3.5 rounded bg-[#090d17]/80 border border-slate-850">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Analytic Results */}
          <div className="p-5 rounded-lg bg-[#0a0e1a] border border-slate-800 space-y-3">
            <h4 className="text-sm font-mono text-slate-200 uppercase tracking-wider">
              Analytic Formulations & Horizon Decoupling
            </h4>
            <ul className="space-y-2 text-xs text-slate-300 font-light">
              {CURRENT_PROJECT.analyticResults.map((res, rIdx) => (
                <li key={rIdx} className="flex items-start gap-2">
                  <span className="font-mono text-indigo-400 mt-0.5">•</span>
                  <span>{res}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Computational Methods */}
          <div className="p-4 rounded-lg bg-slate-900/40 border border-slate-800">
            <span className="text-xs font-mono text-slate-400 block mb-2">
              Theoretical & Computational Methods Applied:
            </span>
            <div className="flex flex-wrap gap-2">
              {CURRENT_PROJECT.methods.map((method, mIdx) => (
                <span
                  key={mIdx}
                  className="px-2.5 py-1 rounded text-xs font-mono bg-slate-900 text-slate-300 border border-slate-750"
                >
                  {method}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Physics Visualization (5 Cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="rounded-lg border border-slate-800/90 bg-[#0a0e1a] p-5 shadow-xl">
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-3 mb-4">
              <div>
                <span className="text-[11px] font-mono text-indigo-400 uppercase tracking-wider block">
                  Interactive Exploration
                </span>
                <h4 className="text-base font-serif text-slate-100 font-medium">
                  BTZ Pole-Skipping & Horizon Structure
                </h4>
              </div>

              {/* Visualization Tab Toggle */}
              <div className="flex rounded bg-slate-900 p-0.5 border border-slate-800">
                <button
                  onClick={() => setActiveTab('correlator')}
                  className={`px-2.5 py-1 rounded text-xs font-mono cursor-pointer ${
                    activeTab === 'correlator'
                      ? 'bg-indigo-600 text-white font-medium'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Complex Plane
                </button>
                <button
                  onClick={() => setActiveTab('spacetime')}
                  className={`px-2.5 py-1 rounded text-xs font-mono cursor-pointer ${
                    activeTab === 'spacetime'
                      ? 'bg-indigo-600 text-white font-medium'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Spacetime BTZ
                </button>
              </div>
            </div>

            {/* Interactive SVG Visualization Container */}
            <div className="h-72 w-full bg-[#06080d] rounded-lg border border-slate-800/80 p-3 relative overflow-hidden flex items-center justify-center">
              {activeTab === 'correlator' ? (
                // Complex (Re omega, Im omega) plane
                <svg className="w-full h-full" viewBox="0 0 320 240">
                  <defs>
                    <radialGradient id="poleGlow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="rgba(99, 102, 241, 0.8)" />
                      <stop offset="100%" stopColor="rgba(99, 102, 241, 0)" />
                    </radialGradient>
                  </defs>

                  {/* Grid Lines */}
                  <line x1="20" y1="60" x2="300" y2="60" stroke="#1e293b" strokeWidth="1" />
                  <line x1="160" y1="10" x2="160" y2="230" stroke="#1e293b" strokeWidth="1" />

                  {/* Coordinate Labels */}
                  <text x="290" y="55" fill="#64748b" fontSize="9" fontFamily="monospace" textAnchor="end">
                    Re(ω)
                  </text>
                  <text x="165" y="20" fill="#64748b" fontSize="9" fontFamily="monospace">
                    Im(ω) = 0
                  </text>
                  <text x="165" y="225" fill="#64748b" fontSize="9" fontFamily="monospace">
                    -i 4πT
                  </text>

                  {/* Matsubara Level Lines */}
                  {/* Level n=1: omega = -i 2pi T */}
                  {(() => {
                    const yN1 = 60 + temperature * 45;
                    const yN2 = 60 + temperature * 90;
                    return (
                      <>
                        {/* Line of Poles (Red/Rose) */}
                        <path
                          d={`M 40 ${yN1 + (momentumK - 1.5) * 12} Q 160 ${yN1} 280 ${yN1 - (momentumK - 1.5) * 12}`}
                          fill="none"
                          stroke="#f43f5e"
                          strokeWidth="2"
                          strokeDasharray="4,2"
                        />

                        {/* Line of Zeros (Teal/Emerald) */}
                        <path
                          d={`M 40 ${yN1 - (momentumK - 1.5) * 14} Q 160 ${yN1} 280 ${yN1 + (momentumK - 1.5) * 14}`}
                          fill="none"
                          stroke="#14b8a6"
                          strokeWidth="2"
                        />

                        {/* Second Matsubara Level */}
                        <line x1="30" y1={yN2} x2="290" y2={yN2} stroke="#334155" strokeWidth="1" strokeDasharray="2,2" />

                        {/* Pole-Skipping Intersection Point */}
                        <circle cx="160" cy={yN1} r="14" fill="url(#poleGlow)" />
                        <circle cx="160" cy={yN1} r="5" fill="#818cf8" stroke="#ffffff" strokeWidth="1.5" />

                        {/* Callout Pointer */}
                        <text
                          x="175"
                          y={yN1 - 8}
                          fill="#c7d2fe"
                          fontSize="10"
                          fontFamily="monospace"
                          fontWeight="bold"
                        >
                          Pole-Skipping: (0/0)
                        </text>
                        <text
                          x="175"
                          y={yN1 + 6}
                          fill="#94a3b8"
                          fontSize="8"
                          fontFamily="monospace"
                        >
                          ω* = -i 2π T = -i {(2 * Math.PI * temperature).toFixed(2)}
                        </text>
                      </>
                    );
                  })()}

                  {/* Legend */}
                  <g transform="translate(15, 195)">
                    <rect width="130" height="35" rx="4" fill="#090d16" stroke="#1e293b" />
                    <line x1="8" y1="12" x2="24" y2="12" stroke="#f43f5e" strokeWidth="2" strokeDasharray="3,1" />
                    <text x="28" y="15" fill="#94a3b8" fontSize="8" fontFamily="monospace">Line of Poles</text>
                    <line x1="8" y1="26" x2="24" y2="26" stroke="#14b8a6" strokeWidth="2" />
                    <text x="28" y="29" fill="#94a3b8" fontSize="8" fontFamily="monospace">Line of Zeros</text>
                  </g>
                </svg>
              ) : (
                // Spacetime BTZ geometry diagram
                <svg className="w-full h-full" viewBox="0 0 320 240">
                  {/* Spacetime boundary r -> infty */}
                  <line x1="280" y1="20" x2="280" y2="220" stroke="#38bdf8" strokeWidth="3" />
                  <text x="285" y="30" fill="#38bdf8" fontSize="9" fontFamily="monospace">
                    Boundary CFT (r → ∞)
                  </text>

                  {/* Horizon r = r_+ */}
                  {(() => {
                    const rPlusX = 110 + (temperature - 1.0) * 30;
                    return (
                      <>
                        <rect x="20" y="20" width={rPlusX - 20} height="200" fill="rgba(15, 23, 42, 0.6)" />
                        <line
                          x1={rPlusX}
                          y1="20"
                          x2={rPlusX}
                          y2="220"
                          stroke="#818cf8"
                          strokeWidth="2.5"
                          strokeDasharray="6,3"
                        />
                        <text x={rPlusX - 10} y="30" fill="#818cf8" fontSize="9" fontFamily="monospace" textAnchor="end">
                          Horizon r = r₊
                        </text>

                        {/* Infalling null geodesic / Lightcone tilting */}
                        {/* Light cone at boundary */}
                        <path d="M 270 90 L 250 110 L 270 130" stroke="#64748b" strokeWidth="1" fill="none" />

                        {/* Infalling ray entering horizon smoothly */}
                        <path
                          d={`M 280 60 Q 200 100 ${rPlusX} 140 T 40 180`}
                          fill="none"
                          stroke="#14b8a6"
                          strokeWidth="2"
                        />
                        <circle cx={rPlusX} cy="140" r="4" fill="#14b8a6" />

                        <text x="170" y="85" fill="#a7f3d0" fontSize="8" fontFamily="monospace">
                          Infalling Wave
                        </text>
                        <text x="170" y="98" fill="#64748b" fontSize="7" fontFamily="monospace">
                          Eddington-Finkelstein: v = const
                        </text>
                      </>
                    );
                  })()}

                  <text x="35" y="120" fill="#475569" fontSize="9" fontFamily="monospace">
                    Black Hole Interior
                  </text>
                </svg>
              )}
            </div>

            {/* Interactive Parameter Controls */}
            <div className="space-y-3 pt-4 border-t border-slate-800/80">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5 text-slate-300">
                  <Sliders className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Horizon Temperature (T):</span>
                </span>
                <span className="text-indigo-300 font-bold">{temperature.toFixed(2)} [L⁻¹]</span>
              </div>
              <input
                type="range"
                min="0.4"
                max="2.0"
                step="0.1"
                value={temperature}
                onChange={(e) => setTemperature(parseFloat(e.target.value))}
                className="w-full accent-indigo-500 bg-slate-800 h-1 rounded cursor-pointer"
              />

              <div className="flex items-center justify-between text-xs font-mono text-slate-400 pt-1">
                <span className="text-slate-300">Spatial Momentum (k):</span>
                <span className="text-teal-300 font-bold">{momentumK.toFixed(2)}</span>
              </div>
              <input
                type="range"
                min="0.5"
                max="3.0"
                step="0.1"
                value={momentumK}
                onChange={(e) => setMomentumK(parseFloat(e.target.value))}
                className="w-full accent-teal-500 bg-slate-800 h-1 rounded cursor-pointer"
              />

              <div className="p-3 rounded bg-slate-900/90 border border-slate-800 text-xs font-mono text-slate-400 space-y-1 mt-2">
                <div className="flex justify-between">
                  <span>Matsubara frequency:</span>
                  <span className="text-slate-200">ω* = -i 2π T = -i {(2 * Math.PI * temperature).toFixed(3)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Lyapunov Chaos Exponent:</span>
                  <span className="text-indigo-400">λ_L = 2π T = {(2 * Math.PI * temperature).toFixed(3)} [ℏ⁻¹]</span>
                </div>
              </div>
            </div>

            {/* Note on Ongoing Work */}
            <div className="mt-4 p-3 rounded bg-indigo-950/30 border border-indigo-800/40 text-xs text-slate-300 font-light leading-relaxed">
              <span className="font-mono text-indigo-400 font-semibold block mb-1">
                Active Frontier / Current Calculations:
              </span>
              {CURRENT_PROJECT.ongoingWorkNote}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurrentResearch;
