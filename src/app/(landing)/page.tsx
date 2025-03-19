'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Link from 'next/link';
import Image from 'next/image';
import { useLocale } from '@/hooks/useLocale';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { works } from '@/data/works';
import JobSummary from './_view/JobSummary';
import HeadingSection from './_view/HeadingSection';
import HeroSection from './_view/HeroSection';
import { ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const { language } = useLocale();
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const worksSectionRef = useRef<HTMLElement>(null);
  const worksHeaderRef = useRef<HTMLHeadingElement>(null);
  const worksContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.2 });

    tl.fromTo(
      titleRef.current,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
      }
    ).fromTo(
      subtitleRef.current,
      {
        opacity: 0,
        y: 40,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power2.out',
      },
      '-=0.4'
    );

    const largeScreenHeroAnimation = gsap.fromTo(
      '.hero-content-large',
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
        delay: 0.6,
      }
    );

    const smallScreenHeroAnimation = gsap.fromTo(
      '.hero-content-small',
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
          trigger: '.hero-content-small',
          start: 'top center+=100',
          toggleActions: 'play none none reverse',
        },
      }
    );

    const worksSection = worksSectionRef.current;
    const worksHeader = worksHeaderRef.current;
    const worksItems = worksContainerRef.current?.children;

    if (worksSection && worksHeader && worksItems) {
      gsap.fromTo(
        worksHeader,
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: worksSection,
            start: 'top center+=100',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        worksItems,
        {
          opacity: 0,
          y: 60,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: worksSection,
            start: 'top center+=100',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }

    return () => {
      tl.kill();
      largeScreenHeroAnimation.kill();
      smallScreenHeroAnimation.scrollTrigger?.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <main className='flex w-full flex-col items-center'>
      <section className='md:min-h-screen w-full container flex flex-col items-center justify-center px-6 pt-20 pb-10 sm:px-8 md:px-16 lg:px-32 sm:pt-24 md:pt-32 text-green-900 2xl:gap-10 2xl:flex-col 2xl:justify-evenly'>
        <div className='sm:py-0 py-24 2xl:h-full 2xl:flex-1 2xl:flex 2xl:flex-col 2xl:justify-center 2xl:px-32 w-full'>
          <div className='flex flex-col gap-6 items-center justify-center lg:items-start lg:gap-8 2xl:px-12'>
            <h1
              ref={titleRef}
              className='text-5xl md:text-6xl lg:text-[6.25rem] 2xl:text-[7.5rem] 2xl:mb-4 font-title break-keep'
            >
              Saeyoung Choi.
            </h1>
            <div
              ref={subtitleRef}
              className='text-2xl sm:text-3xl leading-relaxed sm:leading-relaxed md:leading-[3.25rem] tracking-tight text-neutral-600'
            >
              <HeadingSection variant='mobile' />
              <HeadingSection variant='desktop' />
            </div>
            <HeroSection />
          </div>
        </div>
        <JobSummary className='hidden 2xl:block 2xl:mt-auto hero-content-large' />
      </section>

      {/* Work Section */}
      <section
        ref={worksSectionRef}
        className='w-full container px-6 sm:px-8 md:px-16 lg:px-32 pb-16 pt-16 sm:pt-24 md:pt-32 text-green-900'
      >
        <h2
          ref={worksHeaderRef}
          className='text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8 md:mb-10 flex items-center gap-1'
        >
          <Image
            src='/images/icon/work-01.png'
            alt='work'
            width={40}
            height={40}
            className='w-8 h-8 sm:w-10 sm:h-10'
          />
          Selected Work
        </h2>
        <div
          ref={worksContainerRef}
          className='flex flex-col gap-6 sm:gap-8 md:gap-10'
        >
          <Link
            href='/work/veganro'
            className='group flex flex-col gap-3 sm:gap-4'
          >
            <div className='relative overflow-hidden rounded-2xl sm:rounded-3xl border border-green-900/10'>
              <Image
                src='/images/work/veganro/main.png'
                alt='Veganro'
                width={0}
                height={448}
                className='w-full group-hover:scale-105 group-hover:brightness-95 transition-transform duration-500'
                sizes='100vw'
              />
              <p className='text-green-900 size-10 sm:size-12 md:size-14 flex justify-center items-center shadow rounded-full bg-beige absolute text-2xl sm:text-3xl top-4 sm:top-6 right-4 sm:right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100'>
                <ArrowUpRight className='group-hover:rotate-45 duration-300' />
              </p>
            </div>
            <div className='relative overflow-hidden group'>
              <p className='text-xl 2xl:text-2xl font-medium block transition-transform duration-300 group-hover:-translate-y-10'>
                {
                  Object.values(works).find((work) => work.id === 'veganro')
                    ?.title
                }{' '}
                {'↗'}
              </p>
              <p className='text-xl 2xl:text-2xl absolute top-0 left-0 font-medium w-full opacity-0 text-neutral-600 translate-y-10 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0'>
                {
                  Object.values(works).find((work) => work.id === 'veganro')
                    ?.subtitle[language]
                }{' '}
                {'↗'}
              </p>
            </div>
          </Link>
          <Link
            href='/work/bread-and-butter'
            className='group flex flex-col gap-4'
          >
            <div className='relative overflow-hidden rounded-3xl border border-green-900/10'>
              <Image
                src='/images/work/bab/main.png'
                alt='Bread & Butter'
                width={0}
                height={448}
                className='w-full group-hover:scale-105 group-hover:brightness-95 transition-transform duration-500'
                sizes='100vw'
              />
              <p className='text-green-900 size-14 flex justify-center items-center shadow rounded-full bg-beige absolute text-3xl top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100'>
                <ArrowUpRight className='group-hover:rotate-45 duration-300' />
              </p>
            </div>
            <div className='relative overflow-hidden group'>
              <p className='text-xl 2xl:text-2xl font-medium block transition-transform duration-300 group-hover:-translate-y-10'>
                {
                  Object.values(works).find(
                    (work) => work.id === 'bread-and-butter'
                  )?.title
                }{' '}
                {'↗'}
              </p>
              <p className='text-xl 2xl:text-2xl absolute top-0 left-0 font-medium w-full opacity-0d text-neutral-600 translate-y-10 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0'>
                {
                  Object.values(works).find(
                    (work) => work.id === 'bread-and-butter'
                  )?.subtitle[language]
                }{' '}
                {'↗'}
              </p>
            </div>
          </Link>
        </div>
      </section>
      <JobSummary className='2xl:hidden hero-content-small' />
    </main>
  );
}
