import { Badge } from '@/components/ui/badge';
import { InformationArchitectureData, SectionProps } from '@/types/work';
import { useLocale } from '@/hooks/useLocale';
import Image from 'next/image';
export default function InformationArchitectureSection({
  data,
}: SectionProps<InformationArchitectureData>) {
  const { language } = useLocale();

  return (
    <section className="w-full flex flex-col gap-6 bg-neutral-100 rounded-3xl py-24">
      <div className="flex flex-col gap-8 px-48 container">
        <Badge>INFORMATION ARCHITECTURE</Badge>
        {data.description && (
          <p className="text-base font-medium text-neutral-600 mb-8">
            {data.description[language]}
          </p>
        )}
        <div className="px-12">
          <Image
            src={data.image}
            alt="Information Architecture"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
}
