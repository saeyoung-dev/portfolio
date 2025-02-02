import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className=' w-full text-green-900 justify-center flex'>
      <div className='flex justify-between items-center container w-full max-w-[1400px] px-10 py-16'>
        <section className='flex items-end gap-4'>
          <Image
            src='/images/icon/footer-01.png'
            alt='PlaneIcon'
            width={140}
            height={74}
          />
          <div className='flex flex-col gap-1'>
            <h2 className='text-3xl font-medium'>{"Let's connect!"}</h2>
            <Link
              href={'mailto:saeyoung.dev@gmail.com'}
              className='text-base hover:opacity-50 transition-opacity'
            >
              saeyoung.dev@gmail.com
            </Link>
          </div>
        </section>
        <section className='flex gap-8 items-center'>
          <Link
            href='https://www.linkedin.com/in/saeyoungchoi'
            target='_blank'
            className='ttext-base font-medium hover:opacity-50 transition-opacity'
          >
            linkedin
          </Link>
          <Link
            href='https://github.com/saeyoung-dev'
            target='_blank'
            className='ttext-base font-medium hover:opacity-50 transition-opacity'
          >
            github
          </Link>
        </section>
      </div>
    </footer>
  );
}
