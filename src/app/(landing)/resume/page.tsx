'use client';

import { useEffect, useRef } from 'react';
import { Badge } from '@/components/ui/badge';
import { resumeData } from '@/data/resume';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useLocale } from '@/hooks/useLocale';
import { renderText } from '@/utils/renderText';

gsap.registerPlugin(ScrollTrigger);

export default function ResumePage() {
  const { language } = useLocale();

  const sectionRefs = {
    about: useRef<HTMLDivElement>(null),
    experience: useRef<HTMLDivElement>(null),
    projects: useRef<HTMLDivElement>(null),
    education: useRef<HTMLDivElement>(null),
    skills: useRef<HTMLDivElement>(null),
    certifications: useRef<HTMLDivElement>(null),
  };

  useEffect(() => {
    Object.values(sectionRefs).forEach((ref, index) => {
      if (ref.current) {
        gsap.fromTo(
          ref.current,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: index * 0.2,
            scrollTrigger: {
              trigger: ref.current,
              start: 'top 80%',
              once: true,
            },
          }
        );
      }
    });
  }, []);

  return (
    <main className='flex w-full flex-col items-center pt-24 sm:pt-32'>
      {/* Hero Section */}
      <section className='w-full container px-6 sm:px-8 md:px-16 lg:px-32 mb-16'>
        <h1 className='text-4xl sm:text-5xl font-bold text-green-900 mb-4'>
          {renderText(resumeData.name[language])}
        </h1>
        <p className='text-xl font-semibold text-green-900/80'>
          {renderText(resumeData.title[language])}
        </p>
      </section>

      {/* About Section */}
      <section
        ref={sectionRefs.about}
        className='w-full container px-6 sm:px-8 md:px-16 lg:px-32 mb-16'
      >
        <Badge className='mb-4'>ABOUT</Badge>
        <div className='whitespace-pre-line text-lg font-medium text-green-900/80 leading-relaxed'>
          {renderText(resumeData.about[language])}
        </div>
      </section>

      {/* Experience Section */}
      <section
        ref={sectionRefs.experience}
        className='w-full container px-6 sm:px-8 md:px-16 lg:px-32 mb-16'
      >
        <Badge className='mb-8'>EXPERIENCE</Badge>
        <div className='flex flex-col gap-8'>
          {resumeData.experiences.map((exp, index) => (
            <div key={index} className='flex flex-col gap-4'>
              <div className='flex justify-between items-start'>
                <div>
                  <h3 className='text-xl font-semibold mb-2 text-green-900'>
                    {renderText(exp.company[language])}
                  </h3>
                  <p className='text-green-900/80 font-medium'>
                    {renderText(exp.title[language])}
                  </p>
                </div>
                <div className='text-right'>
                  <p className='text-green-900/60 mb-2'>{exp.period}</p>
                  <p className='text-green-900/60'>
                    {renderText(exp.location[language])}
                  </p>
                </div>
              </div>
              <ul className='list-disc list-inside flex flex-col gap-2 text-green-900/80'>
                {exp.description[language].map((item, i) => (
                  <li key={i}>· {renderText(item)}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section
        ref={sectionRefs.projects}
        className='w-full container px-6 sm:px-8 md:px-16 lg:px-32 mb-16'
      >
        <Badge className='mb-8'>PROJECTS</Badge>
        <div className='flex flex-col gap-8'>
          {resumeData.projects.map((project, index) => (
            <div key={index} className='flex flex-col gap-4'>
              <div className='flex justify-between items-start'>
                <div>
                  <h3 className='text-xl font-semibold mb-2 text-green-900'>
                    {project.title[language]}
                  </h3>
                  <p className='text-green-900/80 font-medium'>
                    {project.role?.[language]}
                  </p>
                </div>
                <p className='text-green-900/60'>{project.year}</p>
              </div>
              <ul className='list-disc list-inside flex flex-col gap-2.5 text-green-900/80'>
                {project.description[language].map((item, i) => (
                  <li key={i}>· {renderText(item)}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section
        ref={sectionRefs.education}
        className='w-full container px-6 sm:px-8 md:px-16 lg:px-32 mb-16'
      >
        <Badge className='mb-8'>EDUCATION</Badge>
        <div className='flex flex-col gap-8'>
          {resumeData.education.map((edu, index) => (
            <div key={index} className='flex justify-between items-start'>
              <div>
                <h3 className='text-xl font-semibold mb-2 text-green-900'>
                  {edu.degree[language]}
                </h3>
                <p className='text-green-900/80 font-medium'>
                  {edu.school[language]}
                </p>
                {edu.details && (
                  <p className='text-green-900/60 whitespace-pre-line mt-2 leading-normal'>
                    {edu.details[language]}
                  </p>
                )}
              </div>
              <p className='text-green-900/60'>{edu.period}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section
        ref={sectionRefs.skills}
        className='w-full container px-6 sm:px-8 md:px-16 lg:px-32 mb-16'
      >
        <Badge className='mb-8'>SKILLS</Badge>
        <div className='flex flex-wrap gap-2'>
          {resumeData.skills.map((skill, index) => (
            <Badge key={index} variant='secondary' rounded='full'>
              {skill}
            </Badge>
          ))}
        </div>
      </section>

      {/* Certifications Section */}
      <section
        ref={sectionRefs.certifications}
        className='w-full container px-6 sm:px-8 md:px-16 lg:px-32 mb-16'
      >
        <Badge className='mb-8'>CERTIFICATIONS</Badge>
        <div className='flex flex-col gap-4'>
          {resumeData.certifications.map((cert, index) => (
            <div key={index} className='flex justify-between items-start'>
              <div>
                <h3 className='text-xl font-semibold mb-2 text-green-900'>
                  {cert.title[language]}
                </h3>
                <p className='text-green-900/80 font-medium'>
                  {cert.description[language]}
                </p>
              </div>
              <p className='text-green-900/60'>{cert.date}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className='w-full container px-6 sm:px-8 md:px-16 lg:px-32 mb-16'>
        <Badge className='mb-8'>CONTACT</Badge>
        <div className='flex flex-col gap-4'>
          {resumeData.contact.map((contact, index) => (
            <div key={index} className='flex items-center gap-2'>
              <span className='text-green-900 font-medium'>
                {contact.label} :
              </span>
              {contact.link ? (
                <a
                  href={contact.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-green-900/80 hover:text-green-900 transition-colors'
                >
                  {contact.value}
                </a>
              ) : (
                <span className='text-green-900/80'>{contact.value}</span>
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
