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
        className="h-auto w-full md:w-[calc(600px-5vw)] md:max-w-[500px] flex-shrink-0 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-[1.02]"
        onClick={() => setIsModalOpen(true)}
      >
        <Image
          className="rounded-lg object-cover"
          src={`https://${imageUrl}`}
          alt={`Gallery image ${index}`}
          width={1500}
          height={1500}
          sizes="(max-width: 1280px) 55vw, 33vw"
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
