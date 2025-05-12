import React from "react"; 
import bannerLetters from "../assets/banner_letters.svg";
import bannerBackground from "../assets/banner9.svg";

const Hero = () => {
  return (
    <div className="w-full overflow-hidden z-[50] relative">
      <div className="max-h-[500px] relative">
        {/* Overlay */}
        <div className="absolute w-full h-full max-h-[500px] bg-black/4 z-[51]"></div>

        {/* New Image - Not Darkened */}
        <div className="absolute w-full h-full flex justify-center items-center z-[52] transform translate-x-5 translate-y-0">
          <img
            src={bannerLetters}
            alt="Banner Writing"
            className="w-[500px] md:w-[550px] lg:w-[600px] object-contain z-[52]"
          />
        </div>

        {/* Full width stretched background image */}
        <img
          src={bannerBackground}
          alt="Food"
          className="w-full h-[500px] object-cover z-[50]"
        />
      </div>
    </div>
  );
};

export default Hero;




