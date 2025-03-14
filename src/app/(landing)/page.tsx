'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Link from 'next/link';
import Image from 'next/image';
import { useLocale } from '@/hooks/useLocale';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { works } from '@/data/works';
import JobSummary from './_view/JobSummary';
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

    const heroAnimation = gsap.fromTo(
      '.hero-content',
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
      }
    );

    const worksAnimation = gsap.fromTo(
      '.works-item',
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
          trigger: '.works-section',
          start: 'top center+=100',
          once: true,
        },
      }
    );

    return () => {
      heroAnimation.kill();
      worksAnimation.scrollTrigger?.kill();
    };
  }, []);

  return (
    <main className="flex w-full flex-col items-center">
      <section className="pt-[5rem] pb-10 px-32 min-h-screen container flex items-center text-green-900 2xl:gap-10 2xl:flex-col 2xl:justify-evenly">
        <div className="2xl:h-full 2xl:flex-1 2xl:flex 2xl:flex-col 2xl:justify-center">
          <div className="flex flex-col gap-8 justify-center">
            <h1 ref={titleRef} className="text-[6.25rem] font-title">
              Saeyoung Choi.
            </h1>
            <p
              ref={subtitleRef}
              className="text-3xl leading-[3.25rem] tracking-tight text-neutral-600"
            >
              <span className="flex items-center">
                From creativity to development, building user-centric
                <Image
                  className="cursor-pointer w-10 h-10 hover:scale-110 transition-transform duration-300"
                  src="/images/icon/intro-01.png"
                  alt="heroImage01"
                  width={40}
                  height={40}
                />
                experiences
              </span>
              <span className="flex items-center gap-1">
                that balance aesthetics
                <Image
                  className="cursor-pointer w-10 h-10 hover:rotate-12 transition-transform duration-300"
                  src="/images/icon/intro-02.png"
                  alt="heroImage02"
                  width={40}
                  height={40}
                />
                , functionality
                <Image
                  className="cursor-pointer w-10 h-10 hover:rotate-90 transition-transform duration-200 ease-in-out"
                  src="/images/icon/intro-03.png"
                  alt="heroImage03"
                  width={40}
                  height={40}
                />
                , and performance
                <Image
                  className="cursor-pointer w-10 h-10 hover:translate-y-[-10px] hover:translate-x-[10px] hover:rotate-45 transition-all duration-200 ease-in-out"
                  src="/images/icon/intro-04.png"
                  alt="heroImage04"
                  width={40}
                  height={40}
                />
              </span>
            </p>
            <HeroSection />
          </div>
        </div>
        <JobSummary className="hidden 2xl:block 2xl:mt-auto" />
      </section>

      {/* Work Section */}
      <section
        ref={worksSectionRef}
        className="px-32 pb-16 pt-32 w-full container text-green-900"
      >
        <h2
          ref={worksHeaderRef}
          className="text-3xl font-semibold mb-10 flex items-center gap-1"
        >
          <Image
            src="/images/icon/work-01.png"
            alt="work"
            width={40}
            height={40}
          />
          Selected Work
        </h2>
        <div ref={worksContainerRef} className="flex flex-col gap-10">
          <Link href="/work/veganro" className="group flex flex-col gap-4">
            <div className="relative overflow-hidden rounded-3xl border border-green-900/10">
              <Image
                src="/images/work/veganro/main.png"
                alt="Veganro"
                width={0}
                height={448}
                className="w-full group-hover:scale-105 group-hover:brightness-95 transition-transform duration-500"
                sizes="100vw"
              />
              <p className="text-green-900 size-14 flex justify-center items-center shadow rounded-full bg-beige absolute text-3xl top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                <ArrowUpRight className="group-hover:rotate-45 duration-300" />
              </p>
            </div>
            <div className="relative overflow-hidden group">
              <p className="text-xl font-medium block transition-transform duration-300 group-hover:-translate-y-10">
                {
                  Object.values(works).find((work) => work.id === 'veganro')
                    ?.title
                }{' '}
                {'↗'}
              </p>
              <p className="absolute top-0 left-0 text-xl font-medium w-full opacity-0 text-neutral-600 translate-y-10 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                {
                  Object.values(works).find((work) => work.id === 'veganro')
                    ?.subtitle[language]
                }{' '}
                {'↗'}
              </p>
            </div>
          </Link>
          <Link
            href="/work/bread-and-butter"
            className="group flex flex-col gap-4"
          >
            <div className="relative overflow-hidden rounded-3xl border border-green-900/10">
              <Image
                src="/images/work/bab/main.png"
                alt="Bread & Butter"
                width={0}
                height={448}
                className="w-full group-hover:scale-105 group-hover:brightness-95 transition-transform duration-500"
                sizes="100vw"
              />
              <p className="text-green-900 size-14 flex justify-center items-center shadow rounded-full bg-beige absolute text-3xl top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                <ArrowUpRight className="group-hover:rotate-45 duration-300" />
              </p>
            </div>
            <div className="relative overflow-hidden group">
              <p className="text-xl font-medium block  transition-transform duration-300 group-hover:-translate-y-10">
                {
                  Object.values(works).find(
                    (work) => work.id === 'bread-and-butter'
                  )?.title
                }{' '}
                {'↗'}
              </p>
              <p className="absolute top-0 left-0 text-xl font-medium  w-full opacity-0  text-neutral-600 translate-y-10 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
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
      <JobSummary className="2xl:hidden" />
    </main>
  );
}
