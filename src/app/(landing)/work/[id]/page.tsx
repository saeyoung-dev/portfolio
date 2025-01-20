import Image from 'next/image';

export default function WorkDetail() {
  return (
    <main className="flex w-full flex-col items-center pt-32">
      {/* TODO Hero Section */}
      <section className="w-full container px-32 pb-32">
        <div className="flex flex-col gap-8">
          <h1 className="text-6xl text-green-900">Bread & Butter</h1>
          <h2 className="text-2xl font-medium text-green-900">
            요리 서적 전문 쇼핑몰 | Culinary Book Online Shop
          </h2>
          <div className="flex w-full justify-between gap-16">
            <p className="text-lg text-green-900 leading-relaxed max-w-3xl">
              During a team project, we built Bread & Butter, an online
              bookstore specializing in culinary books. As the backend developer
              and project manager, I led the development of core features and
              coordinated the team to ensure successful delivery of the project.
            </p>
            <div className="flex gap-4">
              <div className="flex flex-col gap-6 text-sm text-green-900/70">
                <div>
                  <h3 className="font-semibold mb-1">ROLE:</h3>
                  <p>Backend Developer & Project Manager</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">TEAM:</h3>
                  <p>6 members (3 FE, 3 BE)</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">TYPE:</h3>
                  <p>Team Project</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm text-green-900/70">
            <span>Skip ↓</span>
            <button className="hover:text-green-900">to Key Features</button>
          </div>
        </div>
      </section>

      {/* Main Image */}
      <section className="w-full container px-32 pb-32">
        <Image
          src="/images/work-1.png"
          alt="Project Main"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto rounded-3xl border border-green-900"
        />
      </section>

      {/* Challenge Section */}
      <section className="w-full container px-32 pb-32">
        <div className="flex flex-col gap-8 max-w-3xl">
          <h3 className="text-sm font-semibold text-green-900/70">
            THE CHALLENGE
          </h3>
          <h4 className="text-3xl font-medium text-green-900">
            How can we create a specialized e-commerce platform focused on
            culinary books while ensuring a seamless shopping experience?
          </h4>
          <p className="text-lg text-green-900 leading-relaxed">
            We aimed to develop a comprehensive online bookstore dedicated to
            cooking enthusiasts, with robust features for both customers and
            administrators.
          </p>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="w-full container px-32 pb-32">
        <div className="flex flex-col gap-12">
          <h3 className="text-sm font-semibold text-green-900/70">
            TECH STACK
          </h3>
          <div className="grid grid-cols-3 gap-16">
            <div className="flex flex-col gap-4">
              <h4 className="text-2xl font-medium text-green-900">Backend</h4>
              <p className="text-lg text-green-900/80 leading-relaxed">
                Node.js, Express, MongoDB, JWT Authentication
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-2xl font-medium text-green-900">Frontend</h4>
              <p className="text-lg text-green-900/80 leading-relaxed">
                HTML, CSS, JavaScript
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-2xl font-medium text-green-900">
                Deployment
              </h4>
              <p className="text-lg text-green-900/80 leading-relaxed">
                Vercel
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="w-full container px-32 pb-32" id="key-features">
        <div className="flex flex-col gap-12">
          <h3 className="text-sm font-semibold text-green-900/70">
            KEY FEATURES
          </h3>
          <div className="grid grid-cols-2 gap-16">
            <Image
              src="/images/work-1.png"
              alt="Features Preview"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto rounded-3xl border border-green-900"
            />
            <div className="flex flex-col gap-12">
              <div className="flex flex-col gap-4">
                <h5 className="text-2xl font-medium text-green-900">
                  User Management
                </h5>
                <p className="text-lg text-green-900/80 leading-relaxed">
                  회원가입/로그인, 비회원 주문 조회, 마이페이지 기능
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <h5 className="text-2xl font-medium text-green-900">
                  Shopping Experience
                </h5>
                <p className="text-lg text-green-900/80 leading-relaxed">
                  장바구니, 주문하기, 결제 시스템 구현
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <h5 className="text-2xl font-medium text-green-900">
                  Admin Dashboard
                </h5>
                <p className="text-lg text-green-900/80 leading-relaxed">
                  상품 관리, 주문 관리, 회원 관리 기능
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
