'use client'
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';

type Props = {}

function Headers({ }: Props) {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
    
<header className="bg-gray-800 text-white sticky top-0 ">
      <div className="flex justify-between items-center p-4">
        <div className="text-xl font-semibold">Your Logo</div>
        <button
          className="md:hidden text-xl"
          onClick={toggleMenu}
        >
          ☰
        </button>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden">
          <ul className="p-4">
            <li>
              <Link href="/">
                <h1 className="block py-2">Home</h1>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <h1 className="block py-2">About</h1>
              </Link>
            </li>
            <li>
              <Link href="/experience">
                <h1 className="block py-2">Experience</h1>
              </Link>
            </li>
            <li>
              <Link href="/Skills">
                <h1 className="block py-2">Skills</h1>
              </Link>
            </li>
            <li>
              <Link href="/projects">
                <h1 className="block py-2">Projects</h1>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <h1 className="block py-2">Contact</h1>
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>

  )
}

export default Headers