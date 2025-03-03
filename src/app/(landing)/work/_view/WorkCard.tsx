import Image from 'next/image';
import Link from 'next/link';
import { useLocale } from '@/hooks/useLocale';
import { Work } from '@/types/work';

interface Props {
  work: Work;
}

export default function WorkCard({ work }: Props) {
  const { language } = useLocale();

  return (
    <Link href={`/work/${work.id}`} className="block">
      <div className="flex flex-col gap-4 group">
        <div className="aspect-video rounded-2xl overflow-hidden">
          <Image
            src={work.mainImage}
            alt={work.title}
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative flex flex-col gap-2 overflow-hidden group">
          <p className="pl-4 text-xl font-medium block transition-transform duration-300 group-hover:-translate-y-10">
            {work.title} {'↗'}
          </p>
          <p className="pl-4 absolute top-0 left-0 text-xl font-medium w-full opacity-0  text-neutral-600 translate-y-10 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
            {work.subtitle[language]} {'↗'}
          </p>
        </div>
      </div>
    </Link>
  );
}
