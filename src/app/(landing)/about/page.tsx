'use client';

import Image from 'next/image';
import { useLocale } from '@/hooks/useLocale';
import { renderText } from '@/utils/renderText';
import { aboutContent } from '@/data/about';
import { ImageViewer } from '@/components/ui/image-viewer';
// import { cn } from '@/lib/utils';

export default function AboutPage() {
  const { language } = useLocale();
  const content = aboutContent;

  return (
    <main className="flex w-full flex-col items-center pt-32">
      {/* Hero Section */}
      <section className="w-full container px-32 flex justify-between gap-12">
        <div className="flex flex-col gap-8">
          <h1 className="text-6xl font-semibold tracking-tighter leading-tight text-green-900">
            {content.hero.title[language]}
          </h1>
          <div className="flex flex-col gap-6">
            <p className="text-green-900 leading-relaxed max-w-3xl text-balance text-lg break-keep">
              {renderText(content.hero.description[language])}
            </p>
            <div className="flex flex-col gap-4 text-pretty break-keep">
              <div className="flex gap-1 text-base font-medium text-green-900/70">
                <span>
                  <span className="font-semibold">CURRENTLY</span> :{' '}
                  {renderText(content.hero.status.current[language])}
                </span>
              </div>
              <div className="flex gap-1 text-base font-medium text-green-900/70">
                <span>
                  <span className="font-semibold">PREVIOUSLY</span> :{' '}
                  {renderText(content.hero.status.previous[language])}
                </span>
              </div>
            </div>
          </div>
        </div>
        <Image
          src={'/images/about/profile.png'}
          alt="About Image"
          width={0}
          height={0}
          sizes="100vw"
          className="cursor-pointer h-auto w-96 object-cover hover:brightness-90 transition-all duration-300"
        />
      </section>

      {/* Values Section */}
      <section className="w-full container px-32 py-24">
        <div className="grid grid-cols-3 gap-8 border-y-2 border-green-900 py-24">
          {content.values.items.map((item, index) => (
            <div key={index} className="flex gap-6">
              <h2 className="text-4xl font-semibold text-green-900/70">
                {String(index + 1).padStart(2, '0')}
              </h2>
              <div className="flex flex-col gap-4 pt-1">
                <h3 className="text-2xl font-semibold text-green-900">
                  {item.title[language]}
                </h3>
                <p className="text-lg text-green-900/80 leading-relaxed text-balance break-keep">
                  {renderText(item.description[language])}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Image Section */}
      <section className="w-full container px-32 pb-24">
        <h2 className="text-3xl font-semibold text-green-900 mb-12 flex items-center gap-2">
          <Image
            src={'/images/icon/about-01.png'}
            alt="coffee"
            width={0}
            height={0}
            sizes="100vw"
            className="w-10 h-10"
          />
          {content.life.title[language]}
        </h2>
        <div className="grid grid-cols-5 gap-2 pb-24 border-b-2 border-green-900">
          {content.life.images.map((image, index) => (
            <div
              key={index}
              className="aspect-auto cursor-pointer border group relative border-green-900/20 overflow-hidden"
            >
              <ImageViewer
                src={`/images/about/life-0${index + 1}.png`}
                alt={image.description[language]}
                className="w-full h-full object-cover group-hover:scale-105 group-hover:brightness-90 transition-transform duration-300"
              />
              <span className="text-white font-medium text-center break-keep hidden group-hover:block text-sm absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
                {image.description[language]}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Core Values Section */}
      <section className="w-full container px-32 pb-32">
        <div className="grid grid-cols-3 gap-8">
          {content.core.sections.map((item, index) => (
            <div key={index} className="flex gap-4">
              <h2 className="text-4xl font-semibold text-green-900/70">
                {String(index + 1).padStart(2, '0')}
              </h2>
              <div className="flex flex-col gap-6 pt-1">
                <h3 className="text-2xl font-semibold text-green-900">
                  {item.title[language]}
                </h3>
                <ul className="flex flex-col gap-4 break-keep">
                  {item.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="text-lg text-green-900/80 font-medium"
                    >
                      {item.text[language]}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
