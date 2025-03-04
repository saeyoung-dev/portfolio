import { useLocale } from '@/hooks/useLocale';
import { renderText } from '@/utils/renderText';
import { ImageViewer } from '@/components/ui/image-viewer';
import { Badge } from '@/components/ui/badge';
import { SectionProps, TaskFlowData } from '@/types/work';

export default function TaskFlowSection({ data }: SectionProps<TaskFlowData>) {
  const { language } = useLocale();

  return (
    <section className="w-full container px-48">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <Badge>TASK FLOW</Badge>
          {data.description && (
            <p className="mt-4 text-base font-medium text-neutral-600">
              {renderText(data.description[language])}
            </p>
          )}
        </div>
        <ImageViewer
          src={data.image}
          alt="Task Flow"
          className="w-full h-auto"
        />
      </div>
    </section>
  );
}
