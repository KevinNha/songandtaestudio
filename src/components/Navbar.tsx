'use client';
import { MD_BREAKPOINT } from '@/const/const';
import { Raleway } from 'next/font/google';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

const raleway = Raleway({ weight: ['400', '600'], subsets: ['latin'] });

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [wasNavOpen, setWasNavOpen] = useState(false);

  const routes = [
    {
      path: '/',
      name: 'HOME',
    },
    {
      path: '/gallery',
      name: 'GALLERY',
    },
    {
      path: '/catalog',
      name: 'PRICE',
    },
    {
      path: '/about',
      name: 'ABOUT',
    },
    {
      path: '/review',
      name: 'TESTIMONIALS',
    },
    {
      path: '/contact',
      name: 'CONTACT',
    },
  ];
  const pageTitle = 'SONG AND TAE STUDIO';
  const pageSubtitle = 'vancouver artists';

  const pathname = usePathname();

  const toggleMenu = () => {
    setIsNavOpen(!isNavOpen);
    setWasNavOpen(!isNavOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= MD_BREAKPOINT) {
        if (isNavOpen) {
          setIsNavOpen(false);
        }
      } else {
        if (wasNavOpen) {
          setIsNavOpen(true);
        }
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isNavOpen, wasNavOpen]);

  return (
    <nav className={`${raleway.className}`}>
      <div className="flex justify-between gap-6">
        <Link
          href="/"
          className={`w-fit text-[#111111] text-xl md:text-2xl ${
            isNavOpen ? 'text-[#fffff4]' : ''
          }`}
        >
          <span>{pageTitle}</span>{' '}
          <span className="text-2xl text-[#A1A1A1]">{pageSubtitle}</span>
        </Link>

        <button
          className="md:hidden text-3xl text-[#111111]"
          onClick={toggleMenu}
        >
          ☰
        </button>

        <div
          className={`md:text-xl text-[#A1A1A1] hover:*:text-[#111111] *:transition-colors *:duration-200 hidden md:w-fit justify-end md:flex md:flex-wrap space-x-4`}
        >
          {routes.map((route, index) => (
            <span key={index}>
              <Link
                href={route.path}
                className={`${pathname === route.path ? 'text-[#111111]' : ''}`}
              >
                {route.name}
              </Link>
            </span>
          ))}
        </div>
      </div>

      {/* Full-screen menu overlay */}
      <div
        className={`fixed inset-0 bg-[#111111] text-[#A7A4A4] flex flex-col justify-center items-center text-center transition-all duration-400 ease-in-out ${
          isNavOpen ? 'opacity-100' : 'invisible opacity-0'
        }`}
      >
        <Link
          href="/"
          className={`absolute top-0 left-0 dynamic-spacing text-xl md:text-2xl ${
            isNavOpen ? 'text-[#fffff4]' : ''
          }`}
        >
          <div className="relative w-5/6 text-start">
            <span>{pageTitle}</span>{' '}
            <span className="text-2xl text-[#A1A1A1]">{pageSubtitle}</span>
          </div>
        </Link>
        <button
          className="absolute top-0 right-0 dynamic-spacing text-3xl hover:text-[#fffff4] focus:outline-none *:transition-colors *:duration-200"
          onClick={toggleMenu}
        >
          ✕
        </button>
        <div className="text-3xl space-y-10">
          {routes.map((route, index) => (
            <Link
              key={index}
              href={route.path}
              onClick={toggleMenu}
              className="block hover:text-[#fffff4]"
            >
              {route.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
