import { useLocale } from '@/hooks/useLocale';
import { Badge } from '@/components/ui/badge';
import { ChallengeData } from '@/types/work';
import { renderText } from '@/utils/renderText';
import { cn } from '@/lib/utils';

interface Props {
  className?: string;
  challenge: ChallengeData;
}

export default function ChallengeSection({ className, challenge }: Props) {
  const { language } = useLocale();

  return (
    <section
      className={cn(
        'w-full container sm:px-8 md:px-16 lg:px-32 xl:px-48 flex flex-col gap-4 md:gap-8',
        className
      )}
    >
      <Badge>THE CHALLENGE</Badge>
      <div className='flex flex-col sm:flex-row justify-between gap-4 md:gap-8 break-keep px-0 md:px-8'>
        <h4
          className={cn(
            'text-2xl sm:text-3xl font-bold sm:text-pretty tracking-tight text-green-900 flex-1',
            language === 'ko' ? 'leading-normal' : 'leading-snug'
          )}
        >
          {challenge.question[language]}
        </h4>
        <p className='text-base md:text-lg font-medium text-green-900 leading-tighter flex-1 flex flex-col gap-4'>
          {challenge.description[language].map((description, index) => (
            <span key={index}>{renderText(description)}</span>
          ))}
        </p>
      </div>
    </section>
  );
}
