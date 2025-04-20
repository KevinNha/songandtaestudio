'use client';

import Image from 'next/image';
import { useState } from 'react';
import ImageModal from './ImageModal';

interface GalleryImageProps {
  imageUrl: string;
  index: number;
}

export default function GalleryImage({ imageUrl, index }: GalleryImageProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        className="w-full md:w-[calc(450px-5vw)] md:max-w-[350px] flex-shrink-0 cursor-pointer overflow-hidden"
        onClick={() => setIsModalOpen(true)}
      >
        <Image
          className="rounded-lg object-cover hover:scale-[1.35] transition-transform duration-[850ms] ease-in-out"
          src={`https://${imageUrl}`}
          alt={`Gallery image ${index}`}
          width={900}
          height={900}
          sizes="(max-width: 1280px) 40vw, 22vw"
        />
      </div>

      {isModalOpen && (
        <ImageModal
          imageUrl={imageUrl}
          onClose={() => setIsModalOpen(false)}
          index={index}
        />
      )}
    </>
  );
}
