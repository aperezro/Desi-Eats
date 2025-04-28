import React from "react";

const MainContent = () => {
  return (
    <div className="w-full bg-amber-50 font-mulish">
      <div className="max-w-[1640px] mx-auto flex flex-col lg:flex-row items-center p-8 lg:p-16">

        {/* Left side: Text */}
        <div className="flex-1 flex flex-col justify-center items-start text-left space-y-6">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#7C2D53] leading-tight">
            About <span className="text-orange-500">Desi Eats</span>
          </h2>

          <p className="text-lg text-gray-700 max-w-md">
            At Desi Eats, we are passionate about bringing the rich, vibrant flavors of authentic Indian cuisine right to your table. Every dish we craft is a celebration of tradition, spices, and love.
          </p>

          <button className="bg-yellow-400 hover:bg-yellow-500 border border-black rounded-full px-8 py-3 font-bold transition-all">
            Learn More
          </button>
        </div>

        {/* Right side: Image */}
        <div className="flex-1 mt-8 lg:mt-0">
          <img
            src="https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="About Desi Eats"
            className="w-full h-[500px] object-cover rounded-md shadow-2xl"
          />
        </div>

      </div>
    </div>
  );
}

export default MainContent;
