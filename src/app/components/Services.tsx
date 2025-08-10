import React from "react";
// import Service1 from "./images/Service1.svg";
// import Service2 from "./images/Service2.svg";
// import Service3 from "./images/Service3.svg";
// import Service4 from "./images/Service4.svg";
// import Service5 from "./images/Service5.svg";
// import Service6 from "./images/Service6.svg";
import Image from "next/image"

const Services = () => {
  return (
    <section className="py-12 w-full">
      <div className="container mx-auto px-4 flex flex-col">
        {/* Section Title */}
        <span className="text-[#F9784C] font-bold text-xl uppercase tracking-wider mb-2">
          Services
        </span>
        <h2 className="text-5xl font-bold text-gray-900 mb-12">
          HOW CAN I HELP
        </h2>

        {/* Service 1 */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-12">
          <div className="w-full md:w-1/3 flex justify-start">
            <Image src = "/images/Service1.svg" alt = "Graphic Desgin" width={300} height={300} className="w-full max-w-sm"/>
          </div>
          <div className="w-full md:w-1/3 text-black md:self-center">
            <h2 className="italic text-[32px] mb-4">Graphic Design</h2>
            <p className="mb-6">
              Crafting distinct brand identities that resonate with the essence
              of each project, from startups seeking recognition to established
              brands seeking a fresh visual perspective.
            </p>
            <h2 className="text-xl font-semibold mb-4">What&apos;s included?</h2>
            <p>
              Seamlessly transitioning between print and digital mediums, I
              bring ideas to life across diverse platforms, maintaining
              consistency and visual appeal.
            </p>
          </div>
          <div className="w-full md:w-1/3 flex justify-end">
            <Image src = "/images/Service2.svg" alt = "Graphic Desgin" width={300} height={300} className="w-full max-w-sm"/>
          </div>
        </div>

        <hr className="my-12 border-gray-300" />

        {/* Service 2 */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-12">
          <div className="w-full md:w-1/3 flex justify-start">
            <Image src = "/images/Service3.svg" alt = "Graphic Desgin" width={300} height={300} className="w-full max-w-sm"/>
          </div>
          <div className="w-full md:w-1/3 text-black md:self-center">
            <h2 className="italic text-[32px] mb-4">Video Editing</h2>
            <p className="mb-6">
              Weaving compelling narratives through meticulous editing, I bring
              stories to life, balancing pacing, timing, and visual elements to
              captivate audiences.
            </p>
            <h2 className="text-xl font-semibold mb-4">What&apos;s included?</h2>
            <p>
              Transforming raw footage into engaging promotional videos, whether
              for local businesses or festival-worthy short films, each project
              is a testament to my storytelling prowess.
            </p>
          </div>
          <div className="w-full md:w-1/3 flex justify-end">
            <Image src = "/images/Service4.svg" alt = "Graphic Desgin" width={300} height={300} className="w-full max-w-sm"/>
          </div>
        </div>

        <hr className="my-12 border-gray-300" />

        {/* Service 3 */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-12">
          <div className="w-full md:w-1/3 flex justify-start">
            <Image src = "/images/Service5.svg" alt = "Graphic Desgin" width={300} height={300} className="w-full max-w-sm"/>
          </div>
          <div className="w-full md:w-1/3 text-black md:self-center">
            <h2 className="italic text-[32px] mb-4">3D Animation</h2>
            <p className="mb-6">
              Creating realistic 3D models for architectural visualization, I
              bring concepts to life with attention to detail, lighting, and
              advanced rendering techniques.
            </p>
            <h2 className="text-xl font-semibold mb-4">What&apos;s included?</h2>
            <p>
              Contributing to virtual reality projects, I seamlessly integrate
              3D elements, enhancing the immersive experience and pushing the
              boundaries of digital exploration.
            </p>
          </div>
          <div className="w-full md:w-1/3 flex justify-end">
            <Image src = "/images/Service6.svg" alt = "Graphic Desgin" width={300} height={300} className="w-full max-w-sm"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
