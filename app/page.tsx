import Header from "@/components/Header";
import Head from "next/head";
import Image from "next/image";
import imgs from "../public/photo-1446941611757-91d2c3bd3d45.jpeg"



import Headers from "@/components/Headers";
import About from "./about/page";
import Hero from "./hero/page";
import WorkExperience from "./experience/page";
import Skills from "./skills/page";
import Project from "./projects/page";
import Contact from "./contact/page";
import { GetStaticProps } from "next";
// import { PageInfo } from "@/typing";




export default function Home() {
  return (
    <div className="mains h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden  z-0 
    scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#FE8040]
    "

    >

      <Head>
        <title>Tejas Portfolio</title>
      </Head>

      {/* <Headers/> */}
      <section id="hero" className="snap-start  " >
        <Hero />
      </section>
      <section id="about" className="snap-center" >
        <About />
      </section>
      <section id="experience" className="snap-center" >
        <WorkExperience />
      </section>
      {/* <section id="skills" className="snap-start" >
        <Skills />
      </section> */}
      {/* <section id="projects" className="snap-start">
        <Project />
      </section> */}
      <section id="contact" className="snap-start" >
        <Contact />
      </section>
    </div>
  );
}

