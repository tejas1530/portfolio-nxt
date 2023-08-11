import Image from "next/image";
import React from "react";
import ds from "../public/pngwing.com (1).png";
import { motion } from "framer-motion";
import { Experience } from "@/typing";
import { urlFor } from "@/sanity";
import { urlForImage } from "@/sanity/lib/image";
type Props = {
	
};

const ExperienceCard = (props: Props) => {
	

	return (
		<article
			className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 
            w-[500px] md:w-[600px] xl:w-[700px] snap-center p-10  hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden shadow-sm xl:shadow-xl shadow-white
        "
		>
			<motion.div
				initial={{
					y: -100,
					opacity: 0,
				}}
				transition={{
					duration: 1.2,
				}}
				whileInView={{
					opacity: 1,
					y: 0,
				}}
				viewport={{ once: true }}
				className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center "
			>
				{/* <Image src={ds} alt="picss" /> */}

					<Image
					
						width={150}
						height={150}
						src={ds}						
						alt="dp"
						className=" h-[150px] w-[150px]  sm:h-60 sm:w-60 rounded-full  z-1 mx-auto object-cover "
					/>
			
			</motion.div>

			<div className="px-0 md:px-10">
				<h4 className="text-4xl font-light ">
					Junior developer
				</h4>
				<p className="font-bold text-2xl mt-1 ">
					Radical software
				</p>
				<div className="flex space-x-2 my-2">
					
				</div>
				
				<p className="uppercase py-5  text-gray-300  ">
               started ended
				</p>

				<ul className="list-disc space-y-4 ml-5 text-lg ">
					<li>summary points</li>
					<li>summary points</li>
					<li>summary points</li>
					<li>summary points</li>
					<li>summary points</li>
				</ul>
			</div>
		</article>
	);
};

export default ExperienceCard;
