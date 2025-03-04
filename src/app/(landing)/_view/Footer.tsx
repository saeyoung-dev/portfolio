'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const footer = footerRef.current;
    if (!footer) return;

    const footerAnimation = gsap.fromTo(
      footer,
      {
        opacity: 0,
        y: 40,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.4,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: footer,
          start: 'top bottom-=100',
          once: true,
        },
      }
    );

    return () => {
      footerAnimation.scrollTrigger?.kill();
    };
  }, []);

  return (
    <footer
      ref={footerRef}
      className="w-full text-green-900 justify-center flex opacity-0"
    >
      <div className="flex justify-between items-end container w-full max-w-[1400px] px-10 py-16">
        <section className="flex items-end gap-4">
          <Image
            src="/images/icon/footer-01.png"
            alt="Footer Icon"
            width={0}
            height={0}
            sizes="100vw"
            className="w-auto h-14"
            priority
          />
          <div className="flex flex-col gap-1">
            <h2 className="text-3xl font-medium">{"Let's connect!"}</h2>
            <Link
              href={'mailto:saeyoung.dev@gmail.com'}
              className="text-base hover:opacity-50 transition-opacity"
            >
              saeyoung.dev@gmail.com
            </Link>
          </div>
        </section>
        <section className="flex gap-8 items-center pb-4">
          <Link
            href="https://github.com/saeyoung-dev"
            target="_blank"
            className="ttext-base font-medium hover:opacity-50 transition-opacity"
          >
            github
          </Link>
          <Link
            href="https://www.linkedin.com/in/saeyoungchoi"
            target="_blank"
            className="ttext-base font-medium hover:opacity-50 transition-opacity"
          >
            linkedin
          </Link>
        </section>
      </div>
    </footer>
  );
}
