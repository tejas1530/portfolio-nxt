'use client'
import React from 'react'
import { motion } from "framer-motion"
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/20/solid'
import { MapPinIcon } from '@heroicons/react/24/solid'
import Form from '@/components/Form'
type Props = {}

function Contact({ }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row 
    max-w-full px-10 justify-evenly mx-auto items-center z-0
' >
            <h3 className='absolute top-0 md:top-10 uppercase tracking-[20px] text-gray-400 text-2xl' >
                Contact
            </h3>

            <div className='fex flex-col space-y-5'>
                <h4 className='text-3xl sm:text-4xl mb-2 font-semibold text-center mt-20  text-[#cccccc] ' >
                    I have got what you need.{" "}
                </h4>

                <h3 className='text-4xl sm:text-5xl text-center text-[#FE8040] font-semibold ' > {`Let's Talk`}</h3>
                <div className='md:space-y-10 space-y-4 ' >
                    <div className='flex items-center justify-center space-x-5  ' >
                        <PhoneIcon className='h-7 w-7 animate-pulse' />
                        <p className='text-2xl' >+91-8275286130</p>

                    </div>
                    <div className='flex items-center justify-center space-x-5  ' >
                        <EnvelopeIcon className='h-7 w-7 animate-pulse' />
                        <p className='text-2xl'> cashubhamshah@gmail.com </p>
                    </div>
                    <div className='flex items-center justify-center space-x-5  ' >
                        <MapPinIcon className='h-7 w-7 animate-pulse' />
                        <p className='text-2xl'> Mumbai </p>
                    </div>

                    <Form />
                </div>
            </div>
        </motion.div>
    )
}

export default Contact