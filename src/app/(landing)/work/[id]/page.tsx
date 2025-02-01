'use client';

import Image from 'next/image';
import { getWorkById } from '@/data/works';
import { notFound } from 'next/navigation';
import { useCallback } from 'react';

interface Props {
  params: {
    id: string;
  };
}

export default function WorkDetail({ params }: Props) {
  const work = getWorkById(params.id);

  if (!work) {
    notFound();
  }

  const scrollToFeatures = useCallback(() => {
    const featuresSection = document.getElementById('key-features');
    featuresSection?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <main className='flex w-full flex-col items-center pt-32'>
      {/* Hero Section */}
      <section className='w-full container px-32 pb-32'>
        <div className='flex flex-col gap-8'>
          <h1 className='text-6xl text-green-900'>{work.title}</h1>
          <h2 className='text-2xl font-medium text-green-900'>
            {work.subtitle}
          </h2>
          <div className='flex w-full justify-between gap-16'>
            <p className='text-lg text-green-900 leading-relaxed max-w-3xl'>
              {work.description}
            </p>
            <div className='flex gap-4'>
              <div className='flex flex-col gap-6 text-sm text-green-900/70'>
                <div>
                  <h3 className='font-semibold mb-1'>ROLE:</h3>
                  <p>{work.role}</p>
                </div>
                <div>
                  <h3 className='font-semibold mb-1'>TEAM:</h3>
                  <p>{work.team}</p>
                </div>
                <div>
                  <h3 className='font-semibold mb-1'>TYPE:</h3>
                  <p>{work.type}</p>
                </div>
              </div>
            </div>
          </div>
          <div className='flex items-center gap-2 text-sm text-green-900/70'>
            <span>Skip ↓</span>
            <button
              onClick={scrollToFeatures}
              className='hover:text-green-900 transition-colors'
            >
              to Key Features
            </button>
          </div>
        </div>
      </section>
      ↗️
      {/* Main Image */}
      <section className='w-full container px-32 pb-32'>
        <Image
          src={work.mainImage}
          alt='Project Main'
          width={0}
          height={0}
          sizes='100vw'
          className='w-full h-auto rounded-3xl border border-green-900'
        />
      </section>
      {/* Challenge Section */}
      <section className='w-full container px-32 pb-32'>
        <div className='flex flex-col gap-8 max-w-3xl'>
          <h3 className='text-sm font-semibold text-green-900/70'>
            THE CHALLENGE
          </h3>
          <h4 className='text-3xl font-medium text-green-900'>
            {work.challenge.question}
          </h4>
          <p className='text-lg text-green-900 leading-relaxed'>
            {work.challenge.description}
          </p>
        </div>
      </section>
      {/* Tech Stack Section */}
      <section className='w-full container px-32 pb-32'>
        <div className='flex flex-col gap-12'>
          <h3 className='text-sm font-semibold text-green-900/70'>
            TECH STACK
          </h3>
          <div className='grid grid-cols-3 gap-16'>
            <div className='flex flex-col gap-4'>
              <h4 className='text-2xl font-medium text-green-900'>Backend</h4>
              <p className='text-lg text-green-900/80 leading-relaxed'>
                {work.techStack.backend.join(', ')}
              </p>
            </div>
            <div className='flex flex-col gap-4'>
              <h4 className='text-2xl font-medium text-green-900'>Frontend</h4>
              <p className='text-lg text-green-900/80 leading-relaxed'>
                {work.techStack.frontend.join(', ')}
              </p>
            </div>
            <div className='flex flex-col gap-4'>
              <h4 className='text-2xl font-medium text-green-900'>
                Deployment
              </h4>
              <p className='text-lg text-green-900/80 leading-relaxed'>
                {work.techStack.deployment.join(', ')}
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Key Features Section */}
      <section className='w-full container px-32 pb-32' id='key-features'>
        <div className='flex flex-col gap-12'>
          <h3 className='text-sm font-semibold text-green-900/70'>
            KEY FEATURES
          </h3>
          <div className='grid grid-cols-2 gap-16'>
            <Image
              src={work.featureImage}
              alt='Features Preview'
              width={0}
              height={0}
              sizes='100vw'
              className='w-full h-auto rounded-3xl border border-green-900'
            />
            <div className='flex flex-col gap-12'>
              {work.keyFeatures.map((feature, index) => (
                <div key={index} className='flex flex-col gap-4'>
                  <h5 className='text-2xl font-medium text-green-900'>
                    {feature.title}
                  </h5>
                  <p className='text-lg text-green-900/80 leading-relaxed'>
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
