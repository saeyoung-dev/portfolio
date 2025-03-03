import { Badge } from '@/components/ui/badge';
import { InformationArchitectureData, SectionProps } from '@/types/work';
import { ImageViewer } from '@/components/ui/image-viewer';

export default function InformationArchitectureSection({
  data,
}: SectionProps<InformationArchitectureData>) {
  return (
    <section className="w-full flex flex-col gap-6">
      <div className="flex flex-col gap-2 px-48 container">
        <Badge>INFORMATION ARCHITECTURE</Badge>
        {data.description && (
          <p className="mt-4 text-base font-medium text-neutral-600">
            {data.description}
          </p>
        )}
      </div>
      <ImageViewer
        src={data.image}
        alt="Information Architecture class diagram"
        className="w-full h-auto"
      />
    </section>
  );
}
