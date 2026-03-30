'use client';

import { useRef, useState, useEffect } from 'react';
import { MousePointerClick, Truck, Bath, Smile } from 'lucide-react';
import Link from 'next/link';

const steps = [
  { icon: MousePointerClick, title: 'Book Online or Call', desc: 'Choose your service and date in minutes. New clients always welcome!' },
  { icon: Truck, title: 'We Come to You', desc: 'Our Poppy Paws van arrives right on time, fully equipped.' },
  { icon: Bath, title: 'Full Spa Treatment', desc: 'Private 1-on-1 groom: bath, cut, nails, ears & more.' },
  { icon: Smile, title: 'Happy Dog, Happy Family', desc: 'We hand back a fresh, fluffy, great-smelling pup. Instantly.' },
];

export function ProcessScroll() {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const { top, height } = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      if (top > 0) {
        setActiveIndex(0);
      } else if (top <= -height + windowHeight) {
        setActiveIndex(steps.length - 1);
      } else {
        const scrolledDistance = -top;
        const progress = scrolledDistance / (height - windowHeight);
        const index = Math.floor(progress * steps.length);
        setActiveIndex(Math.min(steps.length - 1, Math.max(0, index)));
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-[400vh]">
      <div className="sticky top-0 w-full h-screen flex flex-col items-center justify-center overflow-hidden">
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 h-full flex flex-col items-center justify-center">
          
          <div className="text-center absolute top-[10vh] md:top-[15vh] left-0 right-0 px-6">
            <p className="text-xs md:text-sm font-bold uppercase tracking-widest text-pp-red mb-2 md:mb-4 font-dm-sans">THE PROCESS</p>
            <h2 className="text-[clamp(24px,5vw,56px)] font-playfair font-bold leading-[1.2] text-pp-dark text-center">Grooming Made Simple</h2>
          </div>
          
          <div className="relative w-full h-[55vh] flex items-center justify-center mt-8 md:mt-12 px-4">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isActive = idx === activeIndex;
              const isPast = idx < activeIndex;
              
              let transformClass = "translate-x-[150%] opacity-0 blur-sm scale-90";
              if (isActive) {
                transformClass = "translate-x-0 opacity-100 blur-0 scale-100";
              } else if (isPast) {
                transformClass = "-translate-x-[150%] opacity-0 blur-sm scale-90";
              }

              return (
                <div key={idx} className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1.2)] ${transformClass}`}>
                   <div className="w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 bg-pp-red text-white flex items-center justify-center rounded-full font-bold shadow-[var(--clay-btn-primary)] font-dm-sans mb-5 md:mb-8">
                      <Icon className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16" />
                   </div>
                   <h3 className="font-dm-sans font-bold text-2xl md:text-4xl lg:text-5xl text-pp-dark mb-4 md:mb-6 text-center px-4">{step.title}</h3>
                   <p className="font-dm-sans text-base md:text-xl lg:text-2xl text-pp-dark/80 max-w-xs md:max-w-2xl mx-auto leading-relaxed text-center px-4">{step.desc}</p>
                </div>
              );
            })}
          </div>

          <div className={`absolute bottom-[10vh] transition-all duration-500 ${activeIndex === 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
             <Link href="/book" className="inline-flex bg-pp-red text-white items-center justify-center rounded-full px-10 py-5 text-lg font-bold shadow-[var(--clay-btn-primary)] hover:bg-pp-red-dark hover:-translate-y-[2px] transition-all font-dm-sans">
               Book Your First Appointment →
             </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
