"use client";

import Image from "next/image";
import Pc from "../../public/IMG-1140-modified.png";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import groq from "groq";
import { PageInfo } from "@/typing";
import { sanityClient, urlFor } from "@/sanity";

type Props = {};

const About = (props: Props) => {
	const [data1, setData1] = React.useState<PageInfo[]>();
	const fetchData1 = async () => {
		const data1 = await getData1();
		setData1(data1);
	};
	React.useEffect(() => {
		// fetchData();
		fetchData1();
	}, []);
	async function getData1() {
		const query1 = groq`
  *[_type=="pageInfo"]
  `;
		const pageInfo: PageInfo[] = await sanityClient.fetch(query1);
		return pageInfo;
	}
	return (
		<div
			className="flex flex-col relative h-screen text-center md:text-left md:flex-row 
    max-w-7xl px-10 justify-evenly mx-auto items-center 
    "
		>
			<h3 className=" absolute top-10 md:top-24 uppercase tracking-[20px] text-gray-400 text-2xl ">
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
				{data1?.map((img) => (
					
                    <Image
						key={img._id}
						width={150}
						height={150}
						// src={urlFor(img.profilePic).url()}
						loader={() => "https://cdn.sanity.io/images/pa6n8srn/production/f63be0cf8ddfb463f81951e4b6e544739c55a274-1125x1125.png"}
						src={"https://cdn.sanity.io/images/pa6n8srn/production/f63be0cf8ddfb463f81951e4b6e544739c55a274-1125x1125.png"}
						alt="dpd"
						className=" h-[150px] w-[150px]  sm:h-64 sm:w-64 rounded-full  z-1 mx-auto object-cover "
					/>
				))}
			</motion.div>

			<div className="space-y-10 px-0 md:px-10">
				<h4 className="text-xl sm:text-4xl  py-1 font-semibold tracking-[10px] font-sans ">
					Here is a little background
				</h4>
				
					{
                        data1?.map((data)=>(
<p  key={data._id} className="text-sm sm:text-xl sm:tracking-widest ">
    {data.backgroundInformation}
    <span className=" hidden xl:block">
						My transition into full-stack development has been
						fueled by a desire to create comprehensive solutions
						that seamlessly integrate both mechanical and digital
						realms. By combining my technical expertise in
						mechanical engineering with the power of web
						technologies, I am able to craft interactive and
						user-centric applications that transcend traditional
						boundaries.
					</span>
</p>
                        ))
                    }
				
					
				
			</div>
		</div>
	);
};

export default About;
