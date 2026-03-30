'use client';

import { useState, useRef, useEffect } from 'react';

export function BeforeAfterSlider({ beforeImage, afterImage, beforeLabel = 'Before', afterLabel = 'After' }) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = (clientX) => {
    if (!containerRef.current || !isDragging) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };

  const onMouseMove = (e) => handleMove(e.clientX);
  const onTouchMove = (e) => handleMove(e.touches[0].clientX);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('touchmove', onTouchMove);
      window.addEventListener('mouseup', () => setIsDragging(false));
      window.addEventListener('touchend', () => setIsDragging(false));
    }
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('mouseup', () => setIsDragging(false));
      window.removeEventListener('touchend', () => setIsDragging(false));
    };
  }, [isDragging]);

  return (
    <div 
      ref={containerRef}
      className="relative w-full aspect-square md:aspect-video rounded-3xl overflow-hidden shadow-[var(--clay-image)] select-none cursor-ew-resize group"
      onMouseDown={(e) => { setIsDragging(true); handleMove(e.clientX); }}
      onTouchStart={(e) => { setIsDragging(true); handleMove(e.touches[0].clientX); }}
    >
      {/* After Image (Background) */}
      <img src={afterImage} alt="After grooming" className="absolute inset-0 w-full h-full object-cover pointer-events-none" />
      <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md border border-white/30 text-white px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase font-dm-sans z-10 shadow-sm pointer-events-none">
        {afterLabel}
      </div>

      {/* Before Image (Clipped overlay) */}
      <div 
        className="absolute inset-0 h-full pointer-events-none overflow-hidden" 
        style={{ width: `${sliderPosition}%` }}
      >
        {/* Usamos w-[100vw] o container width? w-parent trick: */}
        <img 
          src={beforeImage} 
          alt="Before grooming" 
          className="absolute top-0 left-0 w-full max-w-none h-full object-cover pointer-events-none"
          style={{ width: containerRef.current ? containerRef.current.offsetWidth : '100vw' }}
        />
        <div className="absolute top-4 left-4 bg-pp-dark/40 backdrop-blur-md border border-white/10 text-white px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase font-dm-sans z-10 shadow-sm">
          {beforeLabel}
        </div>
      </div>

      {/* Slider Divider */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize shadow-[0_0_10px_rgba(0,0,0,0.5)] z-20 pointer-events-none"
        style={{ left: `calc(${sliderPosition}% - 2px)` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center pointer-events-none group-hover:scale-110 transition-transform">
          <div className="flex gap-1 text-pp-dark">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </div>
        </div>
      </div>
    </div>
  );
}
