import { AchievementData } from '@/types/work';
import { useLocale } from '@/hooks/useLocale';
import { Badge } from '@/components/ui/badge';
import { CircleCheck } from 'lucide-react';
import Image from 'next/image';

interface Props {
  achievements: AchievementData;
}

export default function AchievementSection({ achievements }: Props) {
  const { language } = useLocale();
  return (
    <section className="w-full container px-48">
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
              className="flex justify-center items-center gap-4 w-full bg-white rounded-2xl px-6 py-6 shadow"
            >
              <CircleCheck
                className="w-6 h-6 "
                fill="#14532d"
                strokeWidth={2}
                stroke="white"
              />
              <p className="text-lg font-semibold text-green-900 leading-8 break-keep">
                {highlight[language]}
              </p>
            </div>
          ))}
      </div>
    </section>
  );
}
