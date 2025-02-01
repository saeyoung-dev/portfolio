import Image from 'next/image';

export default function About() {
  return (
    <main className="flex w-full flex-col items-center pt-32">
      {/* Hero Section */}
      <section className="w-full container px-32 pb-32">
        <div className="flex flex-col gap-8">
          <h1 className="text-6xl text-green-900 leading-snug">
            A UI developer
            <br />
            with a design foundation
          </h1>
          <div className="flex w-full justify-between gap-16">
            <div className="flex flex-col gap-8">
              <p className="text-lg text-green-900 leading-relaxed max-w-3xl">
                I&rsquo;m Saeyoung, a UI developer with a design background,
                currently working in Seoul. My journey from design to
                development has deepened my understanding of both worlds,
                allowing me to create thoughtful and impactful digital
                experiences.
              </p>
              <div className="flex gap-6 text-sm text-green-900/70">
                <div>
                  <h3 className="font-semibold mb-1">CURRENTLY:</h3>
                  <p>Seeking a frontend developer position in the world.</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">PREVIOUSLY:</h3>
                  <p>
                    Working as a UI developer at a startup company in Seoul.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-1 bg-black w-full h-full"></div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="w-full container px-32 pb-32">
        <div className="grid grid-cols-3 gap-16">
          <div className="flex flex-col gap-4">
            <div className="flex gap-4 items-center">
              <h2 className="text-3xl font-semibold text-green-900/70">01</h2>
              <h3 className="text-2xl font-medium text-green-900">
                development ethos
              </h3>
            </div>
            <p className="text-lg text-green-900/80 leading-relaxed">
              I constantly explore new technologies and design trends to fuel my
              growth. I find inspiration in both code and design, always seeking
              ways to bridge these two worlds ⋆˙⟡
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex gap-4 items-center">
              <h2 className="text-3xl font-semibold text-green-900/70">02</h2>
              <h3 className="text-2xl font-medium text-green-900">
                development ethos
              </h3>
            </div>
            <p className="text-lg text-green-900/80 leading-relaxed">
              Rooted in my design background, I approach development with a
              focus on user experience and visual aesthetics. Every line of code
              is written with purpose and care.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex gap-4 items-center">
              <h2 className="text-3xl font-semibold text-green-900/70">03</h2>
              <h3 className="text-2xl font-medium text-green-900">
                outside of office
              </h3>
            </div>
            <p className="text-lg text-green-900/80 leading-relaxed">
              You&rsquo;ll find me exploring new cafes, reading design books, or
              working on side projects. I&rsquo;m also a casual gamer who enjoys
              Nintendo games ฅ՞•ﻌ•՞ฅ
            </p>
          </div>
        </div>
      </section>

      {/* Instagram Grid Section */}
      <section className="w-full container px-32 pb-32">
        <h2 className="text-2xl font-medium text-green-900 mb-16">
          saeyoung in the wild ˙✧˖°📷 ༘ ⋆｡ ˚
        </h2>
        <div className="grid grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <div
              key={index}
              className="aspect-square rounded-3xl border border-green-900 overflow-hidden"
            >
              <Image
                src={`/images/life/${index}.jpg`}
                alt={`Life moment ${index}`}
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Interests Section */}
      <section className="w-full container px-32 pb-32">
        <h2 className="text-2xl font-medium text-green-900 mb-16">
          Core Values
        </h2>
        <div className="grid grid-cols-3 gap-16">
          <div className="flex flex-col gap-6">
            <div className="flex gap-4 items-center">
              <h2 className="text-3xl font-semibold text-green-900/70">01</h2>
              <h3 className="text-2xl font-medium text-green-900">Reading</h3>
            </div>
            <ul className="flex flex-col gap-4">
              <li className="text-lg text-green-900/80">
                Clean Code by Robert C. Martin ↗
              </li>
              <li className="text-lg text-green-900/80">
                Refactoring UI by Adam Wathan ↗
              </li>
              <li className="text-lg text-green-900/80">
                Design of Everyday Things by Don Norman ↗
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex gap-4 items-center">
              <h2 className="text-3xl font-semibold text-green-900/70">02</h2>
              <h3 className="text-2xl font-medium text-green-900">Listening</h3>
            </div>
            <ul className="flex flex-col gap-4">
              <li className="text-lg text-green-900/80">Syntax.fm ↗</li>
              <li className="text-lg text-green-900/80">React Podcast ↗</li>
              <li className="text-lg text-green-900/80">ShopTalk Show ↗</li>
            </ul>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex gap-4 items-center">
              <h2 className="text-3xl font-semibold text-green-900/70">03</h2>
              <h3 className="text-2xl font-medium text-green-900">Learning</h3>
            </div>
            <ul className="flex flex-col gap-4">
              <li className="text-lg text-green-900/80">Next.js ↗</li>
              <li className="text-lg text-green-900/80">TypeScript ↗</li>
              <li className="text-lg text-green-900/80">Framer Motion ↗</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
