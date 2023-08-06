'use client'
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";

import Image from "next/image";
import dp from "../public/106841205.jpeg"

type Props = {};

function Hero({ }: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi There",
      "I am a Full-Stack Developer"
    ],
   
    delaySpeed: 2000

  })

  const [text2, count2] = useTypewriter({
    words: [
      "Welcome to my corner of the internet!",
      "I'm thrilled to have you here."
     
      
    ],
    loop: true,
    delaySpeed: 2000
  })
  return <div className=" h-screen flex flex-col   space-y-8 items-center justify-center  text-center overflow-hidden border  " >

    <Image
      src={dp}
      alt="dp"
      className=" h-[150px] w-[150px] rounded-full relative z-0 mx-auto object-cover "
    />
    <h1 className="text-4xl font-bold font-mono " >Tejas Bhatt</h1>
    <h1 className="text-2xl font-bold font-mono" >{text}</h1>
    <p className="text-xl font-bold font-sans" >{text2}</p>

  </div>;
}

export default Hero;
