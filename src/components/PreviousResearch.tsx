import React, { useState, useMemo } from 'react';
import { PREVIOUS_PROJECT } from '../data/researchData';
import MathView from './MathView';
import { History, Sliders, Atom, Sparkles, ArrowRight } from 'lucide-react';

export const PreviousResearch: React.FC = () => {
  // Interactive simulation states
  const [neutrinoEnergy, setNeutrinoEnergy] = useState<number>(15); // MeV
  const [coreDensityScale, setCoreDensityScale] = useState<number>(1.0); // relative units
  const [vacuumAngleDeg, setVacuumAngleDeg] = useState<number>(33.4); // Solar theta_12 approx

  // Calculate resonance profile
  // MSW condition: 2 * E * V_e = delta_m2 * cos(2*theta)
  // Let's compute sin^2(2*theta_m) across a range of radial distance r (from core outward)
  const densityProfilePoints = useMemo(() => {
    const points = [];
    const delta_m2 = 7.5e-5; // eV^2 (solar scale)
    const thetaRad = (vacuumAngleDeg * Math.PI) / 180;
    const sin2_2theta = Math.sin(2 * thetaRad) ** 2;
    const cos2theta = Math.cos(2 * thetaRad);

    // Radii from 10 km to 1000 km in log/linear steps
    for (let i = 0; i <= 60; i++) {
      const r = 10 + i * 15; // km
      // Stellar mantle density profile: n_e ~ n_0 * (10 / r)^3
      const ne = coreDensityScale * 1e34 * Math.pow(10 / r, 3); // cm^-3
      // G_F in natural units
      const Ve = Math.sqrt(2) * 1.166e-5 * 1e-18 * (ne * 7.68e-12); // in eV
      const E_eV = neutrinoEnergy * 1e6;

      const denom = Math.pow(cos2theta - (2 * E_eV * Ve) / delta_m2, 2) + sin2_2theta;
      const sin2_2theta_m = Math.min(1.0, sin2_2theta / denom);

      // Survival / conversion probability approximation (semi-adiabatic)
      // P(nu_e -> nu_e) ~ 0.5 * (1 + cos(2*theta_m_prod) * cos(2*theta))
      const P_convert = sin2_2theta_m * 0.95;

      points.push({ r, sin2_2theta_m, P_convert });
    }
    return points;
  }, [neutrinoEnergy, coreDensityScale, vacuumAngleDeg]);

  // Find resonance radius
  const resonancePoint = useMemo(() => {
    let maxVal = 0;
    let maxR = 0;
    densityProfilePoints.forEach((p) => {
      if (p.sin2_2theta_m > maxVal) {
        maxVal = p.sin2_2theta_m;
        maxR = p.r;
      }
    });
    return { r: maxR, val: maxVal };
  }, [densityProfilePoints]);

  return (
    <section id="previous-project" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-800/80">
      {/* Header */}
      <div className="max-w-4xl mb-10">
        <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2 tracking-wider uppercase">
          <History className="w-3.5 h-3.5" />
          <span>Foundational Research Background</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-serif text-slate-100 font-medium tracking-tight mb-3">
          {PREVIOUS_PROJECT.title}
        </h2>
        <p className="text-sm font-mono text-cyan-300/90 mb-4">
          {PREVIOUS_PROJECT.subtitle}
        </p>

        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-slate-900/90 border border-slate-800 text-xs font-mono text-slate-300">
          <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
          <span>Status: Earlier Completed Research Project • Mathematical Modeling</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Theoretical Analysis & Evolution Hamiltonian */}
        <div className="lg:col-span-7 space-y-6">
          <div className="p-5 rounded-lg bg-[#0a0e1a] border border-slate-800 shadow-md">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-2">
              Matter-Induced Schrödinger Evolution Hamiltonian
            </span>
            <div className="p-3 bg-[#06080d] rounded border border-slate-850 overflow-x-auto text-center mb-2">
              <MathView math={PREVIOUS_PROJECT.hamiltonian} block />
            </div>
            <div className="text-xs font-mono text-slate-400 text-center mb-3 flex items-center justify-center gap-1.5">
              <span>Coupled flavor states propagating through electron density potential</span>
              <MathView math="V_{\text{eff}} = \sqrt{2} G_F n_e(r)" />
            </div>

            <div className="p-3 rounded bg-slate-900/60 border border-slate-800 text-xs font-mono text-slate-300">
              <span className="text-cyan-400 font-semibold block mb-1">Resonance Condition:</span>
              <MathView math={PREVIOUS_PROJECT.resonanceCondition} />
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-serif text-slate-100 font-medium">
              Astrophysical Context & Theoretical Summary
            </h3>
            <div className="space-y-3 text-sm text-slate-300 font-light leading-relaxed">
              {PREVIOUS_PROJECT.summary.map((p, idx) => (
                <p key={idx} className="p-3.5 rounded bg-[#090d17]/80 border border-slate-850">
                  {p}
                </p>
              ))}
            </div>
          </div>

          {/* Academic Reflection */}
          <div className="p-4 rounded-lg bg-cyan-950/20 border border-cyan-800/40 text-xs text-slate-300 font-light leading-relaxed">
            <span className="font-mono text-cyan-300 font-semibold block mb-1">
              Trajectory & Intellectual Foundation:
            </span>
            {PREVIOUS_PROJECT.reflection}
          </div>
        </div>

        {/* Right Column: Interactive MSW Resonance Simulator */}
        <div className="lg:col-span-5 space-y-6">
          <div className="rounded-lg border border-slate-800/90 bg-[#0a0e1a] p-5 shadow-xl">
            <div className="border-b border-slate-800/80 pb-3 mb-4">
              <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider block">
                Interactive Model
              </span>
              <h4 className="text-base font-serif text-slate-100 font-medium">
                MSW Resonant Flavor Conversion Profile
              </h4>
              <p className="text-xs text-slate-400 font-light mt-1">
                Effective mixing $\sin^2 2\theta_m$ as a function of radial distance $r$ from core
              </p>
            </div>

            {/* SVG Plot */}
            <div className="h-64 w-full bg-[#06080d] rounded-lg border border-slate-800/80 p-3 relative flex items-center justify-center">
              <svg className="w-full h-full" viewBox="0 0 320 220">
                {/* Grid & Axes */}
                <line x1="40" y1="180" x2="300" y2="180" stroke="#334155" strokeWidth="1" />
                <line x1="40" y1="20" x2="40" y2="180" stroke="#334155" strokeWidth="1" />

                {/* Y-ticks */}
                <text x="32" y="184" fill="#64748b" fontSize="8" fontFamily="monospace" textAnchor="end">0.0</text>
                <text x="32" y="105" fill="#64748b" fontSize="8" fontFamily="monospace" textAnchor="end">0.5</text>
                <text x="32" y="25" fill="#64748b" fontSize="8" fontFamily="monospace" textAnchor="end">1.0</text>

                {/* X-axis labels */}
                <text x="40" y="195" fill="#64748b" fontSize="8" fontFamily="monospace">10 km</text>
                <text x="160" y="195" fill="#64748b" fontSize="8" fontFamily="monospace" textAnchor="middle">500 km</text>
                <text x="300" y="195" fill="#64748b" fontSize="8" fontFamily="monospace" textAnchor="end">1000 km</text>

                <text x="170" y="210" fill="#94a3b8" fontSize="9" fontFamily="monospace" textAnchor="middle">
                  Radial Distance r from Progenitor Core
                </text>

                {/* Plot Path for sin^2 2theta_m */}
                {(() => {
                  const xMin = 40;
                  const xMax = 300;
                  const yMin = 20;
                  const yMax = 180;

                  const pathD = densityProfilePoints.reduce((acc, pt, index) => {
                    const x = xMin + (index / (densityProfilePoints.length - 1)) * (xMax - xMin);
                    const y = yMax - pt.sin2_2theta_m * (yMax - yMin);
                    return `${acc} ${index === 0 ? 'M' : 'L'} ${x} ${y}`;
                  }, '');

                  // Conversion path
                  const convertPath = densityProfilePoints.reduce((acc, pt, index) => {
                    const x = xMin + (index / (densityProfilePoints.length - 1)) * (xMax - xMin);
                    const y = yMax - pt.P_convert * (yMax - yMin);
                    return `${acc} ${index === 0 ? 'M' : 'L'} ${x} ${y}`;
                  }, '');

                  // Resonance peak position
                  const peakX = xMin + ((resonancePoint.r - 10) / 900) * (xMax - xMin);
                  const peakY = yMax - resonancePoint.val * (yMax - yMin);

                  return (
                    <>
                      {/* Resonance peak indicator */}
                      <line x1={peakX} y1="20" x2={peakX} y2="180" stroke="#06b6d4" strokeWidth="1" strokeDasharray="3,3" />
                      <circle cx={peakX} cy={peakY} r="4" fill="#06b6d4" stroke="#ffffff" strokeWidth="1.5" />

                      {/* Line of Effective Mixing */}
                      <path d={pathD} fill="none" stroke="#22d3ee" strokeWidth="2.5" />
                      
                      {/* Callout */}
                      <text x={Math.min(peakX + 8, 220)} y={peakY - 6} fill="#a5f3fc" fontSize="8" fontFamily="monospace">
                        Resonance: r ≈ {resonancePoint.r.toFixed(0)} km
                      </text>
                    </>
                  );
                })()}

                <g transform="translate(50, 30)">
                  <rect width="120" height="24" rx="3" fill="#0b0f19" stroke="#1e293b" />
                  <line x1="8" y1="12" x2="24" y2="12" stroke="#22d3ee" strokeWidth="2" />
                  <text x="28" y="15" fill="#e2e8f0" fontSize="8" fontFamily="monospace">
                    sin²(2θ_m) in matter
                  </text>
                </g>
              </svg>
            </div>

            {/* Sliders */}
            <div className="space-y-3 pt-4 border-t border-slate-800">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5 text-slate-300">
                  <Sliders className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Neutrino Energy (E):</span>
                </span>
                <span className="text-cyan-300 font-bold">{neutrinoEnergy} MeV</span>
              </div>
              <input
                type="range"
                min="5"
                max="50"
                step="1"
                value={neutrinoEnergy}
                onChange={(e) => setNeutrinoEnergy(parseInt(e.target.value, 10))}
                className="w-full accent-cyan-500 bg-slate-800 h-1 rounded cursor-pointer"
              />

              <div className="flex items-center justify-between text-xs font-mono text-slate-400 pt-1">
                <span className="text-slate-300">Core Density Scale (ρ₀):</span>
                <span className="text-teal-300 font-bold">{coreDensityScale.toFixed(2)}x</span>
              </div>
              <input
                type="range"
                min="0.2"
                max="3.0"
                step="0.1"
                value={coreDensityScale}
                onChange={(e) => setCoreDensityScale(parseFloat(e.target.value))}
                className="w-full accent-teal-500 bg-slate-800 h-1 rounded cursor-pointer"
              />

              <div className="p-3 rounded bg-slate-900/90 border border-slate-800 text-xs font-mono text-slate-400 space-y-1">
                <div className="flex justify-between">
                  <span>Resonance radius r_res:</span>
                  <span className="text-cyan-300 font-semibold">{resonancePoint.r.toFixed(0)} km</span>
                </div>
                <div className="flex justify-between">
                  <span>Effective resonance mixing:</span>
                  <span className="text-slate-200">{resonancePoint.val.toFixed(3)} (Maximal = 1.0)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreviousResearch;
