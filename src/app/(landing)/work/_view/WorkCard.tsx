import { Work } from '@/data/works';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  work: Work;
}

export default function WorkCard({ work }: Props) {
  return (
    <Link href={`/work/${work.id}`} className='block'>
      <div className='flex flex-col gap-4'>
        <div className='aspect-video rounded-3xl border border-green-900 overflow-hidden'>
          <Image
            src={work.mainImage}
            alt={work.title}
            width={0}
            height={0}
            sizes='100vw'
            className='w-full h-full object-cover'
          />
        </div>
        <div className='flex flex-col gap-2'>
          <h2 className='text-2xl font-medium'>{work.title}</h2>
          <p className='text-green-900/70'>{work.subtitle}</p>
        </div>
      </div>
    </Link>
  );
}
