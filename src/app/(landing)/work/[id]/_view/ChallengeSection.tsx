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
      className={cn('w-full container px-48 flex flex-col gap-8', className)}
    >
      <Badge>THE CHALLENGE</Badge>
      <div className="flex justify-between gap-8 break-keep px-8">
        <h4
          className={cn(
            'text-3xl font-bold text-pretty tracking-tight text-green-900 flex-1',
            language === 'ko' ? 'leading-normal' : 'leading-snug'
          )}
        >
          {challenge.question[language]}
        </h4>
        <p className="text-base font-medium text-green-900 leading-tighter flex-1 flex flex-col gap-4">
          {challenge.description[language].map((description, index) => (
            <span key={index}>{renderText(description)}</span>
          ))}
        </p>
      </div>
    </section>
  );
}
