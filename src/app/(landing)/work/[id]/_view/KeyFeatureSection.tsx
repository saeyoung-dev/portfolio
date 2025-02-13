import Image from 'next/image';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/hooks/useLanguage';
import { renderText } from '@/utils/renderText';
import { KeyFeature } from '@/types/work';

interface Props {
  features: KeyFeature[];
}

export default function KeyFeatureSection({ features }: Props) {
  const { language } = useLanguage();

  const isGif = (src: string) => src.toLowerCase().endsWith('.gif');

  return (
    <section className="w-full container px-48" id="key-features">
      <div className="flex flex-col gap-8">
        {/* <Badge>KEY FEATURES</Badge> */}
        <div className="flex flex-col gap-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className={cn(
                'flex justify-between gap-6 items-center'
                // index % 2 === 1 ? 'flex-row-reverse' : ''
              )}
            >
              <div className="w-1/2 flex items-center justify-center">
                <Image
                  src={feature.image}
                  alt={feature.title[language]}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-auto h-[480px] rounded-2xl border border-neutral-200 object-cover"
                  priority={isGif(feature.image)}
                  unoptimized={isGif(feature.image)}
                />
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
      </div>
    </section>
  );
}
