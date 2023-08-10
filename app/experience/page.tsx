'use client'
import React, { useState , useEffect} from 'react'
import groq from 'groq'
import { motion } from "framer-motion"
import ExperienceCard from '../../components/ExperienceCard'
import { Experience } from '@/typing'
import { sanityClient } from '@/sanity'
type Props = {
   
}

const WorkExperience = (props: Props) => {
    const [data, setData] = React.useState<Experience[]>([])

    const fetchData = async () => {
        const data = await getData()
        setData(data)
    }

    React.useEffect(()=>{
        fetchData()
    },[])
    console.log(typeof(data))

    React.useEffect(()=>{
            console.log(data)
    },[data])
    async function getData(){
        const query=groq`
        *[_type=="experience"]{
            ...,
            technologies[]->
        }
        `
        const experience:Experience[]=await sanityClient.fetch(query)
        return experience
    }
 
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}

            className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row 
            max-w-full px-10 justify-evenly mx-auto items-center scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7Ab0A] 
        '>
            <h3 className='absolute top-11 md:top-1 uppercase tracking-[20px] text-gray-400 text-2xl' >
                Experience
            </h3>
            <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x  snap-mandatory xl:mt-40 ' >
               {
                data?.map((experience)=>(
                    <ExperienceCard key={experience._id} data={experience} />
                ))
               }
            </div>
        </motion.div>
    )

}

export default WorkExperience

