import React from "react";
import Image from "next/image";

const Services = () => {
  return (
    <section className="py-12 w-full mx-auto max-w-[1440px]">
      <div className="container px-1 flex flex-col">
        {/* Section Title */}
        <span className="text-[#F9784C] font-bold text-xl uppercase tracking-wider mb-2">
          Services
        </span>
        <h2 className="text-5xl font-bold text-gray-900 mb-12">
          HOW CAN I HELP
        </h2>

        {/* Row 1 - Graphic Design */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-12">
          <div className="flex-shrink-0">
            <Image
              src="/images/Service1.svg"
              alt="Graphic Design"
              width={432}
              height={480}
              className="rounded-lg w-[432px] h-[480px] max-w-sm"
            />
          </div>

          <div className="max-w-[420px] text-black">
            <h2 className="italic text-[32px] mb-4">Graphic Design</h2>
            <p className="mb-6">
              Crafting distinct brand identities that resonate with the essence
              of each project, from startups seeking recognition to established
              brands seeking a fresh visual perspective.
            </p>
            <h2 className="text-xl font-semibold mb-4">
              What&apos;s included?
            </h2>
            <p>
              Seamlessly transitioning between print and digital mediums, I
              bring ideas to life across diverse platforms, maintaining
              consistency and visual appeal.
            </p>
          </div>

          <div className="flex-shrink-0">
            <Image
              src="/images/Service2.svg"
              alt="Graphic Design"
              width={248}
              height={248}
              className="rounded-lg w-[248px] h-[248px] max-w-sm"
            />
          </div>
        </div>

        <hr className="my-12 border-gray-300" />

        {/* Row 2 - Video Editing */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-12">
          <div className="flex-shrink-0">
            <Image
              src="/images/Service3.svg"
              alt="Video Editing"
              width={248}
              height={248}
              className="rounded-lg w-[248px] h-[248px] max-w-sm"
            />
          </div>

          <div className="max-w-[420px] text-black">
            <h2 className="italic text-[32px] mb-4">Video Editing</h2>
            <p className="mb-6">
              Weaving compelling narratives through meticulous editing, I bring
              stories to life, balancing pacing, timing, and visual elements to
              captivate audiences.
            </p>
            <h2 className="text-xl font-semibold mb-4">
              What&apos;s included?
            </h2>
            <p>
              Transforming raw footage into engaging promotional videos, whether
              for local businesses or festival-worthy short films, each project
              is a testament to my storytelling prowess.
            </p>
          </div>

          <div className="flex-shrink-0">
            <Image
              src="/images/Service4.svg"
              alt="Video Editing"
              width={432}
              height={480}
              className="rounded-lg w-[432px] h-[480px] max-w-sm"
            />
          </div>
        </div>

        <hr className="my-12 border-gray-300" />

        {/* Row 3 - 3D Animation */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-12">
          <div className="flex-shrink-0 relative">
            {/* gradient glow */}
            <div
              className="absolute -left-40 top-26 w-full h-full
                scale-125 rounded-[30px]
                bg-[linear-gradient(151.4deg,#FEFAEE_5.26%,#FCD68B_29.9%,#F9784C_53.25%,#9C356D_72.94%)]
                blur-[40px] opacity-100"
            />
            <Image
              src="/images/Service5.svg"
              alt="3D Animation"
              width={432}
              height={480}
              className="rounded-lg w-[432px] h-[480px] relative max-w-sm"
            />
          </div>

          <div className="max-w-[420px] text-black">
            <h2 className="italic text-[32px] mb-4">3D Animation</h2>
            <p className="mb-6">
              Creating realistic 3D models for architectural visualization, I
              bring concepts to life with attention to detail, lighting, and
              advanced rendering techniques.
            </p>
            <h2 className="text-xl font-semibold mb-4">
              What&apos;s included?
            </h2>
            <p>
              Contributing to virtual reality projects, I seamlessly integrate
              3D elements, enhancing the immersive experience and pushing the
              boundaries of digital exploration.
            </p>
          </div>

          <div className="flex-shrink-0">
            <Image
              src="/images/Service6.svg"
              alt="3D Animation"
              width={248}
              height={248}
              className="rounded-lg w-[248px] h-[248px] max-w-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;