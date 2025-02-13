'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/hooks/useLanguage';
import { cn } from '@/lib/utils';

export default function Header() {
  const pathname = usePathname();
  const isWorkDetail = pathname.includes('/work/') && pathname !== '/work';
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { language, toggleLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={cn(
        'fixed z-30 flex w-full justify-center transform transition-transform duration-300',
        !isVisible && '-translate-y-full'
      )}
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
          <Link href="/" className="relative">
            <Image
              src="/images/logo/header-logo.png"
              alt="logo"
              width={100}
              height={100}
              className="w-10 h-10"
            />
          </Link>
          <nav className="flex gap-8 font-semibold items-center text-green-900">
            <button
              onClick={toggleLanguage}
              className="px-2 py-1 rounded text-sm font-medium hover:bg-green-900/10"
            >
              {language === 'ko' ? 'EN' : 'KO'}
            </button>
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
