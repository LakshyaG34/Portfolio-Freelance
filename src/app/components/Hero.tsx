import React from "react";
import Link from "next/link";
// import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="py-16 pb-50 container max-w-7xl mx-auto px-4">
      <div className="max-w-3xl text-left">
        <div className="font-montserrat font-bold flex flex-col items-left">
          👋 HEY, I AM ERICA
        </div>
        <p
          className="py-6 font-montserrat text-4xl md:text-6xl font-bold mb-6"
          style={{
            background:
              "linear-gradient(151.4deg, #FEFAEE 5.26%, #FCD68B 29.9%, #F9784C 53.25%, #9C356D 72.94%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            display: "inline-block", // Needed for proper gradient application
          }}
        >
          A YOUNG CREATIVE DESIGNER BASED IN SAN DIEGO
        </p>
        <div className="flex gap-4">
          <Link
            href="/"
            className="px-8 py-3 bg-transparent border border-white text-white rounded-full font-semibold hover:bg-gray-200 hover:text-black transition"
          >
            MY WORKS
          </Link>
          <Link
            href="/"
            className="px-8 py-3 bg-gray-200 text-black rounded-full font-semibold hover:bg-transparent border border-gray-200 hover:text-white transition"
          >
            LET&apos;S TALK
          </Link>
        </div>
      </div>
    </section>

    // <section className="max-w-[1440px] w-full h-[606px] pt-[160px] pr-[56px] pb-[96px] pl-[56px] gap-[40px] opacity-100 flex flex-col justify-center items-start mx-auto">
    //   <p className="font-montserrat font-bold text-[20px] leading-[24px] tracking-[0.02em] uppercase">
    //     👋 HEY, I AM ERICA
    //   </p>
    //   <p className="font-montserrat font-medium text-[95px] leading-[100%] tracking-[-0.02em] uppercase">
    //     A YOUNG CREATIVE DESIGNER BASED IN SAN DIEGO
    //   </p>

    //   <div className="flex gap-4">
    //     <button className="px-8 py-3 bg-transparent border border-black text-black rounded-full font-semibold hover:bg-gray-200 transition">
    //       MY WORKS
    //     </button>
    //     <button className="px-8 py-3 bg-gray-200 text-black rounded-full font-semibold hover:bg-transparent border border-gray-200 transition">
    //       LET'S TALK
    //     </button>
    //   </div>
    // </section>
  );
};

export default Hero;
