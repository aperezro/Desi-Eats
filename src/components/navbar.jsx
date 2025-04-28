import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/desi_writing.png';
import smallLogo from '../assets/desi_white.png';
import { AiOutlineMenu, AiOutlineUser, AiOutlineClose, AiFillTag } from 'react-icons/ai';
import { TbTruckDelivery } from 'react-icons/tb';
import { MdFavorite, MdHelp } from 'react-icons/md';
import { FaWallet, FaUserFriends } from 'react-icons/fa';
import { BsFillSaveFill } from 'react-icons/bs';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  useEffect(() => {
    if (nav) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [nav]);

  const handleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Customize', path: '/customize' },
    { name: 'Nutrition', path: '/menu' },
    { name: 'About Us', path: '/about' },
    { name: 'Connect', path: '/connect' },
  ];

  return (
    <>
      {/* Main Navbar */}
      <div className="bg-amber-50 drop-shadow-md w-full font-mulish relative z-20">
        <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">

          {/* Left side */}
          <div className="flex items-center">
            <div onClick={handleNav} className="cursor-pointer mr-4">
              <AiOutlineMenu size={30} />
            </div>

            {/* Logo */}
            <Link to="/" onClick={closeNav}>
              <img src={logo} alt="Desi Eats Logo" className="w-52 hover:scale-105 transition-all" />
            </Link>

            {/* Navigation Links */}
            <ul className="hidden lg:flex items-center gap-12 font-extrabold text-base ml-8">
              {navLinks.map((link, index) => (
                <li key={index} className="relative group cursor-pointer px-3 py-1">
                  <Link to={link.path} onClick={closeNav} className="relative">
                    {link.name}
                    {/* Underline effect */}
                    <span className="absolute left-0 -bottom-0.5 h-[3.5px] w-0 bg-orange-600 transition-all duration-300 ease-in-out group-hover:w-full pd-3"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right side */}
          <div className="hidden md:flex">
            <button className="flex items-center gap-2 bg-red-800 text-white px-8 py-3 rounded-full border border-black hover:bg-orange-700 transition-all font-extrabold">
              <AiOutlineUser size={22} />
              Sign In
            </button>
          </div>
        </div>
      </div>

      {/* Overlay when menu open */}
      {nav && (
        <div onClick={closeNav} className="fixed top-0 left-0 w-full h-screen bg-black/80 z-40"></div>
      )}

      {/* Sidebar */}
      <div className={`fixed top-0 ${nav ? 'left-0' : '-left-[100%]'} w-[300px] h-screen bg-amber-50 z-50 p-4 duration-500 ease-in-out`}>
        {/* Close button */}
        <AiOutlineClose onClick={closeNav} size={30} className="absolute right-4 top-4 cursor-pointer" />

        {/* Small Logo */}
        <div className="flex items-center mt-4">
          <img src={smallLogo} alt="Small Desi Logo" className="w-10 h-10 mr-2" />
          <h2 className="text-2xl font-extrabold text-[#7C2D53] font-mulish">Desi Eats</h2>
        </div>

        {/* Mobile Links */}
        <nav className="mt-10 font-mulish">
          <ul>
            <li className="text-xl py-4 flex items-center">
              <TbTruckDelivery size={25} className="mr-4" />
              Orders
            </li>
            <li className="text-xl py-4 flex items-center">
              <MdFavorite size={25} className="mr-4" />
              Favorites
            </li>
            <li className="text-xl py-4 flex items-center">
              <FaWallet size={25} className="mr-4" />
              Wallet
            </li>
            <li className="text-xl py-4 flex items-center">
              <MdHelp size={25} className="mr-4" />
              Help
            </li>
            <li className="text-xl py-4 flex items-center">
              <AiFillTag size={25} className="mr-4" />
              Promotions
            </li>
            <li className="text-xl py-4 flex items-center">
              <BsFillSaveFill size={25} className="mr-4" />
              Saved
            </li>
            <li className="text-xl py-4 flex items-center">
              <FaUserFriends size={25} className="mr-4" />
              Invite Friends
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
