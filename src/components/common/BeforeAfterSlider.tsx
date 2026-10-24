import React, { useState, useRef, useCallback } from 'react';
import { GalleryProject } from '../../data/galleryData';
import { Check, ShieldAlert, Sparkles } from 'lucide-react';

interface BeforeAfterSliderProps {
  project: GalleryProject;
}

export function BeforeAfterSlider({ project }: BeforeAfterSliderProps) {
  const [sliderPos, setSliderPos] = useState<number>(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef<boolean>(false);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percent = (x / rect.width) * 100;
    if (percent < 0) percent = 0;
    if (percent > 100) percent = 100;
    setSliderPos(percent);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    handleMove(e.clientX);
  };

  const handleMouseDown = () => {
    isDragging.current = true;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  // Render Visual Simulation for Before State
  const renderBeforeVisual = () => {
    switch (project.beforeVisualType) {
      case 'heavy-dust':
        return (
          <div className="absolute inset-0 bg-gradient-to-br from-amber-900/60 via-stone-800 to-amber-950 flex flex-col items-center justify-center p-6 text-center select-none overflow-hidden">
            {/* Solar panel grid with heavy dust texture */}
            <div className="absolute inset-0 grid grid-cols-6 grid-rows-4 gap-1 opacity-40 p-4">
              {Array.from({ length: 24 }).map((_, i) => (
                <div key={i} className="border border-stone-500 bg-stone-900/80 rounded-sm"></div>
              ))}
            </div>
            {/* Dust haze overlay */}
            <div className="absolute inset-0 bg-amber-950/60 backdrop-blur-[1px] mix-blend-multiply"></div>
            <div className="relative z-10 space-y-2 max-w-xs">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-red-950/80 border border-red-800 text-red-300 text-xs font-semibold">
                <ShieldAlert className="w-3.5 h-3.5" />
                Before: Heavy Dust & Pollen Veil
              </span>
              <p className="text-xs text-amber-200/90 leading-tight">
                2 years of baked-on Inland Empire soil & pollen. Solar yield reduced by 24%.
              </p>
            </div>
          </div>
        );
      case 'bird-mess':
        return (
          <div className="absolute inset-0 bg-gradient-to-br from-stone-900 via-stone-800 to-amber-950 flex flex-col items-center justify-center p-6 text-center select-none overflow-hidden">
            <div className="absolute inset-0 grid grid-cols-5 grid-rows-3 gap-2 opacity-30 p-4">
              {Array.from({ length: 15 }).map((_, i) => (
                <div key={i} className="border border-stone-400 bg-stone-800"></div>
              ))}
            </div>
            <div className="relative z-10 space-y-2 max-w-xs">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-amber-950/90 border border-amber-700 text-amber-300 text-xs font-semibold">
                <ShieldAlert className="w-3.5 h-3.5" />
                Before: Heavy Pigeon Nesting
              </span>
              <p className="text-xs text-stone-300 leading-tight">
                Severe bird nesting under tile cavities, corrosive droppings, and damaged wiring.
              </p>
            </div>
          </div>
        );
      case 'coastal-salt':
        return (
          <div className="absolute inset-0 bg-gradient-to-br from-slate-700 via-slate-800 to-blue-950 flex flex-col items-center justify-center p-6 text-center select-none overflow-hidden">
            <div className="absolute inset-0 bg-slate-300/20 backdrop-blur-[2px]"></div>
            <div className="relative z-10 space-y-2 max-w-xs">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-blue-950/80 border border-blue-700 text-blue-200 text-xs font-semibold">
                <ShieldAlert className="w-3.5 h-3.5" />
                Before: Marine Layer Salt Film
              </span>
              <p className="text-xs text-slate-200 leading-tight">
                White calcified salt spray reflecting sunlight and reducing energy conversion.
              </p>
            </div>
          </div>
        );
      case 'clogged-gutter':
        return (
          <div className="absolute inset-0 bg-gradient-to-br from-stone-900 via-amber-950 to-stone-900 flex flex-col items-center justify-center p-6 text-center select-none overflow-hidden">
            <div className="relative z-10 space-y-2 max-w-xs">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-red-950/90 border border-red-700 text-red-200 text-xs font-semibold">
                <ShieldAlert className="w-3.5 h-3.5" />
                Before: Clogged Gutters
              </span>
              <p className="text-xs text-amber-200/90 leading-tight">
                Pine needles, leaf sludge, and stagnant water threatening roof fascia rot.
              </p>
            </div>
          </div>
        );
      default:
        return (
          <div className="absolute inset-0 bg-slate-900 flex flex-col items-center justify-center p-6 text-center select-none">
            <span className="px-3 py-1 rounded bg-red-950 border border-red-800 text-red-300 text-xs font-semibold">
              Before Treatment
            </span>
          </div>
        );
    }
  };

  // Render Visual Simulation for After State
  const renderAfterVisual = () => {
    switch (project.afterVisualType) {
      case 'gleaming-solar':
        return (
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-sky-950 to-slate-950 flex flex-col items-center justify-center p-6 text-center select-none overflow-hidden">
            {/* Pristine solar grid reflecting pure sky */}
            <div className="absolute inset-0 grid grid-cols-6 grid-rows-4 gap-1 p-4 opacity-75">
              {Array.from({ length: 24 }).map((_, i) => (
                <div key={i} className="border border-sky-500/40 bg-sky-950/90 rounded-sm relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-sky-400/10 to-white/20"></div>
                </div>
              ))}
            </div>
            <div className="relative z-10 space-y-2 max-w-xs">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-emerald-950/90 border border-emerald-600 text-emerald-300 text-xs font-semibold shadow-lg">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                After: 0 PPM Deionized Pure Water
              </span>
              <p className="text-xs text-sky-100 font-medium leading-tight">
                100% spotless glass restored to peak manufacturer wattage capacity.
              </p>
            </div>
          </div>
        );
      case 'mesh-installed':
        return (
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 flex flex-col items-center justify-center p-6 text-center select-none overflow-hidden">
            {/* Steel mesh barrier pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:12px_12px] opacity-25"></div>
            <div className="relative z-10 space-y-2 max-w-xs">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-emerald-950/90 border border-emerald-600 text-emerald-300 text-xs font-semibold shadow-lg">
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                After: Steel Mesh Critter Guard
              </span>
              <p className="text-xs text-slate-200 font-medium leading-tight">
                Permanent 1/2&quot; galvanized steel barrier installed with warranty-safe clips.
              </p>
            </div>
          </div>
        );
      case 'clean-gutter':
        return (
          <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-sky-950 to-slate-900 flex flex-col items-center justify-center p-6 text-center select-none overflow-hidden">
            <div className="relative z-10 space-y-2 max-w-xs">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-emerald-950/90 border border-emerald-600 text-emerald-300 text-xs font-semibold shadow-lg">
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                After: Free-Flowing Cleared Channel
              </span>
              <p className="text-xs text-sky-100 font-medium leading-tight">
                Vacuumed clear, wiped down, and downspouts tested with 100% smooth drainage.
              </p>
            </div>
          </div>
        );
      case 'commercial-clean':
        return (
          <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-slate-900 to-sky-900 flex flex-col items-center justify-center p-6 text-center select-none overflow-hidden">
            <div className="relative z-10 space-y-2 max-w-xs">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-emerald-950/90 border border-emerald-600 text-emerald-300 text-xs font-semibold shadow-lg">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                After: Commercial Efficiency Restored
              </span>
              <p className="text-xs text-sky-100 font-medium leading-tight">
                Full 240 kW array washed with multi-pole pure water rig. +18.5% yield.
              </p>
            </div>
          </div>
        );
      default:
        return (
          <div className="absolute inset-0 bg-slate-900 flex flex-col items-center justify-center p-6 text-center select-none">
            <span className="px-3 py-1 rounded bg-emerald-950 border border-emerald-700 text-emerald-300 text-xs font-semibold">
              After Treatment
            </span>
          </div>
        );
    }
  };

  return (
    <div className="space-y-3">
      {/* Interactive Visual Comparison Frame */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onTouchMove={handleTouchMove}
        className="relative w-full h-72 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-xl border border-slate-700 select-none cursor-ew-resize group"
      >
        {/* Under layer: AFTER (100% width) */}
        {renderAfterVisual()}

        {/* Top layer: BEFORE (clipped to sliderPos %) */}
        <div
          className="absolute inset-y-0 left-0 overflow-hidden"
          style={{ width: `${sliderPos}%` }}
        >
          <div className="relative w-full h-full min-w-[320px] sm:min-w-[480px] md:min-w-[640px]">
            {renderBeforeVisual()}
          </div>
        </div>

        {/* Vertical Draggable Divider Line */}
        <div
          className="absolute top-0 bottom-0 z-20 w-1 bg-white shadow-[0_0_12px_rgba(0,0,0,0.6)] cursor-ew-resize flex items-center justify-center"
          style={{ left: `${sliderPos}%` }}
        >
          <div className="w-8 h-8 rounded-full bg-amber-400 text-slate-950 border-2 border-white flex items-center justify-center shadow-lg -translate-x-1/2">
            <svg
              className="w-4 h-4 fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M8.5 7l-5 5 5 5V7zm7 0v10l5-5-5-5z" />
            </svg>
          </div>
        </div>

        {/* Hover / Touch Instructions */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 pointer-events-none px-3 py-1 rounded-full bg-slate-950/70 backdrop-blur-sm text-[11px] text-white/80 border border-slate-700">
          Drag slider left or right to compare
        </div>
      </div>

      {/* Accessible Slider Range Bar for keyboard or quick clicks */}
      <div className="flex items-center gap-3 px-1">
        <span className="text-xs font-semibold text-red-400">Before</span>
        <input
          type="range"
          min="0"
          max="100"
          value={sliderPos}
          onChange={(e) => setSliderPos(Number(e.target.value))}
          className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-400"
          aria-label={`Comparison slider for ${project.title}`}
        />
        <span className="text-xs font-semibold text-emerald-400">After</span>
      </div>

      {/* Project Details Strip */}
      <div className="p-4 bg-slate-900/90 rounded-xl border border-slate-800 space-y-2">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h4 className="text-sm font-bold text-white">{project.title}</h4>
          {project.efficiencyGain && (
            <span className="text-xs font-bold text-amber-400 bg-amber-400/10 px-2.5 py-0.5 rounded border border-amber-400/20">
              {project.efficiencyGain}
            </span>
          )}
        </div>
        <p className="text-xs text-slate-300 leading-relaxed">{project.description}</p>
        <div className="flex flex-wrap items-center gap-3 text-[11px] text-slate-400 pt-1 border-t border-slate-800">
          <span>{project.location}</span>
          <span>·</span>
          <span>{project.systemSize}</span>
        </div>
      </div>
    </div>
  );
}
