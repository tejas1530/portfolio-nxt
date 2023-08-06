import Header from "@/components/Header";
import Head from "next/head";
import Image from "next/image";
import imgs from "../public/photo-1446941611757-91d2c3bd3d45.jpeg"
import Hero from "@/components/Hero";


export default function Home() {
  return (
    <div className="mains" >
      
      <Head>
        <title>Tejas Portfolio</title>
      </Head>
      <Header/>
      <section id="hero" >
          <Hero/>
      </section>
    </div>
  );
}
