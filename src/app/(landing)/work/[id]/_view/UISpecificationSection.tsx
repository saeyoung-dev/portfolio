import { SectionProps, UISpecificationData } from '@/types/work';
import { Badge } from '@/components/ui/badge';
import { renderText } from '@/utils/renderText';
import { useLocale } from '@/hooks/useLocale';
import { ImageViewer } from '@/components/ui/image-viewer';

export default function UISpecificationSection({
  data,
}: SectionProps<UISpecificationData>) {
  const { language } = useLocale();

  return (
    <section className='w-full'>
      <div className='flex flex-col gap-6'>
        <div className='flex flex-col gap-2 container sm:px-8 md:px-16 lg:px-32 xl:px-48'>
          <Badge>UI SPECIFICATION</Badge>
          {data.description && (
            <p className='mt-4 text-base font-medium text-neutral-600'>
              {renderText(data.description[language])}
            </p>
          )}
        </div>
        <ImageViewer
          src={data.image}
          alt='UI Specification'
          className='w-full h-auto mt-4 px:8 md:px-12 2xl:px-16'
        />
      </div>
    </section>
  );
}
