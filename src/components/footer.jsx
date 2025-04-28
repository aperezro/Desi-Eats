import React from "react";
import { AiOutlinePhone, AiOutlineMail, AiOutlineHome } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="w-full bg-white text-gray-800 font-mulish">
      <div className="max-w-[1640px] mx-auto flex justify-end items-start p-6">

        {/* Right side: Contact Info + Vertical Logo */}
        <div className="flex flex-row items-start gap-6">

          {/* Contact Info */}
          <div className="flex flex-col items-end text-right space-y-4">
            <h1 className="text-2xl font-extrabold text-[#7C2D53]">Krish V. Khemlani</h1>

            <div className="flex items-center  text-orange-600">
              <AiOutlinePhone size={20} />
              <span>+1 787-354-4329</span>
            </div>

            <div className="flex items-center space-x-1 text-orange-600">
              <AiOutlineMail size={20} />
              <span>desieatsus@outlook.com</span>
            </div>

            <div className="flex items-start space-x-3 text-orange-600">
              <AiOutlineHome size={20} className="mt-1" />
              <div className="text-sm leading-tight">
                Krish Khemlani<br />
                21 Babson College Dr. Unit 1619<br />
                Wellesley Hills, MA 02481
              </div>
            </div>
          </div>

          {/* Vertical DESI EATS */}
          <div className="flex flex-col items-center justify-start text-4xl font-extrabold leading-none pt-19">
            <span className="text-orange-500 transform rotate-90 origin-center whitespace-nowrap">
              DESI <span className="text-[#7C2D53]">EATS</span>
            </span>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Footer;
