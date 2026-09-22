import React, { useState, useEffect, useRef } from 'react';
import { 
  Volume2, 
  VolumeX, 
  Play, 
  Pause, 
  Radio, 
  Sparkles, 
  ChevronUp, 
  ChevronDown, 
  Activity, 
  Disc,
  Info
} from 'lucide-react';
import MathView from './MathView';

export const GravitationalWaveAudio: React.FC = () => {
  const [isPlayingAmbient, setIsPlayingAmbient] = useState(false);
  const [isPlayingChirp, setIsPlayingChirp] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [selectedEvent, setSelectedEvent] = useState<'gw150914' | 'gw170817' | 'ambient'>('gw150914');
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentFreq, setCurrentFreq] = useState<number>(35);
  const [currentStrain, setCurrentStrain] = useState<string>('0.00');

  const audioCtxRef = useRef<AudioContext | null>(null);
  const ambientNodesRef = useRef<{
    osc1: OscillatorNode;
    osc2: OscillatorNode;
    gainNode: GainNode;
    filter: BiquadFilterNode;
    lfo: OscillatorNode;
  } | null>(null);
  const masterGainRef = useRef<GainNode | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animFrameRef = useRef<number | null>(null);

  // Initialize or resume AudioContext safely
  const getAudioContext = () => {
    try {
      if (!audioCtxRef.current) {
        const AudioCtxClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        if (!AudioCtxClass) return null;
        const ctx = new AudioCtxClass();
        const masterGain = ctx.createGain();
        masterGain.gain.setValueAtTime(volume, ctx.currentTime);
        masterGain.connect(ctx.destination);
        audioCtxRef.current = ctx;
        masterGainRef.current = masterGain;
      }
      if (audioCtxRef.current && audioCtxRef.current.state === 'suspended') {
        audioCtxRef.current.resume();
      }
      return { ctx: audioCtxRef.current, masterGain: masterGainRef.current! };
    } catch (e) {
      console.warn('AudioContext initialization error:', e);
      return null;
    }
  };

  // Update volume
  useEffect(() => {
    if (masterGainRef.current && audioCtxRef.current) {
      const currentVal = isMuted ? 0 : volume;
      masterGainRef.current.gain.setTargetAtTime(currentVal, audioCtxRef.current.currentTime, 0.05);
    }
  }, [volume, isMuted]);

  // Stop ambient audio
  const stopAmbient = () => {
    if (ambientNodesRef.current && audioCtxRef.current) {
      try {
        const { gainNode, osc1, osc2, lfo } = ambientNodesRef.current;
        gainNode.gain.setTargetAtTime(0, audioCtxRef.current.currentTime, 0.2);
        setTimeout(() => {
          try {
            osc1.stop();
            osc2.stop();
            lfo.stop();
            osc1.disconnect();
            osc2.disconnect();
            lfo.disconnect();
          } catch {
            // Already stopped
          }
          ambientNodesRef.current = null;
        }, 250);
      } catch {
        ambientNodesRef.current = null;
      }
    }
    setIsPlayingAmbient(false);
  };

  // Start continuous ambient spacetime background hum (sub-bass quadrupole metric drone)
  const startAmbient = () => {
    const audio = getAudioContext();
    if (!audio) return;
    const { ctx, masterGain } = audio;
    stopAmbient();

    // Create sub-bass drone with slight detuning to produce gravitational wave quadrupole beating
    const osc1 = ctx.createOscillator();
    const osc2 = ctx.createOscillator();
    const lfo = ctx.createOscillator();
    const lfoGain = ctx.createGain();
    const filter = ctx.createBiquadFilter();
    const gainNode = ctx.createGain();

    // Quadrupole frequencies (deep space fundamental ~55Hz & harmonic)
    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(55, ctx.currentTime); // A1 note
    osc2.type = 'triangle';
    osc2.frequency.setValueAtTime(56.2, ctx.currentTime); // 1.2Hz binaural beating

    // LFO for slow metric spacetime breathing
    lfo.type = 'sine';
    lfo.frequency.setValueAtTime(0.18, ctx.currentTime); // ~5.5 second period
    lfoGain.gain.setValueAtTime(0.25, ctx.currentTime);

    // Warm low-pass filter
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(140, ctx.currentTime);
    filter.Q.setValueAtTime(2, ctx.currentTime);

    gainNode.gain.setValueAtTime(0.001, ctx.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.28, ctx.currentTime + 1.5);

    // Connections
    lfo.connect(lfoGain);
    lfoGain.connect(gainNode.gain);

    osc1.connect(filter);
    osc2.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(masterGain);

    const now = ctx.currentTime;
    osc1.start(now);
    osc2.start(now);
    lfo.start(now);

    ambientNodesRef.current = { osc1, osc2, gainNode, filter, lfo };
    setIsPlayingAmbient(true);
  };

  // Play Binary Coalescence Chirp (GW150914 or GW170817)
  const playGravitationalChirp = (eventType: 'gw150914' | 'gw170817' = selectedEvent === 'ambient' ? 'gw150914' : selectedEvent) => {
    const audio = getAudioContext();
    if (!audio) return;
    const { ctx, masterGain } = audio;
    setIsPlayingChirp(true);

    const now = ctx.currentTime + 0.05;
    const osc = ctx.createOscillator();
    const oscHarmonic = ctx.createOscillator();
    const gain = ctx.createGain();
    const harmonicGain = ctx.createGain();
    const filter = ctx.createBiquadFilter();

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(1200, now);

    if (eventType === 'gw150914') {
      // Binary Black Hole Merger (~36 M_sun + 29 M_sun)
      // Inspiral: 35Hz -> 250Hz in 0.4 seconds, followed by 0.08s ringdown at 250Hz
      const duration = 0.45;
      osc.type = 'sine';
      oscHarmonic.type = 'triangle';

      osc.frequency.setValueAtTime(35, now);
      osc.frequency.exponentialRampToValueAtTime(260, now + duration * 0.85);
      osc.frequency.exponentialRampToValueAtTime(240, now + duration);

      oscHarmonic.frequency.setValueAtTime(70, now);
      oscHarmonic.frequency.exponentialRampToValueAtTime(520, now + duration * 0.85);

      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(0.12, now + duration * 0.4);
      gain.gain.exponentialRampToValueAtTime(0.45, now + duration * 0.85); // Peak merger strain
      gain.gain.exponentialRampToValueAtTime(0.0001, now + duration + 0.12); // Ringdown damping

      harmonicGain.gain.setValueAtTime(0.001, now);
      harmonicGain.gain.exponentialRampToValueAtTime(0.08, now + duration * 0.85);
      harmonicGain.gain.exponentialRampToValueAtTime(0.0001, now + duration + 0.08);

      osc.connect(gain);
      oscHarmonic.connect(harmonicGain);
      harmonicGain.connect(filter);
      gain.connect(filter);
      filter.connect(masterGain);

      osc.start(now);
      oscHarmonic.start(now);
      osc.stop(now + duration + 0.15);
      oscHarmonic.stop(now + duration + 0.15);

      setTimeout(() => {
        setIsPlayingChirp(false);
      }, (duration + 0.2) * 1000);
    } else {
      // GW170817 Binary Neutron Star Merger (~1.4 M_sun + 1.4 M_sun)
      // Long chirp sweep from 45Hz to 750Hz over 1.4 seconds
      const duration = 1.3;
      osc.type = 'sine';
      oscHarmonic.type = 'sine';

      osc.frequency.setValueAtTime(42, now);
      osc.frequency.exponentialRampToValueAtTime(750, now + duration * 0.92);
      osc.frequency.exponentialRampToValueAtTime(680, now + duration);

      oscHarmonic.frequency.setValueAtTime(84, now);
      oscHarmonic.frequency.exponentialRampToValueAtTime(1500, now + duration * 0.92);

      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(0.1, now + duration * 0.5);
      gain.gain.exponentialRampToValueAtTime(0.38, now + duration * 0.92);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + duration + 0.1);

      harmonicGain.gain.setValueAtTime(0.001, now);
      harmonicGain.gain.exponentialRampToValueAtTime(0.05, now + duration * 0.92);
      harmonicGain.gain.exponentialRampToValueAtTime(0.0001, now + duration + 0.08);

      osc.connect(gain);
      oscHarmonic.connect(harmonicGain);
      harmonicGain.connect(filter);
      gain.connect(filter);
      filter.connect(masterGain);

      osc.start(now);
      oscHarmonic.start(now);
      osc.stop(now + duration + 0.12);
      oscHarmonic.stop(now + duration + 0.12);

      setTimeout(() => {
        setIsPlayingChirp(false);
      }, (duration + 0.15) * 1000);
    }
  };

  // Canvas waveform animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let phase = 0;

    const draw = () => {
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      // Grid lines
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.08)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(0, h / 2);
      ctx.lineTo(w, h / 2);
      ctx.stroke();

      phase += isPlayingChirp ? 0.22 : isPlayingAmbient ? 0.08 : 0.03;

      // Draw Gravitational Wave Strain Waveform h(t)
      ctx.beginPath();
      ctx.lineWidth = 2;
      const gradient = ctx.createLinearGradient(0, 0, w, 0);
      gradient.addColorStop(0, '#06b6d4');
      gradient.addColorStop(0.5, '#6366f1');
      gradient.addColorStop(1, '#a855f7');
      ctx.strokeStyle = gradient;

      for (let x = 0; x < w; x++) {
        const normX = x / w; // 0 to 1
        let amp = 0;
        let freq = 0;

        if (isPlayingChirp) {
          // Chirp envelope: amplitude and frequency grow toward merger
          const chirpProgress = Math.min(1, normX * 1.2);
          freq = 30 + Math.pow(chirpProgress, 2.5) * 220;
          amp = (h / 3) * Math.pow(chirpProgress, 1.8);
          if (normX > 0.85) {
            // Ringdown decay
            amp *= Math.exp(-(normX - 0.85) * 12);
          }
        } else if (isPlayingAmbient) {
          // Ambient cosmic gravitational wave background
          freq = 45 + Math.sin(phase * 0.5) * 8;
          amp = (h / 4.5) * (0.6 + 0.4 * Math.sin(phase * 0.3));
        } else {
          // Idling theoretical metric vibration
          freq = 25;
          amp = h / 7;
        }

        const y = h / 2 + Math.sin(normX * freq * 0.35 - phase) * amp;
        if (x === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.stroke();

      // Dynamic metrics readout calculation
      if (isPlayingChirp) {
        setCurrentFreq(Math.round(140 + Math.sin(phase) * 90));
        setCurrentStrain((0.85 + Math.random() * 0.25).toFixed(2));
      } else if (isPlayingAmbient) {
        setCurrentFreq(55);
        setCurrentStrain('0.14');
      } else {
        setCurrentFreq(35);
        setCurrentStrain('0.02');
      }

      animFrameRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, [isPlayingChirp, isPlayingAmbient]);

  return (
    <div className="fixed bottom-4 right-4 z-40 max-w-sm sm:max-w-md w-[calc(100vw-2rem)]">
      {/* Collapsed Pill Bar */}
      <div 
        className={`rounded-xl border transition-all duration-300 shadow-2xl backdrop-blur-xl ${
          isExpanded 
            ? 'bg-[#060b18]/95 border-cyan-500/40 shadow-cyan-950/40' 
            : 'bg-[#080e22]/90 border-slate-700/80 hover:border-cyan-500/50 shadow-black/60'
        }`}
      >
        {/* Header Ribbon / Quick Controls */}
        <div className="p-3 flex items-center justify-between gap-2.5">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-2.5 text-left cursor-pointer group flex-1 min-w-0"
            aria-label="Toggle Gravitational Wave Audio Panel"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-600/30 via-indigo-600/20 to-purple-900/40 border border-cyan-400/40 flex items-center justify-center text-cyan-300 shrink-0">
              <Activity className={`w-4 h-4 ${isPlayingChirp || isPlayingAmbient ? 'animate-pulse text-cyan-300' : 'text-slate-400'}`} />
            </div>
            <div className="truncate">
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-serif font-medium text-slate-100 group-hover:text-cyan-300 transition-colors">
                  Gravitational Wave Audio
                </span>
                {(isPlayingChirp || isPlayingAmbient) && (
                  <span className="px-1.5 py-0.2 rounded text-[9px] font-mono bg-cyan-950 text-cyan-300 border border-cyan-800 animate-pulse">
                    ACTIVE
                  </span>
                )}
              </div>
              <p className="text-[10px] font-mono text-slate-400 truncate">
                {isPlayingChirp ? 'Chirp Coalescence Active' : isPlayingAmbient ? 'Cosmic Spacetime Hum' : 'Binary Black Hole Acoustics'}
              </p>
            </div>
          </button>

          {/* Quick Action Buttons */}
          <div className="flex items-center gap-1.5 shrink-0">
            <button
              onClick={() => playGravitationalChirp('gw150914')}
              disabled={isPlayingChirp}
              className={`px-2.5 py-1.5 rounded text-xs font-mono border transition-all cursor-pointer flex items-center gap-1.5 ${
                isPlayingChirp
                  ? 'bg-cyan-500/20 border-cyan-400 text-cyan-200'
                  : 'bg-cyan-950/40 hover:bg-cyan-900/50 border-cyan-800/60 text-cyan-300 hover:text-cyan-100'
              }`}
              title="Play Binary Black Hole Merger Chirp (GW150914)"
            >
              <Play className="w-3 h-3" />
              <span className="text-[11px] hidden sm:inline">Chirp</span>
            </button>

            <button
              onClick={() => {
                if (isPlayingAmbient) {
                  stopAmbient();
                } else {
                  startAmbient();
                }
              }}
              className={`p-1.5 rounded border transition-all cursor-pointer ${
                isPlayingAmbient
                  ? 'bg-purple-950/60 border-purple-500 text-purple-200 shadow-xs'
                  : 'bg-slate-900/80 hover:bg-slate-800 border-slate-800 text-slate-400 hover:text-slate-200'
              }`}
              title={isPlayingAmbient ? 'Pause Cosmic Hum' : 'Play Ambient Cosmic Spacetime Hum'}
            >
              <Radio className={`w-3.5 h-3.5 ${isPlayingAmbient ? 'animate-spin' : ''}`} />
            </button>

            <button
              onClick={() => setIsMuted(!isMuted)}
              className="p-1.5 rounded bg-slate-900/80 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-slate-200 cursor-pointer transition-colors"
              aria-label={isMuted ? 'Unmute' : 'Mute'}
            >
              {isMuted ? <VolumeX className="w-3.5 h-3.5 text-rose-400" /> : <Volume2 className="w-3.5 h-3.5" />}
            </button>

            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-1 rounded text-slate-400 hover:text-slate-200 cursor-pointer"
              aria-label="Expand gravitational wave controls"
            >
              {isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Expanded Controls & Spectrogram Scope */}
        {isExpanded && (
          <div className="p-4 pt-1 border-t border-slate-800/80 space-y-4 animate-fadeIn text-xs">
            {/* Real-time Oscillogram Canvas */}
            <div className="relative rounded-lg bg-[#030612] border border-slate-850 p-2 overflow-hidden shadow-inner">
              <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 mb-1">
                <span className="flex items-center gap-1 text-cyan-400">
                  <Activity className="w-3 h-3" />
                  <span>Strain Tensor <MathView math="h_{ij}(t)" /> Oscilloscope</span>
                </span>
                <span>f ≈ {currentFreq} Hz • h ~ {currentStrain}×10⁻²¹</span>
              </div>
              <canvas
                ref={canvasRef}
                width={360}
                height={70}
                className="w-full h-16 rounded bg-[#02040a]"
              />
            </div>

            {/* Event Selector & Chirp Presets */}
            <div className="space-y-2">
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                Astrophysical Acoustic Sources:
              </span>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => {
                    setSelectedEvent('gw150914');
                    playGravitationalChirp('gw150914');
                  }}
                  className={`p-2.5 rounded-lg border text-left transition-all cursor-pointer ${
                    selectedEvent === 'gw150914'
                      ? 'bg-cyan-950/60 border-cyan-500/70 text-slate-100 shadow-sm'
                      : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 text-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between mb-0.5">
                    <span className="font-serif font-medium text-cyan-300">GW150914</span>
                    <span className="text-[9px] font-mono px-1 rounded bg-slate-800 text-slate-400">36+29 M☉</span>
                  </div>
                  <p className="text-[10px] text-slate-400 font-light">
                    Binary Black Hole Merger chirp (35Hz → 250Hz ringdown)
                  </p>
                </button>

                <button
                  onClick={() => {
                    setSelectedEvent('gw170817');
                    playGravitationalChirp('gw170817');
                  }}
                  className={`p-2.5 rounded-lg border text-left transition-all cursor-pointer ${
                    selectedEvent === 'gw170817'
                      ? 'bg-purple-950/60 border-purple-500/70 text-slate-100 shadow-sm'
                      : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 text-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between mb-0.5">
                    <span className="font-serif font-medium text-purple-300">GW170817</span>
                    <span className="text-[9px] font-mono px-1 rounded bg-slate-800 text-slate-400">1.4+1.4 M☉</span>
                  </div>
                  <p className="text-[10px] text-slate-400 font-light">
                    Binary Neutron Star high-frequency sweep (40Hz → 750Hz)
                  </p>
                </button>
              </div>
            </div>

            {/* Continuous Ambient Background Toggle */}
            <div className="p-3 rounded-lg bg-[#080d1e] border border-slate-800 flex items-center justify-between gap-3">
              <div>
                <span className="font-serif font-medium text-slate-200 block text-xs">
                  Continuous Cosmic Metric Hum
                </span>
                <p className="text-[10px] text-slate-400 font-light">
                  Sub-bass quadrupole gravitational background resonance (~55Hz)
                </p>
              </div>
              <button
                onClick={() => {
                  if (isPlayingAmbient) {
                    stopAmbient();
                  } else {
                    startAmbient();
                  }
                }}
                className={`px-3 py-1.5 rounded text-xs font-mono transition-all cursor-pointer ${
                  isPlayingAmbient
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-950'
                    : 'bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700'
                }`}
              >
                {isPlayingAmbient ? 'Pause Hum' : 'Play Hum'}
              </button>
            </div>

            {/* Volume Control */}
            <div className="flex items-center gap-3 pt-1">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider shrink-0">
                Volume:
              </span>
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={isMuted ? 0 : volume}
                onChange={(e) => {
                  setVolume(parseFloat(e.target.value));
                  if (isMuted) setIsMuted(false);
                }}
                className="w-full accent-cyan-500 cursor-pointer h-1 bg-slate-800 rounded-lg"
                aria-label="Gravitational wave audio volume"
              />
              <span className="text-[10px] font-mono text-slate-400 w-8 text-right">
                {isMuted ? '0%' : `${Math.round(volume * 100)}%`}
              </span>
            </div>

            {/* Theoretical Physics Quadrupole Note */}
            <div className="p-2.5 rounded bg-cyan-950/20 border border-cyan-900/30 text-[10px] text-slate-400 font-mono flex items-start gap-2">
              <Info className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <span>Quadrupole formula: </span>
                <MathView math="h_{ij}^{\text{TT}}(t) = \frac{2G}{c^4 r}\ddot{I}_{ij}^{\text{TT}}(t - r/c)" />
                <span className="block mt-1">
                  As the orbital separation shrinks via gravitational energy radiation, the frequency sweeps upward as an audible chirp ending in quasinormal ringdown.
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GravitationalWaveAudio;
