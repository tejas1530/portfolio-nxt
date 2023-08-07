'use client'
import React from 'react'
import Image from 'next/image'
import Pc from "../public/IMG-1140-modified.png"
import { motion } from 'framer-motion'
type Props = {}

const About = (props: Props) => {
    return (
        <div className='flex flex-col relative h-screen text-center md:text-left md:flex-row 
    max-w-7xl px-10 justify-evenly mx-auto items-center 
    ' >

            <h3 className=' absolute top-10 md:top-24 uppercase tracking-[20px] text-gray-400 text-2xl ' >About</h3>
            <motion.div
                className='-mb-20 md:mb-0 flex-shrink-0 w-40 h-40 object-cover 
                md:w-64 md:h-64 xl:w-[300px] xl:h-[300px] '
                initial={{
                    x: -200,
                    opacity: 0

                }}
                transition={{
                    duration: 1.3
                }}
                whileInView={{
                    x: 0, opacity: 1
                }}
                viewport={{
                    once: true
                }}

            >
                <Image 
                    src={Pc}
                    alt='pic'

                />
            </motion.div>

            <div className='space-y-10 px-0 md:px-10' >
                <h4 className='text-xl sm:text-4xl  py-1 font-semibold tracking-[10px] font-sans ' >
                    Here is a little background
                </h4>
                <p className='text-sm sm:text-xl sm:tracking-widest ' >
                    Hello, I am  Tejas , a passionate mechanical engineer with a newfound love for the dynamic world of full-stack development. With a solid foundation in engineering principles and a drive for continuous learning, I have embarked on a journey to bridge the gap between hardware and software.
                    <span className=' hidden xl:block' >
                    My transition into full-stack development has been fueled by a desire to create comprehensive solutions that seamlessly integrate both mechanical and digital realms. By combining my technical expertise in mechanical engineering with the power of web technologies, I am able to craft interactive and user-centric applications that transcend traditional boundaries.
                    </span>
                    Join me on this exciting cross-disciplinary journey as I harness the synergy between mechanics and code to build a future where technology knows no bounds. Let us connect and explore the limitless possibilities together.
                </p>
            </div>
        </div>
    )
}

export default About