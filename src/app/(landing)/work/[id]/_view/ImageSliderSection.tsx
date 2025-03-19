'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import type { CarouselApi } from '@/components/ui/carousel';
import { ImageSliderData } from '@/types/work';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

export default function ImageSliderSection({ title, images }: ImageSliderData) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className='w-full container sm:px-8 md:px-16 lg:px-32 xl:px-48'>
      <div className='flex flex-col gap-6'>
        {title && <Badge>{title}</Badge>}
        <Carousel
          opts={{
            align: 'start',
            loop: false,
            slidesToScroll: 3,
          }}
          setApi={setApi}
          className='relative w-full'
        >
          <CarouselContent className='-ml-4'>
            {images.map((image, index) => (
              <CarouselItem key={index} className='pl-4 basis-1/3'>
                <div className='flex flex-col gap-4'>
                  <Image
                    src={image}
                    alt={`Slide ${index + 1}`}
                    className='w-full h-auto rounded-lg'
                    width={0}
                    height={0}
                    sizes='100vw'
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious
            className={cn('transition-opacity', {
              'opacity-0': current === 0,
              'opacity-100': current !== 0,
            })}
          />
          <CarouselNext
            className={cn('transition-opacity', {
              'opacity-0': current === count - 1,
              'opacity-100': current !== count - 1,
            })}
          />
        </Carousel>
      </div>
    </section>
  );
}
