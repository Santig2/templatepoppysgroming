'use client';

import { useState } from 'react';
import { FadeIn } from '@/components/FadeIn';

// Mock data for our gallery. Replace URLs with absolute paths or real ones when available.
const GALLERY_ITEMS = [
  { id: 1, category: 'doodles', img: '/perrito1.png', fallback: 'https://images.unsplash.com/photo-1599839619722-39751411ea63?q=80&w=600&auto=format&fit=crop', alt: 'Fresh groomed doodle' },
  { id: 2, category: 'small', img: '/perritosolo.png', fallback: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=600&auto=format&fit=crop', alt: 'Small fluffy dog' },
  { id: 3, category: 'double', img: '/perritosolo2.png', fallback: 'https://images.unsplash.com/photo-1537151608805-ea9d1af8ddfb?q=80&w=600&auto=format&fit=crop', alt: 'Pomeranian smiling' },
  { id: 4, category: 'doodles', img: '/perrito1-2.png', fallback: 'https://images.unsplash.com/photo-1628148909670-65fde71e1ae0?q=80&w=600&auto=format&fit=crop', alt: 'Goldendoodle portrait' },
  { id: 5, category: 'small', img: '/perritosolo3.png', fallback: 'https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?q=80&w=600&auto=format&fit=crop', alt: 'Yorkie with a bow' },
  { id: 6, category: 'double', img: '/perritosolo4.png', fallback: 'https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=600&auto=format&fit=crop', alt: 'Husky after bath' },
  { id: 7, category: 'doodles', img: '/dosperritos.png', fallback: 'https://images.unsplash.com/photo-1585559604470-4f519ebce836?q=80&w=600&auto=format&fit=crop', alt: 'Poodle mix outside' },
  { id: 8, category: 'small', img: '/perritosolo5.png', fallback: 'https://images.unsplash.com/photo-1563220364-77864f1dcdda?q=80&w=600&auto=format&fit=crop', alt: 'Shih tzu cute face' }
];

const FILTERS = [
  { id: 'all', label: 'All Photos' },
  { id: 'doodles', label: 'Doodles' },
  { id: 'small', label: 'Small Breeds' },
  { id: 'double', label: 'Double Coats' }
];

export function GalleryGrid() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredItems = activeFilter === 'all' 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === activeFilter);

  return (
    <div>
      {/* ── FILTERS ── */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        {FILTERS.map(f => (
          <button
            key={f.id}
            onClick={() => setActiveFilter(f.id)}
            className={`px-5 py-2.5 rounded-full text-sm font-bold font-dm-sans transition-all duration-300 ${
              activeFilter === f.id 
                ? 'bg-pp-red text-white shadow-[var(--clay-btn-primary)] border border-transparent scale-105' 
                : 'bg-white text-pp-muted border border-pp-border hover:border-pp-red/50 hover:text-pp-dark'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* ── MASONRY GRID ── */}
      <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
        {filteredItems.map((item, index) => (
          <FadeIn key={item.id} delay={index * 50} className="break-inside-avoid">
            <div className="relative group rounded-[24px] overflow-hidden bg-pp-cream shadow-sm hover:shadow-[var(--clay-card)] transition-all duration-300 transform hover:-translate-y-1">
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-pp-dark/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex flex-col justify-end p-6">
                <span className="bg-white/90 backdrop-blur-sm text-pp-dark rounded-full px-3 py-1 text-[10px] font-bold tracking-wider uppercase inline-flex w-fit shadow-lg transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  {item.category}
                </span>
              </div>
              
              <img 
                src={item.img} 
                alt={item.alt}
                onError={(e) => { e.target.src = item.fallback; }}
                className="w-full h-auto object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
          </FadeIn>
        ))}
      </div>
      
      {filteredItems.length === 0 && (
         <div className="text-center py-20 bg-pp-cream-dark rounded-[24px] border border-pp-border border-dashed font-dm-sans text-pp-muted">
           No photos found for this category yet. Check back soon!
         </div>
      )}
    </div>
  );
}
