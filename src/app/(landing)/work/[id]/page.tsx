'use client';

import { useCallback, use } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { getWorkById } from '@/data/works';
import { ArrowUpRight } from 'lucide-react';
interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default function WorkDetail({ params }: Props) {
  const { id } = use(params);
  const work = getWorkById(id);

  if (!work) {
    notFound();
  }

  const scrollToFeatures = useCallback(() => {
    const featuresSection = document.getElementById('key-features');
    featuresSection?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <main className="flex w-full flex-col items-center relative gap-24">
      {/* Main Image */}
      <section className="w-screen overflow-hidden">
        <Image
          src={work.mainImage}
          alt="Project Main"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto"
        />
      </section>
      {/* Description Section */}
      <section className="w-full container px-48">
        <div className="flex flex-col gap-6">
          <h1 className="text-6xl text-green-900 font-semibold tracking-tighter">
            {work.title}
          </h1>
          <h2 className="text-2xl font-medium text-green-900">
            {work.subtitle}
          </h2>
          <div className="flex w-full justify-between gap-16">
            <div className="flex flex-col gap-4">
              <p className="text-lg text-neutral-600 leading-snug max-w-3xl text-balance flex flex-col gap-4">
                {work.description.map((description, index) => (
                  <span key={index}>{description}</span>
                ))}
              </p>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col gap-4 text-base text-green-900/70">
                <div>
                  <h3 className="font-bold mb-1">ROLE</h3>
                  <p className="text-medium text-balance">{work.role}</p>
                </div>
                <div>
                  <h3 className="font-bold mb-1">TEAM</h3>
                  <p className="font-medium text-balance">{work.team}</p>
                </div>
                <div>
                  <h3 className="font-bold mb-1">TYPE</h3>
                  <p className="text-balance font-medium">{work.type}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4 text-sm text-green-900/70">
            <Button variant="primary" className="group">
              {work.link && (
                <Link
                  href={work.link}
                  target="_blank"
                  className="flex gap-2 items-center"
                >
                  View Project{' '}
                  <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 duration-300" />
                </Link>
              )}
            </Button>
            <Button variant="secondary" onClick={scrollToFeatures}>
              To Key Features
            </Button>
          </div>
        </div>
      </section>
      {/* Challenge Section */}
      <section className="w-full container px-48 flex flex-col gap-8">
        <Badge>THE CHALLENGE</Badge>
        <div className="flex justify-between gap-8 text-balance">
          <h4 className="text-3xl font-medium tracking-tight text-green-900 flex-1">
            {work.challenge.question}
          </h4>
          <p className="text-base text-green-900 leading-tighter flex-1 flex flex-col gap-4">
            {work.challenge.description.map((description, index) => (
              <span key={index}>{description}</span>
            ))}
          </p>
        </div>
      </section>
      {/* Tech Stack Section */}
      <section className="w-full container px-48">
        <div className="flex flex-col gap-8">
          <Badge>TECH STACK</Badge>
          <div className="grid grid-cols-3 gap-16 items-start text-center bg-white p-8 rounded-3xl shadow-sm border border-neutral-100">
            <div className="flex flex-col gap-4">
              <h4 className="text-2xl font-medium text-green-900">Backend</h4>
              <p className="text-lg text-green-900/80 leading-relaxed">
                {work.techStack.backend.join(', ')}
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-2xl font-medium text-green-900">Frontend</h4>
              <p className="text-lg text-green-900/80 leading-relaxed">
                {work.techStack.frontend.join(', ')}
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-2xl font-medium text-green-900">
                Deployment
              </h4>
              <p className="text-lg text-green-900/80 leading-relaxed">
                {work.techStack.deployment.join(', ')}
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Key Features Section */}
      <section className="w-full container px-48" id="key-features">
        <div className="flex flex-col gap-12">
          <Badge>KEY FEATURES</Badge>
          <div className="grid grid-cols-2 gap-16">
            <Image
              src={work.featureImage}
              alt="Features Preview"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto rounded-3xl "
            />
            <div className="flex flex-col gap-12">
              {work.keyFeatures.map((feature, index) => (
                <div key={index} className="flex flex-col gap-4">
                  <h5 className="text-2xl font-medium text-green-900">
                    {feature.title}
                  </h5>
                  <p className="text-lg text-green-900/80 leading-relaxed">
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
