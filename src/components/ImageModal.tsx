'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

interface ImageModalProps {
  imageUrl: string;
  onClose: () => void;
  index: number;
}

const ImageModal = ({ imageUrl, onClose, index }: ImageModalProps) => {
  const [isShowing, setIsShowing] = useState(false);

  useEffect(() => {
    setIsShowing(true);
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleClose();
      }
    };

    document.addEventListener('keydown', handleEscapeKey);
    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, []);

  const handleClose = () => {
    setIsShowing(false);
    setTimeout(onClose, 300); // Wait for animation to complete
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-300 ease-in-out ${
        isShowing ? 'bg-black bg-opacity-50' : 'bg-black bg-opacity-0'
      }`}
      onClick={handleClose}
    >
      <div
        className={`relative transition-all duration-300 ease-in-out ${
          isShowing ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={`https://${imageUrl}`}
          alt={`Modal view ${index}`}
          width={1500}
          height={1500}
          className="object-contain max-h-[90vh] w-full max-w-[90vw] rounded-lg"
          priority
        />
      </div>
    </div>
  );
};

export default ImageModal;
