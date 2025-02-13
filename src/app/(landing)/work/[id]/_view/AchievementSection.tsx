import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { SectionProps, AchievementData } from '@/types/work';

export default function AchievementSection({
  data,
}: SectionProps<AchievementData>) {
  return (
    <section className="w-full container px-48">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <Badge>ACHIEVEMENT</Badge>
          {data.description && (
            <p className="mt-4 text-base font-medium text-neutral-600">
              {data.description}
            </p>
          )}
        </div>
        <Image
          src={data.image}
          alt="Achievement"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto"
        />
      </div>
    </section>
  );
}
