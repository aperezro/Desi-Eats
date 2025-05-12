import React from "react";
import boost from "../assets/boost.png";
import logo from "../assets/desi_logo.png";
import college from "../assets/graduation.svg";
import { Link } from "react-router-dom";


const MainUnder = () => {
  return (
    <div className="w-full flex justify-center py-12">
      <div className="max-w-[1300px] flex justify-between space-x-36  z-[100]">
        <div className="flex flex-col items-center text-center">
          <div className="w-[140px] h-[140px] bg-gray-500 rounded-full overflow-hidden flex justify-center items-center">
            <img src={boost} alt="Boost" className="w-full h-full object-cover" />
          </div>
          <h2 className="mt-4 text-xl font-semibold"style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontWeight: 800 }}>Mobile Order</h2>
          <p className="text-gray-600 max-w-xs">Get your order To go! Just like the rest of our campus dining, we accept orders through boost.</p>
          <a href="https://boostapp.io/" target="_blank" rel="noopener noreferrer"
          className="mt-3 px-4 py-2 bg-[#f16323] text-black hover:bg-yellow-500 rounded-full transition-all  font-bold border border-black hover:scale-105  text-white shadow-lg"
           > View details &raquo;</a>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="w-[140px] h-[140px] bg-gray-500 rounded-full overflow-hidden flex justify-center items-center ">
            <img src={logo} alt="Logo" className="w-full h-full object-cover" />
          </div>
          <h2 className="mt-4 text-xl font-semibold"style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontWeight: 800 }}>Stay up to date!</h2>
          <p className="text-gray-600 max-w-xs">Keep up with our events on campus or news about our brand on our social media pages. Follow us!</p>
          <a href="https://www.instagram.com/desieatsus/" target="_blank" rel="noopener noreferrer" className="mt-3 px-4 py-2 bg-[#f16323] text-black transition-all  text-white shadow-lg  hover:bg-yellow-500 rounded-full font-bold border border-black hover:scale-105">
          View details &raquo;</a>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="w-[140px] h-[140px] bg[#9a2546] rounded-full flex justify-center items-center">
            <img src={college} alt="Logo" className="w-full h-full object-cover" />
          </div>
          <h2 className="mt-4 text-xl font-semibold"style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontWeight: 800 }}>Want us at your Campus?</h2>
          <p className="text-gray-600 max-w-xs">We are looking to continue bringing our excellent dining service to more schools. Add some Desi to your campus!</p>
          <Link to="/connect" 
           className="mt-3 px-4 py-2 bg-[#f16323] text-black hover:bg-yellow-500 rounded-full font-bold border border-black hover:scale-105 transition-all  text-white shadow-lg "
           onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>View details &raquo;</Link>        
        </div>
      </div>
    </div>
  );
};

export default MainUnder;
