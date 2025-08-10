import React from "react";
import Star from "./images/Star.svg";
import Line from "./images/Line.svg";

const Offer = () => {
  return (
    <section className="py-18 px-4 max-w-7xl mx-auto my-auto">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Column */}
        <div className="flex-1 flex flex-col">
          <span className="text-[#F9784C] font-bold text-xl uppercase tracking-wider mb-2">MY OFFER</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">ART OF VISUAL ALCHEMY</h2>
          <button className="text-dark border border-dark px-6 py-3 rounded-full w-fit hover:bg-[#e06d42] transition-colors">
            CONTACT ME
          </button>
        </div>

        {/* Right Column */}
        <div className="flex-1 space-y-8">
          {/* Item 1 */}
          <div className="flex gap-4">
            <div className="flex flex-col items-center">
              <Star className="w-6 h-6" />
              <Line className="h-full w-px my-2" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Visual Alchemist</h3>
              <p className="text-gray-700">
                Crafting brand identities that transcend, ensuring your brand captivates and stands out in a crowded digital landscape.
              </p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex gap-4">
            <div className="flex flex-col items-center">
              <Star className="w-6 h-6" />
              <Line className="h-full w-px my-2" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Aesthetic Maestro</h3>
              <p className="text-gray-700">
                Elevating designs with a keen eye, seamlessly transitioning between print and digital for consistently striking visuals.
              </p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="flex gap-4">
            <div className="flex flex-col items-center">
              <Star className="w-6 h-6" />
              <Line className="h-full w-px my-2" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Storytelling Virtuoso</h3>
              <p className="text-gray-700">
                Mastering the art of storytelling in video editing, creating compelling narratives for promotional videos and short films.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;