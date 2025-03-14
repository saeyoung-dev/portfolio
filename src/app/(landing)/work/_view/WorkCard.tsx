import Image from 'next/image';
import Link from 'next/link';
import { useLocale } from '@/hooks/useLocale';
import { Work } from '@/types/work';
import { cn } from '@/lib/utils';
interface Props {
  work: Work;
  className?: string;
}

export default function WorkCard({ work, className }: Props) {
  const { language } = useLocale();

  return (
    <Link href={`/work/${work.id}`} className={cn('block', className)}>
      <div className="flex flex-col gap-4 group">
        <div className="aspect-video rounded-2xl overflow-hidden relative">
          <Image
            src={work.mainImage}
            alt={work.title}
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-full object-cover group-hover:scale-105 group-hover:brightness-95 transition-transform duration-500"
          />
        </div>
        <div className="relative flex flex-col gap-2 overflow-hidden group">
          <p className="pl-3 text-xl font-medium block transition-transform duration-300 group-hover:-translate-y-10">
            {work.title} {'↗'}
          </p>
          <p className="pl-3 absolute top-0 left-0 text-xl font-medium w-full opacity-0  text-neutral-600 translate-y-10 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
            {work.subtitle[language]} {'↗'}
          </p>
        </div>
      </div>
    </Link>
  );
}
