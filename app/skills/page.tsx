'use client'
import Skill from '@/components/Skill'
import { motion } from 'framer-motion'
import React from 'react'


type Props = {}

const Skills = (props: Props) => {
  return (
    <motion.div 
    initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{duration:1.5}}
    className=' flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen  justify-center xl:space-y-0 mx-auto items-center ' >
        
         <h1 className='absolute top-11 md:top-2  uppercase tracking-[20px] text-gray-400 text-2xl  ' >Skills</h1>

         <h3 className='absolute top-24 uppercase tracking-wide text-gray-400 text-sm' >
            Hover a skill for current proficiency
         </h3>
         <div className='grid grid-cols-4 gap-5 absolute top-32 ' >
                <Skill/>
                <Skill/>
                <Skill/>
                <Skill/>
                <Skill/>
                <Skill/>
                <Skill/>
                <Skill/>
                <Skill/>
                <Skill/>
               
         </div>
    </motion.div>
  )
}

export default Skills