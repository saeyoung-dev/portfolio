'use client';

import { useCallback, use, Fragment, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { useLocale } from '@/hooks/useLocale';
import { renderText } from '@/utils/renderText';
import { Button } from '@/components/ui/button';
import { getWorkById } from '@/data/works';
import {
  UISpecificationSection,
  TaskFlowSection,
  InformationArchitectureSection,
  ModerationProcessSection,
  SolutionSection,
  TechStackSection,
  ChallengeSection,
  KeyFeatureSection,
  RestropectiveSection,
  YoutubeSection,
  AchievementSection,
  DatabaseSection,
  ProductRequirementSection,
  ImageSliderSection,
} from './_view/index';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Props {
  params: Promise<{
    id: string;
  }>;
}

const SECTION_COMPONENTS = {
  informationArchitecture: InformationArchitectureSection,
  taskFlow: TaskFlowSection,
  uiSpecification: UISpecificationSection,
  database: DatabaseSection,
  productRequirement: ProductRequirementSection,
  moderationProcess: ModerationProcessSection,
} as const;

export default function WorkDetail({ params }: Props) {
  const { id } = use(params);
  const work = getWorkById(id);
  const { language } = useLocale();

  if (!work) {
    notFound();
  }

  const descriptions = work.description[language].map((desc) =>
    renderText(desc)
  );

  const scrollToFeatures = useCallback(() => {
    const featuresSection = document.getElementById('key-features');
    featuresSection?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => {
    const workContents = gsap.utils.toArray<HTMLElement>('.work-content');

    workContents.forEach((content) => {
      gsap.fromTo(
        content,
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: content,
            start: 'top bottom-=100',
            end: 'bottom top',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <main className="flex w-full flex-col items-center relative gap-28">
      {/* Main Image */}
      <section className="w-screen overflow-hidden work-content">
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
      <section className="w-full container px-48 work-content">
        <div className="flex flex-col gap-6">
          <h1 className="text-6xl font-semibold tracking-tighter leading-tight text-green-900">
            {work.title}
          </h1>
          <div className="flex w-full justify-between gap-16">
            <div className="flex flex-col gap-6 w-3/4">
              <h2 className="text-2xl font-medium text-green-900">
                {work.subtitle[language]}
              </h2>
              <p
                className={cn(
                  'text-lg text-neutral-600 max-w-3xl text-balance flex flex-col gap-4 ',
                  language === 'ko' ? 'leading-normal' : 'leading-snug'
                )}
              >
                {descriptions.map((description, index) => (
                  <span key={index} className="break-keep font-medium">
                    {description}
                  </span>
                ))}
              </p>
              <div className="flex items-center gap-4 text-sm mt-4 text-green-900/70">
                {work.link && (
                  <Button variant="primary" className="group">
                    <Link
                      href={work.link}
                      target="_blank"
                      className="flex gap-2 items-center"
                    >
                      View Project{' '}
                      <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 duration-300" />
                    </Link>
                  </Button>
                )}
                <Button variant="secondary" onClick={scrollToFeatures}>
                  To Key Features
                </Button>
              </div>
            </div>
            <div className="flex gap-4 w-1/4">
              <div className="flex flex-col gap-4 text-base text-green-900/70">
                <div>
                  <h3 className="font-bold mb-1">TIMELINE</h3>
                  <p className="font-medium text-balance">{work.timeline}</p>
                </div>
                {work.type && (
                  <div>
                    <h3 className="font-bold mb-1">TYPE</h3>
                    <p className="font-medium text-balance">{work.type}</p>
                  </div>
                )}
                {work.client && (
                  <div>
                    <h3 className="font-bold mb-1">CLIENT</h3>
                    <p className="font-medium text-balance">
                      {work.client[language]}
                    </p>
                  </div>
                )}
                {work.team && (
                  <div>
                    <h3 className="font-bold mb-1">TEAM</h3>
                    <p className="font-medium text-balance">
                      {renderText(work.team)}
                    </p>
                  </div>
                )}
                {work.role && (
                  <div>
                    <h3 className="font-bold mb-1">ROLE</h3>
                    <p className="font-medium text-balance">{work.role}</p>
                  </div>
                )}
                {work.contribution && (
                  <div>
                    <h3 className="font-bold mb-1">CONTRIBUTION</h3>
                    <div className="font-medium text-sm text-balance">
                      {Object.entries(work.contribution).map(([key, value]) => (
                        <p key={key}>
                          · {key.charAt(0).toUpperCase() + key.slice(1)} :{' '}
                          {value}
                        </p>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {work.techStack && (
        <TechStackSection className="work-content" techStack={work.techStack} />
      )}
      {work.challenge && (
        <ChallengeSection className="work-content" challenge={work.challenge} />
      )}
      {work.solution && (
        <SolutionSection className="work-content" solution={work.solution} />
      )}
      {work.keyFeatures && (
        <KeyFeatureSection
          className="work-content"
          features={work.keyFeatures.interface}
        />
      )}
      {work.keyFeatureSlider && (
        <ImageSliderSection
          title={work.keyFeatureSlider.title}
          images={work.keyFeatureSlider.images}
        />
      )}
      {work.video && (
        <section className="w-full container px-48 work-content">
          <YoutubeSection
            videoId={work.video.videoId}
            title={work.video.title[language]}
          />
        </section>
      )}

      {/* Extra Sections */}
      {work.sections.map((section, index) => {
        const SectionComponent = SECTION_COMPONENTS[section.type];
        return (
          <Fragment key={`${section.type}-${index}`}>
            <SectionComponent data={section.data} className="work-content" />
          </Fragment>
        );
      })}
      {work.achievements && (
        <AchievementSection
          achievements={work.achievements}
          className="work-content"
        />
      )}
      {work.retrospective && (
        <RestropectiveSection
          restropective={work.retrospective}
          className="work-content"
        />
      )}
      <div className="w-full h-6" />
    </main>
  );
}
