
import React from "react";

const Hero = () => {
  return (
    <section className="flex  pb-2 flex-col lg:flex-row justify-around items-center text-black max-w-7xl w-full mx-auto my-16 px-4 space-y-8 lg:space-y-0 lg:space-x-8">
      {/* LEFT SECTION */}
      <div className="w-full lg:w-1/3 space-y-3 text-center lg:text-left">
        <h1 className="text-4xl font-semibold text-white">Hey</h1>
        <p className="text-4xl font-semibold text-white">I'm Kingsley</p>
        <p className="text-4xl font-semibold text-white">Afingi</p>
        <hr className="w-1/4 border-gray-400 mx-auto lg:mx-0" />
        <p className="text-gray-200">
          "I design and publish websites that are not just visually stunning but also intuitive and functional. I love blending creativity with code to build meaningful digital experiences."
        </p>
      </div>

      {/* CENTER IMAGE */}
      <div className="w-full lg:w-1/3 flex items-center justify-center">
        <img
          src="./images/king.jpg"
          alt="Kingsley"
          className="w-40 h-40 rounded-full border-4 border-white shadow-lg object-cover"
        />
      </div>

      {/* RIGHT SECTION */}
      <div className="w-full lg:w-1/3 space-y-4 text-center lg:text-left">
        <h1 className="text-3xl font-semibold text-white">About Me:</h1>
        <p className="text-gray-200">
          Let's build quality in programming and design with our services!
        </p>
        <button className="text-blue-900 bg-white px-5 py-2 rounded-md hover:bg-blue-100 transition">
          <a href="#projects">Show more ...</a>
        </button>
      </div>
    </section>
  );
};

export default Hero;
