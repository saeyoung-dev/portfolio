'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className='fixed z-30 flex w-full justify-center'>
      <div className='w-full flex relative justify-center items-center'>
        <div className='absolute inset-0 transition-colors duration-300 ease-out nav__bg' />
        <div className='flex w-full max-w-[1400px] items-center justify-between px-10 py-5 relative'>
          <Link href='/' className='relative cursor-pointer'>
            logo
          </Link>
          <nav>
            <ul className='flex gap-8 font-semibold items-center text-green-900'>
              <li className='relative cursor-pointer'>
                <Link href={'/work'} className='block'>
                  Work
                </Link>
              </li>
              <li className='relative cursor-pointer'>
                <Link href={'/about'} className='block'>
                  About
                </Link>
              </li>
              <li className='relative px-4 py-3 rounded-full bg-green-900 box-border text-white font-title-medium hover:bg-beige hover:text-green-900 hover:border-green-900 hover:border cursor-pointer transition-all duration-300'>
                <Link href='/' className='block'>
                  Resume
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
