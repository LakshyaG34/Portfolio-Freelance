"use client";

import React from "react";
// import AboutImg from "./images/AboutImg.svg";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";

const About = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  if (isMobile) {
    return (
      <section className="py-25 max-w-7xl mx-auto flex flex-col items-center justify-center gap-6">
        <div className="container mx-auto flex flex-col items-center gap-8">
          <div className="w-full flex flex-col justify-center items-start">
            <p className="text-xl font-bold text-[#F9784C] mb-2 uppercase">
              ABOUT
            </p>
            <h2 className="text-3xl font-bold text-dark mb-4 leading-tight">
              CRAFTING UNIQUE BRAND EXPERIENCES SINCE 2014
            </h2>
            <p className="text-gray-700 mb-8">
              With a Visual Arts degree, my journey began in graphic design,
              crafting logos and marketing materials. Video editing followed,
              where meticulous attention to detail set my work apart, and I
              ventured into 3D modeling for immersive experiences.
            </p>
            <button className="px-8 py-3 bg-transparent border border-black text-black rounded-full font-semibold hover:bg-[#F9784C] transition">
              Schedule a call
            </button>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <div className="relative w-[343px] h-[560px]">
            <div
              className="absolute -left-10 top-5 w-full h-full
              scale-100 rounded-[220px]
              bg-[linear-gradient(151.4deg,#FEFAEE_5.26%,#FCD68B_29.9%,#F9784C_53.25%,#9C356D_72.94%)]
              blur-[15px] opacity-80"
            />
            <div className="relative w-[343px] h-[560px] overflow-hidden rounded-[220px]">
              <Image
                src="https://arthur-01-09-2025.s3.ap-south-1.amazonaws.com/freelance/cc1.png"
                alt="Graphic Design"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
        <hr className="my-12 mx-6 border-dark" />
      </section>
    );
  }

  return (
    <section className="py-25 max-w-7xl mx-auto">
      <div className="container mx-auto flex flex-col items-center gap-8">
        <div className="w-full flex justify-start">
          <div className="relative w-[343px] h-[560px]">
            {/* gradient layer */}
            <div
              className="absolute -left-10 top-5 w-full h-full
              scale-100 rounded-[220px]
              bg-[linear-gradient(151.4deg,#FEFAEE_5.26%,#FCD68B_29.9%,#F9784C_53.25%,#9C356D_72.94%)]
              blur-[15px] opacity-80"
            />
            {/* background: linear-gradient(151.4deg, #FEFAEE 5.26%, #FCD68B 29.9%, #F9784C 53.25%, #9C356D 72.94%); */}
            {/* image container */}
            <div className="relative w-[343px] h-[560px] overflow-hidden rounded-[220px]">
              <Image
                src="https://arthur-01-09-2025.s3.ap-south-1.amazonaws.com/freelance/cc1.png"
                alt="Graphic Design"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col justify-center items-start">
          <p className="text-xl font-bold text-[#F9784C] mb-2 uppercase">
            ABOUT
          </p>
          <h2 className="text-3xl font-bold text-dark mb-4 leading-tight">
            CRAFTING UNIQUE BRAND EXPERIENCES SINCE 2014
          </h2>
          <p className="text-gray-700 mb-8">
            With a Visual Arts degree, my journey began in graphic design,
            crafting logos and marketing materials. Video editing followed,
            where meticulous attention to detail set my work apart, and I
            ventured into 3D modeling for immersive experiences.
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
