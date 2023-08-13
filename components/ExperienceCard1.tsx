import Image from "next/image";
import React from "react";
import ds from "../public/Screenshot from 2023-08-13 23-10-38.png";
import { motion } from "framer-motion";
// import { Experience } from "@/typing";
// import { urlFor } from "@/sanity";
// import { urlForImage } from "@/sanity/lib/image";
type Props = {
	
};

const ExperienceCard1 = (props: Props) => {
	

	return (
		<article
			className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 
            w-[380px] md:w-[600px] xl:w-[700px] snap-center p-12  hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden hover:shadow-md  hover:shadow-[#FE8040] box-border
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
				className=" rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center "
			>
				{/* <Image src={ds} alt="picss" /> */}

					<Image
					
						width={150}
						height={150}
						src={ds}						
						alt="dp"
						// className=" h-[150px] w-[150px]  sm:h-52 sm:w-52 rounded-full  z-1 mx-auto object-cover bg-white "
					/>
			
			</motion.div>

			<div className="px-0 md:px-10">
				<h4 className=" text-xl md:text-4xl text-[#FE8040] font-semibold ">
					Oracle  ERP Finance Consultant
				</h4>
				<p className="font-bold text-2xl text-[#cccccc] mt-1  ">
					KPMG India
				</p>
				<div className="flex space-x-2 my-2">
					
				</div>
				
				<p className="uppercase py-5  text-gray-300  font-semibold ">
					June-2022 - Current
				</p>

				<ul className=" text-[#cccccc] list-disc space-y-4 ml-5 text-lg ">
					<li> Gathering requirements from Clients regarding Finance Module of Oracle ERP</li>
					<li>Assisting IT Team functionally regarding requirement feasibility</li>
					<li>Training users on the system for testing and then appropriately releasing it into Production.</li>
					{/* <li>Liasoning with finance team of clients to gather enquire information regarding entities operations</li> */}
					
				</ul>
			</div>
		</article>
	);
};

export default ExperienceCard1;
