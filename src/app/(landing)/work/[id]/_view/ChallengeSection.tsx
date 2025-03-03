import { useLocale } from '@/hooks/useLocale';
import { Badge } from '@/components/ui/badge';
import { ChallengeData } from '@/types/work';
import { renderText } from '@/utils/renderText';
import { cn } from '@/lib/utils';

interface Props {
  challenge: ChallengeData;
}

export default function ChallengeSection({ challenge }: Props) {
  const { language } = useLocale();

  return (
    <section className="w-full container px-48 flex flex-col gap-8">
      <Badge>THE CHALLENGE</Badge>
      <div className="flex justify-between gap-8 break-keep px-8">
        <h4
          className={cn(
            'text-3xl font-medium text-pretty tracking-tight text-green-900 flex-1',
            language === 'ko' ? 'leading-normal font-bold' : 'leading-snug'
          )}
        >
          {challenge.question[language]}
        </h4>
        <p className="text-base font-medium text-green-900 text-pretty leading-tighter flex-1 flex flex-col gap-4">
          {challenge.description[language].map((description, index) => (
            <span key={index}>{renderText(description)}</span>
          ))}
        </p>
      </div>
    </section>
  );
}
