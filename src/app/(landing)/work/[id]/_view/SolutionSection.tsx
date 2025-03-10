import Image from 'next/image';
import { useLocale } from '@/hooks/useLocale';
import { renderText } from '@/utils/renderText';
import { Badge } from '@/components/ui/badge';
import { SolutionData } from '@/types/work';
import { cn } from '@/lib/utils';
interface SolutionSectionProps {
  className?: string;
  solution: SolutionData;
}

export default function SolutionSection({
  className,
  solution,
}: SolutionSectionProps) {
  const { language } = useLocale();
  const boldTitle = renderText(solution.title[language]);
  const boldDescription = renderText(solution.description[language]);

  return (
    <section className={cn('w-full container px-48', className)}>
      <div className="flex flex-col gap-8">
        <Badge>SOLUTION</Badge>
        <h3 className="flex items-center justify-center bg-white py-8 px-10 rounded-2xl shadow border border-neutral-100 text-center text-2xl font-semibold text-green-900 break-keep text-balance leading-10">
          {boldTitle}
        </h3>
        {solution.image && (
          <Image
            src={solution.image}
            alt="Solution"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto rounded-2xl "
          />
        )}
        {solution.description && (
          <p className="text-lg font-medium text-green-900 leading-8 text-pretty break-keep">
            {boldDescription}
          </p>
        )}
      </div>
    </section>
  );
}
