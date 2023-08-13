'use client'
import React, { useState , useEffect} from 'react'
// import groq from 'groq'
import { motion } from "framer-motion"
import ExperienceCard from '../../components/ExperienceCard'
import ExperienceCard1 from '@/components/ExperienceCard1'
// import { Experience } from '@/typing'
// import { sanityClient } from '@/sanity'
type Props = {
   
}

const WorkExperience = (props: Props) => {
  
    
 
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}

            className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row 
            max-w-full px-10 justify-evenly mx-auto items-center 
        '>
            <h3 className='absolute top-6  md:top-0 uppercase tracking-[20px] text-gray-400 text-2xl' >
                Experience
            </h3>
            <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x  snap-mandatory xl:mt-40 ' >
               
               
                    <ExperienceCard1/>
                    <ExperienceCard  />

               
            </div>
        </motion.div>
    )

    }

export default WorkExperience

