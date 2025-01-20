import Link from 'next/link';

export default function Footer() {
  return (
    <footer className=" w-full text-green-900 justify-center flex">
      <div className="flex justify-between items-end container w-full max-w-[1400px] px-10 py-16">
        <section>
          <div className="w-12">{/* TODO image here */}</div>
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl font-medium">{"Let's connect!"}</h2>
            <Link
              href={'mailto:saeyoung.dev@gmail.com'}
              className="text-sm hover:opacity-50 transition-opacity"
            >
              saeyoung.dev@gmail.com
            </Link>
          </div>
        </section>
        <section className="flex gap-8 items-center">
          <Link
            href="https://www.linkedin.com/in/saeyoungchoi"
            target="_blank"
            className="ttext-base font-medium hover:opacity-50 transition-opacity"
          >
            linkedin
          </Link>
          <Link
            href="https://github.com/saeyoung-dev"
            target="_blank"
            className="ttext-base font-medium hover:opacity-50 transition-opacity"
          >
            github
          </Link>
        </section>
      </div>
    </footer>
  );
}
