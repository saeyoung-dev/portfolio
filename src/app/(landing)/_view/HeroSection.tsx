'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import gsap from 'gsap';

export default function HeroSection() {
  const sloganRef = useRef<HTMLParagraphElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | undefined>(undefined);
  const currentIndexRef = useRef(0);
  const slogans = [
    '+ From concept to product',
    '+ Design roots, Dev vision',
    '+ User-first thinking, system-first execution',
  ];

  const animateSlogan = useCallback(() => {
    if (!sloganRef.current) return;

    gsap.to(sloganRef.current, {
      y: -30,
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        currentIndexRef.current =
          (currentIndexRef.current + 1) % slogans.length;
        if (sloganRef.current) {
          sloganRef.current.textContent = slogans[currentIndexRef.current];
        }
        gsap.fromTo(
          sloganRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5 }
        );
      },
    });
  }, []);

  useEffect(() => {
    gsap.fromTo(
      sloganRef.current,
      {
        y: 60,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        delay: 0.9,
        duration: 0.6,
        ease: 'power3.out',
        onComplete: () => {
          if (!isHovered) {
            intervalRef.current = setInterval(animateSlogan, 3000);
          }
        },
      }
    );

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isHovered, animateSlogan]);

  return (
    <div
      className="mt-2 h-10 overflow-hidden cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        animateSlogan();
      }}
    >
      <p className="text-3xl font-semibold" ref={sloganRef}>
        + From concept to product
      </p>
    </div>
  );
}
