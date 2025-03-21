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
    <section
      className={cn(
        'w-full container sm:px-8 md:px-16 lg:px-32 xl:px-48',
        className
      )}
    >
      <div className="flex flex-col gap-4 md:gap-8">
        <Badge>SOLUTION</Badge>
        <h3 className="bg-white py-6 md:py-8 px-6 md:px-10 rounded-2xl shadow border border-neutral-100 text-center text-xl sm:text-2xl md:text-3xl font-semibold text-green-900 break-keep md:text-pretty md:leading-10">
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
          <p className="text-base md:text-lg font-medium text-green-900 md:leading-8 leading-tighter text-pretty break-keep">
            {boldDescription}
          </p>
        )}
      </div>
    </section>
  );
}
