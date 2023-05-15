'use client';

import { useThrottle } from '@/hooks/useThrottle';
import Link from 'next/link';

import React, { useEffect, useState } from 'react';

const navs = ['Home', 'Blog'];

export default function Header() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = useThrottle(() => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    console.log(scrollPosition);
  }, 20);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <header
      className={`w-full sticky top-0 z-10 transition-all duration-200 ${
        scrollPosition > 50 && 'bg-white shadow-lg'
      }`}
    >
      <div className="max-w-screen-md flex mx-auto px-6 py-6 justify-between bg-white">
        <b className="text-yellow-400 text-3xl">Siklog</b>
        <nav className="flex gap-6 text-xl">
          {navs.map((nav) => (
            <Link href={'/'} key={nav}>
              {nav}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
