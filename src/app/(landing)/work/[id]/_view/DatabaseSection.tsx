import { useLocale } from '@/hooks/useLocale';
import { renderText } from '@/utils/renderText';
import { ImageViewer } from '@/components/ui/image-viewer';
import { Badge } from '@/components/ui/badge';
import { SectionProps, DatabaseData } from '@/types/work';

export default function DatabaseSection({ data }: SectionProps<DatabaseData>) {
  const { language } = useLocale();

  return (
    <section className="w-full container px-48">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <Badge>DATABASE</Badge>
          {data.description && (
            <p className="mt-4 text-base font-medium text-neutral-600">
              {renderText(data.description[language])}
            </p>
          )}
        </div>
        <ImageViewer
          src={data.image}
          alt="Database"
          className="w-full h-auto mt-4"
        />
      </div>
    </section>
  );
}
