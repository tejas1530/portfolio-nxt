import Header from "@/components/Header";
import Head from "next/head";
import Image from "next/image";
import imgs from "../public/photo-1446941611757-91d2c3bd3d45.jpeg"
import Hero from "@/components/Hero";
import About from "@/components/About";
import WorkExperience from "@/components/WorkExperience";
import Skills from "@/components/Skills";




export default function Home() {
  return (
    <div className="mains h-screen snap-y snap-mandatory overflow-scroll z-0 " >

      <Head>
        <title>Tejas Portfolio</title>
      </Head>
      <Header />
      <section id="hero" className="snap-start  " >
        <Hero />
      </section>
      <section id="about" className="snap-center" >
        <About />
      </section>
      <section id="experience" className="snap-center" >
        <WorkExperience />
      </section>
      <section id="skills" className="snap-start" >
        <Skills />
      </section>
    </div>
  );
}
