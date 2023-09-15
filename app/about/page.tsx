"use client";

import Image from "next/image";
import Pc from "../../public/ica.png";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
// import groq from "groq";
// import { PageInfo } from "@/typing";
// import { sanityClient, urlFor } from "@/sanity";

type Props = { };

const About = (props: Props) => {
	return (
		<div
			className="flex flex-col relative h-screen text-center md:text-left md:flex-row 
    max-w-7xl px-10 justify-evenly mx-auto items-center 
    "
		>
			<h3 className=" absolute top-5  uppercase tracking-[20px] text-gray-400 text-2xl ">
				About
			</h3>
			<motion.div
				className="-mb-20 md:mb-0 flex-shrink-0 w-40 h-40 object-cover 
                md:w-64 md:h-64 xl:w-[300px] xl:h-[300px] "
				initial={{
					x: -200,
					opacity: 0,
				}}
				transition={{
					duration: 1.3,
				}}
				whileInView={{
					x: 0,
					opacity: 1,
				}}
				viewport={{
					once: true,
				}}
			>
				<Image
					width={150}
					height={150}
					src={Pc}
					alt="dpd"
					className=" h-[150px] w-[150px]  sm:h-64 sm:w-64 rounded-full  z-1 mx-auto object-cover "
				/>
			</motion.div>

			<div className="space-y-10 px-0 md:px-10">
				<h4 className="text-xl sm:text-4xl  py-1 font-semibold tracking-[10px] font-sans text-[#FE8040]  ">
					Here is a little background
				</h4>

			
					<p
						
						className="text-sm sm:text-xl sm:tracking-widest text-[#cccccc]  "
					>
					Hello I am Shubahm Shah a Chartered Accountant (CA) with a penchant for precision and a zeal for excellence. Welcome to my digital domain, where financial data transforms into strategic insights and opportunities.Armed with a solid foundation in finance, my professional journey has been a tapestry woven with diverse experiences and continuous learning. With a knack for unraveling intricate financial landscapes, I have cultivated an acute attention to detail and a profound understanding of the dynamic world of finance and taxation.
						<span className=" hidden xl:block">
						Over the course of my career, I have had the privilege of collaborating with a wide spectrum of clients, ranging from startups to multinational enterprises. Each interaction has bestowed upon me a unique vantage point and a repository of knowledge that I am eager to share. My aim is to demystify complexities, empower informed decision-making, and be a driving force behind your financial achievements.
						</span>
					</p>
				
			</div>
		</div>
	);
};

export default About;
