'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { navigation, NavigationItem } from '@/data/navigation';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!mounted) {
    return null;
  }

  return (
    <div className='md:hidden'>
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='flex flex-col justify-center items-center w-8 h-8 gap-1.5 z-[999]'
        aria-label='Open Menu'
      >
        <span className='w-6 h-0.5 bg-green-900' />
        <span className='w-6 h-0.5 bg-green-900' />
        <span className='w-6 h-0.5 bg-green-900' />
      </button>

      {/* Mobile Menu */}
      <div
        className={cn(
          'fixed inset-0 bg-white/90 z-[998] transition-transform duration-300',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className='relative z-[999] flex flex-col h-screen px-6 py-24 bg-white/80 backdrop-blur-sm'>
          <button
            onClick={() => setIsOpen(false)}
            className='absolute top-6 right-4 text-green-900 hover:text-green-900/80 transition-colors'
            aria-label='Close Menu'
          >
            <span className='size-10 flex items-center justify-center text-4xl font-light'>
              ×
            </span>
          </button>
          <nav className='flex flex-col gap-8'>
            {navigation.map((item: NavigationItem) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  'text-3xl font-medium transition-colors text-center',
                  pathname === item.href
                    ? 'text-green-900'
                    : 'text-green-900/60 hover:text-green-900'
                )}
              >
                {item.name.en}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}
