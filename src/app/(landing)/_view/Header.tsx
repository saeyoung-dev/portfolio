'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className='fixed z-30 flex w-full justify-center'>
      <div className='flex w-full max-w-[1400px] items-center justify-between px-10 py-5 relative'>
        <div className='absolute inset-0 transition-colors duration-300 ease-out nav__bg' />
        <Link href='/' className='relative cursor-pointer'>
          {/*TODO Logo here*/} logo
        </Link>
        <nav className='flex gap-8 font-semibold items-center text-green-900'>
          <div className='relative cursor-pointer overflow-hidden group'>
            <Link href='/work' className='block relative'>
              <span className='nav-text block cursor-pointer relative transition-transform duration-300 group-hover:-translate-y-5'>
                Work
              </span>
              <span className='nav-text-overlay cursor-pointer absolute top-0 left-0 w-full text-center opacity-0 translate-y-5 transition-all duration-300 group-hover:opacity-50 group-hover:translate-y-0'>
                Work
              </span>
            </Link>
          </div>
          <div className='relative cursor-pointer overflow-hidden group'>
            <Link href='/about' className='block relative'>
              <span className='nav-text block cursor-pointer relative transition-transform duration-300 group-hover:-translate-y-5'>
                About
              </span>
              <span className='nav-text-overlay cursor-pointer absolute top-0 left-0 w-full text-center opacity-0 translate-y-5 transition-all duration-300 group-hover:opacity-50 group-hover:translate-y-0'>
                About
              </span>
            </Link>
          </div>
          <div className='relative px-4 py-3 rounded-full bg-green-900 text-white font-title-medium border border-transparent hover:bg-beige hover:text-green-900 hover:border-green-900 cursor-pointer transition-all duration-300'>
            <Link href='/' className='block'>
              Resume
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
