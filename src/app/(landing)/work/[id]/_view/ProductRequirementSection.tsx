import { useLocale } from '@/hooks/useLocale';
import { renderText } from '@/utils/renderText';
import { ImageViewer } from '@/components/ui/image-viewer';
import { Badge } from '@/components/ui/badge';
import { SectionProps, ProductRequirementData } from '@/types/work';

export default function ProductRequirementSection({
  data,
}: SectionProps<ProductRequirementData>) {
  const { language } = useLocale();

  return (
    <section className="w-full container px-48">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <Badge>PRODUCT REQUIREMENT</Badge>
          {data.description && (
            <p className="mt-4 text-base font-medium text-neutral-600 break-keep">
              {renderText(data.description[language])}
            </p>
          )}
        </div>
        <ImageViewer
          src={data.image}
          alt="Product Requirement"
          className="w-full h-auto"
        />
      </div>
    </section>
  );
}
