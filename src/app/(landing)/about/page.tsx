import Image from 'next/image';

export default function About() {
  return (
    <main className="flex w-full flex-col items-center overflow-x-hidden">
      <section className="mt-[80px] px-32  max-w-[1400px] w-full container text-green-900 h-[calc(100vh-80px)]]">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl">
            {/* TODO: fix this */}
            I design and build
            <br />
            like a <span className="font-title">builder</span>.
          </h1>
          <Image
            src={'/images/about/about-hero.png'}
            alt="about hero"
            width={100}
            height={100}
          />
        </div>
        <aside>
          <p>
            A UI developer with a design foundation, focused on <br />
            delivering meaningful and impactful experiences
          </p>
        </aside>
        <div>image here</div>
      </section>
    </main>
  );
}
