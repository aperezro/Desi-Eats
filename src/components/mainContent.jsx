import React from "react";
import { Link, useNavigate } from "react-router-dom";
import foodCourt from "../assets/foodcourt.svg";



const MainContent = () => {
  const navigate = useNavigate();

  const handleScrollToTop = () => {
    navigate("/about");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="w-full bg-amber-50 font-hanken">
      

      {/* Main Content Section */}
      <div className="max-w-[1640px] mx-auto flex flex-col lg:flex-row items-center p-8 lg:p-16">
           {/* Blurs Container */}
      <div className="absolute inset-0 z-1 pointer-events-none">
        <div className="absolute top-[80%] left-[0%] h-[550px] w-[220px] bg-[#f6c917] opacity-80 blur-[120px] rounded-full -translate-y-20 -translate-x-28" ></div>
        <div className="absolute top-[120%] left-[77%] h-[150px] w-[350px] bg-[#f66517] opacity-80 blur-[120px] rounded-full -translate-y-20" ></div>
      </div>
        {/* Left side: Text */}
        <div className="flex-1 flex flex-col justify-center items-start text-left space-y-6 z-2">
          <h1 className="weight-4 font-hanken !text-[54px] !text-[#9a2446] font-bold"style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontWeight: 800 }}>
            ABOUT <span className="text-orange-500 weight-500 font-bold"style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontWeight: 800 }}>DESI EATS</span>
          </h1>
          <p className="text-lg text-gray-700 max-w-md font-bold">
            At Desi Eats, we are passionate about bringing the rich, vibrant flavors of authentic Indian cuisine right to your table. Every dish we craft is a celebration of tradition, spices, and love.
          </p>
          <p className="text-lg text-gray-700 max-w-md font-bold">
            We currently operate in Babson College and will be operating starting next Fall!
          </p>
          <div className="flex items-center space-x-4">
            <button
              onClick={handleScrollToTop}
              className="bg-[#f16323] cursor-pointer hover:bg-yellow-500 border border-black rounded-full px-8 py-3 font-bold transition-all hover:scale-105 text-white shadow-lg"
            >
              Learn More
            </button> 
            
            
          </div>
        </div>

        {/* Right side: Image */}
        <div className="flex-1 mt-8 lg:mt-0 relative flex justify-end items-center z-40 ">
          <img
            src={foodCourt}
            alt="About Desi Eats"
            className="w-full h-[500px] object-cover rounded-md shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default MainContent;
