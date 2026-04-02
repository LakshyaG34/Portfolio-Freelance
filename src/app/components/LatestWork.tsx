"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";

const works = [
  {
    tag: "BRANDING",
    title: "Steaan",
    desc: "Merging modern aesthetics with brand essence, I crafted logos and visuals that not only resonated with each startup’s unique vision but also left a lasting impression",
  },
  {
    tag: "UI DESIGN",
    title: "NeoBank",
    desc: "A sleek modern banking UI designed to simplify financial management while maintaining a clean visual identity.",
  },
  {
    tag: "PRODUCT",
    title: "GlowCos",
    desc: "A premium cosmetic brand identity with packaging design and marketing visuals.",
  },
];

const LatestWork = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="w-full">
      <div className="flex flex-col justify-center items-center w-full">
        <p className="font-bold text-[#F9784CCC] text-2xl mb-4">PORTFOLIO</p>

        <h2 className="font-bold text-dark text-5xl mb-8">MY LATEST WORK</h2>

        <div
          className="relative w-full h-[600px] md:h-[950px] bg-cover bg-center bg-fixed"
          style={{
            backgroundImage:
              "url('https://arthur-01-09-2025.s3.ap-south-1.amazonaws.com/freelance/cc2.png')",
          }}
        >
          {/* <LatestWorkImg className="h-auto min-h-[300px]" /> */}

          <div className="
          absolute 
          bottom-6 
          left-1/2 
          -translate-x-1/2
          w-[90%] 
          max-w-[420px] 
          md:right-16 md:left-auto md:translate-x-0 md:w-[400px]
          ">
            <Swiper
              slidesPerView={1}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              className="bg-[#17171799] rounded-xl shadow-md text-white"
            >
              {works.map((work, index) => (
                <SwiperSlide key={index}>
                  <div className="flex flex-col gap-4 px-5 py-10">
                    {/* custom arrows */}
                    <div className="flex gap-2">
                      <button
                        onClick={() => swiperRef.current?.slidePrev()}
                        className="p-3 text-[#FEFAEE] rounded-full border border-[#FEFAEE] hover:bg-white/10 transition"
                      >
                        <FiArrowLeft size={18} />
                      </button>

                      <button
                        onClick={() => swiperRef.current?.slideNext()}
                        className="p-3 bg-[#FEFAEE] text-dark rounded-full hover:scale-105 transition"
                      >
                        <FiArrowRight size={18} />
                      </button>
                    </div>

                    <button className="font-bold bg-[#FCD68B] text-[#9C356D] text-xs rounded-full py-1 w-[80px] mt-7">
                      {work.tag}
                    </button>

                    <span className="italic text-white text-4xl">
                      {work.title}
                    </span>

                    <p>{work.desc}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestWork;
