'use client';

import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const hidden = localStorage.getItem('hide-announcement');
    if (hidden) {
      setIsVisible(false);
    }
  }, []);

  const handleClose = () => {
    localStorage.setItem('hide-announcement', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="bg-pp-red py-2 px-4 relative flex items-center justify-center overflow-hidden">
      <div className="md:hidden whitespace-nowrap overflow-hidden w-full relative h-[20px]">
        <p className="text-sm font-dm-sans font-medium text-white tracking-wide absolute animate-[scroll_15s_linear_infinite]">
          ✨ Now Welcoming New Clients in Austin & Georgetown — Limited Spots · Book Today
        </p>
      </div>
      <div className="hidden md:flex w-full max-w-7xl mx-auto items-center justify-center relative">
        <p className="text-sm font-dm-sans font-medium text-white tracking-wide text-center">
          ✨ Now Welcoming New Clients in Austin & Georgetown — Limited Spots · Book Today
        </p>
        <button 
          onClick={handleClose} 
          className="absolute right-0 text-white/80 hover:text-white transition-colors"
          aria-label="Close announcement"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
