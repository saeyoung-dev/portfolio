'use client';

import Image from 'next/image';

interface Props {
  variant: 'mobile' | 'desktop';
}

export default function HeadingSection({ variant }: Props) {
  if (variant === 'mobile') {
    return (
      <div className='flex flex-wrap items-center justify-center text-center lg:hidden'>
        <span className='mr-1'>From creativity to development,</span>
        <span className='mr-1'>building</span>
        <span className='mr-1'>user-centric</span>
        <Image
          className='cursor-pointer mr-1 w-8 h-8 hover:scale-110 transition-transform duration-300 inline-flex'
          src='/images/icon/intro-01.png'
          alt='heroImage01'
          width={32}
          height={32}
        />
        <span className='mr-1'>experiences</span>
        <span className='mr-1'>that</span>
        <span className='mr-1'>balance</span>
        <span className='mr-1'>aesthetics</span>
        <Image
          className='cursor-pointer mr-1 w-8 h-8 hover:rotate-12 transition-transform duration-300 inline-flex'
          src='/images/icon/intro-02.png'
          alt='heroImage02'
          width={32}
          height={32}
        />
        <span className='mr-1'>functionality</span>
        <Image
          className='cursor-pointer mr-1 w-8 h-8 hover:rotate-90 transition-transform duration-200 ease-in-out inline-flex'
          src='/images/icon/intro-03.png'
          alt='heroImage03'
          width={32}
          height={32}
        />
        <span className='mr-1'>and performance</span>
        <Image
          className='cursor-pointer w-8 h-8 hover:translate-y-[-10px] hover:translate-x-[10px] hover:rotate-45 transition-all duration-200 ease-in-out inline-flex'
          src='/images/icon/intro-04.png'
          alt='heroImage04'
          width={32}
          height={32}
        />
      </div>
    );
  }

  return (
    <div className='hidden lg:flex lg:flex-col gap-2'>
      <span className='flex flex-wrap items-center gap-2'>
        From creativity to development, building user-centric
        <Image
          className='cursor-pointer w-10 h-10 2xl:w-12 2xl:h-12 hover:scale-110 transition-transform duration-300 inline-flex'
          src='/images/icon/intro-01.png'
          alt='heroImage01'
          width={40}
          height={40}
        />
        experiences
      </span>
      <span className='flex flex-wrap items-center gap-2'>
        that balance aesthetics
        <Image
          className='cursor-pointer w-10 h-10 2xl:w-12 2xl:h-12 hover:rotate-12 transition-transform duration-300 inline-flex'
          src='/images/icon/intro-02.png'
          alt='heroImage02'
          width={40}
          height={40}
        />
        , functionality
        <Image
          className='cursor-pointer w-10 h-10 2xl:w-12 2xl:h-12 hover:rotate-90 transition-transform duration-200 ease-in-out inline-flex'
          src='/images/icon/intro-03.png'
          alt='heroImage03'
          width={40}
          height={40}
        />
        and performance
        <Image
          className='cursor-pointer w-10 h-10 2xl:w-12 2xl:h-12 hover:translate-y-[-10px] hover:translate-x-[10px] hover:rotate-45 transition-all duration-200 ease-in-out inline-flex'
          src='/images/icon/intro-04.png'
          alt='heroImage04'
          width={40}
          height={40}
        />
      </span>
    </div>
  );
}
