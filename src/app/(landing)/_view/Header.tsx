'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { useLocale } from '@/hooks/useLocale';
import { Switch } from '@/components/ui/switch';
import { cn } from '@/lib/utils';
import gsap from 'gsap';

export default function Header() {
  const pathname = usePathname();
  const isWorkDetail = pathname.includes('/work/') && pathname !== '/work';
  const { language, setLanguage } = useLocale();
  const headerRef = useRef<HTMLElement>(null);
  const lastScrollY = useRef(0);
  const tl = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    tl.current = gsap.timeline({ paused: true }).to(header, {
      y: '-100%',
      duration: 0.2,
      ease: 'power3.inOut',
    });

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isScrollingUp = currentScrollY < lastScrollY.current;

      if (isScrollingUp) {
        tl.current?.reverse();
      } else if (currentScrollY > 100) {
        tl.current?.timeScale(1.5).play();
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 z-30 flex w-full justify-center transition-transform duration-200"
    >
      <div className="w-full relative flex items-center justify-center">
        <div className="absolute w-full inset-0 transition-colors duration-300 ease-out">
          <div
            className={cn(
              'absolute inset-0 -top-2 -z-10 backdrop-blur-md bg-beige/90 mask-gradient-60',
              isWorkDetail && 'bg-beige/50 mask-gradient-100'
            )}
          />
        </div>
        <div className="flex w-full max-w-[1400px] items-center justify-between px-10 py-5 relative">
          <Link
            href="/"
            className="relative flex group items-center hover:scale-110 transition-transform duration-200 ease-in h-14 w-14 bg-[url('/images/icon/main-01.png')] bg-cover bg-center"
          >
            <Image
              src="/images/icon/main-02.png"
              alt="main-logo"
              width={0}
              height={0}
              sizes="100vw"
              className="w-auto h-14 group-hover:rotate-180 transition-transform duration-300 ease-out"
              priority
            />
          </Link>
          <nav className="flex gap-8 font-semibold items-center text-green-900">
            <div className="flex items-center gap-4">
              <Switch
                checked={language === 'en'}
                onCheckedChange={(checked) =>
                  setLanguage(checked ? 'en' : 'ko')
                }
              />
            </div>
            <div className="relative overflow-hidden group">
              <Link href="/work" className="block relative">
                <span className="nav-text block relative transition-transform duration-300 group-hover:-translate-y-5">
                  Work
                </span>
                <span className="nav-text-overlay absolute top-0 left-0 w-full text-center opacity-0 translate-y-5 transition-all duration-300 group-hover:opacity-50 group-hover:translate-y-0">
                  Work
                </span>
              </Link>
            </div>
            <div className="relative overflow-hidden group">
              <Link href="/about" className="block relative">
                <span className="nav-text block relative transition-transform duration-300 group-hover:-translate-y-5">
                  About
                </span>
                <span className="nav-text-overlay absolute top-0 left-0 w-full text-center opacity-0 translate-y-5 transition-all duration-300 group-hover:opacity-50 group-hover:translate-y-0">
                  About
                </span>
              </Link>
            </div>
            <div className="relative px-4 py-3 rounded-full bg-green-900 text-beige font-title-medium border border-transparent hover:bg-beige hover:text-green-900 hover:border-green-900 transition-all duration-300">
              <Link href="/" className="block">
                Resume
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
