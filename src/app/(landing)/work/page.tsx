'use client';

import { useEffect, useRef, useState } from 'react';
import { works, WORK_CATEGORIES } from '@/data/works';
import { Button } from '@/components/ui/button';
import { WorkCategory } from '@/types/work';
import WorkCard from './_view/WorkCard';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function WorkPage() {
  const [selectedCategory, setSelectedCategory] = useState<
    WorkCategory | 'All'
  >('All');

  const filteredWorks = Object.values(works).filter((work) =>
    selectedCategory === 'All' ? true : work.category === selectedCategory
  );

  const titleRef = useRef<HTMLHeadingElement>(null);
  const categoryButtonsRef = useRef<HTMLDivElement>(null);
  const workCardsRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const workCards = workCardsRef.current;
    const categoryButtons = categoryButtonsRef.current;
    const title = titleRef.current;
    if (!workCards || !categoryButtons || !title) return;

    const animation = gsap.fromTo(
      [title, categoryButtons, workCards],
      {
        opacity: 0,
        y: 40,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.4,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: title,
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
    <main className='flex w-full flex-col items-center pt-32 pb-16 gap-8'>
      <section className='w-full container sm:px-8 md:px-16 lg:px-32 text-green-900'>
        <h1
          ref={titleRef}
          className='text-6xl font-semibold tracking-tighter leading-tight'
        >
          Work
        </h1>
        <div
          ref={categoryButtonsRef}
          className='flex gap-2 mt-4 sm:mt-8 sm:mb-2'
        >
          <Button
            variant={selectedCategory === 'All' ? 'filtered' : 'outline'}
            className='cursor-pointer'
            onClick={() => setSelectedCategory('All')}
          >
            All
          </Button>
          {WORK_CATEGORIES.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'filtered' : 'outline'}
              className='cursor-pointer'
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>
      </section>
      <section
        ref={workCardsRef}
        className='w-full container sm:px-8 md:px-16 lg:px-32 text-green-900'
      >
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
          {filteredWorks.map((work) => (
            <WorkCard key={work.id} work={work} className='work-card' />
          ))}
        </div>
      </section>
    </main>
  );
}
