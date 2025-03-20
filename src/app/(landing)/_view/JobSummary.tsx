'use client';

import { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { aboutContent } from '@/data/about';
import { useLocale } from '@/hooks/useLocale';
import { renderText } from '@/utils/renderText';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function JobSummary({ className }: { className?: string }) {
  const { hero } = aboutContent;
  const { language } = useLocale();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const animation = gsap.fromTo(
      section.querySelectorAll('.job-summary-content'),
      {
        opacity: 0,
        y: 40,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top center+=100',
          once: true,
        },
      }
    );

    return () => {
      animation.scrollTrigger?.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={cn(
        'px-6 lg:px-32 pb-16 w-full container text-green-900',
        className
      )}
    >
      <div className='border-t-2 border-green-900 pt-16' />
      <div className='flex flex-col md:flex-row gap-12 md:gap-16 lg:gap-32'>
        <div className='flex-1 job-summary-content'>
          <h2 className='text-md md:text-lg font-semibold mb-4'>CURRENTLY:</h2>
          <p className='text-md md:text-lg text-pretty break-keep font-medium leading-relaxed text-green-900/80'>
            {renderText(hero.status.current[language])}
          </p>
        </div>
        <div className='flex-1 job-summary-content'>
          <h2 className='text-md md:text-lg font-semibold mb-4'>PREVIOUSLY:</h2>
          <p className='text-md md:text-lg text-pretty break-keep font-medium leading-relaxed text-green-900/80'>
            {renderText(hero.status.previous[language])}
          </p>
        </div>
      </div>
    </section>
  );
}
