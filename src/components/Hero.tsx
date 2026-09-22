import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, User, BookOpen, Compass, Sparkles, Pause, Play } from 'lucide-react';
import { RESEARCHER_INFO } from '../data/researchData';
import MathView from './MathView';

interface HeroProps {
  onExploreResearch: () => void;
  onAboutMe: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreResearch, onAboutMe }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isAnimationPaused, setIsAnimationPaused] = useState(false);
  const [activeMetricMode, setActiveMetricMode] = useState<'ads' | 'btz' | 'qft' | 'gw'>('ads');

  // Interactive spacetime canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = mouseX;
    let targetMouseY = mouseY;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      targetMouseX = e.clientX - rect.left;
      targetMouseY = e.clientY - rect.top;
    };
    window.addEventListener('mousemove', handleMouseMove);

    let time = 0;

    const render = () => {
      if (!isAnimationPaused) {
        time += 0.008;
      }
      // Smooth mouse easing
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      ctx.clearRect(0, 0, width, height);

      // Dark subtle vignette background
      const gradient = ctx.createRadialGradient(
        width / 2,
        height / 2,
        50,
        width / 2,
        height / 2,
        Math.max(width, height) * 0.75
      );
      gradient.addColorStop(0, 'rgba(15, 23, 42, 0.4)');
      gradient.addColorStop(1, 'rgba(7, 9, 14, 0.95)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Coordinate grid lines with gentle curvature
      const cols = 22;
      const rows = 14;
      const colStep = width / cols;
      const rowStep = height / rows;

      ctx.lineWidth = 1;

      // Draw horizontal coordinate curves
      for (let r = 0; r <= rows; r++) {
        const yBase = r * rowStep;
        ctx.beginPath();
        ctx.strokeStyle = r % 4 === 0 ? 'rgba(99, 102, 241, 0.16)' : 'rgba(148, 163, 184, 0.06)';

        for (let x = 0; x <= width; x += 15) {
          // Curvature distortion from mouse (gravitational lensing/horizon dip)
          const dx = x - mouseX;
          const dy = yBase - mouseY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const warp = Math.exp(-dist / 180) * 28 * Math.sin(dist * 0.03 - time * 2);

          // Subtle wave modulation representing field oscillations
          const wave = Math.sin(x * 0.012 + time + r * 0.4) * 4;
          const y = yBase + warp + wave;

          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      }

      // Draw vertical coordinate curves
      for (let c = 0; c <= cols; c++) {
        const xBase = c * colStep;
        ctx.beginPath();
        ctx.strokeStyle = c % 4 === 0 ? 'rgba(56, 189, 248, 0.16)' : 'rgba(148, 163, 184, 0.06)';

        for (let y = 0; y <= height; y += 15) {
          const dx = xBase - mouseX;
          const dy = y - mouseY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const warp = Math.exp(-dist / 180) * 28 * Math.sin(dist * 0.03 - time * 2);
          const wave = Math.cos(y * 0.012 + time + c * 0.4) * 4;
          const x = xBase + warp + wave;

          if (y === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      }

      // Geodesic trajectories / Field correlation lines
      const numGeodesics = 4;
      for (let g = 0; g < numGeodesics; g++) {
        ctx.beginPath();
        const hue = g % 2 === 0 ? 'rgba(99, 102, 241, 0.35)' : 'rgba(20, 184, 166, 0.35)';
        ctx.strokeStyle = hue;
        ctx.lineWidth = 1.2;

        const offsetPhase = (g * Math.PI) / 2;
        for (let t = 0; t < 120; t++) {
          const u = t / 120;
          // Infalling trajectory towards the horizon center
          const radius = (1 - u * 0.75) * (width * 0.35);
          const angle = u * Math.PI * 3 + time * 0.8 + offsetPhase;
          const px = mouseX + Math.cos(angle) * radius;
          const py = mouseY + Math.sin(angle) * (radius * 0.45);

          if (t === 0) {
            ctx.moveTo(px, py);
          } else {
            ctx.lineTo(px, py);
          }
        }
        ctx.stroke();
      }

      // Central horizon disc representation
      ctx.beginPath();
      ctx.arc(mouseX, mouseY, 32, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(7, 9, 14, 0.7)';
      ctx.fill();
      ctx.strokeStyle = 'rgba(129, 140, 248, 0.4)';
      ctx.setLineDash([4, 4]);
      ctx.stroke();
      ctx.setLineDash([]);

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isAnimationPaused]);

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#07090e]"
    >
      {/* Background Interactive Spacetime Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-auto opacity-70"
      />

      {/* Decorative subtle coordinates overlay */}
      <div className="absolute top-20 left-6 hidden lg:block font-mono text-[11px] text-slate-500/70 space-y-1 select-none pointer-events-none">
        <div>// SPACETIME GEOMETRY: (2+1)D ASYMPTOTICALLY AdS</div>
        <div>ds² = -(r² - r₊²)/L² dt² + L²/(r² - r₊²) dr² + r² dφ²</div>
        <div>HORIZON: r = r₊ | TEMPERATURE: T_H = r₊ / (2π L²)</div>
      </div>

      <div className="absolute top-20 right-6 hidden lg:flex items-center gap-3">
        <button
          onClick={() => setIsAnimationPaused(!isAnimationPaused)}
          aria-label={isAnimationPaused ? 'Resume spacetime background animation' : 'Pause spacetime background animation'}
          className="px-2.5 py-1 rounded bg-slate-900/80 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-slate-200 text-xs font-mono flex items-center gap-1.5 transition-colors cursor-pointer"
        >
          {isAnimationPaused ? <Play className="w-3 h-3" /> : <Pause className="w-3 h-3" />}
          <span>{isAnimationPaused ? 'Resume Canvas' : 'Pause Canvas'}</span>
        </button>
      </div>

      {/* Main Hero Card Container */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Academic Status Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800/90 shadow-sm text-xs font-mono text-slate-300 mb-6 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
          <span>M.Sc. Mathematical Physics (Faculty of Mechanics & Mathematics, Lomonosov Moscow State Univ. 2024–2026) • Delhi, India</span>
        </div>

        {/* Researcher Name */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-medium tracking-tight text-slate-100 mb-3">
          {RESEARCHER_INFO.name}
        </h1>

        {/* Subtitle / Focus Areas */}
        <p className="text-sm sm:text-base md:text-lg font-mono tracking-wide text-cyan-400/90 uppercase mb-6 font-normal">
          Theoretical Physics • Mathematical Physics • Quantum Field Theory
        </p>

        {/* Concise Introductory Statement */}
        <p className="text-base sm:text-xl text-slate-300 font-sans max-w-2xl mx-auto font-light leading-relaxed mb-10">
          Exploring fundamental questions at the intersection of quantum field theory, gravity, particle physics, and mathematical physics.
        </p>

        {/* Two Primary Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <button
            id="hero-explore-research-btn"
            onClick={onExploreResearch}
            className="w-full sm:w-auto px-6 py-3 rounded text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-500 border border-indigo-400/30 shadow-lg shadow-indigo-600/20 hover:shadow-indigo-600/30 transition-all flex items-center justify-center gap-2 group cursor-pointer"
          >
            <span>Explore Research</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            id="hero-about-me-btn"
            onClick={onAboutMe}
            className="w-full sm:w-auto px-6 py-3 rounded text-sm font-medium text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <User className="w-4 h-4 text-slate-400" />
            <span>About Me</span>
          </button>
        </div>

        {/* Interactive Mathematical Formula Cards (Restrained Academic Preview) */}
        <div className="border border-slate-800/80 bg-slate-950/70 backdrop-blur-md rounded-lg p-4 text-left shadow-xl max-w-3xl mx-auto">
          <div className="flex items-center justify-between border-b border-slate-800/80 pb-2 mb-3 text-xs font-mono text-slate-400">
            <span className="flex items-center gap-1.5 text-indigo-300">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Core Theoretical Formulations</span>
            </span>
            <div className="flex gap-2">
              <button
                onClick={() => setActiveMetricMode('ads')}
                className={`px-2 py-0.5 rounded text-[11px] cursor-pointer ${
                  activeMetricMode === 'ads' ? 'bg-indigo-900/50 text-indigo-300 border border-indigo-700/60' : 'hover:text-slate-200'
                }`}
              >
                AdS Duality
              </button>
              <button
                onClick={() => setActiveMetricMode('btz')}
                className={`px-2 py-0.5 rounded text-[11px] cursor-pointer ${
                  activeMetricMode === 'btz' ? 'bg-indigo-900/50 text-indigo-300 border border-indigo-700/60' : 'hover:text-slate-200'
                }`}
              >
                BTZ Metric
              </button>
              <button
                onClick={() => setActiveMetricMode('qft')}
                className={`px-2 py-0.5 rounded text-[11px] cursor-pointer ${
                  activeMetricMode === 'qft' ? 'bg-indigo-900/50 text-indigo-300 border border-indigo-700/60' : 'hover:text-slate-200'
                }`}
              >
                Path Integral
              </button>
              <button
                onClick={() => setActiveMetricMode('gw')}
                className={`px-2 py-0.5 rounded text-[11px] cursor-pointer ${
                  activeMetricMode === 'gw' ? 'bg-cyan-900/50 text-cyan-300 border border-cyan-700/60' : 'hover:text-slate-200'
                }`}
              >
                Grav. Waves
              </button>
            </div>
          </div>

          <div className="py-2 text-center overflow-x-auto">
            {activeMetricMode === 'ads' && (
              <div>
                <MathView math="ds^2 = \frac{L^2}{z^2}\left(dz^2 + \eta_{\mu\nu}dx^\mu dx^\nu\right) \quad \longleftrightarrow \quad \langle \mathcal{O}(x)\mathcal{O}(0)\rangle = \frac{C_{\mathcal{O}}}{|x|^{2\Delta}}" block />
                <p className="text-[12px] font-mono text-slate-400 text-center mt-1">
                  AdS metric in Poincaré patch mapping bulk radial scale $z$ to boundary operator scaling dimension $\Delta$
                </p>
              </div>
            )}
            {activeMetricMode === 'btz' && (
              <div>
                <MathView math="ds^2 = -\frac{r^2 - r_+^2}{L^2} dt^2 + \frac{L^2}{r^2 - r_+^2} dr^2 + r^2 d\phi^2, \quad \omega_* = -i 2\pi T_H" block />
                <p className="text-[12px] font-mono text-slate-400 text-center mt-1">
                  BTZ black hole geometry and complex Matsubara pole-skipping frequency
                </p>
              </div>
            )}
            {activeMetricMode === 'qft' && (
              <div>
                <MathView math="Z[J] = \int \mathcal{D}\phi \, \exp\left( i \int d^d x \, [\mathcal{L}(\phi) + J(x)\phi(x)] \right)" block />
                <p className="text-[12px] font-mono text-slate-400 text-center mt-1">
                  Functional path integral generating all time-ordered vacuum Green's functions
                </p>
              </div>
            )}
            {activeMetricMode === 'gw' && (
              <div>
                <MathView math="h_{ij}^{\text{TT}}(t) = \frac{2G}{c^4 r} \ddot{I}_{ij}^{\text{TT}}(t - r/c), \quad f_{\text{GW}}(t) = \frac{1}{\pi}\left(\frac{5}{256(t_c - t)}\right)^{3/8} \left(\frac{G\mathcal{M}}{c^3}\right)^{-5/8}" block />
                <p className="text-[12px] font-mono text-cyan-400 text-center mt-1">
                  Gravitational wave quadrupole radiation and binary inspiral acoustic chirp sweep
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
