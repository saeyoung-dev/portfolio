'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Header() {
  const navBtnRef = useRef<HTMLLIElement[]>([]);

  useEffect(() => {
    // 일반 네비게이션 링크 애니메이션
    const onNavLinkEnter = (element: HTMLLIElement) => {
      gsap.killTweensOf(element);

      const link = element.querySelector('a');
      const text = link?.textContent ?? '';

      // 오버레이 텍스트 생성
      const overlay = document.createElement('span');
      overlay.textContent = text;
      overlay.className = 'absolute top-0 left-0 opacity-50';
      element.appendChild(overlay);

      gsap
        .timeline()
        .set(overlay, { y: 20, opacity: 0 })
        .to(link, {
          y: -20,
          opacity: 0,
          duration: 0.3,
          ease: 'power2.in',
        })
        .to(overlay, {
          y: 0,
          opacity: 0.5,
          duration: 0.3,
          ease: 'power2.out',
        });
    };

    const onNavLinkLeave = (element: HTMLLIElement) => {
      gsap.killTweensOf(element);

      const link = element.querySelector('a');
      const overlay = element.querySelector('span');

      gsap
        .timeline()
        .to(overlay, {
          opacity: 0,
          duration: 0.2,
          ease: 'power2.out',
          onComplete: () => overlay?.remove(),
        })
        .to(
          link,
          {
            y: 0,
            opacity: 1,
            duration: 0.2,
            ease: 'power2.out',
          },
          '<'
        );
    };

    // 바운드된 이벤트 핸들러 생성
    const boundEnterHandlers = navBtnRef.current.map(
      (link) => () => onNavLinkEnter(link)
    );
    const boundLeaveHandlers = navBtnRef.current.map(
      (link) => () => onNavLinkLeave(link)
    );

    // nav 링크 이벤트 리스너
    navBtnRef.current.forEach((link, index) => {
      if (link) {
        link.addEventListener('mouseenter', boundEnterHandlers[index]);
        link.addEventListener('mouseleave', boundLeaveHandlers[index]);
      }
    });

    return () => {
      navBtnRef.current.forEach((link, index) => {
        if (link) {
          link.removeEventListener('mouseenter', boundEnterHandlers[index]);
          link.removeEventListener('mouseleave', boundLeaveHandlers[index]);
        }
      });
    };
  }, []);

  return (
    <header className="fixed z-30 flex w-full justify-center">
      <div className="flex w-full max-w-[1400px] items-center justify-between px-10 py-5 relative">
        <div className="absolute inset-0 transition-colors duration-300 ease-out nav__bg" />
        <Link href="/" className="relative cursor-pointer">
          {/*TODO Logo here*/} logo
        </Link>
        <nav>
          <ul className="flex gap-8 font-semibold items-center text-green-900">
            <li
              ref={(el: HTMLLIElement): void => {
                navBtnRef.current[0] = el;
              }}
              className="relative cursor-pointer"
            >
              <Link href={'/work'} className="block">
                Work
              </Link>
            </li>
            <li
              ref={(el: HTMLLIElement): void => {
                navBtnRef.current[1] = el;
              }}
              className="relative cursor-pointer"
            >
              <Link href={'/about'} className="block">
                About
              </Link>
            </li>
            <li className="relative px-4 py-3 rounded-full bg-green-900 box-border text-white font-title-medium hover:bg-beige hover:text-green-900 hover:border-green-900 hover:border cursor-pointer transition-all duration-300">
              <Link href="/" className="block">
                Resume
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
