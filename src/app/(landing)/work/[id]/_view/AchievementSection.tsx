import { AchievementData } from '@/types/work';
import { useLocale } from '@/hooks/useLocale';
import { Badge } from '@/components/ui/badge';
import { CircleCheck } from 'lucide-react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface Props {
  className?: string;
  achievements: AchievementData;
}

export default function AchievementSection({ className, achievements }: Props) {
  const { language } = useLocale();
  return (
    <section className={cn('w-full container px-48', className)}>
      <div className="flex flex-col gap-6">
        <Badge className="mb-2">ACHIEVEMENTS</Badge>
        {achievements.image && (
          <Image
            src={achievements.image}
            alt="Achievement"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto rounded-2xl "
          />
        )}
        {achievements.highlights &&
          achievements.highlights.map((highlight, index) => (
            <div
              key={`achievement-highlight-${index}`}
              className="flex justify-center items-center gap-4 w-full bg-white rounded-2xl p-6 shadow"
            >
              <span className="size-6">
                <CircleCheck fill="#14532d" strokeWidth={2} stroke="white" />
              </span>
              <p className="text-lg font-semibold text-green-900 leading-8 break-keep">
                {highlight[language]}
              </p>
            </div>
          ))}
      </div>
    </section>
  );
}
