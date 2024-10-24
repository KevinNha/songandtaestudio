"use client";
import { MD_BREAKPOINT } from "@/const/const";
import { Raleway } from "next/font/google";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const raleway = Raleway({ weight: ["400", "600"], subsets: ["latin"] });

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [wasNavOpen, setWasNavOpen] = useState(false);

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

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isNavOpen, wasNavOpen]);

  return (
    <nav className={`${raleway.className}`}>
      <div className="flex justify-between items-center">
        <Link
          href="/"
          className={`w-5/6 text-[#111111] text-xl md:text-2xl ${
            isNavOpen ? "text-[#fffff4]" : ""
          }`}
        >
          <span>SONG AND TAE STUDIO</span>{" "}
          <span className="text-[#A1A1A1]">pet/family portraits</span>
        </Link>

        <button
          className="md:hidden text-3xl text-[#111111]"
          onClick={toggleMenu}
        >
          ☰
        </button>

        <ul
          className={`md:text-xl text-[#A1A1A1] hover:*:text-[#111111] *:transition-colors *:duration-200 hidden md:flex space-x-4 ${
            isNavOpen ? "hidden" : ""
          }`}
        >
          <li>
            <Link
              href="/"
              className={`${pathname === "/" ? "text-[#111111]" : ""}`}
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              href="/gallery"
              className={`${pathname === "/gallery" ? "text-[#111111]" : ""}`}
            >
              GALLERY
            </Link>
          </li>
          <li>
            <Link
              href="/catalog"
              className={`${pathname === "/catalog" ? "text-[#111111]" : ""}`}
            >
              PRICE
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={`${pathname === "/about" ? "text-[#111111]" : ""}`}
            >
              ABOUT
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={`${pathname === "/contact" ? "text-[#111111]" : ""}`}
            >
              CONTACT
            </Link>
          </li>
        </ul>
      </div>

      {/* Full-screen menu overlay */}
      <div
        className={`fixed inset-0 bg-[#111111] text-[#A7A4A4] flex flex-col justify-center items-center text-center transition-all duration-400 ease-in-out ${
          isNavOpen ? "opacity-100" : "invisible opacity-0"
        }`}
      >
        <Link
          href="/"
          className={`absolute top-0 left-0 dynamic-spacing text-xl md:text-2xl ${
            isNavOpen ? "text-[#fffff4]" : ""
          }`}
        >
          <div className="relative w-5/6 text-start">
            <span>SONG AND TAE STUDIO</span>{" "}
            <span className="text-[#A1A1A1]">pet/family portraits</span>
          </div>
        </Link>
        <button
          className="absolute top-0 right-0 dynamic-spacing text-3xl hover:text-[#fffff4] focus:outline-none *:transition-colors *:duration-200"
          onClick={toggleMenu}
        >
          ✕
        </button>
        <div className="text-3xl space-y-10">
          <Link
            href="/"
            onClick={toggleMenu}
            className="block hover:text-[#fffff4]"
          >
            HOME
          </Link>
          <Link
            href="/gallery"
            onClick={toggleMenu}
            className="block hover:text-[#fffff4]"
          >
            GALLERY
          </Link>
          <Link
            href="/catalog"
            onClick={toggleMenu}
            className="block hover:text-[#fffff4]"
          >
            PRICE
          </Link>
          <Link
            href="/about"
            onClick={toggleMenu}
            className="block hover:text-[#fffff4]"
          >
            ABOUT
          </Link>
          <Link
            href="/contact"
            onClick={toggleMenu}
            className="block hover:text-[#fffff4]"
          >
            CONTACT
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
