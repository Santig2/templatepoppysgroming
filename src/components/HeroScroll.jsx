'use client';

import { useEffect, useRef, useState } from 'react';

export function HeroScroll({ children }) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [images, setImages] = useState([]);
  const frameCount = 200;

  // Detect if we are on a mobile/responsive screen
  const isMobile = () => typeof window !== 'undefined' && window.innerWidth < 768;

  // Preload images based on screen size
  useEffect(() => {
    const framesFolder = isMobile() ? '/frames-for-responsive' : '/frames';

    const loadedImages = [];
    let loadedCount = 0;

    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      // Format the number to be 3 digits with leading zeros
      const frameNum = i.toString().padStart(3, '0');
      img.src = `${framesFolder}/ezgif-frame-${frameNum}.jpg`;
      
      img.onload = () => {
        loadedCount++;
        if (loadedCount === frameCount) {
          // All images loaded, initial draw
          const canvas = canvasRef.current;
          if (canvas) {
            const ctx = canvas.getContext('2d');
            drawFrame(ctx, loadedImages[0]);
          }
        }
      };
      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  // Use requestAnimationFrame for smooth drawing
  const drawFrame = (ctx, image) => {
    if (!ctx || !image) return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Use actual dimensions for Retina support, but scale drawing
    const width = canvas.width;
    const height = canvas.height;
    
    // Calculate aspect ratios
    const imageAspect = image.width / image.height;
    const canvasAspect = width / height;
    
    let drawWidth = width;
    let drawHeight = height;
    let offsetX = 0;
    let offsetY = 0;

    if (imageAspect > canvasAspect) {
      // Image is wider than canvas relative to height
      drawHeight = height;
      drawWidth = height * imageAspect;
      offsetX = (width - drawWidth) / 2;
    } else {
      // Image is taller than canvas relative to width
      drawWidth = width;
      drawHeight = width / imageAspect;
      offsetY = (height - drawHeight) / 2;
    }

    ctx.clearRect(0, 0, width, height);
    ctx.drawImage(image, offsetX, offsetY, drawWidth, drawHeight);
  };

  // Resize canvas handler
  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      
      // Use window dimensions for accurate full-screen sizing on mobile
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // Request redraw
      if (images.length > 0) {
        window.dispatchEvent(new Event('scroll'));
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial size
    
    return () => window.removeEventListener('resize', handleResize);
  }, [images]);

  // Scroll handler
  useEffect(() => {
    if (images.length === 0) return;

    let requestRef;

    const handleScroll = () => {
      if (!containerRef.current || !canvasRef.current) return;

      const { top, height } = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate scroll progress (0 to 1) 
      // when top reaches 0, progress starts.
      // when bottom reaches windowHeight, progress is 1.
      let progress = 0;
      
      if (top > 0) {
        progress = 0;
      } else if (top <= -(height - windowHeight)) {
        progress = 1;
      } else {
        progress = -top / (height - windowHeight);
      }

      // Map progress to frame index (0 to 199)
      const frameIndex = Math.min(
        frameCount - 1,
        Math.floor(progress * frameCount)
      );

      // requestAnimationFrame ensures we don't draw more often than the screen refreshes
      cancelAnimationFrame(requestRef);
      requestRef = requestAnimationFrame(() => {
        const ctx = canvasRef.current.getContext('2d');
        drawFrame(ctx, images[frameIndex]);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Trigger initial frame calculation
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(requestRef);
    };
  }, [images]);

  return (
    <div ref={containerRef} className="relative w-full" style={{ height: '400vh' }}>
      <div className="sticky top-0 w-full h-screen overflow-hidden bg-white">
        <canvas 
          ref={canvasRef} 
          className="w-full h-full block" 
        />
        <div className="absolute inset-0 z-10">
          {children}
        </div>
      </div>
    </div>
  );
}
