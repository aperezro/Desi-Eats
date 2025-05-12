import React from 'react';   
import video from '../assets/video.mp4';
import alePic from '../assets/alejandro.JPG'; 
import krishPic from '../assets/krish.png'; 
import jacobPic from '../assets/jacob.jpg'; 

const About = () => {
  return (
     <div className="relative w-full min-h-screen font-mulish bg-amber-50 overflow-hidden">
      
      {/* Blurs Container */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute top-0 right-0 h-[500px] w-[500px] bg-[#fedf46] opacity-50 blur-[100px] rounded-full -translate-x-[260%] translate-y-[10%]"></div>
        <div className="absolute top-[30%] left-0 h-[400px] w-[600px] bg-[#ff3f18] opacity-60 blur-[100px] rounded-full translate-x-[90%]"></div>
        <div className="absolute top-[60%] left-[32%] h-[350px] w-[350px] bg-[#f66060] opacity-80 blur-[120px] rounded-full -translate-y-20" ></div>
        <div className="absolute bottom-0 right-160 h-[400px] w-[320px] bg-[#f16323] opacity-80 blur-[120px] rounded-full translate-x-[15%] -translate-y-40"></div>
      </div>

     {/* Hero Section */}
<section 
  className="flex flex-wrap lg:flex-nowrap items-center justify-center px-8 py-16 z-[100]" 
  style={{ fontFamily: "'Hanken Grotesk', sans-serif fontWeight: 800" }}
>
  <div className="flex-1 max-w-lg translate-x-0 translate-y-0 lg:order-1 order-2 mb-8 lg:mb-0  z-[100]">
<h1 className="text-6xl font-bold text-[#9a2446] mb-4  " style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontWeight:840 }}>OUR <br /> MISSION</h1>
    <h2 className="text-xl text-[#9a2446] mb-6 font-bold  z-[100] ">
      Boldly sharing the flavors of Indian cuisine with healthy ingredients, accessible products, and convenience.
    </h2>
    <p className="text-lg text-[#9a2446]" style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontWeight:500 }}>
      <b>Krish Khemlani</b>, a Puerto-Rican-Indian student at Babson College, founded Desi Eats, an Indian cuisine experience.
      The goal of this business is to provide a convenient way for people to consume Indian food. As you may know,
      Indian cuisine can be very complex and time-consuming to make while also being hard on the stomach. 
      With our recipes, we aim to make these <b>iconic</b> dishes more appealing to general audiences.
    </p>
   <p 
  className="text-lg text-[#9a2446]  z-[100]" 
  style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontWeight: 600 }}
>
  <br />
  Email us at{" "}
  <a 
    href="mailto:desieatsus@outlook.com" 
    className="underline transition-colors duration-300"
    style={{ color: "#9a2446" }}
    onMouseEnter={(e) => (e.target.style.color = "#fe8046")}
    onMouseLeave={(e) => (e.target.style.color = "#9a2446")}
  >
    desieatsus@outlook.com
  </a>{" "}
  if you are interested in bringing Desi Eats to your campus!
</p>

  </div>

  <div className=" border border-stone-800 rounded-3xl  w-[500px] h-[400px] flex items-center justify-center shadow-lg overflow-hidden  lg:order-2 order-1 mb-8 lg:mb-0 translate-x-20"> 
    <video 
      src={video} 
      autoPlay 
      loop 
      muted 
      className="w-full h-full object-cover"
    />
  </div>
</section>


      {/* Section */}
      <section className="py-16 px-4 text-center">
        <div className="flex flex-wrap lg:flex-col items-center">
            <h2 className="text-7xl mb-16 lg:mb-8 lg:leading-tight" style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontWeight:800 }}>Meet the Team</h2>
  
          {/* Alejandro*/}
          <div className="flex flex-col w-full justify-center mb-16 space-y-12  z-[100]">
          

            <div className="flex flex-col items-center">
              <img 
                src={alePic} 
                alt="Alejandro Pérez" 
                className="border border-stone-800 rounded-3xl w-[450px] h-[450px] object-cover mb-10"
              />
               <h2 
    className="pb-2 text-4xl tracking-tighter" style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}>Alejandro Pérez</h2>
              <span className="bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text text-3xl tracking-tight text-transparent"style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontWeight:800 }}>
                Full Stack Developer
              </span>
              <span className="text-black bg-clip-text text-xl font-semibold tracking-tight"style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}>
                Course: SE COMS 3190 Spring 2025<br></br> aperezro@iastate.edu
              </span>
            </div>


            {/*Jacob*/}
            <div className="flex flex-col items-center">
              <img 
                src={jacobPic} 
                alt="Jacob O'Neil" 
                className="border border-stone-800 rounded-3xl w-[450px] h-[450px] object-cover mb-10"
              />
              <h2 className="pb-2 text-4xl tracking-tighter"style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}>Jacob O'Neill</h2>
              <span className="bg-gradient-to-r from-red-500 to-pink-400 bg-clip-text text-3xl tracking-tight text-transparent"style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontWeight:800 }}>
                Full Stack Developer
              </span>
              <span className="text-black bg-clip-text text-xl font-semibold tracking-tight">
                Course: SE COMS 3190 Spring 2025 <br></br>Jacobo05@iastate.edu

              </span>
            </div>
          </div>

          {/* Krish */}
          <div className="w-full flex justify-center mb-8  z-[10]">
            <img 
              src={krishPic} 
              alt="Krish Khemlani" 
              className="border border-stone-800 rounded-3xl w-[450px] h-[450px] object-cover mb-10"
            />
          </div>
          <div className="w-full flex flex-col items-center z-[100]">
            <h2 className="pb-2 text-4xl tracking-tighter"style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}>Krish Khemlani</h2>
            <span className="bg-gradient-to-r from-[#f86e2e] to-[#ef1654] bg-clip-text text-3xl tracking-tight text-transparent "style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontWeight:800 }}>
              Desi Eats Founder
            </span>
            <span className="text-black bg-clip-text text-xl font-semibold tracking-tight"style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}>
                Bason College Student
              </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
