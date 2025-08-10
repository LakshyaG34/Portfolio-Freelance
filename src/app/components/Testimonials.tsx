import React from "react";
import Xp from "./images/Xp.svg";

const Testimonials = () => {
  const testimonials = [
    {
      company: "TechStartup Xperience",
      name: "SARAH THOMPSON",
      quote: "Ability to capture the essence of our vision and translate it into a visually stunning logo exceeded our expectations.",
      date: "February 2024"
    },
    {
      company: "WorldofStartups",
      name: "SARAH THOMPSON",
      quote: "Ability to capture the essence of our vision and translate it into a visually stunning logo exceeded our expectations.",
      date: "November 2023"
    },
    {
      company: "ClorifiedBrand",
      name: "SARAH THOMPSON",
      quote: "Ability to capture the essence of our vision and translate it into a visually stunning logo exceeded our expectations.",
      date: "January 2024"
    },
    {
      company: "StartupNation",
      name: "SARAH THOMPSON",
      quote: "Ability to capture the essence of our vision and translate it into a visually stunning logo exceeded our expectations.",
      date: "April 2023"
    }
  ];

  return (
    <div className="py-12 bg-[#171717] px-4 w-full mx-auto">
      <div className="flex flex-col items-center mb-12">
        <p className="text-[#F9784C] font-bold text-xl uppercase tracking-wider mb-2">TESTIMONIALS</p>
        <h2 className="text-3xl font-bold text-white">WHAT PEOPLE SAY</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {testimonials.map((testimonial, index) => (
          <div 
            key={index}
            className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            style={{
              background: "linear-gradient(96.36deg, #FCD68B 0%, #FFFFFF 100%)"
            }}
          >
            <Xp className="w-10 h-10 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">{testimonial.company}</h3>
            <p className="text-gray-700 font-semibold mb-2">{testimonial.name}</p>
            <p className="text-gray-600 mb-4">{testimonial.quote}</p>
            <p className="text-sm text-gray-500">{testimonial.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;