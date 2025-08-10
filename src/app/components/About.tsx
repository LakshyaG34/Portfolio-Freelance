import React from "react";
// import AboutImg from "./images/AboutImg.svg";
import Image from "next/image"

const About = () => {
  return (
    <section className="py-25">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-16">
        {/* Image on left - full width on mobile, fixed width on desktop */}
        <div className="w-full md:flex-1 flex justify-start">
          {/* <div className="w-full max-w-[320px] h-[540px] flex-shrink-0"> */}
            {/* <AboutImg className = "scale-75 sm:scale-75"/> */}
            <Image src = "/images/AboutImg.svg" alt = "Graphic Desgin" width={432} height={696} className = "scale-75 sm:scale-75"/>
          {/* </div> */}
        </div>

        {/* Text on right - full width on mobile, fixed width on desktop */}
        <div className="w-full md:w-auto md:flex-1 flex flex-col justify-center items-start">
          <p className="text-xl font-bold text-[#F9784C] mb-2 uppercase">ABOUT</p>
          <h2 className="text-3xl font-bold text-dark mb-4 leading-tight">
            CRAFTING UNIQUE BRAND EXPERIENCES SINCE 2014
          </h2>
          <p className="text-gray-700 mb-8">
            With a Visual Arts degree, my journey began in graphic design, crafting logos and marketing materials.
            Video editing followed, where meticulous attention to detail set my work apart, and I ventured into 3D modeling for immersive experiences.
          </p>
          <button className="px-8 py-3 bg-transparent border border-black text-black rounded-full font-semibold hover:bg-[#F9784C] transition">
            Schedule a call
          </button>
        </div>
      </div>
      <hr className="my-12 mx-6 border-dark" />
    </section>
  );
};

export default About;