'use client'
import React from 'react'
import { motion } from "framer-motion"
import Image from 'next/image'
import ggg from "../../public/next.svg"


type Props = {}

function Project({ }: Props) {
    const projects = [1, 2, 3, 4]
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}

            className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center z-0 '
        >

            <h3 className='absolute top-11 md:top-3 uppercase tracking-[20px] text-gray-400 text-2xl' >
                Projects
            </h3>
            <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7Ab0A] ' >
                {
                    projects.map((project, i) => (
                        <>
                            <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen '>
                                <Image src={ggg} alt='das' />
                                <div className='space-y-10 px-0 md:px-10 max-w-6xl ' >
                                    <h4 className='text-2xl md:text-4xl font-sans text-center  ' >case studdy{i + 1} {projects.length} kahkbh</h4>
                                </div>
                                <p className='text-lg text-center md:text-left ' >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, cum amet, voluptas sint cupiditate vel architecto eligendi sit inventore nam, iure quibusdam? Atque voluptas aliquam accusantium illum dolore. Sint, eaque.</p>
                            </div>



                        </>
                    ))}

            </div>

            <div className='card w-full absolute top-[30%] left-0 h-[500px] -skew-y-12 ' >

            </div>

        </motion.div>
    )
}

export default Project