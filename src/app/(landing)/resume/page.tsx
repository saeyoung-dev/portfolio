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
    coreValues: useRef<HTMLDivElement>(null),
    experience: useRef<HTMLDivElement>(null),
    projects: useRef<HTMLDivElement>(null),
    relaventExperience: useRef<HTMLDivElement>(null),
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
    <main className="flex w-full flex-col items-center pt-32">
      {/* Hero Section */}
      <section className="w-full container px-6 sm:px-8 md:px-16 lg:px-32 mb-16 ">
        <div>
          <h1 className="text-5xl sm:text-6xl font-extrabold text-green-900 mb-4">
            {renderText(resumeData.name[language])}
          </h1>
          <p className="text-2xl font-semibold text-green-900/80">
            {renderText(resumeData.title[language])}
          </p>
        </div>
      </section>

      {/* About Section */}
      <section
        ref={sectionRefs.about}
        className="w-full container px-6 sm:px-8 md:px-16 lg:px-32 mb-16"
      >
        <div className="shadow p-8 rounded-2xl break-keep whitespace-pre-line text-lg flex flex-col gap-1 font-medium text-green-900 leading-relaxed">
          {resumeData.about[language].map((item, index) => (
            <li key={index} className="pl-2">
              {renderText(item)}
            </li>
          ))}
        </div>
      </section>

      {/* Core Values Section */}
      <section
        ref={sectionRefs.coreValues}
        className="w-full container px-6 sm:px-8 md:px-16 lg:px-32 mb-16"
      >
        <Badge className="mb-4 text-sm">CORE VALUES</Badge>
        <div className="whitespace-pre-line text-md flex flex-col gap-1 font-semibold text-green-900/70 leading-relaxed">
          {resumeData.coreValues[language].map((item, index) => (
            <li key={index} className="pl-2">
              • {renderText(item)}
            </li>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section
        ref={sectionRefs.experience}
        className="w-full container px-6 sm:px-8 md:px-16 lg:px-32 mb-16"
      >
        <Badge className="mb-8 text-sm">EXPERIENCE</Badge>
        <div className="flex flex-col gap-8">
          {resumeData.experiences.map((exp, index) => (
            <div key={index} className="flex flex-col gap-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-green-900">
                    {renderText(exp.company[language])}
                  </h3>
                  <p className="text-lg font-semibold text-green-900/80">
                    {renderText(exp.title[language])}
                  </p>
                </div>
                <div className="text-right text-green-900/60 text-sm font-medium">
                  <p>{exp.period}</p>
                  <p>{renderText(exp.location[language])}</p>
                </div>
              </div>
              <ul className="list-disc list-inside text-base font-medium text-green-900/80 leading-relaxed">
                {exp.description[language].map((item, i) => (
                  <li key={i} className="pl-2">
                    · {renderText(item)}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section
        ref={sectionRefs.projects}
        className="w-full container px-6 sm:px-8 md:px-16 lg:px-32 mb-16"
      >
        <Badge className="mb-8 text-sm">PROJECTS</Badge>
        <div className="flex flex-col gap-10">
          {resumeData.projects.map((project, index) => (
            <div key={index} className="flex flex-col gap-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-green-900">
                    {renderText(project.title[language])}
                  </h3>
                  {project.role && (
                    <p className="text-lg font-semibold text-green-900/80">
                      {renderText(project.role[language])}
                    </p>
                  )}
                </div>
                <p className="text-green-900/60 text-sm">{project.year}</p>
              </div>
              <div className="flex flex-col gap-1">
                <ul className="list-disc list-inside text-base font-medium text-green-900/80 leading-relaxed">
                  {project.description[language].map((item, i) => (
                    <li key={i} className="pl-2">
                      · {renderText(item)}
                    </li>
                  ))}
                </ul>
                {project.accomplishments && (
                  <ul className="list-disc list-inside text-base font-semibold text-green-900/90 leading-relaxed">
                    {project.accomplishments[language].map((item, i) => (
                      <li key={i} className="pl-2">
                        · {renderText(item)}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Relavent Experience Section */}
      <section
        ref={sectionRefs.relaventExperience}
        className="w-full container px-6 sm:px-8 md:px-16 lg:px-32 mb-16"
      >
        <Badge className="mb-8 text-sm">RELAVENT EXPERIENCE</Badge>
        <div className="flex flex-col gap-8">
          {resumeData.relaventExperience.map((exp, index) => (
            <div key={index} className="flex justify-between items-start">
              <div>
                <h3 className="text-2xl font-bold mb-2 text-green-900">
                  {exp.title[language]}
                </h3>
                <p className="text-lg font-semibold text-green-900/80">
                  {exp.organization[language]}
                </p>
                {exp.details && (
                  <p className="text-green-900/70 font-medium whitespace-pre-line mt-2 leading-relaxed">
                    {renderText(exp.details[language])}
                  </p>
                )}
              </div>
              <p className="text-green-900/60">{exp.period}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section
        ref={sectionRefs.education}
        className="w-full container px-6 sm:px-8 md:px-16 lg:px-32 mb-16"
      >
        <Badge className="mb-8 text-sm">EDUCATION</Badge>
        <div className="flex flex-col gap-8">
          {resumeData.education.map((edu, index) => (
            <div key={index} className="flex justify-between items-start">
              <div>
                <h3 className="text-2xl font-bold mb-2 text-green-900">
                  {edu.degree[language]}
                </h3>
                <p className="text-lg font-semibold text-green-900/80">
                  {edu.school[language]}
                </p>
                {edu.details && (
                  <p className="text-green-900/60 font-medium whitespace-pre-line mt-2 leading-relaxed">
                    {renderText(edu.details[language])}
                  </p>
                )}
              </div>
              <p className="text-green-900/60">{edu.period}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section
        ref={sectionRefs.skills}
        className="w-full container px-6 sm:px-8 md:px-16 lg:px-32 mb-16"
      >
        <Badge className="mb-8 text-sm">SKILLS</Badge>
        <div className="flex flex-wrap gap-2">
          {resumeData.skills[language].map((skill, index) => (
            <Badge key={index} variant="secondary" rounded="full">
              {skill}
            </Badge>
          ))}
        </div>
      </section>

      {/* Certifications Section */}
      <section
        ref={sectionRefs.certifications}
        className="w-full container px-6 sm:px-8 md:px-16 lg:px-32 mb-16"
      >
        <Badge className="mb-8 text-sm">CERTIFICATIONS</Badge>
        <div className="flex flex-col gap-4">
          {resumeData.certifications.map((cert, index) => (
            <div key={index} className="flex justify-between items-start">
              <div>
                <h3 className="text-2xl font-bold mb-2 text-green-900">
                  {cert.title[language]}
                </h3>
                <p className="text-green-900/80 font-medium">
                  {cert.description[language]}
                </p>
              </div>
              <p className="text-green-900/60">{cert.date}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full container px-6 sm:px-8 md:px-16 lg:px-32 mb-16">
        <Badge className="mb-8">CONTACT</Badge>
        <div className="flex flex-col gap-4">
          {resumeData.contact.map((contact, index) => (
            <div key={index} className="flex items-center gap-2">
              <span className="text-green-900 font-medium">
                {contact.label} :
              </span>
              {contact.link ? (
                <a
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-900/80 hover:text-green-900 transition-colors"
                >
                  {contact.value}
                </a>
              ) : (
                <span className="text-green-900/80">{contact.value}</span>
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
