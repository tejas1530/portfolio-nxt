import Image from 'next/image'
import React from 'react'
import ds from "../public/pngwing.com (1).png"
import { motion } from 'framer-motion'
type Props = {}

const ExperienceCard = (props: Props) => {
    return (

        <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 
            w-[500px] md:w-[600px] xl:w-[700px] snap-center p-10  hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden shadow-sm xl:shadow-xl shadow-white
        ' >
            <motion.div
                initial={{
                    y:-100,
                    opacity:0
                }}
                transition={{
                    duration:1.2
                }}
                whileInView={{
                    opacity:1,y:0
                }}
                viewport={{once:true}}
                className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center ' >
                <Image
                    src={ds}
                    alt='picss'
                />
            </motion.div>

            <div className='px-0 md:px-10' >
                <h4 className='text-4xl font-light ' >Job title</h4>
                <p className='font-bold text-2xl mt-1 ' >company name</p>
                <div className='flex space-x-2 my-2' >
                    <Image className='h-10 w-10 rounded-full'   src={ds} alt='kskak'/>
                </div>
                <p className='uppercase py-5  text-gray-300  ' >started worked .... till now</p>

                <ul className='list-disc space-y-4 ml-5 text-lg ' >
                <li>summary points</li>
                <li>summary points</li>
                <li>summary points</li>
                <li>summary points</li>
                <li>summary points</li>
                </ul>
            </div>
        </article>

    )
}

export default ExperienceCard