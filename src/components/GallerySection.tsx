'use client';

import { useRef, useState, useEffect } from 'react';
import GalleryImage from './GalleryImage';

interface GallerySectionProps {
  images: string[];
  title: string;
  fontClassName: string;
}

export default function GallerySection({
  images,
  title,
  fontClassName,
}: GallerySectionProps) {
  const galleryRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);

  const updateArrowVisibility = () => {
    if (galleryRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = galleryRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth);
    }
  };

  useEffect(() => {
    const gallery = galleryRef.current;
    if (gallery) {
      updateArrowVisibility();
      gallery.addEventListener('scroll', updateArrowVisibility);
      window.addEventListener('resize', updateArrowVisibility);
    }

    return () => {
      if (gallery) {
        gallery.removeEventListener('scroll', updateArrowVisibility);
        window.removeEventListener('resize', updateArrowVisibility);
      }
    };
  }, []);

  const scrollGallery = (direction: 'left' | 'right') => {
    if (galleryRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      galleryRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <>
      <p className={`${fontClassName} col-span-4 text-2xl`}>{title}</p>
      <div className="col-span-4 relative">
        <div className="overflow-x-auto scrollbar-hide" ref={galleryRef}>
          <div className="flex flex-row gap-10">
            {images.map((image: string, index: number) => (
              <GalleryImage key={index} imageUrl={image} index={index} />
            ))}
          </div>
        </div>
        {showLeftArrow && (
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 w-12 py-8 bg-black/50 text-white hover:bg-black/70 transition-all duration-300 flex items-center justify-center"
            onClick={() => scrollGallery('left')}
          >
            <span className="text-2xl font-light">‹</span>
          </button>
        )}
        {showRightArrow && (
          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 w-12 py-8 bg-black/50 text-white hover:bg-black/70 transition-all duration-300 flex items-center justify-center"
            onClick={() => scrollGallery('right')}
          >
            <span className="text-2xl font-light">›</span>
          </button>
        )}
      </div>
    </>
  );
}
