import React, { useState } from 'react';
import { COMPUTATIONAL_PROJECTS } from '../data/researchData';
import MathView from './MathView';
import { Terminal, Sliders, Play, Code2, Database, Sparkles, Cpu } from 'lucide-react';

export const ComputationalPhysics: React.FC = () => {
  // Interactive Spectral Function A(omega, k) simulation
  const [spectralOmega, setSpectralOmega] = useState<number>(1.2);
  const [spectralGamma, setSpectralGamma] = useState<number>(0.25); // damping/dissipation
  const [spectralK, setSpectralK] = useState<number>(1.0);

  // Metric selector for symbolic tensor preview
  const [selectedMetric, setSelectedMetric] = useState<'btz' | 'ads' | 'schwarzschild'>('btz');

  // Compute Lorentzian spectral peak data points for plot
  const spectralCurve = React.useMemo(() => {
    const points = [];
    const omega0 = Math.sqrt(spectralK * spectralK + 1.0); // dispersion
    for (let w = -3.0; w <= 3.0; w += 0.08) {
      // Retarded Green function: G^R(w, k) = 1 / ( - (w + i Gamma)^2 + omega_0^2 )
      // Spectral density A(w, k) = - 2 * Im G^R(w, k)
      // A(w) ~ (4 * w * Gamma) / ( (w^2 - omega_0^2)^2 + 4 * w^2 * Gamma^2 )
      const denom = Math.pow(w * w - omega0 * omega0, 2) + Math.pow(2 * w * spectralGamma, 2) + 0.01;
      const val = Math.abs(4 * w * spectralGamma) / denom;
      points.push({ w, val });
    }
    return points;
  }, [spectralK, spectralGamma]);

  const maxSpectralVal = React.useMemo(() => {
    return Math.max(...spectralCurve.map((p) => p.val), 0.1);
  }, [spectralCurve]);

  return (
    <section id="computational" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-800/80">
      <div className="max-w-3xl mb-10">
        <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 mb-2 tracking-wider uppercase">
          <Terminal className="w-3.5 h-3.5" />
          <span>Algorithms & Scientific Computing</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-serif text-slate-100 font-medium tracking-tight mb-3">
          Computational Physics
        </h2>
        <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
          Leveraging numerical PDE methods, symbolic tensor algebra, spectral collocation, and Python/Mathematica ecosystems to model relativistic field systems and solve boundary value problems in curved spacetime.
        </p>
      </div>

      {/* Computational Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {COMPUTATIONAL_PROJECTS.map((proj) => (
          <div
            key={proj.id}
            className="rounded-xl border border-slate-800 bg-[#0a0e1a] p-6 flex flex-col justify-between shadow-md hover:border-slate-700 transition-colors"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-emerald-950/60 text-emerald-300 border border-emerald-800/50">
                  {proj.language}
                </span>
                <span className="text-[11px] font-mono text-slate-400">{proj.method}</span>
              </div>

              <h3 className="text-lg font-serif font-medium text-slate-100 mb-2">
                {proj.title}
              </h3>

              <p className="text-xs text-slate-300 font-light leading-relaxed mb-4">
                {proj.summary}
              </p>

              <div className="p-2.5 rounded bg-[#06080d] border border-slate-850 mb-4 overflow-x-auto text-center">
                <MathView math={proj.equation} />
              </div>
            </div>

            <div className="pt-4 border-t border-slate-850">
              <span className="text-[11px] font-mono text-slate-400 block mb-1">
                Algorithm Implementation:
              </span>
              <p className="text-xs text-slate-400 font-light">
                {proj.algorithmDesc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Tool Demonstrations: 2 Tabs/Panels */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Panel 1: Interactive Spectral Function Plotter (7 Cols) */}
        <div className="lg:col-span-7 rounded-xl border border-slate-800 bg-[#0a0e1a] p-6 shadow-xl">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
            <div>
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider block">
                Interactive Green's Function Simulator
              </span>
              <h4 className="text-lg font-serif font-medium text-slate-100 flex flex-wrap items-center gap-2">
                <span>Holographic Spectral Density</span>
                <MathView math="A(\omega, k) = -2\,\text{Im}\,G^R(\omega, k)" />
              </h4>
            </div>
          </div>

          {/* SVG Spectral Curve */}
          <div className="h-60 w-full bg-[#06080d] rounded-lg border border-slate-850 p-3 relative flex items-center justify-center mb-4">
            <svg className="w-full h-full" viewBox="0 0 320 200">
              {/* Axes */}
              <line x1="30" y1="170" x2="300" y2="170" stroke="#334155" strokeWidth="1" />
              <line x1="165" y1="20" x2="165" y2="170" stroke="#1e293b" strokeWidth="1" strokeDasharray="2,2" />

              {/* Labels */}
              <text x="300" y="165" fill="#64748b" fontSize="8" fontFamily="monospace" textAnchor="end">
                Frequency ω
              </text>
              <text x="35" y="30" fill="#64748b" fontSize="8" fontFamily="monospace">
                A(ω, k)
              </text>
              <text x="165" y="182" fill="#64748b" fontSize="8" fontFamily="monospace" textAnchor="middle">
                ω = 0
              </text>

              {/* Path of Spectral Function */}
              {(() => {
                const xMin = 30;
                const xMax = 300;
                const yMin = 25;
                const yMax = 170;

                const pathD = spectralCurve.reduce((acc, pt, index) => {
                  const x = xMin + (index / (spectralCurve.length - 1)) * (xMax - xMin);
                  const y = yMax - (pt.val / maxSpectralVal) * (yMax - yMin) * 0.9;
                  return `${acc} ${index === 0 ? 'M' : 'L'} ${x} ${y}`;
                }, '');

                return (
                  <>
                    <path d={pathD} fill="none" stroke="#10b981" strokeWidth="2.5" />
                    {/* Fill underneath */}
                    <path
                      d={`${pathD} L ${xMax} ${yMax} L ${xMin} ${yMax} Z`}
                      fill="rgba(16, 185, 129, 0.08)"
                    />
                  </>
                );
              })()}
            </svg>
          </div>

          {/* Controls */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
            <div>
              <div className="flex justify-between text-slate-300 mb-1">
                <span>Dissipation Rate (Γ):</span>
                <span className="text-emerald-400">{spectralGamma.toFixed(2)}</span>
              </div>
              <input
                type="range"
                min="0.05"
                max="0.8"
                step="0.05"
                value={spectralGamma}
                onChange={(e) => setSpectralGamma(parseFloat(e.target.value))}
                className="w-full accent-emerald-500 bg-slate-800 h-1 rounded cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between text-slate-300 mb-1">
                <span>Wavevector Momentum (k):</span>
                <span className="text-emerald-400">{spectralK.toFixed(2)}</span>
              </div>
              <input
                type="range"
                min="0.2"
                max="2.5"
                step="0.1"
                value={spectralK}
                onChange={(e) => setSpectralK(parseFloat(e.target.value))}
                className="w-full accent-emerald-500 bg-slate-800 h-1 rounded cursor-pointer"
              />
            </div>
          </div>
        </div>

        {/* Panel 2: Symbolic Metric & Curvature Inspector (5 Cols) */}
        <div className="lg:col-span-5 rounded-xl border border-slate-800 bg-[#0a0e1a] p-6 shadow-xl space-y-4">
          <div className="border-b border-slate-800 pb-3">
            <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider block">
              Symbolic Differential Geometry
            </span>
            <h4 className="text-lg font-serif font-medium text-slate-100">
              Metric & Curvature Tensor Inspector
            </h4>
          </div>

          <div className="flex gap-2">
            {[
              { id: 'btz', label: 'BTZ Black Hole' },
              { id: 'ads', label: 'Poincaré AdS₃' },
              { id: 'schwarzschild', label: 'Schwarzschild' }
            ].map((m) => (
              <button
                key={m.id}
                onClick={() => setSelectedMetric(m.id as any)}
                className={`px-2.5 py-1.5 rounded text-xs font-mono cursor-pointer ${
                  selectedMetric === m.id
                    ? 'bg-emerald-900/60 text-emerald-300 border border-emerald-700/60'
                    : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                {m.label}
              </button>
            ))}
          </div>

          <div className="p-4 rounded-lg bg-[#06080d] border border-slate-850 space-y-3">
            <div>
              <span className="text-[11px] font-mono text-slate-400 block mb-1">Line Element:</span>
              {selectedMetric === 'btz' && (
                <MathView math="ds^2 = -\frac{r^2 - r_+^2}{L^2}dt^2 + \frac{L^2}{r^2 - r_+^2}dr^2 + r^2 d\phi^2" block />
              )}
              {selectedMetric === 'ads' && (
                <MathView math="ds^2 = \frac{L^2}{z^2}\left(dz^2 - dt^2 + dx^2\right)" block />
              )}
              {selectedMetric === 'schwarzschild' && (
                <MathView math="ds^2 = -\left(1 - \frac{2GM}{r}\right)dt^2 + \left(1 - \frac{2GM}{r}\right)^{-1}dr^2 + r^2 d\Omega^2" block />
              )}
            </div>

            <div className="pt-2 border-t border-slate-850 text-xs font-mono space-y-1.5 text-slate-300">
              <div className="flex justify-between">
                <span className="text-slate-400">Ricci Scalar R:</span>
                <span className="text-emerald-400 font-bold">
                  {selectedMetric === 'schwarzschild' ? '0 (Vacuum)' : '-6 / L² (Constant negative)'}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Einstein Tensor G_μν:</span>
                <span className="text-slate-200">
                  {selectedMetric === 'schwarzschild' ? '0' : '-Λ g_μν'}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Kretschmann Invariant:</span>
                <span className="text-emerald-300 font-mono">
                  {selectedMetric === 'btz' && '12 / L⁴'}
                  {selectedMetric === 'ads' && '12 / L⁴'}
                  {selectedMetric === 'schwarzschild' && '48 G² M² / r⁶ (Singular at r=0)'}
                </span>
              </div>
            </div>
          </div>

          <p className="text-xs text-slate-400 font-light leading-relaxed">
            Exact analytic output derived through the symbolic differential geometry pipeline in Wolfram Mathematica and SymPy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ComputationalPhysics;
