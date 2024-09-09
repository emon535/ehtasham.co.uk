"use client"
import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <header className="bg-custom-1000 shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Left Nav Links */}
          <nav className="hidden md:flex space-x-8 text-white font-medium">
            <Link href="/" className="hover:text-custom-900 transition duration-300">
              Home
            </Link>
            <Link target='_blank' href="https://www.linkedin.com/in/ehtashamhaque?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="hover:text-brown-900 transition duration-300">
              Linkedin
            </Link>
            <Link href="/blog" className="hover:text-brown-900 transition duration-300">
              Blog
            </Link>
          </nav>
  
          {/* Center Logo */}
          <div className="text-center  text-white  font-sans">
            <Link href="/" className="hover:text-brown-900 transition duration-300">
                <span className="block text-2xl font-extrabold leading-none">EHTASHAM</span>
                <span className="block text-xl font-medium tracking-wide">HAQUE</span>
            </Link>
            </div>
  
          {/* Right Nav Link */}
          <nav className="hidden md:flex space-x-8  text-white font-medium">
            <Link href="/contact" className="hover:text-brown-900 transition duration-300 border-2 p-2 ">
              Contact
            </Link>
          </nav>
  
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
                />
              </svg>
            </button>
          </div>
        </div>
  
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white px-4 py-4">
            <Link href="/" className="block py-2 text-brown-700 hover:text-brown-900">
              Home
            </Link>
            <Link href="/work" className="block py-2 text-brown-700 hover:text-brown-900">
              Work
            </Link>
            <Link href="/blog" className="block py-2 text-brown-700 hover:text-brown-900">
              Blog
            </Link>
            <Link href="/contact" className="block py-2 text-brown-700 hover:text-brown-900 ">
              Contact
            </Link>
          </div>
        )}
      </header>
    );
  };
  
  export default Header;