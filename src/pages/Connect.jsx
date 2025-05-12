
import React, { useEffect } from "react";
import InstagramEmbed from "../components/InstagramEmbed";  
import alePic from '../assets/alejandro.JPG'; 
import video from '../assets/desivideo.mp4';
import desisquare from '../assets/desisquare.svg';
const Connect = () => {





  return (
 <div className="w-full overflow-hidden">
  {/* Blurs Container */}
      <div className="absolute inset-0 z-2 pointer-events-none">
        <div className="absolute top-300 right-0 h-[500px] w-[500px] bg-[#fe8046] opacity-50 blur-[100px] rounded-full -translate-x-[270%] translate-y-[10%]"></div>
        <div className="absolute top-[100%] left-90 h-[400px] w-[600px] bg-[rgb(247,197,61)] opacity-60 blur-[100px] rounded-full translate-x-[90%]"></div>
      
      </div>
      <div className="max-h-[500px] relative">
        {/* Overlay */}
        <div className="absolute w-full h-full max-h-[500px] bg-black/50 z-10"></div>

        {/* New Image - Not Darkened */}
        <div className="absolute w-full h-full flex justify-center items-center z-20 transform translate-x-5 translate-y-0 text-white"style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontWeight: 800 }}>
          <h1 className="text-8xl">WANT US AT YOUR CAMPUS? </h1>
        </div>

        {/* Full width stretched background image */}
          <div className="scroll-container">
        <div className="scroll-content">
          {/* First Set of Images */}
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/5acb1222bf45e445dade93edb566da757da61088?placeholderIfAbsent=true&apiKey=c11b4db426a34b60b1c49dce004317da" alt="Image 1" />
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/e4825ebdd0ac0466aadde6dbb3b44ef5527316f0?placeholderIfAbsent=true&apiKey=c11b4db426a34b60b1c49dce004317da" alt="Image 2" />
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/b5d406c5288e0edb9ee2a71d46629f3071706108?placeholderIfAbsent=true&apiKey=c11b4db426a34b60b1c49dce004317da" alt="Image 3" />
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/6a21e8029459a53cad5d5af3642b051e13afee24?placeholderIfAbsent=true&apiKey=c11b4db426a34b60b1c49dce004317da" alt="Image 4" />
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/e16a3c6538ed7e7e42e3b428e38a5859755e0e5f?placeholderIfAbsent=true&apiKey=c11b4db426a34b60b1c49dce004317da" alt="Image 5" />
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/45fb25de2b05ce9b055824037d0ef96feb00ecd7?placeholderIfAbsent=true&apiKey=c11b4db426a34b60b1c49dce004317da" alt="Image 6" />

          {/* Duplicate Set of Images */}
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/5acb1222bf45e445dade93edb566da757da61088?placeholderIfAbsent=true&apiKey=c11b4db426a34b60b1c49dce004317da" alt="Image 1" />
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/e4825ebdd0ac0466aadde6dbb3b44ef5527316f0?placeholderIfAbsent=true&apiKey=c11b4db426a34b60b1c49dce004317da" alt="Image 2" />
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/b5d406c5288e0edb9ee2a71d46629f3071706108?placeholderIfAbsent=true&apiKey=c11b4db426a34b60b1c49dce004317da" alt="Image 3" />
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/6a21e8029459a53cad5d5af3642b051e13afee24?placeholderIfAbsent=true&apiKey=c11b4db426a34b60b1c49dce004317da" alt="Image 4" />
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/e16a3c6538ed7e7e42e3b428e38a5859755e0e5f?placeholderIfAbsent=true&apiKey=c11b4db426a34b60b1c49dce004317da" alt="Image 5" />
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/45fb25de2b05ce9b055824037d0ef96feb00ecd7?placeholderIfAbsent=true&apiKey=c11b4db426a34b60b1c49dce004317da" alt="Image 6" />
        </div>
      </div>


        


      </div>


   {/* Content Section */}
      <div className="flex flex-col lg:flex-row justify-between px-10 py-6 space-y-12 lg:space-y-0 lg:space-x-16 bg-amber-50">
        
        
{/* Video Section with Text */}
<div className="flex flex-col items-center space-y-4 w-[400px] h-[500px] flex-shrink-0 translate-x-10 ">

<div 
  className="w-[380px] bg-white shadow-lg rounded-lg px-6 py-4 mx-auto text-center mb-6 z-[100]"
  style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
>
  <span className="text-3xl font-bold text-[#f16323]">LATEST NEWS:</span> <br />
  <span className="text-gray-500 text-2xl font-semibold">Desi Pub Takeover 3/26/2025</span>
</div>

  {/* Video Container */}
  <div className="w-full h-full border border-stone-800 rounded-3xl overflow-hidden z-[100]">
    <video 
      src={video} 
      autoPlay 
      loop 
      muted 
      className="w-full h-full object-cover"
    />
  </div>
</div>
       {/* Container for Image and Text */}
<div className="relative w-full h-[500px] overflow-hidden flex-shrink-0 z-[100]">

  {/* Desi Image */}
  <img 
    src={desisquare} 
    alt="food" 
    className="w-300 h-300 object-cover"
  />

  {/* Text Overlay */}
  <div className="absolute inset-0 flex justify-center items-center -translate-x-50">
    <div className="bg-[#fef4e8] shadow-lg rounded-lg p-8 w-[350px] flex flex-col items-center space-y-4">
      <span 
        className="text-sm text-gray-600 uppercase tracking-widest"
        style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontWeight: 600 }}
      >
        Make your campus a Desi Campus
      </span>

      <h2 
        className="text-3xl font-bold text-[#0e0e0e]"
        style={{ fontFamily: "'Hanken Grotesk', sans-serif" , fontWeight: 800 }}
      >
        JOIN TEAM DESI
      </h2>

      <a 
  href="mailto:desieatsus@outlook.com" 
  className="bg-[#f16323] hover:bg-yellow-400 border border-black rounded-full px-8 py-3 font-bold transition-all inline-block text-center"
  style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
>
  Contact
</a>

    </div>
  </div>
  
</div>

  
        
      </div>
     {/* Instagram Embed Section */}
<div className="bg-amber-50 py-12 flex justify-center items-center space-x-8 px-10  ">

  {/* Left Section: Logo and Text Container */}
  <div className="bg-white shadow-xl rounded-lg  p-8 flex flex-col items-center justify-center space-y-4 w-[300px] h-[300px] z-[100]">
    
    {/* Instagram Logo */}
    <img 
      src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" 
      alt="Instagram Logo" 
      className="w-[80px] h-[80px] object-contain"
    />

    {/* Follow Us Text */}
    <h2 
      className="text-3xl font-bold text-[#f16323] text-center "
      style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
    >
      FOLLOW US <br /> ON INSTAGRAM
    </h2>
  </div>

  {/* Instagram Embed */}
  <div className="ml-10 z-[100]">
    <InstagramEmbed />
  </div>
</div>


    </div>
  );
};

export default Connect;