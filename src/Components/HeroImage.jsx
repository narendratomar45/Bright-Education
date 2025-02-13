import React from "react";
// import upscHeroImage from "../../public/images/upscHeroImage.jpg";
import upscHeroImage from '../assets/images/upscHeroImage.jpg'
const HeroImage = () => {
  return (
    <div
      className=" relative w-full h-[80vh] bg-cover"
      style={{ backgroundImage: `url(${upscHeroImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold">
          Prepare for UPSC with the Best Online Classes
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl">
          Get expert guidance, live lectures, and structured courses to boost
          your preparation.
        </p>
        <button className="mt-6 px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold text-lg rounded-lg shadow-md">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default HeroImage;
