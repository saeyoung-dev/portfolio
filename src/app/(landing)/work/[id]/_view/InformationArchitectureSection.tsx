import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { InformationArchitectureData, SectionProps } from '@/types/work';

export default function InformationArchitectureSection({
  data,
}: SectionProps<InformationArchitectureData>) {
  return (
    <section className="w-full container px-48">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <Badge>Information Architecture</Badge>
          {data.description && (
            <p className="mt-4 text-base font-medium text-neutral-600">
              {data.description}
            </p>
          )}
        </div>
        <Image
          src={data.image}
          alt="Task Flow"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto rounded-2xl"
        />
      </div>
    </section>
  );
}
