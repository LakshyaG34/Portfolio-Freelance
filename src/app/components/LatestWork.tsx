import React from "react";
import LatestWorkImg from "./images/LatestWorkImg.svg";

const LatestWork = () => {
  return (
    <section className="overflow-x-hidden">
      <div className="container mx-auto px-4 flex justify-center items-center gap-8">
        <div className="font-montserrat flex flex-col justify-center items-center w-full max-w-[100vw]">
          <p className="font-montserrat font-bold text-[#F9784CCC] text-2xl mb-4">
            PORTFOLIO
          </p>
          <h2 className="font-montserrat font-bold text-dark text-5xl mb-8">
            MY LATEST WORK
          </h2>

          {/* Make this container relative to allow absolute positioning inside */}
          <div className="relative w-screen overflow-hidden">
            <LatestWorkImg className="w-full h-auto object-cover min-h-[300px]" />

            {/* Card absolutely positioned over the image */}
            <div className="absolute bottom-4 right-4 bg-[#17171799] backdrop-blur-lg p-4 rounded shadow-md max-w-xs text-white text-lg">
              <div className="flex flex-col gap-4">
                <div className="flex flex-row gap-2">
                  <button className="px-4 py-2 text-[#FEFAEE] rounded-full border border-[#FEFAEE] transition">
                    &lt;-
                  </button>

                  <button className="px-4 py-2 bg-[#FEFAEE] text-dark rounded-full border border-black transition">
                    -&gt;
                  </button>
                </div>

                <div className="py-12">
                  <button className="font-montserrat font-bold bg-[#FCD68B] text-[#9C356D] rounded-full px-6 py-2">
                    BRANDING
                  </button>
                </div>

                <div className="py-2">
                  <span className="italic font-montserrat text-white">
                    Steaan
                  </span>
                </div>

                <div>
                  <p>
                    Merging modern aesthetics with brand essence, I crafted
                    logos and visuals that not only resonated with each
                    startup's unique vision but also left a lasting impression.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestWork;
