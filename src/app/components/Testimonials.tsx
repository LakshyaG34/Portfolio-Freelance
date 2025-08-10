import React from "react";
import Image from "next/image";

const Testimonials = () => {
  const testimonials = [
    {
      img: "/images/Xp.svg",
      company: "TechStartup Xperience",
      name: "SARAH THOMPSON",
      quote:
        "Ability to capture the essence of our vision and translate it into a visually stunning logo exceeded our expectations.",
      date: "February 2024",
    },
    {
      img: "/images/Ws.svg",
      company: "WorldofStartups",
      name: "SARAH THOMPSON",
      quote:
        "Ability to capture the essence of our vision and translate it into a visually stunning logo exceeded our expectations.",
      date: "November 2023",
    },
    {
      img: "/images/Gb.svg",
      company: "GlorifiedBrand",
      name: "SARAH THOMPSON",
      quote:
        "Ability to capture the essence of our vision and translate it into a visually stunning logo exceeded our expectations.",
      date: "January 2024",
    },
    {
      img: "/images/Sn.svg",
      company: "StartupNation",
      name: "SARAH THOMPSON",
      quote:
        "Ability to capture the essence of our vision and translate it into a visually stunning logo exceeded our expectations.",
      date: "April 2023",
    },
  ];

  return (
    <div className="py-12 bg-[#171717] px-4 w-full mx-auto">
      <div className="flex flex-col items-center mb-12">
        <p className="text-[#F9784C] font-bold text-xl uppercase tracking-wider mb-2">
          TESTIMONIALS
        </p>
        <h2 className="text-3xl font-bold text-white">WHAT PEOPLE SAY</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            style={{
              background: "linear-gradient(96.36deg, #FCD68B 0%, #FFFFFF 100%)",
            }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="flex-shrink-0">
                <Image
                  src={testimonial.img}
                  alt={`${testimonial.company} logo`}
                  width={56}
                  height={56}
                  className="w-12 h-12"
                />
              </div>
              <h3 className="text-xl font-bold italic text-gray-900">
                {testimonial.company}
              </h3>
            </div>
            <p className="text-gray-700 font-semibold mb-2">
              {testimonial.name}
            </p>
            <p className="text-gray-600 mb-4">{testimonial.quote}</p>
            <p className="text-sm text-gray-500">{testimonial.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;