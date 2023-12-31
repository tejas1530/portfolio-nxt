"use client";

import { Cursor, useTypewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";
// import { sanityClient, urlFor } from "@/sanity";
// import groq from "groq";
import React, { useState, useEffect } from "react";
// import { PageInfo, Socials } from "@/typing";

import Image from "next/image";
// import dp from "../../public/106841205.jpeg"
import dd from "../../public/imageedit_1_3669222998.png"


type page = {
	/* ... */
};

type GlobalProps = {
	product: page[];
};
type Props = {};

function Hero({}: Props) {
	const [text, count] = useTypewriter({
		words: ["I am a Chartered Accountant"],

		delaySpeed: 2000,
	});

	const [text2, count2] = useTypewriter({
		words: [
			"Welcome to my corner of the internet!",
			"I'm thrilled to have you here.",
		],
		loop: true,
		delaySpeed: 2000,
	});
	return (
		<section className="sm:flex sm:justify-start sm:items-start">
			<motion.div
				initial={{
					opacity: 0,
					x: -500,
					scale: 0.5,
				}}
				animate={{
					x: 0,
					opacity: 1,
					scale: 1,
				}}
				transition={{
					duration: 1.2,
					ease: "easeInOut",
				}}
				className=" h-screen flex flex-col   space-y-8 items-center justify-center  text-center overflow-hidden     
    "
			>
				<Image
					width={150}
					height={150}
					src={dd}
					alt="dp"
					className=" h-[150px] w-[150px]  sm:h-60 sm:w-60 rounded-full  z-1 mx-auto object-cover "
				/>

				<h1 className="text-4xl font-bold font-mono text-[#FE8040] ">Shubham Shah</h1>
				<h1 className="text-2xl font-bold font-mono text-[#cccccc] ">{text}</h1>
				<p className="text-xl font-bold font-sans text-[#cccccc] ">{text2}</p>
				<div className="space-x-3">
					<SocialIcon 
						url={
							"https://www.linkedin.com/in/ca-shubham-shaha-365a90144"
						}
						fgColor="white"
						bgColor="transparent"
					/>
{/* 
					<SocialIcon
						url="https://github.com/tejas1530"
						fgColor="white"
						bgColor="transparent"
					/> */}
					<SocialIcon
						fgColor="white"
						bgColor="transparent"
						url="https://instagram.com/shubhamshaha867?igshid=MzRlODBiNWFlZA=="
					/>
				</div>
			</motion.div>
		</section>
	);
}

export default Hero;
