import Image from 'next/image';

export default function AboutPage() {
  return (
    <main className='flex w-full flex-col items-center pt-48'>
      {/* Hero Section */}
      <section className='w-full container px-32'>
        <div className='flex flex-col gap-8'>
          <h1 className='text-6xl font-semibold tracking-tighter leading-tight text-green-900'>
            A UI developer
            <br />
            with a design foundation
          </h1>
          <div className='flex w-full justify-between pb-24 gap-16 border-b-2 border-green-900'>
            <div className='flex flex-col gap-6'>
              <p className='text-green-900 leading-relaxed max-w-3xl text-lg'>
                I&rsquo;m Saeyoung, a UI developer with a design background,
                currently working in Seoul. My journey from design to
                development has deepened my understanding of both worlds,
                allowing me to create thoughtful and impactful digital
                experiences.
              </p>
              <div className='flex flex-col gap-2'>
                <div className='flex gap-1 text-base text-green-900/70'>
                  <h3 className='font-semibold mb-1'>CURRENTLY:</h3>
                  <p>Seeking a frontend developer position in the world.</p>
                </div>
                <div className='flex gap-1 text-base text-green-900/70'>
                  <h3 className='font-semibold mb-1'>PREVIOUSLY:</h3>
                  <p>
                    Working as a UI developer at a startup company in Seoul.
                  </p>
                </div>
              </div>
            </div>
            <div className='flex-1 bg-black w-full h-full'></div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className='w-full container px-32 py-24'>
        <div className='grid grid-cols-3 gap-16 border-b-2 border-green-900 pb-24'>
          <div className='flex flex-col gap-4'>
            <div className='flex gap-4 items-center'>
              <h2 className='text-3xl font-semibold text-green-900/70'>01</h2>
              <h3 className='text-2xl font-medium text-green-900'>
                Always learning {/* Self Growth⋆˙⟡ */}
              </h3>
            </div>
            <p className='text-lg text-green-900/80 leading-relaxed'>
              I constantly explore new technologies and design trends to fuel my
              growth. I find inspiration in both code and design, always seeking
              ways to bridge these two worlds ⋆˙⟡
            </p>
          </div>
          <div className='flex flex-col gap-4'>
            <div className='flex gap-4 items-center'>
              <h2 className='text-3xl font-semibold text-green-900/70'>02</h2>
              <h3 className='text-2xl font-medium text-green-900'>
                How I work
              </h3>
            </div>
            <p className='text-lg text-green-900/80 leading-relaxed'>
              Rooted in my design background, I approach development with a
              focus on user experience and visual aesthetics. Every line of code
              is written with purpose and care.
            </p>
          </div>
          <div className='flex flex-col gap-4'>
            <div className='flex gap-4 items-center'>
              <h2 className='text-3xl font-semibold text-green-900/70'>03</h2>
              <h3 className='text-2xl font-medium text-green-900'>
                Outside of office
              </h3>
            </div>
            <p className='text-lg text-green-900/80 leading-relaxed'>
              You&rsquo;ll find me exploring cafes for the perfect latte{' '}
              <span className='inline-flex items-center relative'>
                <Image
                  className='w-4 h-4 object-contain'
                  src={'/images/icon/work-latte.png'}
                  alt=''
                  width={16}
                  height={16}
                  aria-hidden='true'
                />
                <span className='absolute w-full h-full left-0 opacity-0'>
                  latte
                </span>
              </span>{' '}
              or cooking at home. When I&rsquo;m not trying new recipes, I enjoy
              watching otter videos and spending time outdoors.
            </p>
          </div>
        </div>
      </section>

      {/* Instagram Grid Section */}
      <section className='w-full container px-32 pb-24'>
        <h2 className='text-3xl font-semibold text-green-900 mb-12'>
          Code by day, cook by night
        </h2>
        <div className='grid grid-cols-3 gap-6 pb-24 border-b-2 border-green-900'>
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <div
              key={index}
              className='aspect-square rounded-3xl border border-green-900 overflow-hidden'
            >
              <Image
                src={`/images/life/${index}.jpg`}
                alt={`Life moment ${index}`}
                width={0}
                height={0}
                sizes='100vw'
                className='w-full h-full object-cover'
              />
            </div>
          ))}
        </div>
      </section>

      {/* Interests Section */}
      <section className='w-full container px-32 pb-32'>
        <h2 className='text-3xl font-semibold text-green-900 mb-12'>
          Core Values
        </h2>
        <div className='grid grid-cols-3 gap-16'>
          <div className='flex flex-col gap-6'>
            <div className='flex gap-4 items-center'>
              <h2 className='text-3xl font-semibold text-green-900/70'>01</h2>
              <h3 className='text-2xl font-medium text-green-900'>Design</h3>
            </div>
            <ul className='flex flex-col gap-4 text-pretty pl-4'>
              <li className='text-lg text-green-900/80'>
                <span className='font-semibold'>User-centered</span> interface
                design
              </li>
              <li className='text-lg text-green-900/80'>
                <span className='font-semibold'>Rapid</span> prototyping with{' '}
                <span className='font-semibold'>Figma</span>
              </li>
              <li className='text-lg text-green-900/80'>
                <span className='font-semibold'>Motion</span> design for
                interactions
              </li>
            </ul>
          </div>
          <div className='flex flex-col gap-6'>
            <div className='flex gap-4 items-center'>
              <h2 className='text-3xl font-semibold text-green-900/70'>02</h2>
              <h3 className='text-2xl font-medium text-green-900'>
                Development
              </h3>
            </div>
            <ul className='flex flex-col gap-4 text-pretty pl-4'>
              <li className='text-lg text-green-900/80'>
                <span className='font-semibold'>Next.js</span> performance
                optimization
              </li>
              <li className='text-lg text-green-900/80'>
                Clean <span className='font-semibold'>TypeScript</span>{' '}
                architecture
              </li>
              <li className='text-lg text-green-900/80'>
                <span className='font-semibold'>Scalable</span> component
                systems
              </li>
            </ul>
          </div>
          <div className='flex flex-col gap-6'>
            <div className='flex gap-4 items-center'>
              <h2 className='text-3xl font-semibold text-green-900/70'>03</h2>
              <h3 className='text-2xl font-medium text-green-900'>
                Soft Skills
              </h3>
            </div>
            <ul className='flex flex-col gap-4 text-pretty pl-4'>
              <li className='text-lg text-green-900/80'>
                <span className='font-semibold'>Cross-functional</span> team
                collaboration
              </li>
              <li className='text-lg text-green-900/80'>
                Strategic <span className='font-semibold'>problem-solving</span>{' '}
                approach
              </li>
              <li className='text-lg text-green-900/80'>
                <span className='font-semibold'>Agile</span> project management
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
