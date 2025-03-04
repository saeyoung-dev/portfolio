import Image from 'next/image';
import { SectionProps, WireframeData } from '@/types/work';
import { Badge } from '@/components/ui/badge';
import { renderText } from '@/utils/renderText';
import { useLocale } from '@/hooks/useLocale';
export default function WireframeSection({
  data,
}: SectionProps<WireframeData>) {
  const { language } = useLocale();

  return (
    <section className="w-full">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2 container px-48">
          <Badge>WIREFRAME</Badge>
          {data.description && (
            <p className="mt-4 text-base font-medium text-neutral-600">
              {renderText(data.description[language])}
            </p>
          )}
        </div>
        <Image
          src={data.image}
          alt="Wireframe"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto"
        />
      </div>
    </section>
  );
}
