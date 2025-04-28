import React from "react";

const Hero = () => {  
  return (
    <div className="w-full">
      <div className="max-h-[500px] relative">
        {/* Overlay */}
        <div className="absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center pl-12"> 
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            The <span className="text-orange-500">Best</span>
          </h1>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            <span className="text-orange-500">Indian</span> Food
          </h1>
        </div>

        {/* Full width stretched image */}
        <img
          src="https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Food"
          className="w-full h-[500px] object-cover"
        />
      </div>
    </div>
  );
}

export default Hero;
