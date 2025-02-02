'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Link from 'next/link';
import Image from 'next/image';
import JobSummary from './_view/JobSummary';

export default function Home() {
  const sloganRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slogans = [
      '+ From concept to product',
      '+ Design roots, Dev vision',
      '+ User-first thinking, system-first execution',
    ];

    let currentIndex = 0;

    const animateSlogan = () => {
      if (!sloganRef.current) return;

      gsap.to(sloganRef.current, {
        y: -30,
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
          currentIndex = (currentIndex + 1) % slogans.length;
          if (sloganRef.current) {
            sloganRef.current.textContent = slogans[currentIndex];
          }
          gsap.fromTo(
            sloganRef.current,
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.5 }
          );
        },
      });
    };

    const interval = setInterval(animateSlogan, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className='flex w-full flex-col items-center'>
      {/* Hero Section */}
      <section className='pt-[5rem] pb-10 px-32 min-h-screen container flex items-center text-green-900 2xl:gap-10 2xl:flex-col 2xl:justify-evenly'>
        <div className='2xl:h-full 2xl:flex-1 2xl:flex 2xl:flex-col 2xl:justify-center'>
          <div className=' flex flex-col gap-8 justify-center'>
            <h1 className='text-[6.25rem] font-title'>Saeyoung Choi.</h1>
            <p className='text-3xl leading-[3.25rem] tracking-tight text-neutral-600'>
              <span className='flex items-center'>
                From creativity to development, building user-centric
                <Image
                  className='w-10 h-10'
                  src='/images/icon/intro-01.png'
                  alt='heroImage01'
                  width={40}
                  height={40}
                />
                experiences
              </span>
              <span className='flex items-center gap-1'>
                that balance aesthetics
                <Image
                  className='w-10 h-10'
                  src='/images/icon/intro-02.png'
                  alt='heroImage02'
                  width={40}
                  height={40}
                />
                , functionality
                <Image
                  className='w-10 h-10'
                  src='/images/icon/intro-03.png'
                  alt='heroImage03'
                  width={40}
                  height={40}
                />
                , and performance
                <Image
                  className='w-10 h-10'
                  src='/images/icon/intro-04.png'
                  alt='heroImage04'
                  width={40}
                  height={40}
                />
              </span>
            </p>
            <div className='h-[40px] mt-2 overflow-hidden'>
              <p ref={sloganRef} className='text-3xl font-semibold'>
                {'+ From concept to product.'}
              </p>
            </div>
          </div>
        </div>
        <JobSummary className='hidden 2xl:block 2xl:mt-auto' />
      </section>

      {/* Work Section */}
      <section className='px-32 pb-16 pt-32 w-full container text-green-900'>
        <h2 className='text-3xl font-semibold mb-10 flex items-center gap-1'>
          <Image
            src='/images/icon/work-01.png'
            alt='work'
            width={40}
            height={40}
          />
          Selected Work
        </h2>
        <div className='flex flex-col gap-10'>
          <Link href='/work/1' className='group flex flex-col gap-4'>
            <div className='cursor-pointer relative overflow-hidden rounded-3xl border border-green-900 '>
              <Image
                src='/images/work-1.png'
                alt='Work 2'
                width={0}
                height={448}
                className='w-full group-hover:scale-105 group-hover:opacity-90 transition-transform duration-500'
                sizes='100vw'
              />
              <p className='text-green-900 size-14 flex justify-center items-center rounded-full bg-white absolute text-3xl top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100'>
                ↗
              </p>
            </div>
            <div className='relative overflow-hidden group'>
              <p className='text-xl font-medium block cursor-pointer transition-transform duration-300 group-hover:-translate-y-10'>
                Bread & Butter {'↗'}
              </p>
              <p className='absolute top-0 left-0 text-xl font-medium cursor-pointer w-full opacity-0  text-neutral-600 translate-y-10 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0'>
                Culinary Book Online Shop {'↗'}
              </p>
            </div>
          </Link>
        </div>
      </section>
      <JobSummary className='2xl:hidden' />
    </main>
  );
}
