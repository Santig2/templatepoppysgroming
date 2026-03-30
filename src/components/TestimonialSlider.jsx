'use client';

import { useState, useRef } from 'react';

const reviewsData = [
  { 
    name: 'Josh D.', 
    location: 'Georgetown TX', 
    text: "Wow, I so highly recommend Poppy Paws for all your dog grooming. Our dog Louie absolutely loves grooming day. They are compassionate, caring and so talented. We've been using them for years for multiple dogs." 
  },
  { 
    name: 'Katherine G.', 
    location: 'Georgetown TX', 
    text: "William has been grooming our corgi for about 4 years now and does a fantastic job. From the bath to trim he hits the mark every time." 
  },
  { 
    name: 'Rachel G.', 
    location: 'Austin TX', 
    text: "My little baby looks fantastic! It's the best grooming she's had in forever. Plus she didn't have any anxiety after. She's an old girl and needed one-to-one care. The groomer was so kind and gentle." 
  },
  { 
    name: 'Ruben L.', 
    location: 'Austin TX', 
    text: "My mini Aussie Sniper looks absolutely amazing. Cris has a lot of experience — Sniper can be shy, but he was completely at ease the entire time." 
  }
];

export function TestimonialSlider() {
  // Duplicating the reviews to ensure an infinite seamless loop
  const duplicatedReviews = [...reviewsData, ...reviewsData, ...reviewsData];

  return (
    <div className="w-full relative overflow-hidden hide-scrollbar pb-8 group">
      {/* 
        Container that animates the marquee.
        We use w-max so it expands horizontally to fit all duplicated content.
        Translating by -50% ensures it loops perfectly if we have enough items.
      */}
      <div 
        className="flex w-max animate-marquee group-hover:[animation-play-state:paused] gap-6 pr-6"
      >
        {duplicatedReviews.map((review, idx) => (
          <div 
            key={idx} 
            className="flex-none w-[85vw] md:w-[350px] lg:w-[400px] bg-white rounded-3xl p-8 shadow-[var(--clay-card)] flex flex-col"
          >
            <div className="flex gap-4 items-center mb-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-pp-red-light font-bold text-pp-red flex-shrink-0">
                {review.name.charAt(0)}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-bold text-pp-dark text-base truncate">{review.name}</p>
                <span className="inline-block text-[10px] bg-pp-red-light text-pp-red rounded-full px-2 py-0.5 mt-1 font-bold">✓ Google Verified</span>
              </div>
            </div>
            <p className="text-pp-gold text-base mb-3">⭐⭐⭐⭐⭐</p>
            <p className="italic text-pp-body text-sm leading-relaxed mb-4">"{review.text}"</p>
            <p className="text-xs text-pp-muted mt-auto font-bold">{review.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
