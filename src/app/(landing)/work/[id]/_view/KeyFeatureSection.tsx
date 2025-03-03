import Image from 'next/image';
import { useLocale } from '@/hooks/useLocale';
import { renderText } from '@/utils/renderText';
import { KeyFeatureData } from '@/types/work';
import { cn } from '@/lib/utils';

interface Props {
  features: KeyFeatureData[];
}

export default function KeyFeatureSection({ features }: Props) {
  const { language } = useLocale();

  const isGif = (src: string) => src.toLowerCase().endsWith('.gif');

  const isLandscape = (feature: KeyFeatureData) => {
    return feature.imageType === 'landscape';
  };

  return (
    <section className="w-full container px-48" id="key-features">
      <div className="flex flex-col gap-20">
        {/* <Badge>KEY FEATURES</Badge> */}
        {features.map((feature, index) => (
          <div key={index} className="flex justify-between gap-12 items-center">
            <div className="w-1/2 flex items-center justify-center">
              <div
                className={cn(
                  'relative w-full overflow-hidden rounded-md',
                  isLandscape(feature) ? 'aspect-[16/9]' : 'size-[480px]'
                )}
              >
                <Image
                  src={feature.image}
                  alt={feature.title[language]}
                  fill
                  className={cn(
                    'rounded-md',
                    isLandscape(feature) ? 'object-cover' : 'object-contain'
                  )}
                  priority={isGif(feature.image)}
                  unoptimized={isGif(feature.image)}
                />
              </div>
            </div>
            <div className="flex flex-col gap-4 w-1/2 break-keep text-balance">
              <h5 className="text-2xl font-bold text-green-900">
                {feature.title[language]}
              </h5>
              <h6 className="text-xl font-semibold text-green-900/80 tracking-tight font-title-medium">
                {feature.subtitle?.[language]}
              </h6>
              <p className="text-base font-medium text-neutral-600 leading-relaxed">
                {renderText(feature.description[language])}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
