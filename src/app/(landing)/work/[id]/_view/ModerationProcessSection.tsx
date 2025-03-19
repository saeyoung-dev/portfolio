import { useLocale } from '@/hooks/useLocale';
import { renderText } from '@/utils/renderText';
import { ImageViewer } from '@/components/ui/image-viewer';
import { Badge } from '@/components/ui/badge';
import { SectionProps, ModerationProcessData } from '@/types/work';

export default function ModerationProcessSection({
  data,
}: SectionProps<ModerationProcessData>) {
  const { language } = useLocale();

  return (
    <section className='w-full container sm:px-8 md:px-16 lg:px-32 xl:px-48'>
      <div className='flex flex-col gap-6'>
        <div className='flex flex-col gap-2'>
          <Badge className='mb-4'>MODERATION PROCESS</Badge>
          {data.title && (
            <p className='text-lg font-bold text-neutral-600'>
              {renderText(data.title[language])}
            </p>
          )}
          {data.description && (
            <p className='text-base font-medium text-neutral-600'>
              {renderText(data.description[language])}
            </p>
          )}
        </div>
        <ImageViewer
          src={data.image}
          alt='Flow Chart'
          className='w-full h-auto mt-4'
        />
      </div>
    </section>
  );
}
