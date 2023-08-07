'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import logo from "../public/pngwing.com.png"
import { motion } from "framer-motion"
import Link from 'next/link'

type Props = {}

const variants = {
    open: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 1, // Adjust the animation duration as needed
            ease: "easeInOut",
        },
    },
    closed: {
        opacity: 0,
        x: "-100%",
        transition: {
            duration: 1, // Adjust the animation duration as needed
            ease: "easeInOut",
        },
    },

};


const Header = (props: Props) => {
    const [isNavOpen, setIsNavOpen] = React.useState(false);

    const variants = {
        open: { opacity: 1, x: 0 },
        closed: { opacity: 0, x: "-100%" },
    }

    return (
        <header className='top-0 sticky' id='home'>
            <div className='flex items-center justify-between  py-4' >
                <motion.a
                    initial={{
                        x: -100,
                        opacity: 0,
                        scale: 0.6,
                    }}
                    animate={{
                        x: 0,
                        opacity: 1,
                        scale: 1
                    }}
                    transition={{
                        duration: 1
                    }}
                    href="/">
                    <Image src={logo} alt="logo" className='w-7 h-7 sm:h-14 sm:w-14 ml-2 ' />
                </motion.a>

                <motion.nav
                    initial={{
                        y: -100,
                        opacity: 0,
                        scale: 0.6,
                    }}
                    animate={{
                        y: 0,
                        opacity: 1,
                        scale: 1
                    }}
                    transition={{
                        duration: 1
                    }}
                >
                    <section className="MOBILE-MENU flex lg:hidden" >
                        <div
                            className="HAMBURGER-ICON space-y-2 mr-3 "
                            onClick={() => setIsNavOpen((prev) => !prev)}
                        >
                            <span className="block h-0.5 w-8 animate-pulse bg-gray-200"></span>
                            <span className="block h-0.5 w-8 animate-pulse bg-gray-200"></span>
                            <span className="block h-0.5 w-8 animate-pulse bg-gray-200"></span>
                        </div>
                        <motion.div
                            initial="closed"
                            animate={isNavOpen ? "open" : "close"}
                            variants={variants}
                            className={`${isNavOpen ? "showMenuNav" : "hideMenuNav"} z-10 `} >
                            <div
                                className="absolute top-0 right-0 px-8 py-8 bg-transparent  "
                                onClick={() => setIsNavOpen(false)}
                            >
                                <svg
                                    className="h-8 w-8 text-gray-300"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <line x1="18" y1="6" x2="6" y2="18" />
                                    <line x1="6" y1="6" x2="18" y2="18" />
                                </svg>
                            </div>
                            <ul

                                className="flex flex-col items-center justify-between min-h-[250px] ">
                                <li

                                    className="border-b border-gray-400 my-8  uppercase">
                                    <Link  href="/"><h1>Home</h1></Link>
                                </li> <li className="border-b border-gray-400 my-8  uppercase">
                                    <Link href="#about"><h1>About</h1></Link>
                                </li>
                                <li className="border-b border-gray-400 my-8  uppercase">
                                    <Link href="#experience"><h1>Experience</h1></Link>
                                </li>
                                <li className="border-b border-gray-400 my-8  uppercase">
                                    <Link href="#skills"><h1>Skills</h1></Link>
                                </li>
                                <li className="border-b border-gray-400 my-8  uppercase">
                                    <Link href="#projects"><h1>Projects</h1></Link>
                                </li>
                                <li className="border-b border-gray-400 my-8  uppercase">
                                    <Link href="#contact"><h1>Contact</h1></Link>
                                </li>
                            </ul>
                        </motion.div>
                    </section>
                    <ul className="DESKTOP-MENU hidden space-x-8 lg:flex mr-5 ">
                        <li>
                            <Link href="#hero">Home</Link>
                        </li>
                        <li>
                            <Link href="#about">About</Link>
                        </li>
                        <li>
                            <Link href="#experience">Experience</Link>
                        </li>
                        <li>

                            <Link href="#skills">Skills</Link>
                        </li>
                        <li>
                            <Link href="#portfolio">Projects</Link>
                        </li>
                        <li>
                            <Link href="#contact">Contact</Link>
                        </li>
                    </ul> <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        // background:inherit;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
                </motion.nav>
            </div>
        </header>
    )
}

export default Header