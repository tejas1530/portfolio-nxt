"use client";

import { Cursor, useTypewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";
import { sanityClient, urlFor } from "@/sanity";
import groq from "groq";
import React, { useState, useEffect } from "react";
import { PageInfo, Socials } from "@/typing";

import Image from "next/image";
import dp from "../../public/106841205.jpeg";

type page = { /* ... */ }

type GlobalProps = {
	product: page[];
};
type Props = {}
	

function Hero({}: Props) {
	const [data, setData] = React.useState<Socials[]>();
	const [data1, setData1] = React.useState<PageInfo[]>();

	const fetchData = async () => {
		const data = await getData();

		setData(data);
	};

	const fetchData1 = async () => {
		const data1 = await getData1();
		setData1(data1);
	};

	React.useEffect(() => {
		fetchData();
		fetchData1();
	}, []);

	async function getData() {
		const query = groq`
  *[_type=="socials"]

  `;

		const socials: Socials[] = await sanityClient.fetch(query);
		return socials;
	}
	async function getData1() {
		const query1 = groq`
  *[_type=="pageInfo"]
  `;
		const pageInfo: PageInfo[] = await sanityClient.fetch(query1);
		return pageInfo;
	}
	const [text, count] = useTypewriter({
		words: ["I am a Full-Stack Developer"],

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
				{data1?.map((img) => (
					<Image
						key={img._id}
						width={150}
						height={150}
						// src={urlFor(img.heroImage).url()}
						loader={() => urlFor(img?.heroImage).url()}
						src={urlFor(img?.heroImage).url()}
						alt="dp"
						className=" h-[150px] w-[150px]  sm:h-60 sm:w-60 rounded-full  z-1 mx-auto object-cover "
					/>
				))}
				<h1 className="text-4xl font-bold font-mono ">
					{data1?.map((name) => (
						<span key={name._id}>{name.name}</span>
					))}
				</h1>
				<h1 className="text-2xl font-bold font-mono">{text}</h1>
				<p className="text-xl font-bold font-sans">{text2}</p>
				<div className="space-x-3">
					{data?.map((social) => (
						<SocialIcon
							key={social._id}
							url={social.url}
							fgColor="white"
							bgColor="transparent"
						/>
					))}
					{/* <SocialIcon url="https://github.com/tejas1530" />
        <SocialIcon url="https://instagram.com/anonymous____frnd?igshid=OGQ5ZDc2ODk2ZA==" /> */}
				</div>
			</motion.div>
		</section>
	);
}

export default Hero;

