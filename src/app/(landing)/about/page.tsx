'use client';

import Image from 'next/image';
import { useLanguage } from '@/hooks/useLanguage';
import { aboutContent } from '@/data/about';

export default function AboutPage() {
  const { language } = useLanguage();
  const content = aboutContent;

  return (
    <main className="flex w-full flex-col items-center pt-48">
      {/* Hero Section */}
      <section className="w-full container px-32 flex justify-between gap-12">
        <div className="flex flex-col gap-8">
          <h1 className="text-6xl font-semibold tracking-tighter leading-tight text-green-900">
            {content.hero.title[language]}
          </h1>
          <div className="flex flex-col gap-6">
            <p className="text-green-900 leading-relaxed max-w-3xl text-lg break-keep">
              {content.hero.description[language]}
            </p>
            <div className="flex flex-col gap-2">
              <div className="flex gap-1 text-base text-green-900/70">
                <h3 className="font-semibold mb-1">CURRENTLY:</h3>
                <p>{content.hero.status.current[language]}</p>
              </div>
              <div className="flex gap-1 text-base text-green-900/70">
                <h3 className="font-semibold mb-1">PREVIOUSLY:</h3>
                <p>{content.hero.status.previous[language]}</p>
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
          className="h-auto w-96 object-cover"
        />
      </section>

      {/* Values Section */}
      <section className="w-full container px-32 py-24">
        <div className="grid grid-cols-3 gap-16 border-y-2 border-green-900 py-24">
          {content.values.items.map((item, index) => (
            <div key={index} className="flex flex-col gap-4">
              <div className="flex gap-4 items-center">
                <h2 className="text-3xl font-semibold text-green-900/70">
                  {String(index + 1).padStart(2, '0')}
                </h2>
                <h3 className="text-2xl font-medium text-green-900">
                  {item.title[language]}
                </h3>
              </div>
              <p className="text-lg text-green-900/80 leading-relaxed">
                {item.description[language]}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Image Section */}
      <section className="w-full container px-32 pb-24">
        <h2 className="text-3xl font-semibold text-green-900 mb-12">
          {content.life.title[language]}
        </h2>
        <div className="grid grid-cols-5 gap-2 pb-24 border-b-2 border-green-900">
          {content.life.images.map((image, index) => (
            <div
              key={index}
              className="aspect-auto cursor-pointer border group relative border-green-900/20 overflow-hidden"
            >
              <Image
                src={`/images/about/life-0${index + 1}.png`}
                alt={image.description[language]}
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-full object-cover group-hover:scale-105 group-hover:brightness-95 transition-transform duration-300"
              />
              <span className="text-white hidden group-hover:block text-sm absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
                {image.description[language]}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Core Values Section */}
      <section className="w-full container px-32 pb-32">
        <h2 className="text-3xl font-semibold text-green-900 mb-12">
          {content.core.title[language]}
        </h2>
        <div className="grid grid-cols-3 gap-16">
          {content.core.sections.map((section, index) => (
            <div key={index} className="flex flex-col gap-6">
              <div className="flex gap-4 items-center">
                <h2 className="text-3xl font-semibold text-green-900/70">
                  {String(index + 1).padStart(2, '0')}
                </h2>
                <h3 className="text-2xl font-medium text-green-900">
                  {section.title[language]}
                </h3>
              </div>
              <ul className="flex flex-col gap-4 text-pretty pl-2">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-lg text-green-900/80">
                    {item.text[language]}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
