"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Signin from "./Signin";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("intro");
  const [showsignin, setShowsignin] = useState(false); // State to toggle SignIn modal

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["intro", "customization", "about", "contact"];
      for (let i = 0; i < sections.length; i++) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveLink(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const navLinks = [
    { id: "intro", label: "Home" },
    { id: "customization", label: "Customization" },
    { id: "about", label: "About us" },
    { id: "contact", label: "Contact" },
  ];



  return (
    <header className="fixed top-0 left-0 w-full py-2 z-50 bg-white shadow-md">
      <nav className="relative max-w-7xl w-full flex flex-wrap lg:grid lg:grid-cols-12 basis-full items-center px-4 md:px-6 lg:px-8 mx-auto">
        {/* Logo */}
        <div className="lg:col-span-3 flex items-center">
          <a className="flex-none rounded-xl text-xl inline-block font-semibold text-current" href="#intro">
            <Image src="/shirtfy.png" alt="Shirt-Fy Logo" width={112} height={48} />
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden ms-auto">
          <button
            type="button"
            className="flex justify-center items-center text-sm font-semibold rounded-xl border border-orange-600 bg-orange-600 text-white hover:bg-orange-700 focus:bg-orange-600 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <svg className="size-5" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M18 6L6 18" />
                <path d="M6 6l12 12" />
              </svg>
            ) : (
              <svg className="size-5" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>

        {/* Nav Links */}
        <div className={`w-full lg:block lg:w-auto lg:order-2 lg:col-span-6 ${isMenuOpen ? "block" : "hidden"}`}>
          <div className="flex flex-col gap-4 mt-5 lg:flex-row lg:justify-center lg:items-center lg:gap-x-7 lg:mt-0">
            {navLinks.map((link) => (
              <div key={link.id}>
                <button
                  onClick={() => scrollToSection(link.id)}
                  className={`relative inline-block text-black dark:text-black transition hover:text-orange-500 ${
                    activeLink === link.id
                      ? "before:absolute before:bottom-0.5 before:left-0 before:h-1 before:w-full before:bg-orange-400"
                      : ""
                  }`}
                >
                  {link.label}
                </button>
              </div>
            ))}

            {/* Mobile Sign In */}
            <button className="py-2 px-4 text-sm font-medium rounded-xl border border-transparent bg-orange-600 text-white hover:bg-orange-700 transition lg:hidden" onClick={() => setShowsignin(true)}>
              Sign in
            </button>
          </div>
        </div>

        {/* Desktop Sign In */}
        <div className="hidden lg:flex items-center ms-auto lg:ps-6 lg:order-3 lg:col-span-3">
          <button className="py-2 px-4 text-sm font-medium rounded-xl border border-transparent bg-orange-600 text-white hover:bg-orange-700 transition" onClick={() => setShowsignin(true)}>
            Sign in
          </button>
        </div>
      </nav>
      {/* Sign In Modal */}
      {showsignin && <Signin setShowsignin={setShowsignin} />}
    </header>
  );
};

export default Navbar;
