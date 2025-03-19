'use client';

import { useCallback, useState } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';

interface Props {
  src: string;
  alt: string;
  className?: string;
}

export function ImageViewer({ src, alt, className }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = useCallback(() => {
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  }, []);

  const handleClose = useCallback(() => {
    setIsOpen(false);
    document.body.style.overflow = 'unset';
  }, []);

  return (
    <>
      <div
        className="relative w-full h-full cursor-zoom-in"
        onClick={handleOpen}
      >
        <Image
          src={src}
          alt={alt}
          width={0}
          height={0}
          sizes="100vw"
          className={className}
          priority
        />
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-[9999] w-screen h-screen top-0 left-0 bg-black/90 flex items-center justify-center"
          onClick={handleClose}
        >
          <button
            className="fixed top-8 right-8 text-white hover:text-neutral-300 z-[9999]"
            onClick={handleClose}
          >
            <X className="w-8 h-8" />
          </button>
          <div className="w-screen h-screen flex items-center justify-center p-8">
            <Image
              src={src}
              alt={alt}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
          </div>
        </div>
      )}
    </>
  );
}
