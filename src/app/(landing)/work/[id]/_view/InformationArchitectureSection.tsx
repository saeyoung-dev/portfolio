import { Badge } from '@/components/ui/badge';
import { useLocale } from '@/hooks/useLocale';
import { renderText } from '@/utils/renderText';
import { InformationArchitectureData, SectionProps } from '@/types/work';
import { ImageViewer } from '@/components/ui/image-viewer';
export default function InformationArchitectureSection({
  data,
}: SectionProps<InformationArchitectureData>) {
  const { language } = useLocale();

  return (
    <section className='w-full flex flex-col gap-6 bg-neutral-100 rounded-3xl py-24'>
      <div className='flex flex-col gap-2 sm:px-8 md:px-16 lg:px-32 xl:px-48 container'>
        <Badge className='mb-4'>INFORMATION ARCHITECTURE</Badge>
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
        <div className='px-8 mt-8'>
          <ImageViewer
            src={data.image}
            alt='Information Architecture'
            className='w-full h-auto'
          />
        </div>
      </div>
    </section>
  );
}
