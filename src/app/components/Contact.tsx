import React from "react";

const Contact = () => {
  return (
    <section className="py-6 pb-4 pt-160 px-4 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Left Column - Contact Info */}
        <div className="flex-1">
          <span className="text-[#F9784C] font-bold text-4xl uppercase tracking-wider">CONTACT</span>
          <p className="text-white mb-8 mt-3 text-xl max-w-lg">
            Ready to elevate your visual presence? I&apos;m here to bring your creative visions to life. Feel free to reach out.
          </p>
          
          <hr className="my-8 border border-white"/>
          
          <div className="flex flex-col sm:flex-row gap-8">
            <div className="flex-1">
              <span className="text-sm font-semibold text-white">Location</span>
              <p className="text-gray-400 mt-1">San Francisco, LA</p>
            </div>
            <div className="flex-1">
              <span className="text-sm font-semibold text-white">Phone</span>
              <p className="text-gray-400 mt-1">+331012345678</p>
            </div>
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <div className="flex-1 rounded-xl p-8">
          <form className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-6">
              <label className="flex-1">
                <span className="text-sm text-white mb-2 block">First Name</span>
                <input
                  type="text"
                  placeholder="Your First Name"
                  className="w-full rounded-full border border-white text-white py-3 px-4 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F9784C]"
                />
              </label>
              <label className="flex-1">
                <span className="text-sm text-white mb-2 block">Last Name</span>
                <input
                  type="text"
                  placeholder="Your Last Name"
                  className="w-full rounded-full border border-white text-gray-700 py-3 px-4 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F9784C]"
                />
              </label>
            </div>

            <label className="block">
              <span className="text-sm text-white mb-2 block">Email Address</span>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-full border border-white text-white py-3 px-4 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F9784C]"
              />
            </label>

            <fieldset className="space-y-3">
              <legend className="text-sm text-white font-semibold mb-2">
                Select Service
              </legend>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="radio"
                    name="service"
                    value="graphic-design"
                    className="w-5 h-5 text-[#F9784C] border border-white bg-white checked:bg-[#F9784C] focus:ring-[#F9784C]"
                  />
                  <span className="text-gray-400">Graphic Design</span>
                </label>
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="radio"
                    name="service"
                    value="3d-modelling"
                    className="w-5 h-5 text-[#F9784C] border border-white bg-white checked:bg-[#F9784C] focus:ring-[#F9784C]"
                  />
                  <span className="text-gray-400">3D Modelling & Animation</span>
                </label>
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="radio"
                    name="service"
                    value="video-editing"
                    className="w-5 h-5 text-[#F9784C] border border-white bg-white checked:bg-[#F9784C] focus:ring-[#F9784C]"
                  />
                  <span className="text-gray-400">Video Editing</span>
                </label>
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="radio"
                    name="service"
                    value="video-production"
                    defaultChecked
                    className="w-5 h-5 text-[#F9784C] border border-white bg-white checked:bg-[#F9784C] focus:ring-[#F9784C]"
                  />
                  <span className="text-gray-400">Video Production</span>
                </label>
              </div>
            </fieldset>

            <label className="block">
              <span className="text-sm text-white mb-2 block">Message</span>
              <textarea
                placeholder="Write your message here"
                rows={5}
                className="w-full rounded-lg border border-white text-white py-3 px-4 placeholder:text-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-[#F9784C]"
              ></textarea>
            </label>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                type="submit"
                className="px-8 py-3 border border-white text-white rounded-full hover:bg-[#e06d42] transition-colors w-full sm:w-auto"
              >
                SUBMIT
              </button>
              <p className="text-xm text-gray-400 text-center sm:text-right">
                By submitting this form you agree to our{" "}
                <a href="#" className="underline hover:text-[#F9784C]">
                  Terms & Conditions
                </a>{" "}
                and privacy policy
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;