'use client';

import { useThrottle } from '@/hooks/useThrottle';
import Link from 'next/link';

import React, { useEffect, useState } from 'react';

const navs = [
  {
    name: 'Home',
    label: 'Home link',
    path: '/',
  },
  {
    name: 'Blog',
    label: 'Blog link',
    path: '/blog',
  },
  {
    name: 'Category',
    label: 'Category link',
    path: '/category',
  },
];

export default function Header() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = useThrottle(() => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    // console.log(scrollPosition);
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
      <nav className="max-w-screen-md flex mx-auto px-6 py-6 justify-between items-center bg-white">
        <Link
          href={'/'}
          aria-label="main page link"
          className="text-yellow-400 text-3xl cursor-pointer font-bold"
        >
          Siklog
        </Link>
        <ul className="flex gap-3 md:gap-6 text-base md:text-xl">
          {navs.map(({ name, label, path }) => (
            <li key={name}>
              <Link
                href={path}
                aria-label={label}
                className="md:hover:text-yellow-400 md:hover:scale-125 md:hover:font-bold transition-all duration-500"
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
